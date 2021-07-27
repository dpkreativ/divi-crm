import Head from "next/head";
import { getContactById } from "../../utils/Fauna";
import ProfileDetails from "../../components/ProfileDetails";

export default function Home({ contact }) {
  return (
    <div>
      <Head>
        <title>profile</title>
      </Head>
      <main>
        <ProfileDetails contact={contact} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.id;
    const contact = await getContactById(id);

    return {
      props: { contact },
    };
  } catch (error) {
    console.log(error);
    context.res.statusCode = 302;
    context.res.setHeader("Location", "/");
    return { props: {} };
  }
}
