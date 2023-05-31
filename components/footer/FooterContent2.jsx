import Link from "next/link";
import SearchForm from "./SearchForm";

const FooterContent2 = () => {
  const footerMenu1 = [
    { id: 1, name: "My Profile", routeLink: "/" },
    { id: 2, name: "Patients", routeLink: "/" },
    { id: 3, name: "Pharmacy", routeLink: "/" },
    { id: 4, name: "Lab", routeLink: "/" },
    { id: 5, name: "Radiology", routeLink: "/" },
    { id: 6, name: "Records", routeLink: "/" },
  ];

  const footerMenu2 = [
    {
      id: 1,
      list: [
        { name: "Privacy & Securty", routeLink: "/" },
        { name: "Terms of Service", routeLink: "/" },
        { name: "Communications", routeLink: "/" },
        { name: "Referral Terms", routeLink: "/" },
        { name: "Licnses", routeLink: "/" },
        { name: "Disclaimers", routeLink: "/" },
      ],
    },
    {
      id: 2,
      list: [
        { name: "Support", routeLink: "/" },
        { name: "How It Works", routeLink: "/" },
        { name: "Health is Wealth", routeLink: "/" },
        { name: "Contact Us", routeLink: "/" },
      ],
    },
  ];
  return (
    <>
      <div className="footer-column col-lg-3 col-md-6 col-sm-12">
        <div className="footer-widget links-widget">
          <h4 className="widget-title">Dashboard</h4>
          <div className="widget-content">
            <ul className="list">
              {footerMenu1.map((menu) => (
                <li key={menu.id}>
                  <Link href={menu.routeLink}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End .footer-column */}

      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
        <div className="footer-widget links-widget">
          <h4 className="widget-title">Frequently Asked Questions</h4>
          <div className="widget-content d-flex">
            {footerMenu2.map((item) => (
              <ul className="list" key={item.id}>
                {item.list.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.routeLink}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* End .footer-column */}

      <div className="footer-column col-lg-4 col-md-12 col-sm-12">
        <div className="footer-widget">
          <h4 className="widget-title">Join Us On</h4>
          <div className="widget-content">
            <div className="newsletter-form">
              <div className="text">We don’t send spam so don’t worry.</div>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      {/* End .footer-column */}
    </>
  );
};

export default FooterContent2;
