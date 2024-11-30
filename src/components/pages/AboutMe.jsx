import React from 'react'

const AboutMe = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className='about-me'>
          <img src='../src/assets/images/profilephoto.jpg' alt='photo of Theon Francis' className='profilePhoto'/>
          <p>
            I was born and raised in Trinidad and Tobago, studied biology at Lincoln University as an undergrad, returned to Trinidad to work in education, came back to Maryland to work in education for seven years, and finally moved into full-stack web development. I love watching and playing football (soccer) and have coached the sport for seven years. In my spare time, I like to play chess for fun.
          </p>
          <p>
            I made a career change to become a full-stack web developer. As a Columbia Engineering Coding Bootcamp graduate, I have acquired the skills to build robust applications using a wide range of modern technologies. I love this! I really enjoy the challenge of solving complex problems and the immediate satisfaction of fixing a bug. I also love the collaboration needed to meet the needs of the end user. After working on over thirty projects, my eyes are now primed for the web development world.
          </p>
      </div>
    </>
  )
}

export default AboutMe

