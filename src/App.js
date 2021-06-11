import React, { useState } from "react";
import Portada from "./Components/Portada";
import Search from "./Components/Search";
import SwitchBar from "./Components/SwitchBar";

function App() {
  const [sectionUrl, setSectionUrl] = useState("movie?sort_by=popularity.desc");

  //funcion que ejecuta el setSectionUrl del useState y que actualiza la URL que se recibe desde SwitchBar
  const fillSectionUrl = (url2) => {
    setSectionUrl(url2);
  };

  return (
    <>
      <Search />
      <SwitchBar test={(url1) => fillSectionUrl(url1)} />
      <Portada middleUrl={sectionUrl} />
    </>
  );
}

export default App;
