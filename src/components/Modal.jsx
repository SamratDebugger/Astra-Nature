import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import auth from "../../firebase/firebase.config";

export default function Modal({ ref }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("User signed out");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        // An error happened.
      });
  };
  return (
    <dialog ref={ref} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">Logout User</h3>
        <p className="py-4">Are you sure you want to Logout?</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button onClick={() => ref.current.close()} className="btn">
            No
          </button>
          <button onClick={handleLogout} className="btn btn-error">
            Yes
          </button>
        </div>
      </div>
    </dialog>
  );
}
