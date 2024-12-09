import React from 'react'

const Portfolio = () => {
  let projects = [
    {
      projectNumber: 1,
      title: 'Task Mates',
      image: 'project1taskmates.png',
      deployed: 'https://task-mates-app.onrender.com',
      repo: 'https://github.com/Theon87/task-mates-app',
      description: 'A shared platform designed to help users efficiently manage and delete tasks within a group environment.'
    },
    {
      projectNumber: 2,
      title: 'Build A Vehicle',
      image: 'project2buildavehicle.png',
      deployed: 'https://drive.google.com/file/d/1TNm_pfwrH6421y7I89eqi_WBXBGoBIhZ/view?usp=sharing',
      repo: 'https://github.com/Theon87/build-a-vehicle',
      description: 'This is a command-line application that allows users to build a vehicle by selecting from a list of options.'
    },
    {
      projectNumber: 3,
      title: 'Social Network API',
      image: 'project3socialnetworkapi.png',
      deployed: 'https://drive.google.com/file/d/1mIlWeP9VDpVpoPEzqK-5C0ja_wOIw1wu/view?usp=sharing',
      repo: 'https://github.com/Theon87/social-network-api',
      description: 'Demonstrated on Insomnia, this app showcases how the Express.js, MongoDB, and the Mongoose ODM can combine to create a responsive social network experience.'
    }
  ]
  return (
    <>
        <h1>Portfolio</h1>
        <div className='portfolio'>
              {projects.map((project) => (
                  <article className='project' key={project.projectNumber}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <figure>
                      <img 
                        src={project.image} 
                        alt={`Screenshot of the ${project.title} app`} 
                      />
                    </figure>
                    <a href={project.deployed} target='_blank' rel='noopener noreferrer'>View App</a>
                    <br />
                    <a href={project.repo} target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
                  </article>
              ))}
        </div>
    </>
  )
}

export default Portfolio