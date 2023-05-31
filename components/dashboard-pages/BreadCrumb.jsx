const BreadCrumb = ({ title = "" }) => {
  return (
    <div className="upper-title-box">
      <h3>{title}</h3>
      <div className="text">Get started with us.</div>
    </div>
  );
};

export default BreadCrumb;
