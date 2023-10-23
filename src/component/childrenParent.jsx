import React from "react";
import { useState } from "react";

function App() {

//Savoir si la case est cochée et // désactiver le bouton si cas non cochée

const[isTermAccepted, setIsTermAccepted]= useState(false)

  return (
    <>
      <form>
        <CGUCheckbox checked={isTermAccepted} onCheck={isTermAccepted}/>

        <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
      </form>
    </>
  );
}

//fonction children

function CGUCheckbox({checked, onCheck}) {
  return (
    <div>
      <label>
        <input 
        type="checkbox" 
        onChange={(e)=> onCheck(e.target.checked)}
        checked={checked} />
        Accepter les conditions d'utilisation
      </label>
    </div>
  );
}

export default App;
