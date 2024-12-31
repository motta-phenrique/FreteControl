import Image from "next/image";
import Logo from "../../public/logo-removebg-preview.png"
import { Button } from "./ui/button";

export default function NavBar() {
    return (
      <div className="p-1 flex justify-center bg-black items-center">
        <Image
            src={Logo}
            alt="Logo Frete"
            width={120}
            height={60}
            quality={100}
        />
      </div>
    );
  }