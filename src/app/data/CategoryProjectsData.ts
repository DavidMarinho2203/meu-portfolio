import type CategoryProjects from "../types/categoryProjects";

export const CategoryProjectsData: CategoryProjects[] = [
    {
        id: 1,
        title: "Pessoal",
        description: "Para pessoas físicas que ainda não são pessoas jurídicas (PJ), mas desejam vender seus produtos ou serviços de forma organizada.",
        image: "/img/pessoal.jpg",
        projects: [
            {
                title: 'Bronzeamento',
                description: 'Lading Page para uma empresa de bronzeamento',
                image: '/img/resultados_dos_projetos/bronze.png',
            },{
                title: 'Fotógrafo',
                description: 'Lading Page para uma profissional da fotógrafia',
                image: '/img/resultados_dos_projetos/fotografo.png',
            }
        ]

    },
    {
        id: 2,
        title: "Infoproduto",
        description: "Para empreendedores que desejam vender produtos digitais (como cursos, e-books, webinars) ou físicos pela internet.",
        image: "/img/infoproduto.jpg",
        // projects: [
        //   {}
        // ]
    },
    {
        id: 3,
        title: "Empresa",
        description: "Para empresas de pequeno e médio porte que buscam soluções digitais, como criação de sites, e-commerce e marketing online, para expandir seu alcance.",
        image: "/img/empresa.jpg",
        projects: [
            {
                title: 'Salgateria',
                description: 'Landing Page para uma loja de salgados',
                image: '/img/resultados_dos_projetos/salgateria.png',
            },
        ]
    }
]