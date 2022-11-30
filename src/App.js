import Dropdown from "./Dropdown";
import "./styles/App.css";

function App() {
  const data = [
    {key: "jeff", value: "Jeff"},
    {key: "annie", value: "Annie"},
    {key: "troy", value: "Troy"},
    {key: "abed", value: "Abed"},
    {key: "britta", value: "Britta"},
    {key: "shirley", value: "Shirley"},
    {key: "pierce", value: "Pierce"},
  ];

  return (
    <div className="App">
      <div>
        <h4>Dropdown with Single Select and No Search</h4>
        <Dropdown
          defaultText="Select an option"
          data={data}
          onSelect={(selected) => console.log(selected)}
        />  
      </div>
      <div>
        <h4>Dropdown with Single Select and Search</h4>
        <Dropdown
          hasSearch
          defaultText="Select an option"
          data={data}
          onSelect={(selected) => console.log(selected)}
        />  
      </div>
      <div>
        <h4>Dropdown with Multiple Select and Search</h4>
        <Dropdown
          multipleSelect
          hasSearch
          defaultText="Select an option"
          data={data}
          onSelect={(selected) => console.log(selected)}
        />        
      </div>
    </div>
  );
}

export default App;
