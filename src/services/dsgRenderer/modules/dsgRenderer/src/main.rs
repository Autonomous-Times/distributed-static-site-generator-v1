#![allow(non_snake_case, unused)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use marine_rs_sdk::WasmLoggerBuilder;
use marine_rs_sdk::MountedBinaryResult;
use log;
use tu_dsg_types::DsgTemplate;
use tu_dsg_types::{DsgRenderObject, DsgDns, DsgDomain, DsgPublication, DsgContentItem, TemplateData };
use cio_response_types::{AquaMarineResult, AMResponse };  
use serde_json::{Map, Value};
use std::collections::BTreeMap; 

#[macro_use]
extern crate rmp_serde as rmps;
use serde::{Deserialize, Serialize};
use rmps::{Deserializer, Serializer};

module_manifest!();

mod partials;
mod helpers;
mod renderer;
mod filesystem;

pub fn main() {
    WasmLoggerBuilder::new()
        // with_log_level can be skipped,
        // logger will be initialized with Info level in this case.
        .with_log_level(log::LevelFilter::Warn)
        .build()
        .unwrap();  
}

#[marine]
pub fn map(ro: DsgRenderObject, body_: String, content: Vec<Vec<DsgContentItem>>, publication: DsgPublication) -> AquaMarineResult {

    let mut am_result = AquaMarineResult::new();

    let mut collections: BTreeMap<String, Vec<BTreeMap<String, Value>>> = BTreeMap::new();
    let body: BTreeMap<String, Value> = serde_json::from_str(&body_).unwrap();

    let mut i = 0;
    for collection in &ro.template.collections {

        

        let mut data: Vec<BTreeMap<String, Value>> = vec!(); 

        for item in &content[i] {
            data.push(
                item.to_btreemap()
            );
        }

        if data.len() > 0 {
            collections.insert(collection.key.clone(), data);
        }
        i = i + 1;
    }

    let template_data = TemplateData {
        body,
        collections,
        base_url: "https://unamore.com".to_string(),
        assets_url:"../assets".to_string(),
        render_env: "unamore".to_string()
    };

    let mut buf = Vec::new();
    template_data.serialize(&mut Serializer::new(&mut buf)).unwrap();
    am_result.output.push(buf);

    am_result
}

#[marine]
pub fn single(ro: DsgRenderObject, td: Vec<u8>) -> AquaMarineResult {

    let mut am_result = AquaMarineResult::new();
    let mut renderer = renderer::Renderer::new(vault());

    renderer.init();

    am_result.merge(
        renderer.render_template(ro, &td)
    )
}

#[marine]
pub fn template(publication: DsgPublication, post_type: String) -> DsgTemplate {

    publication.mapping.into_iter().find( |m| m.reference == post_type).unwrap()
}

fn vault() -> String {
    let cp = marine_rs_sdk::get_call_parameters();
    format!("/tmp/vault/{}-{}", cp.particle.id, cp.particle.token)
}

