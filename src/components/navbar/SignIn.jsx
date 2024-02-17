// Hooks
import usePopup from "../../hooks/usePopup";

const SignIn = () => {
  const { openPopup } = usePopup();

  return (
    <div className="w-full h-full relative p-12 flex flex-col gap-8 items-center">
      <h2 className="text-xl">Sign up</h2>
      <form action="" className="flex flex-col gap-4 w-full lg:w-1/2 text-black">
        <input type="text" placeholder="First name" className="p-2 outline-highlight" required />
        <input type="text" placeholder="Last name" className="p-2 outline-highlight" required />
        <input type="email" placeholder="Mail" className="p-2 outline-highlight" required />
        <input
          type="password"
          placeholder="Password"
          className="p-2 outline-highlight"
          required
          minLength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number, one uppercase and one lowercase letter, and be at least 8 characters long."
        />
        <button type="submit" className="btn w-full sm:w-1/2 mx-auto">
          Sign up
        </button>
      </form>
      <p className="text-center">
        Already have an account? Click here to
        <span className="text-highlight cursor-pointer" onClick={() => openPopup("login")}>
          {" "}
          log in
        </span>
      </p>
    </div>
  );
};

export default SignIn;
