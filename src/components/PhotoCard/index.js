import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, Button, ImgWrapper, Img } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      console.log({ isIntersecting })
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size={`32px`} /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  )
}
