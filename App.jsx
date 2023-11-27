import React, {useState, useEffect} from "react";
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /*function fetchData() {
    fetch('http://localhost:3000/')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err))
        .finally(setLoading(true));
  }*/

  async function currentFetchData() { 
    try {
      const respone = await axios.get('http://localhost:3000/api/1');

      setData(respone.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //fetchData()
    currentFetchData();
  }, [])

  return (
    <div>
      <ul>
        {data.map((element) => {
          return <li key={element.id}>{element.username}</li>
        })}
      </ul>
    </div>
  )
}

export default App;