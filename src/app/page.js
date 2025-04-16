import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-col text-slate-200 p-3 text-xl items-center">
        <h1 className="text-3xl">Dailies</h1>
        <div className="flex flex-col rounded-2xl border-2 border-black bg-blue-500 p-2 m-2">
          <Image
            src={
              "https://media.discordapp.net/attachments/1031245628933668895/1362106346333536306/SPOILER_raw.png?ex=68012fe3&is=67ffde63&hm=504ad370ece34a2d50c49aa721242d52085bca1c61f9676e021b4d858e8d4225&=&format=webp&quality=lossless&width=640&height=960"
            }
            alt=" "
            height={500}
            width={250}
            className="rounded-2xl border-2 border-black"
          ></Image>
          <p className="p-2 text-center">Do your dailies!</p>
        </div>
      </div>
    </>
  );
}
