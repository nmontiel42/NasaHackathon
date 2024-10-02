import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedOut() {
  const { login, register } = useKindeAuth();
  return (
    <>
    <body className="bg-customColor1">
        <header>
          <nav className="bg-black bg-opacity-50 flex justify-between items-center p-4">
            <h1 className="font-bold text-2xl">BioInvaders</h1>
            <div className="flex gap-2">
              <button className="rounded-md p-1" onClick={login}>
                Sign in
              </button>
              <button className="bg-customColor5 text-white rounded-2xl p-2" onClick={register}>
                Sign up
              </button>
            </div>
          </nav>
        </header>
        <br />
        <main>
          <h1 className="flex justify-center">Welcome to our page!</h1>
        </main>
      </body>
    </>
  );
}
