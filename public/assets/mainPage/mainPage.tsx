
export default function mainPage(titleName:string, content:React.ReactNode) {
return (
    <div>
      <div className="absolute w-full h-32 flex items-center px-40 text-5xl font-bold">
        {titleName}
      </div>
      <div className="absolute w-full h-full py-32 px-28">
        <div className="w-full h-full bg-white rounded-lg bg-white overflow-auto p-8 text-black">
          {content}
        </div>
      </div>
    </div>
  );
}
