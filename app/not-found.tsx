import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center sm:mt-32 md:mt-40 gap-4 text-center">
      <h1 className="text-5xl sm:text-8xl text-primary">404</h1>
      <h1 className="text-3xl sm:text-5xl">PAGE NOT FOUND</h1>
      <Link
        className="bg-primary w-max py-3 px-12 text-white font-medium rounded-xl uppercase tracking-[2px] mx-auto"
        href="/"
      >
        Go back
      </Link>
    </div>
  );
}
