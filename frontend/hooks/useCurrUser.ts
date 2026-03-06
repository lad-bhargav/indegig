import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

interface User {
  clerkId: string | null,  // ← Add this
  username: string | null,
  fullName: string | null,
  imageUrl: string | null,
  email: string | null,
  isLoaded: boolean
}

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User>({
    clerkId: null,  // ← Add this
    username: null,
    fullName: null,
    imageUrl: null,
    email: null,
    isLoaded: false
  })

  const { user, isLoaded } = useUser()

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        setCurrentUser({
          clerkId: user.id,  // ← user.id is the Clerk user ID
          username: user.username,
          fullName: user.fullName,
          imageUrl: user.imageUrl,
          email: user.primaryEmailAddress?.emailAddress || "",
          isLoaded: true
        })
      } else {
        setCurrentUser({
          clerkId: null,  // ← Add this
          username: null,
          fullName: null,
          imageUrl: null,
          email: null,
          isLoaded: true
        })
      }
    }
  }, [user, isLoaded])

  return currentUser
}