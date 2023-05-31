import Link from "next/link";
import ImageBox from "./ImageBox";

const index = () => {
  return (
    <section className="banner-section-two">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInUp" data-aos="fade-up">
              <div className="title-box">
                <h3>
                  Your Health Should Be <br />
                  Your Priority
                </h3>
                <div className="text">
                  Find The Best Medicals With Strydes
                </div>
              </div>
            </div>
          </div>
          {/* End content-column */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End auto-container */}
    </section>
  );
};

export default index;
