import { Flex, Icon, MenuItem } from '@chakra-ui/react'
import { GrAdd } from 'react-icons/gr'

import React, { useState } from 'react'
import CreateCommunityModal from '@/components/Modal/CreateCommunityModal/CreateCommunityModal'

export default function Communities() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <CreateCommunityModal open={ open } handleClose={ () => setOpen(false) } />

      <MenuItem width='100%'
                fontSize='10pt'
                _hover={{ bg: 'gray.100' }}
                onClick={ () => setOpen(true) }>
        <Flex align='center'>
          <Icon fontSize={ 20 }
                mr={ 2 }
                as={ GrAdd }/>
            Create Community
        </Flex>
      </MenuItem>
    </>
  )
}
