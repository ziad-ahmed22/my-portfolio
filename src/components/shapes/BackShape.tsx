import Image from "next/image";
import bgImg from "@/assets/images/shapes/bg.webp";

export const BackShape = () => {
  return (
    <div className="w-full h-screen fixed inset-0 animate-move-up -z-10">
      <Image
        src={bgImg}
        width={1200}
        height={700}
        alt="Profile Image"
        className="object-cover h-full w-full"
      />
    </div>
  );
};
