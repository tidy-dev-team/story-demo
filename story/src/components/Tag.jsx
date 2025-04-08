import React from "react"
import './Tag.css'

export default function Tag(props) {
    return (
        <div className={`flex gap-1 text-xs bg-zinc-200 px-3 py-2 rounded-3xl size-fit cursor-pointer font-[inter] ${props.size} ${props.shape} ${props.ro} hover:bg-zinc-300`}>
            {props.label}
            <span class="material-symbols-rounded text-base! leading-none text-black">
                close
            </span>
        </div>
    );
}