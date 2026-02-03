export default function UserForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="fieldset bg-base-200 border-base-300 rounded-box w-xs border mx-auto p-4"
    >
      <legend className="fieldset-legend">registration</legend>

      <label className="label">Email</label>
      <input required type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input
        required
        type="password"
        className="input"
        placeholder="Password"
      />

      <button type="submit" className="btn btn-warning mt-4">
        registration
      </button>
    </form>
  );
}
