import './App.css';

function App() {
  const myName = 'Scott Minter';

  var buttonClickHandler = () => {
    alert(myName + ', you clicked me!');
  }

  return (
    <div className="App">
        <p>
          <strong>Hello {myName}!</strong>
          <br/>
          <button
            onClick={buttonClickHandler}
          >
            Click me!
          </button>
        </p>
    </div>
  );
}

export default App;
