import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";

const DATA = [
  {
    type: "file",
    name: "File 1"
  },
  {
    type: "folder",
    name: "Folder 1",
    children: [
      {
        type: "file",
        name: "File 1 - 1"
      },
      {
        type: "folder",
        name: "Folder 1 - 1",
        children: [
          {
            type: "file",
            name: "File 1 - 1 - 1"
          },
          {
            type: "folder",
            name: "Folder 1 - 1 - 1",
            children: []
          }
        ]
      }
    ]
  }
];

function App() {
  return (
    <div className="App">
      {DATA.map(item => (
        <Item data={item} />
      ))}
    </div>
  );
}

export default App;
