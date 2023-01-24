import { FormEvent, useState } from 'react'
import './App.css'
import { formData } from './types'

function App() {
  const initialState: formData = {
    firstName: "",
    lastName: "",
    age: 0,
    phoneNumber: 0,
    street: "",
    city: "",
    state: "",
    zip: ",",
    country: "",
    email: "",
    password: "",
  }

  const [data, setData] = useState<formData>(initialState);

  return (
    <div>

    </div>
  )
}

export default App
