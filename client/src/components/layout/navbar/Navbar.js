import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import {RiHomeHeartLine, RiUser6Line} from 'react-icons/ri'


const Navbar = ({title, icon}) => {

  return (
    <div className='navbar bg-primary'>
        <h1 style={{display: 'flex', alignItems: 'center'}}>
           {icon} {title}
        </h1>
        <ul>
            <NavItem title='Home' url='/' icon={<RiHomeHeartLine />}/>
            <NavItem title='About' url='/about' icon={<RiUser6Line />}/>
        </ul>
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