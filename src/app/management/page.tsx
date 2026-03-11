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

            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 text-sm">Mavacamten — Key Facts</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• First-in-class cardiac myosin inhibitor — inhibits actin-myosin interaction</li>
                <li>• Reduces cardiac contractility, decreasing LVOT obstruction</li>
                <li>• FDA-approved for symptomatic obstructive HCM</li>
                <li>• Shown to improve LVOT gradients, symptoms, and functional capacity in 30–60% of patients</li>
                <li>• Risk of LVEF decrease (&lt;50% in ~5.7%) — requires risk evaluation and mitigation strategy (REMS)</li>
                <li>• <strong>Contraindicated in pregnancy</strong> (potential teratogenic effects)</li>
                <li>• Must be discontinued if persistent LVEF &lt;50%</li>
              </ul>
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
                  <li>• Mortality &lt;1%, clinical success &gt;90–95%</li>
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
                  <li>• Higher rate of complete heart block (≤10% need permanent pacemaker)</li>
                  <li>• Less effective with gradients ≥100 mm Hg or septal thickness ≥30 mm</li>
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
                    <tr><td className="py-1 px-2">30-day mortality</td><td className="py-1 px-2 text-center">≤1</td><td className="py-1 px-2 text-center">≤1</td></tr>
                    <tr><td className="py-1 px-2">30-day adverse complications (%)</td><td className="py-1 px-2 text-center">≤5</td><td className="py-1 px-2 text-center">≤5</td></tr>
                    <tr><td className="py-1 px-2">Need for permanent pacemaker (%)</td><td className="py-1 px-2 text-center">≤5</td><td className="py-1 px-2 text-center">≤10</td></tr>
                    <tr><td className="py-1 px-2">Symptomatic improvement ≥1 NYHA class (%)</td><td className="py-1 px-2 text-center">&gt;90</td><td className="py-1 px-2 text-center">&gt;90</td></tr>
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
            <p className="text-sm text-gray-600 mb-3">A diagnostic and therapeutic challenge — focus on symptom management and comorbidity control</p>

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
                <p className="text-sm text-gray-700"><strong>Valsartan</strong> may be beneficial for younger (≤45 y) patients with nonobstructive HCM due to a pathogenic sarcomeric variant and mild phenotype, to slow adverse cardiac remodeling.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-teal-50 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 text-sm">Key Points</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Symptoms in nonobstructive HCM: diastolic dysfunction, restrictive physiology, decompensated HF, microvascular dysfunction, or coincidental CAD</li>
                <li>• Comorbidities (hypertension, obesity, sleep apnea, physical inactivity) are major symptom contributors</li>
                <li>• Control of comorbid conditions combined with pharmacotherapy provides optimal symptom reduction</li>
                <li>• No prospective trials evaluating long-term outcomes with medications in nonobstructive HCM</li>
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
                <p className="text-sm text-gray-700"><strong>CPET</strong> for nonobstructive HCM with advanced HF (NYHA III–IV) to quantify functional limitation and aid in selection for heart transplantation or mechanical support.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Heart transplant assessment</strong> for nonobstructive HCM with advanced HF (NYHA III–IV) despite GDMT, or with life-threatening ventricular arrhythmias refractory to maximal GDMT.</p>
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
                <li>• <span className="badge-yellow">2a</span> LVAD therapy reasonable as bridge to transplant in NYHA III–IV candidates</li>
                <li>• <span className="badge-yellow">2a</span> ICD placement reasonable with persistent LVEF &lt;50%</li>
                <li>• <span className="badge-yellow">2a</span> CRT reasonable for LVEF &lt;50%, NYHA II–IV, LBBB, and GDMT despite symptoms</li>
                <li>• Advanced HF arises in ~3–8% of HCM patients; EF &lt;35% confers particularly high risk</li>
                <li>• Post-transplant survival in HCM is comparable to or better than other forms of heart disease</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {managementTab === 'af' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-pink-500">
            <h2 className="card-header">8.4 Management of HCM and AF</h2>
            <p className="text-sm text-gray-600 mb-3">High stroke risk independent of CHA₂DS₂-VASc score — anticoagulation is a priority</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Anticoagulation with DOACs</strong> (first-line) or vitamin K antagonists (second-line) recommended for clinical AF, <strong>independent of CHA₂DS₂-VASc score</strong>.</p>
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
