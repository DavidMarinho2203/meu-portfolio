import { ExternalLink, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import Projetos from "@/db/data/Projetos"
import skills from "@/db/data/Skills"

import { Avatar, AvatarFallback, AvatarImage } from "./_components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./_components/ui/card"

export default function Home() {
  const emphasisProjeto = Projetos.filter((projeto) => projeto.emphasis)
  const otherProjeto = Projetos.filter((projeto) => !projeto.emphasis)

  return (
    <div className="flex min-h-screen flex-col px-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        {/* Perfil */}
        <div className="border-primary/30 flex w-full flex-col items-center justify-center gap-4 border-b-1 pt-10 md:w-3xl">
          <Avatar className="size-20 md:size-30">
            <AvatarImage
              src="/avatar.jpg"
              alt="Avatar do David Beckham Dev"
              className="object-cover"
            />
            <AvatarFallback>DB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center gap-3 pb-6">
            <h1 className="text-primary text-xl font-bold md:text-2xl">
              David Beckham
            </h1>
            <p className="text-md font-semibold">Desenvolvedor Front-end</p>

            <nav>
              <ul className="flex gap-4">
                {[
                  {
                    id: 1,
                    icon: Github,
                    link: "https://github.com/DavidMarinho2203",
                    name: "Github",
                  },
                  {
                    id: 2,
                    icon: Linkedin,
                    link: "https://www.linkedin.com/in/david-beckham-278644227",
                    name: "Linkedin",
                  },
                  {
                    id: 3,
                    icon: Mail,
                    link: "mailto:davidbeckhampm.dev@gmail.com",
                    name: "Email",
                  },
                ].map((item) => (
                  <Link
                    href={item.link}
                    className="hover:text-primary flex cursor-pointer items-center justify-center gap-2 transition-colors"
                    key={item.id}
                    title={item.name}
                    target="_blank"
                  >
                    <item.icon className="h-5 w-5" />
                    <p className="text-sm">{item.name}</p>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* Sobre mim */}
        <div className="flex w-full flex-col gap-4 text-start md:w-3xl">
          <h2 className="text-primary/80 text-lg font-bold md:text-xl">
            Sobre
          </h2>
          <p className="text-muted-foreground md:text-md text-sm leading-7 font-semibold">
            Desenvolvedor frontend em formação, determinado a transformar ideias
            em interfaces reais e funcionais. Trabalho com React, Next.js e
            Tailwind CSS, focando em construir aplicações limpas, modernas e
            fáceis de usar.
          </p>
        </div>
        {/* Tecnologias */}
        <div className="flex w-full flex-col gap-4 text-start md:w-3xl">
          <h2 className="text-primary/80 text-lg font-bold md:text-xl">
            Tecnologias
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-muted-foreground hover:bg-primary/10 cursor-pointer rounded-sm border-1 bg-transparent px-3 py-1 text-sm font-medium transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Em Destaque */}
        <div className="flex w-full flex-col gap-4 text-start md:w-3xl">
          <h2 className="text-primary/80 text-lg font-bold md:text-xl">
            Em Destaque
          </h2>
          <div className="flex flex-col gap-4">
            {emphasisProjeto.map((skill) => (
              <Card
                key={skill.id}
                className="hover:border-primary w-full border-1 transition-colors duration-200 ease-in-out"
              >
                <CardHeader>
                  <CardTitle className="text-primary">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{skill.description}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Link
                    href={skill.github}
                    target="_blank"
                    className="hover:text-primary flex cursor-pointer items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <p className="text-sm">Código Fonte</p>
                  </Link>

                  {skill.site && (
                    <Link
                      href={skill.site}
                      target="_blank"
                      className="hover:text-primary flex cursor-pointer items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <p className="text-sm">Preview</p>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Todos os Projetos */}
        <div className="flex w-full flex-col gap-4 text-start md:w-3xl">
          <h2 className="text-primary/80 text-lg font-bold md:text-xl">
            Outros Projetos
          </h2>
          {otherProjeto.map((skill) => (
            <Card
              key={skill.id}
              className="hover:border-primary w-full border-1 transition-colors duration-200 ease-in-out"
            >
              <CardHeader>
                <CardTitle className="text-primary">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{skill.description}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Link
                  href={skill.github}
                  target="_blank"
                  className="hover:text-primary flex cursor-pointer items-center justify-center gap-2 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <p className="text-sm">Código Fonte</p>
                </Link>

                {skill.site && (
                  <Link
                    href={skill.site}
                    target="_blank"
                    className="hover:text-primary flex cursor-pointer items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <p className="text-sm">Preview</p>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <p className="py-8">
          Todos os direitos reservados para{" "}
          <Link
            className="hover:text-primary"
            href={"https://www.linkedin.com/in/david-beckham-278644227"}
            target="_blank"
          >
            David Beckham
          </Link>
        </p>
      </div>
    </div>
  )
}
