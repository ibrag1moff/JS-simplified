import { RotateLoader } from "react-spinners";

export const CustomLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <RotateLoader color="#7979fe" />
    </div>
  );
};
