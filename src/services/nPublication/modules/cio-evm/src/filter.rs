

pub fn prepare_create_filter(contract: String, topic: String, latest_block: String) -> String {

    pub const JSON_RPC: &'static str = "2.0";
    let method = String::from("eth_newFilter");
    let from_block = latest_block; // String::from("0x1");
    let nonce = crate::utils::get_nonce();

    let params = format!("{{\"jsonrpc\":\"{}\",\"method\":\"{}\", \"params\":[{{\"fromBlock\":\"{}\",\"address\":\"{}\",\"topics\":[[\"{}\"],null,null]}}], \"id\":{}}}", JSON_RPC, method, from_block, contract, topic, nonce);

    params
}

pub fn prepare_poll_filter(filter: String) -> String {

    pub const JSON_RPC: &'static str = "2.0";
    let method = String::from("eth_getFilterChanges");
    let nonce = crate::utils::get_nonce();

    let params = format!("{{\"jsonrpc\":\"{}\",\"method\":\"{}\", \"params\":[\"{}\"], \"id\":{}}}", JSON_RPC, method, filter, nonce);

    params
}