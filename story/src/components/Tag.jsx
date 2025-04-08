import React from "react"
import './Tag.css'

export default function Tag(props) {
    return (
        <div className={`tag flex gap-1 text-xs bg-zinc-200 px-3 py-2 rounded-3xl size-fit cursor-pointer select-none font-[inter] ${props.size} ${props.shape} ${props.ro} hover:bg-zinc-300`}>
            <span class="material-symbols-rounded text-base! leading-none">
            {props.icon}
            </span>
            {props.label}
            <span class="material-symbols-rounded text-base! leading-none text-black close">
                close
            </span>
        </div>
    );
}