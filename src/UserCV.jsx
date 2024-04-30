import React from 'react'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Contacts from './Contacts'
// import './UserCV.css'

const UserCV = () => {
    return (
        <div className="all">
            <PersonalInfo />
            <Experience />
            <Contacts />
        </div>
    )
}

export default UserCV