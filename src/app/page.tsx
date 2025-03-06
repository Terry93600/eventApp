"use client"
import { Button, Card, CardFooter, CardHeader } from "@heroui/react";
import "./home.css" 
import { HeartIcon } from "./composant/icons/heart";
import { MusicIcon } from "./composant/icons/music";
import Carousel from "./composant/carrousel/carouselHome";
import Carousel1 from "./composant/carrousel/carouselHome1";
import Image from "next/image";  // Importer next/image
import Bouton from "./composant/carrousel/carrouselbouton";
import Footer from "./composant/footer";

export default function Home() {
  return (
    <div>
        <header className="headerHome">
          <figure>
            <Image
              src="/images/OBJECTS.png"
              alt="terr"
              fill
              className=" rounded-lg"
            />
          </figure>
          <div className="welcome">
            <div>
              <p>Welcome back 👋</p>
              <h1>Ridwan Soleh</h1>
            </div>
            <a href="" className="notif">notif</a>
          </div>
        </header>
    <main>
      <section>
        <h2>Category</h2>
        <Bouton/>
      </section>
      <section>
        <h2>Popular Event</h2>
        <Carousel/>
      </section>
      <section>
        <h2>Event for you</h2>
        <Carousel1/>
      </section>
    </main>

    <footer>
      <Footer/>
    </footer>
    </div>

    
  );
}
