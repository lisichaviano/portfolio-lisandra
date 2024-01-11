import Link from "../Link";

export const Header = () => {
  return (
    <div className="w-full h-[92px] flex items-center justify-between">
      <div className="h-[92px] flex items-center pl-12 gap-3 w-1/4">
        <div className="bg-firebrick w-4 h-4 overflow-hidden mix-blend-normal " />
        <p className="text-6xl font-syne">Lisandra's Portfolio</p>
      </div>

      <div className="flex items-center gap-3 pr-12">
        <Link href={"/"}>ABOUT ME</Link>
        <Link href={"/"}>RESUME</Link>
        <Link href={"/"}>PORTFOLIO</Link>
        <Link href={"/"}>CONTACT</Link>
      </div>
    </div>
  );
};
