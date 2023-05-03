"use client"

import { FC, useState } from 'react'
import Button from './Button'
import { signIn } from 'next-auth/react'
import { toast } from './Toast'

interface SignInButtonProps {

}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIslLoading] = useState<boolean>(false)
  const signInWithGoogle = async () => {

    try {
      setIslLoading(true)
      await signIn('google')
    } catch (err) {
      toast({
        title: 'Error in google sign-in',
        message: 'Plase, try again later',
        type: 'error'
      })
    }
  }
  return <Button onClick={signInWithGoogle} isLoading = {isLoading}>Sign In</Button>
}

export default SignInButton
