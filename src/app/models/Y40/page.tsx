import Image from "next/image";
import Y40 from "../../../public/y40.png";



export default function model1() {
    return (
        <div className="flex flex-row justify-items-center justify-center responsive">
            <Image src={Y40} width={800} height={800} alt="Y40"></Image>
            <div>
            <h1 className="mt-10 size-15">Hello Y40</h1>
                <p className="text-white text-xl"><b>Price: </b>Rs. 99,999</p>
                <p className="text-white text-xl"><b>Processor: </b>4 × 2.5 GHz + 4 × 2.0 GHz</p>
                <p className="text-white text-xl"><b>Storage: </b>8GB + 256GB</p>
                <p className="text-white text-xl"><b>Battery: </b>5500 mAh (TYP)</p>
                <p className="text-white text-xl"><b>Charging Power: </b>80W</p>
                <p className="text-white text-xl"><b>Battery Type: </b>Li-ion battery</p>
            </div>
        </div>
    )
}