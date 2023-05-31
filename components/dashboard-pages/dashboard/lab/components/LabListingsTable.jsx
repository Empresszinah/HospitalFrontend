import Link from "next/link.js";
import Patients from "../../../../../data/lab-featured.js";

const LabListingsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Lab</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Laboratory</option>
            <option>Radiology</option>
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
                  <th>Reporting Date</th>
                  <th>Total Amount</th>
                  <th>Importance</th>
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
                                 {item.billNo} || {item.Doctor} 
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.reportingDate}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.importance}</td>
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

export default LabListingsTable;
