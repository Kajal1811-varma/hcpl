import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className=" max-w-3xl px-4 sm:px-6 xl:max-w-full xl:px-0">{children}</section>
  )
}
