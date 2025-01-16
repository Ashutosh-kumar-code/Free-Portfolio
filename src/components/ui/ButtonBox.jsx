import React from 'react'

const ButtonBox = ({ text, className, onClick, type = 'button', disabled = false,image }) => {
    return (
        <button
          image={image}
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`px-4 flex   gap-2 py-2 text-base font-semibold border border-[#A53DFF] text-[#A53DFF] rounded hover:bg-purple-700 hover:text-white transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >

            {image ? <span><img src={image} alt=''/></span> : ""}
          {text}
        </button>
      );
}

export default ButtonBox
