use serde_json::Value;
use ethabi::{Function,Param,ParamType,StateMutability};
// use alloy_json_abi::{JsonAbi,AbiItem::{Function as AbiFunction, Event as AbiEvent}};
// use alloy_json_abi::Event;



pub fn parse(abi_fn: Value) -> Function {

    let mut inputs = vec![];
    let mut outputs = vec![];

    if let Some(array) = abi_fn["inputs"].as_array() {

        for input in array {

            let t: &str = &input["type"].to_string();

            let kind = match t {
                "uint256" => ParamType::Uint(256),
                &_ => ParamType::Bool
            };

            if Some(&kind).is_some() {
                inputs.push(
                    Param {
                        name: input["name"].to_string().replace("\"", ""),
                        kind
                    }
                )
            }
        }
    }

    if let Some(array) = abi_fn["outputs"].as_array() {

        for output in array {

            let t: &str = &output["type"].to_string();

            // println!("joera{:?}",t);

            let kind = match t {
                "uint256" => ParamType::Uint(256),
                "string" => ParamType::String,
                &_ => ParamType::String
            };

            if Some(&kind).is_some() {
                outputs.push(
                    Param {
                        name: output["name"].to_string().replace("\"", ""),
                        kind
                    }
                )
            }
        }
    }

    Function {
        name: abi_fn["name"].to_string().replace("\"", ""),
        inputs,
        outputs,
        constant: false,
        state_mutability: StateMutability::View,
    }

}

// pub fn event_from_abi(json: String, event_name: String) -> Vec<Event> {

//     let events: Vec<Event> = vec!();

//     let abi: JsonAbi = serde_json::from_str(&json).unwrap();

//     for item in abi.items() {
//         if let AbiEvent(ref _e) = item {
//             if Some(&event_name) == item.name() {
//                 events.push(item)
//             }
//         }
//     }

//     events 
// } 