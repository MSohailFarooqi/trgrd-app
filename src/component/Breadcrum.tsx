interface myprops {
  title: string;
  company: string;
  date: string;
}

function Breadcrum(prop: myprops) {
  return (
    <>
      <div className="mt-10 text-center">
        <h1 className="text-6xl font-bold mb-8">
          {prop.title} | <span className="text-primary">{prop.company}</span>
        </h1>
        <p className="text-primary text-xl">{prop.date}</p>
      </div>
    </>
  );
}

export default Breadcrum;
