
export default function LinkExterno({value,className,target,href} : {to?:string,value?:string,className?:string,target?:string,href?:string}) {
    return (
        <>
            <a
                target={target}
                href={href}
                className={`px-4 py-2 font-bold text-center transition-all duration-500 ease-in-out border-2 border-solid rounded-lg text-branco bg-roxo border-roxo hover:border-roxo hover:border-2 hover:text-roxo hover:bg-transparente w-fit hover:translate-y-2 ${className}`}
            >
                {value}
            </a>
        </>
    )
}