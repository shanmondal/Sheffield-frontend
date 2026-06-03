export interface ProductDetails {
  slug: string;
  title: string;
  heroImage: string;

  sections: ProductSection[];
}

export type ProductSection =
  | TextSection
  | ImageSection
  | TableSection
  | GallerySection;

export interface TextSection {
  type: "text";
  title?: string;
  content: string[];
}

export interface ImageSection {
  type: "image";
  image: string;
  alt: string;
}

export interface TableSection {
  type: "table";
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface GallerySection {
  type: "gallery";
  title?: string;
  images: string[];
}