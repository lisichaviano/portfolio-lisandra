function HamburgerMenuIcon({ scale = 1 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24 * scale}
      height={24 * scale}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M3.5 17.635v-1.5h17v1.5h-17zm0-4.885v-1.5h17v1.5h-17zm0-4.885v-1.5h17v1.5h-17z"
      ></path>
    </svg>
  );
}

export default HamburgerMenuIcon;
