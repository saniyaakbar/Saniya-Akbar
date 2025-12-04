export default function Experiment(){
  return (
    <section className="card">
      <h2>A/B Test & Prioritization</h2>
      <h3>A/B Test — CTA Placement</h3>
      <p style={{color:'#6b7280'}}>Hypothesis: CTA above-the-fold increases onboarding completion.</p>

      <h3>Variants</h3>
      <ul style={{color:'#6b7280'}}>
        <li>Variant A: Bottom CTA</li>
        <li>Variant B: Top CTA + animation</li>
      </ul>

      <h3>RICE Example</h3>
      <p style={{color:'#6b7280'}}>Sample dataset feature — Reach: Medium, Impact: High, Confidence: High, Effort: Medium → RICE score 72</p>
    </section>
  )
}
