import React from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export type Props = CheckboxPrimitive.CheckboxProps

export const Checkbox: React.FC<Props> = ({ ...props }) => (
  <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
    <CheckboxPrimitive.Indicator asChild>
      <Check className="h-5 w-5 text-cyan-500" weight="bold" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
)
