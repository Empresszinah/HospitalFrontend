import Header from "./Header";
import Hero2 from "../hero/hero-2";
import Block1 from "../block/Block1";
import CallToAction2 from "../call-to-action/CallToAction2";
import CallToAction3 from "../call-to-action/CallToAction3";
import Footer from "./Footer";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import Link from "next/link";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero2 />
      {/* <!-- End Hero Section --> */}

      <section className="work-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works?</h2>
            <div className="text">Portal for Hospital, anywhere</div>
          </div>
          {/* End sec-title */}

          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>
        </div>
      </section>
     
      <CallToAction2 />
     
 
      <CallToAction3 />
      {/* <!-- End Call To Action --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
