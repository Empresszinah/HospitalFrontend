import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Pharmacy from "../../../components/dashboard-pages/dashboard/pharmacy";

const index = () => {
  return (
    <>
      <Seo pageTitle="Pharmacy" />
      <Pharmacy />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
