"use client"

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from '../ui/modal'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

const photos = [
  { src: "https://media.istockphoto.com/id/476141431/photo/preschool.jpg?s=612x612&w=0&k=20&c=c7W3xJ_nJTxr8TVypX4rb1g-Ss16eOc67QnoTolq-OU=", alt: "Children playing" },
  { src: "https://www.earlyyearsnc.org/wp-content/uploads/three-diverse-prek-children.jpg", alt: "Art class" },
  { src: "https://media.istockphoto.com/id/476141431/photo/preschool.jpg?s=612x612&w=0&k=20&c=c7W3xJ_nJTxr8TVypX4rb1g-Ss16eOc67QnoTolq-OU=", alt: "Outdoor activities" },
  { src: "https://www.earlyyearsnc.org/wp-content/uploads/three-diverse-prek-children.jpg", alt: "Story time" },
  { src: "https://media.istockphoto.com/id/476141431/photo/preschool.jpg?s=612x612&w=0&k=20&c=c7W3xJ_nJTxr8TVypX4rb1g-Ss16eOc67QnoTolq-OU=", alt: "Music lesson" },
  { src: "https://www.earlyyearsnc.org/wp-content/uploads/three-diverse-prek-children.jpg", alt: "Nap time" },
]

const Gallery = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const showNext = () => {
      setCurrentIndex((current) => (current + 1) % photos.length)
    }
  
    const showPrevious = () => {
      setCurrentIndex((current) => (current - 1 + photos.length) % photos.length)
    }


  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <Card 
          key={index} 
          className="group cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={() => {
            setCurrentIndex(index)
            setIsOpen(true)
          }}
        >
          <CardContent className="p-2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={300}
                className="transform transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            fill
            className="object-contain"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation()
              showPrevious()
            }}
          >
            <LuChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
          >
            <LuChevronRight className="h-8 w-8" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </>
  )
}

export default Gallery