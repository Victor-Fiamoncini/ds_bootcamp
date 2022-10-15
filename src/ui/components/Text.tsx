import React, { ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface Props {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  className?: string
}

export const Text: React.FC<Props> = ({ size = 'md', children, asChild, className }) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
