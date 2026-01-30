import Card from "./Card";

export default function Services() {
  return (
    <div className="max-w-360  mx-auto">
      <h2 className="text-center text-4xl">Our Services</h2>
      <div className="grid grid-cols-3 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
