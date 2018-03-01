import React from 'react'
import PropTypes from 'prop-types'

const Project = (props) => (
  <div className="project">
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </div>
)

Project.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
}

export default Project
