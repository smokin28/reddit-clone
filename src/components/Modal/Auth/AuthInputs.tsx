import { Flex } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { authModalState } from '@/atoms/authModalAtom'

import React from 'react'
import Login from './Login'

export default function AuthInputs() {
  const modalState = useRecoilValue(authModalState)

  return (
    <Flex direction='column'
          align='center'
          width='100%'
          mt={ 4 }>
      { modalState.view === 'login' && <Login /> }
      {/* { modalState.view === 'signup' && <SignUP /> } */}
    </Flex>
  )
}
