use crate::serde_json::Value;
use cio_curl_effector_imports as curl;
use cio_curl_effector_imports::{CurlRequest,CurlResult,HttpHeader};
use std::fs;
use std::path::PathBuf;

pub fn run(url: String, sql_query: &String) -> String {

    let mut result: String = String::from("");

    let q = crate::types::TuQuery {
        query: sql_query.to_string()
    };

    let body: String = serde_json::to_string(&q).unwrap();

    let h = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };
 
    let source_path = crate::vault_path("tl_body");
    let target_path = crate::vault_path("tl_response");
    let _ = fs::write(PathBuf::from(source_path.clone()), body);

    let request = CurlRequest {
        url: url.clone(),    
        headers: vec![h]
    };

    let response = curl::curl_post(request, source_path, target_path.clone());

    if(response.success) {

        result = fs::read_to_string(target_path.clone()).unwrap();
    } 

    result
}