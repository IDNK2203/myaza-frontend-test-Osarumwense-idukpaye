import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const Logo = ({ image }: { image: StaticImageData }) => {
  return (
    <div className="w-full flex justify-center max-w-28 items-center">
      <Link href="/" className="flex items-center gap-2 font-medium">
        <Image alt="Brand Logo" src={image} className="w-full" />{" "}
      </Link>
    </div>
  );
};
