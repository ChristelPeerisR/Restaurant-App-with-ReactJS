import React from 'react'
import './Head.css'
import rewards from '../../assets/rewards.png'

const Head = () => {
  return (
    <div id="home" className='head container'>
        <div className='head-text'>
            <h1>Tacos on the Go</h1>
            <p>For a limited time, join Tacolicious Rewards to get a<br/>
              Build Your Own Cravings Box for $1** and <br/>redeem your free
              Welcome Reward* <br/>on the app.</p>
            <button className='btn'>Join Rewards <img src={rewards}/> </button>
        </div>
    </div>
  )
}

export default Head