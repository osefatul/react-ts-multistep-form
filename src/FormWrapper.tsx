import React from 'react'
import { FormWrapperProps } from './types'

function FormWrapper({title, children}: FormWrapperProps) {

    return (
        <div style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}>
            <h2>{title}</h2>
            
            <div
            style={{
                display: 'grid',
                gap: '1rem .5rem',
                justifyContent: 'flex-start',
                gridTemplateColumns: 'auto minmax(auto, 400px)',
            }}
            >
                {children}
            </div>
        </div>
    )
}

export default FormWrapper