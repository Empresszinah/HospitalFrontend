import Link from "next/link.js";
import Records from "../../../../../data/records-featured.js";

const RecordsListingsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Records</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Birth Records</option>
            <option>Death Records</option>
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
                  <th>Child's Name</th>
                  <th>Reference Number</th>
                  <th>Father's Name</th>
                  <th>Birth Date</th>
                  <th>Gender</th>
                </tr>
              </thead>

              <tbody>
                {Records.slice(0, 10).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="Records-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="patient-profile-pic">
                              <img src={item.logo} alt="logo" />
                            </span>
                            <h4>
                              <Link href="/dashboard/dashboard">
                                {item.childName} 
                              </Link>
                            </h4>
                            <ul className="Records-info">
                              
                              <li>
                                <span className="icon flaticon-user"></span>
                                 {item.caseID} || {item.motherName} 
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.referenceNumber}</td>
                    <td>{item.fatherName}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.gender}</td>
                    {/* <td>
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
                    </td> */}
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

export default RecordsListingsTable;
