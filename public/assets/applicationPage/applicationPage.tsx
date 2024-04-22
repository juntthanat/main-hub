
export default function applicationPage(titleName:string) {
return (
    <div>
      <div className="z-10 absolute w-full h-32 flex items-center px-32 text-5xl font-bold">
        <a href={"/game"} className="text-2xl pr-10">
            Back
        </a>    
        {titleName}
      </div>
      <div className="absolute w-full h-full py-32 px-28">
        <div className="w-full h-full bg-white rounded-lg bg-white overflow-auto p-8 text-black">
        </div>
      </div>
    </div>
  );
}

