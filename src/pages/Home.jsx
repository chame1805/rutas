import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Section from "../components/organisms/Section";
import Text from "../components/atoms/Text";
import './Home.css'

function Home() {
  const [data, setData] = useState([]);

  const handleClick = (event) => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (response.ok) return response.json();
        else {
          alert('error');
        }
      })
      .then(data => {
        setData(data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <button onClick={handleClick}>Load Rick and Morty Data</button>
      <Text>The Rick and Morty</Text>
     
      <div id="sec">

      <Section characters={data} />
      </div>
    </>
  );
}

export default Home;
