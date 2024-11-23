"use client";

import { textGlow } from '@/lib/utils';
import React, { useState, ChangeEvent } from 'react';

interface AsciiTextAreaProps extends React.HTMLAttributes<HTMLElement> {
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function AsciiTextArea({ 
    onChange,
    ...props
}: AsciiTextAreaProps) {
    const [value, setValue] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
                    +<br />|<br />|<br />|<br />|<br />|<br />|<br />+
                </div>
                <div>
                    <div
                        className='text-clip overflow-hidden h-[0.75rem] leading-4 text-center select-none pointer-events-none'
                    >
                        {"-".repeat(9999)}
                    </div>
                    <textarea
                        className="w-full px-2 text-white bg-transparent outline-none resize-none"
                        rows={4}
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
                    +<br />|<br />|<br />|<br />|<br />|<br />|<br />+
                </div>
            </div>
        </div>
    )
}

