import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    strokeWidth={1.5}
    color="#000"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path stroke="#000" d="m15.5 6.5-7 4m0 3 7 4" />
  </svg>
);
export default SvgShare;
