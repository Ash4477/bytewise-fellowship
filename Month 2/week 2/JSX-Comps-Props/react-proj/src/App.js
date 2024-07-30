import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Ash" version="Prime" universe={47}/>
    </div>
  );
}

const User = (props) => {
  return <div>
            <h1>Name: {props.name}</h1>
            <h1>Variant: {props.version}</h1>
            <h1>Universe: {props.universe}</h1>
        </div>;
};

export default App;
