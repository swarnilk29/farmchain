"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(" top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Feature One</HoveredLink>
            <HoveredLink href="/courses">Feature Two</HoveredLink>
            <HoveredLink href="/courses">Feature Three</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
        <Link href={"/signup"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Sign Up"
          ></MenuItem>
        </Link>
        <Link href={"/login"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Login"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
