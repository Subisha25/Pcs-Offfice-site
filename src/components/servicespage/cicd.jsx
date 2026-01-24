import "./cicd.css";
import cicdImg from "../assets/cicd/cicd.png";

export default function CICDFlowFinal() {
  return (
    <section className="cicd-final">

      <div className="cicd-heading">
        <h2>CI/CD & Deployment</h2>
        <p className="sub-text">
          Continuous integration and delivery streamline releases,
          reduce manual errors, and keep your site up-to-date with
          fast, reliable deployments. We automate testing and delivery
          so updates reach users safely and quickly.
        </p>
      </div>

      <div className="cicd-image-wrap">
        <img src={cicdImg} alt="CI/CD Flow" className="cicd-image" />
      </div>

    </section>
  );
}
