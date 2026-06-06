interface Props {
    
    value: string;
    onChange:
    (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
}
export default function Select({

    value,
    onChange,
    children
}: Props) {
    return (

        <select
            value={value}
            onChange={onChange}
            className="
p-3
rounded-xl
border
shadow-sm
outline-none
focus:ring-2
focus:ring-blue-500
"
        >
            {children}
        </select>
    )
}