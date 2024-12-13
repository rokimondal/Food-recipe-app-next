import Link from "next/link";


export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-fit flex flex-col items-center gap-2">

        <h1 className="text-3xl font-semibold">Welcome to Recipe App</h1>
        <Link href={"/recipe-list"} className="hover:text-gray-600">Explore Recipes</Link>
      </div>
    </div>
  );
}
