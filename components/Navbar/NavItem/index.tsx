import React from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

function NavItem({ href, children }: Props) {
  return (
    <Button
      variant="link"
      className="text-black hover:text-primary hidden md:block"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export default NavItem;
