import {useState} from "react";

function SelectedBook({BookImg,Title,DiscountPrice,Price,onDelete}) {
  const [number,setNumber] = useState(0)
  return <div className="relative w-5xl h-46 bg-[#1A1D1F] border-[#1F272A] rounded-xl flex flex-row">
    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-2xl bg-[#151D21] border border-[#1F272A] flex items-center justify-center"><button onClick={onDelete}>x</button></div>
    <div className="w-36 h-36 pl-5 py-5">
      <img src={BookImg} alt="img"/>
    </div>
    <div className="pt-6 pl-3 ">
      <h1 className="text-[#F7F9FA] text-xl font-bold">{Title}</h1>

      <div className="flex flex-row gap-116.75">
        <div>
          <h1 className="text-[#82CC27] text-[24px] font-bold pt-3.5">{DiscountPrice}</h1>
          <p className="text-4 line-through decoration-red-500">{Price}</p>
        </div>
        <div className="flex flex-row pt-9 gap-1.5 pr-6 select-none">
          <button onClick={() => setNumber(Math.max(0, number - 1))} className={`#DC2D2D w-10 h-10 border-[#FFFFFF]/30 rounded-lg bg-red-500 `}>-</button>
          <div className="w-22 h-10 bg-[#FFFFFF]/4 rounded-lg border-[#FFFFFF]/12 flex items-center justify-center">
            <p>{number}</p>
          </div>
          <button onClick={()=>setNumber(number+1)} className="#DC2D2D w-10 h-10 border-[#FFFFFF]/30 rounded-lg bg-[#82CC27]">+</button>
        </div>
      </div>
    </div>
  </div>
}

export default SelectedBook;