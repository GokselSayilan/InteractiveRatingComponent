import { useState } from "react";
import "./app.css";
import "animate.css";

function App() {
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [pointAnimate, setPointAnimate] = useState("");

  const pointArray = [1, 2, 3, 4, 5];

  const handleSubmit = () => {
    if (selectedPoint !== 0) {
      setIsSubmit(true);
    } else {
      setPointAnimate("animate__animated animate__headShake");
      setTimeout(() => {
        setPointAnimate("");
      }, 500);
    }
  };

  return (
    <div className="app">
      <div className="appWrapper">
        {isSubmit ? (
          <div className="thanksBox">
            <img
              src="images/illustration-thank-you.svg"
              alt="thanksIcon"
              className="thanksBoxImg"
            />
            <p className="thanksBoxSelectedPoint">
              You selected {selectedPoint} out of 5
            </p>
            <h2 className="thanksBoxTitle">Thank you!</h2>
            <p className="thanksBoxDesc">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        ) : (
          <div className="ratingBox">
            <img
              src="images/icon-star.svg"
              alt="starIcon"
              className="ratingBoxImg"
            />
            <h2 className="ratingBoxTitle">How did we do?</h2>
            <p className="ratingBoxDesc">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className={`ratingBoxPoints ${pointAnimate}`}>
              {pointArray.map((point) => (
                <p
                  className={
                    selectedPoint === point
                      ? "ratingBoxPoint selectedPoint"
                      : "ratingBoxPoint"
                  }
                  key={"point" + point}
                  onClick={() => setSelectedPoint(point)}
                >
                  {point}
                </p>
              ))}
            </div>
            <button className="ratingBoxButton" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
