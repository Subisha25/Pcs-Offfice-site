import React, { useState } from 'react';
import { GitBranch, GitCommit, Package, TestTube, Network, Eye, Layers, Box, Monitor, Terminal } from 'lucide-react';

export default function CICDPipeline() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const CircleNode = ({ node, isHovered, onHover, x, y }) => {
    const Icon = node.icon;

    return (
      <g
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={() => onHover(null)}
        style={{ cursor: 'pointer' }}
      >
        <circle
          cx={x}
          cy={y}
          r="32"
          fill="#0a1f44"
          stroke={isHovered ? '#667eea' : 'none'}
          strokeWidth={isHovered ? '3' : '0'}
          style={{
            transition: 'all 0.3s ease',
            filter: isHovered ? 'drop-shadow(0 4px 12px rgba(102, 126, 234, 0.4))' : 'none'
          }}
        />
        {isHovered && (
          <>
            <circle
              cx={x}
              cy={y}
              r="38"
              fill="none"
              stroke="#667eea"
              strokeWidth="2"
              opacity="0.6"
            >
              <animate attributeName="r" from="38" to="42" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}
        <foreignObject x={x - 16} y={y - 16} width="32" height="32">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <Icon size={24} color="white" strokeWidth={2.5} />
          </div>
        </foreignObject>
        <text
          x={x}
          y={y + 50}
          textAnchor="middle"
          fill="#1a1a1a"
          fontSize="13"
          fontWeight="500"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {node.label}
        </text>
      </g>
    );
  };

  const nodes = {
    code: { id: 'code', icon: GitBranch, label: 'Code', x: 113, y: 135 },
    commit: { id: 'commit', icon: GitCommit, label: 'Commit', x: 223, y: 135 },
    related: { id: 'related', icon: Terminal, label: 'Related to Code', x: 113, y: 225 },
    build: { id: 'build', icon: Package, label: 'Build', x: 350, y: 135 },
    unit: { id: 'unit', icon: TestTube, label: 'Unit Tests', x: 462, y: 135 },
    integration: { id: 'integration', icon: Network, label: 'Integration Tests', x: 574, y: 135 },
    review: { id: 'review', icon: Eye, label: 'Review', x: 733, y: 135 },
    staging: { id: 'staging', icon: Layers, label: 'Staging', x: 845, y: 135 },
    production: { id: 'production', icon: Box, label: 'Production', x: 957, y: 135 },
    monitor: { id: 'monitor', icon: Monitor, label: 'Monitor', x: 845, y: 225 }
  };

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1100px', 
      margin: '0 auto', 
      padding: '40px 20px',
      background: 'white'
    }}>
      <svg width="1100" height="300" viewBox="0 0 1100 300" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#1a1a1a" />
          </marker>
        </defs>

        {/* Title - Continuous Integration */}
        <text x="462" y="35" textAnchor="middle" fontSize="16" fontWeight="600" fill="#1a1a1a" fontFamily="system-ui, -apple-system, sans-serif">
          Continous Integration
        </text>

        {/* Title - Continuous Deployment */}
        <text x="845" y="35" textAnchor="middle" fontSize="16" fontWeight="600" fill="#1a1a1a" fontFamily="system-ui, -apple-system, sans-serif">
          Continous Deployment
        </text>

        {/* CI Container (pink dashed box) - Build, Unit Tests, Integration Tests */}
        <rect
          x="295"
          y="75"
          width="335"
          height="120"
          fill="rgba(255, 200, 200, 0.15)"
          stroke="#ff6b6b"
          strokeWidth="2.5"
          strokeDasharray="8,5"
          rx="18"
        />

        {/* CD Container (green dashed box) - Review, Staging, Production */}
        <rect
          x="678"
          y="75"
          width="335"
          height="120"
          fill="rgba(100, 220, 200, 0.15)"
          stroke="#06d6a0"
          strokeWidth="2.5"
          strokeDasharray="8,5"
          rx="18"
        />

        {/* Code & Commit Container (dashed gray box) */}
        <rect
          x="55"
          y="75"
          width="210"
          height="120"
          fill="none"
          stroke="#999"
          strokeWidth="2"
          strokeDasharray="8,5"
          rx="12"
        />

        {/* Related to Code Container */}
        <rect
          x="45"
          y="185"
          width="135"
          height="80"
          fill="none"
          stroke="#999"
          strokeWidth="2"
          strokeDasharray="8,5"
          rx="12"
        />

        {/* Horizontal Lines */}
        {/* Code to Commit */}
        <line x1="145" y1="135" x2="191" y2="135" stroke="#1a1a1a" strokeWidth="2" />
        
        {/* Commit to Build - with arrow */}
        <line x1="255" y1="135" x2="310" y2="135" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Build to Unit */}
        <line x1="382" y1="135" x2="430" y2="135" stroke="#1a1a1a" strokeWidth="2" />
        
        {/* Unit to Integration */}
        <line x1="494" y1="135" x2="542" y2="135" stroke="#1a1a1a" strokeWidth="2" />
        
        {/* Integration to Review - with arrow */}
        <line x1="606" y1="135" x2="693" y2="135" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Review to Staging */}
        <line x1="765" y1="135" x2="813" y2="135" stroke="#1a1a1a" strokeWidth="2" />
        
        {/* Staging to Production */}
        <line x1="877" y1="135" x2="925" y2="135" stroke="#1a1a1a" strokeWidth="2" />

        {/* Vertical Lines */}
        {/* Commit down to Related path junction */}
        <line x1="223" y1="167" x2="223" y2="210" stroke="#1a1a1a" strokeWidth="2" />
        
        {/* Staging down to Monitor */}
        <line x1="845" y1="167" x2="845" y2="193" stroke="#1a1a1a" strokeWidth="2" />

        {/* Production down and left to Monitor */}
        <line x1="957" y1="167" x2="957" y2="225" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="877" y1="225" x2="957" y2="225" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Curved Dashed Lines */}
        {/* Related to Code feedback loop - goes left and up */}
        <path
          d="M 113 193 L 113 60 L 50 60 L 50 135 L 73 135"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeDasharray="6,4"
          markerEnd="url(#arrowhead)"
        />

        {/* Commit down to Related horizontal connector */}
        <line x1="148" y1="210" x2="223" y2="210" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#arrowhead)" />

        {/* Monitor feedback to Build - goes left across bottom */}
        <path
          d="M 813 225 L 270 225 L 270 60 L 350 60 L 350 103"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeDasharray="6,4"
          markerEnd="url(#arrowhead)"
        />

        {/* All Nodes */}
        <CircleNode node={nodes.code} isHovered={hoveredNode === 'code'} onHover={setHoveredNode} x={nodes.code.x} y={nodes.code.y} />
        <CircleNode node={nodes.commit} isHovered={hoveredNode === 'commit'} onHover={setHoveredNode} x={nodes.commit.x} y={nodes.commit.y} />
        <CircleNode node={nodes.related} isHovered={hoveredNode === 'related'} onHover={setHoveredNode} x={nodes.related.x} y={nodes.related.y} />
        <CircleNode node={nodes.build} isHovered={hoveredNode === 'build'} onHover={setHoveredNode} x={nodes.build.x} y={nodes.build.y} />
        <CircleNode node={nodes.unit} isHovered={hoveredNode === 'unit'} onHover={setHoveredNode} x={nodes.unit.x} y={nodes.unit.y} />
        <CircleNode node={nodes.integration} isHovered={hoveredNode === 'integration'} onHover={setHoveredNode} x={nodes.integration.x} y={nodes.integration.y} />
        <CircleNode node={nodes.review} isHovered={hoveredNode === 'review'} onHover={setHoveredNode} x={nodes.review.x} y={nodes.review.y} />
        <CircleNode node={nodes.staging} isHovered={hoveredNode === 'staging'} onHover={setHoveredNode} x={nodes.staging.x} y={nodes.staging.y} />
        <CircleNode node={nodes.production} isHovered={hoveredNode === 'production'} onHover={setHoveredNode} x={nodes.production.x} y={nodes.production.y} />
        <CircleNode node={nodes.monitor} isHovered={hoveredNode === 'monitor'} onHover={setHoveredNode} x={nodes.monitor.x} y={nodes.monitor.y} />
      </svg>
    </div>
  );
}