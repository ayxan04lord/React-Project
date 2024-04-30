import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import "./assets/Profile.css"

const Profile = () => {
    return (
        <div className='all'>
            <Email email="Email : ayxan.mustafayev.2004@mail.ru" />
            <Name name="Name : Ayxan" />
            <Address Address="Address : Hesenbey Zerdabi 3166" />
            <PersonalInfo age="Age : 19" info="Experience : - " phone="Phone : +994556772714" />
        </div>
    )
}

export default Profile