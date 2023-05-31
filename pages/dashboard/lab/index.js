import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Lab from "../../../components/dashboard-pages/dashboard/lab";

const index = () => {
  return (
    <>
      <Seo pageTitle="My Job Alerts" />
      <Lab />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
