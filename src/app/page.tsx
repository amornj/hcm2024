'use client'

import Link from 'next/link'

const sections = [
  {
    href: '/diagnosis',
    title: 'Diagnosis',
    desc: 'Clinical evaluation, echocardiography, CMR, cardiac CT, heart rhythm, exercise stress testing, genetics',
    icon: '🔍',
    color: 'border-emerald-500',
  },
  {
    href: '/scd-risk',
    title: 'SCD Risk Assessment',
    desc: 'Adult & pediatric risk stratification, ICD patient selection, device considerations',
    icon: '⚠️',
    color: 'border-yellow-500',
  },
  {
    href: '/management',
    title: 'Management',
    desc: 'Obstructive & nonobstructive HCM, advanced HF, atrial fibrillation, ventricular arrhythmias',
    icon: '💊',
    color: 'border-red-500',
  },
  {
    href: '/lifestyle',
    title: 'Lifestyle',
    desc: 'Exercise & sports, occupation, pregnancy, comorbidity management',
    icon: '🏃',
    color: 'border-blue-500',
  },
  {
    href: '/ask',
    title: 'Ask NotebookLM',
    desc: 'AI-powered Q&A on the 2024 HCM Guidelines',
    icon: '🤖',
    color: 'border-pink-500',
  },
]

const top10 = [
  '~70% of HCM patients have LVOT obstruction — always provoke if resting gradient <50 mmHg (Valsalva, standing, exercise).',
  'LVEF <50% in HCM represents serious dysfunction (analogous to EF 35–40% in non-HCM) — occurs in 6–8% and triggers HF management pathway.',
  'Cardiac myosin inhibitors (mavacamten, aficamten) reduce LVOT gradient, wall thickness, LV mass, and symptoms — a paradigm shift for obstructive HCM.',
  'SCD risk assessment every 1–2 years: family hx, wall thickness ≥30 mm, unexplained syncope, NSVT, apical aneurysm, extensive LGE (≥15% LV mass), EF <50%.',
  'SCD incidence decreases with age — infrequent in patients ≥60 years; ICD benefit must be weighed accordingly.',
  'AF occurs in ~25% of HCM — high stroke risk; anticoagulate regardless of CHA₂DS₂-VASc score (DOACs first-line).',
  'Gene-positive, phenotype-positive patients have earlier onset, more arrhythmias and HF than gene-negative patients.',
  'MYBPC3 (~45%) and MYH7 (~35%) account for ~80% of identified pathogenic variants — cascade testing of first-degree relatives is essential.',
  'Septal reduction therapy (myectomy or alcohol ablation) at experienced centers: 30-day mortality ~0.4%, annual mortality ~0.6%, >90% symptomatic improvement.',
  'Exercise is beneficial — universal restriction is NOT indicated. Shared decision-making for vigorous/competitive activity.',
]

export default function HomePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Hypertrophic Cardiomyopathy Clinical Guide
        </h1>
        <p className="text-gray-600 mt-2">
          Based on the 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Ommen SR, Ho CY, Asif IM, et al. Circulation 2024;149:e1239–e1311
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          Updated with insights from Braunwald E. <em>NEJM</em> 2025;393:1004–15
        </p>
      </div>

      {/* Quick reference card — HCM Definition */}
      <div className="card mb-6 border-l-4 border-primary">
        <h2 className="card-header">HCM Definition & Key Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-2 pr-4 font-semibold text-primary">Feature</th>
                <th className="text-left py-2 font-semibold text-primary">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2 pr-4 font-medium">Prevalence</td>
                <td className="py-2">~1 in 500 adults; all races, all ages</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Clinical Diagnosis (Adults)</td>
                <td className="py-2">LV wall thickness ≥15 mm anywhere, in the absence of another cause of hypertrophy</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Borderline (Adults)</td>
                <td className="py-2">13–14 mm with family history of HCM or positive genetic test</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Pediatric Diagnosis</td>
                <td className="py-2">BSA-adjusted z-score ≥2 SD above mean; z-score &gt;2.5 for screening without family history</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">LVOT Obstruction</td>
                <td className="py-2">
                  ~70% have subaortic muscular obstruction. Caused by hypertrophied basal IVS + systolic anterior motion (SAM) of mitral valve. Peak gradient ≥30 mmHg = present; ≥50 mmHg = intervention threshold
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Dynamic Obstruction</td>
                <td className="py-2">
                  Varies inversely with LV volume — increases with Valsalva, exercise, upright position, inotropes; decreases with volume loading, squatting, beta-blockers
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Systolic Function</td>
                <td className="py-2">
                  LV cavity usually small with increased contractility and supranormal EF (70–75%). EF &lt;50% occurs in 6–8% and signifies serious dysfunction
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Diastolic Dysfunction</td>
                <td className="py-2">
                  Thickened, fibrotic LV impairs relaxation → elevated LA pressure, LVEDP, PCWP, and pulmonary artery pressures
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">MV/Papillary Variants</td>
                <td className="py-2">
                  Mitral valve and papillary muscle abnormalities can cause obstruction even without significant septal hypertrophy
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Histology</td>
                <td className="py-2">
                  Enlarged myocytes in disarray, interstitial fibrosis, thick-walled intramural coronary arteries
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Common Genetics</td>
                <td className="py-2">
                  MYBPC3 (~45%) and MYH7 (~35%) account for ~80% of variants; also TNNI3, TNNT2, TPM1, MYL2, MYL3, ACTC1
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Top 10 Take-Home Messages */}
      <div className="card mb-6">
        <h2 className="card-header">Top 10 Take-Home Messages</h2>
        <ol className="space-y-2">
          {top10.map((msg, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <span className="text-gray-700">{msg}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link key={s.href} href={s.href}>
            <div className={`card border-l-4 ${s.color} hover:shadow-lg transition-shadow cursor-pointer h-full`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-primary">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-800">
        <strong>Disclaimer:</strong> This tool is for educational and clinical reference purposes only.
        It does not replace clinical judgment. Always verify recommendations against the full guideline
        and local protocols. Not for direct patient care decisions without physician oversight.
      </div>
    </div>
  )
}
