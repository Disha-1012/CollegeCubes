interface Props {
    children: React.ReactNode;
}
export default function Badge({

    children
}: Props) {
    return (
        <span
            className="
px-3
py-1
rounded-full
bg-blue-100
text-blue-700
text-sm
font-semibold
"
        >
            {children}
        </span>
    )
}