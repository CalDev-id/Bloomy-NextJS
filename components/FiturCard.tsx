export default function FiturCard(props: any) {
  return (
    <div className="lg:w-3/12 w-full">
      <h1 className="text-2xl lg:mb-4 mb-2 font-semibold">{props.title}</h1>
      <p className="lg:text-sm lg:font-light">{props.description}</p>
    </div>
  );
}
