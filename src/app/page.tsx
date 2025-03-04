"use client"
import { Button, Card, CardFooter, Image, CardHeader } from "@heroui/react";
import "./home.css" 
import { HeartIcon } from "./composant/icons/heart";
import { MusicIcon } from "./composant/icons/music";
import Carousel from "./composant/carrousel/carouselHome";
import Carousel1 from "./composant/carrousel/carouselHome1";


export default function Home() {
  return (
    <div>
         <header>
          <div className="welcome">
            <div>
              <p>Welcome back 👋</p>
              <h1>Ridwan Soleh</h1>
            </div>
          </div>
    </header>
    <main>
      <h2>Category</h2>
      <div className="flex flex-wrap gap-10 items-center">
        <Button size="lg">Music</Button>
        <Button size="lg">Sport</Button>
        <Button size="lg">Food</Button>

      </div>
      <section>
        <h2>Popular Event</h2>
        <Carousel/>
      </section>
      <section>
        <h2>Event for you</h2>
        <Carousel1/>
      </section>
    </main>
    </div>

    
  );
}
