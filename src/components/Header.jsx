import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function Header() {

    const { menuAberto, abrirMenu, dados } = useContext(UserContext)

    const seLocalizando = useLocation()

    return (
        <header id="header" className={menuAberto
            ? "w-full h-screen flex flex-col justify-start items-center py-4 px-5 z-20 bg-branco fixed transition-all duration-200 ease-in-out sm:w-full sm:h-20 sm:flex-row sm:justify-between sm:static"
            : "w-full h-full flex flex-row justify-between items-center py-4 px-5 min-h-20 relative z-20 bg-branco transition-all duration-200 ease-in-out sm:w-full sm:h-20 sm:flex-row sm:justify-between sm:static "}>
            <Link
                className={menuAberto ? "w-fit hidden sm:flex text-xl font-bold transition-all duration-200 ease-in-out hover:text-roxo" : "flex text-preto text-xl  font-bold transition-all duration-200 ease-in-out hover:text-roxo"
                }
                to={"/"}>
                <h2>
                    {dados.eu}
                </h2>
            </Link>

            <nav className={menuAberto
                ? " h-screen flex flex-col justify-center items-center gap-5 sm:static w-fit sm:h-full  sm:flex-row sm:justify-center sm:p-0"
                : "flex flex-row justify-center items-center h-1"}>

                <button className={menuAberto ? "ri-close-large-line absolute top-5 right-5 text-3xl sm:static sm:hidden" : "ri-menu-3-line text-3xl sm:hidden"} onClick={abrirMenu}>
                </button>
                <Link className={
                    (seLocalizando.pathname === "/" == true) && (menuAberto == true)
                        ? 'text-3xl py-3 px-20 rounded-xl font-bold text-branco transition-all duration-250 ease-in-out bg-roxo sm:bg-transparente sm:text-roxo cursor-default sm:p-0 sm:text-xl'
                        : (seLocalizando.pathname === "/" == true) && (menuAberto == false) ? "hidden"
                            : (seLocalizando.pathname === "/" == false) && (menuAberto == true) ? "text-3xl w-full py-2 px-10 font-bold text-preto sm:border-b-2  hover:bg-roxo hover:text-branco text-center rounded-lg transition-all duration-250 ease-in-out border-roxo border-solid border-2 sm:border-none sm:p-0 sm:text-xl sm:hover:bg-transparente sm:hover:text-roxo"
                                : "hidden"}
                    to="/"
                    onClick={abrirMenu}
                >Home
                </Link>

                <Link className={
                    (seLocalizando.pathname === "/Sobre" == true) && (menuAberto == true)
                        ? 'text-3xl py-3 px-20 rounded-xl font-bold text-branco transition-all duration-250 ease-in-out bg-roxo sm:bg-transparente sm:text-roxo cursor-default sm:p-0 sm:text-xl'
                        : (seLocalizando.pathname === "/Sobre" == true) && (menuAberto == false) ? "hidden"
                            : (seLocalizando.pathname === "/Sobre" == false) && (menuAberto == true) ? "text-3xl w-full py-2 px-10 font-bold text-preto sm:border-b-2  hover:bg-roxo hover:text-branco text-center rounded-lg transition-all duration-250 ease-in-out border-roxo border-solid border-2 sm:border-none sm:p-0 sm:text-xl sm:hover:bg-transparente sm:hover:text-roxo"
                                : "hidden"}
                    to="/Sobre"
                    onClick={abrirMenu}
                >Sobre
                </Link>

                <Link className={
                    (seLocalizando.pathname === "/Projetos" == true) && (menuAberto == true)
                        ? 'text-3xl py-3 px-20 rounded-xl font-bold text-branco transition-all duration-250 ease-in-out bg-roxo sm:bg-transparente sm:text-roxo cursor-default sm:p-0 sm:text-xl'
                        : (seLocalizando.pathname === "/Projetos" == true) && (menuAberto == false) ? "hidden"
                            : (seLocalizando.pathname === "/Projetos" == false) && (menuAberto == true) ? "text-3xl w-full py-2 px-10 font-bold text-preto sm:border-b-2  hover:bg-roxo hover:text-branco text-center rounded-lg transition-all duration-250 ease-in-out border-roxo border-solid border-2 sm:border-none sm:p-0 sm:text-xl sm:hover:bg-transparente sm:hover:text-roxo"
                                : "hidden"}
                    to="/Projetos"
                    onClick={abrirMenu}
                >Projetos
                </Link>

                <Link className={
                    (seLocalizando.pathname === "/Contato" == true) && (menuAberto == true)
                        ? 'text-3xl py-3 px-20 rounded-xl font-bold text-branco transition-all duration-250 ease-in-out bg-roxo sm:bg-transparente sm:text-roxo cursor-default sm:p-0 sm:text-xl'
                        : (seLocalizando.pathname === "/Contato" == true) && (menuAberto == false) ? "hidden"
                            : (seLocalizando.pathname === "/Contato" == false) && (menuAberto == true) ? "text-3xl w-full py-2 px-10 font-bold text-preto sm:border-b-2  hover:bg-roxo hover:text-branco text-center rounded-lg transition-all duration-250 ease-in-out border-roxo border-solid border-2 sm:border-none sm:p-0 sm:text-xl sm:hover:bg-transparente sm:hover:text-roxo"
                                : "hidden"}
                    to="/Contato"
                    onClick={abrirMenu}
                >Contato
                </Link>

                

            </nav>
        </header >
    )
}