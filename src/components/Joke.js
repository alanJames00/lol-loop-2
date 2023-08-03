
import React from "react";
import Footer from './Footer';

import Button from "./Button";

const Joke = () => {
  const [Joke, setJoke] = React.useState("");

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div className="joke">
      <Button callApi={fetchApi} />
      <p>{Joke}</p>
      <Footer />
    </div>
  );
};

export default Joke;
