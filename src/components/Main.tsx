import React from "react";
import Development from "./Development";
import Hosting from "./Hosting";
import Learning from "./Learning";
function Main(){
  return(
    <main>
      <Development/>
      <Hosting/>
      <Learning/>
      {/* <h2>Hello Everyone, Welcome to Fugohost!</h2> */}
    </main>
  )
}

export default Main;