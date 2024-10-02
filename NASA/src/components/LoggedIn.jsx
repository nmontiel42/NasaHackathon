import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedIn() {
  const { user, logout } = useKindeAuth();

  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">BioInvaders</h1>
          <div className="profile-blob">
            {user.picture !== "" ? (
              <img
                className="avatar"
                src={user.picture}
                alt="user profile avatar"
              />
            ) : (
              <div className="avatar">
                {user?.given_name?.[0]}
                {user?.family_name?.[1]}
              </div>
            )}
            <div>
              <p className="text-heading-2">
                {user?.given_name} {user?.family_name}
              </p>
              <button className="text-subtle" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <p>Pagina 2</p>
      </main>

      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">BioInvaders</strong>
          <br/>
          <small className="text-subtle">
            © 2024 BioInvaders, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}
