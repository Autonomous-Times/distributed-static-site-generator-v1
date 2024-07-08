#![allow(non_snake_case, unused)]
use log;
use marine_rs_sdk::marine;
use marine_rs_sdk::WasmLoggerBuilder;
use marine_rs_sdk::MountedBinaryResult;
use marine_rs_sdk::module_manifest;
use serde_json;
use serde_json::{json, Value};
use tu_dsg_types::{DsgAuthorData,DsgPublication,DsgRenderObject,DsgTask, DsgContentItem, DsgRipple, DsgMapped };
use std::collections::HashMap;
// use cio_response_types::AquaMarineResult;
// use tu_types::bytes::{pmEncode, pmDecode};

module_manifest!();

mod content;
mod helpers;


pub fn main() {

    WasmLoggerBuilder::new()
    // with_log_level can be skipped,
    // logger will be initialized with Info level in this case.
    .with_log_level(log::LevelFilter::Info)
    .build()
    .unwrap();
}

#[marine]
pub fn map(task: DsgTask, mappings: &str) -> DsgMapped {

    log::info!("kanarie HALLO DAN!");

    let payload : Value = serde_json::from_str(&task.payload).unwrap();

    // log::info!("kanarie payload: {:?}", payload);

    let body = content::map(
        serde_json::from_str(&mappings).unwrap(),
        serde_json::from_str(&task.payload).unwrap(),
        &task.post_type
    );

    // log::info!("kanarie body: {:?}", body);

    let item = DsgContentItem {
        title: payload["title"].to_string().replace("\"",""),
        slug: payload["slug"].to_string().replace("\"",""), // to do: force unique value 
        publication: task.publication.name.clone(),
        author: task.author.name.clone(),
        post_type: task.post_type.clone(),
        tags: payload["tags"].as_array().unwrap().iter().map( |s|  s.to_string()).collect::<Vec<_>>().join(","),
        categories: payload["categories"].as_array().unwrap().iter().map( |s| s.to_string()).collect::<Vec<_>>().join(","),
        parent: payload["parent"].to_string().replace("\"",""),
        creation_date: payload["creation_date"].to_string().replace("\"",""),
        modified_date: payload["modified_date"].to_string().replace("\"",""),
        content_cid: "".to_string()
    };

    DsgMapped {
        item: item,
        body: body   
    }
}

#[marine] 
pub fn includeCid(mut content: DsgContentItem, cid: String) -> DsgContentItem {

    println!("cid: {:?}", cid);

    content.content_cid = cid;

    content
}

#[marine]
pub fn pebble(task: DsgTask, contentItem: DsgContentItem) -> Vec<DsgRenderObject> {

    let mut renderObjects : Vec<DsgRenderObject> = vec!();

    let renderObject = DsgRenderObject {
        name: contentItem.slug.clone(),
        post_type: task.post_type.clone(),
        template : task.publication.mapping.clone().into_iter().find( |m| m.reference == task.post_type.clone()).unwrap(),
        publication_name : task.publication.name.clone(),
        domain: task.publication.domains[0].clone(),
        body_cid: contentItem.content_cid
    };

    renderObjects.push(renderObject);

    println!("pebbled");
    
    renderObjects
}

#[marine]
pub fn ripple(task: DsgTask, ripple: DsgRipple, contentItem: DsgContentItem) -> Vec<DsgRenderObject> {

    // let c : TuContentItem = serde_json::from_str(&contentItem).unwrap();

    let mut renderObjects : Vec<DsgRenderObject> = vec!();

    let rippleOject = DsgRenderObject {
        name: contentItem.slug.clone(),
        post_type: ripple.post_type.clone(),
        template : task.publication.mapping.clone().into_iter().find( |m| m.reference == ripple.post_type.clone()).unwrap(),
        publication_name : task.publication.name.clone(),
        domain: task.publication.domains[0].clone(),
        body_cid: contentItem.content_cid
    };

    renderObjects.push(rippleOject);
    
    println!("rippled");

    renderObjects

}
