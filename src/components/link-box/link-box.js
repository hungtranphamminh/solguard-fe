import Link from "next/link";

export default function LinkBox({ link, title, description }) {
  return (
    <Link
      className="border-2 hover:scale-105 transition-all duration-300 rounded-lg p-4 w-[400px] h-[150px] shadow-md flex flex-col gap-3"
      href={link}
    >
      <h1 className="text-lg text-teal-400 font-semibold">{title}</h1>
      <p className="text-slate-400">{description}</p>
    </Link>
  );
}
