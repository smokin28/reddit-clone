import { Community } from '@/atoms/communitiesAtom'
import { firestore } from '@/firebase/clientApp'
import { doc, getDoc } from 'firebase/firestore'
import { GetServerSidePropsContext } from 'next'

import React from 'react'
import safeJsonStringify from 'safe-json-stringify'
import NotFound from '@/components/Community/NotFound'

interface Props {
  communityData: Community
}

export default function CommunityPage({ communityData }: Props) {
  if (!communityData) {
    return <NotFound />
  }

  return (
    <div>WELCOME TO { communityData.id }</div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Get community data and pass it to client
  try {
    const communityDocRef = doc(firestore, 'communities', context.query.communityId as string)
    const communityDoc = await getDoc(communityDocRef)

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() }))
          : ''
      }
    }
  } catch (error) {
    console.log('getServerSideProps error', error)
  }
}