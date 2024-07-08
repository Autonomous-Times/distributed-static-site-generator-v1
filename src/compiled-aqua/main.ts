/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.13.0
 * @fluencelabs/aqua-to-js version: 0.3.13
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
export const test_script = `
(xor
 (new $r
  (seq
   (seq
    (seq
     (seq
      (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
      (new $array-inline
       (seq
        (seq
         (seq
          (seq
           (seq
            (ap 1 $array-inline)
            (ap 2 $array-inline)
           )
           (ap 3 $array-inline)
          )
          (ap 4 $array-inline)
         )
         (ap 5 $array-inline)
        )
        (canon %init_peer_id% $array-inline  #array-inline-0)
       )
      )
     )
     (fold #array-inline-0 i-0
      (new $b
       (new $res
        (seq
         (seq
          (seq
           (seq
            (seq
             (par
              (seq
               (seq
                (ap "kip" $b)
                (new $b_test
                 (seq
                  (seq
                   (fold $b b_fold_var
                    (seq
                     (seq
                      (ap b_fold_var $b_test)
                      (canon %init_peer_id% $b_test  #b_iter_canon)
                     )
                     (xor
                      (match #b_iter_canon.length 1
                       (null)
                      )
                      (next b_fold_var)
                     )
                    )
                    (never)
                   )
                   (canon %init_peer_id% $b_test  #b_result_canon)
                  )
                  (ap #b_result_canon b_gate)
                 )
                )
               )
               (ap b_gate.$.[0] $res)
              )
              (seq
               (call %init_peer_id% ("peer" "timeout") [1000 "some spacetime"] ret)
               (ap ret $res)
              )
             )
             (new $res_test
              (seq
               (seq
                (fold $res res_fold_var
                 (seq
                  (seq
                   (ap res_fold_var $res_test)
                   (canon %init_peer_id% $res_test  #res_iter_canon)
                  )
                  (xor
                   (match #res_iter_canon.length 1
                    (null)
                   )
                   (next res_fold_var)
                  )
                 )
                 (never)
                )
                (canon %init_peer_id% $res_test  #res_result_canon)
               )
               (ap #res_result_canon res_gate)
              )
             )
            )
            (call %init_peer_id% ("run-console" "print") [res_gate.$.[0]])
           )
           (new $res_test-0
            (seq
             (seq
              (fold $res res_fold_var-0
               (seq
                (seq
                 (ap res_fold_var-0 $res_test-0)
                 (canon %init_peer_id% $res_test-0  #res_iter_canon-0)
                )
                (xor
                 (match #res_iter_canon-0.length 1
                  (null)
                 )
                 (next res_fold_var-0)
                )
               )
               (never)
              )
              (canon %init_peer_id% $res_test-0  #res_result_canon-0)
             )
             (ap #res_result_canon-0 res_gate-0)
            )
           )
          )
          (new -if-error-
           (xor
            (mismatch res_gate-0.$.[0] "some spacetime"
             (ap "hi" $r)
            )
            (seq
             (ap :error: -if-error-)
             (xor
              (match :error:.$.error_code 10002
               (null)
              )
              (fail -if-error-)
             )
            )
           )
          )
         )
         (next i-0)
        )
       )
      )
      (null)
     )
    )
    (new $r_test
     (seq
      (seq
       (fold $r r_fold_var
        (seq
         (seq
          (ap r_fold_var $r_test)
          (canon %init_peer_id% $r_test  #r_iter_canon)
         )
         (xor
          (match #r_iter_canon.length 1
           (null)
          )
          (next r_fold_var)
         )
        )
        (never)
       )
       (canon %init_peer_id% $r_test  #r_result_canon)
      )
      (ap #r_result_canon r_gate)
     )
    )
   )
   (call %init_peer_id% ("callbackSrv" "response") [r_gate.$.[0]])
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export type TestParams = [config?: {ttl?: number}] | [peer: IFluenceClient$$, config?: {ttl?: number}];

export type TestResult = Promise<string>;

export function test(...args: TestParams): TestResult {
    return callFunction$$(
        args,
        {
    "functionName": "test",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
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
        test_script
    );
}
