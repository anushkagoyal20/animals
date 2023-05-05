import { useState  } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    const[animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };
    
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type = {animal} key = {index} />;
    });
    return (
        <div className = "app">

            {/* <button onClick = { function(){
                    console.log("button was clicked");
                }
            }> */}
            {/*We could have done either of the two(the one which is commented above and the one which follows this comment) */}

            <button onClick = {handleClick}>
            Add animal
            </button>
            <div className = "animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;