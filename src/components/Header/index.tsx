import Link from "../Link";

export const Header = () => {
  return (
    <header className="w-full h-[92px] z-20">
      <div className="flex items-center justify-between">
        <div className="h-[92px] flex items-center pl-12 w-1/4">
          <Link
            additionalClassNAme="text-2xl font-syne hover:text-black active:text-black"
            href={"/"}
          >
            <div className="flex items-center gap-3">
              <div className="bg-firebrick w-4 h-4 overflow-hidden" />
              Lisandra's Portfolio
            </div>
          </Link>
        </div>

        <div className="flex items-end gap-3 pr-12">
          <Link href={"/"}>ABOUT ME</Link>
          <Link href={"/resume"}>RESUME</Link>
          <Link href={"/"}>PORTFOLIO</Link>
          <Link href={"/"}>CONTACT</Link>
        </div>
      </div>
    </header>
  );
};
