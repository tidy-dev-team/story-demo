import React from "react"
import './Tag.css'

export default function Tag(props) {
    return (
        <div className={`flex text-xs bg-zinc-200 px-3 py-2 rounded-3xl size-fit ${props.size} ${props.shape}`}>
            {props.label}
        </div>
    );
}