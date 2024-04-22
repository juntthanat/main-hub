
export default function applicationContent(content:React.ReactNode) {
    return (
        <div className="absolute w-full h-full py-32 px-28">
          <div className="w-full h-full bg-white rounded-lg bg-white overflow-auto p-8 text-black">
            {content}
          </div>
        </div>
      );
    }
    
    