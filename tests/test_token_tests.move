#[test_only]
module test_token::test_token_tests;

use sui::coin::{ Coin, TreasuryCap};
use sui::test_scenario;
use test_token::test_token::{Self, TEST_TOKEN};

#[test]
fun test_initliazation() {
    let deployer = @0x1;
    let mut scenario = test_scenario::begin(deployer);

    scenario.next_tx(deployer);
    {
        test_token::test_init(scenario.ctx())
    };

    test_scenario::end(scenario);
}

#[test]
fun test_mint_and_transfer() {
    let deployer = @0x1;
    let receiver = @0x2;
    let mut scenario = test_scenario::begin(deployer);

    scenario.next_tx(deployer);
    {
        test_token::test_init(scenario.ctx())
    };
    scenario.next_tx(deployer);
    {
        let mut treasury_cap = test_scenario::take_shared<TreasuryCap<TEST_TOKEN>>(&scenario);

        let amount: u64 = 2000; //2.000DVD
        test_token::mint_token(&mut treasury_cap, amount, receiver, scenario.ctx());

        test_scenario::return_shared(treasury_cap);
    };

    test_scenario::end(scenario);
}

#[test]
fun test_burn_token() {
    let deployer = @0x1;
    let receiver = @0x2;
    let mut scenario = test_scenario::begin(deployer);

    scenario.next_tx(deployer);
    {
        test_token::test_init(scenario.ctx())
    };
    scenario.next_tx(deployer);
    {
        let mut treasury_cap = test_scenario::take_shared<TreasuryCap<TEST_TOKEN>>(&scenario);

        let amount: u64 = 2000; //2.000DVD
        test_token::mint_token(&mut treasury_cap, amount, receiver, scenario.ctx());

        test_scenario::return_shared(treasury_cap);
    };
    scenario.next_tx(receiver);
    {
        let coin = test_scenario::take_from_address<Coin<TEST_TOKEN>>(&scenario, receiver);

        let mut treasury_cap = test_scenario::take_shared<TreasuryCap<TEST_TOKEN>>(&scenario);

        test_token::burn_token(&mut treasury_cap, coin);

        test_scenario::return_shared(treasury_cap);
    };

    test_scenario::end(scenario);
}
