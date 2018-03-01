import React from 'react'
import Project from './Project'
import { projects } from '../data/projects';

const Projects = () => (
  <div className="projects" >
    {projects.map((project , i) => <Project name={project.name} description={project.description} key={i} />)}
  </div>
)

export default Projects
