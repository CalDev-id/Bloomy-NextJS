import Image from "next/image";
import LogoHeader from "@/public/bloomy-hp.png";

export default function Header() {
  return (
    <div className="lg:w-full lg:h-auto lg:pt-10 lg:px-14 p-4">
      <div className="lg:w-[1200px] lg:mx-auto lg:flex lg:justify-between lg:gap-10">
        <div className="lg:w-6/12 lg:flex lg:flex-col lg:gap-8 lg:mt-28 mb-8">
          <h1 className="lg:text-[5rem] text-[4.3rem] font-bold text-[#133C55] leading-none">
            Bloomy : Blue Economy
          </h1>
          <p className="font-medium my-4">
            Melangkah maju dengan teknologi untuk penjualan ikan yang lebih
            baik! Temukan fitur jual beli yang terpadu dan deteksi kesegaran
            berdasarkan klasifikasi A, B, dan C yang akurat dalam satu platform
            inovatif.
          </p>
          <button className="lg:max-w-max bg-[#2693C9] py-3 px-10 text-xl font-semibold text-white rounded-md">
            FIND US HERE
          </button>
        </div>
        <div className="lg:w-5/12 w-full">
          <Image src={LogoHeader} alt="Logo Header" width={500} />
        </div>
      </div>
    </div>
  );
}
