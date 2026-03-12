'use client'

import { useState } from 'react'
import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'esc-scd', label: 'ESC SCD Risk' },
  { id: 'aha-scd', label: 'AHA/MRI SCD' },
  { id: 'lvot', label: 'LVOT Obstruction' },
  { id: 'septal', label: 'Septal Reduction' },
  { id: 'af', label: 'AF / Anticoag' },
  { id: 'advanced-hf', label: 'Advanced HF' },
  { id: 'genotype', label: 'G+/P− Follow-up' },
]

/* ──────────────────────────────────────────────
   ESC HCM Risk-SCD Calculator
   Published equation: O'Mahony C et al. Eur Heart J 2014;35:2010-20
   5-year risk = 1 − 0.998^exp(prognostic index)
   ────────────────────────────────────────────── */
function ESCSCDCalculator() {
  const [age, setAge] = useState('')
  const [maxWT, setMaxWT] = useState('')
  const [laDiam, setLaDiam] = useState('')
  const [maxGrad, setMaxGrad] = useState('')
  const [fhSCD, setFhSCD] = useState(false)
  const [nsvt, setNsvt] = useState(false)
  const [syncope, setSyncope] = useState(false)
  const [result, setResult] = useState<{ risk: number; category: string } | null>(null)

  const calculate = () => {
    const a = parseFloat(age)
    const wt = parseFloat(maxWT)
    const la = parseFloat(laDiam)
    const grad = parseFloat(maxGrad)
    if (isNaN(a) || isNaN(wt) || isNaN(la) || isNaN(grad)) return

    const pi =
      0.15939858 * wt -
      0.00294271 * wt * wt +
      0.0259082 * la +
      0.00446131 * grad +
      0.4583082 * (fhSCD ? 1 : 0) +
      0.82639195 * (nsvt ? 1 : 0) +
      0.71650361 * (syncope ? 1 : 0) -
      0.01799934 * a

    const risk5yr = (1 - Math.pow(0.998, Math.exp(pi))) * 100
    let category = 'Low risk (<4%)'
    if (risk5yr >= 6) category = 'High risk (≥6%) — ICD should be considered'
    else if (risk5yr >= 4) category = 'Intermediate risk (4–<6%) — ICD may be considered'

    setResult({ risk: Math.round(risk5yr * 100) / 100, category })
  }

  const reset = () => {
    setAge(''); setMaxWT(''); setLaDiam(''); setMaxGrad('')
    setFhSCD(false); setNsvt(false); setSyncope(false); setResult(null)
  }

  return (
    <div className="space-y-4">
      <div className="card border-l-4 border-primary">
        <h2 className="card-header">ESC HCM Risk-SCD 5-Year Calculator</h2>
        <p className="text-xs text-gray-500 mb-3">
          O&apos;Mahony C et al. <em>Eur Heart J</em> 2014;35:2010-20. Validated for ages 16–80. Endorsed by 2014 ESC HCM Guidelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} className="input-field" placeholder="16–80" min="16" max="80" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max LV wall thickness (mm)</label>
            <input type="number" value={maxWT} onChange={e => setMaxWT(e.target.value)} className="input-field" placeholder="e.g. 22" min="0" max="60" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LA diameter (mm)</label>
            <input type="number" value={laDiam} onChange={e => setLaDiam(e.target.value)} className="input-field" placeholder="e.g. 42" min="0" max="80" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max LVOT gradient (mmHg)</label>
            <input type="number" value={maxGrad} onChange={e => setMaxGrad(e.target.value)} className="input-field" placeholder="Resting or provoked" min="0" max="200" />
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={fhSCD} onChange={e => setFhSCD(e.target.checked)} className="rounded border-gray-300" />
            Family history of SCD (≥1 first-degree relative, ≤50 years, attributed to HCM)
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={nsvt} onChange={e => setNsvt(e.target.checked)} className="rounded border-gray-300" />
            NSVT (≥3 beats at ≥120 bpm on ambulatory monitoring)
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={syncope} onChange={e => setSyncope(e.target.checked)} className="rounded border-gray-300" />
            Unexplained syncope (≥1 episode, unlikely neurocardiogenic)
          </label>
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={calculate} className="btn-primary">Calculate 5-Year Risk</button>
          <button onClick={reset} className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">Reset</button>
        </div>

        {result && (
          <div className={`mt-4 p-4 rounded-lg border-2 ${result.risk >= 6 ? 'bg-red-50 border-red-300' : result.risk >= 4 ? 'bg-yellow-50 border-yellow-300' : 'bg-green-50 border-green-300'}`}>
            <p className="text-2xl font-bold">{result.risk}%</p>
            <p className="text-sm font-medium mt-1">{result.category}</p>
          </div>
        )}
      </div>

      <div className="card">
        <h3 className="font-semibold text-sm text-gray-800 mb-2">Interpretation (ESC Thresholds)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <div className="p-2 bg-green-50 rounded border border-green-200"><strong>&lt;4%</strong> — Low risk. ICD generally not indicated.</div>
          <div className="p-2 bg-yellow-50 rounded border border-yellow-200"><strong>4–&lt;6%</strong> — Intermediate. ICD may be considered (Class 2b).</div>
          <div className="p-2 bg-red-50 rounded border border-red-200"><strong>≥6%</strong> — High risk. ICD should be considered (Class 2a).</div>
        </div>
        <p className="text-xs text-gray-500 mt-2">This calculator implements the published ESC equation. It does not incorporate CMR/LGE data. Use alongside clinical judgment — not as the sole basis for ICD decisions.</p>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   AHA/ACC MRI-Enhanced SCD Risk Assessment
   Structured decision aid — no single published equation
   ────────────────────────────────────────────── */
function AHASCDAssessment() {
  const [markers, setMarkers] = useState({
    priorArrest: false,
    familySCD: false,
    massiveLVH: false,
    apicalAneurysm: false,
    nsvt: false,
    extensiveLGE: false,
    lowEF: false,
    syncope: false,
  })

  const toggle = (key: keyof typeof markers) => setMarkers(prev => ({ ...prev, [key]: !prev[key] }))

  const count = Object.values(markers).filter(Boolean).length
  const hasSecondary = markers.priorArrest

  const markerDefs = [
    { key: 'priorArrest' as const, label: 'Prior cardiac arrest, sustained VT, or VF', secondary: true },
    { key: 'familySCD' as const, label: 'Family history of HCM-related SCD (first-degree, ≤50 yrs)' },
    { key: 'massiveLVH' as const, label: 'Massive LVH (wall thickness ≥30 mm)' },
    { key: 'apicalAneurysm' as const, label: 'LV apical aneurysm' },
    { key: 'nsvt' as const, label: 'Multiple/prolonged NSVT episodes' },
    { key: 'extensiveLGE' as const, label: 'Extensive LGE on CMR (≥15% of LV mass)' },
    { key: 'lowEF' as const, label: 'LVEF <50%' },
    { key: 'syncope' as const, label: 'Unexplained syncope' },
  ]

  return (
    <div className="space-y-4">
      <div className="card border-l-4 border-primary">
        <h2 className="card-header">AHA/ACC SCD Risk Assessment (MRI-Enhanced)</h2>
        <p className="text-xs text-gray-500 mb-3">
          2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline, Section 7 — Table 8 risk markers plus CMR/LGE.
          Uses a qualitative, marker-counting approach (more sensitive than ESC quantitative model).
        </p>

        <div className="space-y-2">
          {markerDefs.map(m => (
            <label key={m.key} className={`flex items-center gap-2 text-sm p-2 rounded ${markers[m.key] ? (m.secondary ? 'bg-red-50' : 'bg-yellow-50') : 'bg-gray-50'}`}>
              <input type="checkbox" checked={markers[m.key]} onChange={() => toggle(m.key)} className="rounded border-gray-300" />
              {m.label}
              {m.secondary && <span className="badge-red text-[10px]">Secondary prevention</span>}
            </label>
          ))}
        </div>
      </div>

      <div className={`card border-l-4 ${hasSecondary ? 'border-red-500' : count >= 1 ? 'border-yellow-500' : 'border-green-500'}`}>
        <h3 className="font-semibold text-sm mb-2">Assessment Result</h3>
        {hasSecondary ? (
          <div className="p-3 bg-red-50 rounded border border-red-200">
            <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-EO</span></div>
            <p className="text-sm"><strong>ICD recommended</strong> — secondary prevention indication. Prior cardiac arrest or sustained VT/VF is the strongest predictor of future events.</p>
          </div>
        ) : count >= 2 ? (
          <div className="p-3 bg-red-50 rounded border border-red-200">
            <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
            <p className="text-sm"><strong>ICD recommended</strong> — {count} major risk markers present. Strong indication for primary prevention ICD with shared decision-making.</p>
          </div>
        ) : count === 1 ? (
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
            <p className="text-sm"><strong>ICD reasonable</strong> — 1 major risk marker. Consider 5-year risk estimate (ESC calculator) and patient preferences. CMR with LGE quantification can further inform the decision.</p>
          </div>
        ) : (
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <div className="flex items-center gap-2 mb-1"><span className="badge-red">Class 3: Harm</span><span className="badge-blue">LOE B-NR</span></div>
            <p className="text-sm"><strong>ICD not indicated</strong> — no risk markers. Reassess every 1–2 years. ICD should not be placed solely to enable competitive sport.</p>
          </div>
        )}
        <p className="text-xs text-gray-500 mt-2">The AHA/ACC approach is intentionally qualitative and does not produce a single numerical score. It emphasizes clinical judgment and shared decision-making over rigid thresholds.</p>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   LVOT Obstruction & Provocation Helper
   ────────────────────────────────────────────── */
function LVOTHelper() {
  const [restGrad, setRestGrad] = useState('')
  const [provokedGrad, setProvokedGrad] = useState('')
  const [symptoms, setSymptoms] = useState({
    dyspnea: false,
    angina: false,
    syncope: false,
    presyncope: false,
    limitedExercise: false,
  })
  const [provocationDone, setProvocationDone] = useState<string | null>(null)

  const rg = parseFloat(restGrad)
  const pg = parseFloat(provokedGrad)
  const maxGrad = Math.max(isNaN(rg) ? 0 : rg, isNaN(pg) ? 0 : pg)
  const hasSymptoms = Object.values(symptoms).some(Boolean)
  const toggleSx = (key: keyof typeof symptoms) => setSymptoms(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="space-y-4">
      <div className="card border-l-4 border-primary">
        <h2 className="card-header">LVOT Obstruction Assessment</h2>
        <p className="text-xs text-gray-500 mb-3">
          2024 AHA/ACC Guideline + Braunwald E, <em>NEJM</em> 2025;393:1004-15.
          ~70% of HCM patients have LVOT obstruction (resting or provocable). Dynamic gradients vary inversely with LV volume.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Resting LVOT gradient (mmHg)</label>
            <input type="number" value={restGrad} onChange={e => setRestGrad(e.target.value)} className="input-field" placeholder="e.g. 30" min="0" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Provoked LVOT gradient (mmHg)</label>
            <input type="number" value={provokedGrad} onChange={e => setProvokedGrad(e.target.value)} className="input-field" placeholder="After provocation" min="0" />
          </div>
        </div>

        <div className="mt-3">
          <p className="text-sm font-medium text-gray-700 mb-2">Provocation method used:</p>
          <div className="flex flex-wrap gap-2">
            {['Valsalva', 'Standing', 'Exercise (treadmill/bike)', 'Post-prandial', 'Amyl nitrite', 'Not yet done'].map(m => (
              <button key={m} onClick={() => setProvocationDone(m)} className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${provocationDone === m ? 'bg-primary text-white border-primary' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'}`}>{m}</button>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <p className="text-sm font-medium text-gray-700 mb-2">Symptoms present:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { key: 'dyspnea' as const, label: 'Exertional dyspnea' },
              { key: 'angina' as const, label: 'Chest pain / angina' },
              { key: 'syncope' as const, label: 'Syncope' },
              { key: 'presyncope' as const, label: 'Presyncope / dizziness' },
              { key: 'limitedExercise' as const, label: 'Exercise limitation' },
            ].map(s => (
              <label key={s.key} className="flex items-center gap-1.5 text-xs">
                <input type="checkbox" checked={symptoms[s.key]} onChange={() => toggleSx(s.key)} className="rounded border-gray-300" />
                {s.label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Interpretation */}
      <div className="card">
        <h3 className="font-semibold text-sm text-gray-800 mb-2">Classification & Guidance</h3>
        <div className="space-y-2">
          {!isNaN(rg) && rg < 30 && provocationDone === 'Not yet done' && (
            <div className="p-3 bg-amber-50 rounded border border-amber-300">
              <p className="text-sm"><strong>Provocation required.</strong> If resting gradient is &lt;50 mmHg, always provoke LVOT gradient (Valsalva, standing, exercise). Up to 70% of HCM patients have labile/provocable obstruction that is missed at rest.</p>
            </div>
          )}
          <div className={`p-3 rounded border ${maxGrad >= 50 ? 'bg-red-50 border-red-200' : maxGrad >= 30 ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'}`}>
            <p className="text-sm">
              <strong>Peak gradient: {maxGrad > 0 ? `${maxGrad} mmHg` : '—'}</strong>
              {maxGrad >= 50 && ' → Obstructive HCM (≥50 mmHg is the treatment threshold)'}
              {maxGrad >= 30 && maxGrad < 50 && ' → Borderline obstruction (30–49 mmHg). May benefit from provocation or repeat testing under different conditions.'}
              {maxGrad > 0 && maxGrad < 30 && ' → Non-obstructive (<30 mmHg at rest and provoked)'}
            </p>
          </div>
          {maxGrad >= 50 && hasSymptoms && (
            <div className="p-3 bg-blue-50 rounded border border-blue-200">
              <p className="text-sm"><strong>Symptomatic obstructive HCM → Treatment indicated.</strong> Start with beta-blockers or non-dihydropyridine CCBs. If refractory to medical therapy (NYHA III–IV), consider cardiac myosin inhibitors (mavacamten, aficamten) or septal reduction therapy.</p>
            </div>
          )}
          {maxGrad >= 50 && !hasSymptoms && (
            <div className="p-3 bg-gray-50 rounded border border-gray-200">
              <p className="text-sm"><strong>Obstructive but asymptomatic.</strong> Guideline-directed medical therapy may be considered. Monitor for symptom development. Exercise testing can unmask exercise limitation not perceived by the patient.</p>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold text-sm text-gray-800 mb-2">Key Provocation Reminders</h3>
        <ul className="text-xs text-gray-700 space-y-1">
          <li>• <strong>Valsalva maneuver:</strong> Most practical bedside test. Reduces preload → increases gradient.</li>
          <li>• <strong>Standing abruptly:</strong> Reduces venous return. Simple and reproducible.</li>
          <li>• <strong>Exercise (upright preferred):</strong> Most physiologic provocation. Supine exercise underestimates gradients.</li>
          <li>• <strong>Post-prandial:</strong> Splanchnic vasodilation can provoke obstruction. Consider if other methods equivocal.</li>
          <li>• <strong>Avoid dobutamine:</strong> Non-physiologic provocation — produces obstruction even in normal hearts. Not recommended for HCM.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-2">Source: 2024 AHA/ACC Guideline Section 6; Braunwald NEJM 2025.</p>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Septal Reduction Candidacy Helper
   ────────────────────────────────────────────── */
function SeptalReductionHelper() {
  const [criteria, setCriteria] = useState({
    gradient50: false,
    symptomatic: false,
    refractoryMeds: false,
    septum15: false,
    noSAM: false,
    suitableAnatomy: false,
    experienced: false,
    cmi: false,
  })

  const toggle = (key: keyof typeof criteria) => setCriteria(prev => ({ ...prev, [key]: !prev[key] }))

  const metCount = Object.entries(criteria).filter(([k, v]) => v && k !== 'cmi').length
  const candidate = criteria.gradient50 && criteria.symptomatic && criteria.refractoryMeds && criteria.septum15

  return (
    <div className="space-y-4">
      <div className="card border-l-4 border-primary">
        <h2 className="card-header">Septal Reduction Therapy (SRT) Candidacy</h2>
        <p className="text-xs text-gray-500 mb-3">
          2024 AHA/ACC Guideline Section 6.3 + Braunwald <em>NEJM</em> 2025. At experienced centers: 0.4% 30-day mortality, &gt;90% long-term symptomatic improvement.
        </p>

        <div className="space-y-2">
          {[
            { key: 'gradient50' as const, label: 'LVOT gradient ≥50 mmHg (resting or provoked)', required: true },
            { key: 'symptomatic' as const, label: 'Symptomatic (NYHA class II–IV dyspnea, angina, syncope/presyncope)', required: true },
            { key: 'refractoryMeds' as const, label: 'Refractory to maximally tolerated medical therapy', required: true },
            { key: 'septum15' as const, label: 'Basal septal thickness ≥15 mm (sufficient for myectomy)', required: true },
            { key: 'suitableAnatomy' as const, label: 'Suitable anatomy for SRT (confirmed by imaging team)' },
            { key: 'experienced' as const, label: 'Access to experienced center (≥20 myectomies/yr or ≥10 ASA/yr)' },
            { key: 'noSAM' as const, label: 'SAM of mitral valve identified as obstruction mechanism' },
            { key: 'cmi' as const, label: 'Cardiac myosin inhibitor (mavacamten/aficamten) tried or considered' },
          ].map(c => (
            <label key={c.key} className={`flex items-center gap-2 text-sm p-2 rounded ${criteria[c.key] ? 'bg-green-50' : 'bg-gray-50'}`}>
              <input type="checkbox" checked={criteria[c.key]} onChange={() => toggle(c.key)} className="rounded border-gray-300" />
              {c.label}
              {c.required && <span className="text-[10px] text-red-500 font-medium">Required</span>}
            </label>
          ))}
        </div>
      </div>

      <div className={`card border-l-4 ${candidate ? 'border-green-500' : 'border-gray-300'}`}>
        <h3 className="font-semibold text-sm mb-2">Candidacy Assessment</h3>
        {candidate ? (
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded border border-green-200">
              <p className="text-sm"><strong>Core criteria met for SRT.</strong> Patient meets the 4 required criteria for septal reduction therapy referral.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-800 text-xs mb-1">Surgical Myectomy</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Gold standard, preferred at experienced centers</li>
                  <li>• 0.4% 30-day mortality (experienced centers)</li>
                  <li>• &gt;90% long-term symptomatic improvement</li>
                  <li>• Can address concomitant mitral valve pathology</li>
                  <li>• Preferred if septal thickness &gt;25 mm</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-800 text-xs mb-1">Alcohol Septal Ablation (ASA)</h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Alternative when surgery contraindicated or patient preference</li>
                  <li>• Less invasive, shorter recovery</li>
                  <li>• Higher rate of permanent pacemaker (10–20%)</li>
                  <li>• Creates scar → potential arrhythmogenic substrate</li>
                  <li>• Less suitable for very thick septum or concomitant lesions</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-gray-50 rounded border border-gray-200">
            <p className="text-sm"><strong>{4 - [criteria.gradient50, criteria.symptomatic, criteria.refractoryMeds, criteria.septum15].filter(Boolean).length} of 4 core criteria not yet met.</strong></p>
            <p className="text-xs text-gray-500 mt-1">All 4 required criteria (gradient ≥50 mmHg, symptoms, refractory to meds, adequate septal thickness) must be present before SRT referral. Consider cardiac myosin inhibitors as an intermediate step before invasive therapy.</p>
          </div>
        )}
        {criteria.cmi && (
          <div className="mt-3 p-3 bg-amber-50 rounded border border-amber-200">
            <p className="text-xs"><strong>Cardiac myosin inhibitors (CMIs):</strong> Mavacamten and aficamten represent a paradigm shift — they reduce LVOT gradients by ~50 mmHg on average. Some patients who were SRT candidates become asymptomatic on CMI therapy alone. CMIs may delay or obviate the need for SRT, but long-term durability data are still emerging.</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   AF / Anticoagulation Decision Aid
   ────────────────────────────────────────────── */
function AFAnticoagAid() {
  const [afPresent, setAfPresent] = useState<boolean | null>(null)
  const [afType, setAfType] = useState('')
  const [anticoag, setAnticoag] = useState({
    cha2ds2: false,
    bleeding: false,
    doac: false,
    warfarin: false,
    mechanical: false,
  })

  return (
    <div className="space-y-4">
      <div className="card border-l-4 border-red-500">
        <h2 className="card-header">AF & Anticoagulation in HCM</h2>
        <p className="text-xs text-gray-500 mb-1">
          2024 AHA/ACC Guideline Section 8. Key principle: <strong>All HCM patients with AF require anticoagulation regardless of CHA₂DS₂-VASc score.</strong>
        </p>
        <p className="text-xs text-gray-500 mb-3">
          Braunwald <em>NEJM</em> 2025: AF in HCM carries 8× higher stroke risk than AF alone.
        </p>

        <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300 mb-4">
          <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
          <p className="text-sm font-medium text-red-900">HCM + AF (paroxysmal, persistent, or permanent) → Anticoagulate. CHA₂DS₂-VASc score does NOT determine need — only HCM diagnosis + AF.</p>
        </div>

        <div className="mb-3">
          <p className="text-sm font-medium text-gray-700 mb-2">Does this patient have AF?</p>
          <div className="flex gap-2">
            <button onClick={() => setAfPresent(true)} className={`px-4 py-2 text-sm rounded-lg border transition-colors ${afPresent === true ? 'bg-red-100 border-red-400 font-semibold' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'}`}>Yes</button>
            <button onClick={() => setAfPresent(false)} className={`px-4 py-2 text-sm rounded-lg border transition-colors ${afPresent === false ? 'bg-green-100 border-green-400 font-semibold' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'}`}>No</button>
            <button onClick={() => setAfPresent(null)} className={`px-4 py-2 text-sm rounded-lg border transition-colors ${afPresent === null ? 'bg-gray-100 border-gray-400' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'}`}>Unknown</button>
          </div>
        </div>

        {afPresent === true && (
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">AF type:</p>
              <div className="flex flex-wrap gap-2">
                {['Paroxysmal', 'Persistent', 'Permanent', 'Unknown'].map(t => (
                  <button key={t} onClick={() => setAfType(t)} className={`text-xs px-3 py-1.5 rounded-full border ${afType === t ? 'bg-primary text-white border-primary' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'}`}>{t}</button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded border border-blue-200">
              <h3 className="font-semibold text-blue-800 text-sm mb-1">Anticoagulation Guidance</h3>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2"><span className="badge-green text-[10px]">Class 1</span><strong>DOACs preferred</strong> over warfarin for non-valvular AF in HCM (better safety profile, no INR monitoring).</div>
                <div className="flex items-center gap-2"><span className="badge-green text-[10px]">Class 1</span><strong>Warfarin</strong> if mechanical valve or significant mitral stenosis.</div>
                <div className="flex items-center gap-2"><span className="badge-yellow text-[10px]">Class 2a</span><strong>Rate control</strong> with beta-blockers preferred. Non-DHP CCBs second-line. Avoid digoxin monotherapy for rate control.</div>
                <div className="flex items-center gap-2"><span className="badge-yellow text-[10px]">Class 2a</span><strong>Rhythm control</strong> — amiodarone, disopyramide, or catheter ablation (at experienced centers) can be considered.</div>
              </div>
            </div>
          </div>
        )}

        {afPresent === false && (
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <h3 className="font-semibold text-green-800 text-sm mb-1">No AF Detected</h3>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• <strong>Screen regularly:</strong> AF incidence in HCM is ~2% per year; lifetime prevalence reaches ~20–25%.</li>
              <li>• <strong>Consider ambulatory monitoring</strong> if unexplained symptoms, palpitations, or stroke.</li>
              <li>• <strong>LA size &gt;45 mm</strong> is associated with higher AF risk — consider more frequent screening.</li>
            </ul>
          </div>
        )}

        {afPresent === null && (
          <div className="p-3 bg-amber-50 rounded border border-amber-200">
            <p className="text-xs text-gray-700"><strong>Recommend screening:</strong> 48-hour Holter or extended ambulatory monitoring. AF in HCM is often asymptomatic and carries major stroke risk even in paroxysmal form.</p>
          </div>
        )}
      </div>

      <div className="card">
        <h3 className="font-semibold text-sm text-gray-800 mb-2">Common Pitfall</h3>
        <div className="p-3 bg-amber-50 rounded border border-amber-200">
          <p className="text-sm"><strong>Do NOT use CHA₂DS₂-VASc alone.</strong> Unlike general AF, HCM-associated AF requires anticoagulation regardless of score. A young HCM patient with AF and CHA₂DS₂-VASc of 0 still needs anticoagulation.</p>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Advanced HF / Transplant Red-Flag Tool
   ────────────────────────────────────────────── */
function AdvancedHFTool() {
  const [flags, setFlags] = useState({
    efBelow50: false,
    nyha34: false,
    recurrentAdmissions: false,
    refractory: false,
    restrictive: false,
    vo2below14: false,
    progressiveDecline: false,
    arrhythmiaBurden: false,
    youngOnset: false,
  })

  const toggle = (key: keyof typeof flags) => setFlags(prev => ({ ...prev, [key]: !prev[key] }))
  const count = Object.values(flags).filter(Boolean).length

  const flagDefs = [
    { key: 'efBelow50' as const, label: 'LVEF <50% (end-stage / burnt-out HCM)', critical: true },
    { key: 'nyha34' as const, label: 'NYHA class III–IV despite optimal therapy', critical: true },
    { key: 'recurrentAdmissions' as const, label: 'Recurrent HF hospitalizations (≥2 in past year)' },
    { key: 'refractory' as const, label: 'Refractory to medical therapy including CMIs' },
    { key: 'restrictive' as const, label: 'Restrictive physiology (elevated filling pressures, small LV cavity)' },
    { key: 'vo2below14' as const, label: 'Peak VO₂ <14 mL/kg/min on CPET' },
    { key: 'progressiveDecline' as const, label: 'Progressive functional decline over 6–12 months' },
    { key: 'arrhythmiaBurden' as const, label: 'Refractory ventricular arrhythmias despite ICD + antiarrhythmics' },
    { key: 'youngOnset' as const, label: 'Childhood-onset HCM (higher lifetime HF risk per SHaRe registry)' },
  ]

  return (
    <div className="space-y-4">
      <div className="card border-l-4 border-danger">
        <h2 className="card-header">Advanced HF & Transplant Red Flags</h2>
        <p className="text-xs text-gray-500 mb-3">
          2024 AHA/ACC Guideline Section 6.4 + Braunwald <em>NEJM</em> 2025. 6–8% of HCM patients develop end-stage (&ldquo;burnt-out&rdquo;) disease with LVEF &lt;50%.
          In HCM, EF &lt;50% represents severe dysfunction (equivalent to EF 35–40% in non-HCM).
        </p>

        <div className="space-y-2">
          {flagDefs.map(f => (
            <label key={f.key} className={`flex items-center gap-2 text-sm p-2 rounded ${flags[f.key] ? 'bg-red-50' : 'bg-gray-50'}`}>
              <input type="checkbox" checked={flags[f.key]} onChange={() => toggle(f.key)} className="rounded border-gray-300" />
              {f.label}
              {f.critical && <span className="text-[10px] text-red-600 font-medium">Key</span>}
            </label>
          ))}
        </div>
      </div>

      <div className={`card border-l-4 ${count >= 3 ? 'border-red-500' : count >= 1 ? 'border-yellow-500' : 'border-green-500'}`}>
        <h3 className="font-semibold text-sm mb-2">Assessment — {count} Red Flag{count !== 1 ? 's' : ''}</h3>
        {count >= 3 ? (
          <div className="p-3 bg-red-50 rounded border border-red-200">
            <p className="text-sm"><strong>Multiple advanced HF red flags present.</strong> Strongly consider referral to an advanced HF / transplant center. HCM patients referred for transplant have ~80% 5-year post-transplant survival. LVAD may serve as bridge-to-transplant but outcomes in HCM are less well-studied than in dilated cardiomyopathy.</p>
          </div>
        ) : count >= 1 ? (
          <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
            <p className="text-sm"><strong>Some concerning features.</strong> Optimize guideline-directed medical therapy. Ensure patient is at an HCM center of excellence. Consider CPET if not done. Close follow-up with interval reassessment of EF and functional capacity.</p>
          </div>
        ) : (
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <p className="text-sm"><strong>No advanced HF red flags.</strong> Continue standard HCM management with routine surveillance.</p>
          </div>
        )}
        <p className="text-xs text-gray-500 mt-2">This is a structured decision aid — not a validated risk score. Clinical judgment and specialist consultation should guide transplant evaluation.</p>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Genotype-Positive / Phenotype-Negative Follow-up
   ────────────────────────────────────────────── */
function GenotypePNHelper() {
  const [patient, setPatient] = useState({
    age: '',
    gene: '',
    familyHistory: false,
    anyLVH: false,
    ecgAbnormal: false,
    symptoms: false,
    athlete: false,
  })

  const update = (key: string, value: string | boolean) => setPatient(prev => ({ ...prev, [key]: value }))
  const ageNum = parseInt(patient.age)
  const isChild = !isNaN(ageNum) && ageNum < 18
  const hasConversion = patient.anyLVH || patient.ecgAbnormal || patient.symptoms

  return (
    <div className="space-y-4">
      <div className="card border-l-4 border-indigo-500">
        <h2 className="card-header">G+/P− Follow-up Planner</h2>
        <p className="text-xs text-gray-500 mb-3">
          2024 AHA/ACC Guideline Section 4.3. Gene-positive / phenotype-negative individuals require structured longitudinal surveillance for phenotypic conversion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Patient age (years)</label>
            <input type="number" value={patient.age} onChange={e => update('age', e.target.value)} className="input-field" placeholder="e.g. 25" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gene variant identified</label>
            <select value={patient.gene} onChange={e => update('gene', e.target.value)} className="input-field">
              <option value="">Select...</option>
              <option value="MYBPC3">MYBPC3 (~45% of cases)</option>
              <option value="MYH7">MYH7 (~35% of cases)</option>
              <option value="TNNT2">TNNT2</option>
              <option value="TNNI3">TNNI3</option>
              <option value="TPM1">TPM1</option>
              <option value="MYL2">MYL2</option>
              <option value="MYL3">MYL3</option>
              <option value="ACTC1">ACTC1</option>
              <option value="other">Other sarcomeric gene</option>
            </select>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            { key: 'familyHistory', label: 'Family history of SCD or severe HCM phenotype' },
            { key: 'anyLVH', label: 'Any LVH on imaging (even borderline)' },
            { key: 'ecgAbnormal', label: 'ECG abnormalities (repolarization changes, voltage criteria)' },
            { key: 'symptoms', label: 'Any cardiac symptoms (palpitations, dyspnea, presyncope)' },
            { key: 'athlete', label: 'Competitive athlete' },
          ].map(c => (
            <label key={c.key} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={patient[c.key as keyof typeof patient] as boolean} onChange={e => update(c.key, e.target.checked)} className="rounded border-gray-300" />
              {c.label}
            </label>
          ))}
        </div>
      </div>

      <div className="card border-l-4 border-indigo-400">
        <h3 className="font-semibold text-sm mb-2">Recommended Surveillance Plan</h3>

        {hasConversion ? (
          <div className="p-3 bg-amber-50 rounded border border-amber-200 mb-3">
            <p className="text-sm"><strong>Possible early phenotypic conversion.</strong> If LVH, ECG changes, or symptoms are present, this patient may no longer be truly phenotype-negative. Full HCM evaluation recommended rather than surveillance-only approach.</p>
          </div>
        ) : null}

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="py-2 px-2 text-left">Test</th>
                <th className="py-2 px-2 text-left">Frequency</th>
                <th className="py-2 px-2 text-left">Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-2 px-2 font-medium">Echocardiography</td>
                <td className="py-2 px-2">{isChild ? 'Every 1–2 years' : 'Every 3–5 years'}</td>
                <td className="py-2 px-2">Detect new LVH, SAM onset, diastolic dysfunction</td>
              </tr>
              <tr>
                <td className="py-2 px-2 font-medium">12-lead ECG</td>
                <td className="py-2 px-2">{isChild ? 'Every 1–2 years' : 'Every 3–5 years'}</td>
                <td className="py-2 px-2">ECG changes may precede structural phenotype</td>
              </tr>
              <tr>
                <td className="py-2 px-2 font-medium">Clinical assessment</td>
                <td className="py-2 px-2">{isChild ? 'Every 1–2 years' : 'Every 3–5 years'}</td>
                <td className="py-2 px-2">Symptom screen, family history update</td>
              </tr>
              {patient.familyHistory && (
                <tr className="bg-amber-50">
                  <td className="py-2 px-2 font-medium">Ambulatory ECG</td>
                  <td className="py-2 px-2">As clinically indicated</td>
                  <td className="py-2 px-2">Family history of SCD warrants heightened vigilance</td>
                </tr>
              )}
              {patient.athlete && (
                <tr className="bg-blue-50">
                  <td className="py-2 px-2 font-medium">Exercise stress test</td>
                  <td className="py-2 px-2">Annually</td>
                  <td className="py-2 px-2">Athletes may need more frequent monitoring</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-3 p-3 bg-gray-50 rounded border border-gray-200">
          <h4 className="font-semibold text-xs text-gray-800 mb-1">Key Points</h4>
          <ul className="text-xs text-gray-700 space-y-1">
            <li>• <strong>Children/adolescents (age &lt;18):</strong> More frequent surveillance (every 1–2 years) due to higher phenotypic conversion rates during growth.</li>
            <li>• <strong>Adults:</strong> Surveillance every 3–5 years unless new symptoms or findings emerge.</li>
            <li>• <strong>MYBPC3 carriers:</strong> Later onset phenotype is common — lifelong surveillance needed even if phenotype-negative in youth.</li>
            <li>• <strong>Phenotypic conversion:</strong> Can occur at any age. ~30–50% of G+/P− individuals develop HCM over their lifetime.</li>
            <li>• <strong>Cascade screening:</strong> Offer genetic testing to all first-degree relatives if a pathogenic variant is identified.</li>
          </ul>
        </div>
        <p className="text-xs text-gray-500 mt-2">Source: 2024 AHA/ACC Guideline Section 4.3 (Genetic Testing & Counseling).</p>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Main Calculator Page
   ────────────────────────────────────────────── */
export default function CalculatorPage() {
  const { calculatorTab, setCalculatorTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">HCM Calculator & Decision Aids</h1>
      <p className="text-sm text-gray-600 mb-4">Interactive clinical tools — select a calculator below</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setCalculatorTab(t.id)}
            className={`tab-btn ${calculatorTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {calculatorTab === 'esc-scd' && <ESCSCDCalculator />}
      {calculatorTab === 'aha-scd' && <AHASCDAssessment />}
      {calculatorTab === 'lvot' && <LVOTHelper />}
      {calculatorTab === 'septal' && <SeptalReductionHelper />}
      {calculatorTab === 'af' && <AFAnticoagAid />}
      {calculatorTab === 'advanced-hf' && <AdvancedHFTool />}
      {calculatorTab === 'genotype' && <GenotypePNHelper />}
    </div>
  )
}
