import { Link } from "wouter";

const reactions = [
  { name: "فوهلر (اليوريا)", eq: "AgCNO + NH₄Cl → AgCl + NH₄CNO →(Δ)→ NH₂CONH₂", cat: "تاريخ" },
  { name: "هلجنة الألكان", eq: "RH + X₂ →(UV)→ RX + HX", cat: "ألكانات" },
  { name: "فورتز", eq: "2RX + 2Na → R-R + 2NaX", cat: "ألكانات" },
  { name: "كولب", eq: "2RCOONa →(كهرباء)→ R-R + 2CO₂ + H₂", cat: "ألكانات" },
  { name: "تحضير ألكين (نزع ماء)", eq: "R-CH₂OH →(H₂SO₄/170°)→ R-CH=CH₂ + H₂O", cat: "ألكينات" },
  { name: "إضافة HBr (ماركوفنيكوف)", eq: "CH₃CH=CH₂ + HBr → CH₃CHBrCH₃", cat: "ألكينات" },
  { name: "إضافة Br₂ (اكتشاف π)", eq: "R-CH=CH₂ + Br₂ → R-CHBr-CH₂Br", cat: "ألكينات" },
  { name: "أوزنة الألكين", eq: "R-CH=CH₂ + O₃ →(H₂O)→ RCHO + CH₂O", cat: "ألكينات" },
  { name: "نترة البنزين", eq: "C₆H₆ + HNO₃ →(H₂SO₄/55°)→ C₆H₅NO₂ + H₂O", cat: "بنزين" },
  { name: "هلجنة البنزين (فريدل-كرافت)", eq: "C₆H₆ + Cl₂ →(FeCl₃)→ C₆H₅Cl + HCl", cat: "بنزين" },
  { name: "ألكلة فريدل-كرافت", eq: "C₆H₆ + RCl →(AlCl₃)→ C₆H₅R + HCl", cat: "بنزين" },
  { name: "تحلل هاليد → كحول", eq: "RX + NaOH(مائي) → ROH + NaX", cat: "هاليدات" },
  { name: "هاليد + KCN → نيتريل", eq: "RX + KCN → R-CN + KX", cat: "هاليدات" },
  { name: "هاليد + NH₃ → أمين", eq: "RX + NH₃ → R-NH₂ + HX", cat: "هاليدات" },
  { name: "أكسدة كحول أولي", eq: "R-CH₂OH →[O]→ RCHO →[O]→ RCOOH", cat: "كحولات" },
  { name: "أكسدة كحول ثانوي", eq: "R-CHOH-R' →[O]→ R-CO-R'", cat: "كحولات" },
  { name: "جريجنارد + ألدهيد", eq: "RMgX + R'CHO →(H₃O⁺)→ R-CHOH-R'", cat: "كحولات" },
  { name: "تحضير ميثانول صناعياً", eq: "CO + 2H₂ →(ZnO/250°)→ CH₃OH", cat: "كحولات" },
  { name: "فينول + NaOH", eq: "C₆H₅OH + NaOH → C₆H₅ONa + H₂O", cat: "فينولات" },
  { name: "نترة الفينول → بيكريك", eq: "C₆H₅OH + 3HNO₃ →(H₂SO₄)→ C₆H₂(NO₂)₃OH", cat: "فينولات" },
  { name: "أكسدة كحول البنزيل", eq: "C₆H₅CH₂OH →[O]→ C₆H₅CHO →[O]→ C₆H₅COOH", cat: "فينولات" },
  { name: "ثيول → ثنائي كبريتيد", eq: "2RSH →[O]→ R–S–S–R", cat: "كحولات" },
  { name: "تفكك الإيثر", eq: "R–O–R' + HI → RI + R'OH", cat: "كحولات" },
  { name: "هدرجة الألكاين", eq: "RC≡CR + H₂ →(Ni)→ RCH=CHR →(H₂)→ RCH₂CH₂R", cat: "ألكينات" },
  { name: "نزع الكربوكسيل", eq: "RCOONa + NaOH →(CaO/Δ)→ RH + Na₂CO₃", cat: "ألكانات" },
  { name: "اختزال هاليد", eq: "R-X + Zn/HCl → RH + ZnXCl", cat: "هاليدات" },
  { name: "هاليد + NH₃ → أمين", eq: "RX + NH₃ → R-NH₂ + HX", cat: "هاليدات" },
];

