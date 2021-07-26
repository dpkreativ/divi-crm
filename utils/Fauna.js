const faunadb = require("faunadb");
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const addNewContact = async (firstname, lastname, phone, mail, bio) => {
  // TODO: write function to add a new contact
};

const getContacts = async () => {
  // TODO: write function to get all contacts from database
};

const getContactById = async (id) => {
  // TODO: write function to get contact by id
};

const updateContact = async (id, firstname, lastname, phone, mail, bio) => {
  // TODO: write function to edit contact selected by id
};

const deleteContact = async (id) => {
  // TODO: write function to delete contact selected by id
};

module.exports = {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
};
