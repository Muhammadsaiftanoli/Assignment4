import Image from "next/image";
import Y03t from "../../../public/y03t.png";



export default function model1() {
    return (
        <div className="flex flex-row justify-items-center justify-center responsive">
            <Image src={Y03t} width={800} height={800} alt="V03t"></Image>
            <div>
            <h1 className="mt-10 size-15">Hello V03t</h1>
                <p className="text-white text-xl"><b>Price: </b>Rs. Rs. 27,999</p>
                <p className="text-white text-xl"><b>Processor: </b>1.8GHz*2 +1.8GHz*6</p>
                <p className="text-white text-xl"><b>Storage: </b>4 GB + 128 GB / 4 GB + 64 GB</p>
                <p className="text-white text-xl"><b>Battery: </b>5000 mAh (TYP)</p>
                <p className="text-white text-xl"><b>Charging Power: </b>15W</p>
                <p className="text-white text-xl"><b>Battery Type: </b>Li-ion battery</p>
            </div>
        </div>
    )
}