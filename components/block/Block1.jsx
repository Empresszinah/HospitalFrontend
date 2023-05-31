const Block1 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "images/resource/work-1.png",
      title: "Health and Wellness",
      text: `Discover the inner workings of a modern hospital and the dedicated professionals who make it all possible.`,
    },
    {
      id: 2,
      icon: "images/resource/work-2.png",
      title: "The Path to Optimal Health",
      text: `Unveiling the behind-the-scenes magic of a hospital, where every action is driven by a commitment to healing and saving lives.`,
    },
    {
      id: 3,
      icon: "images/resource/work-3.png",
      title: "Mastering Self-Care",
      text: `Experience the heartbeat of a hospital, where round-the-clock care and unwavering dedication come together.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="work-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <figure className="image">
              <img src={item.icon} alt="how it works" />
            </figure>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block1;
