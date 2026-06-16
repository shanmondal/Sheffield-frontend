import tctMain from '@/assets/images/products/tct/TCT.webp';
import industrialTct from '@/assets/images/products/tct/INDUSTRIAL+QUALITY+TCT+CIRCULAR+SAW+BLADES+-+NFE.webp';
import diyTct from '@/assets/images/products/tct/DIY+Pro+Trade.webp';
import panelScoring from '@/assets/images/products/tct/PANEL+SCORING+CIRCULAR+SAW+BLADES.webp';

export const tctProducts = [
  {
    title: 'Tungsten Carbide Tipped (TCT)',
    description:
      'Premium TCT circular saw blades engineered for high-performance industrial cutting.',
    image: tctMain,
    slug: 'general',
  },
  {
    title: 'Industrial Quality TCT Circular Saw Blades',
    description:
      'Industrial-grade TCT blades for demanding production environments.',
    image: industrialTct,
    slug: 'industrial',
  },
  {
    title: 'DIY Circular Saw Blades',
    description:
      'Reliable circular saw blades for workshop and general-purpose applications.',
    image: diyTct,
    slug: 'diy',
  },
  {
    title: 'Panel Scoring Circular Saw Blades',
    description:
      'Precision scoring blades designed for clean panel cutting operations.',
    image: panelScoring,
    slug: 'panel-scoring',
  },
];
