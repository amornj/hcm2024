'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'adult', label: 'Adult Risk' },
  { id: 'pediatric', label: 'Pediatric Risk' },
  { id: 'icd', label: 'ICD Selection' },
  { id: 'device', label: 'Device Considerations' },
]

export default function SCDRiskPage() {
  const { scdRiskTab, setScdRiskTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">SCD Risk Assessment & Prevention</h1>
      <p className="text-sm text-gray-600 mb-4">Section 7 — 2024 HCM Guideline</p>

      <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setScdRiskTab(t.id)}
            className={`tab-btn whitespace-nowrap ${scdRiskTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {scdRiskTab === 'adult' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-yellow-500">
            <h2 className="card-header">7.1.1 SCD Risk Assessment in Adults With HCM</h2>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Comprehensive, systematic noninvasive SCD risk assessment</strong> at initial evaluation and every 1–2 years thereafter, including evaluation of:</p>
                <ul className="text-sm text-gray-700 mt-1 space-y-1 ml-4">
                  <li>a. Personal history of cardiac arrest or sustained ventricular arrhythmias</li>
                  <li>b. Personal history of syncope suspected to be arrhythmic</li>
                  <li>c. Family history of premature HCM-related SCD, cardiac arrest, or sustained VT</li>
                  <li>d. Maximal LV wall thickness, EF, LV apical aneurysm</li>
                  <li>e. NSVT episodes on ambulatory monitoring</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>CMR imaging beneficial</strong> when ICD decision remains uncertain — assess max LV wall thickness, EF, LV apical aneurysm, and extent of myocardial fibrosis with LGE.</p>
              </div>

              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>5-year SCD risk estimate</strong> — for patients ≥16 years with ≥1 major risk factor, echo-derived left atrial diameter and maximal LVOT gradient may be useful for shared decision-making about ICD placement.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Table 8 — Clinical SCD Risk Factors (Adults & Children)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2 px-2 text-left">Risk Factor</th>
                    <th className="py-2 px-2 text-left">Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-2 font-medium">Family history of SCD</td><td className="py-2 px-2">Sudden death in ≥1 first-degree or close relative ≤50 years of age, attributed to HCM</td></tr>
                  <tr><td className="py-2 px-2 font-medium">Massive LVH</td><td className="py-2 px-2">Wall thickness ≥30 mm in any segment (≥28 mm at discretion of clinician); pediatric: z-score ≥20</td></tr>
                  <tr><td className="py-2 px-2 font-medium">Unexplained syncope</td><td className="py-2 px-2">≥1 unexplained episodes, unlikely to be neurocardiogenic, not attributable to LVOTO, especially within 6 months</td></tr>
                  <tr><td className="py-2 px-2 font-medium">LV systolic dysfunction</td><td className="py-2 px-2">EF &lt;50% by echo or CMR</td></tr>
                  <tr><td className="py-2 px-2 font-medium">LV apical aneurysm</td><td className="py-2 px-2">Discrete thin-walled dyskinetic/akinetic segment with transmural scar or LGE at the most distal portion of LV</td></tr>
                  <tr><td className="py-2 px-2 font-medium">Extensive LGE on CMR</td><td className="py-2 px-2">Replacement fibrosis ≥15% of LV mass (extent conferring risk not defined in children)</td></tr>
                  <tr><td className="py-2 px-2 font-medium">NSVT on ambulatory monitor</td><td className="py-2 px-2">≥3 beats at ≥120 bpm; more weight to frequent, longer (≥10 beats), or faster (≥200 bpm) runs; pediatric: VT rate &gt;20% above sinus</td></tr>
                  <tr><td className="py-2 px-2 font-medium">Genotype status</td><td className="py-2 px-2">Harboring a pathogenic/likely pathogenic variant — associated with higher SCD risk in pediatric patients</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {scdRiskTab === 'pediatric' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-orange-500">
            <h2 className="card-header">7.1.2 SCD Risk Assessment in Children & Adolescents</h2>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Comprehensive SCD risk assessment</strong> at initial evaluation and every 1–2 years, with the same risk factors as adults plus age-specific considerations.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>CMR imaging beneficial</strong> for children with borderline SCD risk or uncertain ICD decision — assess extent of LGE.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Estimated 5-year SCD risk</strong> for patients &lt;16 years — uses echocardiographic parameters (IVS thickness in diastole, LV posterior wall in end-diastole, left atrial diameter, maximal LVOT gradient) and genotype status.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-800 text-sm">Pediatric-Specific Considerations</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Adult risk factors have limited ability to predict SCD in children</li>
                <li>• Two pediatric-specific risk calculators now validated and available</li>
                <li>• Risk factors include echo parameters + genotype status</li>
                <li>• LV wall thickness reported as both absolute measurement and z-score</li>
                <li>• Genotype-positive status is more closely associated with SCD in children vs adults</li>
                <li>• Complexity of ICD in young patients must be considered (growth, body size, psychological impact)</li>
                <li>• Higher complication rates of long-term device therapy in younger patients</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {scdRiskTab === 'icd' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-red-500">
            <h2 className="card-header">7.2 Patient Selection for ICD Placement</h2>
            <p className="text-sm text-gray-600 mb-3">Figure 3 — ICD Decision Algorithm</p>

            {/* Algorithm as step cards */}
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">1️⃣</span>
                  <h3 className="font-bold text-red-800">Prior Event (SCD, VF, Sustained VT)?</h3>
                </div>
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700">YES → <strong>An ICD is recommended</strong> (secondary prevention). Individual clinical judgment is recommended when assessing the prognostic strength of risk markers.</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">2️⃣</span>
                  <h3 className="font-bold text-yellow-800">≥1 Major SCD Risk Factor Present?</h3>
                </div>
                <p className="text-sm text-gray-700 mb-2">Risk factors (Table 8): FH of SCD, massive LVH ≥30 mm, unexplained syncope, apical aneurysm, EF &lt;50%</p>
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700">YES → <strong>ICD is recommended</strong> for previous cardiac arrest or sustained VT.</p>
                <div className="flex items-center gap-2 mb-1 mt-2"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700">YES (primary prevention, ≥1 risk factor) → <strong>An ICD is reasonable</strong> with shared decision-making. 5-year risk estimates can be useful.</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">3️⃣</span>
                  <h3 className="font-bold text-blue-800">No Major Risk Factors but Extensive LGE on CMR?</h3>
                </div>
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700">In select adults without major risk factors, <strong>ICD may be considered</strong> if extensive LGE by CMR or NSVT present on ambulatory monitoring.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">4️⃣</span>
                  <h3 className="font-bold text-gray-800">No Risk Factors?</h3>
                </div>
                <div className="flex items-center gap-2 mb-1"><span className="badge-red">Class 3: Harm</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>ICD should NOT be placed</strong> in patients without risk factors. ICD should NOT be placed for the sole purpose of enabling participation in competitive athletics.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 text-sm">Children (Pediatric-Specific)</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• ICD decisions based on: FH of SCD, NSVT, massive LVH, unexplained syncope</li>
                <li>• 5-year risk estimates with age-appropriate calculators</li>
                <li>• Additional factors (extensive LGE, systolic dysfunction) may be considered</li>
                <li>• Relatively high complication rates of long-term ICD in younger patients</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {scdRiskTab === 'device' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-indigo-500">
            <h2 className="card-header">7.3 ICD Device Selection Considerations</h2>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Transvenous ICD or subcutaneous ICD</strong> recommended after shared decision-making considering patient preferences, age, lifestyle, and potential need for pacing.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Single-coil ICD leads</strong> recommended in preference to dual-coil if defibrillation threshold is adequate.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Dual-chamber ICDs</strong> reasonable for patients needing atrial/AV sequential pacing or with bradycardia/conduction abnormalities.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>CRT</strong> may be reasonable for selected patients with nonobstructive HCM, NYHA II–IV, LBBB, and LVEF &lt;50%.</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 text-sm">Transvenous ICD</h3>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Ability to pace for bradycardia</li>
                  <li>• Antitachycardia pacing for VT</li>
                  <li>• Smaller size, longer battery longevity</li>
                  <li>• Disadvantage: lead failure risk, extraction risk, potential infection</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 text-sm">Subcutaneous ICD</h3>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• No transvenous lead — easier removal</li>
                  <li>• Fewer lead failures</li>
                  <li>• Disadvantage: larger size, cannot pace, shorter battery</li>
                  <li>• Screen for oversensing after exercise and post-implant on treadmill</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 text-sm">Pediatric Device Considerations</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Epicardial leads often necessary in children &lt;30 kg</li>
                <li>• Higher complication rates due to growth and baseline heart rates</li>
                <li>• Risk of inappropriate shocks, lead fracture, multiple device replacements over a lifetime</li>
                <li>• Antitachycardia pacing capability increasingly important (monomorphic VT/VF more common than previously thought)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
