import React, { useState } from "react";
import Cartelera from "./Components/Cartelera";
import Search from "./Components/Search";
import SwitchBar from "./Components/SwitchBar";
import Footer from "./Components/Footer";

function App() {
  const [sectionUrl, setSectionUrl] = useState("movie?sort_by=popularity.desc");
  const [searchMovie, setSearchMovie] = useState("");

  //funcion que ejecuta el setSectionUrl del useState y que actualiza la URL que se recibe desde SwitchBar
  const fillSectionUrl = (url2) => {
    setSectionUrl(url2);
  };

  const fillSearch = (part2) => {
    setSearchMovie(part2);
  };

  return (
    <>
      <Search fill={(part1) => fillSearch(part1)} />
      <SwitchBar test={(url1) => fillSectionUrl(url1)} />
      <Cartelera middleUrl={sectionUrl} fillSearch={searchMovie} />
      <Footer />
    </>
  );
}

export default App;
