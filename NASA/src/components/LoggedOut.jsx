import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedOut() {
  const { login, register } = useKindeAuth();
  return (
    <>
    <body className="h-screen bg-gradient-to-bl from-green5 via-blue1 to-purple4">
        <header>
          <nav className="bg-black bg-opacity-50 flex justify-between items-center p-4">
            <h1 className="font-bold text-2xl text-white">BioInvaders</h1>
            <img className="w-20 h-full" src="public/Space_Apps_Default_Logo_-_2-Col.width-440.jpegquality-60.png" />
            <div className="flex gap-5 text-xl">
              <button className="rounded-md p-1 h-full hover:underline text-white" 
                onClick={login}>
                Sign in
              </button>
              <button className="rounded-md p-1 h-full bg-blue4 shadow-customHover hover:shadow-blue4" onClick={register}>
                Sign up
              </button>
            </div>
          </nav>
        </header>

        <br />

        <main>
          <h1 className="text-white flex justify-center">Welcome to our page!</h1>
          <div className="flex justify-center">
            <img src="public/logo.png" />
          </div>
        </main>

        <footer className="text-white fixed bottom-0 left-0 right-0 flex justify-center p-4">
          <p>© 2024 BioInvaders - All rights reserved.</p>
        </footer>
      </body>
    </>
  );
}
