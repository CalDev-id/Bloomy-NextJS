import Image from "next/image";
import GithubIcon from "@/public/github.png";

export default function TeamCard(props: any) {
  return (
    <div className="lg:w-[30%] max-h-[400px] w-full bg-black relative z-10 flex flex-col justify-end rounded-2xl">
      <div className="absolute w-full p-4 flex flex-col-reverse gap-2 lg:flex lg:flex-col">
        <h1 className="bg-white max-w-max py-2 px-5 rounded-lg text-sm font-semibold">
          {props.nama}
        </h1>
        <div className="flex flex-row gap-2 lg:justify-between">
          <div className="hidden lg:flex lg:gap-2">
            {props.title &&
              props.title.map((element: any, index: any) => {
                return (
                  <p
                    key={index}
                    className="max-w-max text-white border-2 border-white my-auto py-1 px-4 rounded-lg text-sm"
                  >
                    {element}
                  </p>
                );
              })}
          </div>
          <a href={props.github}>
            <Image
              src={GithubIcon}
              alt="Github Icon"
              width={36}
              height={36}
              className="rounded-xl"
            />
          </a>
        </div>
      </div>
      <Image src={props.image} alt="Default user" className="rounded-2xl w-full h-full" />
    </div>
  );
}
