import React from 'react'
import './portfolio.css'
import MovieFight from '../../assets/moviefight.png'
import Maze from '../../assets/maze.png'
import Myself from '../../assets/myselfcss.png'
import Mars from '../../assets/mars.png'
import Remoteapp from '../../assets/remoteapp.png'

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
        <h4>Web application, which compares two movie stats from movie database. Application built using HTML, CSS, JavaScript, Axios.</h4>
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
        <h4>A maze game web app, built using Javascript and MatterJS library. User can manipulate an object through the maze using arrow keys until it reaches the target.</h4>
        <div className="portfolio_item-cta">
        <a href="https://github.com/tadzyla/maze_game" target="_blank" rel="noreferrer" className='btn'>Github</a>
        <a href="https://tadzyla.github.io/maze_game/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>

    <article className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={Myself} alt="myself" />
      </div>
        <h3>Chat app</h3>
        <h4>Fully responsive demonstration version of chat app, designed using Figma and built using Webflow builder</h4>
        <div className="portfolio_item-cta">
        <a href="https://www.figma.com/file/2diFS9ksl2F7TeDW7B62qa/Practice%3A-Chat-App-Homepage-Design-(Copy)?node-id=107%3A2" target="_blank" rel="noreferrer" className='btn'>Figma preview</a>
        <a href="https://blablachat-app-homepage.webflow.io/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>

    <article className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={Mars} alt="mars" />
      </div>
        <h3>Rovers from Mars</h3>
        <h4>Web application built with React. It is fetching photos from NASA API, taken by Mars rovers. Gives user an opportunity to see latest photos from Mars.</h4>
        <div className="portfolio_item-cta">
        <a href="https://github.com/tadzyla/mars_rovers" target="_blank" rel="noreferrer" className='btn'>Github</a>
        <a href="https://roversfrommars.herokuapp.com/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article> <article className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={Remoteapp} alt="remoteapp" />
      </div>
        <h3>Remote team app</h3>
        <h4>A full website design built for a concept team collaboration platform. This website also includes a blog. I have built the website in Webflow which has CMS for blog hosting</h4>
        <div className="portfolio_item-cta">
        <a href="https://www.figma.com/file/n0Bni42aInuzFgcPsyu5oI/Wireframe-Kit-(Copy)?node-id=2899%3A226" target="_blank" rel="noreferrer" className='btn'>Figma preview</a>
        <a href="https://remoteam-app.webflow.io/" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>
  </div>

  </div>
  
  )
}

export default Portfolio