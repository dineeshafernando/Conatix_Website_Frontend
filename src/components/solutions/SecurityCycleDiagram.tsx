export default function SecurityCycleDiagram() {
  const stageText = "fill-electric-blue stroke-electric-blue font-bungee-hairline tracking-wide uppercase";
  const circleStroke = "stroke-dark-grey";

  return (
    <svg
      viewBox="0 0 1000 480"
      className="w-full h-auto"
      role="img"
      aria-label="Security lifecycle: Detection is central, reached from Prediction and Prevention above, and followed by Investigation (skipping straight past Mitigation) and Retaliation below."
    >
      <defs>
        <marker
          id="cycle-arrowhead"
          markerUnits="userSpaceOnUse"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="22"
          markerHeight="22"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" className="fill-electric-blue" />
        </marker>
      </defs>

      {/* Top arrow: Detection -> Prevention (clear gap at both ends) */}
      <path
        d="M 403 131 C 380 50, 295 30, 258 105"
        className="stroke-electric-blue"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
        markerEnd="url(#cycle-arrowhead)"
      />

      {/* Bottom arrow: Detection -> Investigation (clear gap at both ends) */}
      <path
        d="M 557 329 C 580 410, 665 430, 687 385"
        className="stroke-electric-blue"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
        markerEnd="url(#cycle-arrowhead)"
      />

      {/* Prediction */}
      <text x="15" y="68" fontSize="24" className={stageText} strokeWidth="1.6">
        PREDICTION
      </text>

      {/* Prevention (circled) */}
      <ellipse cx="150" cy="130" rx="115" ry="30" fill="none" strokeWidth="6" className={circleStroke} />
      <text x="150" y="130" fontSize="24" textAnchor="middle" dominantBaseline="central" className={stageText} strokeWidth="1.6">
        PREVENTION
      </text>

      {/* Detection (circled) */}
      <ellipse cx="480" cy="230" rx="195" ry="75" fill="none" strokeWidth="8" className={circleStroke} />
      <text x="480" y="230" fontSize="44" textAnchor="middle" dominantBaseline="central" className={stageText} strokeWidth="1.6">
        DETECTION
      </text>

      {/* Mitigation */}
      <text x="655" y="298" fontSize="24" className={stageText} strokeWidth="1.6">
        MITIGATION
      </text>

      {/* Investigation (circled) */}
      <ellipse cx="790" cy="352" rx="140" ry="30" fill="none" strokeWidth="6" className={circleStroke} />
      <text x="790" y="352" fontSize="24" textAnchor="middle" dominantBaseline="central" className={stageText} strokeWidth="1.6">
        INVESTIGATION
      </text>

      {/* Retaliation? */}
      <text x="770" y="422" fontSize="24" className={stageText} strokeWidth="1.6">
        RETALIATION?
      </text>
    </svg>
  );
}
