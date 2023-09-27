import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone</p>
      <Button variant="destructive">Click me</Button>
    </div>
  )
}
