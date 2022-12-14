import React from 'react';
import activity from "./assets/images/activity.svg";
import { assets } from './contants';
import Asset from "./Asset";
import "./asset.css";

const Home = () => {
    return (
        <>
            <div className="mx-[85px] py-[100px] font-[tomorrow]">
                <div className="font-fweight text-[16px] h-6 w-48 items-center flex justify-evenly text-white">
                    <div> <img src={activity} alt="logo" /> </div>
                    <div>
                        Trending assets
                    </div>
                </div>
                <div className='flex flex-row flex-wrap'>
                    {assets.map((asset) => {
                        return <Asset key={asset.title} {...asset}></Asset>
                    })}
                   
                </div >
            </div>
        </>
    )
}


export default Home;
