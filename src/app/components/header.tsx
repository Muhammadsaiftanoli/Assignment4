import Link from "next/link";
import logo from "../../public/navbarimage.png"
import Image from "next/image";


export default function Header() {
    return (
        <div>
              <div className="headercontainer">
            <Image src={logo} width={200} height={40} alt="logo" className="logo"/>
            <ul>
                <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"/about"}>
                <li>About</li> 
                </Link>
                <Link href={"/contactus"}>
                <li>Contact us</li>
                </Link>
            </ul>
        </div>
        </div>
    )
}