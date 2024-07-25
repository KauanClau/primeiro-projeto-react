import React from "react";

import './styles/App.css'

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

import article1Img from "./assets/images/article1.png"
import article2Img from "./assets/images/article2.png"
import article3Img from "./assets/images/article3.png"

import { Footer } from "./components/Footer/Footer";

// Componente em classe é uma classe que herda a classe Component do React, e retorna HTML dentro do método render.

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        {/* <Counter /> */}

        <section id="articles">
          <Article 
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />

          <Article 
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum vel reiciendis nisi. Asperiores, quae, sit harum tempore qui, pariatur magnam quaerat molestiae maxime eos dignissimos quas sunt ipsum. Mollitia, vel."
            thumbnail={article2Img}
          />

          <Article 
            title="36 Days of Malayalam type"
            provider="Spaceflight Now"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article3Img}
          />

          <Article 
            title="Designing Dashboards"
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1Img}
          />

        </section>
        
        <Footer />
      </>
    )
  }
}

export default App;
