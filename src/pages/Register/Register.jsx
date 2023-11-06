import { Button, Label, TextInput } from "flowbite-react";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-10">Please Register</h2>
      <form
        onSubmit={handleRegister}
        className="flex max-w-md flex-col gap-4 mx-auto mt-20"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photoURL" value="Enter Photo URL" />
          </div>
          <TextInput
            id="photoURL"
            type="text"
            placeholder="Photo URL"
            name="photoURL"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="******"
            name="password"
            required
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;