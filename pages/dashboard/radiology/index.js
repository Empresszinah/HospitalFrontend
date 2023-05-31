import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Radiology from "../../../components/dashboard-pages/dashboard/radiology";

const index = () => {
  return (
    <>
      <Seo pageTitle="Radiology" />
      <Radiology />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
