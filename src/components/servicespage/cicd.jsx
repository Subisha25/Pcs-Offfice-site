import "./cicd.css";
import {
  FaCode,
  FaCodeBranch,
  FaCogs,
  FaVial,
  FaProjectDiagram,
  FaEye,
  FaServer,
  FaCube,
  FaDesktop
} from "react-icons/fa";
import codeImg from "../../components/assets/cicd/codeImg.png";      
import relatedImg from "../../components/assets/cicd/relatedImg.png"; 
import commitImg from "../../components/assets/cicd/Commit.png";
import buildImg from "../../components/assets/cicd/Build.png";
import unitTestImg from "../../components/assets/cicd/Unit Tests.png";
import integrationTestImg from "../../components/assets/cicd/Integration Tests.png";
import reviewImg from "../../components/assets/cicd/Review.png";
import stagingImg from "../../components/assets/cicd/Staging.png";
import productionImg from "../../components/assets/cicd/Production.png";
import monitorImg from "../../components/assets/cicd/Monitor.png";


import flowLine from "../../components/assets/line.png";
import relatedCommitLine from "../../components/assets/commit.png";
import monitorProductionLine from "../../components/assets/manitor.png";
import vscodeIcon from "../../components/assets/teach/vscode.svg";
import github from "../../components/assets/teach/git.svg"
import npm from "../../components/assets/teach/node.svg"
import postman from "../../components/assets/teach/postman.svg"
import AWS from "../../components/assets/teach/aws.svg"
import jest from "../../components/assets/teach/jest-svgrepo-com .svg"
import AWSPRO from "../../components/assets/teach/awspro.svg"
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


        

      <div className="pipeline-wrap">

      {/* CI Title */}
<div className="ci-title">Continuous Integration</div>
<div className="ci-bg"></div>

{/* CD Title */}
<div className="cd-title">Continuous Deployment</div>
<div className="cd-bg"></div>


        {/* Main Line */}
        <div className="main-line" />

        {/* Steps */}
  <div className="steps">
  <Node image={codeImg} label="Code" hoverIcon={vscodeIcon} />

  <Node image={commitImg} label="Commit" hoverIcon={github} />

  <Node image={buildImg} label="Build" hoverIcon={npm} />

  <Node image={unitTestImg} label="Unit Tests" hoverIcon={jest} />

  <Node image={integrationTestImg} label="Integration Tests" hoverIcon={postman} />

  <Node image={reviewImg} label="Review" hoverIcon={github} />

  <Node image={stagingImg} label="Staging" hoverIcon={AWS} />

  <Node image={productionImg} label="Production" hoverIcon={AWSPRO} />
</div>



        {/* Left Loop */}
<div className="left-loop">
  <span className="related-icon">
    <img src={relatedImg} alt="Related to Code" className="related-img" />
  </span>
  <span className="related-text">Related to Code</span>
</div>

<img
  src={relatedCommitLine}
  alt="related to commit flow"
  className="related-commit-line"
/>


        {/* Monitor */}
<div className="monitor node">
  <div className="circle">
    <img src={monitorImg} alt="Monitor" className="cicd-circle-img" />
  </div>
  <span>Monitor</span>
</div>



        <img
  src={monitorProductionLine}
  alt="monitor to production flow"
  className="monitor-production-line"
/>

<img
  src={flowLine}
  alt="monitor to code flow"
  className="monitor-code-line"
/>
      </div>
    </section>
  );
}


function Node({ icon, label,image,  hoverIcon }) {
  return (
  <div className="node hover-icon-wrap">
      {hoverIcon && (
        <img src={hoverIcon} className="hover-icon-img" alt="hover icon" />
      )}

      <div className="circle">
        <img src={image} alt={label} className="cicd-circle-img" />
      </div>

      <span>{label}</span>
    </div>
  );
}


