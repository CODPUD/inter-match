import React from "react";
import Link from "next/link";

import Container from "../Container";

import { Button } from "../ui/button";

type Props = {};

function Hero({}: Props) {
  return (
    <Container className="mt-20">
      <div className="flex gap-10 flex-col justify-between items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          Welcome to Inter Match
        </h1>
        <p className="text-base sm:text-lg md:text-xl  max-w-screen-lg text-center">
          Discover the best remote job opportunities from top companies around
          the world. Start your work-from-anywhere journey today.
        </p>
        <Button className="mt-4">
          <Link href="#jobs">Discover Opportunities</Link>
        </Button>
      </div>
    </Container>
  );
}

export default Hero;
