import React from "react";
import { useState } from "react";

function Usestate() {

//une fonction qui affiche un objet 

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Does",
    Age: 18,
  });
  const [count, setCount] = useState(0);

  //fonction pour changer l'age 

  const incrementAge = () => {
    setPerson({ ...person, Age: person.Age + 1 });
  };

  //fonction pour changer la valeur du compteur

  const incrementCount = () => {
    setCount(count + 1);
  };

  // afficher ces fonctions

  return (
    <>
      <p>
        Age de {person.firstName} : {person.Age}
      </p>
      <button onClick={incrementAge}> gagner une année</button>
      <button onClick={incrementCount}> incrémenter {count}</button>
    </>
  );
}