"use client";
interface Props {
    placeholder: string;
    value: string;
    onChange:
    (e: React.ChangeEvent<HTMLInputElement>)
        => void;
    type?:
    string;
    error?:
    string;
}
export default function Input({

    placeholder,
    value,
    onChange,
    type = "text",
    error
}: Props) {
    return (

        <div className="space-y-1">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                bg-white
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition
                "
            />
            {
                error &&
                <p className="
            text-red-500
            text-sm
            ">
                    {error}
                </p>
            }
        </div>
    )
}