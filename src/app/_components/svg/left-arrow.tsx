import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const LeftArrow = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, color, ...props }, ref) => (
        <svg
            ref={ref}
            {...props}
            className={className}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6 12H18M6 12L11 7M6 12L11 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
);

LeftArrow.displayName = "LeftArrow";
export default LeftArrow;
