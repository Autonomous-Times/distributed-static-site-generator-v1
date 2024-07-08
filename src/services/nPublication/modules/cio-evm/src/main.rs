#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
module_manifest!();

mod abi;
mod eth;
mod filter;
mod utils;

pub fn main() {}

#[marine]
pub fn prepare_eth_call(contract_address: String, function_name: String, args: Vec<String>) -> String {
    
    eth::call(contract_address, function_name, args)
}

#[marine]
pub fn parse_result(raw_result: String) -> String {

    eth::parse(raw_result) 
}

#[marine]
pub fn decode_address(topic: String) -> String {

    eth::decode_address_from_topic(topic).unwrap()
}

#[marine]
pub fn decode_string(topic: String) -> String {

    eth::decode_string_from_topic(topic).unwrap()
}

#[marine]
pub fn prepare_create_filter(contract_address: String, topic: String, latest_block: String) -> String {

    filter::prepare_create_filter(contract_address, topic, latest_block)
}

#[marine]
pub fn prepare_poll_filter(filter: String) -> String {

    filter::prepare_poll_filter(filter)
}

