import React from "react";
import { FaLaptopCode } from "react-icons/fa";

import Container from "../Container";

import NavItem from "./NavItem";

import { Button } from "../ui/button";

type Props = {};

const LINKS = [
  { label: "Remote Jobs", href: "/remote-jobs" },
  { label: "Intern Jobs", href: "/intern-jobs" },
  { label: "Top Companies", href: "/top-jobs" },
];

function Navbar({}: Props) {
  return (
    <Container>
      <div className="h-[50px] flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <FaLaptopCode size="35" className="text-primary" />
          <span className="font-bold text-xl">InterMatch</span>
        </div>

        {/* Links */}
        <div className="flex">
          {LINKS.map(({ label, href }) => (
            <NavItem href={href}>{label}</NavItem>
          ))}
        </div>

        {/* CTA */}
        <Button>Post Job</Button>
      </div>
    </Container>
  );
}

export default Navbar;
