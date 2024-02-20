import { ClimbingBoxLoader } from "react-spinners";

export const PreLoader = () => {
  return (
    <div className="bg-black absolute inset-0 flex-center z-50">
      <ClimbingBoxLoader color="#028a8a" />
    </div>
  );
};
