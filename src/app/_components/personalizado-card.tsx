"use client"
import { Camera, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import React from "react"

import CarrosselImages from "./personalizado-carrossel"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

interface PersonalizadoCardProps {
  skill: {
    id: number
    title: string
    description: string
    image: string
    site?: string
    github?: string
    emphasis: boolean
    photos?: {
      smallPhotos: string[]
      bigPhotos: string[]
    }
  }
}

const PersonalizadoCard = ({ skill }: PersonalizadoCardProps) => {
  const [openDialog, setOpenDialog] = React.useState(false)
  return (
    <>
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
          {skill.github && (
            <Link
              href={skill.github}
              target="_blank"
              className="hover:text-primary flex cursor-pointer items-center justify-center gap-2 transition-colors"
              title={`Ir para o código do site ${skill.title} que David Marinho construiu`}
            >
              <Github className="h-5 w-5" />
              <p className="text-sm">Código Fonte</p>
            </Link>
          )}

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

          {skill.photos && skill.photos.smallPhotos.length > 0 && (
            <Button
              variant={"link"}
              className="hover:text-primary text-foreground flex cursor-pointer items-center justify-center gap-2 transition-colors hover:no-underline"
              onClick={() => setOpenDialog(true)}
            >
              <Camera className="h-5 w-5" />
              <p className="text-sm">Preview</p>
            </Button>
          )}
        </CardFooter>
      </Card>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="flex w-fit md:max-w-3xl lg:max-w-4xl">
          <DialogHeader className="text-center md:text-start">
            <DialogTitle>{skill.title}</DialogTitle>
            <DialogDescription>{skill.description}</DialogDescription>
            <CarrosselImages photos={skill.photos} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default PersonalizadoCard
