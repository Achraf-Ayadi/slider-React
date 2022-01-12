import React, { useState, useEffect } from 'react'

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
import people from './data'

function App() {
  const [poeple, setPoeple] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < 0) {
      setIndex(poeple.length - 1)
    }

    if (index > poeple.length - 1) {
      setIndex(0)
    }
  }, [index, poeple])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 2000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <>
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className='section-center'>
          {poeple.map((person, personIndex) => {
            const { id, image, title, name, quote } = person

            let position = 'nextSlide'
            if (personIndex === index) {
              position = 'activeSlide'
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            )
              position = 'lastSlide'

            return (
              <article className={position} key={id}>
                <img className='person-img ' src={image} alt={name} />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'> {quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            )
          })}
          <button
            className='prev'
            type='button'
            onClick={() => {
              setIndex(index - 1)
            }}
          >
            <FiChevronLeft />
          </button>
          <button
            className='next'
            type='button'
            onClick={() => {
              setIndex(index + 1)
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  )
}

export default App
