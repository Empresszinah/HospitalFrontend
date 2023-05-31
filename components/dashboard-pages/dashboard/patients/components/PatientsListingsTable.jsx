import Link from "next/link.js";
import Patients from "../../../../../data/patients-featured.js";

const PatientsListingsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Patients</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>All Patients</option>
            <option>In Patients</option>
            <option>Out Patients</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Last Visit</th>
                  <th>Total Checkup</th>
                  <th>bedNumber</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {Patients.slice(0, 10).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="patients-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="patient-profile-pic">
                              <img src={item.logo} alt="logo" />
                            </span>
                            <h4>
                              <Link href="/dashboard/dashboard">
                                {item.patientName} 
                              </Link>
                            </h4>
                            <ul className="patients-info">
                              
                              <li>
                                <span className="icon flaticon-user"></span>
                                 {item.patientID} || {item.Doctor} 
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.lastVisit}</td>
                    <td>{item.totalCheckup}</td>
                    <td>{item.bedNumber}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Profile">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Profile">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default PatientsListingsTable;
