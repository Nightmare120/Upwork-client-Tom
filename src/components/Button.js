export default function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className={`py-3 rounded-md text-white px-8 bg-gradient-to-r to-[#4563FF] from-[#58AFFF] transition-all `}
        >
            {children}
        </button>
    );
}

export function ButtonSecondary({ children, onClick }) {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className={` rounded-md flex p-[4px]  bg-gradient-to-r to-[#4563FF] from-[#58AFFF] transition-all `}
        >
            <span className="w-full rounded-md hover:bg-transparent hover:text-white transition-all py-2 px-8 bg-white text-black">
                {children}
            </span>
        </button>
    );
}

export function ButtonWhite({ children, onClick }) {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className={`py-3 rounded-md text-black px-8 bg-white hover:text-white hover:bg-transparent border-2 border-transparent hover:border-white transition-all `}
        >
            {children}
        </button>
    );
}

export function LinkButton({ children, onClick }) {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className={`flex gap-3 items-center  text-lg text-[#1C2752]  `}
        >
            {children}
        </button>
    );
}
