import ripImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-RIP.webp';
import akbImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-AKB.webp';
import sleImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-SLE.webp';
import uniRipImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-UNIRIP.webp';
import chopImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-CHOP.webp';
import lowNoiseImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-LOWNOISE.webp';
import fineImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-FINE.webp';
import panSizeImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-PANSIZE.webp';
import cordImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-CORD.webp';
import palNailImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-PALNAIL.webp';
import panFinishImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-PANSIZE.webp';
import plasSteelImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-PLASSTEEL.webp';
import nfeImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-NFE.webp';
import foodImage from '@/assets/images/products/tct/INDUSTRIALQUALITYTCTCIRCULARSAWBLADES-FOOD.webp';

export interface TctProduct {
  id: string;
  title: string;
  image: string;
  content: string;
}

export const industrialTctProducts: TctProduct[] = [
  {
    id: 'rip-saw',
    title: 'Rip Saw Blades – Soft/Hardwood, Universal, Narrow Kerf',
    image: ripImage,
    content:
      'Our Industrial quality ripping circular saw blades range from small diameters up to 1000mm. They are used for ripping hardwood and softwood and occasionally crosscutting. The small number of teeth enables them to cut along the long grain of the wood. We also supply thin kerf ripping blades. Large diameter blades are carefully hardened and tensioned to avoid vibration and ensure they run true when cutting along the grain. All our ripsaw blades are suitable for cutting solid timber, for use in hand-fed sawing machines and table saws. Please mention the bore size and any pin hole requirements when ordering.',
  },
  {
    id: 'anti-kickback',
    title: 'Rip Saw Blades – Anti Kickback Series Ripping',
    image: akbImage,
    content:
      'Our anti-kick back series ripping circular saw blades are specially designed to reduce kick back of the material when ripping solid timber on hand-fed rip saw machines. Their tooth geometry makes them ideal for on-site jobs. The small number of teeth enables them cut along the long grain smoothly to achieve a good finish. All the blades are suitable for cutting solid timber, for use in hand-fed sawing machines and table saws, and available in any bores sizes. Contact us now to place an order, find out your discount or get technical advice on the best blade for your cutting needs.',
  },
  {
    id: 'sle-multi-rip',
    title: 'Ripping Circular Saw Blades – Straight Line Edging, Multi Rip',
    image: sleImage,
    content:
      "Straight line edging (SLE) blades have an extra thick body for maximum stability and are designed for use on Wadkin straight line edging machines. Special multi ripping blades used in 'Ganes' for ripping are available with and without wiper slots, for cutting along the grain of hard and soft wood. Suitable for multi-rip sawing machines, these TCT saw blades are manufactured to specific customer requirements. Please mention the bore size and any pin hole requirements when ordering.",
  },
  {
    id: 'general-purpose',
    title: 'General Purpose Circular Saw Blades – Universal Rip/Cross Cut',
    image: uniRipImage,
    content:
      'These blades are suitable both for ripping and cross cutting and give a fine finish on solid timber, boards and panels. They are for use on all sizing saws, table saws and crosscut saws, and available from 150 up to 760mm diameter. Please mention the bore size and any pin hole requirements when ordering.',
  },
  {
    id: 'mitre-chop',
    title: 'Mitre Saw / Chop Saw Blades for Crosscutting',
    image: chopImage,
    content:
      'These crosscut blades have negative hook angles which make them suitable for hand-fed sawing machines, crosscut saws, chop saws, mitre saws and radial arm saws. The negative hook angle gives better control on the sawing machine when crosscutting solid timber, laminated boards, plywood and all types of panels and boards. Triple chip blades (referenced by TC) achieve a finer finish.',
  },
  {
    id: 'low-noise',
    title: 'Low Noise Circular Saw Blades',
    image: lowNoiseImage,
    content:
      'These specially designed low noise blades are laser cut with resin filled noise reduction slots to minimise the blade operation resonance. They are ideal for cutting laminated and veneered boards and panels and suitable for all sizing saws, table saws, cross cut and panel sizing saws.',
  },
  {
    id: 'fine-trimming',
    title: 'Fine Trimming Circular Saw Blades',
    image: fineImage,
    content:
      'Suitable for cutting timber, laminate, plywood, MDF, and all other laminated chip boards and particle boards, these blades are for use in sizing saws, table saws and crosscut saws and available in various bore sizes to fit all makes of sawing machine. Triple chip circular saw blades (Ref. TC) are recommended for a finer finish.',
  },
  {
    id: 'panel-sizing',
    title: 'Panel Sizing Circular Saw Blades',
    image: panSizeImage,
    content:
      'Our Panel sizing saw blades ensure an accurate cut when cutting timber, laminate, boards, plywood, MDF, and all other man-made boards and particle boards. They are suitable for all sizing saws, table saws and crosscut saws and available in various bore sizes to fit all makes of sawing machine.',
  },
  {
    id: 'cordless',
    title: 'Cordless Circular Saw Blades',
    image: cordImage,
    content:
      'The specifications of our cordless circular saw blades make them ideal for most cordless power tools. The fine pitch of the teeth achieves a high quality cut for plastic sections and also all types of wood. They are suitable both for ripping and crosscutting soft and hard wood, plywood, and all particle boards including MDF.',
  },
  {
    id: 'nail-pallet',
    title: 'Nail Resistant and Pallet Buster Circular Saw Blades',
    image: palNailImage,
    content:
      "Our nail resistant blades are specially designed for ripping reclaimed timber containing nails and other foreign particles, suitable for all popular rip saws and crosscut saws. The pallet buster blades have special 'NI Matrix' grade tips designed for the pallet reclamation industry. They are all low noise blades with laser-cut noise reduction slots. Their special tooth geometry makes the tips resistant to the hardest materials and ensures longer blade life.",
  },
  {
    id: 'panel-finishing',
    title: 'Panel Finishing Circular Saw Blades',
    image: panFinishImage,
    content:
      'Our panel finishing saw blades have a large number of teeth to provide an even finer finish on all board types and plastic materials. Our 160mm diameter Panel finishing blade is specially designed for use in FESTOOL machines. Some of our Panel finishing saw blades have special Panel Saw Tips which have a harder Tungsten grade to increase the re-sharpening periods. These blades can be sharpened many times thanks to the grade of the tip which makes them excellent value. They provide a perfect match to sizing saws and vertical panel saws.',
  },
  {
    id: 'plastic-steel',
    title: 'Plastic and Steel Cutting Circular Saw Blades',
    image: plasSteelImage,
    content:
      "We stock the most popular sizes of plastic cutting blades. The fine pitch of the teeth and thinner kerf provide a perfect cut for all plastic materials and also extra thin aluminium materials, suitable for use in all popular chop saws, double mitre saws and panel saws. Steel cutting blades fit 'Dri Cut' chop saws used in the fabrication industry and have special Tungsten Carbide Tips that give the blade a longer life. Having a slightly thinner kerf, they are perfect for cutting mild steel sections, bars and plates.",
  },
  {
    id: 'aluminium',
    title: 'Circular Saw Blades for Aluminium',
    image: nfeImage,
    content:
      'Our non-ferrous metal cutting blades are designed for cutting aluminium, copper, brass and other non-ferrous metals. They have specially designed, laser cut, resin-filled noise reduction slots to minimise noise in the workplace. They are suitable for popular chop saws, double mitre saws and panel saws. The most commonly used blades for cutting aluminium have a negative hook angle, perfect for cutting non-ferrous sections and extrusions. To cut non-ferrous solids and plates, we recommend blades with a positive hook angle.',
  },
  {
    id: 'food-cutting',
    title: 'Circular Saw Blades for Food Cutting',
    image: foodImage,
    content:
      'We manufacture food processing blades for cutting meat, fish, vegetables and other food product. Our blades are suitable for use in special purpose, EFS, FREUND and JARVIS machines. We use two different kinds of steel to manufacture our food processing blades: carbon steel and stainless steel. Please contact us to discuss your requirements. We have added the food cutting blades into our standard blade range and are able to manufacture any specification against your requirements.',
  },
];
