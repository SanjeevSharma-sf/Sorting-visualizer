import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { MergeSortAnimations } from "./sortingAlgos/MergeSortAnimations.js";
import { BubbleSortAnimations } from "./sortingAlgos/BubbleSortAnimations.js";
import { SelectionSortAnimations } from "./sortingAlgos/SelectionSortAnimations.js";
import { InsertionSortAnimations } from "./sortingAlgos/InsertionSortAnimations.js";
import { QuickSortAnimations } from "./sortingAlgos/QuickSortAnimations.js";
// import Slider from "@material-ui/core/Slider";
import "./SortingVisualizer.css";

// Change this value for the speed of the animations.
// const ANIMATION_SPEED_MS = { handlecChange };

// Change this value for the number of bars (value) in the array.
//const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#35013f";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "#f7ff56";
const SUBSIDARY_COLOR = "#35013f";

function SortingVisualizer() {
  const [size, setSize] = useState(5);
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(3);

  console.log(speed);
  const ANIMATION_SPEED_MS = speed;
  const width = window.screen.width / array.length;
  useEffect(() => {
    updateList();
  }, [size]);

  const updateList = () => {
    const arrayss = [];
    for (let i = 0; i < size; i++) {
      // from here we can get the no
      var number = randomIntFromInterval(5, 500);
      arrayss.push(number);
      //from here we can get the index at which the number is stored
    }
    setArray(arrayss);
  };

  const rangeChange = (e) => {
    const valuee = e.target.value;
    console.log(valuee);
    setSize(valuee);
  };
  const handleClick = (e) => {
    const sprtNamee = e.target.value;
    console.log(sprtNamee);
    if (sprtNamee === "Bubble") {
      Bubble();
    } else if (sprtNamee === "Selection") {
      Selection();
    } else if (sprtNamee === "Insertion") {
      Insertion();
    } else if (sprtNamee === "Merge") {
      Merge();
    } else if (sprtNamee === "Quick") {
      Quick();
    }
  };
  const handleChange = (e) => {
    const valuee = e.target.value;
    console.log(valuee);
    setSpeed(valuee);
  };

  const Merge = () => {
    const animations = MergeSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayContainer__bars");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const Bubble = () => {
    const animations = BubbleSortAnimations(array);
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayContainer__bars");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        console.log(barOneStyle);
        console.log(barTwoStyle);
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        if (animations[i].length === 4) {
          console.log(animations[i].length);
          const [barOneIdx, barTwoIdx, newHeighttwo, newHeightone] = animations[
            i
          ];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // barOneStyle.backgroundColor = `#f9ccac`;
          // barTwoStyle.backgroundColor = `#f9ccac`;
          setTimeout(() => {
            barOneStyle.height = `${newHeighttwo}px`;
            barTwoStyle.height = `${newHeightone}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SUBSIDARY_COLOR;
            barTwoStyle.backgroundColor = SUBSIDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  };

  const Selection = () => {
    const animations = SelectionSortAnimations(array);
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayContainer__bars");
      if (animations[i].length === 2) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [barOneIdx, barTwoIdx, newHeighttwo, newHeightone] = animations[
          i
        ];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = SUBSIDARY_COLOR;
          barTwoStyle.backgroundColor = SUBSIDARY_COLOR;
          barOneStyle.height = `${newHeighttwo}px`;
          barTwoStyle.height = `${newHeightone}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const Insertion = () => {
    const animations = InsertionSortAnimations(array);
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayContainer__bars");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        console.log(barOneStyle);
        console.log(barTwoStyle);
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        if (animations[i].length === 4) {
          console.log(animations[i].length);
          const [barOneIdx, barTwoIdx, newHeighttwo, newHeightone] = animations[
            i
          ];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // barOneStyle.backgroundColor = `#f9ccac`;
          // barTwoStyle.backgroundColor = `#f9ccac`;
          setTimeout(() => {
            barOneStyle.height = `${newHeighttwo}px`;
            barTwoStyle.height = `${newHeightone}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SUBSIDARY_COLOR;
            barTwoStyle.backgroundColor = SUBSIDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  };
  const Quick = () => {
    const animations = QuickSortAnimations(array);
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("arrayContainer__bars");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];

        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        console.log(barOneStyle);
        console.log(barTwoStyle);
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        if (animations[i].length === 4) {
          console.log(animations[i].length);
          const [barOneIdx, barTwoIdx, newHeighttwo, newHeightone] = animations[
            i
          ];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // barOneStyle.backgroundColor = `#f9ccac`;
          // barTwoStyle.backgroundColor = `#f9ccac`;
          setTimeout(() => {
            barOneStyle.height = `${newHeighttwo}px`;
            barTwoStyle.height = `${newHeightone}px`;
          }, i * ANIMATION_SPEED_MS);
        } else {
          const [barOneIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          setTimeout(() => {
            barOneStyle.backgroundColor = SUBSIDARY_COLOR;
          }, i * ANIMATION_SPEED_MS);
        }
      }
    }
  };

  return (
    <div className="main">
      {/* the app section */}
      <div className="app">
        {/* the header section */}
        <div className="header">
          <h1>SORTING VISUALIZER</h1>
          <div className="header__button">
            <button
              type="button"
              value={"Bubble"}
              onDoubleClick={(e) => handleClick(e)}
            >
              Bubble Sort
            </button>
            <button
              type="button"
              value={"Selection"}
              onDoubleClick={(e) => handleClick(e)}
            >
              Selection Sort
            </button>
            <button
              type="button"
              value={"Insertion"}
              onDoubleClick={(e) => handleClick(e)}
            >
              Insertion Sort
            </button>
            <button
              type="button"
              value={"Merge"}
              onDoubleClick={(e) => handleClick(e)}
            >
              Merge Sort
            </button>
            <button
              type="button"
              value={"Quick"}
              onDoubleClick={(e) => handleClick(e)}
            >
              Quick Sort
            </button>
          </div>
        </div>

        <div className="app__res">
          <div className="app__left">
            {/* the Array Container */}
            <div className="arrayContainer">
              {array.map((value, idx) => (
                <div
                  className="arrayContainer__bars"
                  key={idx}
                  style={{
                    backgroundColor: "black",
                    height: `${value}px`,
                    width: `${width}px`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="app__right">
            {/* Modifer */}

            <div className="modifier">
              <Card className="modifier__Card">
                <CardContent className="modifier__inputs">
                  <div className="modifier__range">
                    {/* <button onClick={rangeChange} id="modifier__ranges">
                      Type Size of array
                    </button> */}

                    <Typography>Size of the array:</Typography>

                    <input
                      onChange={(e) => rangeChange(e)}
                      type="range"
                      min="5"
                      max="200"
                      className="a_size"
                      step="1"
                      id="modifier__ranges"
                      defaultValue="3"
                    />
                  </div>
                  <div className="modifier__range">
                    <Typography>Speed of the algorithm:</Typography>

                    <input
                      // id="a_speed"
                      type="range"
                      min="1"
                      max="200"
                      step="1"
                      defaultValue="3"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="modifier__Card">
                <CardContent className="modifier__NewArray">
                  <button
                    onClick={updateList}
                    className="modifier__button"
                    id="a_generate"
                  >
                    Generate New Array!
                  </button>
                </CardContent>
              </Card>
              <Card classNAme="instructions">
                <h3>
                  <Typography>Instructions:</Typography>
                </h3>
                <ul>
                  <li>
                    <Typography>
                      Keep the speed of algorithm slider bar low when no of bars
                      is increased
                    </Typography>
                  </li>

                  <li>
                    <Typography>
                      Always double click on the sort Buttons to see the effect
                    </Typography>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SortingVisualizer;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
