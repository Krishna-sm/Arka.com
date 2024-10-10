import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SmvLogo from '@/assets/Header section/logo.png' 
const Logo = ({ color, className, ImageClassName }: { color?: string, className?: string, ImageClassName ?:string}) => {
  return (
    <>
      <Link href={'/'} className={`${color ? '' : 'text-[--color1]'}   font-bold  ${className}`}>
        <Image src={SmvLogo} alt='logo' width={1000} height={1000} className={`w-[60%] ${ImageClassName}`} />
      </Link>

    </>
  )
}

export default Logo