import { ImageCard } from '@components/card/ImageCard'
import { Bookmark, Heart, Share2 } from 'react-feather'
import bgImage from '../../assets/img-1.jpg'

const ImageCardWrapper = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <ImageCard src={bgImage}>
        <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quam similique alias repudiandae
          exercitationem, debitis velit cupiditate molestias iste facere?
        </p>
        <div className="space-x-4 mt-4">
          <button className="btn">
            <Heart size={20} />
          </button>
          <button className="btn">
            <Bookmark size={20} />
          </button>
          <button className="btn">
            <Share2 size={20} />
          </button>
        </div>
      </ImageCard>
    </div>
  )
}

export { ImageCardWrapper }
