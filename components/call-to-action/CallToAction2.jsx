import Link from "next/link";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Our Medical Personnels Await You</h2>
          <div className="text">
             Transforming Your Health for a Vibrant Life.
          </div>
        </div>

        <div className="btn-box">
          <Link href="/login" className="theme-btn btn-style-three">
            Search Department
          </Link>
          <Link href="/login" className="theme-btn btn-style-two">
            Visit Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
