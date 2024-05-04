/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.5
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, ParticleContext as ParticleContext$$ } from '@fluencelabs/js-client';

// Making aliases to reduce chance of accidental name collision
import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$
} from '@fluencelabs/js-client';


// Functions
export const bulkUpload_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (call %init_peer_id% ("getDataSrv" "tasks") [] -tasks-arg-)
  )
  (call %init_peer_id% ("callbackSrv" "response") [true])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type BulkUploadParams = [tasks: { author: string; payload: string; post_type: string; slug: string; publication: string; }[], config?: {ttl?: number}] | [peer: IFluenceClient$$, tasks: { author: string; payload: string; post_type: string; slug: string; publication: string; }[], config?: {ttl?: number}];

export type BulkUploadResult = Promise<boolean>;

export function bulkUpload(...args: BulkUploadParams): BulkUploadResult {
    return callFunction$$(
        args,
        {
    "functionName": "bulkUpload",
    "arrow": {
        "domain": {
            "fields": {
                "tasks": {
                    "type": {
                        "name": "TuDsgPublishTaskTemp",
                        "fields": {
                            "author": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "payload": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "post_type": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "slug": {
                                "name": "string",
                                "tag": "scalar"
                            },
                            "publication": {
                                "name": "string",
                                "tag": "scalar"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        bulkUpload_script
    );
}

export const renderOnDSG_script = `
(xor
 (new $hashes
  (new $downloads
   (new $finished
    (new $workers
     (new $cids-0
      (new $winner
       (new $s-0
        (new $results
         (new $debug
          (new $job_archive_hashes
           (new $cids
            (new $queue
             (new $s-2
              (seq
               (seq
                (seq
                 (seq
                  (seq
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (seq
                          (seq
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (seq
                                        (seq
                                         (seq
                                          (seq
                                           (seq
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (seq
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (seq
                                                                  (seq
                                                                   (seq
                                                                    (seq
                                                                     (seq
                                                                      (seq
                                                                       (seq
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                                                                              (call %init_peer_id% ("getDataSrv" "tempTask") [] -tempTask-arg-)
                                                                             )
                                                                             (call %init_peer_id% ("getDataSrv" "archive_cid") [] -archive_cid-arg-)
                                                                            )
                                                                            (call %init_peer_id% ("run-console" "print") ["Starting"])
                                                                           )
                                                                           (par
                                                                            (par
                                                                             (new $option-inline
                                                                              (seq
                                                                               (seq
                                                                                (new %ContentWorkerV1_obj_map
                                                                                 (seq
                                                                                  (seq
                                                                                   (seq
                                                                                    (seq
                                                                                     (seq
                                                                                      (seq
                                                                                       (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj_map)
                                                                                       (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj_map)
                                                                                      )
                                                                                      (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj_map)
                                                                                     )
                                                                                     (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj_map)
                                                                                    )
                                                                                    (ap ("matched" true) %ContentWorkerV1_obj_map)
                                                                                   )
                                                                                   (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj_map)
                                                                                  )
                                                                                  (canon %init_peer_id% %ContentWorkerV1_obj_map  ContentWorkerV1_obj)
                                                                                 )
                                                                                )
                                                                                (xor
                                                                                 (ap ContentWorkerV1_obj $option-inline)
                                                                                 (null)
                                                                                )
                                                                               )
                                                                               (canon %init_peer_id% $option-inline  #option-inline-0)
                                                                              )
                                                                             )
                                                                             (new $option-inline-1
                                                                              (seq
                                                                               (seq
                                                                                (new %RenderWorkerV0_obj_map
                                                                                 (seq
                                                                                  (seq
                                                                                   (seq
                                                                                    (seq
                                                                                     (seq
                                                                                      (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj_map)
                                                                                      (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj_map)
                                                                                     )
                                                                                     (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj_map)
                                                                                    )
                                                                                    (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj_map)
                                                                                   )
                                                                                   (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj_map)
                                                                                  )
                                                                                  (canon %init_peer_id% %RenderWorkerV0_obj_map  RenderWorkerV0_obj)
                                                                                 )
                                                                                )
                                                                                (xor
                                                                                 (ap RenderWorkerV0_obj $option-inline-1)
                                                                                 (null)
                                                                                )
                                                                               )
                                                                               (canon %init_peer_id% $option-inline-1  #option-inline-1-0)
                                                                              )
                                                                             )
                                                                            )
                                                                            (new $option-inline-2
                                                                             (seq
                                                                              (seq
                                                                               (new %WebHostWorkerV0_obj_map
                                                                                (seq
                                                                                 (seq
                                                                                  (seq
                                                                                   (seq
                                                                                    (seq
                                                                                     (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj_map)
                                                                                     (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj_map)
                                                                                    )
                                                                                    (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj_map)
                                                                                   )
                                                                                   (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj_map)
                                                                                  )
                                                                                  (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj_map)
                                                                                 )
                                                                                 (canon %init_peer_id% %WebHostWorkerV0_obj_map  WebHostWorkerV0_obj)
                                                                                )
                                                                               )
                                                                               (xor
                                                                                (ap WebHostWorkerV0_obj $option-inline-2)
                                                                                (null)
                                                                               )
                                                                              )
                                                                              (canon %init_peer_id% $option-inline-2  #option-inline-2-0)
                                                                             )
                                                                            )
                                                                           )
                                                                          )
                                                                          (new %Deals_obj_map
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (ap ("contentWorkerV1" #option-inline-0) %Deals_obj_map)
                                                                              (ap ("renderWorkerV0" #option-inline-1-0) %Deals_obj_map)
                                                                             )
                                                                             (ap ("webHostWorkerV0" #option-inline-2-0) %Deals_obj_map)
                                                                            )
                                                                            (canon %init_peer_id% %Deals_obj_map  Deals_obj)
                                                                           )
                                                                          )
                                                                         )
                                                                         (ap Deals_obj.$.contentWorkerV1 Deals_obj_flat)
                                                                        )
                                                                        (ap Deals_obj_flat.$.[0].dealIdOriginal Deals_obj_flat_flat)
                                                                       )
                                                                       (xor
                                                                        (seq
                                                                         (seq
                                                                          (call -relay- ("subnet" "resolve") [Deals_obj_flat_flat] ret)
                                                                          (new -if-error-
                                                                           (xor
                                                                            (seq
                                                                             (match ret.$.success false
                                                                              (seq
                                                                               (new $array-inline
                                                                                (seq
                                                                                 (seq
                                                                                  (ap "Failed to resolve subnet: " $array-inline)
                                                                                  (ap ret.$.error $array-inline)
                                                                                 )
                                                                                 (canon -relay- $array-inline  #array-inline-0)
                                                                                )
                                                                               )
                                                                               (call -relay- ("run-console" "print") [#array-inline-0])
                                                                              )
                                                                             )
                                                                             (new $-hop-
                                                                              (new #-hopc-
                                                                               (canon -relay- $-hop-  #-hopc-)
                                                                              )
                                                                             )
                                                                            )
                                                                            (seq
                                                                             (seq
                                                                              (ap :error: -if-error-)
                                                                              (xor
                                                                               (seq
                                                                                (match :error:.$.error_code 10001
                                                                                 (null)
                                                                                )
                                                                                (new $-hop-
                                                                                 (new #-hopc-
                                                                                  (canon -relay- $-hop-  #-hopc-)
                                                                                 )
                                                                                )
                                                                               )
                                                                               (fail -if-error-)
                                                                              )
                                                                             )
                                                                             (new $-hop-
                                                                              (new #-hopc-
                                                                               (canon -relay- $-hop-  #-hopc-)
                                                                              )
                                                                             )
                                                                            )
                                                                           )
                                                                          )
                                                                         )
                                                                         (new $-hop-
                                                                          (new #-hopc-
                                                                           (canon -relay- $-hop-  #-hopc-)
                                                                          )
                                                                         )
                                                                        )
                                                                        (fail :error:)
                                                                       )
                                                                      )
                                                                      (ap ret.$.workers ret_flat)
                                                                     )
                                                                     (xor
                                                                      (seq
                                                                       (seq
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (new $-hop-
                                                                            (new #-hopc-
                                                                             (canon -relay- $-hop-  #-hopc-)
                                                                            )
                                                                           )
                                                                           (new $-hop-
                                                                            (new #-hopc-
                                                                             (canon ret_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                            )
                                                                           )
                                                                          )
                                                                          (call ret_flat.$.[0].worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" -tempTask-arg-.$.author] ret-0)
                                                                         )
                                                                         (ap ret-0 $s-0)
                                                                        )
                                                                        (new $-hop-
                                                                         (new #-hopc-
                                                                          (canon ret_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                         )
                                                                        )
                                                                       )
                                                                       (new $-hop-
                                                                        (new #-hopc-
                                                                         (canon -relay- $-hop-  #-hopc-)
                                                                        )
                                                                       )
                                                                      )
                                                                      (seq
                                                                       (seq
                                                                        (seq
                                                                         (new $-hop-
                                                                          (new #-hopc-
                                                                           (canon ret_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                          )
                                                                         )
                                                                         (new $-hop-
                                                                          (new #-hopc-
                                                                           (canon -relay- $-hop-  #-hopc-)
                                                                          )
                                                                         )
                                                                        )
                                                                        (new $-hop-
                                                                         (new #-hopc-
                                                                          (canon %init_peer_id% $-hop-  #-hopc-)
                                                                         )
                                                                        )
                                                                       )
                                                                       (fail :error:)
                                                                      )
                                                                     )
                                                                    )
                                                                    (new $s-0_test
                                                                     (seq
                                                                      (seq
                                                                       (fold $s-0 s-0_fold_var
                                                                        (seq
                                                                         (seq
                                                                          (ap s-0_fold_var $s-0_test)
                                                                          (canon %init_peer_id% $s-0_test  #s-0_iter_canon)
                                                                         )
                                                                         (xor
                                                                          (match #s-0_iter_canon.length 1
                                                                           (null)
                                                                          )
                                                                          (next s-0_fold_var)
                                                                         )
                                                                        )
                                                                        (never)
                                                                       )
                                                                       (canon %init_peer_id% $s-0_test  #s-0_result_canon)
                                                                      )
                                                                      (ap #s-0_result_canon s-0_gate)
                                                                     )
                                                                    )
                                                                   )
                                                                   (call %init_peer_id% ("json" "parse") [s-0_gate.$.[0]] ret-1)
                                                                  )
                                                                  (par
                                                                   (par
                                                                    (new $option-inline-3
                                                                     (seq
                                                                      (seq
                                                                       (new %ContentWorkerV1_obj-0_map
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-0_map)
                                                                              (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-0_map)
                                                                             )
                                                                             (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-0_map)
                                                                            )
                                                                            (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj-0_map)
                                                                           )
                                                                           (ap ("matched" true) %ContentWorkerV1_obj-0_map)
                                                                          )
                                                                          (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj-0_map)
                                                                         )
                                                                         (canon %init_peer_id% %ContentWorkerV1_obj-0_map  ContentWorkerV1_obj-0)
                                                                        )
                                                                       )
                                                                       (xor
                                                                        (ap ContentWorkerV1_obj-0 $option-inline-3)
                                                                        (null)
                                                                       )
                                                                      )
                                                                      (canon %init_peer_id% $option-inline-3  #option-inline-3-0)
                                                                     )
                                                                    )
                                                                    (new $option-inline-4
                                                                     (seq
                                                                      (seq
                                                                       (new %RenderWorkerV0_obj-0_map
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-0_map)
                                                                             (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-0_map)
                                                                            )
                                                                            (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-0_map)
                                                                           )
                                                                           (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj-0_map)
                                                                          )
                                                                          (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj-0_map)
                                                                         )
                                                                         (canon %init_peer_id% %RenderWorkerV0_obj-0_map  RenderWorkerV0_obj-0)
                                                                        )
                                                                       )
                                                                       (xor
                                                                        (ap RenderWorkerV0_obj-0 $option-inline-4)
                                                                        (null)
                                                                       )
                                                                      )
                                                                      (canon %init_peer_id% $option-inline-4  #option-inline-4-0)
                                                                     )
                                                                    )
                                                                   )
                                                                   (new $option-inline-5
                                                                    (seq
                                                                     (seq
                                                                      (new %WebHostWorkerV0_obj-0_map
                                                                       (seq
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj-0_map)
                                                                            (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj-0_map)
                                                                           )
                                                                           (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj-0_map)
                                                                          )
                                                                          (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj-0_map)
                                                                         )
                                                                         (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj-0_map)
                                                                        )
                                                                        (canon %init_peer_id% %WebHostWorkerV0_obj-0_map  WebHostWorkerV0_obj-0)
                                                                       )
                                                                      )
                                                                      (xor
                                                                       (ap WebHostWorkerV0_obj-0 $option-inline-5)
                                                                       (null)
                                                                      )
                                                                     )
                                                                     (canon %init_peer_id% $option-inline-5  #option-inline-5-0)
                                                                    )
                                                                   )
                                                                  )
                                                                 )
                                                                 (new %Deals_obj-0_map
                                                                  (seq
                                                                   (seq
                                                                    (seq
                                                                     (ap ("contentWorkerV1" #option-inline-3-0) %Deals_obj-0_map)
                                                                     (ap ("renderWorkerV0" #option-inline-4-0) %Deals_obj-0_map)
                                                                    )
                                                                    (ap ("webHostWorkerV0" #option-inline-5-0) %Deals_obj-0_map)
                                                                   )
                                                                   (canon %init_peer_id% %Deals_obj-0_map  Deals_obj-0)
                                                                  )
                                                                 )
                                                                )
                                                                (ap Deals_obj-0.$.contentWorkerV1 Deals_obj-0_flat)
                                                               )
                                                               (ap Deals_obj-0_flat.$.[0].dealIdOriginal Deals_obj-0_flat_flat)
                                                              )
                                                              (xor
                                                               (seq
                                                                (seq
                                                                 (call -relay- ("subnet" "resolve") [Deals_obj-0_flat_flat] ret-2)
                                                                 (new -if-error-
                                                                  (xor
                                                                   (seq
                                                                    (match ret-2.$.success false
                                                                     (seq
                                                                      (new $array-inline-1
                                                                       (seq
                                                                        (seq
                                                                         (ap "Failed to resolve subnet: " $array-inline-1)
                                                                         (ap ret-2.$.error $array-inline-1)
                                                                        )
                                                                        (canon -relay- $array-inline-1  #array-inline-1-0)
                                                                       )
                                                                      )
                                                                      (call -relay- ("run-console" "print") [#array-inline-1-0])
                                                                     )
                                                                    )
                                                                    (new $-hop-
                                                                     (new #-hopc-
                                                                      (canon -relay- $-hop-  #-hopc-)
                                                                     )
                                                                    )
                                                                   )
                                                                   (seq
                                                                    (seq
                                                                     (ap :error: -if-error-)
                                                                     (xor
                                                                      (seq
                                                                       (match :error:.$.error_code 10001
                                                                        (null)
                                                                       )
                                                                       (new $-hop-
                                                                        (new #-hopc-
                                                                         (canon -relay- $-hop-  #-hopc-)
                                                                        )
                                                                       )
                                                                      )
                                                                      (fail -if-error-)
                                                                     )
                                                                    )
                                                                    (new $-hop-
                                                                     (new #-hopc-
                                                                      (canon -relay- $-hop-  #-hopc-)
                                                                     )
                                                                    )
                                                                   )
                                                                  )
                                                                 )
                                                                )
                                                                (new $-hop-
                                                                 (new #-hopc-
                                                                  (canon -relay- $-hop-  #-hopc-)
                                                                 )
                                                                )
                                                               )
                                                               (fail :error:)
                                                              )
                                                             )
                                                             (ap ret-2.$.workers ret-2_flat)
                                                            )
                                                            (xor
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (seq
                                                                  (new $-hop-
                                                                   (new #-hopc-
                                                                    (canon -relay- $-hop-  #-hopc-)
                                                                   )
                                                                  )
                                                                  (new $-hop-
                                                                   (new #-hopc-
                                                                    (canon ret-2_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                   )
                                                                  )
                                                                 )
                                                                 (call ret-2_flat.$.[0].worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" -tempTask-arg-.$.publication] ret-3)
                                                                )
                                                                (ap ret-3 $s-2)
                                                               )
                                                               (new $-hop-
                                                                (new #-hopc-
                                                                 (canon ret-2_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                )
                                                               )
                                                              )
                                                              (new $-hop-
                                                               (new #-hopc-
                                                                (canon -relay- $-hop-  #-hopc-)
                                                               )
                                                              )
                                                             )
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (new $-hop-
                                                                 (new #-hopc-
                                                                  (canon ret-2_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                 )
                                                                )
                                                                (new $-hop-
                                                                 (new #-hopc-
                                                                  (canon -relay- $-hop-  #-hopc-)
                                                                 )
                                                                )
                                                               )
                                                               (new $-hop-
                                                                (new #-hopc-
                                                                 (canon %init_peer_id% $-hop-  #-hopc-)
                                                                )
                                                               )
                                                              )
                                                              (fail :error:)
                                                             )
                                                            )
                                                           )
                                                           (new $s-2_test
                                                            (seq
                                                             (seq
                                                              (fold $s-2 s-2_fold_var
                                                               (seq
                                                                (seq
                                                                 (ap s-2_fold_var $s-2_test)
                                                                 (canon %init_peer_id% $s-2_test  #s-2_iter_canon)
                                                                )
                                                                (xor
                                                                 (match #s-2_iter_canon.length 1
                                                                  (null)
                                                                 )
                                                                 (next s-2_fold_var)
                                                                )
                                                               )
                                                               (never)
                                                              )
                                                              (canon %init_peer_id% $s-2_test  #s-2_result_canon)
                                                             )
                                                             (ap #s-2_result_canon s-2_gate)
                                                            )
                                                           )
                                                          )
                                                          (call %init_peer_id% ("json" "parse") [s-2_gate.$.[0]] ret-4)
                                                         )
                                                         (new %TuDsgPublishTask_obj_map
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (ap ("author" ret-1) %TuDsgPublishTask_obj_map)
                                                               (ap ("payload" -tempTask-arg-.$.payload) %TuDsgPublishTask_obj_map)
                                                              )
                                                              (ap ("post_type" -tempTask-arg-.$.post_type) %TuDsgPublishTask_obj_map)
                                                             )
                                                             (ap ("publication" ret-4) %TuDsgPublishTask_obj_map)
                                                            )
                                                            (ap ("slug" -tempTask-arg-.$.slug) %TuDsgPublishTask_obj_map)
                                                           )
                                                           (canon %init_peer_id% %TuDsgPublishTask_obj_map  TuDsgPublishTask_obj)
                                                          )
                                                         )
                                                        )
                                                        (call %init_peer_id% ("run-console" "print") [TuDsgPublishTask_obj])
                                                       )
                                                       (par
                                                        (par
                                                         (new $option-inline-6
                                                          (seq
                                                           (seq
                                                            (new %ContentWorkerV1_obj-1_map
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (seq
                                                                  (seq
                                                                   (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-1_map)
                                                                   (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-1_map)
                                                                  )
                                                                  (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-1_map)
                                                                 )
                                                                 (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj-1_map)
                                                                )
                                                                (ap ("matched" true) %ContentWorkerV1_obj-1_map)
                                                               )
                                                               (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj-1_map)
                                                              )
                                                              (canon %init_peer_id% %ContentWorkerV1_obj-1_map  ContentWorkerV1_obj-1)
                                                             )
                                                            )
                                                            (xor
                                                             (ap ContentWorkerV1_obj-1 $option-inline-6)
                                                             (null)
                                                            )
                                                           )
                                                           (canon %init_peer_id% $option-inline-6  #option-inline-6-0)
                                                          )
                                                         )
                                                         (new $option-inline-7
                                                          (seq
                                                           (seq
                                                            (new %RenderWorkerV0_obj-1_map
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (seq
                                                                  (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-1_map)
                                                                  (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-1_map)
                                                                 )
                                                                 (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-1_map)
                                                                )
                                                                (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj-1_map)
                                                               )
                                                               (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj-1_map)
                                                              )
                                                              (canon %init_peer_id% %RenderWorkerV0_obj-1_map  RenderWorkerV0_obj-1)
                                                             )
                                                            )
                                                            (xor
                                                             (ap RenderWorkerV0_obj-1 $option-inline-7)
                                                             (null)
                                                            )
                                                           )
                                                           (canon %init_peer_id% $option-inline-7  #option-inline-7-0)
                                                          )
                                                         )
                                                        )
                                                        (new $option-inline-8
                                                         (seq
                                                          (seq
                                                           (new %WebHostWorkerV0_obj-1_map
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj-1_map)
                                                                 (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj-1_map)
                                                                )
                                                                (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj-1_map)
                                                               )
                                                               (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj-1_map)
                                                              )
                                                              (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj-1_map)
                                                             )
                                                             (canon %init_peer_id% %WebHostWorkerV0_obj-1_map  WebHostWorkerV0_obj-1)
                                                            )
                                                           )
                                                           (xor
                                                            (ap WebHostWorkerV0_obj-1 $option-inline-8)
                                                            (null)
                                                           )
                                                          )
                                                          (canon %init_peer_id% $option-inline-8  #option-inline-8-0)
                                                         )
                                                        )
                                                       )
                                                      )
                                                      (new %Deals_obj-1_map
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (ap ("contentWorkerV1" #option-inline-6-0) %Deals_obj-1_map)
                                                          (ap ("renderWorkerV0" #option-inline-7-0) %Deals_obj-1_map)
                                                         )
                                                         (ap ("webHostWorkerV0" #option-inline-8-0) %Deals_obj-1_map)
                                                        )
                                                        (canon %init_peer_id% %Deals_obj-1_map  Deals_obj-1)
                                                       )
                                                      )
                                                     )
                                                     (ap Deals_obj-1.$.contentWorkerV1 Deals_obj-1_flat)
                                                    )
                                                    (ap Deals_obj-1_flat.$.[0].dealIdOriginal Deals_obj-1_flat_flat)
                                                   )
                                                   (xor
                                                    (seq
                                                     (call -relay- ("subnet" "resolve") [Deals_obj-1_flat_flat] ret-5)
                                                     (new -if-error-
                                                      (xor
                                                       (match ret-5.$.success false
                                                        (seq
                                                         (new $array-inline-2
                                                          (seq
                                                           (seq
                                                            (ap "Failed to resolve subnet: " $array-inline-2)
                                                            (ap ret-5.$.error $array-inline-2)
                                                           )
                                                           (canon -relay- $array-inline-2  #array-inline-2-0)
                                                          )
                                                         )
                                                         (call -relay- ("run-console" "print") [#array-inline-2-0])
                                                        )
                                                       )
                                                       (seq
                                                        (ap :error: -if-error-)
                                                        (xor
                                                         (match :error:.$.error_code 10001
                                                          (null)
                                                         )
                                                         (fail -if-error-)
                                                        )
                                                       )
                                                      )
                                                     )
                                                    )
                                                    (fail :error:)
                                                   )
                                                  )
                                                  (ap ret-5.$.workers ret-5_flat)
                                                 )
                                                 (xor
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (seq
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (seq
                                                                  (seq
                                                                   (seq
                                                                    (seq
                                                                     (seq
                                                                      (seq
                                                                       (seq
                                                                        (seq
                                                                         (seq
                                                                          (seq
                                                                           (seq
                                                                            (seq
                                                                             (seq
                                                                              (seq
                                                                               (seq
                                                                                (seq
                                                                                 (seq
                                                                                  (seq
                                                                                   (seq
                                                                                    (seq
                                                                                     (seq
                                                                                      (seq
                                                                                       (seq
                                                                                        (seq
                                                                                         (seq
                                                                                          (seq
                                                                                           (seq
                                                                                            (new $-hop-
                                                                                             (new #-hopc-
                                                                                              (canon -relay- $-hop-  #-hopc-)
                                                                                             )
                                                                                            )
                                                                                            (new $-hop-
                                                                                             (new #-hopc-
                                                                                              (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                                             )
                                                                                            )
                                                                                           )
                                                                                           (new $-hop-
                                                                                            (new #-hopc-
                                                                                             (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                                            )
                                                                                           )
                                                                                          )
                                                                                          (new $-hop-
                                                                                           (new #-hopc-
                                                                                            (canon -relay- $-hop-  #-hopc-)
                                                                                           )
                                                                                          )
                                                                                         )
                                                                                         (call %init_peer_id% ("run-console" "print") ["0"])
                                                                                        )
                                                                                        (new $-hop-
                                                                                         (new #-hopc-
                                                                                          (canon -relay- $-hop-  #-hopc-)
                                                                                         )
                                                                                        )
                                                                                       )
                                                                                       (new $-hop-
                                                                                        (new #-hopc-
                                                                                         (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                                        )
                                                                                       )
                                                                                      )
                                                                                      (call ret-5_flat.$.[0].worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" TuDsgPublishTask_obj.$.author.content_mappings] ret-6)
                                                                                     )
                                                                                     (new $-hop-
                                                                                      (new #-hopc-
                                                                                       (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                                      )
                                                                                     )
                                                                                    )
                                                                                    (new $-hop-
                                                                                     (new #-hopc-
                                                                                      (canon -relay- $-hop-  #-hopc-)
                                                                                     )
                                                                                    )
                                                                                   )
                                                                                   (call %init_peer_id% ("run-console" "print") ["1"])
                                                                                  )
                                                                                  (new $-hop-
                                                                                   (new #-hopc-
                                                                                    (canon -relay- $-hop-  #-hopc-)
                                                                                   )
                                                                                  )
                                                                                 )
                                                                                 (new $-hop-
                                                                                  (new #-hopc-
                                                                                   (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                                  )
                                                                                 )
                                                                                )
                                                                                (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "map") [TuDsgPublishTask_obj ret-6] ret-7)
                                                                               )
                                                                               (new $-hop-
                                                                                (new #-hopc-
                                                                                 (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                                )
                                                                               )
                                                                              )
                                                                              (new $-hop-
                                                                               (new #-hopc-
                                                                                (canon -relay- $-hop-  #-hopc-)
                                                                               )
                                                                              )
                                                                             )
                                                                             (call %init_peer_id% ("run-console" "print") ["2"])
                                                                            )
                                                                            (new $-hop-
                                                                             (new #-hopc-
                                                                              (canon -relay- $-hop-  #-hopc-)
                                                                             )
                                                                            )
                                                                           )
                                                                           (new $-hop-
                                                                            (new #-hopc-
                                                                             (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                            )
                                                                           )
                                                                          )
                                                                          (call ret-5_flat.$.[0].worker_id.[0] ("cioPinata" "addAsFile") [ret-7.$.body ret-7.$.item.slug "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MzNhYjNkMS02YTZjLTQzMGUtODhkZC03Yzc0Y2MyZmQzMDkiLCJlbWFpbCI6ImpvZXJhQGpvZXJhbXVsZGVycy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNGZhNDRkZmU0NGIyMDcyMmZlYjciLCJzY29wZWRLZXlTZWNyZXQiOiI4MTc0YTJjOTc5OGQ2MjU4MzA0NTQ2NzgyZDAxMTUyNDJkNjlhODlhNDI2MWRkNWQ5N2M5NzRiOGZiNWMzYWVlIiwiaWF0IjoxNzEzMzQ1ODE0fQ.88EHF4U77_mU_RyJXMNYIhDaJ0m6AkXqRCw6rflmDow"] ret-8)
                                                                         )
                                                                         (new $-hop-
                                                                          (new #-hopc-
                                                                           (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                          )
                                                                         )
                                                                        )
                                                                        (new $-hop-
                                                                         (new #-hopc-
                                                                          (canon -relay- $-hop-  #-hopc-)
                                                                         )
                                                                        )
                                                                       )
                                                                       (call %init_peer_id% ("run-console" "print") ["3"])
                                                                      )
                                                                      (new $-hop-
                                                                       (new #-hopc-
                                                                        (canon -relay- $-hop-  #-hopc-)
                                                                       )
                                                                      )
                                                                     )
                                                                     (new $-hop-
                                                                      (new #-hopc-
                                                                       (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                      )
                                                                     )
                                                                    )
                                                                    (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "includeCid") [ret-7.$.item ret-8.$.result] ret-9)
                                                                   )
                                                                   (new $-hop-
                                                                    (new #-hopc-
                                                                     (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                    )
                                                                   )
                                                                  )
                                                                  (new $-hop-
                                                                   (new #-hopc-
                                                                    (canon -relay- $-hop-  #-hopc-)
                                                                   )
                                                                  )
                                                                 )
                                                                 (call %init_peer_id% ("run-console" "print") [ret-9])
                                                                )
                                                                (new $-hop-
                                                                 (new #-hopc-
                                                                  (canon -relay- $-hop-  #-hopc-)
                                                                 )
                                                                )
                                                               )
                                                               (new $-hop-
                                                                (new #-hopc-
                                                                 (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                                )
                                                               )
                                                              )
                                                              (call ret-5_flat.$.[0].worker_id.[0] ("tuContentStore" "insert") [ret-9 TuDsgPublishTask_obj.$.publication.table "https://tableland.transport-union.dev"] ret-10)
                                                             )
                                                             (ap ret-10 $results)
                                                            )
                                                            (new $-hop-
                                                             (new #-hopc-
                                                              (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                             )
                                                            )
                                                           )
                                                           (new $-hop-
                                                            (new #-hopc-
                                                             (canon -relay- $-hop-  #-hopc-)
                                                            )
                                                           )
                                                          )
                                                          (call %init_peer_id% ("run-console" "print") ["3b"])
                                                         )
                                                         (new $-hop-
                                                          (new #-hopc-
                                                           (canon -relay- $-hop-  #-hopc-)
                                                          )
                                                         )
                                                        )
                                                        (new $-hop-
                                                         (new #-hopc-
                                                          (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                         )
                                                        )
                                                       )
                                                       (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "pebble") [TuDsgPublishTask_obj ret-9] ret-11)
                                                      )
                                                      (ap ret-11 $queue)
                                                     )
                                                     (fold ret-11.$.[0].template.ripples ripple-0
                                                      (seq
                                                       (seq
                                                        (call ret-5_flat.$.[0].worker_id.[0] ("tuContentStore" "queryRipple") [ripple-0 TuDsgPublishTask_obj.$.publication.table "https://tableland.transport-union.dev"] ret-12)
                                                        (fold ret-12 item-0
                                                         (seq
                                                          (seq
                                                           (call ret-5_flat.$.[0].worker_id.[0] ("tuDsgContent" "ripple") [TuDsgPublishTask_obj ripple-0 item-0] ret-13)
                                                           (ap ret-13 $queue)
                                                          )
                                                          (next item-0)
                                                         )
                                                         (null)
                                                        )
                                                       )
                                                       (next ripple-0)
                                                      )
                                                      (null)
                                                     )
                                                    )
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                     )
                                                    )
                                                   )
                                                   (new $-hop-
                                                    (new #-hopc-
                                                     (canon -relay- $-hop-  #-hopc-)
                                                    )
                                                   )
                                                  )
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (new $-hop-
                                                      (new #-hopc-
                                                       (canon ret-5_flat.$.[0].host_id $-hop-  #-hopc-)
                                                      )
                                                     )
                                                     (new $-hop-
                                                      (new #-hopc-
                                                       (canon -relay- $-hop-  #-hopc-)
                                                      )
                                                     )
                                                    )
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon %init_peer_id% $-hop-  #-hopc-)
                                                     )
                                                    )
                                                   )
                                                   (fail :error:)
                                                  )
                                                 )
                                                )
                                                (canon %init_peer_id% $queue  #queue_canon)
                                               )
                                               (call %init_peer_id% ("run-console" "print") [#queue_canon])
                                              )
                                              (par
                                               (seq
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (par
                                                       (par
                                                        (new $option-inline-9
                                                         (seq
                                                          (seq
                                                           (new %ContentWorkerV1_obj-2_map
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (seq
                                                                  (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-2_map)
                                                                  (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-2_map)
                                                                 )
                                                                 (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-2_map)
                                                                )
                                                                (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj-2_map)
                                                               )
                                                               (ap ("matched" true) %ContentWorkerV1_obj-2_map)
                                                              )
                                                              (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj-2_map)
                                                             )
                                                             (canon %init_peer_id% %ContentWorkerV1_obj-2_map  ContentWorkerV1_obj-2)
                                                            )
                                                           )
                                                           (xor
                                                            (ap ContentWorkerV1_obj-2 $option-inline-9)
                                                            (null)
                                                           )
                                                          )
                                                          (canon %init_peer_id% $option-inline-9  #option-inline-9-0)
                                                         )
                                                        )
                                                        (new $option-inline-10
                                                         (seq
                                                          (seq
                                                           (new %RenderWorkerV0_obj-2_map
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-2_map)
                                                                 (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-2_map)
                                                                )
                                                                (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-2_map)
                                                               )
                                                               (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj-2_map)
                                                              )
                                                              (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj-2_map)
                                                             )
                                                             (canon %init_peer_id% %RenderWorkerV0_obj-2_map  RenderWorkerV0_obj-2)
                                                            )
                                                           )
                                                           (xor
                                                            (ap RenderWorkerV0_obj-2 $option-inline-10)
                                                            (null)
                                                           )
                                                          )
                                                          (canon %init_peer_id% $option-inline-10  #option-inline-10-0)
                                                         )
                                                        )
                                                       )
                                                       (new $option-inline-11
                                                        (seq
                                                         (seq
                                                          (new %WebHostWorkerV0_obj-2_map
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj-2_map)
                                                                (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj-2_map)
                                                               )
                                                               (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj-2_map)
                                                              )
                                                              (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj-2_map)
                                                             )
                                                             (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj-2_map)
                                                            )
                                                            (canon %init_peer_id% %WebHostWorkerV0_obj-2_map  WebHostWorkerV0_obj-2)
                                                           )
                                                          )
                                                          (xor
                                                           (ap WebHostWorkerV0_obj-2 $option-inline-11)
                                                           (null)
                                                          )
                                                         )
                                                         (canon %init_peer_id% $option-inline-11  #option-inline-11-0)
                                                        )
                                                       )
                                                      )
                                                      (new %Deals_obj-2_map
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (ap ("contentWorkerV1" #option-inline-9-0) %Deals_obj-2_map)
                                                          (ap ("renderWorkerV0" #option-inline-10-0) %Deals_obj-2_map)
                                                         )
                                                         (ap ("webHostWorkerV0" #option-inline-11-0) %Deals_obj-2_map)
                                                        )
                                                        (canon %init_peer_id% %Deals_obj-2_map  Deals_obj-2)
                                                       )
                                                      )
                                                     )
                                                     (ap Deals_obj-2.$.renderWorkerV0 Deals_obj-2_flat)
                                                    )
                                                    (ap Deals_obj-2_flat.$.[0].dealIdOriginal Deals_obj-2_flat_flat)
                                                   )
                                                   (xor
                                                    (call -relay- ("subnet" "resolve") [Deals_obj-2_flat_flat] ret-14)
                                                    (fail :error:)
                                                   )
                                                  )
                                                  (new -if-error-
                                                   (xor
                                                    (seq
                                                     (match ret-14.$.success false
                                                      (seq
                                                       (new $array-inline-3
                                                        (seq
                                                         (seq
                                                          (ap "Failed to resolve subnet: " $array-inline-3)
                                                          (ap ret-14.$.error $array-inline-3)
                                                         )
                                                         (canon %init_peer_id% $array-inline-3  #array-inline-3-0)
                                                        )
                                                       )
                                                       (call %init_peer_id% ("run-console" "print") [#array-inline-3-0])
                                                      )
                                                     )
                                                     (new $-hop-
                                                      (new #-hopc-
                                                       (canon -relay- $-hop-  #-hopc-)
                                                      )
                                                     )
                                                    )
                                                    (seq
                                                     (seq
                                                      (ap :error: -if-error-)
                                                      (xor
                                                       (seq
                                                        (match :error:.$.error_code 10001
                                                         (null)
                                                        )
                                                        (new $-hop-
                                                         (new #-hopc-
                                                          (canon -relay- $-hop-  #-hopc-)
                                                         )
                                                        )
                                                       )
                                                       (fail -if-error-)
                                                      )
                                                     )
                                                     (new $-hop-
                                                      (new #-hopc-
                                                       (canon -relay- $-hop-  #-hopc-)
                                                      )
                                                     )
                                                    )
                                                   )
                                                  )
                                                 )
                                                 (ap ret-14.$.workers ret-14_flat)
                                                )
                                                (fold ret-14_flat rw-0
                                                 (par
                                                  (xor
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (seq
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (new $-hop-
                                                                 (new #-hopc-
                                                                  (canon -relay- $-hop-  #-hopc-)
                                                                 )
                                                                )
                                                                (new $-hop-
                                                                 (new #-hopc-
                                                                  (canon rw-0.$.host_id $-hop-  #-hopc-)
                                                                 )
                                                                )
                                                               )
                                                               (call rw-0.$.worker_id.[0] ("cioKubo" "getRecursive") ["/dns4/ipfs/tcp/5001" -archive_cid-arg- TuDsgPublishTask_obj.$.publication.name] ret-15)
                                                              )
                                                              (ap ret-15 $downloads)
                                                             )
                                                             (new $-hop-
                                                              (new #-hopc-
                                                               (canon rw-0.$.host_id $-hop-  #-hopc-)
                                                              )
                                                             )
                                                            )
                                                            (new $-hop-
                                                             (new #-hopc-
                                                              (canon -relay- $-hop-  #-hopc-)
                                                             )
                                                            )
                                                           )
                                                           (call %init_peer_id% ("run-console" "print") ["4"])
                                                          )
                                                          (new $-hop-
                                                           (new #-hopc-
                                                            (canon -relay- $-hop-  #-hopc-)
                                                           )
                                                          )
                                                         )
                                                         (new $-hop-
                                                          (new #-hopc-
                                                           (canon rw-0.$.host_id $-hop-  #-hopc-)
                                                          )
                                                         )
                                                        )
                                                        (call rw-0.$.worker_id.[0] ("cioKubo" "getRecursive") ["/dns4/ipfs/tcp/5001" TuDsgPublishTask_obj.$.publication.templates "templates"] ret-16)
                                                       )
                                                       (ap ret-16 $downloads)
                                                      )
                                                      (new $-hop-
                                                       (new #-hopc-
                                                        (canon rw-0.$.host_id $-hop-  #-hopc-)
                                                       )
                                                      )
                                                     )
                                                     (new $-hop-
                                                      (new #-hopc-
                                                       (canon -relay- $-hop-  #-hopc-)
                                                      )
                                                     )
                                                    )
                                                    (call %init_peer_id% ("run-console" "print") ["5"])
                                                   )
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (new $-hop-
                                                       (new #-hopc-
                                                        (canon rw-0.$.host_id $-hop-  #-hopc-)
                                                       )
                                                      )
                                                      (new $-hop-
                                                       (new #-hopc-
                                                        (canon -relay- $-hop-  #-hopc-)
                                                       )
                                                      )
                                                     )
                                                     (new $-hop-
                                                      (new #-hopc-
                                                       (canon %init_peer_id% $-hop-  #-hopc-)
                                                      )
                                                     )
                                                    )
                                                    (fail :error:)
                                                   )
                                                  )
                                                  (next rw-0)
                                                 )
                                                 (never)
                                                )
                                               )
                                               (null)
                                              )
                                             )
                                             (new $downloads_test
                                              (seq
                                               (seq
                                                (fold $downloads downloads_fold_var
                                                 (seq
                                                  (seq
                                                   (ap downloads_fold_var $downloads_test)
                                                   (canon %init_peer_id% $downloads_test  #downloads_iter_canon)
                                                  )
                                                  (xor
                                                   (match #downloads_iter_canon.length 6
                                                    (null)
                                                   )
                                                   (next downloads_fold_var)
                                                  )
                                                 )
                                                 (never)
                                                )
                                                (canon %init_peer_id% $downloads_test  #downloads_result_canon)
                                               )
                                               (ap #downloads_result_canon downloads_gate)
                                              )
                                             )
                                            )
                                            (par
                                             (seq
                                              (seq
                                               (seq
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (par
                                                     (par
                                                      (new $option-inline-12
                                                       (seq
                                                        (seq
                                                         (new %ContentWorkerV1_obj-3_map
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-3_map)
                                                                (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-3_map)
                                                               )
                                                               (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-3_map)
                                                              )
                                                              (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj-3_map)
                                                             )
                                                             (ap ("matched" true) %ContentWorkerV1_obj-3_map)
                                                            )
                                                            (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj-3_map)
                                                           )
                                                           (canon %init_peer_id% %ContentWorkerV1_obj-3_map  ContentWorkerV1_obj-3)
                                                          )
                                                         )
                                                         (xor
                                                          (ap ContentWorkerV1_obj-3 $option-inline-12)
                                                          (null)
                                                         )
                                                        )
                                                        (canon %init_peer_id% $option-inline-12  #option-inline-12-0)
                                                       )
                                                      )
                                                      (new $option-inline-13
                                                       (seq
                                                        (seq
                                                         (new %RenderWorkerV0_obj-3_map
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-3_map)
                                                               (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-3_map)
                                                              )
                                                              (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-3_map)
                                                             )
                                                             (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj-3_map)
                                                            )
                                                            (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj-3_map)
                                                           )
                                                           (canon %init_peer_id% %RenderWorkerV0_obj-3_map  RenderWorkerV0_obj-3)
                                                          )
                                                         )
                                                         (xor
                                                          (ap RenderWorkerV0_obj-3 $option-inline-13)
                                                          (null)
                                                         )
                                                        )
                                                        (canon %init_peer_id% $option-inline-13  #option-inline-13-0)
                                                       )
                                                      )
                                                     )
                                                     (new $option-inline-14
                                                      (seq
                                                       (seq
                                                        (new %WebHostWorkerV0_obj-3_map
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj-3_map)
                                                              (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj-3_map)
                                                             )
                                                             (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj-3_map)
                                                            )
                                                            (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj-3_map)
                                                           )
                                                           (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj-3_map)
                                                          )
                                                          (canon %init_peer_id% %WebHostWorkerV0_obj-3_map  WebHostWorkerV0_obj-3)
                                                         )
                                                        )
                                                        (xor
                                                         (ap WebHostWorkerV0_obj-3 $option-inline-14)
                                                         (null)
                                                        )
                                                       )
                                                       (canon %init_peer_id% $option-inline-14  #option-inline-14-0)
                                                      )
                                                     )
                                                    )
                                                    (new %Deals_obj-3_map
                                                     (seq
                                                      (seq
                                                       (seq
                                                        (ap ("contentWorkerV1" #option-inline-12-0) %Deals_obj-3_map)
                                                        (ap ("renderWorkerV0" #option-inline-13-0) %Deals_obj-3_map)
                                                       )
                                                       (ap ("webHostWorkerV0" #option-inline-14-0) %Deals_obj-3_map)
                                                      )
                                                      (canon %init_peer_id% %Deals_obj-3_map  Deals_obj-3)
                                                     )
                                                    )
                                                   )
                                                   (ap Deals_obj-3.$.renderWorkerV0 Deals_obj-3_flat)
                                                  )
                                                  (ap Deals_obj-3_flat.$.[0].dealIdOriginal Deals_obj-3_flat_flat)
                                                 )
                                                 (xor
                                                  (call -relay- ("subnet" "resolve") [Deals_obj-3_flat_flat] ret-17)
                                                  (fail :error:)
                                                 )
                                                )
                                                (new -if-error-
                                                 (xor
                                                  (seq
                                                   (match ret-17.$.success false
                                                    (seq
                                                     (new $array-inline-4
                                                      (seq
                                                       (seq
                                                        (ap "Failed to resolve subnet: " $array-inline-4)
                                                        (ap ret-17.$.error $array-inline-4)
                                                       )
                                                       (canon %init_peer_id% $array-inline-4  #array-inline-4-0)
                                                      )
                                                     )
                                                     (call %init_peer_id% ("run-console" "print") [#array-inline-4-0])
                                                    )
                                                   )
                                                   (new $-hop-
                                                    (new #-hopc-
                                                     (canon -relay- $-hop-  #-hopc-)
                                                    )
                                                   )
                                                  )
                                                  (seq
                                                   (seq
                                                    (ap :error: -if-error-)
                                                    (xor
                                                     (seq
                                                      (match :error:.$.error_code 10001
                                                       (null)
                                                      )
                                                      (new $-hop-
                                                       (new #-hopc-
                                                        (canon -relay- $-hop-  #-hopc-)
                                                       )
                                                      )
                                                     )
                                                     (fail -if-error-)
                                                    )
                                                   )
                                                   (new $-hop-
                                                    (new #-hopc-
                                                     (canon -relay- $-hop-  #-hopc-)
                                                    )
                                                   )
                                                  )
                                                 )
                                                )
                                               )
                                               (ap ret-17.$.workers ret-17_flat)
                                              )
                                              (fold ret-17_flat rw-1
                                               (par
                                                (xor
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (seq
                                                      (seq
                                                       (seq
                                                        (new $-hop-
                                                         (new #-hopc-
                                                          (canon -relay- $-hop-  #-hopc-)
                                                         )
                                                        )
                                                        (new $-hop-
                                                         (new #-hopc-
                                                          (canon rw-1.$.host_id $-hop-  #-hopc-)
                                                         )
                                                        )
                                                       )
                                                       (canon rw-1.$.worker_id.[0] $queue  #queue_canon-0)
                                                      )
                                                      (fold #queue_canon-0 ros-0
                                                       (seq
                                                        (fold ros-0 ro-0
                                                         (new $collections
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (seq
                                                              (seq
                                                               (seq
                                                                (seq
                                                                 (seq
                                                                  (seq
                                                                   (seq
                                                                    (call rw-1.$.worker_id.[0] ("cioKubo" "get") ["/dns4/ipfs/tcp/5001" ro-0.$.body_cid] ret-18)
                                                                    (canon rw-1.$.worker_id.[0] $collections  #collections_canon)
                                                                   )
                                                                   (call rw-1.$.worker_id.[0] ("tuDsgRenderer" "map") [ro-0 ret-18 #collections_canon TuDsgPublishTask_obj.$.publication] ret-19)
                                                                  )
                                                                  (call rw-1.$.worker_id.[0] ("tuDsgRenderer" "single") [ro-0 ret-19.$.output.[0]] ret-20)
                                                                 )
                                                                 (ap ret-20 $results)
                                                                )
                                                                (new $-hop-
                                                                 (new #-hopc-
                                                                  (canon rw-1.$.host_id $-hop-  #-hopc-)
                                                                 )
                                                                )
                                                               )
                                                               (new $-hop-
                                                                (new #-hopc-
                                                                 (canon -relay- $-hop-  #-hopc-)
                                                                )
                                                               )
                                                              )
                                                              (call %init_peer_id% ("run-console" "print") ["8"])
                                                             )
                                                             (new $-hop-
                                                              (new #-hopc-
                                                               (canon -relay- $-hop-  #-hopc-)
                                                              )
                                                             )
                                                            )
                                                            (new $-hop-
                                                             (new #-hopc-
                                                              (canon rw-1.$.host_id $-hop-  #-hopc-)
                                                             )
                                                            )
                                                           )
                                                           (next ro-0)
                                                          )
                                                         )
                                                         (null)
                                                        )
                                                        (next ros-0)
                                                       )
                                                       (null)
                                                      )
                                                     )
                                                     (ap true $finished)
                                                    )
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon rw-1.$.host_id $-hop-  #-hopc-)
                                                     )
                                                    )
                                                   )
                                                   (new $-hop-
                                                    (new #-hopc-
                                                     (canon -relay- $-hop-  #-hopc-)
                                                    )
                                                   )
                                                  )
                                                  (new $-hop-
                                                   (new #-hopc-
                                                    (canon %init_peer_id% $-hop-  #-hopc-)
                                                   )
                                                  )
                                                 )
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon rw-1.$.host_id $-hop-  #-hopc-)
                                                     )
                                                    )
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon -relay- $-hop-  #-hopc-)
                                                     )
                                                    )
                                                   )
                                                   (new $-hop-
                                                    (new #-hopc-
                                                     (canon %init_peer_id% $-hop-  #-hopc-)
                                                    )
                                                   )
                                                  )
                                                  (fail :error:)
                                                 )
                                                )
                                                (next rw-1)
                                               )
                                               (never)
                                              )
                                             )
                                             (null)
                                            )
                                           )
                                           (new $finished_test
                                            (seq
                                             (seq
                                              (fold $finished finished_fold_var
                                               (seq
                                                (seq
                                                 (ap finished_fold_var $finished_test)
                                                 (canon %init_peer_id% $finished_test  #finished_iter_canon)
                                                )
                                                (xor
                                                 (match #finished_iter_canon.length 3
                                                  (null)
                                                 )
                                                 (next finished_fold_var)
                                                )
                                               )
                                               (never)
                                              )
                                              (canon %init_peer_id% $finished_test  #finished_result_canon)
                                             )
                                             (ap #finished_result_canon finished_gate)
                                            )
                                           )
                                          )
                                          (call %init_peer_id% ("run-console" "print") ["9"])
                                         )
                                         (par
                                          (seq
                                           (seq
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (seq
                                                 (par
                                                  (par
                                                   (new $option-inline-15
                                                    (seq
                                                     (seq
                                                      (new %ContentWorkerV1_obj-4_map
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (seq
                                                             (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-4_map)
                                                             (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-4_map)
                                                            )
                                                            (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-4_map)
                                                           )
                                                           (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj-4_map)
                                                          )
                                                          (ap ("matched" true) %ContentWorkerV1_obj-4_map)
                                                         )
                                                         (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj-4_map)
                                                        )
                                                        (canon %init_peer_id% %ContentWorkerV1_obj-4_map  ContentWorkerV1_obj-4)
                                                       )
                                                      )
                                                      (xor
                                                       (ap ContentWorkerV1_obj-4 $option-inline-15)
                                                       (null)
                                                      )
                                                     )
                                                     (canon %init_peer_id% $option-inline-15  #option-inline-15-0)
                                                    )
                                                   )
                                                   (new $option-inline-16
                                                    (seq
                                                     (seq
                                                      (new %RenderWorkerV0_obj-4_map
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (seq
                                                            (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-4_map)
                                                            (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-4_map)
                                                           )
                                                           (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-4_map)
                                                          )
                                                          (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj-4_map)
                                                         )
                                                         (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj-4_map)
                                                        )
                                                        (canon %init_peer_id% %RenderWorkerV0_obj-4_map  RenderWorkerV0_obj-4)
                                                       )
                                                      )
                                                      (xor
                                                       (ap RenderWorkerV0_obj-4 $option-inline-16)
                                                       (null)
                                                      )
                                                     )
                                                     (canon %init_peer_id% $option-inline-16  #option-inline-16-0)
                                                    )
                                                   )
                                                  )
                                                  (new $option-inline-17
                                                   (seq
                                                    (seq
                                                     (new %WebHostWorkerV0_obj-4_map
                                                      (seq
                                                       (seq
                                                        (seq
                                                         (seq
                                                          (seq
                                                           (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj-4_map)
                                                           (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj-4_map)
                                                          )
                                                          (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj-4_map)
                                                         )
                                                         (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj-4_map)
                                                        )
                                                        (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj-4_map)
                                                       )
                                                       (canon %init_peer_id% %WebHostWorkerV0_obj-4_map  WebHostWorkerV0_obj-4)
                                                      )
                                                     )
                                                     (xor
                                                      (ap WebHostWorkerV0_obj-4 $option-inline-17)
                                                      (null)
                                                     )
                                                    )
                                                    (canon %init_peer_id% $option-inline-17  #option-inline-17-0)
                                                   )
                                                  )
                                                 )
                                                 (new %Deals_obj-4_map
                                                  (seq
                                                   (seq
                                                    (seq
                                                     (ap ("contentWorkerV1" #option-inline-15-0) %Deals_obj-4_map)
                                                     (ap ("renderWorkerV0" #option-inline-16-0) %Deals_obj-4_map)
                                                    )
                                                    (ap ("webHostWorkerV0" #option-inline-17-0) %Deals_obj-4_map)
                                                   )
                                                   (canon %init_peer_id% %Deals_obj-4_map  Deals_obj-4)
                                                  )
                                                 )
                                                )
                                                (ap Deals_obj-4.$.renderWorkerV0 Deals_obj-4_flat)
                                               )
                                               (ap Deals_obj-4_flat.$.[0].dealIdOriginal Deals_obj-4_flat_flat)
                                              )
                                              (xor
                                               (call -relay- ("subnet" "resolve") [Deals_obj-4_flat_flat] ret-21)
                                               (fail :error:)
                                              )
                                             )
                                             (new -if-error-
                                              (xor
                                               (seq
                                                (match ret-21.$.success false
                                                 (seq
                                                  (new $array-inline-5
                                                   (seq
                                                    (seq
                                                     (ap "Failed to resolve subnet: " $array-inline-5)
                                                     (ap ret-21.$.error $array-inline-5)
                                                    )
                                                    (canon %init_peer_id% $array-inline-5  #array-inline-5-0)
                                                   )
                                                  )
                                                  (call %init_peer_id% ("run-console" "print") [#array-inline-5-0])
                                                 )
                                                )
                                                (new $-hop-
                                                 (new #-hopc-
                                                  (canon -relay- $-hop-  #-hopc-)
                                                 )
                                                )
                                               )
                                               (seq
                                                (seq
                                                 (ap :error: -if-error-)
                                                 (xor
                                                  (seq
                                                   (match :error:.$.error_code 10001
                                                    (null)
                                                   )
                                                   (new $-hop-
                                                    (new #-hopc-
                                                     (canon -relay- $-hop-  #-hopc-)
                                                    )
                                                   )
                                                  )
                                                  (fail -if-error-)
                                                 )
                                                )
                                                (new $-hop-
                                                 (new #-hopc-
                                                  (canon -relay- $-hop-  #-hopc-)
                                                 )
                                                )
                                               )
                                              )
                                             )
                                            )
                                            (ap ret-21.$.workers ret-21_flat)
                                           )
                                           (fold ret-21_flat rw-2
                                            (par
                                             (xor
                                              (seq
                                               (seq
                                                (seq
                                                 (seq
                                                  (seq
                                                   (seq
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon -relay- $-hop-  #-hopc-)
                                                     )
                                                    )
                                                    (new $-hop-
                                                     (new #-hopc-
                                                      (canon rw-2.$.host_id $-hop-  #-hopc-)
                                                     )
                                                    )
                                                   )
                                                   (call rw-2.$.worker_id.[0] ("cioKubo" "hash") ["/dns4/ipfs/tcp/5001" TuDsgPublishTask_obj.$.publication.name] ret-22)
                                                  )
                                                  (ap ret-22 $hashes)
                                                 )
                                                 (new $-hop-
                                                  (new #-hopc-
                                                   (canon rw-2.$.host_id $-hop-  #-hopc-)
                                                  )
                                                 )
                                                )
                                                (new $-hop-
                                                 (new #-hopc-
                                                  (canon -relay- $-hop-  #-hopc-)
                                                 )
                                                )
                                               )
                                               (new $-hop-
                                                (new #-hopc-
                                                 (canon %init_peer_id% $-hop-  #-hopc-)
                                                )
                                               )
                                              )
                                              (seq
                                               (seq
                                                (seq
                                                 (new $-hop-
                                                  (new #-hopc-
                                                   (canon rw-2.$.host_id $-hop-  #-hopc-)
                                                  )
                                                 )
                                                 (new $-hop-
                                                  (new #-hopc-
                                                   (canon -relay- $-hop-  #-hopc-)
                                                  )
                                                 )
                                                )
                                                (new $-hop-
                                                 (new #-hopc-
                                                  (canon %init_peer_id% $-hop-  #-hopc-)
                                                 )
                                                )
                                               )
                                               (fail :error:)
                                              )
                                             )
                                             (next rw-2)
                                            )
                                            (never)
                                           )
                                          )
                                          (null)
                                         )
                                        )
                                        (new $hashes_test
                                         (seq
                                          (seq
                                           (fold $hashes hashes_fold_var
                                            (seq
                                             (seq
                                              (ap hashes_fold_var $hashes_test)
                                              (canon %init_peer_id% $hashes_test  #hashes_iter_canon)
                                             )
                                             (xor
                                              (match #hashes_iter_canon.length 3
                                               (null)
                                              )
                                              (next hashes_fold_var)
                                             )
                                            )
                                            (never)
                                           )
                                           (canon %init_peer_id% $hashes_test  #hashes_result_canon)
                                          )
                                          (ap #hashes_result_canon hashes_gate)
                                         )
                                        )
                                       )
                                       (call %init_peer_id% ("run-console" "print") ["10"])
                                      )
                                      (canon %init_peer_id% $hashes  #hashes_canon)
                                     )
                                     (fold #hashes_canon r-0
                                      (seq
                                       (seq
                                        (seq
                                         (canon %init_peer_id% $cids-0  #cids-0_canon)
                                         (fold #cids-0_canon c-0
                                          (seq
                                           (new -if-error-
                                            (xor
                                             (match c-0 r-0.$.result
                                              (ap r-0 $winner)
                                             )
                                             (seq
                                              (ap :error: -if-error-)
                                              (xor
                                               (match :error:.$.error_code 10001
                                                (null)
                                               )
                                               (fail -if-error-)
                                              )
                                             )
                                            )
                                           )
                                           (next c-0)
                                          )
                                          (null)
                                         )
                                        )
                                        (ap r-0.$.result $cids-0)
                                       )
                                       (next r-0)
                                      )
                                      (null)
                                     )
                                    )
                                    (par
                                     (par
                                      (new $option-inline-18
                                       (seq
                                        (seq
                                         (new %ContentWorkerV1_obj-5_map
                                          (seq
                                           (seq
                                            (seq
                                             (seq
                                              (seq
                                               (seq
                                                (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-5_map)
                                                (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-5_map)
                                               )
                                               (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-5_map)
                                              )
                                              (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj-5_map)
                                             )
                                             (ap ("matched" true) %ContentWorkerV1_obj-5_map)
                                            )
                                            (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj-5_map)
                                           )
                                           (canon %init_peer_id% %ContentWorkerV1_obj-5_map  ContentWorkerV1_obj-5)
                                          )
                                         )
                                         (xor
                                          (ap ContentWorkerV1_obj-5 $option-inline-18)
                                          (null)
                                         )
                                        )
                                        (canon %init_peer_id% $option-inline-18  #option-inline-18-0)
                                       )
                                      )
                                      (new $option-inline-19
                                       (seq
                                        (seq
                                         (new %RenderWorkerV0_obj-5_map
                                          (seq
                                           (seq
                                            (seq
                                             (seq
                                              (seq
                                               (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-5_map)
                                               (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-5_map)
                                              )
                                              (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-5_map)
                                             )
                                             (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj-5_map)
                                            )
                                            (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj-5_map)
                                           )
                                           (canon %init_peer_id% %RenderWorkerV0_obj-5_map  RenderWorkerV0_obj-5)
                                          )
                                         )
                                         (xor
                                          (ap RenderWorkerV0_obj-5 $option-inline-19)
                                          (null)
                                         )
                                        )
                                        (canon %init_peer_id% $option-inline-19  #option-inline-19-0)
                                       )
                                      )
                                     )
                                     (new $option-inline-20
                                      (seq
                                       (seq
                                        (new %WebHostWorkerV0_obj-5_map
                                         (seq
                                          (seq
                                           (seq
                                            (seq
                                             (seq
                                              (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj-5_map)
                                              (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj-5_map)
                                             )
                                             (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj-5_map)
                                            )
                                            (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj-5_map)
                                           )
                                           (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj-5_map)
                                          )
                                          (canon %init_peer_id% %WebHostWorkerV0_obj-5_map  WebHostWorkerV0_obj-5)
                                         )
                                        )
                                        (xor
                                         (ap WebHostWorkerV0_obj-5 $option-inline-20)
                                         (null)
                                        )
                                       )
                                       (canon %init_peer_id% $option-inline-20  #option-inline-20-0)
                                      )
                                     )
                                    )
                                   )
                                   (new %Deals_obj-5_map
                                    (seq
                                     (seq
                                      (seq
                                       (ap ("contentWorkerV1" #option-inline-18-0) %Deals_obj-5_map)
                                       (ap ("renderWorkerV0" #option-inline-19-0) %Deals_obj-5_map)
                                      )
                                      (ap ("webHostWorkerV0" #option-inline-20-0) %Deals_obj-5_map)
                                     )
                                     (canon %init_peer_id% %Deals_obj-5_map  Deals_obj-5)
                                    )
                                   )
                                  )
                                  (ap Deals_obj-5.$.renderWorkerV0 Deals_obj-5_flat)
                                 )
                                 (ap Deals_obj-5_flat.$.[0].dealIdOriginal Deals_obj-5_flat_flat)
                                )
                                (xor
                                 (call -relay- ("subnet" "resolve") [Deals_obj-5_flat_flat] ret-23)
                                 (fail :error:)
                                )
                               )
                               (new -if-error-
                                (xor
                                 (match ret-23.$.success false
                                  (seq
                                   (new $array-inline-6
                                    (seq
                                     (seq
                                      (ap "Failed to resolve subnet: " $array-inline-6)
                                      (ap ret-23.$.error $array-inline-6)
                                     )
                                     (canon %init_peer_id% $array-inline-6  #array-inline-6-0)
                                    )
                                   )
                                   (call %init_peer_id% ("run-console" "print") [#array-inline-6-0])
                                  )
                                 )
                                 (seq
                                  (ap :error: -if-error-)
                                  (xor
                                   (match :error:.$.error_code 10001
                                    (null)
                                   )
                                   (fail -if-error-)
                                  )
                                 )
                                )
                               )
                              )
                              (ap ret-23.$.workers ret-23_flat)
                             )
                             (fold ret-23_flat w-1-0
                              (seq
                               (seq
                                (new $winner_test
                                 (seq
                                  (seq
                                   (fold $winner winner_fold_var
                                    (seq
                                     (seq
                                      (ap winner_fold_var $winner_test)
                                      (canon %init_peer_id% $winner_test  #winner_iter_canon)
                                     )
                                     (xor
                                      (match #winner_iter_canon.length 1
                                       (null)
                                      )
                                      (next winner_fold_var)
                                     )
                                    )
                                    (never)
                                   )
                                   (canon %init_peer_id% $winner_test  #winner_result_canon)
                                  )
                                  (ap #winner_result_canon winner_gate)
                                 )
                                )
                                (new -if-error-
                                 (xor
                                  (match w-1-0.$.host_id winner_gate.$.[0].host_id
                                   (ap w-1-0 $workers)
                                  )
                                  (seq
                                   (ap :error: -if-error-)
                                   (xor
                                    (match :error:.$.error_code 10001
                                     (null)
                                    )
                                    (fail -if-error-)
                                   )
                                  )
                                 )
                                )
                               )
                               (next w-1-0)
                              )
                              (null)
                             )
                            )
                            (new $workers_test
                             (seq
                              (seq
                               (fold $workers workers_fold_var
                                (seq
                                 (seq
                                  (ap workers_fold_var $workers_test)
                                  (canon %init_peer_id% $workers_test  #workers_iter_canon)
                                 )
                                 (xor
                                  (match #workers_iter_canon.length 1
                                   (null)
                                  )
                                  (next workers_fold_var)
                                 )
                                )
                                (never)
                               )
                               (canon %init_peer_id% $workers_test  #workers_result_canon)
                              )
                              (ap #workers_result_canon workers_gate)
                             )
                            )
                           )
                           (call %init_peer_id% ("run-console" "print") ["11"])
                          )
                          (xor
                           (seq
                            (seq
                             (seq
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (seq
                                      (seq
                                       (new $-hop-
                                        (new #-hopc-
                                         (canon -relay- $-hop-  #-hopc-)
                                        )
                                       )
                                       (new $-hop-
                                        (new #-hopc-
                                         (canon workers_gate.$.[0].host_id $-hop-  #-hopc-)
                                        )
                                       )
                                      )
                                      (new $-hop-
                                       (new #-hopc-
                                        (canon workers_gate.$.[0].host_id $-hop-  #-hopc-)
                                       )
                                      )
                                     )
                                     (new $-hop-
                                      (new #-hopc-
                                       (canon -relay- $-hop-  #-hopc-)
                                      )
                                     )
                                    )
                                    (call %init_peer_id% ("run-console" "print") ["12"])
                                   )
                                   (new $-hop-
                                    (new #-hopc-
                                     (canon -relay- $-hop-  #-hopc-)
                                    )
                                   )
                                  )
                                  (new $-hop-
                                   (new #-hopc-
                                    (canon workers_gate.$.[0].host_id $-hop-  #-hopc-)
                                   )
                                  )
                                 )
                                 (call workers_gate.$.[0].worker_id.[0] ("cioPinata" "addFolder") [TuDsgPublishTask_obj.$.publication.name "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MzNhYjNkMS02YTZjLTQzMGUtODhkZC03Yzc0Y2MyZmQzMDkiLCJlbWFpbCI6ImpvZXJhQGpvZXJhbXVsZGVycy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNGZhNDRkZmU0NGIyMDcyMmZlYjciLCJzY29wZWRLZXlTZWNyZXQiOiI4MTc0YTJjOTc5OGQ2MjU4MzA0NTQ2NzgyZDAxMTUyNDJkNjlhODlhNDI2MWRkNWQ5N2M5NzRiOGZiNWMzYWVlIiwiaWF0IjoxNzEzMzQ1ODE0fQ.88EHF4U77_mU_RyJXMNYIhDaJ0m6AkXqRCw6rflmDow"] ret-24)
                                )
                                (ap ret-24.$.result $cids)
                               )
                               (new $cids_test
                                (seq
                                 (seq
                                  (fold $cids cids_fold_var
                                   (seq
                                    (seq
                                     (ap cids_fold_var $cids_test)
                                     (canon workers_gate.$.[0].worker_id.[0] $cids_test  #cids_iter_canon)
                                    )
                                    (xor
                                     (match #cids_iter_canon.length 1
                                      (null)
                                     )
                                     (next cids_fold_var)
                                    )
                                   )
                                   (never)
                                  )
                                  (canon workers_gate.$.[0].worker_id.[0] $cids_test  #cids_result_canon)
                                 )
                                 (ap #cids_result_canon cids_gate)
                                )
                               )
                              )
                              (new $-hop-
                               (new #-hopc-
                                (canon workers_gate.$.[0].host_id $-hop-  #-hopc-)
                               )
                              )
                             )
                             (new $-hop-
                              (new #-hopc-
                               (canon -relay- $-hop-  #-hopc-)
                              )
                             )
                            )
                            (call %init_peer_id% ("run-console" "print") [cids_gate.$.[0]])
                           )
                           (seq
                            (seq
                             (seq
                              (new $-hop-
                               (new #-hopc-
                                (canon workers_gate.$.[0].host_id $-hop-  #-hopc-)
                               )
                              )
                              (new $-hop-
                               (new #-hopc-
                                (canon -relay- $-hop-  #-hopc-)
                               )
                              )
                             )
                             (new $-hop-
                              (new #-hopc-
                               (canon %init_peer_id% $-hop-  #-hopc-)
                              )
                             )
                            )
                            (fail :error:)
                           )
                          )
                         )
                         (par
                          (par
                           (new $option-inline-21
                            (seq
                             (seq
                              (new %ContentWorkerV1_obj-6_map
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (seq
                                     (ap ("chainNetworkId" 31337) %ContentWorkerV1_obj-6_map)
                                     (ap ("dealId" "ce85503de9399d4deca3c0b2bb3e9e7cfcbf9c6b") %ContentWorkerV1_obj-6_map)
                                    )
                                    (ap ("dealIdOriginal" "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B") %ContentWorkerV1_obj-6_map)
                                   )
                                   (ap ("definition" "bafkreia5c52u2m3gh6qyhncgy4szkg57ggbzn2kihsksuba4pfat3kkn5q") %ContentWorkerV1_obj-6_map)
                                  )
                                  (ap ("matched" true) %ContentWorkerV1_obj-6_map)
                                 )
                                 (ap ("timestamp" "2024-05-04T07:28:25.428Z") %ContentWorkerV1_obj-6_map)
                                )
                                (canon %init_peer_id% %ContentWorkerV1_obj-6_map  ContentWorkerV1_obj-6)
                               )
                              )
                              (xor
                               (ap ContentWorkerV1_obj-6 $option-inline-21)
                               (null)
                              )
                             )
                             (canon %init_peer_id% $option-inline-21  #option-inline-21-0)
                            )
                           )
                           (new $option-inline-22
                            (seq
                             (seq
                              (new %RenderWorkerV0_obj-6_map
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (seq
                                    (ap ("chainNetworkId" 31337) %RenderWorkerV0_obj-6_map)
                                    (ap ("dealId" "18998c7e38ede4df09ceec08e5372bf8fe5719ea") %RenderWorkerV0_obj-6_map)
                                   )
                                   (ap ("dealIdOriginal" "0x18998c7E38ede4dF09cEec08E5372Bf8fe5719ea") %RenderWorkerV0_obj-6_map)
                                  )
                                  (ap ("definition" "bafkreiglu5sthn4hyfcnfr7rqofl5dlyppinlwxpkwjyij2dqp26bto67u") %RenderWorkerV0_obj-6_map)
                                 )
                                 (ap ("timestamp" "2024-05-04T08:06:32.202Z") %RenderWorkerV0_obj-6_map)
                                )
                                (canon %init_peer_id% %RenderWorkerV0_obj-6_map  RenderWorkerV0_obj-6)
                               )
                              )
                              (xor
                               (ap RenderWorkerV0_obj-6 $option-inline-22)
                               (null)
                              )
                             )
                             (canon %init_peer_id% $option-inline-22  #option-inline-22-0)
                            )
                           )
                          )
                          (new $option-inline-23
                           (seq
                            (seq
                             (new %WebHostWorkerV0_obj-6_map
                              (seq
                               (seq
                                (seq
                                 (seq
                                  (seq
                                   (ap ("chainNetworkId" 31337) %WebHostWorkerV0_obj-6_map)
                                   (ap ("dealId" "2901bb75a1f4b0ac205cb2e68986a53e3480eb56") %WebHostWorkerV0_obj-6_map)
                                  )
                                  (ap ("dealIdOriginal" "0x2901bb75a1f4B0ac205CB2e68986A53E3480eB56") %WebHostWorkerV0_obj-6_map)
                                 )
                                 (ap ("definition" "bafkreifr2ugjrg5m4b52dyhrat4mq3bbyv6537h6yildw3f2gy2zvsqmka") %WebHostWorkerV0_obj-6_map)
                                )
                                (ap ("timestamp" "2024-05-04T08:06:36.468Z") %WebHostWorkerV0_obj-6_map)
                               )
                               (canon %init_peer_id% %WebHostWorkerV0_obj-6_map  WebHostWorkerV0_obj-6)
                              )
                             )
                             (xor
                              (ap WebHostWorkerV0_obj-6 $option-inline-23)
                              (null)
                             )
                            )
                            (canon %init_peer_id% $option-inline-23  #option-inline-23-0)
                           )
                          )
                         )
                        )
                        (new %Deals_obj-6_map
                         (seq
                          (seq
                           (seq
                            (ap ("contentWorkerV1" #option-inline-21-0) %Deals_obj-6_map)
                            (ap ("renderWorkerV0" #option-inline-22-0) %Deals_obj-6_map)
                           )
                           (ap ("webHostWorkerV0" #option-inline-23-0) %Deals_obj-6_map)
                          )
                          (canon %init_peer_id% %Deals_obj-6_map  Deals_obj-6)
                         )
                        )
                       )
                       (ap Deals_obj-6.$.webHostWorkerV0 Deals_obj-6_flat)
                      )
                      (ap Deals_obj-6_flat.$.[0].dealIdOriginal Deals_obj-6_flat_flat)
                     )
                     (xor
                      (call -relay- ("subnet" "resolve") [Deals_obj-6_flat_flat] ret-25)
                      (fail :error:)
                     )
                    )
                    (new -if-error-
                     (xor
                      (seq
                       (match ret-25.$.success false
                        (seq
                         (new $array-inline-7
                          (seq
                           (seq
                            (ap "Failed to resolve subnet: " $array-inline-7)
                            (ap ret-25.$.error $array-inline-7)
                           )
                           (canon %init_peer_id% $array-inline-7  #array-inline-7-0)
                          )
                         )
                         (call %init_peer_id% ("run-console" "print") [#array-inline-7-0])
                        )
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon -relay- $-hop-  #-hopc-)
                        )
                       )
                      )
                      (seq
                       (seq
                        (ap :error: -if-error-)
                        (xor
                         (seq
                          (match :error:.$.error_code 10001
                           (null)
                          )
                          (new $-hop-
                           (new #-hopc-
                            (canon -relay- $-hop-  #-hopc-)
                           )
                          )
                         )
                         (fail -if-error-)
                        )
                       )
                       (new $-hop-
                        (new #-hopc-
                         (canon -relay- $-hop-  #-hopc-)
                        )
                       )
                      )
                     )
                    )
                   )
                   (ap ret-25.$.workers ret-25_flat)
                  )
                  (xor
                   (seq
                    (seq
                     (seq
                      (seq
                       (seq
                        (seq
                         (new $-hop-
                          (new #-hopc-
                           (canon -relay- $-hop-  #-hopc-)
                          )
                         )
                         (new $-hop-
                          (new #-hopc-
                           (canon ret-25_flat.$.[0].host_id $-hop-  #-hopc-)
                          )
                         )
                        )
                        (new $cids_test-0
                         (seq
                          (seq
                           (fold $cids cids_fold_var-0
                            (seq
                             (seq
                              (ap cids_fold_var-0 $cids_test-0)
                              (canon ret-25_flat.$.[0].worker_id.[0] $cids_test-0  #cids_iter_canon-0)
                             )
                             (xor
                              (match #cids_iter_canon-0.length 1
                               (null)
                              )
                              (next cids_fold_var-0)
                             )
                            )
                            (never)
                           )
                           (canon ret-25_flat.$.[0].worker_id.[0] $cids_test-0  #cids_result_canon-0)
                          )
                          (ap #cids_result_canon-0 cids_gate-0)
                         )
                        )
                       )
                       (call ret-25_flat.$.[0].worker_id.[0] ("tuDsgWebHost" "update") [TuDsgPublishTask_obj.$.publication cids_gate-0.$.[0]] ret-26)
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon ret-25_flat.$.[0].host_id $-hop-  #-hopc-)
                       )
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon -relay- $-hop-  #-hopc-)
                      )
                     )
                    )
                    (call %init_peer_id% ("run-console" "print") [ret-26.$.result])
                   )
                   (seq
                    (seq
                     (seq
                      (new $-hop-
                       (new #-hopc-
                        (canon ret-25_flat.$.[0].host_id $-hop-  #-hopc-)
                       )
                      )
                      (new $-hop-
                       (new #-hopc-
                        (canon -relay- $-hop-  #-hopc-)
                       )
                      )
                     )
                     (new $-hop-
                      (new #-hopc-
                       (canon %init_peer_id% $-hop-  #-hopc-)
                      )
                     )
                    )
                    (fail :error:)
                   )
                  )
                 )
                 (new $cids_test-1
                  (seq
                   (seq
                    (fold $cids cids_fold_var-1
                     (seq
                      (seq
                       (ap cids_fold_var-1 $cids_test-1)
                       (canon %init_peer_id% $cids_test-1  #cids_iter_canon-1)
                      )
                      (xor
                       (match #cids_iter_canon-1.length 1
                        (null)
                       )
                       (next cids_fold_var-1)
                      )
                     )
                     (never)
                    )
                    (canon %init_peer_id% $cids_test-1  #cids_result_canon-1)
                   )
                   (ap #cids_result_canon-1 cids_gate-1)
                  )
                 )
                )
                (canon %init_peer_id% $results  #results_canon)
               )
               (call %init_peer_id% ("callbackSrv" "response") [cids_gate-1.$.[0] #results_canon])
              )
             )
            )
           )
          )
         )
        )
       )
      )
     )
    )
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type RenderOnDSGArgTempTask = { author: string; payload: string; post_type: string; slug: string; publication: string; }

export type RenderOnDSGResultType = [string, { errors: string[]; output: number[][]; results: string[]; }[]]

export type RenderOnDSGParams = [tempTask: RenderOnDSGArgTempTask, archive_cid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, tempTask: RenderOnDSGArgTempTask, archive_cid: string, config?: {ttl?: number}];

export type RenderOnDSGResult = Promise<RenderOnDSGResultType>;

export function renderOnDSG(...args: RenderOnDSGParams): RenderOnDSGResult {
    return callFunction$$(
        args,
        {
    "functionName": "renderOnDSG",
    "arrow": {
        "domain": {
            "fields": {
                "tempTask": {
                    "name": "TuDsgPublishTaskTemp",
                    "fields": {
                        "author": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "payload": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "post_type": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "slug": {
                            "name": "string",
                            "tag": "scalar"
                        },
                        "publication": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "struct"
                },
                "archive_cid": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                },
                {
                    "type": {
                        "name": "AquaMarineResult",
                        "fields": {
                            "errors": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "output": {
                                "type": {
                                    "type": {
                                        "name": "u8",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "array"
                            },
                            "results": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        renderOnDSG_script
    );
}

export const bulkRender_script = `
(xor
 (new $results
  (seq
   (seq
    (seq
     (seq
      (seq
       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
       (call %init_peer_id% ("getDataSrv" "publication_cid") [] -publication_cid-arg-)
      )
      (call %init_peer_id% ("getDataSrv" "post_type") [] -post_type-arg-)
     )
     (call %init_peer_id% ("getDataSrv" "archive_cid") [] -archive_cid-arg-)
    )
    (canon %init_peer_id% $results  #results_canon)
   )
   (call %init_peer_id% ("callbackSrv" "response") [#results_canon])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type BulkRenderParams = [publication_cid: string, post_type: string, archive_cid: string, config?: {ttl?: number}] | [peer: IFluenceClient$$, publication_cid: string, post_type: string, archive_cid: string, config?: {ttl?: number}];

export type BulkRenderResult = Promise<{ errors: string[]; output: number[][]; results: string[]; }[]>;

export function bulkRender(...args: BulkRenderParams): BulkRenderResult {
    return callFunction$$(
        args,
        {
    "functionName": "bulkRender",
    "arrow": {
        "domain": {
            "fields": {
                "publication_cid": {
                    "name": "string",
                    "tag": "scalar"
                },
                "post_type": {
                    "name": "string",
                    "tag": "scalar"
                },
                "archive_cid": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "name": "AquaMarineResult",
                        "fields": {
                            "errors": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            },
                            "output": {
                                "type": {
                                    "type": {
                                        "name": "u8",
                                        "tag": "scalar"
                                    },
                                    "tag": "array"
                                },
                                "tag": "array"
                            },
                            "results": {
                                "type": {
                                    "name": "string",
                                    "tag": "scalar"
                                },
                                "tag": "array"
                            }
                        },
                        "tag": "struct"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        bulkRender_script
    );
}

export const subnet_script = `
(xor
 (seq
  (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
  (call %init_peer_id% ("callbackSrv" "response") [true])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type SubnetParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type SubnetResult = Promise<boolean>;

export function subnet(...args: SubnetParams): SubnetResult {
    return callFunction$$(
        args,
        {
    "functionName": "subnet",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "bool",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        subnet_script
    );
}
