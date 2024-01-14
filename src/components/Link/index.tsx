import React from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  additionalClassNAme?: string;
  active?: boolean;
}

const LinkElement = ({
  href,
  children,
  additionalClassNAme,
  active = true,
  ...props
}: LinkProps) => {
  return (
    <div className="focus:bg-transparent active:!bg-transparent">
      {active ? (
        <Link
          href={href}
          {...props}
          className={`no-underline text-black hover:text-firebrick active:text-firebrick ${additionalClassNAme}`}
        >
          {children}
        </Link>
      ) : (
        <a
          className={`text-neutral-400 cursor-not-allowed pointer-events-none ${additionalClassNAme}`}
        >
          {children}
        </a>
      )}
    </div>
  );
};

export default LinkElement;
