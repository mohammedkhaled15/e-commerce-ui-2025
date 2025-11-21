import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-0 md:justify-between md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link className='flex items-center' href='/'>
          <Image src='/logo.png' alt='Logo' width={36} height={36} />
          <p className='hidden md:block text-md font-medium tracking-wider text-white'>Marketoo</p>
        </Link>
        <p className="text-sm text-gray-400">2025 Marketoo.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Contacts</Link>
        <Link href={"/"}>Terms of Services</Link>
        <Link href={"/"}>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={"/"}>All Products</Link>
        <Link href={"/"}>New Arrivals</Link>
        <Link href={"/"}>Best Sellers</Link>
        <Link href={"/"}>Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contacts</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Our Story</Link>
      </div>
    </div>
  )
}

export default Footer