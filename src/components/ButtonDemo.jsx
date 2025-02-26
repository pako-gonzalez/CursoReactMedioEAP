import React from 'react'
import { Button } from './ui/button'

export const ButtonDemo = () => {
  return (
    <>
        <div className='flex gap-6'>
            <Button variant='default' size='sm'>Default</Button>
            <Button variant='success'>Success</Button>
            <Button variant='destructive' size='lg'>Destructive</Button>
            <Button variant='outline' capitalize={true}>outline</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button disabled>Disabled</Button>
        </div>
    </>
  )
}
