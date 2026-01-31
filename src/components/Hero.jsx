export default function Hero({ children }) {
  return (
    <div className="hero max-w-360 mx-auto py-30 ">
      <div className="hero-content text-center">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
