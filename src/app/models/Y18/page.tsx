import Image from "next/image";
import Y18 from "../../../public/y18.png";



export default function model1() {
    return (
        <div className="flex flex-row justify-items-center justify-center responsive">
            <Image src={Y18} width={800} height={800} alt="y17"></Image>
            <div>
            <h1 className="mt-10 size-15">Hello Y18</h1>
                <p className="text-white text-xl"><b>Price: </b>Rs. Rs. 42,999</p>
                <p className="text-white text-xl"><b>Processor: </b>2 × 2.0 GHz + 6 × 1.8 GHz</p>
                <p className="text-white text-xl"><b>Storage: </b>6GB + 128GB</p>
                <p className="text-white text-xl"><b>Battery: </b>5000 mAh (TYP)</p>
                <p className="text-white text-xl"><b>Charging Power: </b>15W</p>
                <p className="text-white text-xl"><b>Battery Type: </b>Li-ion battery</p>
            </div>
        </div>
    )
}