const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "flaticon-user",
      countNumber: "22",
      metaName: "In Patients",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "flaticon-user",
      countNumber: "9382",
      metaName: "Out Patients",
      uiClass: "ui-red",
    },
    {
      id: 3,
      icon: "flaticon-notebook",
      countNumber: "74",
      metaName: "Records",
      uiClass: "ui-yellow",
    },
    {
      id: 4,
      icon: "flaticon-notification",
      countNumber: "32",
      metaName: "Messages",
      uiClass: "ui-green",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;