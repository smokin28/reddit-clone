import { Flex, Image } from '@chakra-ui/react'

import React from 'react'
import SearchInput from './SearchInput'
import RightContent from './RightContent/RightContent'

export default function Navbar() {
  return (
    <Flex bg='white'
          height='44px'
          padding='6px 12px'
          justify={{ md: 'space-between' }}>
      <Flex align='center'
            width={{ base: '40px', md: 'auto' }}
            mr={{ base: 0, md: 2 }}
            cursor='pointer'
            // onClick={ () => onSelectMenuItem(defaultMenuItem) }
            >
        <Image src='/images/redditFace.svg' height='30px' />
        <Image display={{ base: 'none',
                          md: 'unset' }}
               src='/images/redditText.svg'
               height='46px' />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      <RightContent />
    </Flex>
  )
}
