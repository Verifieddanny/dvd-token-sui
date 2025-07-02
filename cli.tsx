devdanny@devdanny-ProBook:~/Codes/sui-stuff/test_token$ sui client publish 
[Note]: Dependency sources are no longer verified automatically during publication and upgrade. You can pass the `--verify-deps` option if you would like to verify them as part of publication or upgrade.
[note] Dependencies on Bridge, MoveStdlib, Sui, and SuiSystem are automatically added, but this feature is disabled for your package because you have explicitly included dependencies on Sui. Consider removing these dependencies from Move.toml.
UPDATING GIT DEPENDENCY https://github.com/MystenLabs/sui.git
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY MoveStdlib
BUILDING test_token
Skipping dependency verification
Transaction Digest: DdkPeisNxPJPE8MGbaz3BtSLadEbDGeREwCuqL3t4d5W
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Data                                                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                   │
│ Gas Owner: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                │
│ Gas Budget: 21729600 MIST                                                                                    │
│ Gas Price: 1000 MIST                                                                                         │
│ Gas Payment:                                                                                                 │
│  ┌──                                                                                                         │
│  │ ID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                                    │
│  │ Version: 349180023                                                                                        │
│  │ Digest: 6PqHLKyrCz8xsezs3MkyDFnYQE5k8vMcxE1fjTSLTpy9                                                      │
│  └──                                                                                                         │
│                                                                                                              │
│ Transaction Kind: Programmable                                                                               │
│ ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮ │
│ │ Input Objects                                                                                            │ │
│ ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 0   Pure Arg: Type: address, Value: "0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a" │ │
│ ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯ │
│ ╭─────────────────────────────────────────────────────────────────────────╮                                  │
│ │ Commands                                                                │                                  │
│ ├─────────────────────────────────────────────────────────────────────────┤                                  │
│ │ 0  Publish:                                                             │                                  │
│ │  ┌                                                                      │                                  │
│ │  │ Dependencies:                                                        │                                  │
│ │  │   0x0000000000000000000000000000000000000000000000000000000000000001 │                                  │
│ │  │   0x0000000000000000000000000000000000000000000000000000000000000002 │                                  │
│ │  └                                                                      │                                  │
│ │                                                                         │                                  │
│ │ 1  TransferObjects:                                                     │                                  │
│ │  ┌                                                                      │                                  │
│ │  │ Arguments:                                                           │                                  │
│ │  │   Result 0                                                           │                                  │
│ │  │ Address: Input  0                                                    │                                  │
│ │  └                                                                      │                                  │
│ ╰─────────────────────────────────────────────────────────────────────────╯                                  │
│                                                                                                              │
│ Signatures:                                                                                                  │
│    swu4tbnJvYdH2zTb3N/LDEz/ru9IRygzOCmYKU81/VCkKthowoBsIafSwGJL4p4LZ2poGoIUklPxrcgJK+CoAg==                  │
│                                                                                                              │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Effects                                                                               │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Digest: DdkPeisNxPJPE8MGbaz3BtSLadEbDGeREwCuqL3t4d5W                                              │
│ Status: Success                                                                                   │
│ Executed Epoch: 783                                                                               │
│                                                                                                   │
│ Created Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x52b031c8566bb9eb188096d0bf09e5d67887736ed0a66d8a8d4c814375e67b80                         │
│  │ Owner: Immutable                                                                               │
│  │ Version: 349180024                                                                             │
│  │ Digest: 9MJENWU6CtiBeypdkVzHTb4SZcE6isoG1sJiwaSuCjk6                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0x54667afa90dfad8eb98bc9b4960e2f1ba8853f59969b47212c5f63d0a2ccef21                         │
│  │ Owner: Shared( 349180024 )                                                                     │
│  │ Version: 349180024                                                                             │
│  │ Digest: 481UwJE5iqT8mZYmA2hGdswWEyC8HDQhxJT1ZqYHiqZT                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb                         │
│  │ Owner: Immutable                                                                               │
│  │ Version: 1                                                                                     │
│  │ Digest: 8FCYMFGAGNLuHZPxyUMo41bB5QA7nwnDUdLnK3xhGmrN                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0xd929f0750d04fdbdc4f3638f269a76ad461e377fad7ffee64842f381aad503db                         │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )  │
│  │ Version: 349180024                                                                             │
│  │ Digest: Dw1JdHk23eWZ17T1pikko3bPMhCzA3kp8CQiwL6YYAiY                                           │
│  └──                                                                                              │
│ Mutated Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                         │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )  │
│  │ Version: 349180024                                                                             │
│  │ Digest: BY46hzWG9qrpdfrmMEDitbhMwiFHBVzCrySysJERFkhx                                           │
│  └──                                                                                              │
│ Gas Object:                                                                                       │
│  ┌──                                                                                              │
│  │ ID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                         │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )  │
│  │ Version: 349180024                                                                             │
│  │ Digest: BY46hzWG9qrpdfrmMEDitbhMwiFHBVzCrySysJERFkhx                                           │
│  └──                                                                                              │
│ Gas Cost Summary:                                                                                 │
│    Storage Cost: 19729600 MIST                                                                    │
│    Computation Cost: 1000000 MIST                                                                 │
│    Storage Rebate: 978120 MIST                                                                    │
│    Non-refundable Storage Fee: 9880 MIST                                                          │
│                                                                                                   │
│ Transaction Dependencies:                                                                         │
│    2uvg3HheUT45CWZRSRfdcHxA6ewqeWpxCVPZUdJLuD66                                                   │
│    32iQhbDyGcAJp74adzD5BcdbSV5M3hhyWKdhJH2LEtj7                                                   │
│    6pZ2bpkwLwnCH4qdHS1NcJypXLFUNvSHRKfKXhZvXQuo                                                   │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Block Events                                                                                      │
├───────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──                                                                                                          │
│  │ EventID: DdkPeisNxPJPE8MGbaz3BtSLadEbDGeREwCuqL3t4d5W:0                                                    │
│  │ PackageID: 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb                              │
│  │ Transaction Module: test_token                                                                             │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                 │
│  │ EventType: 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb::test_token::CreatedCurrency │
│  │ ParsedJSON:                                                                                                │
│  │   ┌──────────────────────┬───────────────────────────────────────────────────────────────────────────────┐ │
│  │   │ current_total_supply │ 0                                                                             │ │
│  │   ├──────────────────────┼───────────────────────────────────────────────────────────────────────────────┤ │
│  │   │ name_of_token        │ DevDanny                                                                      │ │
│  │   ├──────────────────────┼───────────────────────────────────────────────────────────────────────────────┤ │
│  │   │ symbol               │ DVD                                                                           │ │
│  │   ├──────────────────────┼───────────────────────────────────────────────────────────────────────────────┤ │
│  │   │ token_image          │ https://pbs.twimg.com/profile_images/1741411753404084224/yLULBONw_400x400.jpg │ │
│  │   └──────────────────────┴───────────────────────────────────────────────────────────────────────────────┘ │
│  └──                                                                                                          │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                                                    │
│  ┌──                                                                                                                                │
│  │ ObjectID: 0x52b031c8566bb9eb188096d0bf09e5d67887736ed0a66d8a8d4c814375e67b80                                                     │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                                       │
│  │ Owner: Immutable                                                                                                                 │
│  │ ObjectType: 0x2::coin::CoinMetadata<0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb::test_token::TEST_TOKEN>  │
│  │ Version: 349180024                                                                                                               │
│  │ Digest: 9MJENWU6CtiBeypdkVzHTb4SZcE6isoG1sJiwaSuCjk6                                                                             │
│  └──                                                                                                                                │
│  ┌──                                                                                                                                │
│  │ ObjectID: 0x54667afa90dfad8eb98bc9b4960e2f1ba8853f59969b47212c5f63d0a2ccef21                                                     │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                                       │
│  │ Owner: Shared( 349180024 )                                                                                                       │
│  │ ObjectType: 0x2::coin::TreasuryCap<0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb::test_token::TEST_TOKEN>   │
│  │ Version: 349180024                                                                                                               │
│  │ Digest: 481UwJE5iqT8mZYmA2hGdswWEyC8HDQhxJT1ZqYHiqZT                                                                             │
│  └──                                                                                                                                │
│  ┌──                                                                                                                                │
│  │ ObjectID: 0xd929f0750d04fdbdc4f3638f269a76ad461e377fad7ffee64842f381aad503db                                                     │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                                       │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )                                    │
│  │ ObjectType: 0x2::package::UpgradeCap                                                                                             │
│  │ Version: 349180024                                                                                                               │
│  │ Digest: Dw1JdHk23eWZ17T1pikko3bPMhCzA3kp8CQiwL6YYAiY                                                                             │
│  └──                                                                                                                                │
│ Mutated Objects:                                                                                                                    │
│  ┌──                                                                                                                                │
│  │ ObjectID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                                                     │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                                       │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )                                    │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                                                       │
│  │ Version: 349180024                                                                                                               │
│  │ Digest: BY46hzWG9qrpdfrmMEDitbhMwiFHBVzCrySysJERFkhx                                                                             │
│  └──                                                                                                                                │
│ Published Objects:                                                                                                                  │
│  ┌──                                                                                                                                │
│  │ PackageID: 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb                                                    │
│  │ Version: 1                                                                                                                       │
│  │ Digest: 8FCYMFGAGNLuHZPxyUMo41bB5QA7nwnDUdLnK3xhGmrN                                                                             │
│  │ Modules: test_token                                                                                                              │
│  └──                                                                                                                                │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Balance Changes                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──                                                                                              │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )  │
│  │ CoinType: 0x2::sui::SUI                                                                        │
│  │ Amount: -19751480                                                                              │
│  └──                                                                                              │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
devdanny@devdanny-ProBook:~/Codes/sui-stuff/test_token$ sui client call --package 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb --module test_token --function mint_token --args 0x54667afa90dfad8eb98bc9b4960e2f1ba8853f59969b47212c5f63d0a2ccef21 4500 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a
Transaction Digest: BzGAnULQrZyojmeZZ35hvmaXUBHuizEriALPEiU89iH1
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Data                                                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                   │
│ Gas Owner: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                │
│ Gas Budget: 4419536 MIST                                                                                     │
│ Gas Price: 1000 MIST                                                                                         │
│ Gas Payment:                                                                                                 │
│  ┌──                                                                                                         │
│  │ ID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                                    │
│  │ Version: 349180024                                                                                        │
│  │ Digest: BY46hzWG9qrpdfrmMEDitbhMwiFHBVzCrySysJERFkhx                                                      │
│  └──                                                                                                         │
│                                                                                                              │
│ Transaction Kind: Programmable                                                                               │
│ ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮ │
│ │ Input Objects                                                                                            │ │
│ ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 0   Shared Object    ID: 0x54667afa90dfad8eb98bc9b4960e2f1ba8853f59969b47212c5f63d0a2ccef21              │ │
│ │ 1   Pure Arg: Type: u64, Value: "4500"                                                                   │ │
│ │ 2   Pure Arg: Type: address, Value: "0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a" │ │
│ ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯ │
│ ╭──────────────────────────────────────────────────────────────────────────────────╮                         │
│ │ Commands                                                                         │                         │
│ ├──────────────────────────────────────────────────────────────────────────────────┤                         │
│ │ 0  MoveCall:                                                                     │                         │
│ │  ┌                                                                               │                         │
│ │  │ Function:  mint_token                                                         │                         │
│ │  │ Module:    test_token                                                         │                         │
│ │  │ Package:   0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb │                         │
│ │  │ Arguments:                                                                    │                         │
│ │  │   Input  0                                                                    │                         │
│ │  │   Input  1                                                                    │                         │
│ │  │   Input  2                                                                    │                         │
│ │  └                                                                               │                         │
│ ╰──────────────────────────────────────────────────────────────────────────────────╯                         │
│                                                                                                              │
│ Signatures:                                                                                                  │
│    tfpe15sfxwRchUCYxUmt2Ax2YG9krf+PrWx5tqiVLc9dThxHebdbMr094bUMmrc+IhSuDb8Ow37omSOPzUD6Ag==                  │
│                                                                                                              │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Effects                                                                               │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Digest: BzGAnULQrZyojmeZZ35hvmaXUBHuizEriALPEiU89iH1                                              │
│ Status: Success                                                                                   │
│ Executed Epoch: 783                                                                               │
│                                                                                                   │
│ Created Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x0248c285e8724d37a630b4acebb414953935b8693105439b62139d2aa2f6b9d9                         │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )  │
│  │ Version: 349180025                                                                             │
│  │ Digest: AvCsLXYpaJqdQhXpp33146o4GiPrBXQoZuk9QPEL7Pe7                                           │
│  └──                                                                                              │
│ Mutated Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                         │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )  │
│  │ Version: 349180025                                                                             │
│  │ Digest: 6m9ZqtFkWMrDYLi6sfjN9XxHFjFauRciJX1CAKKL8ZFn                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0x54667afa90dfad8eb98bc9b4960e2f1ba8853f59969b47212c5f63d0a2ccef21                         │
│  │ Owner: Shared( 349180024 )                                                                     │
│  │ Version: 349180025                                                                             │
│  │ Digest: 6tCr1Yuj4iiPD4VAVGTBvSGqawdXGy3SGEeh9a3KmrL9                                           │
│  └──                                                                                              │
│ Shared Objects:                                                                                   │
│  ┌──                                                                                              │
│  │ ID: 0x54667afa90dfad8eb98bc9b4960e2f1ba8853f59969b47212c5f63d0a2ccef21                         │
│  │ Version: 349180024                                                                             │
│  │ Digest: 481UwJE5iqT8mZYmA2hGdswWEyC8HDQhxJT1ZqYHiqZT                                           │
│  └──                                                                                              │
│ Gas Object:                                                                                       │
│  ┌──                                                                                              │
│  │ ID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                         │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )  │
│  │ Version: 349180025                                                                             │
│  │ Digest: 6m9ZqtFkWMrDYLi6sfjN9XxHFjFauRciJX1CAKKL8ZFn                                           │
│  └──                                                                                              │
│ Gas Cost Summary:                                                                                 │
│    Storage Cost: 4195200 MIST                                                                     │
│    Computation Cost: 1000000 MIST                                                                 │
│    Storage Rebate: 2753784 MIST                                                                   │
│    Non-refundable Storage Fee: 27816 MIST                                                         │
│                                                                                                   │
│ Transaction Dependencies:                                                                         │
│    DdkPeisNxPJPE8MGbaz3BtSLadEbDGeREwCuqL3t4d5W                                                   │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
╭──────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Block Events                                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──                                                                                                 │
│  │ EventID: BzGAnULQrZyojmeZZ35hvmaXUBHuizEriALPEiU89iH1:0                                           │
│  │ PackageID: 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb                     │
│  │ Transaction Module: test_token                                                                    │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                        │
│  │ EventType: 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb::test_token::Minted │
│  │ ParsedJSON:                                                                                       │
│  │   ┌──────────────────────┬────────────────────────────────────────────────────────────────────┐   │
│  │   │ amount               │ 4500                                                               │   │
│  │   ├──────────────────────┼────────────────────────────────────────────────────────────────────┤   │
│  │   │ current_total_supply │ 4500                                                               │   │
│  │   ├──────────────────────┼────────────────────────────────────────────────────────────────────┤   │
│  │   │ recipient            │ 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a │   │
│  │   └──────────────────────┴────────────────────────────────────────────────────────────────────┘   │
│  └──                                                                                                 │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                                                     │
├────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                                                   │
│  ┌──                                                                                                                               │
│  │ ObjectID: 0x0248c285e8724d37a630b4acebb414953935b8693105439b62139d2aa2f6b9d9                                                    │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                                      │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )                                   │
│  │ ObjectType: 0x2::coin::Coin<0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb::test_token::TEST_TOKEN>         │
│  │ Version: 349180025                                                                                                              │
│  │ Digest: AvCsLXYpaJqdQhXpp33146o4GiPrBXQoZuk9QPEL7Pe7                                                                            │
│  └──                                                                                                                               │
│ Mutated Objects:                                                                                                                   │
│  ┌──                                                                                                                               │
│  │ ObjectID: 0x51dcf5c71cb967933a46d3ae64dbf36cf2750c15253f89c5b34c5dabb8c9e7e8                                                    │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                                      │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )                                   │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                                                      │
│  │ Version: 349180025                                                                                                              │
│  │ Digest: 6m9ZqtFkWMrDYLi6sfjN9XxHFjFauRciJX1CAKKL8ZFn                                                                            │
│  └──                                                                                                                               │
│  ┌──                                                                                                                               │
│  │ ObjectID: 0x54667afa90dfad8eb98bc9b4960e2f1ba8853f59969b47212c5f63d0a2ccef21                                                    │
│  │ Sender: 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a                                                      │
│  │ Owner: Shared( 349180024 )                                                                                                      │
│  │ ObjectType: 0x2::coin::TreasuryCap<0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb::test_token::TEST_TOKEN>  │
│  │ Version: 349180025                                                                                                              │
│  │ Digest: 6tCr1Yuj4iiPD4VAVGTBvSGqawdXGy3SGEeh9a3KmrL9                                                                            │
│  └──                                                                                                                               │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Balance Changes                                                                                          │
├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──                                                                                                     │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )         │
│  │ CoinType: 0x2::sui::SUI                                                                               │
│  │ Amount: -2441416                                                                                      │
│  └──                                                                                                     │
│  ┌──                                                                                                     │
│  │ Owner: Account Address ( 0x233f2f4674f99162c1879a552d188bc6f241730a627c13150f2e939074f7609a )         │
│  │ CoinType: 0x575348849c64fb12930867f182ca9cb580b903f6f899fab5b6a507de9a840ebb::test_token::TEST_TOKEN  │
│  │ Amount: 4500                                                                                          │
│  └──                                                                                                     │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯
devdanny@devdanny-ProBook:~/Codes/sui-stuff/test_token$ 