import "./cta.css";
import CommonButton from "../common/button";
import { Link, useNavigate } from "react-router-dom";


const ServicesCTASection = () => {

  const navigate = useNavigate();
  return (
    <div className="services_cta_section_wrapper">

      <div className="services_cta_section_heading">
        <h1 className="services_cta_title_line1">
          Ready to bring your brand to life?
        </h1>

        <h2 className="services_cta_title_line2">
          Let’s <span className="services_cta_highlight">create</span> something bold
        </h2>
      </div>

      {/* UPDATED CTA BUTTON */}
      <Link
        to="/contact"
        state={{ mode: "work" }}
      >
        <CommonButton onClick={() => navigate("/contact")} />
      </Link>
    </div>
  );
};

export default ServicesCTASection;
