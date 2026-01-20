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
 <Node icon={<FaCode />} label="Code" hoverIcon={vscodeIcon} /> 
   <Node icon={<FaCodeBranch />} label="Commit"  hoverIcon={github} />
  <Node icon={<FaCogs />} label="Build" hoverIcon={npm} />
  <Node icon={<FaVial />} label="Unit Tests" hoverIcon={jest} />
  <Node icon={<FaProjectDiagram />} label="Integration Tests" hoverIcon={postman}  />
  <Node icon={<FaEye />} label="Review" hoverIcon={github}  />
  <Node icon={<FaServer />} label="Staging" hoverIcon={AWS}  />
  <Node icon={<FaCube />} label="Production" hoverIcon={AWSPRO}  />
</div>


        {/* Left Loop */}
<div className="left-loop">
  <span className="related-icon">
    <FaCode />
  </span>
  <span className="related-text">Related to Code</span>
</div>
<img
  src={relatedCommitLine}
  alt="related to commit flow"
  className="related-commit-line"
/>


        {/* Monitor */}
        <div className="monitor">
          <FaDesktop />
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


function Node({ icon, label, hoverIcon }) {
  return (
    <div className="node hover-icon-wrap">
      
      {hoverIcon && (
        <img
          src={hoverIcon}
          className="hover-icon-img"
          alt="hover icon"
        />
      )}

      <div className="circle">{icon}</div>
      <span>{label}</span>
    </div>
  );
}


