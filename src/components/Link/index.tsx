import React from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  additionalClassNAme?: string;
}

const LinkElement = ({
  href,
  children,
  additionalClassNAme,
  ...props
}: LinkProps) => {
  return (
    <div className={`text-sm   ${additionalClassNAme}`}>
      <Link
        href={href}
        {...props}
        className="no-underline text-black hover:text-firebrick active:text-firebrick"
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkElement;
