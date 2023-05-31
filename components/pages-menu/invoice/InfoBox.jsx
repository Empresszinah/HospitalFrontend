const InfoBox = () => {
  return (
    <div className="info-box">
      <div className="left-column">
        <div className="info">
          <h6>Invoice date:</h6>
          <span>03/10/2021</span>
        </div>

        <div className="info">
          <h4>Supplier</h4>
          <h5>Strydes Hospital</h5>
          <p>Lagos, Nigeria</p>
        </div>
      </div>

      <div className="right-column">
        <div className="info">
          <h6>Due date:</h6>
          <span>03/10/2021</span>
        </div>

        <div className="info">
          <h4>Customer</h4>
          <h5>Huzinah</h5>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
