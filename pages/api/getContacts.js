import { getContacts } from "../../utils/Fauna";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405);
  }

  try {
    const contacts = await getContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong, please try again." });
  }
};

export default handler;
