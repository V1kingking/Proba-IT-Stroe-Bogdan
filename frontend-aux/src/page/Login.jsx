import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      navigate("/register");
    } catch (error) {}
  };
  return (
    <div
      className="min-h-dvh flex items-center 
    bg-no-repeat bg-cover bg-center bg-[url('img/image2.jpg')] 
    text-amber-700 overflow-hidden"
    >
      <form
        onSubmit={loginUser}
        className="  relative mx-auto 
        flex-col justify-beetween items-center w-2/5 h-full  z-20 "
      >
        <span class="ml-40 mr-28 text-4xl ">Have an account?</span>
        <Link to="/register" class=" font-medium text-4xl ">
          Sign up
        </Link>
        <header class="text-6xl text-center py-8">Login</header>
        <header class="text-4xl text-center py-4">Email</header>
        <input
          type="email"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          class="text-xl bg-amber-600/20 w-full h-12 pr-2 pl-12 
                    border-none rounded-[30px] outline-none transition-[.2s]
                  placeholder:text-slate-600 hover:bg-gray-400/25 normal-case"
        />
        <header class="text-4xl text-center py-4">Password</header>
        <input
          type="password"
          placeholder="enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          class="text-xl bg-amber-600/20 w-full h-12 pr-2 pl-12 
                    border-none rounded-[30px] outline-none transition-[.2s]
                  placeholder:text-slate-600 hover:bg-gray-400/25 normal-case"
        />
        <button type="submit" class="text-4xl font-medium w-full h-12 border-none
            rounded-[30px] outline-none bg-amber-800/70 text-amber-500/75 hover:bg-amber-500/75 hover:text-slate-700/60 mt-8">
              Login</button>
      </form>
    </div>
  );
}
