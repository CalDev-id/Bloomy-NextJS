import TeamCard from "@/components/TeamCard";
import FotoUser from "@/public/user.png";

import FotoCal from "@/public/cal.jpg";
import FotoSan from "@/public/sandhi.png";
import FotoDit from "@/public/bgadit.jpg";
import FotoTo from "@/public/tiova.jpg";
import FotoNdra from "@/public/andra.jpg";
import FotoRin from "@/public/rin.jpg";
import FotoTio from "@/public/tiova.jpg";

export default function Team() {
  return (
    <div
      id="Team"
      className="lg:w-full lg:h-auto lg:mt-20 lg:pt-20 lg:pb-32 lg:px-14 px-4 my-12 py-8"
    >
      <div className="lg:w-[1200px] lg:mx-auto">
        <h1 className="w-full font-bold text-4xl text-center lg:mb-16 mb-10">
          Bloomy Team
        </h1>
        <div className="flex lg:flex-row flex-col lg:flex-wrap lg:justify-between lg:gap-12 gap-4">
          <TeamCard
            nama="Heical Chandra Syahputra | Politeknik Negeri Jakarta"
            title={["Teknik Informatika", "Machine Learning"]}
            github="https://github.com/Dynavx"
            image={FotoCal}
          />
          <TeamCard
            nama="Andra Rizki Pratama | Politeknik Negeri Jakarta"
            title={["Teknik Informatika", "Machine Learning"]}
            github="https://www.github.com/nulitas"
            image={FotoNdra}
          />
          <TeamCard
            nama="Novebri Tito Ramadhani | Universitas Negeri Yogyakarta"
            title={["Teknik Informatika", "Machine Learning"]}
            github="https://github.com/Benedixx"
            image={FotoTo}
          />
          <TeamCard
            nama="Aditya Bayu Aji | Universitas Muhammadiyah Cirebon"
            title={["Teknik Informatika", "Cloud Computing"]}
            github="https://www.github.com/iniadittt"
            image={FotoDit}
          />
          <TeamCard
            nama="Asrini Salsabila Putri | Universitas Siliwangi"
            title={["Pendidikan Matematika", "Cloud Computing"]}
            github="https://github.com/asrinisp"
            image={FotoRin}
          />
          <TeamCard
            nama="Ahmad Tiova Ian Avola | Universitas Muhammadiyah Malang"
            title={["Teknik Informatika", "Mobile Development"]}
            github="https://github.com/VBeatDead"
            image={FotoTio}
          />
          <TeamCard
            nama="Sandhi Karunia Sugihartana | Politeknik Negeri Jakarta"
            title={["Teknik Informatika", "Mobile Development"]}
            github="https://github.com/Lowl16"
            image={FotoSan}
          />
        </div>
      </div>
    </div>
  );
}
