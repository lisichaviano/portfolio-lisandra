"use client";

import React, { useEffect } from "react";
import { headerLinks } from "../Header";
import { usePathname } from "next/navigation";
import Link from "../Link";

interface DrawerProps {
  additionalClassName?: string;
  hideNavMenuMobile?: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  additionalClassName,
  hideNavMenuMobile,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    hideNavMenuMobile?.();
  }, [pathname]);

  return (
    <div className="drawer-side top-navbar !h-content z-50">
      <div className="drawer-overlay" onClick={hideNavMenuMobile}></div>

      <ul
        className={`menu min-h-full text-base-content w-full bg-linen m-0 ${additionalClassName}`}
      >
        {/* <div className="border-b border-neutral-300" /> */}
        <li className=" flex flex-col items-center mt-8">
          {headerLinks.map(({ href, name }) => (
            <Link
              additionalClassNAme="text-lg focus:!bg-transparent"
              href={href}
            >
              {name}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
