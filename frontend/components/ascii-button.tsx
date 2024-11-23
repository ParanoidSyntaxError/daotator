import React from 'react';
import { cn, primaryColor, textGlow } from '@/lib/utils';

interface AsciiButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    colorHex?: string;
}

export function AsciiButton({
    colorHex = primaryColor,
    ...props
}: AsciiButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                "hover:text-[#0A0A0A] transition-colors leading-4",
                `hover:bg-[${colorHex}]`,
                props.className
            )}
            style={{
                ...textGlow(colorHex),
                ...props.style
            }}
        >
            {`+${'-'.repeat(String(props.children).length + 2)}+`}<br />
            {`| ${props.children} |`}<br />
            {`+${'-'.repeat(String(props.children).length + 2)}+`}
        </button>
    )
}