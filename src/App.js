import React from 'react'

import './App.css'

function App() {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop id="video">
          <source src="https://www.webershandwick.com/wp-content/uploads/2021/03/ws-covid-loop.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="nav-center">
        <div className="nav-start">
        </div>
        <div className="nav-end">
        </div>
      </div>

      <div className="hero">
        <p>Lorem ipsum dolor sit amet.</p>
        <h1>AWESOME.CO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="side-by-side-card">
        <div className="card-img-container">

        </div>
        <div className="card-content-container">
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, porro fuga. Non earum perspiciatis laborum, natus tempora nesciunt ea ipsum.</p>
        </div>
      </div>

      <div className="side-by-side-card">
        <div className="card-img-container" style={{ backgroundImage: 'url(https://www.webershandwick.com/wp-content/uploads/2019/06/x-min-1280x611.jpg)' }}>
        </div>
        <div className="card-content-container">
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, porro fuga. Non earum perspiciatis laborum, natus tempora nesciunt ea ipsum.</p>
        </div>
      </div>

      {/* <div className="sales-points">
        <div className="sp">
          <h2>1 Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque, corporis, harum officia voluptatibus sapiente facere obcaecati ipsum blanditiis voluptate quaerat. Esse aliquid voluptatum quidem cupiditate sit est eveniet labore.</p>
        </div>
        <div className="sp">
          <h2>2 Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae doloribus ullam eligendi magni maiores neque iusto voluptatibus blanditiis dolorem.</p>
        </div>
        <div className="sp">
          <h2>3 Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae doloribus ullam eligendi magni maiores neque iusto voluptatibus blanditiis dolorem.</p>
        </div>
        <div className="sp">
          <h2>4 Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae doloribus ullam eligendi magni maiores neque iusto voluptatibus blanditiis dolorem.</p>
        </div>
      </div> */}
    </>
  )
}

export default App;
