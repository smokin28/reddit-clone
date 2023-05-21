import { Button, Flex } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'

import React from 'react'
// import React, { ReactNode } from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'

interface Props {
  // children?: ReactNode
  user: any
}

export default function RightContent({ user }: Props) {
  // export default function RightContent({ children, ...props }: Props) {
  return (
    <>
      <AuthModal />
      <Flex justify='space-between'
            align='center'>
        { user ? (
          <Button onClick={ () => signOut(auth) }>
            Logout
          </Button>
        ) : ( 
          <AuthButtons /> 
        ) }
        {/* { user ? <Icons /> : <AuthButtons /> } */}
        {/* <MenuWrapper /> */}
      </Flex>
    </>
  )
}
