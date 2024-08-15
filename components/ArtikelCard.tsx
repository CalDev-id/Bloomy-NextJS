
export default function ArtikelCard(props: any) {
  return (
    <div className="lg:w-3/12 w-full">
        <h1 className="text-center lg:text-5xl text-3xl mb-4 text-white font-medium">{props.title}</h1>
        <p className="text-center text-sm text-white font-light">{props.description}</p>
    </div>
  )
}
