import { Link } from "react-router-dom";

export default function LinkExterno({to,value,className,target,href}) {
    return (
        <>
            <a
                to={to}
                target={target}
                href={href}
                className="py-2 px-4 rounded-lg font-bold text-branco bg-roxo border-roxo border-2 border-solid transition-all duration-200 ease-in-out hover:border-roxo hover:border-2 hover:text-roxo hover:bg-transparente text-center w-fit"
            >
                {value}
            </a>
        </>
    )
}