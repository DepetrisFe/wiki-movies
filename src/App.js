import React, { useState } from "react";
import Portada from "./Components/Portada";
import Search from "./Components/Search";
import SwitchBar from "./Components/SwitchBar";

function App() {
  const [sectionUrl, setSectionUrl] = useState("movie?sort_by=popularity.desc");

  const marito = (param) => {
    setSectionUrl(param);
  };

  return (
    <>
      <Search />
      <SwitchBar test={(pito) => marito(pito)} />
      <Portada middleUrl={sectionUrl} />
    </>
  );
}

export default App;
