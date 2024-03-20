import './App.css';
import UI from './components/UI';
const jsonData = require("../src/student.json");



function App() {
  
  return (

    <div className="App">
      <UI data={jsonData}/>
    </div>
  );
}

export default App;
