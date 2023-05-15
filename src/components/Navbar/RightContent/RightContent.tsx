import { Flex } from '@chakra-ui/react'

import React from 'react'
// import React, { ReactNode } from 'react'
import AuthButtons from './AuthButtons'
import AuthModal from '@/components/Modal/Auth/AuthModal'

// interface Props {
//   children?: ReactNode
//   // any props that come into the component
// }

export default function RightContent() {
  // export default function RightContent({ children, ...props }: Props) {
  return (
    <>
      <AuthModal />
      <Flex justify='space-between'
            align='center'>
        <AuthButtons />
        {/* { user ? <Icons /> : <AuthButtons /> } */}
        {/* <MenuWrapper /> */}
      </Flex>
    </>
  )
}
