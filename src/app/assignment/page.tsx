"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  function convertNumberToRoman() {
    var result: number = 0;
    var current: number = 0;
    var previous: number = 0;
    type roman = {
      romanNumber: string;
      num: number;
    };
    const arr: roman[] = [
      { romanNumber: "I", num: 1 },
      { romanNumber: "V", num: 5 },
      { romanNumber: "X", num: 10 },
      { romanNumber: "L", num: 50 },
      { romanNumber: "C", num: 100 },
      { romanNumber: "D", num: 500 },
      { romanNumber: "M", num: 1000 },
    ];
    var romanArray: string[] = value.split("");
    console.log(romanArray);
    for (var i: number = 0; i < romanArray.length; i++) {
      for (var j: number = 0; j < arr.length; j++) {
        if (romanArray[i].toUpperCase() === arr[j].romanNumber) {
          current = arr[j].num;
          if(previous < current){
            previous = -previous;
            previous = previous + current;
            current = 0;
          } else {
            result += previous;
            previous = current;
            current = 0;
          }
        }
      }
    }
    result += previous;
    console.log(result, "result");
  }

  return (
    <div>
      Numberical To Roman Number
      <input
        id="userInput"
        type="text"
        className="text-black"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      ></input>
      <button className="bg-white text-black" onClick={convertNumberToRoman}>
        Calculate
      </button>
    </div>
  );
}
