import React, { ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface Props {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export const Heading: React.FC<Props> = ({ size = 'md', children, asChild }) => {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx('text-gray-100 font-sans font-bold', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {children}
    </Comp>
  )
}
