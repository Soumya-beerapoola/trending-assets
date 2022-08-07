import bitcoin from "./assets/images/Bitcoin SV (BSV) (1).svg";
import solana from "./assets/images/Solana (SOL).svg";
import shiba from "./assets/images/SHIBA.svg";
import ethereum from "./assets/images/Ethereum.svg";
import binance from "./assets/images/Binance Coin (BNB).svg";

export const assets = [
    {
        id:"bitcoin",
        logo  :bitcoin,
        title :"Bitcoin(BTC)",
        amount1 :"$31,812.80",
        percent: {
            value :"+10%",
            isPositive: true
        },
        img:[solana,ethereum,binance]  
    } ,
    {
        id:"solana",
        logo :solana,
        title :"Solana(SQL)",
        amount1 :"$32,83",
        percent: {
            value :"-12.32%",
            isPositive: false
        },
        img:[bitcoin,ethereum,binance]   
    } ,
    {   
        id:"ethereum",
        logo :ethereum,
        title :"Ethereum(ETH)",
        amount1 :"$1,466.45",
        percent: {
            value :"-11.93%",
            isPositive: false
        },
        img:[solana,bitcoin,binance ]   
    } ,
    {
        id:"binance",
        logo :binance,
        title :"Binance USD(BUSD)",
        amount1 :"$1.00",
        percent: {
            value :"+0.26%",
            isPositive: false
        },
        img:[solana,ethereum,binance]   
    } ,
    {
        id :"shiba",
        logo :shiba,
        title :"Shiba Inu (SHIB)",
        amount1 :"$0.00000001948",
        percent: {
            value :"-8.1%",
            isPositive: false
        },
        img:[solana,ethereum,binance]   
    }
]