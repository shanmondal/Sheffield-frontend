import powerGrinderImg from "@/assets/images/products/POWERGRINDER+saw+blade+repair+machinery.webp";

import { MachineDetailLayout } from "../components/MachineDetailLayout";

export const PowerGrinderPage = () => {
  return (
    <MachineDetailLayout
      title="PowerGrinder"
      image={powerGrinderImg}
      description={
        <>
          <h2 className="mb-4 text-xl font-semibold">
            What is it?
          </h2>

          <div className="space-y-4 text-slate-600 leading-8">
            <p>
              The POWERGRINDER has been designed for the sharpening
              of hot and friction saw blades in steel mills and blade
              repair facilities.
            </p>

            <p>
              This revolutionary sharpening machine has been
              specifically designed for sharpening blades from
              1400mm diameter up to 2400mm diameter.
            </p>

            <p>
              The machine offers unique efficiency and speed in the
              reforming of tooth profiles on blades from 6mm to
              16mm thick.
            </p>

            <p>
              Individual design features such as sealed-for-life
              bearings ensure minimum maintenance.
            </p>
          </div>
        </>
      }
      features={[
        "Machine strength and durability",
        "Minimum maintenance",
        "Easy installation",
        "Reduced regrinding time up to 30%",
        "Operator friendly controls",
      ]}
      specifications={[
        "Variable grinding stroke from 10mm - 50mm",
        "35 strokes per minute",
        "Precision ground shafts for grinding head oscillation",
        "Electrical specification supplied to customer requirements",
        "Up to 20° tilt on grinding head",
        "Gravity fed forward stroke system",
        "Side floating arbor mounting",
        "Automated cleaning system",
        "Dust extraction ventilation system",
        "Flexible grinding light",
      ]}
    />
  );
};