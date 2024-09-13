import { Link } from "react-router-dom";

export default function Button({to,value,className,target,href,onClick}) {
    return (
        <>
            <Link
                to={to}
                target={target}
                href={href}
                onClick={onClick}
                className="px-4 py-2 font-bold text-center transition-all duration-200 ease-in-out border-2 border-solid rounded-lg text-branco bg-roxo border-roxo hover:border-roxo hover:border-2 hover:text-roxo hover:bg-transparente w-fit"
            >
                {value}
            </Link>
        </>
    )
}