const faunadb = require("faunadb");
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const addNewContact = async (
  firstname,
  lastname,
  phone,
  mail,
  bio,
  entries
) => {
  return await faunaClient.query(
    q.Create(q.Collection("divi_crm"), {
      data: { firstname, lastname, phone, mail, bio, entries },
    })
  );
};

const getContacts = async () => {
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("divi_crm"))),
      q.Lambda("ref", q.Get(q.Var("ref")))
    )
  );

  const contacts = data.map((contact) => {
    contact.id = contact.ref.id;
    delete contact.ref;
    return contact;
  });

  return contacts;
};

const getContactById = async (id) => {
  const contact = await faunaClient.query(
    q.Get(q.Ref(q.Collection("divi_crm"), id))
  );
  contact.id = contact.ref.id;
  delete contact.ref;
  return contact;
};

const updateContact = async (
  id,
  firstname,
  lastname,
  phone,
  mail,
  bio,
  entries
) => {
  return await faunaClient.query(
    q.Update(q.Ref(q.Collection("divi_crm"), id), {
      data: { firstname, lastname, phone, mail, bio, entries },
    })
  );
};

const deleteContact = async (id) => {
  return await faunaClient.query(q.Delete(q.Ref(q.Collection("divi_crm"), id)));
};

module.exports = {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
};
