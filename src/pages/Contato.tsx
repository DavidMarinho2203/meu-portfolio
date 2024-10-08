import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useUserType } from "../types";


export default function Contato() {
    const {dados} = useContext(UserContext) as useUserType

    return (
        <main className="flex flex-col items-center h-screen gap-5 py-5 select-none">
            <section className="flex flex-col gap-4 py-5 text-center">
                <h2 className="px-4 text-2xl font-bold sm:px-22 md:px-40 lg:px-60">Contato</h2>
                <div className="w-[10vw] h-1 mx-auto rounded-3xl bg-roxo"></div>
                <p className="px-4 text-sm sm:px-22 md:px-40 lg:px-60">No momento estou apenas com essas formas de contato.</p>
            </section>
            <section className="flex flex-wrap justify-center gap-5 ">
                <a href={`mailto:${dados.contato.email}`} target="_blank" className="flex flex-row items-center gap-4 px-8 py-4 transition-all duration-500 rounded-lg shadow-xl cursor-pointer w-fit h-fit hover:translate-y-2 bg-neutral-50 justify-evenly">
                        <img className="h-5" src={"/assets/icon/email-roxo.svg"} alt="" />
                        <span className="font-bold text-purple-300">Email</span>
                </a>
                <a href={`${dados.contato.linkedin}`} target="_blank" className="flex flex-row items-center gap-3 py-3 transition-all duration-500 rounded-lg shadow-xl cursor-pointer px-7 w-fit h-fit hover:translate-y-2 bg-neutral-50 justify-evenly">
                        <img className="h-8" src={"/assets/icon/linkedin-roxo.svg"} alt="" />
                        <span className="font-bold text-purple-300">Linkedin</span>
                </a>
            </section>

        </main>
    );
}
