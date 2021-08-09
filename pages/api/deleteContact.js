import { deleteContact } from "../../utils/Fauna";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ msg: "Method not allowed" });
  }

  const { id } = req.body;

  try {
    const deleted = await deleteContact(id);
    return res.status(200).json(deleted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "something went wrong" });
  }
}
