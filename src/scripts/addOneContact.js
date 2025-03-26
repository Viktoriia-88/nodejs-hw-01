import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const addOneContact = async () => {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    writeContacts([...contacts, newContact]);
};

addOneContact();