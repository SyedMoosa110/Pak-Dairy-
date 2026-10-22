export default function ClawIcon({ progress = 100, className = "" }: { progress?: number; className?: string }) {
  const draw = Math.min(1, progress / 50);
  const y = 100 - progress;
  const d = ["M16 14h48v26q0 12-12 12H28q-12 0-12-12z", "M24 52v28", "M36 52v34", "M44 52v34", "M56 52v28"];
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none" aria-hidden>
      <defs><clipPath id="milk"><g transform={`translate(0 ${y})`}>
        <path d="M-80 0q10-5 20 0t20 0 20 0 20 0 20 0 20 0 20 0 20 0V120H-80z" style={{ animation: "wave 1.4s linear infinite" }} />
      </g></clipPath></defs>
      <style>{`@keyframes wave{to{transform:translateX(-40px)}}`}</style>
      <g clipPath="url(#milk)" fill="#F8FAF8" stroke="#F8FAF8" strokeWidth="5" strokeLinecap="round">{d.map((p) => <path key={p} d={p} />)}</g>
      <g stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {d.map((p) => <path key={p} d={p} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />)}</g>
    </svg>);
}
