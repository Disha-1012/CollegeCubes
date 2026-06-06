export default function Card({

    children
}: {
    children: React.ReactNode
}) {
    return (

        <div
            className="
bg-white
dark:bg-gray-900
border
border-gray-200
dark:border-gray-700
rounded-3xl
p-6
shadow-lg
dark:shadow-black/40
card-hover
fade-in
"
        >
            {children}
        </div>
    )
}