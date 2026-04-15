import React, {useId} from 'react';

const Select = React.forwardRef( function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='inline-block mb-1 pl-1 text-gray-300'>{label}</label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-gray-800 text-white outline-none focus:bg-gray-700 duration-200 border border-gray-700 focus:border-indigo-400 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;