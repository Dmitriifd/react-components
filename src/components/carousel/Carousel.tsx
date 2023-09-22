import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

type Props = {
  slides: string[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

function Carousel({ slides, autoSlide = false, autoSlideInterval = 3000 }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const nextSlide = () => setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  const handleBulletClick = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((img) => (
          <img src={img} alt="" key={img} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prevSlide} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button onClick={nextSlide} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-none w-3 h-3 bg-white rounded-full cursor-pointer
              ${currentSlide === i ? 'p-2' : 'bg-opacity-50'}
            `}
              onClick={() => handleBulletClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Carousel }
