import Link from "next/link";
import PatientsFeatured from "../../../../../data/patients-featured";

const MedicalHistories = () => {
  return (
    <>
      {PatientsFeatured.slice(0, 6).map((item) => (
        <div className="patient-block col-lg-6 col-md-12 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="content">
              <span className="patient-profile-pic">
                <img src={item.logo} alt="item brand" />
              </span>
              <h4>
                <Link href="/dashboard/dashboard">{item.patientName}</Link>
              </h4>

              <ul className="patient-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {item.patientID}
                </li>
                
                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {item.Doctor}
                </li>
                
                <li>
                  <span className="icon flaticon-clock-3"></span> {item.lastVisit}
                </li>
                
                <li>
                  <span className="icon flaticon-money"></span> {item.totalCheckup}
                </li>
                
              </ul>
              

              <ul className="patient-other-info">
                {item.patientData.map((val, i) => (
                  <li key={i} className={`${val.styleClass}`}>
                    {val.type}
                  </li>
                ))}
              </ul>
              

              <button className="bookmark-btn">
                <span className="flaticon-bookmark"></span>
              </button>
            </div>
          </div>
        </div>
        
      ))}
    </>
  );
};

export default MedicalHistories;
