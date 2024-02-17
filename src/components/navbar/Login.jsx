// Hooks
import usePopup from "../../hooks/usePopup";

const Login = () => {
  const { openPopup } = usePopup();

  return (
    <div className="w-full h-full relative p-12 flex flex-col gap-8 items-center">
      <h2 className="text-xl mb-8">Login</h2>
      <form action="" className="flex flex-col gap-4 w-full lg:w-1/2 text-black">
        <input type="email" placeholder="Mail" className="p-2 outline-highlight" required />
        <input type="password" placeholder="Password" className="p-2 outline-highlight" required />
        <button type="submit" className="btn w-full sm:w-1/2 mx-auto">
          Sign in
        </button>
      </form>
      <p className="text-center">
        No account yet? Click here to
        <span className="text-highlight cursor-pointer" onClick={() => openPopup("signIn")}>
          {" "}
          register
        </span>
      </p>
    </div>
  );
};

export default Login;
