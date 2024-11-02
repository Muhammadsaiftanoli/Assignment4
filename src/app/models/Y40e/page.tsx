import Image from "next/image";
import Y40e from "../../../public/y40e.png";



export default function model1() {
    return (
        <div className="flex flex-row justify-items-center justify-center responsive">
            <Image src={Y40e} width={800} height={800} alt="y40e"></Image>
            <div>
            <h1 className="mt-10 size-15">Hello Y40e</h1>
                <p className="text-white text-xl"><b>Price: </b>Rs. 87,999</p>
                <p className="text-white text-xl"><b>Processor: </b>4x2.35 GHz Cortex-A53</p>
                <p className="text-white text-xl"><b>Storage: </b>4GB + 128GB</p>
                <p className="text-white text-xl"><b>Battery: </b>5000 mAh (TYP)</p>
                <p className="text-white text-xl"><b>Charging Power: </b>80W</p>
                <p className="text-white text-xl"><b>Battery Type: </b>Li-ion battery</p>
            </div>
        </div>
    )
}