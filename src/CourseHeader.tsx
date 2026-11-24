import IconAndText from "./IconAndText.tsx";
import {useState} from "react";

function CourseHeader() {
  let rating = 4;
  let ratingArray = Array.from({length: 5});

  const [isActive,setIsActive] = useState(false)

  return <div className="relative w-full min-w-240 h-48.5 bg-black rounded-lg border-[#F7F9FA]/8 border overflow-hidden">
    <img className="absolute blur-xl top-0 left-0 z-0  w-full h-full object-cover" src="/header-background.png" alt="image"/>
    <div className="absolute flex flex-row justify-between w-full h-full p-8">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#F7F9FA] text-[32px] font-bold">Shaxmat donalari bilan tanishuv</h1>
          <div className="flex flex-row items-center gap-3">
            <img className="w-7 h-7" src="/price.svg" alt="icon"/>
            <p className="text-[#F7F9FA] text-[20px] font-bold">55 000.00 uzs</p>
            <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">160 000.00 uzs</p>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <IconAndText icon="/beginner.svg" text="Havaskor"/>
          <IconAndText icon="/category.svg" text="Matematika"/>
          <IconAndText icon="/author.svg" text="Andre Miladze"/>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end h-full pt-1.75">
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-1">
            {ratingArray.map((_, index) => <img key={index} src={`/star-${index < rating ? 'filled' : 'empty'}.svg`} alt="icon"/>)}
          </div>
          <div className="w-px h-4 bg-[#1A2226]"></div>
          <div className="flex flex-row items-center">
            <p className="text-[#FFFFFF] text-[20px] font-medium">4.0</p>
            <p className="text-[14px] text-[#6D7274]">(234 ta izoh)</p>
          </div>
        </div>

        <div className="flex flex-row gap-4" onClick={()=> setIsActive(!isActive)}>
          <button className={`h-12.5 px-10 rounded-lg ${isActive ? 'bg-[#F7F9FA1A]' : 'bg-[#1C92E0]'} text-white`}>{isActive ? 'Kurs sotib olingan' : 'Kursni sotib olish'}</button>

          <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
            <img src="/heart.svg" alt="icon"/>
          </button>

          <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
            <img src="/share.svg" alt="icon"/>
          </button>
        </div>
      </div>
    </div>
  </div>;
}

export default CourseHeader;