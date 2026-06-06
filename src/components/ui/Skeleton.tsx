interface Props {
    type?:
    "card" |
    "text" |
    "circle";
}
export default function Skeleton({

    type = "card"
}: Props) {
    if (type === "circle") {
        return (

            <div
                className="
            animate-pulse
            h-12
            w-12
            bg-gray-300
            rounded-full
            "
            />
        )
    }
    if (type === "text") {
        return (

            <div
                className="
            animate-pulse
            space-y-3
            "
            >
                <div className="
                h-4
                bg-gray-300
                rounded
                w-3/4
                "/>
                <div className="
                h-4
                bg-gray-300
                rounded
                w-full
                "/>
            </div>
        )
    }
    return (

        <div
            className="
        animate-pulse
        bg-white
        shadow
        rounded-xl
        p-5
        space-y-4
        "
        >
            <div
                className="
            h-6
            bg-gray-300
            rounded
            w-2/3
            "
            />
            <div
                className="
            h-4
            bg-gray-300
            rounded
            w-full
            "
            />
            <div
                className="
            h-4
            bg-gray-300
            rounded
            w-1/2
            "/>
        </div>
    )
}