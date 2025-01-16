import React from 'react';

const Card = ({ title, subtitle, description, onClick }) => {
    return (
        <div className="bg-white rounded-lg mx-auto shadow-md   overflow-hidden h-38">
            <div className='border-l-4 border-l-[#A53DFF] rounded-lg p-4 sm:p-6'>
                <h3 className="text-xl font-semibold text-[#132238] sm:text-2xl">
                    {title} <span className="text-[#132238]">({subtitle})</span>
                </h3>
                <p className="text-[#424E60] text-sm sm:text-base  mt-2">{description}</p>
            </div>
        </div>
    );
};

export default Card;
