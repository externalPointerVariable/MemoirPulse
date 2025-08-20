import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-indigo-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button 
            className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} transition-colors duration-200 hover:bg-indigo-700`} 
            {...props}
        >
            {children}
        </button>
    );
}