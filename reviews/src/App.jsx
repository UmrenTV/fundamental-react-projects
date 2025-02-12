import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    // const movePerson = (direction) => {
    //     if (direction === 1) {
    //         setIndex((currentIndex) => {
    //             if (currentIndex === people.length - 1) {
    //                 return 0;
    //             } else {
    //                 return currentIndex + 1;
    //             }
    //         });
    //     } else {
    //         setIndex((currentIndex) => {
    //             if (currentIndex === 0) {
    //                 return people.length - 1;
    //             } else {
    //                 return currentIndex - 1;
    //             }
    //         });
    //     }
    // };
    // you can do it with the commented approach above, and also the buttons below.
    // or you can do it with this aproach below. The result is same... it's just a matter of preference.

    // const nextPerson = () => {
    //     if (index === people.length - 1) {
    //         setIndex(0);
    //     } else {
    //         setIndex(index + 1);
    //     }
    // }
    //
    // you can also use this commented approach, without using the setIndex(() => {})
    // function approach, which is more readable, but using the other approach, takes the latest state value

    const nextPerson = () => {
        setIndex((currentIndex) => {
            if (currentIndex === people.length - 1) {
                return 0;
            } else {
                return currentIndex + 1;
            }
        });
    };

    const prevPerson = () => {
        setIndex((currentIndex) => {
            if (currentIndex === 0) {
                return people.length - 1;
            } else {
                return currentIndex - 1;
            }
        });
    };

    console.log(people);
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
                    {/* <button className="prev-btn" onClick={() => movePerson(-1)}> */}
                    {/*     <FaChevronLeft /> */}
                    {/* </button> */}
                    {/* <button className="next-btn" onClick={() => movePerson(1)}> */}
                    {/*     <FaChevronRight /> */}
                    {/* </button> */}
                    <button className="prev-btn" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
            </article>
        </main>
    );
};
export default App;
