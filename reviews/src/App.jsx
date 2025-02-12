import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    // this function evaluates whether next number is valid or not, and returns the number if it is valid, otherwise it returns 0 or the last number in the array
    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };

    const nextPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = currentIndex + 1;
            return checkNumber(newIndex);
        });
    };

    const prevPerson = () => {
        setIndex((currentIndex) => {
            const newIndex = currentIndex - 1;
            return checkNumber(newIndex);
        });
    };

    // this function will generate a random number between 0 and the length of the array, and if the number is the same as the current index, it will call itself again
    const randomPerson = () => {
        const randomNumber = Math.floor(Math.random() * people.length);
        setIndex((currentIndex) => {
            if (randomNumber === currentIndex) {
                console.log("the same number");
                if (people.length > 1) randomPerson();
                // randomPerson(); // this will cause infinite loop if length is smaller than 1
            }
            return checkNumber(randomNumber);
        });
    };

    return (
        <main>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className="person-img" />
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="btn-container">
                    <button className="prev-btn" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className="btn btn-hipster" onClick={randomPerson}>
                    Surprise Me
                </button>
            </article>
        </main>
    );
};
export default App;
