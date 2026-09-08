import React, { useState } from "react";


function Card(props) {

    const [color, setColor] = useState('white')
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ backgroundColor: color }} className=" relative text-black h-60 w-80 lg:h-60 lg:w-50 rounded-2xl mx-6 my-6">
            <div className="flex flex-row ml-2  justify-between mr-2 mt-2">
                <h3 className="text-xl ml-2 font-medium mt-2">{props.title}</h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-xl   font-extrabold px-3 py-1 mt-2 "
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
                        <button onClick={() => props.deleteNote(props.id)} className="bg-gray-900 w-full text-white px-4">Delete</button>
                    </div>
                )}


            </div>
            <div className="px-4 mt-10 h-37.5 overflow-hidden">
                <h4 className="font-semibold wrap-break-word">
                    {props.description}
                </h4>
            </div>
        </div>
    )
}

export default Card;