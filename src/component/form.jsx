import React from "react";
import { useState } from "react";

function App() {

// une fonction pour changer la valeur de formulaire

  
const [firstname, setFirstname]= useState('Jon doe')


const handleChange = (e) => {
  setFirstname(e.target.value)}

// une fonction reset pour réinitialiser la valeur

const reset = () => {
  setFirstname('');}

  // soumettre un formulaire

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // checked box

  const [checked, setChecked] = useState(true)
  const toggleCheck= () => {
    setChecked(checked)
  }


//afficher les fonctions sur l'ecran

  return (
    <>
     <form >
      <input type="text" name="firstname" value= {firstname} onChange={handleChange}/>
     
     <input type="checkbox" checked={checked} onChange={toggleCheck}/>
     {checked && <button>Envoyer</button>}
     </form>
     

    </>
  );
}

export default App;
