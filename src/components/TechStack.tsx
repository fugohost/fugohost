import React from "react";
import JS from "../images/js.svg";
import ReactJS from "../images/reactjs.svg";
import NodeJS from "../images/nodejs.svg";
import TypeScript from "../images/typescript.svg";
import MySQL from "../images/mysql.svg";
import MongoDB from "../images/mongodb.svg";
const tiles = [
  {
    url: JS,
    title: "Javascript",
    description: "d1",
  },
  {
    url: ReactJS,
    title: "React",
    description: "d1",
  },
  {
    url: NodeJS,
    title: "NodeJS",
    description: "d1",
  },
  {
    url: TypeScript,
    title: "Typescript",
    description: "d1",
  },
  {
    url: MySQL,
    title: "MySQL",
    description: "d1",
  },
  {
    url: MongoDB,
    title: "MongoDB",
    description: "d1",
  },
];
function TechStack() {
  return (
    <div className="hostingContainer" id="Hosting">
      <h1>
        Your Website Development With Us <br /> Mean <br /> Best Tech Stack
      </h1>
      <div className="tileContainer">
        {tiles.map((tile) => {
          return (
            <div className="tile">
              <img src={tile.url} alt="reactjs" />
              <h4>{tile.title}</h4>
              {/* <p>{tile.description}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
