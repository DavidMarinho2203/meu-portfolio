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

  

  return {
    dados,
    openMenu,
    setOpenMenu,
    screenWidth,
    showProject,
    showSpecificProject,
  };
}