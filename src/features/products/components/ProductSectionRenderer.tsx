import {type ProductSection } from "../types/product-details.types";
import { ProductTextSection } from "./ProductTextSection";

interface Props {
  sections: ProductSection[];
}

export const ProductSectionRenderer = ({
  sections,
}: Props) => {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "text":
            return (
              <ProductTextSection
                key={index}
                title={section.title}
                content={section.content}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
};