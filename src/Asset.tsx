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
            <div className=" h-[350px] w-[290px] relative  mt-[200px] z-[1] mr-[70px] bg-card-color rounded-t-[30px] rounded-r-[30px] rounded-b-[20px] rounded-l-[20px]">
                <div className="left border-l-[1px] border-l-solid border-l-b-color border-t-[1px] border-t-solid border-t-b-color rounded-t-[30px] rounded-r-[35px] bg-card-color h-full w-[91px] absolute top-[-4px] left-[-4px] rounded-bl-[18px]"></div>
                <div className="z-[4] w-100 h-100 rounded-full absolute left-[50%] top-[-47px] translate-x-[-50%] " id={props.id}>
                    <div className='h-100 w-100 rounded-full  flex items-center justify-center absolute left-50 top-[-1px] '>
                        <img src={props.logo} alt="bitcoin1" />
                    </div>
                </div>
                <div className="z-[2] w-123 h-123 bg-page-bg rounded-full absolute left-[50%] translate-x-[-50%] top-[-55px] border-b-[2px] border-b-solid border-b-b-color "></div>
                <div className="right border-r-[1px] border-r-solid border-r-b-color border-t-[1px] border-t-solid border-t-b-color rounded-t-[35px] rounded-r-[30px] bg-card-color h-full w-[91px] absolute top-[-4px] right-[-4px] rounded-br-[18px]"></div>
                <div className="h-[150] w-[360] bg-page-bg  z-[3] absolute top-[-204]"></div>
                <div className='w-full  flex  flex-col justify-center items-center absolute top-[80px] text-center'>
                    <div className="font-fweight text-medium text-[#737BAE]">{props.title}</div>
                    <button className="h-[40px] w-[242px] bg-btn-black border rounded-large border-black flex justify-center items-center relative mt-2 relative">
                        <div className="font-fweight text-[16px] text-btn-white ">{props.amount1}</div>
                        <div className={`font-fweight text-[16px] ${props.percent.isPositive ? "text-green" : "text-red"} absolute right-3`}>{props.percent.value}</div>
                    </button>
                    <div className="font-fweight text-[16px] text-[#737BAE] ">
                        <div className='mt-2 text-medium'>Price</div>
                        <button className="font-fweight text-[16px] bg-btn-black h-[40px] w-[242px] rounded-large text-btn-white border border-black mt-2">$60,000</button>
                        <div className='mt-2 text-medium'>TVL</div>
                        <button className="h-[40px] w-[122px] border border-black mt-3 bg-btn-black rounded-large flex flex-row justify-evenly items-center m-auto">
                            {props.img.map((logo: any, i: number) => {
                                return <img key={i} className="h-[22px] w-[22px]" src={logo} alt="logo" />
                            })}
                        </button>
                        <div className='mt-2 text-medium'>Polpular pairs</div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Asset;
