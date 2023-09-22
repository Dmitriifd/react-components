import React from 'react'

type Props = {
  src: string
  children: React.ReactNode
} & React.ComponentProps<'div'>

const ImageCard = ({ children, src, ...props }: Props) => {
  return (
    <div {...props} className="relative max-w-xl  overflow-hidden rounded-2xl shadow-lg group">
      <img src={src} alt="" className="transition-transform group-hover:scale-110 duration-200" />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
        <div className="p-4 text-white">{children}</div>
      </div>
    </div>
  )
}

export { ImageCard }
