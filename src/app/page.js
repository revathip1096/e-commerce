"use client"
import Image from 'next/image'
import Hero from './components/navbar'
import Homepage from './views/homepage'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
        <Homepage />
    </QueryClientProvider>
  )
}
