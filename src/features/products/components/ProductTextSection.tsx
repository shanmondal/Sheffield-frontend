interface Props {
  title?: string;
  content: string[];
}

export const ProductTextSection = ({
  title,
  content,
}: Props) => {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>
      )}

      {content.map((paragraph) => (
        <p
          key={paragraph}
          className="leading-8 text-slate-600"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};