import React from "react";
import './Avatar.css';

interface AvatarProps {
    size: string;
    label: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <div className={`avatar flex justify-center items-center bg-blue-500 rounded-full size-${props.size ?? "md"}`}>
            {props.label}
        </div>
    );
};

export default Avatar;