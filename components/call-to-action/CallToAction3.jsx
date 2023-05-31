import Link from "next/link";

const CallToAction3 = () => {
  return (
    <section className="call-to-action-three">
      <div className="auto-container">
        <div className="outer-box">
          <div className="sec-title">
            <h2>Discovering Holistic Health</h2>
            <div className="text">
            Peek behind the curtains of a bustling hospital, where compassion, 
            resilience, and innovation converge for the betterment of patient lives.
            </div>
          </div>
          {/* End sec title */}

          <div className="btn-box">
            <Link
              href="/login"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Visit Dashboard</span>
            </Link>
          </div>
          {/* End btn-box */}
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction3;
