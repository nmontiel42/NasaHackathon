import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function LoggedOut() {
  const { login, register } = useKindeAuth();
  return (
    <>
      <header>
        <nav className="nav container">
          <h1 className="text-display-3">BioInvaders</h1>
          <div>
            <button className="btn btn-ghost sign-in-btn" onClick={login}>
              Sign in
            </button>
            <button className="btn btn-dark" onClick={register}>
              Sign up
            </button>
          </div>
        </nav>
      </header>

      <main>
        <p>Pagina inicial</p>
      </main>

      <footer className="footer">
        <div className="container">
          <strong className="text-heading-2">BioInvaders</strong><br/>
          <small className="text-subtle">
            © 2024 BioInvaders, Inc. All rights reserved
          </small>
        </div>
      </footer>
    </>
  );
}
