import { updateContact } from "../../utils/Fauna";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ msg: "Method not allowed" });
  }

  const { id, firstname, lastname, phone, mail, bio, entries } = req.body;

  try {
    const updated = await updateContact(
      id,
      firstname,
      lastname,
      phone,
      mail,
      bio,
      entries
    );
    return res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
}
