import './index.css';
import Shape from './components/Shape';

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const colors = ["green", "red", "blue", "yellow", "purple", "grey", "pink", "gold", "brown", "black"];

  return (
    <div className="App">
      {
        numbers.map((number, index) => {
          return <Shape key={index} color={colors[index]}/>
        })
      }
    </div>
  );
}

export default App;
