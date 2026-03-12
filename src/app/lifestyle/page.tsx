'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'exercise', label: 'Exercise & Sports' },
  { id: 'occupation', label: 'Occupation' },
  { id: 'pregnancy', label: 'Pregnancy' },
  { id: 'comorbidities', label: 'Comorbidities' },
]

export default function LifestylePage() {
  const { lifestyleTab, setLifestyleTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Lifestyle Considerations</h1>
      <p className="text-sm text-gray-600 mb-4">Section 9 — 2024 HCM Guideline</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setLifestyleTab(t.id)}
            className={`tab-btn ${lifestyleTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {lifestyleTab === 'exercise' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-blue-500">
            <h2 className="card-header">9.1 Recreational Physical Activity & Competitive Sports</h2>
            <p className="text-sm text-gray-600 mb-3">Major shift from 2020: universal restriction from vigorous activity is NOT indicated</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-R</span></div>
                <p className="text-sm text-gray-700"><strong>Mild- to moderate-intensity recreational exercise</strong> is beneficial for cardiorespiratory fitness, physical functioning, quality of life, and overall health.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Athletes with HCM:</strong> Comprehensive evaluation and shared decision-making about sports participation with an expert professional is recommended.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Genotype-positive, phenotype-negative:</strong> Participation in competitive sports of any intensity is reasonable.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Vigorous recreational activities</strong> reasonable after annual comprehensive evaluation and shared decision-making with an expert who balances potential benefits and risks.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Competitive sports</strong> may be considered for patients capable of high-level physical performance, after review by an expert with HCM experience who conducts annual comprehensive evaluation.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 text-sm">Class 3 (No Benefit / Harm)</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• <span className="badge-red">3: No Benefit</span> Universal restriction from vigorous physical activity or competitive sports is <strong>NOT indicated</strong> for most patients with HCM.</li>
                <li>• <span className="badge-red">3: Harm</span> ICD placement for the sole purpose of participation in competitive sports should <strong>NOT be performed</strong>.</li>
              </ul>
            </div>

            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 text-sm">Exercise Intensity (METs)</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• <strong>Light (&lt;3 METs):</strong> 40–50% max HR, Borg 7–12</li>
                <li>• <strong>Moderate (3–6 METs):</strong> 50–70% max HR, Borg 13–14</li>
                <li>• <strong>Vigorous (&gt;6 METs):</strong> &gt;70% max HR, Borg ≥15</li>
                <li>• 150–300 min/week moderate or 75–150 min/week vigorous aerobic exercise is the general population target</li>
                <li>• Children should engage in ≥60 min moderate-to-vigorous exercise daily</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {lifestyleTab === 'occupation' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-amber-500">
            <h2 className="card-header">9.2 Occupation in Patients With HCM</h2>

            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Commercial motor vehicles:</strong> It is reasonable to follow Federal Motor Carrier Safety Administration guidelines that permit driving if no ICD and no major SCD risk factors with a GDMT plan.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Pilot aircrew:</strong> Following FAA guidelines permitting multicrew flying duties is reasonable if asymptomatic, deemed low SCD risk, and able to complete a maximal treadmill stress test at 85% peak heart rate.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2b</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Manual labor/high-performance occupations</strong> (e.g., law enforcement, firefighters, construction): Approach on an individual basis after comprehensive evaluation, SCD risk stratification, and shared decision-making.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 text-sm">Key Considerations</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Important when potential for loss of consciousness can place patient or others in harm</li>
                <li>• For some occupations (commercial driving, piloting), federal guidelines cannot be superseded</li>
                <li>• No explicit disqualification for nonpilot aircrew with HCM</li>
                <li>• Heavy manual labor, construction, law enforcement, firefighting — individualized approach</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {lifestyleTab === 'pregnancy' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-rose-500">
            <h2 className="card-header">9.3 Pregnancy in Patients With HCM</h2>
            <p className="text-sm text-gray-600 mb-3">Pregnancy is well tolerated in most women with HCM — maternal mortality is very low</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Anticoagulation for pregnant women with HCM and AF:</strong> Low-molecular-weight heparin or vitamin K antagonists (≤5 mg daily) recommended for stroke prevention.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Selected beta blockers</strong> (metoprolol, bisoprolol, propranolol, labetalol) for symptoms related to LVOTO or arrhythmias, with monitoring of fetal growth.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Vaginal delivery</strong> is the recommended first-choice delivery option in most pregnant women with HCM.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Preconceptional and prenatal reproductive and genetic counseling</strong> should be offered in affected families.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Coordinated care</strong> between cardiologist and obstetrician; high-risk patients should consult maternal-fetal medicine specialist.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Pregnancy is generally safe</strong> in clinically stable women with HCM who wish to become pregnant.</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-yellow">Class 2a</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>Serial echocardiography</strong> during pregnancy, particularly 2nd–3rd trimester when hemodynamic load is highest.</p>
              </div>
            </div>

            <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 text-sm">Class 3: Harm</h3>
              <p className="text-xs text-gray-700"><strong>Mavacamten is CONTRAINDICATED in pregnancy</strong> due to potential teratogenic effects.</p>
            </div>

            <div className="mt-3 p-3 bg-rose-50 rounded-lg border border-rose-200">
              <h3 className="font-semibold text-rose-800 text-sm">Key Points</h3>
              <ul className="text-xs text-gray-700 space-y-1 mt-1">
                <li>• Maternal mortality very low — only 3 sudden deaths reported in literature (17 years)</li>
                <li>• Symptoms (dyspnea, palpitations) and complications (HF, arrhythmias) in ~25% — most had pre-existing symptoms</li>
                <li>• No difference in outcomes for women with LVOTO vs without obstruction</li>
                <li>• Cesarean section reserved for obstetric or emergency cardiac reasons only</li>
                <li>• Avoid hypotension with anesthesia (epidural/general are both acceptable)</li>
                <li>• Atenolol has some evidence of potential fetal risk</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {lifestyleTab === 'comorbidities' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-green-500">
            <h2 className="card-header">9.4 Patients With Comorbidities</h2>
            <p className="text-sm text-gray-600 mb-3">Hypertension, obesity, and sleep-disordered breathing are common and contribute to increased symptom burden</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-EO</span></div>
                <p className="text-sm text-gray-700"><strong>ACC/AHA primary prevention guideline adherence</strong> to reduce risk of cardiovascular events.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE B-NR</span></div>
                <p className="text-sm text-gray-700"><strong>Overweight/obese patients:</strong> Counseling and comprehensive lifestyle interventions for weight loss to possibly lower risk of developing LVOTO, HF, and AF.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Hypertension management:</strong> Lifestyle modifications and medical therapy with preference for beta blockers and nondihydropyridine CCBs in obstructive HCM.</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1"><span className="badge-green">Class 1</span><span className="badge-blue">LOE C-LD</span></div>
                <p className="text-sm text-gray-700"><strong>Sleep-disordered breathing:</strong> Assessment recommended; if present, referral to sleep medicine specialist for evaluation and treatment.</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 text-sm">Obesity in HCM</h3>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Very common: &gt;70% have BMI &gt;25, &gt;30% have BMI &gt;30</li>
                  <li>• Independently associated with death, HF, AF, VT, and stroke (HR 1.4–1.9)</li>
                  <li>• More symptomatic, more LVOTO, reduced exercise capacity</li>
                  <li>• Also common in pediatric HCM (~30% at 99th percentile)</li>
                  <li>• Increases susceptibility to developing HCM in genotype-negative patients</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 text-sm">Hypertension & Sleep Apnea</h3>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Hypertension in 35–50% of adult HCM patients</li>
                  <li>• Diastolic HTN associated with 4-fold risk of developing HCM in genotype-negative individuals</li>
                  <li>• Sleep-disordered breathing: 55–70% prevalence</li>
                  <li>• OSA associated with greater AF and NSVT prevalence</li>
                  <li>• Treatment of OSA may reduce symptoms and arrhythmic complications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
