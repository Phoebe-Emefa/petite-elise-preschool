"use client"
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


const Provider = ({children}: {children: React.ReactNode}) => {
  return (
<>
<ProgressBar
    height="4px"
    color="#eab308"
    shallowRouting
  />
  {children}
</>
  )
}

export default Provider