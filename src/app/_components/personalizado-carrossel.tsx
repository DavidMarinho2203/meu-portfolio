import Image from "next/image"
import React from "react"

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

interface CarrosselImagesProps {
  photos?: {
    smallPhotos: string[]
    bigPhotos: string[]
  }
}

const CarrosselImages = ({ photos }: CarrosselImagesProps) => {
  return (
    <>
      {/* Imagens Em pé */}
      <Carousel className="max-w-xs md:hidden md:max-w-screen">
        <CarouselContent className="">
          {Array.from({ length: photos?.smallPhotos.length || 0 }).map(
            (_, index) => {
              const src = photos?.smallPhotos[index]

              if (!src) return null

              return (
                <CarouselItem key={index} className="">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6">
                        <Image
                          src={src}
                          alt={`Imagem ${index + 1}`}
                          width={1000}
                          height={1000}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            },
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* Imagens Deitada */}
      <Carousel className="h- hidden h-fit md:flex">
        <CarouselContent className="flex max-h-full">
          {Array.from({ length: photos?.bigPhotos.length || 0 }).map(
            (_, index) => {
              const src = photos?.bigPhotos[index]
              if (!src) return null

              return (
                <CarouselItem key={index} className="w-fit">
                  <div className="w-fit">
                    <Card className="w-fit">
                      <CardContent className="flex h-fit items-center justify-center">
                        <Image
                          src={src}
                          alt={`Imagem ${index + 1}`}
                          width={1000}
                          height={1000}
                          className="w-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            },
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default CarrosselImages
