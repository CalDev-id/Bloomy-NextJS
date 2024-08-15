"use client";

import * as React from "react";

export default function Footer() {
  const [faqs, setFaqs] = React.useState([
    {
      ques: "Apa itu Bloomy?",
      ans: "Bloomy adalah aplikasi mobile yang dirancang untuk membantu individu dalam industri perikanan. Aplikasi ini membantu menentukan apakah ikan segar atau sudah tidak layak konsumsi berdasarkan klasifikasi (A, B, dan C), memprediksi harga, dan memberikan dukungan keputusan melayar bagi para nelayan.",
    },
    {
      ques: "Bagaimana Bloomy menentukan apakah ikan segar atau sudah tidak layak konsumsi berdasarkan klasifikasi A, B, dan C?",
      ans: "Bloomy menggunakan algoritma canggih yang mempertimbangkan faktor tekstur dan penampilan ikan untuk menilai kesegaran-nya. Dengan memasukkan parameter ini ke dalam aplikasi, Bloomy dapat memberikan penilaian yang dapat diandalkan mengenai kualitas ikan dengan klasifikasi grade A, B, atau C.",
    },
    {
      ques: "Bagaimana Bloomy dapat digunakan untuk memprediksi harga ikan?",
      ans: "Pengguna dapat menggunakan informasi prediksi harga dari Bloomy untuk membantu mereka dalam mengambil keputusan penjualan ikan yang lebih baik. Dengan mengetahui perkiraan harga di pasar, pengguna dapat memilih waktu yang tepat untuk menjual ikan mereka dan memaksimalkan keuntungan. Selain itu, pengguna juga dapat membandingkan perkiraan harga dengan biaya produksi atau faktor-faktor lain yang terkait untuk membantu mereka dalam merencanakan strategi penjualan yang lebih efektif.",
    },
    {
      ques: "Apakah Bloomy dapat membantu nelayan dalam pengambilan keputusan berlayar?",
      ans: "Ya, Bloomy memberikan wawasan berharga untuk mendukung keputusan dalam kegiatan perikanan. Dengan mempertimbangkan faktor-faktor seperti kondisi cuaca, suhu air, pola migrasi ikan, dan data tangkapan sebelumnya, aplikasi ini dapat memberikan rekomendasi tentang kapan dan di mana berlayar untuk peluang perikanan yang optimal. Rekomendasi ini didasarkan pada analisis data dan algoritma yang diimplementasikan dalam aplikasi.",
    },
    {
      ques: "Mengapa aplikasi ini dinamai Bloomy?",
      ans: 'Nama "Bloomy" merupakan singkatan dari "blue economy" yang mengacu pada penggunaan berkelanjutan sumber daya samudera untuk pertumbuhan ekonomi. Nama ini menggambarkan fokus aplikasi ini pada industri perikanan, di mana "blue" melambangkan samudera dan sumber daya di dalamnya. Tujuannya adalah untuk mempromosikan praktik-praktik berkelanjutan dan membantu nelayan dalam mengoptimalkan hasil ekonomi mereka sambil menjaga lingkungan.',
    },
    {
      ques: "Apakah Bloomy cocok untuk pengguna non-teknis?",
      ans: "Tentu saja! Bloomy dirancang agar mudah digunakan dan dapat diakses oleh individu tanpa latar belakang teknis. Antarmukanya intuitif, dan aplikasi ini memberikan instruksi yang jelas tentang cara memasukkan data dan menginterpretasikan hasilnya. Tujuannya adalah memberdayakan nelayan, tanpa memandang keahlian teknis mereka, untuk mengambil keputusan yang terinformasi dan mendapatkan manfaat dari kemampuan aplikasi ini.",
    },
  ]);

  const [answer, setAnswer] = React.useState(
    "Bloomy adalah aplikasi mobile yang dirancang untuk membantu individu dalam industri perikanan. Aplikasi ini membantu menentukan apakah ikan segar atau sudah tidak layak konsumsi berdasarkan klasifikasi (A, B, dan C), memprediksi harga, dan memberikan dukungan keputusan melayar bagi para nelayan."
  );

  const faqHandlerChange = async (element: any) => {
    setAnswer(element.target.value);
  };

  return (
    <div className="w-full lg:h-[40rem] md:h-[42rem] h-[45rem] lg:mt-32 mt-52 lg:pt-20 lg:pb-32 bg-[#2693C9] text-white">
      <div className="lg:w-[1200px] md:w-[868px] sm:w-[643px] w-[418px] lg:mx-auto relative">
        <div className="lg:w-full absolute lg:z-10 top-[-10rem] lg:top-[-14rem] h-[38rem]">
          <div className="bg-white text-black border-4 lg:p-10 border-black lg:mx-0 mx-4 rounded-xl p-4 flex lg:flex-row flex-col lg:justify-between gap-8 w-full">
            <div className="lg:w-1/2 flex flex-col w-full">
              <h1 className="lg:w-1/2 w-full font-semibold lg:text-4xl text-3xl mb-4 lg:mb-8">
                FAQs.
              </h1>
              <ul className="flex flex-col gap-2 w-full">
                {faqs &&
                  faqs.map((faq: any, index: any) => {
                    return (
                      <button
                        key={index}
                        value={faq.ans}
                        onClick={(e) => faqHandlerChange(e)}
                        className="w-full bg-[#eee] lg:py-4 py-3 px-5 text-left border-2 border-[#ccc] rounded-lg cursor-pointer"
                      >
                        {faq.ques}
                      </button>
                    );
                  })}
              </ul>
            </div>
            <div className="lg:w-1/2 lg:flex lg:flex-col">
              <h1 className="lg:w-1/2 w-full font-semibold lg:text-4xl text-3xl mb-4 lg:mb-8">
                Ans.
              </h1>
              <div className="w-full h-full bg-yellow-400 rounded-lg lg:p-7 p-5">
                <p>{answer}</p>
              </div>
            </div>
          </div>
          <div className="lg:mt-10 mt-10 mx-4">
            <div className="flex lg:flex-row flex-col gap-y-8 w-full">
              <div className="lg:w-8/12 flex flex-col lg:gap-3 gap-2 w-full">
                <h1 className="text-5xl">CH2-PS086</h1>
                <p className="font-light">Bloomy : Blue Economy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
