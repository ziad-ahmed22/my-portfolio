import bgshape from "@/assets/images/shapes/bgshape.svg";
import Image from "next/image";

export const BgShape = () => {
  return (
    <div className="opacity-70 fixed -z-10 right-0 bottom-0 w-32 sm:w-36 md:w40 lg:w-44 xl:w-48 2xl:w-52">
      <Image
        src={bgshape}
        alt="bg-shape"
        width={300}
        height={400}
        className="wh-100"
      />
    </div>
  );
};
