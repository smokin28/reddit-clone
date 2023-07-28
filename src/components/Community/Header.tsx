import { Community } from '@/atoms/communitiesAtom'
import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { FaReddit } from 'react-icons/fa'

import React from 'react'
import useCommunityData from '@/hooks/useCommunityData'

interface Props {
  communityData: Community
}

export default function Header({ communityData }: Props) {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } = useCommunityData()
  const isJoined = !!communityStateValue.mySnippets.find(item => item.communityId === communityData.id)

  return (
    <Flex direction='column'
          width='100%'
          height='146px'>
      <Box height='50%' bg='blue.400' />
      <Flex justify='center'
            bg='white'
            flexGrow={ 1 }>
        <Flex width='95%'
              maxWidth='860px'>
              {/* Helps with laying out components */}
              {/* border='1px solid red'> */}
          { communityData.imageURL ? (
            <Image />
          ) : (
            <Icon as={ FaReddit }
                  fontSize={ 64 }
                  position='relative'
                  top={ -3 }
                  color='blue.500'
                  border='4px solid white'
                  borderRadius='50%' />
          ) }
          <Flex padding='10px 16px'>
            <Flex direction='column'
                  mr={ 6 }>
              <Text fontWeight={ 800 }
                    fontSize='16pt'>
                { communityData.id }
              </Text>
              <Text fontWeight={ 600 }
                    fontSize='10pt'
                    color='gray.400'>
                r/{ communityData.id }
              </Text>
            </Flex>
            <Button variant={ isJoined ? 'outline' : 'solid' }
                    height='30px'
                    pr={ 6 }
                    pl={ 6 }
                    isLoading={ loading }
                    onClick={ () => onJoinOrLeaveCommunity(communityData, isJoined) }>
              { isJoined ? 'Joined' : 'Join' }
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
