module test_token::test_token;

use sui::coin::{Self, Coin, TreasuryCap};
use sui::url::{Self, Url};
use sui::event;
use std::string::String;

///Witness
public struct TEST_TOKEN has drop {}


/// Events
public struct CreatedCurrency has drop, copy {
    name_of_token: String,
    symbol: String,
    token_image: Option<Url>,
    current_total_supply: u64

}

/// After Minting Token 
public struct Minted has drop, copy {
    recipient: address,
    amount: u64,
    current_total_supply: u64,
}


/// After Burning Token
public struct Burned has drop, copy {
    current_total_supply: u64
}


fun init(witness: TEST_TOKEN, ctx: &mut TxContext) {
    let ( treasury_cap, metadata) = coin::create_currency<TEST_TOKEN>(witness, 3, b"DVD", b"DevDanny", b"Dev Danny Deployed Token", option::some(url::new_unsafe_from_bytes(b"https://pbs.twimg.com/profile_images/1741411753404084224/yLULBONw_400x400.jpg")), ctx);

    event::emit(CreatedCurrency {
        name_of_token: metadata.get_name() ,
        symbol: metadata.get_symbol().to_string(),
        token_image: metadata.get_icon_url(),
        current_total_supply: treasury_cap.total_supply(),
    });

    transfer::public_freeze_object(metadata);
    transfer::public_share_object(treasury_cap)

}



public fun mint_token(treasury_cap: &mut TreasuryCap<TEST_TOKEN>, amount: u64, recipient: address, ctx: &mut TxContext){
    coin::mint_and_transfer(treasury_cap, amount, recipient, ctx);

    event::emit(Minted {
        recipient,
        amount,
        current_total_supply: treasury_cap.total_supply(),
    });
}

public fun burn_token(treasury_cap: &mut TreasuryCap<TEST_TOKEN>, coin: Coin<TEST_TOKEN>){
    coin::burn(treasury_cap, coin);

    event::emit(Burned { current_total_supply: treasury_cap.total_supply() })
}


#[test_only]
public fun test_init(ctx: &mut TxContext) {
    init(TEST_TOKEN {}, ctx);
}

