import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
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
        <div>
            <Button><Plus/> Create</Button>

        </div>
    </div>
  )
}

export default Navbar
