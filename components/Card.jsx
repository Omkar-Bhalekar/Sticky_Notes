import React, { useState } from "react";


function Card(props) {

    const [color, setColor] = useState('white')
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ backgroundColor: color }} className=" relative text-black h-60 w-80 lg:h-60 lg:w-50 rounded-2xl mx-6 my-6">
            <div className="flex flex-row ml-2  justify-between mr-2 mt-2">
                <h3 className="text-xl ml-2 font-medium">{props.title}</h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-xl hover: border-amber-100  font-extrabold px-3 py-1 "
                >
                    ⋮
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-11  right-5 w-40 bg-white  border flex flex-col">
                        <div className="flex flex-row">
                            <div onClick={() => { setColor("#fee685") }} className=" h-8 w-8 bg-amber-200 cursor-pointer"></div>
                            <div onClick={() => { setColor("#fb64b6") }} className=" h-8 w-8 bg-pink-400 cursor-pointer"></div>
                           
                            <div
                                onClick={() => { setColor("#93c5fd") }}
                                className="h-8 w-8 bg-blue-300 cursor-pointer"
                            ></div> 
                            
                            <div
                                onClick={() => { setColor("#86efac") }}
                                className="h-8 w-8 bg-green-300 cursor-pointer"
                            ></div>

                            <div
                                onClick={() => setColor("#c4b5fd")}
                                className="h-8 w-8 bg-violet-300 cursor-pointer"
                            ></div>
                        </div>
                        <button onClick={() => props.deleteNote(props.index)} className="bg-gray-900 w-full text-white px-4">Delete</button>
                    </div>
                )}


            </div>
            <div className=" flex flex-col  justify-between ml-4 mt-3 text-s font-semibold mb-7">

                <h4 className=" text-[16px] mb-2 mt-4 font-medium">{props.description}</h4>

            </div>
        </div>
    )
}

export default Card;