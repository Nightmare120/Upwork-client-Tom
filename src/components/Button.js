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
