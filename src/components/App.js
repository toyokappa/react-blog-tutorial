import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Wrapper from "./Wrapper";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Wrapper />
      </>
    </BrowserRouter>
  );
};

export default App;
