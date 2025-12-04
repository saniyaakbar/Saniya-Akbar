export default function PRDPage(){
  return (
    <section className="card">
      <h2>PRD — Redesigning User Onboarding</h2>
      <p style={{color:'#6b7280'}}>Problem: New users struggle to locate core features leading to low activation and high support volume.</p>

      <h3>Goals & Metrics</h3>
      <ul style={{color:'#6b7280'}}>
        <li>Onboarding completion → 80%</li>
        <li>First-session feature adoption → +30%</li>
        <li>Navigation support tickets → −25%</li>
      </ul>

      <h3>Personas</h3>
      <ul style={{color:'#6b7280'}}>
        <li>Data Analyst (Beginner)</li>
        <li>Operations Manager</li>
        <li>Product Manager</li>
      </ul>

      <h3>Solution</h3>
      <ol style={{color:'#6b7280'}}>
        <li>3-step interactive walkthrough</li>
        <li>Tooltip overlays</li>
        <li>Sample dataset</li>
      </ol>
    </section>
  )
}
