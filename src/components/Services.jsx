import Card from "./Card";

export default function Services() {
  const cardObj = [
    {
      id: 0,
      image: "/assets/img/service-1.jpg",
      title: "Web Design",
      description:
        "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
    },
    {
      id: 1,
      image: "/assets/img/service-2.jpg",
      title: "Graphic Design",
      description:
        "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
    },
    {
      id: 2,
      image: "/assets/img/service-3.jpg",
      title: "Content Creation",
      description:
        "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
    },
  ];
  return (
    <div className="max-w-360 my-20 mx-auto p-5">
      <h2 className="text-center text-4xl">Our Services</h2>
      <div className="divider divider-warning w-20 mx-auto"></div>
      <div className="grid md:grid-cols-3 gap-10 ">
        {cardObj.map((c) => (
          <Card key={c.id} content={c} />
        ))}
      </div>
    </div>
  );
}
