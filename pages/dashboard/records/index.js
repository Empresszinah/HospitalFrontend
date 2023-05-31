import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Records from "../../../components/dashboard-pages/dashboard/records";

const index = () => {
  return (
    <>
      <Seo pageTitle="Records" />
      <Records />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
