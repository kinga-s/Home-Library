import React, { Fragment } from "react";
import "./App.css";

//components

import ListBook from "./components/ListBook";
import AddBook from "./components/AddBook";



function App() {
  return (
      <Fragment>
        <div className="container">
            <AddBook />
            <ListBook />
        </div>
      </Fragment>
  );
}

export default App;
