import { Space_GroteskFont } from "@/lib/font";

export const Heading = ({
  heading,
  rider,
}: {
  heading: string;
  rider: string;
}) => {
  return (
    <div className={`flex flex-col items-center gap-2 text-center `}>
      <h1 className={`text-2xl font-bold ${Space_GroteskFont.className}`}>
        {heading}
      </h1>
      <p className="text-slient-foreground text-balance">{rider}</p>
    </div>
  );
};
