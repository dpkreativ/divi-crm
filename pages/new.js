import Head from "next/head";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="px-4 md:px-8 py-8 min-h-full">
      <Head>
        <title>New Contact</title>
      </Head>
      <nav>
        <Link href="/" className="cursor-pointer w-max">
          <button className="mt-4 mb-8 flex items-center hover:text-green-500">
            <MdHome /> <div className="mx-2">Go to Home</div>
          </button>
        </Link>
      </nav>
      <main className="flex flex-col justify-center">
        <h1 className="font-bold my-8">Add New Contact</h1>
        <ContactForm />
      </main>
    </div>
  );
}
