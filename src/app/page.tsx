import Image from "next/image";
import Y17 from "../public/y17.png";
import Y18 from "../public/y18.png";
import v30 from "../public/v30.png";
import y03t from "../public/y03t.png";
import y40 from "../public/y40.png";
import y40e from "../public/y40e.png";
// import Header from "./components/header";
import Link from "next/link";

export default function Home() {
 const products = [
    { imagesrc: Y17, name: "Vivo Y17", description: "This is a very beautiful cell phone for you. ", btn: "./models/Y17" },
    { imagesrc: Y18, name: "Vivo Y18", description: "This is a very beautiful cell phone for you. ", btn: "./models/Y18" }, 
    { imagesrc: y40, name: "Vivo Y40", description: "This is a very beautiful cell phone for you.", btn: "./models/Y40" }, 
    { imagesrc: y40e, name: "Vivo Y40e", description: "This is a very beautiful cell phone for you. ", btn: "./models/Y40e" }, 
    { imagesrc: v30, name: "Vivo V30", description: "This is a very beautiful cell phone for you. ", btn: "./models/V30" }, 
    { imagesrc: y03t, name: "Vivo Y03t", description: "This is a very beautiful cell phone for you. ", btn: "./models/Y03t" }
  ];

  const newarr = products.map((product, index) => { 
    return (
      <div className="innerContainer" key={index}>
        <Image src={product.imagesrc} width={200} height={150} alt={product.name} className="blodimage" />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <Link href={product.btn}>
          <button className="btn btn-outline btn-success blodbtn">Read More</button>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className="childContainer">
        {newarr}
      </div>
    </div>
  );
}



