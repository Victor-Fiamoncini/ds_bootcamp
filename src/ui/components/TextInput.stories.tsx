import React from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { TextInputRootProps, TextInput } from '@/ui/components/TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Lorem inpum" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj = {
  args: {},
}
