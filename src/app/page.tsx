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
  'Shared decision-making is essential — patients, families, and care teams should collaboratively discuss testing, treatment, activity, and therapy choices.',
  'Referral to multidisciplinary HCM centers with appropriate expertise is important for optimizing care, especially for complex treatment decisions.',
  'Careful family history ascertainment, genetic counseling, and screening of first-degree relatives are cornerstones of care.',
  'SCD risk assessment integrating established risk markers with individualized risk scores facilitates shared decision-making about ICD placement.',
  'Pediatric SCD risk factors differ from adults — new validated risk calculators specific to children are now available.',
  'Cardiac myosin inhibitors (mavacamten) are now available for symptomatic obstructive HCM, reducing LVOT obstruction and improving symptoms.',
  'Invasive SRT (surgical myectomy and alcohol septal ablation) at experienced HCM centers provides safe, effective relief for drug-refractory obstruction.',
  'HCM patients with AF have high stroke risk — oral anticoagulation (DOACs preferred) is recommended independent of CHA₂DS₂-VASc score.',
  'Exercise stress testing is valuable for determining functional capacity, detecting latent LVOTO, and providing prognostic information — especially in children.',
  'Healthy recreational exercise is beneficial for patients with HCM — universal restriction from vigorous activity or competitive sports is NOT indicated.',
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
      </div>

      {/* Quick reference card — HCM Definition */}
      <div className="card mb-6 border-l-4 border-primary">
        <h2 className="card-header">HCM Definition & Key Criteria</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-2 pr-4 font-semibold text-primary">Feature</th>
                <th className="text-left py-2 font-semibold text-primary">Criteria</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
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
                <td className="py-2 pr-4 font-medium">LVOTO Present</td>
                <td className="py-2">Peak LVOT gradient ≥30 mm Hg (resting or provoked); ≥50 mm Hg = threshold for intervention</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Common Genetics</td>
                <td className="py-2">MYH7, MYBPC3 (most common); also TNNI3, TNNT2, TPM1, MYL2, MYL3, ACTC1</td>
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
