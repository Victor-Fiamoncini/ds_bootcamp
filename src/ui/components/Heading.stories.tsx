import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Props, Heading } from '@/ui/components/Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
  },
} as Meta<Props>

export const Default: StoryObj = {
  args: {},
}

export const Small: StoryObj = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: <h1>Lorem ipsum</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
