import { addNewContact } from "../../utils/Fauna";

const handler = async (req, res) => {
  // write handler code
  const { firstname, lastname, phone, mail, bio } = req.body;
  if (req.method !== "POST") {
    return res.status(405).json({ msg: "method not allowed" });
  }

  try {
    const newContact = await addNewContact(
      firstname,
      lastname,
      phone,
      mail,
      bio
    );
    return res.status(200).json(newContact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong. Please try again" });
  }
};

export default handler;
