import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/pokemon");
        console.log(data);
        setPokes(data.results);
      } catch (error) {
        console.log(error.message)
      }
    };
    fetchData();
  },[]);
  console.log(pokes)
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <div>
        {pokes.map((poke, index) => {
          return <div key="index">{poke.name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
