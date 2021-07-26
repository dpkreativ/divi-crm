import Head from "next/head";
import Card from "../components/Card";
import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const { data: contacts } = useSWR("./api/getContacts");
  console.log(contacts);
  return (
    <div className="container">
      <Head>
        <title>Divi-CRM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="mb-8 flex justify-between">
        <div className="logo font-bold">Divi-CRM</div>
        <Link href="/">
          <button className="bg-green-700 text-white rounded-md shadow-md text-sm px-4 py-1 cursor-pointer">
            Add New
          </button>
        </Link>
      </nav>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {contacts &&
          contacts.map((contact) => (
            <Card key={contact.id} contact={contact} />
          ))}
      </main>
    </div>
  );
}
