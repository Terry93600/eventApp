"use client"
import { Button } from "@heroui/react";
import "./home.css" 
import Homes from "./images/Home.png"
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

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
    <Button color="primary">Button</Button>
    </div>

    
  );
}
