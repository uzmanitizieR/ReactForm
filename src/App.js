import React, { useState } from 'react'

function App() {

  const[form,setForm] = useState({ isim:"",sehir:"",bio:""});
const [isim,setIsım] = useState("");

const [sehir,setSehir] = useState("");

const [bio,setBio] = useState("");

const handleChange = event => setForm({...form,[event.target.name]: event.target.value})

console.log(form)

  return (
    <div className='App'>
      <h1>React Dersleri</h1>
      <form>
        <input placeholder='Adiniz' name='isim' value={form.isim} onChange={handleChange} defaultValue={""} />
        <select name='sehir' value={form.sehir} onChange={handleChange}>
          <option value="" disabled selected hidden></option>
          <option value="ankara">Ankara</option>
          <option value="istanbul">İstanbul</option>
          <option value="izmir">İzmir</option>
        </select>
        <textarea rows="10" placeholder='biyografiniz' name='bio '  value={form.bio} onChange={handleChange}/>
        <button>Gönder</button>
      </form>


    </div>
  )
}

export default App