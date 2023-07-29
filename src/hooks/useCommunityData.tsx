import { Community, CommunitySnippet, communityState } from '@/atoms/communitiesAtom'
import { useRecoilState } from 'recoil'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/clientApp'
import { collection, doc, getDocs, increment, writeBatch } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export default function useCommunityData() {
  const [user] = useAuthState(auth)
  const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onJoinOrLeaveCommunity = (communityData: Community, isJoined: boolean) => {
    if (isJoined) {
      leaveCommunity(communityData.id)
      return
    }

    joinCommunity(communityData)
  }

  const getMySnippets = async () => {
    setLoading(true)

    try {
      const snippetDocs = await getDocs(collection(firestore, `users/${user?.uid}/communitySnippets`))
      const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }))

      setCommunityStateValue(prev => ({
        ...prev,
        mySnippets: snippets as CommunitySnippet[]
      }))
    } catch (error: any) {
      console.log('getMySnippets error: ', error)
      setError(error.message)
    }

    setLoading(false)
  }

  const joinCommunity = async (communityData: Community) => {
    setLoading(true)

    // batch write
    try {
      const batch = writeBatch(firestore)

      // creating a new community snippet
      const newSnippet: CommunitySnippet = {
        communityId: communityData.id,
        imageURL: communityData.imageURL || ''
      }

      batch.set(doc(firestore, `users/${user?.uid}/communitySnippets`, communityData.id), newSnippet)
      batch.update(doc(firestore, 'communities', communityData.id), {
        numberOfMembers: increment(1)
      })
      await batch.commit()

      // update recoil state
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: [...prev.mySnippets, newSnippet]
      }))
    } catch (error: any) {
      console.log('joinCommunity error: ', error)
      setError(error.message)
    }

    setLoading(false)
  }

  const leaveCommunity = async (communityId: string) => {
    setLoading(true)

    // batch write
    try {
      const batch = writeBatch(firestore)

      // deleting the community snippete from user
      batch.delete(doc(firestore, `users/${user?.uid}/communitySnippets`, communityId))

      // updating the numberOfMembers (-1)
      batch.update(doc(firestore, 'communities', communityId), {
        numberOfMembers: increment(-1)
      })
      await batch.commit()

      // update recoil state
      setCommunityStateValue((prev) => ({
        ...prev,
        mySnippets: prev.mySnippets.filter(
          (item) => item.communityId !== communityId
        )
      }))

      setLoading(false)
    } catch (error: any) {
      console.log('leaveCommunity error: ', error)
      setError(error.message)
    }
  }

  useEffect(() => {
    if (!user) return
    getMySnippets()
  }, [user])

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    loading
  }
}
