export interface dados {
    eu: string;
    faculdade: string;
    contato: {
      email: string,
      linkedin: string
    }, 
    redeSocial: redeSocial[];
    tecnologias: tecnologiastype[];
    projetos: projetostype[];
  }
  
  export interface redeSocial {
    name: string;
    iconeWhite: string;
    iconeBlack: string;
    iconeRoxo: string;
    url: string;
  }
  
  export interface tecnologiastype {
    name: string;
    icone: string;
  }
  
  export interface projetostype {
    name: string;
    namePrincipal: string;
    github: string;
    foto: string;
    site: string;
    projetoTech: string[];
  }
  
  export interface useUserType {
    dados: dados;
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    screenWidth: number;
    showProject: string;
    showSpecificProject: (name: string) => void;
  }
  
  export interface seeProjectType {
    name: string;
    namePrincipal: string;
    github: string;
    foto: string;
    site: string;
    projetoTech: tecnologiastype[];
  }