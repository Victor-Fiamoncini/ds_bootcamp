import React from 'react'

import { Envelope, Lock } from 'phosphor-react'

import ReactIcon from '@/ui/assets/react-icon.svg'
import { Heading } from '@/ui/components/Heading'
import { Text } from '@/ui/components/Text'
import { TextInput } from '@/ui/components/TextInput'

import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'

export const App: React.FC = () => (
  <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
    <header className="flex flex-col items-center">
      <img src={ReactIcon} alt="React Logo" />

      <Heading className="mt-4" size="lg">
        DS Bootcamp
      </Heading>

      <Text className="text-gray-400 mt-1" size="lg">
        Faça login e comece a usar!
      </Text>
    </header>

    <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
      <label className="flex flex-col gap-3" htmlFor="email">
        <Text className="font-semibold">Endereço de e-mail</Text>

        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input id="email" type="email" placeholder="Digite seu e-mail" />
        </TextInput.Root>
      </label>

      <label className="flex flex-col gap-3" htmlFor="password">
        <Text className="font-semibold">Sua senha</Text>

        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>

          <TextInput.Input id="password" type="password" placeholder="********" />
        </TextInput.Root>
      </label>

      <label className="flex items-center gap-2 cursor-pointer" htmlFor="remember">
        <Checkbox id="remember" />
        <Text className="text-gray-200" size="sm">
          Lembrar de mim por 30 dias
        </Text>
      </label>

      <Button type="submit" className="mt-4">
        Entrar na plataforma
      </Button>
    </form>

    <footer className="flex flex-col items-center gap-4 mt-8">
      <Text size="sm" asChild>
        <a className="text-gray-400 underline hover:text-gray-200 transition-colors" href="">
          Esqueceu sua senha?
        </a>
      </Text>
      <Text size="sm" asChild>
        <a className="text-gray-400 underline hover:text-gray-200 transition-colors" href="">
          Não possui conta? Crie uma agora!
        </a>
      </Text>
    </footer>
  </div>
)
