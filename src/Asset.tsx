import React from "react";
import "./asset.css";

type Props = {
    id: string,
    logo: string,
    title: string,
    amount1: string,
    percent: { value: string, isPositive: boolean },
    img: string[]
}

const Asset = (props: Props) => {

    return (
        <>
            <div className='h-[360px] min-w-[290px] bg-box-bg bg-contain bg-no-repeat  flex flex-col text-white justify-center items-center align-center text-txt-ash relative mr-[70px]  mt-[110px]'>
                <div className='h-[100px] w-[100px] rounded-full  flex items-center justify-center absolute left-50 top-[-50px] ' id={props.id}>
                    <img src={props.logo} alt="bitcoin1" />
                </div>
                <div className="font-fweight text-medium text-[#737BAE] mt-16">{props.title}</div>
                <button className="h-[40px] w-[242px] bg-btn-black border rounded-large border-black flex justify-center items-center mt-2 relative">
                    <div className="font-fweight text-[16px] text-btn-white ">{props.amount1}</div>
                    <div className={`font-fweight text-[16px] absolute right-2 ${props.percent.isPositive ? "text-green" : "text-red"} `}>{props.percent.value}</div>
                </button>
                <div className='mt-2 text-medium'>Price</div>
                <button className="font-fweight text-[16px] bg-btn-black h-[40px] w-[242px] rounded-large text-btn-white border border-black mt-2">$60,000</button>
                <div className='mt-2 text-medium'>TVL</div>
                <button className="h-[40px] w-[122px] border border-black mt-3 bg-btn-black rounded-large flex flex-row justify-evenly items-center">
                    {props.img.map((logo: any, i: number) => {
                        return <img key={i} className="h-[22px] w-[22px]" src={logo} alt="logo" />
                    })}
                </button>
                <div className='mt-2 text-medium'>Polpular pairs</div>
            </div>
        </>
    )

}

export default Asset;
