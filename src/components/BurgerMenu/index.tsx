"use client";

import React, { useCallback, useState } from "react";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";
import CloseIcon from "../icons/CloseIcon";

import Drawer from "./Drawer";

export type LogoData = {
  title?: string;
  logoUrl?: string;
};

interface BurgerMenuProps {
  logoData?: LogoData;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ logoData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const hideNavMenu = useCallback(() => setShowMenu(false), []);
  const toggleNavMenu = useCallback(() => setShowMenu((prev) => !prev), []);

  return (
    <div className="flex md:hidden w-auto drawer z-[999]">
      <input
        id="my-drawer"
        type="checkbox"
        checked={showMenu}
        className="drawer-toggle"
      />
      <div className="drawer-content flex items-center">
        <button
          className="relative btn btn-ghost mr-12 btn-sm border-none drawer-button"
          onClick={toggleNavMenu}
        >
          <span
            className={`absolute transition-opacity ${
              showMenu ? "opacity-0" : ""
            }`}
          >
            <HamburgerMenuIcon />
          </span>
          <span
            className={`absolute transition-opacity ${
              !showMenu ? "opacity-0" : ""
            }`}
          >
            <CloseIcon />
          </span>
        </button>
      </div>
      <Drawer hideNavMenuMobile={hideNavMenu} />
    </div>
  );
};

export default BurgerMenu;
