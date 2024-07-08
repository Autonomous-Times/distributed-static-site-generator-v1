#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use cio_response_types::AMResponse;
// use curl_effector_imports::{ CurlRequest, HttpHeader, curl_post};
use std::fs;
use serde_json::Value;
use marine_rs_sdk::get_call_parameters;
use chrono::Utc;
// use std::path::PathBuf;

module_manifest!();

#[marine]
#[derive(Debug)]
pub struct EventLog {
    address: String,
    block_number: String,
    params: Vec<String>,
    transaction_hash: String
}

#[marine]
#[derive(Debug)]
pub struct AMEventLogResult {
    success: bool,
    results: Vec<EventLog>,
    error: String
}

mod request;

pub fn main() {}

#[marine]
pub fn read_from_rpc(contract_address: String, function_name: String, args: Vec<String>, rpc_url: String) -> AMResponse {

    // use_contract!(MyContract, "../../abi.json");

    println!("kukelekuu 0");

    let data = cio_evm_imports::prepare_eth_call(contract_address, function_name, args);

    println!("kukelekuu 1");

    let target_path = crate::vault_path("evm_response");
    let response = request::create(data, &rpc_url, &target_path);
    
    let timestamp = Utc::now().timestamp_millis();
    let cp = get_call_parameters();

    println!("kukelekuu 2");

    if response.success {
        let result_raw = fs::read_to_string(target_path).unwrap();
        let v: Value = serde_json::from_str(&result_raw).unwrap();

        println!("kukelekuu 3 {:?}", v);

        let result = cio_evm_imports::parse_result(v["result"].to_string().replace("\"","")); // crate::utils::remove_zero_x(v["result"].to_string());

        return AMResponse {
            success: true,
            result,
            result_raw,
            timestamp,
            host_id: cp.host_id
        }  

    } else {

        println!("kukelekuu 4");

        return AMResponse {
            success: false,
            result_raw: String::from(""),
            result: response.error,
            timestamp,
            host_id: cp.host_id
        }  
    }
}

#[marine]
pub fn create_filter(contract_address: String, topic: String, latest_block: String, rpc_url: String) -> AMResponse {

    let data = cio_evm_imports::prepare_create_filter(contract_address, topic, latest_block);

    let target_path = crate::vault_path("evm_response");
    let response = request::create(data, &rpc_url, &target_path);

    let timestamp = Utc::now().timestamp_millis();
    let cp = get_call_parameters();

    if response.success {
        let result_raw = fs::read_to_string(target_path).unwrap();
        let v: Value = serde_json::from_str(&result_raw).unwrap();

        let result = v["result"].to_string().replace("\"",""); // crate::utils::remove_zero_x(v["result"].to_string());

        return AMResponse {
            success: true,
            result,
            result_raw,
            timestamp,
            host_id: cp.host_id
        }  

    } else {

        return AMResponse {
            success: false,
            result_raw: String::from(""),
            result: response.error,
            timestamp,
            host_id: cp.host_id
        }  
    }
}

#[marine]
pub fn poll_filter(filter: String, rpc_url: String) -> AMEventLogResult {

    let mut logs: Vec<EventLog> = vec!();

    let data = cio_evm_imports::prepare_poll_filter(filter);

    let target_path = crate::vault_path("evm_response");
    let response = request::create(data, &rpc_url, &target_path);
    
    // let timestamp = Utc::now().timestamp_millis();
    // let cp = get_call_parameters();

    if response.success {
        let result_raw = fs::read_to_string(target_path.clone()).unwrap();
        let v: Value = serde_json::from_str(&result_raw).unwrap();
        
        if let Some(array) = v["result"].as_array() {

            for l in array {

                let mut log = EventLog {
                    address: l["address"].to_string().replace("\"",""),
                    block_number: l["blockNumber"].to_string().replace("\"",""),
                    params: vec!(),
                    transaction_hash: l["transactionHash"].to_string().replace("\"","")
                };

                log.params.push(
                    cio_evm_imports::decode_address(l["topics"][1].to_string().replace("\"",""))
                );

                log.params.push(
                    cio_evm_imports::decode_address(l["topics"][2].to_string().replace("\"",""))
                );

                log.params.push(
                    cio_evm_imports::decode_string(l["data"].to_string().replace("\"",""))
                );

                println!("kukeleku: {:?}",log);
        
                logs.push(log);
            }
        }

        return AMEventLogResult {
            success: true,
            results: logs,
            error: String::from("")
        }
    } else {

        return AMEventLogResult {
            success: false,
            results: logs,
            error: response.error
        }
    }
}

fn vault_path(filename: &str) -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}/{}", cp.particle.id, cp.particle.token, filename)
}