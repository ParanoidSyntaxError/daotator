"use client";

import { cn, textGlow } from '@/lib/utils';
import React, { useState, ChangeEvent } from 'react';

interface AsciiInputProps extends React.HTMLAttributes<HTMLElement> {
    type?: React.HTMLInputTypeAttribute;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function AsciiInput({ 
    type,
    onChange,
    ...props
}: AsciiInputProps) {
    const [value, setValue] = useState(props.defaultValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if(onChange) {
            onChange(event);
        }
    }

    return (
        <div
            {...props}
        >
            <div
                className="flex flex-row"
                style={{ ...textGlow() }}
            >
                <div
                    className="leading-4 select-none pointer-events-none"
                >
                    +<br />|<br />+
                </div>
                <div>
                    <div
                        className='text-clip overflow-hidden h-[0.75rem] leading-4 text-center select-none pointer-events-none'
                    >
                        {"-".repeat(9999)}
                    </div>
                    <input
                        type={type}
                        className={cn(
                            "w-full px-2 text-white bg-transparent outline-none",
                            "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        )}
                        value={value}
                        onChange={handleChange}
                    />
                    <div
                        className='text-clip overflow-hidden h-[0.75rem] leading-4 text-center -translate-y-1 select-none pointer-events-none'
                    >
                        {"-".repeat(9999)}
                    </div>
                </div>
                <div
                    className="leading-4 select-none pointer-events-none"
                >
                    +<br />|<br />+
                </div>
            </div>
        </div>
    )
}

