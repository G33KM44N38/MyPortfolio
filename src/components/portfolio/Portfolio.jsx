import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
  },
  {
    id: 2,
    image: IMG2,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
  },
  {
    id: 3,
    image: IMG3,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
  },
  {
    id: 4,
    image: IMG4,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
  },
  {
    id: 5,
    image: IMG5,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
  },
  {
    id: 6,
    image: IMG6,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
  },
  {
    id: IMG1,
    title: "Gestion d'ingredient",
    github: 'https://github.com',
    demo: '',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article className='portfolio_item'>
                  <div key={id} className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio