import { useEffect, useState } from "react";
import data from "../Data/data.json";
import type { dados, useUserType } from "../types";

export default function useUser(): useUserType {
  const dados: dados = data[0];
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [showProject, setShowProject] = useState<string>("");

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const showSpecificProject = (name: string) => {
    setShowProject((state) => (name === state ? "" : name));
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // para uma rolagem suave
    });
  }

  return {
    dados,
    openMenu,
    setOpenMenu,
    screenWidth,
    showProject,
    showSpecificProject,
    scrollToTop,
  };
}