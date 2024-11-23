import React from 'react';
import { cn, textGlow } from '@/lib/utils';

export function AsciiButton({
    ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={cn(
                "hover:text-[#0A0A0A] transition-colors leading-4",
                `hover:bg-[#00FF77]`,
                props.className
            )}
            style={{
                ...textGlow(),
                ...props.style
            }}
        >
            {`+${'-'.repeat(String(props.children).length + 2)}+`}<br />
            {`| ${props.children} |`}<br />
            {`+${'-'.repeat(String(props.children).length + 2)}+`}
        </button>
    )
}