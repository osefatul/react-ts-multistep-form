import React from 'react'
import FormWrapper from '../FormWrapper'
import { UserFormProps } from '../types'




function UserForm({firstName, lastName, age, updateFields,}: UserFormProps) {
    return (
        <FormWrapper title='User Details'>

            <label htmlFor="firstName">First Name</label>
            <input 
            type="text" 
            id='firstName'
            autoFocus
            required
            value={firstName}
            onChange = {e=> updateFields({firstName: e.target.value})}
            />

            <label htmlFor="lastName">Last Name</label>
            <input 
            type="text" 
            required
            id='LastName'
            value={lastName}
            onChange = {e=> updateFields({lastName: e.target.value})} 
            />

            <label htmlFor="age">Age</label>
            <input 
            type="number" 
            id='age'
            required
            value={age}
            onChange = {e=> updateFields({age: Number(e.target.value) })}
            />
        
        </FormWrapper>
    )
}

export default UserForm