import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import React from "react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

interface PersonalizadoCardProps {
  skill: {
    id: number
    title: string
    description: string
    image: string
    site: string
    github: string
    emphasis: boolean
  }
}

const PersonalizadoCard = ({ skill }: PersonalizadoCardProps) => {
  return (
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
          title={`Ir para o código do site ${skill.title} que David Marinho construiu`}
        >
          <Github className="h-5 w-5" />
          <p className="text-sm">Código Fonte</p>
        </Link>

        {skill.site && (
          <Link
            href={skill.site}
            target="_blank"
            className="hover:text-primary flex cursor-pointer items-center justify-center gap-2 transition-colors"
            title={`Ir para o site ${skill.title} que David Marinho construiu`}
          >
            <ExternalLink className="h-5 w-5" />
            <p className="text-sm">Preview</p>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

export default PersonalizadoCard
