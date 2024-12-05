import CTA from '@/components/programs/CTA'
import ProgramCards from '@/components/programs/ProgramCards'
import { ProgramsHero } from '@/components/programs/ProgramsHero'
import { Testimonials } from '@/components/programs/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <ProgramsHero />
        <ProgramCards />
        <Testimonials />
        <CTA />
    </div>
  )
}

export default page