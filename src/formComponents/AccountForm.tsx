import React from 'react'
import FormWrapper from '../FormWrapper'
import { AccountFormWrapperProps } from '../types'

function AccountForm({email, password, updateFields}: AccountFormWrapperProps) {
return (
    <FormWrapper title='Account Details'>

        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        id='email'
        required
        autoFocus
        value={email}
        onChange={e=> updateFields({email: e.target.value})}
        />

        <label htmlFor="password">Password</label>
        <input 
        type="password"
        id='password'
        required
        value={password}
        onChange={e=> updateFields({password: e.target.value})}
        />
    </FormWrapper>
)
}

export default AccountForm