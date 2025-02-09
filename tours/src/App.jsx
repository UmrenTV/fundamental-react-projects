import { useState, useEffect } from "react";

const url = "https://www.course-api.com/react-tours-project";

import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };
    const fetchTours = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                setIsError(true);
                console.error(response);
                setIsLoading(false);
                return;
            }
            const data = await response.json();
            console.log(data);
            setTours(data);
        } catch (error) {
            setIsError(true);
            console.error(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return (
            <div className="main-container">
                <h2 className="title">Something went wrong...</h2>
                <div className="title-underline">
                    <button
                        type="button"
                        className="btn btn-block"
                        onClick={fetchTours}
                        style={{ marginTop: "1rem" }}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }
    return (
        <main>
            <h2 className="title">Tours:</h2>
            <div className="title-underline">
                {!tours.length && (
                    <button
                        type="button"
                        className="btn btn-block"
                        onClick={fetchTours}
                        style={{ marginTop: "1rem" }}
                    >
                        Refresh
                    </button>
                )}
            </div>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
};
export default App;
