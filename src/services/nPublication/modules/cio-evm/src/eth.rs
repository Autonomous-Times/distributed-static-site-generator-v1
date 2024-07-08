#[allow(unused_variables)]

use hex::{decode as hex_decode, encode as hex_encode};
use ethabi_contract::use_contract;
use ethers_core::abi::ethereum_types::H256;
use ethers_core::abi::Address;
use ethers_core::abi::{decode};
use ethers_core::abi::ParamType;
use serde_json::Value;

pub const JSON_RPC: &'static str = "2.0";

pub fn parse(raw_result: String) -> String {

    use_contract!(MyContract, "../../abi.json");

    let result = hex_decode(
        crate::utils::remove_zero_x(raw_result)
    ).unwrap();
    
    MyContract::functions::config::decode_output(&result).unwrap()

}

pub fn decode_address_from_topic(topic: String) -> Result<String, Box<dyn std::error::Error>> {

    let _topic = crate::utils::remove_zero_x(topic);

    let t = hex::decode(
        _topic
    ).unwrap();

    let hash = H256::from_slice(&t);
    // Convert the topic to a slice of bytes
    let bytes = hash.as_bytes();
    
    // Extract the last 20 bytes to get the address
    let address_bytes = &bytes[12..32];
    
    // Convert the address bytes to an Ethereum address
    let address = Address::from_slice(address_bytes);

    let full_address = format!("{:?}", address);

    Ok(full_address)
}

pub fn decode_string_from_topic(topic: String) -> Result<String, Box<dyn std::error::Error>> {

    let encoded_data = hex_decode(
        crate::utils::remove_zero_x(topic)
    ).unwrap();

    let decoded_tokens = decode(&[ParamType::String], &encoded_data).unwrap();

    Ok(decoded_tokens[0].to_string())
}

pub fn call(contract_address: String, function_name: String, _args: Vec<String>) -> String {

    let data = include_str!("../../../abi.json");
    let abi: Value = serde_json::from_str(data).unwrap(); 
    if let Some(array) = abi.as_array() {
        if let Some(&ref abi_fn) = array.iter().find(|&x| x["name"] == function_name) {

           let function = crate::abi::parse(abi_fn.clone());

            let tokens = vec![
                // Token::Uint(256.into()),
                // Token::Address("0123456789012345678901234567890123456789".parse().unwrap()),
            ];

            let nonce = crate::utils::get_nonce();

            let params = format!(
                    "0x{}", 
                    hex_encode(
                        function.encode_input(
                            &tokens
                        ).unwrap()
                    )
                );

            let data = format!("{{\"jsonrpc\":\"{}\",\"method\":\"{}\", \"params\":[{{\"to\":\"{}\",\"data\":\"{}\"}},\"latest\"], \"id\":{}}}", 
                String::from(JSON_RPC),
                String::from("eth_call"), 
                contract_address, 
                params, 
                nonce   
            );

            data

        } else {
            println!("Item not found");

            "function not found".to_string()
        }
    } else {

        "abi not found".to_string()
    }
}
