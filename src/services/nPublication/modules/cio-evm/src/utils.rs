use std::sync::atomic::{AtomicUsize, Ordering};

pub static NONCE_COUNTER: AtomicUsize = AtomicUsize::new(1);

pub fn get_nonce() -> u64 {
    NONCE_COUNTER.fetch_add(1, Ordering::SeqCst) as u64
}

pub fn remove_zero_x(s: String) -> String {
    let mut i = 0;
    let mut numbah: String = "".to_string();
    for n in s.chars() {
        if i > 1 { numbah.push(n); }
        i = i + 1;
    }
    numbah
}

// pub fn address_for_from(readable: &str) -> H160 {

//     let address = remove_zero_x(readable.to_string()).parse::<Address>().unwrap();
//     address.into() 
// }


// pub fn address_for_to(readable: &str) -> NameOrAddress {

//     let address = remove_zero_x(readable.to_string()).parse::<Address>().unwrap();
//     address.into() 
// }
  

// pub fn get_transaction_count(account: &String, eth_provider_url: &String) -> U256 {
     
//     let nonce = get_nonce();
      
//     let curl_args: Vec<String> = EthRequest::new(

//       eth_provider_url.to_string(), 
//       String::from("eth_getTransactionCount"), 
//       nonce

//     ).add_transaction(vec![

//       account.to_string(),
//       String::from("latest")
//     ]);
     
//      let response = curl_request(curl_args);
//      let response = String::from_utf8(response.stdout).unwrap();
//      let response : JsonRpcResult = check_response_string(response, &nonce);
//   //   println!("{:?}", response);

//      let tx_count = remove_zero_x(response.result);

//      tx_count.parse::<U256>().unwrap()
// }

// pub fn get_transaction_count_i64(account: &String, eth_provider_url: &String) -> i64 {
     
//     let nonce = get_nonce();
      
//     let curl_args: Vec<String> = EthRequest::new(

//       eth_provider_url.to_string(), 
//       String::from("eth_getTransactionCount"), 
//       nonce

//     ).add_transaction(vec![

//       account.to_string(),
//       String::from("latest")
//     ]);
     
//      let response = curl_request(curl_args);
//      let response = String::from_utf8(response.stdout).unwrap();
//      let response : JsonRpcResult = check_response_string(response, &nonce);
//   //   println!("{:?}", response);

//      let tx_count = remove_zero_x(response.result);

//      hex_to_int(tx_count)
// }

// pub fn gas_price_for_raw_transaction(eth_provider_url: &String) -> U256 {

//     let response: JsonRpcResult = gas_price(eth_provider_url);
    
//     hex_to_int(response.result).into()
// }

// pub fn gas_price(eth_provider_url: &String) -> JsonRpcResult {

//     let nonce = get_nonce();
     
//     let curl_args: Vec<String> = EthRequest::new(
      
//       eth_provider_url.to_string(), 
//       String::from("eth_gasPrice"),
//       nonce
//     ).add_transaction(vec![

//     ]);

//     let response = curl_request(curl_args);
//     let response = String::from_utf8(response.stdout).unwrap();
//     check_response_string(response, &nonce)
// }
 

// pub fn hex_to_int(hd: String) -> i64 {
//     i64::from_str_radix(remove_zero_x(hd).as_str(), 16).unwrap()
// }

