import React from 'react'
import './portfolio.css'
import MovieFight from '../../assets/moviefight.png'
import Maze from '../../assets/maze.png'
import Myself from '../../assets/myselfcss.png'
import Mars from '../../assets/mars.png'

const Portfolio = () => {
  return (

<div id='portfolio'>
  <h5>My recent work</h5>
  <h2>Portfolio</h2>

<div className="container portfolio_container">
    <article className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={MovieFight} alt="moviefight" />
      </div>
        <h3>Movie fights</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/tadzyla/project_movie_fights" target="_blank" rel="noreferrer" className='btn'>Github</a>
        <a href="https://tadzyla.github.io/project_movie_fights/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>

    <article className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={Maze} alt="maze" />
      </div>
        <h3>Maze game</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/tadzyla/maze_game" target="_blank" rel="noreferrer" className='btn'>Github</a>
        <a href="https://tadzyla.github.io/maze_game/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>

    <article className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={Myself} alt="myself" />
      </div>
        <h3>Myself with CSS</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/tadzyla/mySelf" target="_blank" rel="noreferrer" className='btn'>Github</a>
        <a href="https://tadzyla.github.io/mySelf/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>

    <article className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={Mars} alt="mars" />
      </div>
        <h3>Rovers from Mars</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/tadzyla/mars_rovers" target="_blank" rel="noreferrer" className='btn'>Github</a>
        <a href="https://roversfrommars.herokuapp.com/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>
  </div>

  </div>
  
  )
}

export default Portfolio