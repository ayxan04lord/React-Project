import React from 'react'
import PersonalInfo from './Components/PersonalInfo'
import Experience from './Components/Experience'
import Contacts from './Components/Contacts'
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