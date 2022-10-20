import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {
  signInWithGoogle,
  signOut,
  useAuthState,
} from "../../utilities/firebase";

const SignInButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>
    Sign in
  </button>
);

const SignOutButton = () => (
  <button className="ms-auto btn btn-dark" onClick={signOut}>
    Sign out
  </button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({ isActive }) => (isActive ? "active" : "inactive");

const Navbar = ({ title, openModal }) => {
  const [user] = useAuthState();
  return (
    <nav className="row text-center pb-3" style={{ backgroundColor: "green" }}>
      {/* <div>
        <div>
          <div className="d-flex justify-content-center">
            <button>
              <i class="bi bi-plus"></i>
            </button>
          </div>

          <div>
            <h2 style={{ padding: "10px", color: "white" }}>{title}</h2>
          </div>
        </div>
      </div> */}
      <div className="headBar">
        <h1 className="heading ">{title}</h1>
      </div>
      <div className=" d-flex mt-3">
        <div className="col-6">
      <AuthButton />
      </div>
      <div className="col-6">
      {user ? <button type="button" style={{ backgroundColor: "blue" }} className="ms-auto btn text-white" onClick={openModal}>Add item</button> :
      <button type="button" style={{ backgroundColor: "blue" }} className="ms-auto btn text-white" >Add item</button>}
        </div></div>
    </nav>
  );
};

export default Navbar;
