import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardsySidebar from "../../../header/DashboardsySidebar";
import BreadCrumb from "../../BreadCrumb";
import TopCardBlock from "./components/TopCardBlock";
import ProfileChart from "./components/ProfileChart";
import MedicalPersonnels from "./components/MedicalPersonnels";
import CopyrightFooter from "../../CopyrightFooter";
import MedicalHistories from "./components/MedicalHistories";
import DashboardsyHeader from "../../../header/DashboardsyHeader";
import MenuToggler from "../../MenuToggler";

const Index = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardsyHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardsySidebar />
      

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Welcome To Strydes Hospital!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <TopCardBlock />
          </div>
          {/* End .row top card block */}

          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/* <!-- Graph widget --> */}
              <div className="graph-widget ls-widget">
                <ProfileChart />
              </div>
              {/* End profile chart */}
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-12">
              {/* <!-- MedicalPersonnels Widget --> */}
              <div className="MedicalPersonnels-widget ls-widget">
                <div className="widget-title">
                  <h4>Medical Personnels</h4>
                </div>
                <div className="widget-content">
                  <MedicalPersonnels />
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-12">
              
              <div className="medicalHistory-widget ls-widget">
                <div className="widget-title">
                  <h4>Recent Medical History</h4>
                </div>
                <div className="widget-content">
                  <div className="row">
                    

                    <MedicalHistories />
                  </div>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default Index;
