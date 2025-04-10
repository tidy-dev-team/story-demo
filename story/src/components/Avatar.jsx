import React from "react"
import './Avatar.css'

export default function Avatar(props) {
    return (
        <div className={`avatar flex justify-center items-center bg-blue-500 rounded-full size-${props.size}`}>
            {props.label}
        </div>
    );
}