const formulas = [
  { name: "ألكانات", formula: "CₙH₂ₙ₊₂", example: "CH₄, C₂H₆" },
  { name: "ألكانات حلقية", formula: "CₙH₂ₙ", example: "C₃H₆ (سيكلوبروبان)" },
  { name: "ألكينات", formula: "CₙH₂ₙ", example: "C₂H₄ (إيثين)" },
  { name: "ألكاينات", formula: "CₙH₂ₙ₋₂", example: "C₂H₂ (إيثاين)" },
  { name: "دايينات", formula: "CₙH₂ₙ₋₂", example: "C₄H₆ (بيوتاديين)" },
  { name: "البنزين", formula: "C₆H₆", example: "الحلقة العطرية" },
  { name: "هاليدات الألكيل", formula: "R–X", example: "CH₃Cl, C₂H₅Br" },
  { name: "الكحولات", formula: "R–OH", example: "CH₃OH, C₂H₅OH" },
  { name: "الثيولات", formula: "R–SH", example: "CH₃SH (ميثانثيول)" },
  { name: "الإيثرات", formula: "R–O–R'", example: "C₂H₅OC₂H₅" },
  { name: "الفينولات", formula: "Ar–OH", example: "C₆H₅OH" },
];

const hybridization = [
  { type: "sp³", shape: "رباعي الأوجه", angle: "109.5°", bonds: "4 روابط أحادية", example: "CH₄" },
  { type: "sp²", shape: "مثلثي مستوٍ", angle: "120°", bonds: "رابطة مزدوجة", example: "C₂H₄" },
  { type: "sp", shape: "خطي", angle: "180°", bonds: "رابطة ثلاثية", example: "C₂H₂" },
];

const catColors: Record<string, string> = {
  "تاريخ": "bg-gray-100 text-gray-700",
  "ألكانات": "bg-blue-100 text-blue-700",
  "ألكينات": "bg-teal-100 text-teal-700",
  "بنزين": "bg-purple-100 text-purple-700",
  "هاليدات": "bg-indigo-100 text-indigo-700",
  "كحولات": "bg-cyan-100 text-cyan-700",
  "فينولات": "bg-green-100 text-green-700",
};

const stability = [
  { title: "ثبات الكربوكاتيون", order: "3° > 2° > 1° > CH₃⁺", tip: "المجموعات الدافعة تستقر الكربوكاتيون" },
  { title: "ثبات الكربانيون", order: "1° > 2° > 3°", tip: "المجموعات الساحبة تستقر الكربانيون" },
  { title: "ثبات cis/trans", order: "trans > cis", tip: "trans أقل ضغطاً فراغياً" },
  { title: "سهولة نزع الماء", order: "3° > 2° > 1°", tip: "الكحول الثالثي أسهل نزع الماء منه" },
  { title: "اختبار لوكاس (سرعة)", order: "3° (فوري) > 2° (بطيء) > 1° (لا يتفاعل)", tip: "مقياس نشاط الكحول" },
  { title: "نشاط SN1", order: "3° > 2° > 1°", tip: "يعتمد على ثبات الكربوكاتيون" },
  { title: "نشاط SN2", order: "1° > 2° > 3°", tip: "يعتمد على قلة الإعاقة الفراغية" },
  { title: "حمضية المركبات", order: "فينول > ثيول > كحول", tip: "pKa: فينول 10، ثيول 11، كحول 16" },
];

const importantFacts = [
  "فوهلر 1828 → كسر نظرية القوة الحيوية",
  "فاراداي اكتشف البنزين، كيكوله اقترح بنيته",
  "الرنين في البنزين يجعل جميع روابطه متساوية (1.39 Å)",
  "الأوزونة تُحدد موضع الرابطة المزدوجة",
  "FeCl₃ + فينول → بنفسجي (يميز الفينول عن الكحول العطري)",
  "الكحول الثالثي لا يتأكسد في الظروف العادية",
  "النيوكليوفيل مانح إلكترونات، الإلكتروفيل مستقبل",
  "مجموعات o/p: مانحة للإلكترون. مجموعات meta: ساحبة",
  "الميثانول سام جداً — يسبب العمى والوفاة (يُعالج بالإيثانول)",
  "الانشطار المتماثل → جذور حرة؛ غير المتماثل → أيونات",
  "تفاعل فورتز يضاعف عدد الكربونات: 2RX + 2Na → R-R",
  "الباكلايت = أول بلاستيك صناعي (فينول + فورمالدهيد)",
  "الثيولات (R–SH) أكثر حمضية من الكحولات — رائحة كريهة",
  "الإيثرات (R–O–R') متعادلة — خطر البيروكسيدات المتفجرة",
  "SN1: خطوتان عبر كربوكاتيون → خليط راسميك",
  "SN2: خطوة واحدة → انقلاب فراغي (Walden Inversion)",
  "قاعدة زايتسيف: الألكين الأكثر استبدالاً هو الأكثر ثباتاً",
  "الترافق الفائق (Hyperconjugation) يثبت الكربوكاتيون",
];

