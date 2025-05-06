import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-14 mx-2'>
        {/* Youtube logon */}
        <div>
            <h1 className='font-bold text-xl '>YT <span className='text-red-500'>Shorts</span></h1>
        </div>
        {/* Search logo file */}
        <div className='w-1/2'>
            <Input type='text' placeholder='search...'></Input>
        </div>
        {/* Account Management */}
        <div className='flex items-center space-x-2'>
            <Button><Plus/> Create</Button>
            <ModeToggle/>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
    </div>
  )
}

export default Navbar
