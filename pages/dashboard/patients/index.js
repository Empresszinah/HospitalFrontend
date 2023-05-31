import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Patients from "../../../components/dashboard-pages/dashboard/patients";

const index = () => {
  return (
    <>
      <Seo pageTitle="Patients" />
      <Patients />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
