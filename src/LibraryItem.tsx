import {useState} from "react";

function LibraryItem() {
  const [isActive,setIsActive] = useState(false)
  return <div className="flex flex-row">
    <div className="w-256.5 h-133.75 bg-[#1A1D1F] border border-[#1F272A] rounded-xl pl-8">
      <div className='flex flex-row mt-[32px]'>
        <img className="w-[195px] h-[272]" src="/Kitob.png" alt=""/>
        <div className="ml-5">
          <h1 className="font-bold text-[28px] ">Shaxmatdagi qobiliyatliringizga qayta baxo bering</h1>
          <div className="mt-[17px] flex flex-row ">
            <img className='h-[28px] w-[28px]' src="/cash-outline%201.svg" alt="icon"/>
            <h3 className="font-bold text-5 text-[#F7F9FA] ml-3">55 000.00 uzs</h3>
            <p className="line-through decoration-red-500 ml-2">160 000.00 uzs</p>
          </div>
          <div className='flex flex-row'>
            <div className="w-[187px] h-[62px] border border-[#2C2F31] pl-3 my-3">
              <div className="flex flex-row ">
                <img src="/Chess%20Symbols.svg" alt="icon"/>
                <p className="pl-1">Daraja</p>
              </div>
              <p>Boshlangich</p>

            </div>

            <div className="w-[187px] h-[62px] border border-[#2C2F31] pl-3 my-3">
              <div className="flex flex-row ">
                <img src="/icons8-user%201.svg" alt="icon"/>
                <p className="pl-1">Muallif</p>
              </div>
              <p>Jeremy Silman</p>

            </div>

            <div className="w-[187px] h-[62px] border border-[#2C2F31] pl-3 my-3">
              <div className="flex flex-row ">
                <img src="/Vector.svg" alt="icon"/>
                <p className="pl-1">Sahifa soni</p>
              </div>
              <p>231</p>

            </div>

            <div className="w-[187px] h-[62px] border border-[#2C2F31] pl-3 my-3">
              <div className="flex flex-row ">
                <img src="/person-circle-outline%202.svg" alt="icon"/>
                <p className="pl-1">Chop etilgan sana</p>
              </div>
              <p>2002</p>

            </div>
          </div>
          <div className="flex flex-row gap-4 mt-5">
            <button onClick={()=>setIsActive(!isActive)} className={`flex flex-row ${isActive ? 'bg-[#F7F9FA1A]/10' : 'bg-[#1C92E0]'} w-[238px] h-[50px] text-[20px] font-medium gap-x-[10px] pl-10 items-center rounded-lg`}>
              <img className="w-6 h-6" src="/Component%201.svg" alt="icon"/>
              <p>{isActive ? 'Savatchada' : 'Savatchaga'}</p>
            </button>

            <button className='w-12.5 h-12.5 bg-[#F7F9FA1A]/10 rounded-lg border border-[#F7F9FA4D]/30 flex items-center justify-center'>
              <img src="/heart-outline.svg" alt="icon"/>
            </button>

            <button className='w-12.5 h-12.5 bg-[#F7F9FA1A]/10 rounded-lg border border-[#F7F9FA4D]/30 flex items-center justify-center'>
              <img src="/share.svg" alt="icon"/>
            </button>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-[24px] text-white mt-6">Kitob haqida</h2>
      <p className="text-[#C2C4C5] text-[16px]">Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi sayohatni baham ko'radi. va shaxmat o'yinchisini/sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor.</p>
    </div>
    <div className="flex flex-col ml-6 ">
      <img className='w-[326px] h-[192px] ' src="/Banners.png" alt="img"/>
      <img  className='mt-6' src="/Frame%20427318397.svg" alt="image"/>
    </div>

  </div>
}

export default LibraryItem;