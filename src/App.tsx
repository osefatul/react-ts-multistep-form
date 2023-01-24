import { FormEvent, useState } from 'react'
import './App.css'
import AccountForm from './formComponents/AccountForm'
import AddressForm from './formComponents/AddressForm'
import UserForm from './formComponents/UserForm'
import { useMultiStepForm } from './hook/useMultiStepForm'
import { FormData } from './types'

function App() {
  const initialState: FormData = {
    firstName: "",
    lastName: "",
    age: 0,
    phoneNumber: 0,
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    email: "",
    password: "",
  }
  
  const [data, setData] = useState(initialState);

  function updateFields(fields: Partial <FormData> ) {
    setData(prev => ({ ...prev, ...fields }));
  }



  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);


    function handleSubmit(e: FormEvent) {
      e.preventDefault();
      if (!isLastStep) return next();
      alert(JSON.stringify(data));
    }

  return(
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '.5rem',
        fontFamily: 'Arial',
        maxWidth: 'max-content',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end',
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? 'Finish' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default App
