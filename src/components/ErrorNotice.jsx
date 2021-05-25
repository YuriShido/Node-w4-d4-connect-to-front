import React from 'react'
export default function ErrorNotice(props) {
    return (
        <div className='error-notice'>
            <span>{props.massage}</span>
            <button onClick={props.clearError}></button>
        </div>
    )
}