'use client'
import { Button } from '@/components/ui/button'
import { useUser } from '@/context/UserContext'
import React from 'react'

const HomePage = () => {
  const {user} = useUser();
  console.log(user);
  
  return (
    <div>
      <Button> Shadcn Button </Button>
    </div>
  )
}

export default HomePage
