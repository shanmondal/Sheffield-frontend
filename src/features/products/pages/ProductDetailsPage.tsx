import { useParams } from "react-router-dom";
import { PRODUCT_DETAILS } from "../data/product-details";
import { ProductDetailsHero } from "../components/ProductDetailsHero";
import { ProductSectionRenderer } from "../components/ProductSectionRenderer";

export const ProductDetailsPage = () => {
  const { slug } = useParams();

  const product = PRODUCT_DETAILS.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-6 py-20">
      <ProductDetailsHero
        title={product.title}
        image={product.heroImage}
      />

      <ProductSectionRenderer
        sections={product.sections}
      />
    </div>
  );
};