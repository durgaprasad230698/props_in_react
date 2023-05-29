import React from "react";

const data = [
  {
  tittle: "Lost in Space", 
  imgURL: "https://occ-0-4829-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQLmld5q2rjlY100airKKSk1EQhB4dCKjp5rAco1LfwrOwncva0yHOnCes-048j0VjXIhcRfibLX55ThfxlvmDxT5FJ3X_vvb3py6x8AClZUsvhw7tuPPm0vW5OseSn_n_fd.jpg?r=152",
  description: "After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they're surrounded by hidden dangers.",
 },
 {
  tittle: "Extraction",
  imgURL: "https://occ-0-4829-3662.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcUjzHFgb4aq-ldAOLiJgBTZWSNhomBYYC-tmwn7yrEOO_h42ba43f6K5fYm0Q6cINHObchs3dFQe0tL_DqUsTPUA6KXFCXsm61SRoeEmizLqGlZOFU9GREGBKIf-qq8eh6A.jpg?r=362",
  description: "A hardened gun-for-hire's latest mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
 },
];

const App = () => {
  return (
    <section className="movie">
  <Movie 
  tittle={data[0].tittle} 
  imgURL={data[0].imgURL} 
  description={data[0].description}
  />
  <Movie 
  tittle={data[1].tittle} 
  imgURL={data[1].imgURL} 
  description={data[1].description} 
  />
  </section>
  );
};

const Movie = (props) => {
  console.log(props);
  return (
    <article className="movie2">
      <h2>{props.firstName}</h2>
      <img src={props.imgURL} alt="netflix show" />
      <h1>{props.tittle}</h1>
      <p>
      {props.description}
      </p>
    </article>
  );
};


export default App;