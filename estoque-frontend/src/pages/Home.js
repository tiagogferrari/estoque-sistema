import React from "react";
const imgHome = require('../assets/images/Home.png');

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-gray-100">
      <h1 className="text-center text-2xl font-semibold mb-4 max-w-lg">
        Opa! Quer gerenciar o estoque de sua empresa?
        Por favor, realize o seu login.
      </h1>
      <img
        src={imgHome}
        alt="Home"
        className="w-1/4 h-auto"
      />
    </div>
  );
};

export default Home;
