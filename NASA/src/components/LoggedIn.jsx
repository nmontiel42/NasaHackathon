import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();

  return (
    <>
      <header>
        <nav className="bg-blue-500 flex justify-between items-center p-4">
          <h1 className="bg-red-500 text-2xl font-bold">BioInvaders</h1>
          <div className="bg-yellow-500 flex items-center p-2">
            {user.picture !== "" ? (
              <img
                className="bg-green-500 rounded-full w-12"
                src={user.picture}
                alt="user profile avatar"
              />
            ) : (
              <div className="bg-green-500 rounded-full w-12">
                {user?.given_name?.[0]}
                {user?.family_name?.[1]}
              </div>
            )}
            <div className="ml-2">
              <p className="bg-pink-500 font-bold">
                {user?.given_name} {user?.family_name}
              </p>
              <button className="bg-violet-500" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <p className="flex justify-center">Pagina 2</p>
      </main>

      <footer className="footer">
        <div className="bg-orange-500">
          <strong className="bg-cyan-500 text-s">BioInvaders</strong>
        </div>
      </footer>
    </>
  );
}
