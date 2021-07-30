import { Label, Input, TextArea } from "./FormComponents";

const ContactForm = () => {
  return (
    <form>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div>
          <Label htmlFor="firstname">First name</Label>
          <Input
            placeholder="Enter first name"
            type="text"
            name="firstname"
            id="firstname"
          />
        </div>
        <div>
          <Label htmlFor="lastname">Last name</Label>
          <Input
            placeholder="Enter last name"
            type="text"
            name="lastname"
            id="lastname"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input
            placeholder="Enter phone number"
            type="tel"
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            placeholder="Enter email address"
            type="email"
            name="mail"
            id="mail"
          />
        </div>
      </div>
      <div className="grid gap-4 mb-10">
        <div>
          <Label htmlFor="bio">Short Bio</Label>
          <TextArea
            placeholder="Write some key points to note about this particular contact"
            name="bio"
            id="bio"
          />
        </div>
      </div>
      <div className="grid gap-4 mb-10">
        <button
          className="bg-green-500 hover:bg-green-700 text-white rounded-full p-4"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
