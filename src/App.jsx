import Article from "./component/Article";
import Button from "./component/Button";

function App() {
  // fonction qui permet d'afficher une alerte une fois le boutton cliqué
  const handleClick = () => {
    alert("You clicked on the button");
  };

  return (
    <>
      <h1>Comprendre les props</h1>
      <button onClick={handleClick}>Click here</button>
      <Article id={1} title="Hello earth" />
      <Article id={2} title="Hello Fatma">
        <p>
          <strong>Lorem</strong>ipsum dolor sit amet consectetur adipisicing
          elit. Vitae delectus modi repudiandae, ullam voluptatibus consequatur
          et harum blanditiis vel, nostrum nesciunt aut possimus enim temporibus
          obcaecati dolorem similique tenetur asperiores!
        </p>
      </Article>
    </>
  );
}

export default App;
