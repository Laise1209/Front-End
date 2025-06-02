import { IoMdMore } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";

export function Card(){
    return(
        <div className="px-4 py-7 bg-white rounded-md w-[550] flex flex-col gap-4">
            <div className="flex justify-between items-center ">
                <div className="flex">
                    <img src="/images/banner.png" alt="" className="w-10 h-10 rounded-full object-cover"/>
                    <div className="flex flex-col justify-center ml-2">
                        <span className="text-[13px] font-medium">Nome da pessoa</span>
                        <span className="text-[10px] text-ft-gray-white"> 5h atrás</span>
                    </div>
                </div>
                <div>
                    <IoMdMore size={"20px"}/>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold mb-2">Titulo card</h3>
                <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, id exercitationem, ut consectetur amet cumque quam nihil, nobis voluptatem nostrum perspiciatis officiis eum hic numquam adipisci? Sed in sequi necessitatibus.</p>
            </div>
            <div>
                <span className="flex gap-2">
                    <CiChat1 />
                    <span className="text-xs text-ft-gray-white">15</span>
                </span>
            </div>
        </div>
    )
}