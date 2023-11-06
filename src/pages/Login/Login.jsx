import { Button, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { myName } = useAuth();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-10">
        Please Login {myName}
      </h2>
      <form
        onSubmit={handleLogin}
        className="flex max-w-md flex-col gap-4 mx-auto mt-20"
      >
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
      <div className="max-w-md mx-auto mt-3">
        <Button className="w-full" type="submit">
          Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
