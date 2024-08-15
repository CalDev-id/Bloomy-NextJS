import Image from "next/image";
import Logo from "@/public/logo-bloomy-biru.png";

export default function Navbar() {
  return (
    <div
      id="Navbar"
      className="lg:w-full lg:h-auto border-b-4 border-b-slate-200"
    >
      <div className="lg:w-[1200px] lg:mx-auto lg:flex lg:justify-between lg:py-5 lg:px-10 px-4 ">
        <div>
          <a href="/">
            <Image
              src={Logo}
              alt="Logo Bloomy"
              className="lg:w-[16rem] lg:my-0 w-[10rem] mx-auto my-4"
            />
          </a>
        </div>
        <ul className="lg:flex lg:gap-8 lg:my-auto lg:py-2 font-medium flex justify-between mb-4">
          <li>
            <a href="#Fitur">Fitur</a>
          </li>
          <li>
            <a href="#Teknologi">Teknologi</a>
          </li>
          <li>
            <a href="#Team">Bloomy Team</a>
          </li>
          <li>
            <a href="#Joined">Download</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
