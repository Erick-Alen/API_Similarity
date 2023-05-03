"use client"

import { FC, useState } from 'react'
import Button from './Button'
import { signOut } from 'next-auth/react'
import { toast } from './Toast'
// import { toast } from './toast'

interface SignOutButtonProps {

}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIslLoading] = useState<boolean>(false)
  const signUserOut = async () => {

    try {
      setIslLoading(true)
      await signOut()
    } catch (err) {
      toast({
        title: 'Error signing out',
        message: 'Plase, try again later',
        type: 'error'
      })
    }
  }
  return <Button onClick={signUserOut} isLoading={isLoading}>Sign out</Button>
}

export default SignOutButton
