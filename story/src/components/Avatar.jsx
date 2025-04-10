import React from "react"
import './Avatar.css'

export default function Tag(props) {
    return (
        <div className={`avatar flex gap-1 bg-blue-500 rounded-full size-${props.size}`}>
            {props.label}
        </div>
    );
}