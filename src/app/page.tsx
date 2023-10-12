import { Button } from "@/components/common/Button";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto p-4 flex flex-col justify-center items-center space-y-6 text-center">
      <h1 className="text-2xl font-bold ">
        Welcome to our Beer Collection! 🍺
      </h1>
      <p className="text-lg">
        Dive into our extensive collection of beers. You can explore our{" "}
        <span className="font-semibold">Online Beers</span> or check out the
        custom creations in <span className="font-semibold">Custom Beers</span>.
      </p>
      <div className="flex space-x-4">
        <Link href="/collection">
          <Button className="mb-2 mr-2 w-full md:w-auto md:mb-0">
            Online Beers
          </Button>
        </Link>
        <Link href="/custom-collection">
          <Button ver="primary" className="w-full md:w-auto">
            Custom Beers
          </Button>
        </Link>
      </div>
    </main>
  );
}
