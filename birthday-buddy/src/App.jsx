import { useState } from "react";
import data from "./data";

const App = () => {
    const [people, setPeople] = useState(data);
    const removeAll = () => {
        setPeople([]);
    };
    return (
        <>
            <h2>Birthday Reminder - Starter</h2>
            <div className="birthday-list">
                {people.map((person) => {
                    return (
                        <div className="birthday" key={person.id}>
                            <img src={person.image} />
                            <h3>{person.name}</h3>
                            <p>{person.age}</p>
                        </div>
                    );
                })}
                <button type="button" onClick={removeAll}>
                    Remove All
                </button>
            </div>
        </>
    );
};
export default App;
