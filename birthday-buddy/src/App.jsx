import { useState } from "react";

import List from "./components/List";
import data from "./data";

const App = () => {
    const [people, setPeople] = useState(data);
    const removeAll = () => {
        setPeople([]);
    };
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today:</h3>
                <List people={people} removeAll={removeAll} />
                <button
                    type="button"
                    onClick={() => {
                        setPeople([]);
                    }}
                    className="btn btn-block"
                >
                    Clear All
                </button>
            </section>
        </main>
    );
};
export default App;
