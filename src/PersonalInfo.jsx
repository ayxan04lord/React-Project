import React from 'react'

const PersonalInfo = (props) => {
    return (
        <div>
            <p>{props.age}</p>
            <p>{props.info}</p>
            <p>{props.phone}</p>
        </div>
    )
}

export default PersonalInfo