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

export default function CICDFlowFinal() {
  return (
    <section className="cicd-final">

      <h2>CI/CD & Deployment</h2>
      <p>Continuous integration and delivery process overview</p>
        

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
 <Node
    icon={<FaCode />}
    label="Code"
    hoverIcon={vscodeIcon}
  />  <Node icon={<FaCodeBranch />} label="Commit" tooltip="Git Commit" />
  <Node icon={<FaCogs />} label="Build" tooltip="Build Process" />
  <Node icon={<FaVial />} label="Unit Tests" tooltip="Unit Testing" />
  <Node icon={<FaProjectDiagram />} label="Integration Tests" tooltip="Integration Tests" />
  <Node icon={<FaEye />} label="Review" tooltip="Code Review" />
  <Node icon={<FaServer />} label="Staging" tooltip="Staging Server" />
  <Node icon={<FaCube />} label="Production" tooltip="Production Release" />
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


