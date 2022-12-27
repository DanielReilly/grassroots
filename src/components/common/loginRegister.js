import * as React from "react";
import { useEffect } from "react";
import  {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./button";
import { LockClosedIcon } from "@heroicons/react/20/solid";


export default function BasicTextFields({
  title,
  setPassword,
  setEmail,
  handleAction,
  switcherHandlerLink,
  switcherHandlerText,
  switcherHandlerCTA,
}) {


    let navigate = useNavigate();

    useEffect(() => {
      let authToken = sessionStorage.getItem("Auth Token");
      console.log(authToken);

      if (authToken) {
        navigate("/dashboard");
      }
    }, [navigate]);


  return (
    <div>
      <section className="bg-white dark:bg-[#031726]">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://images.unsplash.com/photo-1520402230634-5ae6b284f74b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to grassroots.football ⚽️
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Making football at all levels accessible to everyone. Play, Get
                Scouted, Get Noticed, Get Signed.
              </p>
            </div>
          </section>

          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                  Welcome to grassroots.football ⚽️
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  Making football at all levels accessible to everyone. Play,
                  Get Scouted, Get Noticed, Get Signed.
                </p>
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-12">
                  <input
                    type="email"
                    id="Email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-4 rounded-md font-medium text-stone-50 dark:bg-gray-800 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-gray mt-5 first:mt-0"
                    placeholder="Email"
                  />
                </div>

                <div className="col-span-12">
                  <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-4 rounded-md font-medium text-stone-50 dark:bg-gray-800 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-gray mt-5 first:mt-0"
                    placeholder="Password"
                  />
                </div>

                <div className="col-span-12 lg:items-center">
                  <Button
                    handleAction={handleAction}
                    title={title}
                    className="w-full inline-block rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                  />
                </div>
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    {switcherHandlerText}
                    <a
                      href={switcherHandlerLink}
                      className="mx-1 text-gray-700 underline dark:text-gray-200"
                    >
                      {switcherHandlerCTA}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}