import React from 'react'
import "../../index.css"
const About = () => {
  return (

    <>
      <div style={{textAlign:"center"}}>
        <div className="about-section" >
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>
        <h2>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.CGN_R3YtmCaxNFdrPQCKBQHaHT&pid=Api&P=0&h=220" alt="Jane" />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><button style={{marginBottom:"10px"}} className="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.CGN_R3YtmCaxNFdrPQCKBQHaHT&pid=Api&P=0&h=220" alt="Mike" />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button style={{marginBottom:"10px"}} className="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="https://tse2.mm.bing.net/th?id=OIP.CGN_R3YtmCaxNFdrPQCKBQHaHT&pid=Api&P=0&h=220" alt="John" />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button style={{marginBottom:"10px"}} className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About