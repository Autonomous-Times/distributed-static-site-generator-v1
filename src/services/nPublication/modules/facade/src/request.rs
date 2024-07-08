use curl_effector_imports::{ CurlRequest, CurlResult, HttpHeader, curl_post};
use std::path::PathBuf;
use crate::fs;


pub fn create(data: String, rpc_url: &String, target_path: &String) -> CurlResult {

    let h1 = HttpHeader {
        name: "Content-Type".to_string(),
        value: "application/json".to_string()
    };
 
    let request = CurlRequest {
        url: rpc_url.to_string(),    
        headers: vec![h1]
    };

    let source_path = crate::vault_path("evm_body");
    
    let _ = fs::write(PathBuf::from(source_path.clone()), data.clone());

    curl_post(request, source_path, target_path.to_string())
}