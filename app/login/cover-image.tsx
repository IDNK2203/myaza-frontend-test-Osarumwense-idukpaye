import Image from "next/image";
import dashboardMockup from "../../public/images/dashboard-mockup.png";
import TestimonialSlider from "./testimonial-slider";

function CoverImageSection() {
  return (
    <>
      {/* Text Content */}
      <TestimonialSlider />
      {/* Image Content */}
      <div className="absolute -bottom-52 w-5xl h-[700px] flex justify-center">
        <Image
          src={dashboardMockup} // Replace with the actual image path
          alt="Parent and child learning together"
          layout="fill"
          //   width={700}
          //   height={700}
          // className=""
        />
      </div>
    </>
  );
}

export default CoverImageSection;
