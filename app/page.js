import Image from 'next/image'
import Link from 'next/link'
import Button from './users/button'
import NavBarMenu from './components/NavBar'

export default function Home() {
  return (
    <main className="bg-white">
      <NavBarMenu />
      <h1 className='text-teal-300 border border-green-600'>Hello There!</h1>
      <Link className='text-slate-700' href="/users">Users</Link>
      <Button />

    </main>
    
  )
}
