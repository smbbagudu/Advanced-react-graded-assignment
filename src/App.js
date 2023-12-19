import React from "react";

// import { Component } from "react";
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];
git remote add origin https://github.com/smbbagudu/Advanced-react-graded-assignment.git
git branch -M Minna
git push -u origin Minna
export default function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
}


