import { Button, Flex } from '@chakra-ui/react'
import { User, signOut } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'

import React from 'react'
// import React, { ReactNode } from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'
import Icons from './Icons'
import UserMenu from './UserMenu'

interface Props {
  // children?: ReactNode
  user?: User | null
}

export default function RightContent({ user }: Props) {
  // export default function RightContent({ children, ...props }: Props) {
  return (
    <>
      <AuthModal />
      <Flex justify='space-between'
            align='center'>
        {/* { user ? (
          <Button onClick={ () => signOut(auth) }>
            Logout
          </Button>
        ) : ( 
          <AuthButtons /> 
        ) } */}
        { user ? <Icons /> : <AuthButtons /> }
        { <UserMenu user={ user }/> }
        {/* <MenuWrapper /> */}
      </Flex>
    </>
  )
}
