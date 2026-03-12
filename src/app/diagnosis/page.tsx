'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'clinical', label: 'Clinical' },
  { id: 'echo', label: 'Echo' },
  { id: 'cmr', label: 'CMR' },
  { id: 'other', label: 'CT & Rhythm' },
  { id: 'exercise', label: 'Exercise Testing' },
  { id: 'genetics', label: 'Genetics' },
  { id: 'genotype', label: 'Genotype+/Phenotype-' },
]

export default function DiagnosisPage() {
  const { diagnosisTab, setDiagnosisTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Diagnosis, Initial Evaluation & Follow-Up</h1>
      <p className="text-sm text-gray-600 mb-4">Section 6 — 2024 HCM Guideline</p>

      <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setDiagnosisTab(t.id)}
            className={`tab-btn whitespace-nowrap ${diagnosisTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {diagnosisTab === 'clinical' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-emerald-500">
            <h2 className="card-header">6.1 Clinical Diagnosis</h2>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="badge-green">Class 1</span>
                <span className="badge-blue">LOE B-NR</span>
              </div>
              <p className="text-sm text-gray-700">In patients with suspected HCM, comprehensive physical examination and complete medical and 3-generation family history is recommended as part of the initial diagnostic assessment (Tables 6 and 7).</p>
            </div>

            <h3 className="font-semibold text-gray-800 mb-2">Initial Evaluation Should Include:</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Comprehensive cardiac history and family history (3 generations)</li>
              <li>• Physical examination including provocative maneuvers (Valsalva, squat-to-stand, passive leg raising)</li>
              <li>• 12-lead ECG and cardiac imaging to identify LVH</li>
              <li>• Assessment of functional capacity, symptoms with exertion (chest pain, dyspnea, palpitations, syncope)</li>
              <li>• Exclusion of alternative etiologies (athletic remodeling, hypertension, renal disease, infiltrative diseases)</li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-2">Classic Physical Findings:</h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>• Harsh crescendo-decrescendo systolic murmur (SAM of mitral valve with LVOTO)</li>
              <li>• Prominent apical point of maximal impulse, abnormal carotid pulse</li>
              <li>• Fourth heart sound</li>
              <li>• Murmur increases with Valsalva maneuver and standing (from squatting position)</li>
              <li>• Those without LVOTO may have a normal physical examination</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="card-header">Table 6 — HCM Phenocopies (Mimics)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2 px-2 text-left">Age Group</th>
                    <th className="py-2 px-2 text-left">Systemic Features</th>
                    <th className="py-2 px-2 text-left">Possible Etiology</th>
                    <th className="py-2 px-2 text-left">Diagnostic Approach</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-1 px-2">Infants (0-12 mo)</td><td className="py-1 px-2">Dysmorphic features, FTT, metabolic acidosis</td><td className="py-1 px-2">RASopathies, glycogen storage, mitochondrial</td><td className="py-1 px-2">Geneticist assessment, metabolic screening</td></tr>
                  <tr><td className="py-1 px-2">Early childhood</td><td className="py-1 px-2">Cognitive/hearing impairment</td><td className="py-1 px-2">RASopathies, mitochondrial diseases</td><td className="py-1 px-2">Biochemical screening, genetic testing</td></tr>
                  <tr><td className="py-1 px-2">Youth/adolescence</td><td className="py-1 px-2">Skeletal weakness, movement disorder</td><td className="py-1 px-2">Friedreich&apos;s ataxia, Danon, mitochondrial</td><td className="py-1 px-2">Neuromuscular assessment, genetic testing</td></tr>
                  <tr><td className="py-1 px-2">Adulthood</td><td className="py-1 px-2">Neuropathy, renal dysfunction</td><td className="py-1 px-2">Anderson-Fabry, Friedreich&apos;s, amyloid, infiltrative</td><td className="py-1 px-2">Biochemical screening, genetic testing</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Table 7 — Family Screening With ECG & Echo</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2 px-2 text-left">Relative</th>
                    <th className="py-2 px-2 text-left">Start Screening</th>
                    <th className="py-2 px-2 text-left">Repeat ECG/Echo</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-1 px-2">Children (genotype-positive families, early onset)</td><td className="py-1 px-2">At time HCM is diagnosed in family</td><td className="py-1 px-2">Every 1–2 years</td></tr>
                  <tr><td className="py-1 px-2">All other children/adolescents</td><td className="py-1 px-2">Any time after HCM diagnosed, no later than puberty</td><td className="py-1 px-2">Every 2–3 years</td></tr>
                  <tr><td className="py-1 px-2">Adults</td><td className="py-1 px-2">At time HCM is diagnosed in family</td><td className="py-1 px-2">Every 3–5 years</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'echo' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-blue-500">
            <h2 className="card-header">6.2 Echocardiography</h2>
            <p className="text-sm text-gray-600 mb-3">Primary imaging modality for diagnosis and serial follow-up in HCM</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>TTE recommended</strong> in the initial evaluation of patients with suspected HCM.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR / C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Serial TTE</strong> every 1–2 years (children B-NR; adults C-LD) to assess myocardial hypertrophy, dynamic LVOTO, MR, and myocardial function.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Repeat TTE</strong> when clinical status changes or a new clinical event occurs.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Provocative maneuvers</strong> recommended if resting peak LVOT gradient &lt;50 mm Hg.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Exercise TTE</strong> for symptomatic patients without resting/provocable LVOT gradient ≥50 mm Hg on standard TTE.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Intraoperative TEE</strong> recommended for surgical myectomy to assess mitral valve anatomy, function, and adequacy of septal myectomy.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>TTE/TEE for alcohol septal ablation</strong> — imaging helps guide the procedure and monitor LVOT gradient reduction.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Post-SRT TTE</strong> within 3–6 months to evaluate procedural results.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 text-sm">Key Echo Points</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• LVOT gradients are dynamic — can be missed on resting echo in up to 50% of patients with obstructive physiology</li>
                <li>• Provocative maneuvers: sustained Valsalva, squat-to-stand (or simply standing)</li>
                <li>• Stress echo (exercise, not dobutamine) is the most physiologic form of provocation</li>
                <li>• Document maximal wall thickness, chamber dimensions, systolic function, LV apical aneurysm</li>
              </ul>
            </div>
          </div>

          <div className="card border-l-4 border-indigo-400">
            <h2 className="card-header">Table 1 — Major Applications of Imaging in HCM</h2>
            <p className="text-xs text-gray-500 mb-3">Adapted from Braunwald, NEJM 2025</p>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">Echocardiography</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Establishing diagnosis</li>
                <li>• Detection of LVOT obstruction before and after provocation (Valsalva, exercise)</li>
                <li>• Measuring LV wall thickness (asymmetric hypertrophy)</li>
                <li>• Detection of diastolic dysfunction</li>
                <li>• Detection of systolic anterior motion of mitral valve</li>
                <li>• Measurement of left atrial volume</li>
                <li>• Phenotypic conversion from phenotype-negative to positive on serial studies</li>
                <li>• Detection/assessment of mitral regurgitation</li>
                <li>• Identification of uncommon hypertrophy sites (apex, mid-LV)</li>
                <li>• Detection of MV and papillary muscle abnormalities</li>
                <li>• Elucidation of SRT technique (myectomy vs alcohol ablation)</li>
                <li>• Detection of myocardial perfusion abnormalities</li>
                <li>• Screening of family members</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">Cardiac MRI</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Distinguishing HCM from mimics and hypertensive cardiomyopathy</li>
                <li>• Precise wall thickness, LA volume, LV volume, EF</li>
                <li>• Identification of high-risk features (apical aneurysm, mid-LV)</li>
                <li>• Detection of LV abnormalities in gene-positive/phenotype-negative</li>
                <li>• Detection of MV and papillary muscle abnormalities</li>
                <li>• Late gadolinium enhancement — extent of fibrosis for SCD risk</li>
                <li>• Assessment of improving or worsening disease</li>
              </ul>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">Cardiac CT</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Epicardial coronary artery disease and myocardial bridging</li>
                <li>• Ventricular volumes, wall thickness, EF</li>
                <li>• Fibrosis evaluation when CMR contraindicated</li>
                <li>• Requires radiation</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'cmr' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-purple-500">
            <h2 className="card-header">6.3 CMR Imaging</h2>
            <p className="text-sm text-gray-600 mb-3">Complementary to echocardiography — high spatial resolution for diagnosis, risk prediction, and SRT planning</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>CMR imaging</strong> indicated when echo is inconclusive for diagnostic clarification.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>CMR for LVH with suspicion of alternative diagnoses</strong> (infiltrative, storage disease, athlete&apos;s heart).</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>CMR for SCD risk assessment</strong> — useful for max wall thickness, EF, LV apical aneurysm, and extent of LGE.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>CMR for SRT planning</strong> — indicated when anatomic mechanism of obstruction is inconclusive on echo.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Repeat contrast-enhanced CMR</strong> every 3–5 years may be considered to evaluate changes in LGE, EF, morphologic changes including apical aneurysm or LV wall thickness.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-800 text-sm">LGE (Late Gadolinium Enhancement)</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Represents myocardial replacement fibrosis — a noninvasive marker for increased risk</li>
                <li>• Extensive LGE (≥15% of LV mass) associated with increased risk for VT and SCD</li>
                <li>• Can serve as arbiter for ICD placement when risk remains ambiguous</li>
                <li>• CMR more sensitive than echo for detecting focal hypertrophy and apical aneurysms</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'other' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-orange-500">
            <h2 className="card-header">6.4 Cardiac CT</h2>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 mb-3">
              <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE C-LD</span></div>
              <p className="text-sm text-gray-700">In adult patients with suspected HCM, cardiac CT may be considered if echo is non-diagnostic and CMR is unavailable.</p>
            </div>
            <p className="text-sm text-gray-600">CT provides excellent spatial resolution for LV structure (hypertrophy pattern, wall thickness, subaortic membrane, intracardiac thrombus) and coronary anatomy. Disadvantages include radiation and radioiodine contrast.</p>
          </div>

          <div className="card border-l-4 border-teal-500">
            <h2 className="card-header">6.5 Heart Rhythm Assessment</h2>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>12-lead ECG</strong> at initial evaluation and every 1–2 years for periodic follow-up.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>24- to 48-hour ambulatory ECG monitoring</strong> at initial evaluation and every 1–2 years for SCD risk and arrhythmia management.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Extended monitoring</strong> (&gt;24 hours) for palpitations or lightheadedness for arrhythmia diagnosis.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>ECG in first-degree relatives</strong> as part of the screening algorithm (Table 7).</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>AF screening</strong> with extended ambulatory monitoring in patients at high risk for AF, eligible for anticoagulation — recommended at initial evaluation and annually.</p>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-gray-400">
            <h2 className="card-header">6.6 Angiography & Invasive Assessment</h2>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Invasive hemodynamic assessment</strong> recommended when there is uncertainty about LVOTO on noninvasive imaging.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Coronary angiography</strong> for symptoms/evidence of myocardial ischemia, and pre-surgical myectomy in patients with CAD risk.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'exercise' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-amber-500">
            <h2 className="card-header">6.7 Exercise Stress Testing</h2>
            <p className="text-sm text-gray-600 mb-3">Safe and provides information on severity/mechanism of functional limitation, latent LVOTO, and prognosis</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Exercise TTE</strong> for symptomatic patients without resting/provocable LVOT gradient ≥50 mm Hg for detection and quantification of dynamic LVOTO.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>CPET</strong> for nonobstructive HCM with advanced HF (NYHA III–IV) to quantify functional limitation and aid transplant selection.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Pediatric patients:</strong> Regardless of symptom status, exercise stress testing is recommended to determine functional capacity and provide prognostic information.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Adult exercise testing</strong> is reasonable to determine functional capacity and provide prognostic information at initial evaluation.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Periodic exercise testing</strong> every 2–3 years may be considered when functional capacity decline is unclear.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 text-sm">Key Points</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Dobutamine NOT recommended — lack of specificity</li>
                <li>• Exercise testing useful in older children (typically &gt;7–8 years)</li>
                <li>• CPET preferred when available — peak VO₂ and ventilatory parameters predict outcomes</li>
                <li>• Reduced exercise capacity is prognostic for death, HF, and ventricular arrhythmias</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'genetics' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-indigo-500">
            <h2 className="card-header">6.8 Genetics & Family Screening</h2>
            <p className="text-sm text-gray-600 mb-3">Genetic testing is important for diagnosis, cascade testing, and family management</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Familial evaluation</strong> including 3-generation family history is recommended at initial assessment.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Genetic testing</strong> is beneficial to elucidate the genetic basis and facilitate identification of at-risk family members (cascade testing).</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Atypical presentations:</strong> When another genetic condition is suspected (HCM phenocopy), workup including genetic testing for HCM and other genetic causes is recommended.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Genetic counseling</strong> by an expert in the genetics of cardiovascular disease is recommended.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>First-tier gene panel</strong> should include genes with strong evidence for HCM: <em>MYH7, MYBPC3, TNNI3, TNNT2, TPM1, MYL2, MYL3, ACTC1</em>.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Cascade genetic testing</strong> of first-degree relatives after a pathogenic/likely pathogenic variant is identified in the proband.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Postmortem genetic testing</strong> after sudden unexplained death with postmortem HCM diagnosis — facilitates cascade screening of living relatives.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Variant reevaluation:</strong> Serial reevaluation of identified variants is recommended to assess for reclassification that may impact cascade screening.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Preconception/prenatal counseling</strong> and genetic counseling should be offered in affected families.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 text-sm">Class 3 (No Benefit)</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Cascade genetic testing in the family is <strong>NOT useful</strong> if the proband has no pathogenic variant (only benign/likely benign variants).</li>
                <li>• <strong>Ongoing clinical screening NOT indicated</strong> in genotype-negative relatives of genotype-positive HCM unless variant is reclassified.</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 text-sm">Sarcomeric Gene Variants in HCM</h3>
              <p className="text-xs text-gray-500 mt-1 mb-2">Braunwald, NEJM 2025</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• At least <strong>8 genes encoding sarcomeric proteins</strong> are causal for HCM</li>
                <li>• <strong>MYBPC3 (~45%)</strong> and <strong>MYH7 (~35%)</strong> are the most common on multigenic panels</li>
                <li>• Pathogenic variants modify calcium sensitivity, actomyosin contractile mechanisms, energy metabolism, and mitochondrial function</li>
              </ul>
            </div>

            <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 text-sm">Genotype–Phenotype Correlations</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• <strong>Gene-positive + phenotype-positive:</strong> earlier onset of overt HCM, more frequent arrhythmias and heart failure</li>
                <li>• <strong>Gene-negative + phenotype-positive:</strong> later onset, generally less severe clinical course</li>
              </ul>
            </div>

            <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 text-sm">SHaRE Registry Data</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Patients with LV dysfunction had greater prevalence of pathogenic sarcomeric variants</li>
                <li>• Thicker walls and greater LA dilation in gene-positive LV dysfunction cohort</li>
                <li>• Higher incidence of death, stroke, and atrial fibrillation</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {diagnosisTab === 'genotype' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-rose-500">
            <h2 className="card-header">6.9 Genotype-Positive, Phenotype-Negative Individuals</h2>
            <p className="text-sm text-gray-600 mb-3">Individuals who carry a pathogenic/likely pathogenic HCM-causing variant but are asymptomatic without evidence of LVH — also described as preclinical HCM</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Serial clinical assessment, ECG, and cardiac imaging</strong> at periodic intervals — every 1–2 years in children/adolescents, every 3–5 years in adults, and with any change in clinical status.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Competitive sports of any intensity</strong> — participation is reasonable.</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-red">Class 3: No Benefit</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>ICD is NOT recommended</strong> for primary prevention in genotype-positive, phenotype-negative individuals.</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-rose-50 rounded-lg border border-rose-200">
              <h3 className="font-semibold text-rose-800 text-sm">Key Points</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• 5–10% phenotype-positive at first screening; another 3–5% before age 18</li>
                <li>• Phenotype conversion can occur in young adults — continued screening into adulthood warranted</li>
                <li>• Sudden death in genotype-positive, phenotype-negative individuals is rare</li>
                <li>• No arrhythmic events observed in a prospective registry of 126 such individuals</li>
                <li>• Not restricted from competitive sports; not routinely monitored with ambulatory ECG</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-indigo-800 text-sm">Variable Penetrance &amp; Long-Term Follow-Up</h3>
              <p className="text-xs text-gray-500 mt-1 mb-2">Braunwald, NEJM 2025</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Not all gene-positive individuals become phenotype-positive — <strong>variable penetrance and expressivity</strong> are the rule</li>
                <li>• Careful follow-up is needed: <strong>children every 1–2 years</strong>, <strong>adults every 3–5 years</strong></li>
                <li>• Phenotype conversion risk persists — patients can convert at any age</li>
                <li>• <strong>Competitive sports participation is reasonable</strong> (Class 2a)</li>
                <li>• <strong>ICD is NOT recommended</strong> for primary prevention in this group (Class 3: No Benefit)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
