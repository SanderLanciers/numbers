import './App.css';
import {Numbers} from "./components/Numbers.js";
import {NUMBER_DATA} from "./data/data";
import {CARS_DATA} from "./data/data";
import {PERSONS_DATA} from "./data/data";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Persons";

function App() {
    return (
        <div id="root">

                <Numbers numbers={NUMBER_DATA}/>
                <Cars cars={CARS_DATA}/>
                <Persons persons={PERSONS_DATA}/>

        </div>
    );
}

export default App;
