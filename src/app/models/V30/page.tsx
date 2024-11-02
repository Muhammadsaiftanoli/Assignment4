import Image from "next/image";
import V30 from "../../../public/v30.png";



export default function model1() {
    return (
        <div className="flex flex-row justify-items-center justify-center responsive">
            <Image src={V30} width={800} height={800} alt="V30"></Image>
            <div>
            <h1 className="mt-10 size-15">Hello V30</h1>
                <p className="text-white text-xl"><b>Price: </b>Rs. 129,999</p>
                <p className="text-white text-xl"><b>Processor: </b>Qualcomm Snapdragon® 7 Gen 3</p>
                <p className="text-white text-xl"><b>Storage: </b>RAM: 12 GB + ROM: 256 GB</p>
                <p className="text-white text-xl"><b>Battery: </b>5000 mAh (TYP)</p>
                <p className="text-white text-xl"><b>Charging Power: </b>80W</p>
                <p className="text-white text-xl"><b>Battery Type: </b>Li-ion battery</p>
            </div>
        </div>
    )
}