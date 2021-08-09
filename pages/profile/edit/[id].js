import { getContactById } from "../../../utils/Fauna";
import ContactForm from "../../../components/ContactForm";

export default function Home({ contact }) {
  return (
    <div className="px-4 md:px-8 py-8">
      <ContactForm contact={contact} />
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
