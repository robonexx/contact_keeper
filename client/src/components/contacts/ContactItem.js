import React from 'react'
import {RiMailOpenLine, RiPhoneLine} from 'react-icons/ri'

const ContactItem = ({contact}) => {
    const {id, name, email, phone, type} = contact;
  return (
    <div className="card bg-light">
        <h3 className='text-primary text-left'>
            {name} {' '}<span 
            style={{float: 'right'}}
            className={`badge ${type === 'professional' ? 'badge-success' : 'badge-primary'}`}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </h3>
          <ul className='list'>
            {email && (
              <li style={{display: 'flex', alignItems: 'center'}}>
                <RiMailOpenLine />{' '}{email}
              </li>)}
            {phone && (
              <li style={{display: 'flex', alignItems: 'center'}}>
                <RiPhoneLine />{' '}{phone}
              </li>
            )}
          </ul>
    </div>
  )
}

export default ContactItem