export default function CheatSheet() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="gold-gradient rounded-2xl p-6 text-gray-900 mb-8 text-center shadow-lg">
        <div className="text-4xl mb-2">⚡</div>
        <h1 className="text-2xl font-black chapter-heading mb-1">الورقة الذهبية للمراجعة</h1>
        <p className="text-gray-800 text-sm">كل ما تحتاجه قبل الامتحان في صفحة واحدة</p>
      </div>

      {/* Formulas */}
      <section className="mb-8">
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full navy-gradient text-white text-xs flex items-center justify-center">1</span>
          الصيغ العامة
        </h2>
        <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
          <table className="comparison-table w-full text-sm">
            <thead>
              <tr>
                <th>المجموعة</th>
                <th>الصيغة العامة</th>
                <th>مثال</th>
              </tr>
            </thead>
            <tbody>
              {formulas.map((f) => (
                <tr key={f.name}>
                  <td className="font-bold text-right">{f.name}</td>
                  <td className="font-mono font-bold text-blue-900">{f.formula}</td>
                  <td className="text-gray-600">{f.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Hybridization */}
      <section className="mb-8">
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full navy-gradient text-white text-xs flex items-center justify-center">2</span>
          جدول التهجين
        </h2>
        <div className="overflow-x-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
          <table className="comparison-table w-full text-sm">
            <thead>
              <tr>
                <th>التهجين</th>
                <th>الشكل الهندسي</th>
                <th>الزاوية</th>
                <th>نوع الروابط</th>
                <th>مثال</th>
              </tr>
            </thead>
            <tbody>
              {hybridization.map((h) => (
                <tr key={h.type}>
                  <td className="font-black text-blue-900">{h.type}</td>
                  <td>{h.shape}</td>
                  <td className="font-bold text-amber-700">{h.angle}</td>
                  <td>{h.bonds}</td>
                  <td className="font-mono">{h.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Stability Orders */}
      <section className="mb-8">
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full navy-gradient text-white text-xs flex items-center justify-center">3</span>
          ترتيبات الثبات والنشاط
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {stability.map((s) => (
            <div key={s.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="font-black text-gray-900 text-sm mb-1">{s.title}</div>
              <div className="font-mono text-emerald-700 font-bold text-sm mb-2 bg-emerald-50 px-3 py-1.5 rounded-lg">{s.order}</div>
              <div className="text-xs text-gray-500">{s.tip}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reactions Cheat */}
      <section className="mb-8">
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full navy-gradient text-white text-xs flex items-center justify-center">4</span>
          التفاعلات الأساسية
        </h2>
        <div className="space-y-2">
          {reactions.map((rx, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex items-start gap-3 flex-wrap">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${catColors[rx.cat] || "bg-gray-100 text-gray-700"}`}>{rx.cat}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-gray-700 mb-1">{rx.name}</div>
                <div className="font-mono text-xs text-gray-800 bg-gray-50 px-2 py-1 rounded overflow-x-auto">{rx.eq}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Facts */}
      <section className="mb-8">
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full navy-gradient text-white text-xs flex items-center justify-center">5</span>
          حقائق لا تُنسى
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {importantFacts.map((fact, i) => (
            <div key={i} className="flex items-start gap-2 bg-white rounded-xl border border-amber-100 shadow-sm p-3">
              <span className="text-amber-500 font-black shrink-0">⭐</span>
              <span className="text-sm text-gray-800">{fact}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tests */}
      <section className="mb-8">
        <h2 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full navy-gradient text-white text-xs flex items-center justify-center">6</span>
          الاختبارات الكيميائية السريعة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { test: "اختبار ماء البروم", target: "رابطة مزدوجة أو ثلاثية", result: "يزيل اللون البني" },
            { test: "اختبار لوكاس (HCl/ZnCl₂)", target: "نوع الكحول", result: "3°=فوري، 2°=بطيء، 1°=لا يتفاعل" },
            { test: "اختبار FeCl₃", target: "الفينول", result: "لون بنفسجي مميز" },
            { test: "KMnO₄ (بنفسجي)", target: "ألكينات، كحولات أولية/ثانوية", result: "يتحول للون البني/الأخضر" },
            { test: "ورقة النشا+يود (زرقاء)", target: "يود", result: "يتحول للأزرق القاتم" },
            { test: "اختبار NaOH", target: "الفينول (حمضي)", result: "يتفاعل ويكوّن ملح فينوكسيد" },
            { test: "اختبار الثيول (الرائحة)", target: "R–SH", result: "رائحة كريهة ونفاذة مميزة" },
            { test: "اختبار البيروكسيد في الإيثر", target: "R–O–R' مؤكسد", result: "يتحوّل لون FeSO₄ إلى بني" },
          ].map((t) => (
            <div key={t.test} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="font-black text-gray-900 text-sm mb-1">{t.test}</div>
              <div className="text-xs text-blue-700 mb-1">🎯 يكتشف: {t.target}</div>
              <div className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded">✅ {t.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div className="text-center py-4">
        <Link href="/contents" className="text-sm text-emerald-600 hover:underline font-medium">← العودة إلى الفهرس</Link>
      </div>
    </div>
  );
}
