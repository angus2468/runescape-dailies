import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex bg-blue-500 p-2 gap-2">
        <Link
          href={"/"}
          className="border-2 border-black p-2 rounded-md bg-red-400 hover:bg-amber-200 text-slate-800"
        >
          Home
        </Link>
        <Link
          href={"/shopRun"}
          className="border-2 border-black p-2 rounded-md bg-red-400 hover:bg-amber-200 text-slate-800"
        >
          Shop Runs
        </Link>
        <Link
          href={"/farmRun"}
          className="border-2 border-black p-2 rounded-md bg-red-400 hover:bg-amber-200 text-slate-800"
        >
          Farm Runs
        </Link>
      </nav>
    </>
  );
}
