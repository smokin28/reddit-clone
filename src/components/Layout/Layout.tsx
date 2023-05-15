import React, { ReactNode } from 'react'

import Navbar from '../Navbar/Navbar'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <Navbar />
      <main>{ children }</main>
      {/* <main { ...props }>{ children }</main> */}
    </>
  )
}
