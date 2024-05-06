import React from 'react'

import BlockContent from '@components/block-content'
import VideoLoop from '@components/vimeo-loop'
import Photo from '@components/photo'

const Hero = ({ data = {} }) => {
  const { content, bgType, photos, video } = data

  return (
    <section className="hero">
      {content && (
        <div className="hero--overlay">
          <div className="hero--content">
            <BlockContent blocks={content} />
          </div>
        </div>
      )}

      {bgType === 'video' && (
        <>
          <div className="hero--bg is-desktop">
            <VideoLoop title={video.title} id={video.id} />
          </div>
          <div className="hero--bg is-mobile">
            <VideoLoop title={video.title} id={video.id} />
          </div>
        </>
      )}

      {bgType === 'photo' && (
        <>
          {photos?.desktopPhoto && (
            <Photo
              photo={photos.desktopPhoto}
              width={3600}
              srcSizes={[2400, 3000, 3600, 3600]}
              sizes="100vw"
              layout="fill"
              className="hero--bg is-desktop"
            />
          )}
          {photos?.mobilePhoto && (
            <Photo
              photo={photos.mobilePhoto}
              width={1600}
              sizes="100vw"
              layout="fill"
              className="hero--bg is-mobile"
            />
          )}
        </>
      )}
    </section>
  )
}

export default Hero
