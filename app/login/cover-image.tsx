import Image from "next/image";
import dashboardMockup from "../../public/images/dashboard-mockup.png";
import TestimonialSlider from "./testimonial-slider";

function CoverImageSection() {
  return (
    <>
      <TestimonialSlider />
      <div className="absolute -bottom-52 w-5xl h-[700px] flex justify-center">
        <Image
          src={dashboardMockup}
          alt="Parent and child learning together"
          layout="fill"
        />
      </div>
    </>
  );
}

export default CoverImageSection;
