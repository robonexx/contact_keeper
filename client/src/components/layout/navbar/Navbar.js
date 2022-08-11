import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title, icon}) => {

  return (
    <div className='navbar bg-primary'>
        <h1 style={{display: 'flex', alignItems: 'center'}}>
           {icon} {title}
        </h1>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Contact keeper',
    icon: ''
}

export default Navbar