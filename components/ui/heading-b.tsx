import { KarlaFont } from "@/lib/font";

export const Heading = ({
  heading,
  rider,
}: {
  heading: string;
  rider: string;
}) => {
  return (
    <div className={`flex flex-col items-left gap-2 text-left `}>
      <h1 className={`text-2xl font-bold ${KarlaFont.className}`}>{heading}</h1>
      <p className="text-slient-foreground text-balance">{rider}</p>
    </div>
  );
};
