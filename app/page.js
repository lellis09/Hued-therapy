import Image from 'next/image'
import Link from 'next/link'
import Button from './users/button'

export default function Home() {
  return (
    <main className="bg-white">
      <h1 className='text-teal-300'>Hello There!</h1>
      <Link className='text-slate-700' href="/users">Users</Link>
      <Button />

    </main>
    
  )
}
