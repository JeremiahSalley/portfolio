import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import './home.css'
import profilepic from '../ProfilePic2.jpeg'

function Home() {
    return (
        <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            {/* <h1>Jeremiah Salley Full Stack Web Developer</h1> */}
            <ReactTypingEffect className="typingeffect" text={['Jeremiah Salley Full Stack Web Developer']} speed={100} eraseDelay={700}/>
        </div>
    )
}

export default Home
