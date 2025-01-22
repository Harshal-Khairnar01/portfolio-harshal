import Link from 'next/link'
import React from 'react'

export default function SLink({Icon,link}) {
  return (
    <Link
        className="text-white text-lg hover:text-xl hover:text-red-500  duration-300  h-6 "
        href={link}
        target='_blank'
      >
       { Icon && <Icon />}
      </Link>
  )
}
