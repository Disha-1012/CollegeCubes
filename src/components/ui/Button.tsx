"use client";
interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?:
    "button" |
    "submit" |
    "reset";
    variant?:
    "primary" |
    "secondary" |
    "danger";
    disabled?: boolean;
    loading?: boolean;
}
export default function Button({

    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    loading = false
}: Props) {
    const variants = {
        primary:
            `
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
hover:from-blue-700
hover:to-purple-700
`,
        secondary:
            `
bg-gray-200
dark:bg-slate-800
text-gray-900
dark:text-white
hover:bg-gray-300
dark:hover:bg-slate-600
`,
        danger:
            `
bg-red-600
text-white
hover:bg-red-700
`
    };
    return (

        <button
            type={type}
            onClick={onClick}
            disabled={
                disabled ||
                loading
            }
            className={`
px-6
py-3
rounded-xl
font-semibold
shadow-md
transition-all
duration-300
hover:scale-105
active:scale-95
disabled:opacity-50
disabled:cursor-not-allowed
${variants[variant]}
`}
        >
            {
                loading
                    ?
                    "Loading..."
                    :
                    children
            }
        </button>
    )
}