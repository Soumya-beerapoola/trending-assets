import React from 'react';

const Home = () => {

    return (
    <>
    <div className="font-fweight text-[16px]">Trending assets</div>
    <div className='bg-box-bg bg-cover flex flex-col'>
        <div className="font-fweight text-[16px] text-[#737BAE]">Bitcoin (BTC)</div>
        <button className="h-40 w-242 bg-btn-black border border-black"> 
        <div className="font-fweight text-[16px] text-btn-white">$31,812.80 </div>
        <div className="font-fweight text-[16px] text-btn-green">+10%</div>
        </button>
        <div>Price</div> 
        <button className="font-fweight text-[16px] text-btn-white border border-black">$60,000</button>
        <div>TVL</div>
        <button className="h-40 w-122 border border-black"> 1 2 3</button>
        <div>Polpular pairs</div>
    </div>
    </>
)
}


export default Home;