'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'obstructive-pharm', label: 'Obstructive — Pharm' },
  { id: 'obstructive-invasive', label: 'Obstructive — Invasive' },
  { id: 'nonobstructive', label: 'Nonobstructive' },
  { id: 'advanced-hf', label: 'Advanced HF' },
  { id: 'af', label: 'Atrial Fibrillation' },
  { id: 'arrhythmia', label: 'Ventricular Arrhythmia' },
]

export default function ManagementPage() {
  const { managementTab, setManagementTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Management of HCM</h1>
      <p className="text-sm text-gray-600 mb-4">Section 8 — 2024 HCM Guideline</p>

      <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setManagementTab(t.id)}
            className={`tab-btn whitespace-nowrap ${managementTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {managementTab === 'obstructive-pharm' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-green-500">
            <h2 className="card-header">8.1.1 Pharmacological Management — Symptomatic Obstructive HCM</h2>
            <p className="text-sm text-gray-600 mb-3">Figure 4 — Management of Symptoms in HCM. First-line: eliminate medications that promote LVOTO, then pharmacotherapy.</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Nonvasodilating beta blockers</strong> titrated to effectiveness or maximally tolerated doses are recommended as first-line therapy for symptoms attributable to LVOTO.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR / C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Nondihydropyridine CCBs (verapamil, diltiazem)</strong> recommended when beta blockers are ineffective or not tolerated.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-R</span></div>
                <p className="text-sm text-gray-700"><strong>For persistent symptoms despite beta blockers or CCBs:</strong> Adding a cardiac myosin inhibitor (adult patients only), disopyramide (in combination with an AV nodal blocking agent), or SRT at experienced centers is recommended.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Acute hypotension in obstructive HCM</strong> is a medical urgency — IV phenylephrine (or other vasoconstrictors without inotropic activity), alone or with beta-blocking drugs, is recommended.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 text-sm">Additional Considerations</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• <span className="badge-yellow">2b</span> Cautious use of low-dose oral diuretics for persistent dyspnea with volume overload despite GDMT</li>
                <li>• <span className="badge-yellow">2b</span> Discontinuation of vasodilators (ACEi, ARBs, dihydropyridine CCBs, digoxin) may be reasonable as they can worsen LVOTO</li>
                <li>• <span className="badge-red">3: Harm</span> Verapamil is potentially harmful in patients with severe dyspnea at rest, hypotension, very high resting gradients (&gt;100 mm Hg), and all children &lt;6 weeks of age</li>
              </ul>
            </div>
          </div>

          {/* Figure 2 — Treatment Algorithm (Braunwald NEJM 2025) */}
          <div className="card border-l-4 border-indigo-500">
            <h2 className="card-header">Treatment Algorithm — Symptomatic Obstructive HCM</h2>
            <p className="text-sm text-gray-600 mb-3">Adapted from Braunwald, NEJM 2025, Figure 2</p>

            <div className="space-y-0">
              {/* Step 1 */}
              <div className="p-3 bg-indigo-50 rounded-t-lg border border-indigo-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold">1</span>
                  <span className="font-semibold text-indigo-900 text-sm">First-Line Therapy</span>
                </div>
                <p className="text-sm text-gray-700 ml-9">Oral <strong>beta-blocker</strong> (nonvasodilating) — titrate to maximum tolerated dose</p>
              </div>
              <div className="flex justify-center py-1">
                <div className="text-center">
                  <div className="text-indigo-400 text-lg leading-none">&#9660;</div>
                  <span className="text-xs text-gray-500 italic">If symptoms persist</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3 bg-indigo-50 border border-indigo-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold">2</span>
                  <span className="font-semibold text-indigo-900 text-sm">Switch to Non-DHP CCB</span>
                </div>
                <p className="text-sm text-gray-700 ml-9">Switch to <strong>verapamil</strong> or <strong>diltiazem</strong> (nondihydropyridine calcium channel blocker)</p>
              </div>
              <div className="flex justify-center py-1">
                <div className="text-center">
                  <div className="text-indigo-400 text-lg leading-none">&#9660;</div>
                  <span className="text-xs text-gray-500 italic">If symptoms persist</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3 bg-indigo-50 border border-indigo-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white text-xs font-bold">3</span>
                  <span className="font-semibold text-indigo-900 text-sm">Add Second Agent</span>
                </div>
                <div className="ml-9 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 p-2 bg-white rounded border border-indigo-100 text-sm text-gray-700">
                    <strong>Option A:</strong> Add <strong>disopyramide</strong> (with AV nodal blocking agent)
                  </div>
                  <div className="flex items-center justify-center text-xs text-gray-400 font-semibold">OR</div>
                  <div className="flex-1 p-2 bg-white rounded border border-indigo-100 text-sm text-gray-700">
                    <strong>Option B:</strong> Add <strong>cardiac myosin inhibitor</strong> (mavacamten or aficamten)
                  </div>
                </div>
              </div>
              <div className="flex justify-center py-1">
                <div className="text-center">
                  <div className="text-indigo-400 text-lg leading-none">&#9660;</div>
                  <span className="text-xs text-gray-500 italic">If symptoms persist</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-3 bg-red-50 rounded-b-lg border border-red-200">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white text-xs font-bold">4</span>
                  <span className="font-semibold text-red-900 text-sm">Evaluate for Septal Reduction Therapy</span>
                </div>
                <div className="ml-9 flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 p-2 bg-white rounded border border-red-100 text-sm text-gray-700">
                    <strong>Surgical myectomy</strong> — gold standard at experienced centers
                  </div>
                  <div className="flex items-center justify-center text-xs text-gray-400 font-semibold">OR</div>
                  <div className="flex-1 p-2 bg-white rounded border border-red-100 text-sm text-gray-700">
                    <strong>Alcohol septal ablation</strong> — when surgery is contraindicated or high-risk
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cardiac Myosin Inhibitors — Enhanced */}
          <div className="card border-l-4 border-blue-500">
            <h2 className="card-header">Cardiac Myosin Inhibitors — Detailed Evidence</h2>
            <p className="text-sm text-gray-600 mb-3">A new class of targeted therapies that address the fundamental pathophysiology of HCM</p>

            {/* Mavacamten */}
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 mb-3">
              <h3 className="font-semibold text-blue-800 text-sm mb-2">Mavacamten (Camzyos)</h3>
              <div className="text-xs text-gray-700 space-y-2">
                <div>
                  <p className="font-medium text-blue-700 mb-1">Mechanism of Action</p>
                  <ul className="space-y-1 ml-3">
                    <li>• First-in-class allosteric inhibitor of cardiac myosin ATPase</li>
                    <li>• Blocks excessive actin-myosin cross-bridging that drives hypercontractility</li>
                    <li>• Shifts myosin heads to an energy-sparing <strong>super-relaxed state (SRX)</strong>, reducing contractile force and energy consumption</li>
                    <li>• <strong>FDA approved April 2022</strong> for symptomatic obstructive HCM (NYHA II-III)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-blue-700 mb-1">EXPLORER-HCM Trial</p>
                  <ul className="space-y-1 ml-3">
                    <li>• Phase 3, randomized, double-blind, placebo-controlled</li>
                    <li>• <strong>251 patients</strong>, NYHA class II-III, 30-week treatment</li>
                    <li>• <strong>Primary composite endpoint met in 37% vs 17% placebo (P&lt;0.001)</strong></li>
                    <li>• Reduced resting LVOT gradient by <strong>37%</strong></li>
                    <li>• Reduced Valsalva gradient by <strong>36%</strong></li>
                    <li>• Reduced post-exercise gradient by <strong>42%</strong></li>
                    <li>• Reduced LV wall thickness, LV mass, and NT-proBNP levels</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-blue-700 mb-1">VALOR-HCM Trial</p>
                  <ul className="space-y-1 ml-3">
                    <li>• <strong>112 patients</strong> previously referred for septal reduction therapy</li>
                    <li>• After 16 weeks: only <strong>18% of mavacamten group</strong> (vs 77% placebo) remained eligible/willing to proceed with SRT</li>
                    <li>• Demonstrated ability to <strong>avert invasive procedures</strong> in the majority of patients</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-blue-700 mb-1">Long-Term Data</p>
                  <ul className="space-y-1 ml-3">
                    <li>• Open-label extension (MAVA-LTE): sustained efficacy for <strong>&gt;3 years</strong></li>
                    <li>• Durable reductions in LVOT gradients and symptoms</li>
                  </ul>
                </div>

                <div className="p-2 bg-red-50 rounded border border-red-200">
                  <p className="font-medium text-red-700 mb-1">Safety Considerations</p>
                  <ul className="space-y-1 ml-3">
                    <li>• LVEF &lt;50% occurred in <strong>4.6%</strong> of patients</li>
                    <li>• <strong>REMS program required</strong> (Risk Evaluation and Mitigation Strategy): multiple clinic visits and echocardiograms to monitor LVEF</li>
                    <li>• Must be discontinued if persistent LVEF &lt;50%</li>
                    <li>• CYP2C19 metabolism — significant drug-drug interactions (CYP2C19 inhibitors/inducers)</li>
                    <li>• <strong>Contraindicated in pregnancy</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aficamten */}
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 mb-3">
              <h3 className="font-semibold text-emerald-800 text-sm mb-2">Aficamten (Iqcamten)</h3>
              <div className="text-xs text-gray-700 space-y-2">
                <div>
                  <p className="font-medium text-emerald-700 mb-1">Mechanism of Action</p>
                  <ul className="space-y-1 ml-3">
                    <li>• Next-generation cardiac myosin inhibitor — binds myosin at a <strong>different site</strong> than mavacamten</li>
                    <li>• <strong>Shorter half-life</strong> than mavacamten — enables faster dose adjustment and shorter drug washout period</li>
                    <li>• <strong>Fewer drug-drug interactions</strong> (not dependent on CYP2C19 metabolism)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-emerald-700 mb-1">SEQUOIA-HCM Trial</p>
                  <ul className="space-y-1 ml-3">
                    <li>• Phase 3, randomized, double-blind, placebo-controlled</li>
                    <li>• <strong>282 patients</strong>, 24-week treatment duration</li>
                    <li>• <strong>Primary endpoint:</strong> Significantly greater improvement in peak oxygen uptake (pVO2) vs placebo <strong>(P&lt;0.001)</strong></li>
                    <li>• Marked reduction in LVOT gradients and symptom improvement</li>
                  </ul>
                </div>

                <div className="p-2 bg-yellow-50 rounded border border-yellow-200">
                  <p className="font-medium text-yellow-700 mb-1">Safety and Status</p>
                  <ul className="space-y-1 ml-3">
                    <li>• LVEF &lt;50% occurred in <strong>3.5%</strong> (lower than mavacamten)</li>
                    <li>• Under FDA review at time of Braunwald 2025 review publication</li>
                    <li>• Potentially simpler monitoring requirements due to pharmacokinetic profile</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Table 2 — Improvements from CMIs */}
            <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-3">
              <h3 className="font-semibold text-green-800 text-sm">Table 2 — Improvements from Cardiac Myosin Inhibitors</h3>
              <p className="text-xs text-gray-500 mb-2">Braunwald, NEJM 2025</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {[
                  'LVOT gradient \u2193',
                  'LV wall thickness \u2193',
                  'LV mass \u2193',
                  'Hypercontractility \u2193',
                  'Cardiac energy requirements \u2193',
                  'LA volume \u2193',
                  'Ventricular filling pressures \u2193',
                  'E/e\u2019 ratio \u2193',
                  'NYHA class improved',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 p-1.5 bg-white rounded border border-green-100">
                    <span className="text-green-600 text-sm">&#10003;</span>
                    <span className="text-xs text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table 3 — Phase 3 Trial Comparison */}
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm">Table 3 — Phase 3 Trial Comparison</h3>
              <p className="text-xs text-gray-500 mb-2">Mavacamten (EXPLORER-HCM) vs Aficamten (SEQUOIA-HCM)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="py-1.5 px-2 text-left font-semibold">Variable</th>
                      <th className="py-1.5 px-2 text-center font-semibold">Mavacamten (N=251)</th>
                      <th className="py-1.5 px-2 text-center font-semibold">Aficamten (N=282)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr><td className="py-1 px-2">Trial name</td><td className="py-1 px-2 text-center">EXPLORER-HCM</td><td className="py-1 px-2 text-center">SEQUOIA-HCM</td></tr>
                    <tr className="bg-gray-50"><td className="py-1 px-2">Duration</td><td className="py-1 px-2 text-center">30 wk</td><td className="py-1 px-2 text-center">24 wk</td></tr>
                    <tr><td className="py-1 px-2">Median age</td><td className="py-1 px-2 text-center">59 yr</td><td className="py-1 px-2 text-center">59 yr</td></tr>
                    <tr className="bg-gray-50"><td className="py-1 px-2">Female</td><td className="py-1 px-2 text-center">41%</td><td className="py-1 px-2 text-center">41%</td></tr>
                    <tr><td className="py-1 px-2">LVOT gradient entry</td><td className="py-1 px-2 text-center">&ge;50 mmHg</td><td className="py-1 px-2 text-center">&ge;50 mmHg</td></tr>
                    <tr className="bg-gray-50"><td className="py-1 px-2">NYHA II at baseline</td><td className="py-1 px-2 text-center">73%</td><td className="py-1 px-2 text-center">76%</td></tr>
                    <tr><td className="py-1 px-2">On beta-blocker</td><td className="py-1 px-2 text-center">75%</td><td className="py-1 px-2 text-center">61%</td></tr>
                    <tr className="bg-gray-50"><td className="py-1 px-2">On disopyramide</td><td className="py-1 px-2 text-center">0%</td><td className="py-1 px-2 text-center">11%</td></tr>
                    <tr><td className="py-1 px-2">Mean LVEF change</td><td className="py-1 px-2 text-center">-4.0%</td><td className="py-1 px-2 text-center">-4.8%</td></tr>
                    <tr className="bg-gray-50"><td className="py-1 px-2">EF &lt;50%</td><td className="py-1 px-2 text-center">7 pts</td><td className="py-1 px-2 text-center">5 pts</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {managementTab === 'obstructive-invasive' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-red-500">
            <h2 className="card-header">8.1.2 Invasive Treatment — Symptomatic Obstructive HCM</h2>
            <p className="text-sm text-gray-600 mb-3">Septal reduction therapy (SRT) for drug-refractory or severe LVOTO</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>SRT in eligible patients</strong> who remain symptomatic despite GDMT, performed at experienced HCM centers with demonstrated clinical outcomes (Tables 4 and 5).</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Surgical myectomy</strong> for symptomatic obstructive HCM with associated cardiac disease requiring surgery (e.g., anomalous papillary muscle, elongated MV leaflet, intrinsic MV disease, CAD, valvular stenosis).</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Alcohol septal ablation</strong> in adults when surgery is contraindicated or risk is unacceptably high due to serious comorbidities or advanced age.</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 text-sm">Surgical Myectomy (ESM)</h3>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Mortality &lt;1%, clinical success &gt;90-95%</li>
                  <li>• Eliminates/reduces SAM-mediated MR</li>
                  <li>• Allows gradient relief at any level</li>
                  <li>• Can address associated papillary/mitral abnormalities</li>
                  <li>• Long-term survival similar to age-matched general population</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 text-sm">Alcohol Septal Ablation</h3>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Mortality &lt;1%, avoids sternotomy</li>
                  <li>• Shorter hospital stay</li>
                  <li>• Higher rate of complete heart block (&le;10% need permanent pacemaker)</li>
                  <li>• Less effective with gradients &ge;100 mm Hg or septal thickness &ge;30 mm</li>
                  <li>• 5-year survival similar to myectomy; &gt;10 years may favor myectomy</li>
                </ul>
              </div>
            </div>

            <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 text-sm">Class 3 Recommendations (Harm / No Benefit)</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• SRT is <strong>NOT recommended</strong> for asymptomatic patients with normal exercise capacity</li>
                <li>• <strong>Mitral valve replacement should NOT</strong> be performed for the sole purpose of relieving LVOTO</li>
              </ul>
            </div>

            <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 text-sm">Table 5 — SRT Outcome Targets</h3>
              <div className="overflow-x-auto mt-1">
                <table className="w-full text-xs">
                  <thead><tr className="bg-amber-100"><th className="py-1 px-2 text-left">Outcome</th><th className="py-1 px-2">Myectomy</th><th className="py-1 px-2">Ablation</th></tr></thead>
                  <tbody className="divide-y">
                    <tr><td className="py-1 px-2">30-day mortality</td><td className="py-1 px-2 text-center">&le;1</td><td className="py-1 px-2 text-center">&le;1</td></tr>
                    <tr><td className="py-1 px-2">30-day adverse complications (%)</td><td className="py-1 px-2 text-center">&le;5</td><td className="py-1 px-2 text-center">&le;5</td></tr>
                    <tr><td className="py-1 px-2">Need for permanent pacemaker (%)</td><td className="py-1 px-2 text-center">&le;5</td><td className="py-1 px-2 text-center">&le;10</td></tr>
                    <tr><td className="py-1 px-2">Symptomatic improvement &ge;1 NYHA class (%)</td><td className="py-1 px-2 text-center">&gt;90</td><td className="py-1 px-2 text-center">&gt;90</td></tr>
                    <tr><td className="py-1 px-2">Rest/provoked gradient &lt;50 mm Hg (%)</td><td className="py-1 px-2 text-center">&gt;90</td><td className="py-1 px-2 text-center">&gt;90</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {managementTab === 'nonobstructive' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-teal-500">
            <h2 className="card-header">8.2 Management of Nonobstructive HCM With Preserved EF</h2>
            <p className="text-sm text-gray-600 mb-3">Approximately one third of patients with overt HCM are nonobstructive — no gradient even with provocation</p>

            <div className="p-3 bg-teal-50 rounded-lg border border-teal-200 mb-3">
              <h3 className="font-semibold text-teal-800 text-sm">Overview</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• ~<strong>1/3 of overt HCM patients</strong> are nonobstructive (no LVOT gradient even with provocation)</li>
                <li>• Some patients have resting gradients up to 30 mmHg (below the threshold for obstruction)</li>
                <li>• <strong>Most are asymptomatic</strong>; when symptoms occur: dyspnea, fatigue, angina, reduced exercise capacity</li>
                <li>• <strong>Long-term mortality is similar</strong> to obstructive HCM</li>
                <li>• Treatment is challenging — no definitive therapies; cautious diuretics are often helpful</li>
                <li>• Symptoms may arise from diastolic dysfunction, restrictive physiology, microvascular dysfunction, or coincidental CAD</li>
                <li>• Comorbidities (hypertension, obesity, sleep apnea, physical inactivity) are major symptom contributors</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Beta blockers or nondihydropyridine CCBs</strong> recommended for exertional angina or dyspnea in nonobstructive HCM with preserved EF.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Oral diuretics</strong> reasonable to add when exertional dyspnea persists despite beta blockers or CCBs.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700">Usefulness of ACEi and ARBs in treatment of symptoms in nonobstructive HCM is <strong>not well established</strong>.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE B-R</span></div>
                <p className="text-sm text-gray-700"><strong>Valsartan</strong> may be beneficial for younger (&le;45 y) patients with nonobstructive HCM due to a pathogenic sarcomeric variant and mild phenotype, to slow adverse cardiac remodeling.</p>
              </div>
            </div>

            {/* Emerging Therapies — Braunwald 2025 */}
            <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 text-sm">Emerging Therapies for Nonobstructive HCM</h3>
              <p className="text-xs text-gray-500 mb-2">Braunwald, NEJM 2025</p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="p-2 bg-white rounded border border-indigo-100">
                  <p className="font-medium text-indigo-700">Mavacamten — Phase 2 (Nonobstructive)</p>
                  <ul className="space-y-0.5 mt-1 ml-3">
                    <li>• Reduced <strong>NT-proBNP</strong> and <strong>cardiac troponin I</strong> levels</li>
                    <li>• Suggests benefit even without dynamic obstruction</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded border border-indigo-100">
                  <p className="font-medium text-indigo-700">Aficamten — Phase 2 (Nonobstructive)</p>
                  <ul className="space-y-0.5 mt-1 ml-3">
                    <li>• Improved <strong>KCCQ-CSS</strong> (Kansas City Cardiomyopathy Questionnaire Clinical Summary Score)</li>
                    <li>• Demonstrates functional and quality-of-life improvement</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded border border-indigo-100">
                  <p className="font-medium text-indigo-700">Phase 3 Trials</p>
                  <p className="mt-1 ml-3">Phase 3 trials for <strong>both mavacamten and aficamten</strong> in nonobstructive HCM have completed enrollment</p>
                </div>
                <div className="p-2 bg-white rounded border border-indigo-100">
                  <p className="font-medium text-indigo-700">Ninerafaxstat</p>
                  <ul className="space-y-0.5 mt-1 ml-3">
                    <li>• Cardiac mitotropic prodrug — enhances ATP production via <strong>glucose oxidation pathway</strong></li>
                    <li>• Phase 2 results: reduced <strong>LA diameter</strong> and improved <strong>VE/VCO2</strong> (ventilatory efficiency)</li>
                    <li>• Novel metabolic approach — targets energy deficiency rather than contractility</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded border border-indigo-100">
                  <p className="font-medium text-indigo-700">Sotagliflozin (SGLT1/SGLT2 Inhibitor)</p>
                  <ul className="space-y-0.5 mt-1 ml-3">
                    <li>• Phase 3 <strong>SONATA-HCM</strong> trial ongoing</li>
                    <li>• Rationale: promotes utilization of <strong>ketone bodies as cardiac energy source</strong></li>
                    <li>• Leverages established HF mechanism (SGLT2i benefits) applied to HCM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Burned-Out Phase */}
            <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 text-sm">&quot;Burned-Out&quot; Nonobstructive HCM</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• <strong>5-10%</strong> of nonobstructive HCM patients develop a severe &quot;burned-out&quot; phase</li>
                <li>• Characterized by progressive ventricular dilation and wall thinning with loss of outflow obstruction</li>
                <li>• Represents end-stage disease with poor prognosis</li>
                <li>• May require <strong>cardiac transplantation</strong> or <strong>LVAD</strong> support</li>
              </ul>
            </div>

            <div className="mt-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 text-sm">Key Points</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Control of comorbid conditions combined with pharmacotherapy provides optimal symptom reduction</li>
                <li>• No prospective trials evaluating long-term outcomes with medications in nonobstructive HCM</li>
                <li>• Cardiac myosin inhibitors represent the first disease-specific therapies under investigation for this subgroup</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {managementTab === 'advanced-hf' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-purple-500">
            <h2 className="card-header">8.3 Management of HCM and Advanced HF</h2>
            <p className="text-sm text-gray-600 mb-3">Figure 5 — Heart Failure Algorithm. EF &lt;50% in HCM represents significantly reduced systolic function.</p>

            {/* Context from Braunwald */}
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 mb-3">
              <h3 className="font-semibold text-purple-800 text-sm">Understanding LVEF in HCM</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Normal LVEF in HCM is <strong>70-75%</strong> (supranormal due to hypercontractility and small cavity)</li>
                <li>• <strong>LVEF &lt;50% in HCM = serious systolic dysfunction</strong> — analogous to LVEF 35-40% in non-HCM patients</li>
                <li>• <strong>6-8%</strong> of HCM patients present with LVEF &lt;50%</li>
                <li>• Two distinct HF phenotypes require different treatment approaches:</li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                <div className="p-2 bg-white rounded border border-purple-100">
                  <p className="font-medium text-purple-700 text-xs mb-1">Hypercontractility-Driven HF</p>
                  <ul className="text-xs text-gray-600 space-y-0.5 ml-2">
                    <li>• LVOTO + diastolic dysfunction</li>
                    <li>• Focus on reducing obstruction</li>
                    <li>• Medical therapy + SRT</li>
                    <li>• Better prognosis with treatment</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded border border-purple-100">
                  <p className="font-medium text-purple-700 text-xs mb-1">Fibrosis-Driven HF</p>
                  <ul className="text-xs text-gray-600 space-y-0.5 ml-2">
                    <li>• Extensive myocardial fibrosis</li>
                    <li>• Treat as classic HFrEF</li>
                    <li>• Consider transplant evaluation</li>
                    <li>• Annual mortality ~2%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>GDMT for HF with reduced EF</strong> (LVEF &lt;50%) is recommended per AHA/ACC/HFSA HF guideline.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Diagnostic testing for concomitant causes</strong> of systolic dysfunction (e.g., CAD) is recommended.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>CPET</strong> for nonobstructive HCM with advanced HF (NYHA III-IV) to quantify functional limitation and aid in selection for heart transplantation or mechanical support.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Heart transplant assessment</strong> for nonobstructive HCM with advanced HF (NYHA III-IV) despite GDMT, or with life-threatening ventricular arrhythmias refractory to maximal GDMT.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-R</span></div>
                <p className="text-sm text-gray-700"><strong>Cardiac myosin inhibitors should be discontinued</strong> if persistent systolic dysfunction (LVEF &lt;50%) develops.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 text-sm">Additional Considerations</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• <span className="badge-yellow">2a</span> Discontinue negative inotropic agents (verapamil, diltiazem, disopyramide) when systolic dysfunction develops</li>
                <li>• <span className="badge-yellow">2a</span> LVAD therapy reasonable as bridge to transplant in NYHA III-IV candidates</li>
                <li>• <span className="badge-yellow">2a</span> ICD placement reasonable with persistent LVEF &lt;50%</li>
                <li>• <span className="badge-yellow">2a</span> CRT reasonable for LVEF &lt;50%, NYHA II-IV, LBBB, and GDMT despite symptoms</li>
                <li>• Advanced HF arises in ~3-8% of HCM patients; EF &lt;35% confers particularly high risk</li>
                <li>• Post-transplant survival in HCM is comparable to or better than other forms of heart disease</li>
              </ul>
            </div>

            {/* SHaRE Registry + Additional Braunwald content */}
            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 text-sm">SHaRE Registry Findings — LV Dysfunction in HCM</h3>
              <p className="text-xs text-gray-500 mb-1">Braunwald, NEJM 2025</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Patients with LV dysfunction had <strong>more pathogenic sarcomeric variants</strong></li>
                <li>• <strong>Thicker LV walls</strong> and <strong>greater LA dilation</strong> at presentation</li>
                <li>• Higher rates of <strong>death, stroke, and atrial fibrillation</strong></li>
                <li>• Underscores genetic contribution to adverse remodeling trajectory</li>
              </ul>
            </div>

            <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 text-sm">Advanced Therapies</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• <strong>CRT:</strong> Consider in HCM with LBBB and QRS &gt;120 ms — may improve synchrony and EF</li>
                <li>• <strong>Cardiac transplant:</strong> For NYHA III-IV refractory to GDMT; post-transplant survival comparable to or better than other cardiomyopathies</li>
                <li>• <strong>LVAD:</strong> Bridge to transplant in critically ill patients; unique considerations due to small LV cavity and potential RV failure</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {managementTab === 'af' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-pink-500">
            <h2 className="card-header">8.4 Management of HCM and AF</h2>
            <p className="text-sm text-gray-600 mb-3">High stroke risk independent of CHA2DS2-VASc score — anticoagulation is a priority</p>

            {/* Braunwald context */}
            <div className="p-3 bg-pink-50 rounded-lg border border-pink-200 mb-3">
              <h3 className="font-semibold text-pink-800 text-sm">AF in HCM — Clinical Significance</h3>
              <p className="text-xs text-gray-500 mb-1">Braunwald, NEJM 2025</p>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• AF occurs in <strong>~25% of symptomatic HCM patients</strong> — more than in many other cardiac disorders</li>
                <li>• Associated with <strong>poor outcomes:</strong> high stroke risk and thromboembolic risk</li>
                <li>• Loss of atrial contraction + rapid ventricular rate = <strong>impaired LV filling</strong> in an already stiff, noncompliant ventricle</li>
                <li>• <strong>LA enlargement and fibrosis</strong> are the substrate — common in HCM due to chronically elevated filling pressures</li>
                <li>• <strong>CHA2DS2-VASc score is NOT reliable in HCM</strong> — HCM itself confers high stroke risk regardless of score; anticoagulate <strong>all</strong> HCM patients with AF</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Anticoagulation with DOACs</strong> (first-line) or vitamin K antagonists (second-line) recommended for clinical AF, <strong>independent of CHA2DS2-VASc score</strong>.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Subclinical AF (&gt;24 hours)</strong> detected by cardiac devices — anticoagulation recommended (DOACs first-line).</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Rate control:</strong> Beta blockers, verapamil, or diltiazem recommended for AF with rate-control strategy.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Short-duration subclinical AF</strong> (&gt;5 minutes but &lt;24 hours) — anticoagulation can be beneficial, considering AF burden and risk factors.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Rhythm control:</strong> Cardioversion or antiarrhythmic drugs can be beneficial for poorly tolerated AF.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Catheter ablation</strong> for symptomatic AF when drug therapy is ineffective, contraindicated, or not preferred.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Surgical AF ablation (maze procedure)</strong> can be beneficial for patients undergoing myectomy.</p>
              </div>
            </div>

            {/* Rhythm and Rate Control Strategy — Braunwald */}
            <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 text-sm">Rhythm and Rate Control Strategy</h3>
              <p className="text-xs text-gray-500 mb-1">Braunwald, NEJM 2025</p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="p-2 bg-white rounded border border-indigo-100">
                  <p className="font-medium text-indigo-700">Rhythm Control (Preferred)</p>
                  <ul className="space-y-0.5 mt-1 ml-3">
                    <li>• After DC cardioversion: maintain sinus rhythm with pharmacologic agents</li>
                    <li>• <strong>Sotalol, dofetilide, or amiodarone</strong> for pharmacologic rhythm control</li>
                    <li>• If antiarrhythmic drugs fail: <strong>catheter ablation</strong></li>
                    <li>• <strong>Surgical ablation (Maze procedure)</strong> can be performed concomitantly during myectomy</li>
                  </ul>
                </div>
                <div className="p-2 bg-white rounded border border-indigo-100">
                  <p className="font-medium text-indigo-700">Rate Control (If Rhythm Control Fails)</p>
                  <ul className="space-y-0.5 mt-1 ml-3">
                    <li>• <strong>Beta-blocker</strong> as first-line rate control agent</li>
                    <li>• May add <strong>non-dihydropyridine CCB</strong> (verapamil or diltiazem) if needed</li>
                    <li>• Consider <strong>AV nodal ablation</strong> with permanent pacing for refractory rate control</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-3 p-3 bg-pink-50 rounded-lg border border-pink-200">
              <h3 className="font-semibold text-pink-800 text-sm">Table 9 — Antiarrhythmic Drug Options for HCM + AF</h3>
              <div className="overflow-x-auto mt-1">
                <table className="w-full text-xs">
                  <thead><tr className="bg-pink-100"><th className="py-1 px-2 text-left">Drug</th><th className="py-1 px-2">AF Efficacy</th><th className="py-1 px-2">Toxicities</th><th className="py-1 px-2">Use in HCM</th></tr></thead>
                  <tbody className="divide-y">
                    <tr><td className="py-1 px-2">Disopyramide</td><td className="py-1 px-2">Modest</td><td className="py-1 px-2">Prolonged QTc, HF</td><td className="py-1 px-2">Used with AV nodal blocking agent; good for early-onset AF</td></tr>
                    <tr><td className="py-1 px-2">Sotalol</td><td className="py-1 px-2">Modest</td><td className="py-1 px-2">Prolonged QTc, bradycardia</td><td className="py-1 px-2">Reasonable</td></tr>
                    <tr><td className="py-1 px-2">Dofetilide</td><td className="py-1 px-2">Modest</td><td className="py-1 px-2">Prolonged QTc, TdP</td><td className="py-1 px-2">Reasonable</td></tr>
                    <tr><td className="py-1 px-2">Amiodarone</td><td className="py-1 px-2">Modest-High</td><td className="py-1 px-2">Multi-organ (liver, lung, thyroid, skin)</td><td className="py-1 px-2">Reasonable; generally favored option</td></tr>
                    <tr><td className="py-1 px-2">Flecainide/Propafenone</td><td className="py-1 px-2">...</td><td className="py-1 px-2">Prolonged QRS, proarrhythmia</td><td className="py-1 px-2">Not generally recommended without ICD</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {managementTab === 'arrhythmia' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-orange-500">
            <h2 className="card-header">8.5 Management of HCM and Ventricular Arrhythmias</h2>
            <p className="text-sm text-gray-600 mb-3">Preventing recurrent VT is important — ICD shocks are associated with impaired quality of life and worse outcomes</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Heart transplant assessment</strong> for recurrent, poorly tolerated life-threatening VT refractory to maximal antiarrhythmic drug therapy and ablation.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR / C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Antiarrhythmic therapy</strong> (amiodarone, dofetilide, mexiletine, sotalol) for adults with symptomatic VT or recurrent ICD shocks despite beta blockers.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Children:</strong> Antiarrhythmic therapy (amiodarone, mexiletine, sotalol) for recurrent VT despite beta blockers.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Antitachycardia pacing</strong> programmed in pacing-capable ICDs to minimize risk of shocks.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Catheter ablation</strong> can be useful for recurrent sustained monomorphic VT or recurrent ICD shocks when antiarrhythmic therapy is ineffective or not tolerated.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-800 text-sm">Key Points</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Monomorphic VT and VF are more common mechanisms of SCD than previously thought</li>
                <li>• Antitachycardia pacing can terminate ~74% of episodes — important for minimizing shocks</li>
                <li>• Catheter ablation: 73% success rate in selected patients; combined epicardial + endocardial may be needed</li>
                <li>• Patients with apical aneurysms are at particularly high risk for monomorphic VT</li>
                <li>• ICD therapy has been shown to prevent SCD and improve survival in HCM</li>
                <li>• Left cardiac sympathetic denervation is a last-resort option for refractory VT/VF</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
