import React from 'react'
import { FormWrapperProps } from './types'

function FormWrapper({title, children}: FormWrapperProps) {

    return (
        <div>
            <h2>{title}</h2>
            
            <div>
                {children}
            </div>
        </div>
    )
}

export default FormWrapper