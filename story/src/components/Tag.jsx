import React from "react"
import './Tag.css'

export default function Tag(props) {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:opsz@14..32&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,400,0,0" />

            <div className={`tag flex gap-1 text-xs bg-zinc-200 px-3 py-2 rounded-3xl size-fit cursor-pointer select-none font-[inter] ${props.size} ${props.shape} ${props.ro} hover:bg-zinc-300`}>
                <span className="material-symbols-rounded text-base! leading-none">
                    {props.icon}
                </span>
                {props.label}
                <span className="material-symbols-rounded text-base! leading-none text-black close">
                    close
                </span>
            </div>
        </>
    );
}