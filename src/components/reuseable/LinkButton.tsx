import Link from 'next/link'
import React from 'react'

const LinkButton = ({ title, link, className }: { title: string, link: string, className ?:string}) => {
  return (
    <>
      <Link href={link} className={` bg-[--color1] justify-center gap-x-1 text-nowrap px-[16.8px] py-[10px] text-white rounded-md font-heading-wi font-[600] ${className}`} >
              {title}
          </Link>
        </>
  )
}

export default LinkButton