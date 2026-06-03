interface Props {
  title: string;
  image: string;
}

export const ProductDetailsHero = ({
  title,
  image,
}: Props) => {
  return (
    <section className="grid gap-12 lg:grid-cols-2">
      <div>
        <h1 className="mb-6 text-5xl font-bold text-[#0A4A9E]">
          {title}
        </h1>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full rounded-xl object-cover"
      />
    </section>
  );
};