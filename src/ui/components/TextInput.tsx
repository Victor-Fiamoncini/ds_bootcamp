import React, { InputHTMLAttributes, ReactNode } from 'react'

import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
  children: ReactNode
}

export const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => (
  <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300">
    {children}
  </div>
)

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

export const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => (
  <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
)

TextInputIcon.displayName = 'TextInput.Icon'

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>

export const TextInputInput: React.FC<TextInputInputProps> = ({ ...props }) => (
  <input className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none" {...props} />
)

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}
