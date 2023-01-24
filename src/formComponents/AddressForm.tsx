import React from 'react'
import FormWrapper from '../FormWrapper'
import { AddressDataWrapperProps } from '../types'

function AddressForm(
  {street, 
  city, 
  state, 
  country, 
  zip,
  updateFields}: AddressDataWrapperProps) {

  return (
    <FormWrapper title='Address Details'>
      <label htmlFor="street">Street</label>
      <input 
      type="text"
      id='street'
      autoFocus
      required
      value={street}
      onChange={e=> updateFields({street: e.target.value})}
      />

      <label htmlFor="city">City</label>
      <input 
      type="text"
      id='city'
      required
      value={city}
      onChange={e=> updateFields({city: e.target.value})}
      />

      <label htmlFor="state">State</label>
      <input 
      type="text"
      id='state'
      required
      value={state}
      onChange={e=> updateFields({state: e.target.value})}
      />

      <label htmlFor="country">Country</label>
      <input 
      type="text"
      id='country'
      required
      value={country}
      onChange={e=> updateFields({country: e.target.value})}
      />

    <label htmlFor="zip">Zip</label>
      <input 
      type="text"
      id='zip'
      required
      value={zip}
      onChange={e=> updateFields({zip: e.target.value})}
      />

    </FormWrapper>
  )
}

export default AddressForm