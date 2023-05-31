import Link from "next/link.js";
import Pharmacy from "../../../../../data/pharmacy-featured.js";

const PharmacyListingsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Pharmacy</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Pharmacy Bills</option>
            <option>Prescription Histories</option>
            <option>Medicine</option>
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
                  <th>Pharmacist</th>
                  <th>Total Amount</th>
                  <th>Date and Time</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {Pharmacy.slice(0, 10).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="Pharmacy-block">
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
                            <ul className="Pharmacy-info">
                              
                              <li>
                                <span className="icon flaticon-user"></span>
                                 {item.patientID} || {item.Doctor} 
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.Pharmacist}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.dateAndTime}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Histories">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Histories">
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

export default PharmacyListingsTable;
