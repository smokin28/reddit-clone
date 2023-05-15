import { authModalState } from '@/atoms/authModalAtom'
import { useSetRecoilState } from 'recoil'
import { Button } from '@chakra-ui/react'

import React from 'react'

export default function AuthButtons() {
  const setAuthModalState = useSetRecoilState(authModalState)
  return (
    <>
      <Button variant='outline'
              height='28px'
              display={{ base: 'none', 
                         sm: 'flex' }}
              width={{ base: '70px', 
                       md: '110px' }}
              mr={ 2 }
              onClick={() => setAuthModalState({ open: true, 
                                                 view: 'login' })}>
        Log In
      </Button>
      <Button variant='solid'
              height='28px'
              display={{ base: 'none', 
                         sm: 'flex' }}
              width={{ base: '70px', 
                       md: '110px' }}
              mr={ 2 }
              onClick={() => setAuthModalState({ open: true, 
                                                 view: 'signup' })}>
        Sign Up
      </Button>
    </>
  )
}
