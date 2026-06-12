import { Link } from "wouter";
import { chapters } from "@/data/chapters";

const colorMap: Record<string, string> = {
  navy: "from-blue-900 to-blue-700",
  emerald: "from-emerald-700 to-teal-600",
  blue: "from-blue-600 to-blue-500",
  teal: "from-teal-600 to-cyan-500",
  purple: "from-purple-700 to-violet-600",
  indigo: "from-indigo-700 to-blue-600",
  cyan: "from-cyan-600 to-teal-500",
  green: "from-green-700 to-emerald-600",
};

export default function Cover() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="navy-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm text-emerald-300 font-medium mb-6 border border-white/20">
            <span>🎓</span>
            <span>كتاب جامعي متكامل • مستوى متقدم</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight chapter-heading">
            الكيمياء العضوية
          </h1>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full mb-6" />
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            دليل شامل يغطي مبادئ الكيمياء العضوية من أساسياتها حتى المفاهيم المتقدمة — مع آليات التفاعل والجداول المقارنة وأسئلة الامتحانات
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contents" className="gold-gradient text-gray-900 font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
              📋 فهرس المحتويات
            </Link>
            <Link href="/chapter/1" className="bg-white/10 backdrop-blur text-white border border-white/30 font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              🚀 ابدأ الدراسة
            </Link>
            <Link href="/cheatsheet" className="bg-emerald-500/20 backdrop-blur text-emerald-300 border border-emerald-500/40 font-bold px-6 py-3 rounded-xl hover:bg-emerald-500/30 transition-colors">
              ⚡ مراجعة سريعة
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "📖", value: "8", label: "فصول كاملة" },
            { icon: "⚗️", value: "40+", label: "تفاعل كيميائي" },
            { icon: "❓", value: "60+", label: "سؤال امتحاني" },
            { icon: "🧠", value: "50+", label: "حيلة للحفظ" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-3">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Molecular Diagram */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-black text-gray-900 mb-2 text-center chapter-heading">
          رسوم توضيحية للتهجين والبنية الجزيئية
        </h2>
        <p className="text-gray-500 text-center text-sm mb-8">شكل مبسط لأنواع التهجين الثلاثة في الكربون</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* sp3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <svg viewBox="0 0 200 180" className="w-full max-w-48 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="90" r="16" fill="#1e3a5f" />
              <text x="100" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C</text>
              <circle cx="50" cy="40" r="12" fill="#2ecc71" /><text x="50" y="45" textAnchor="middle" fill="white" fontSize="10">H</text>
              <circle cx="150" cy="40" r="12" fill="#2ecc71" /><text x="150" y="45" textAnchor="middle" fill="white" fontSize="10">H</text>
              <circle cx="40" cy="140" r="12" fill="#2ecc71" /><text x="40" y="145" textAnchor="middle" fill="white" fontSize="10">H</text>
              <circle cx="160" cy="140" r="12" fill="#2ecc71" /><text x="160" y="145" textAnchor="middle" fill="white" fontSize="10">H</text>
              <line x1="84" y1="78" x2="62" y2="52" stroke="#1e3a5f" strokeWidth="2"/>
              <line x1="116" y1="78" x2="138" y2="52" stroke="#1e3a5f" strokeWidth="2"/>
              <line x1="84" y1="102" x2="52" y2="128" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="4,2"/>
              <line x1="116" y1="102" x2="148" y2="128" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="4,2"/>
            </svg>
            <div className="font-black text-xl text-blue-900 mb-1">sp³</div>
            <div className="text-sm text-gray-500">رباعي الأوجه • 109.5°</div>
            <div className="text-xs text-emerald-600 mt-2 font-medium">CH₄, C₂H₆</div>
          </div>

          {/* sp2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <svg viewBox="0 0 200 180" className="w-full max-w-48 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="90" r="16" fill="#1e3a5f" />
              <text x="100" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C</text>
              <circle cx="30" cy="90" r="12" fill="#2ecc71" /><text x="30" y="95" textAnchor="middle" fill="white" fontSize="10">H</text>
              <circle cx="135" cy="90" r="16" fill="#1e3a5f" /><text x="135" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C</text>
              <circle cx="170" cy="55" r="12" fill="#2ecc71" /><text x="170" y="60" textAnchor="middle" fill="white" fontSize="10">H</text>
              <circle cx="170" cy="125" r="12" fill="#2ecc71" /><text x="170" y="130" textAnchor="middle" fill="white" fontSize="10">H</text>
              <line x1="84" y1="90" x2="42" y2="90" stroke="#1e3a5f" strokeWidth="2"/>
              <line x1="116" y1="87" x2="119" y2="87" stroke="#1e3a5f" strokeWidth="2.5"/>
              <line x1="116" y1="93" x2="119" y2="93" stroke="#1e3a5f" strokeWidth="2.5"/>
              <line x1="151" y1="78" x2="162" y2="63" stroke="#1e3a5f" strokeWidth="2"/>
              <line x1="151" y1="102" x2="162" y2="117" stroke="#1e3a5f" strokeWidth="2"/>
              <rect x="116" y="85" width="3" height="10" fill="#f39c12" rx="1"/>
            </svg>
            <div className="font-black text-xl text-blue-900 mb-1">sp²</div>
            <div className="text-sm text-gray-500">مثلثي مستوٍ • 120°</div>
            <div className="text-xs text-emerald-600 mt-2 font-medium">C₂H₄, C₆H₆</div>
          </div>

          {/* sp */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
            <svg viewBox="0 0 200 180" className="w-full max-w-48 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="90" r="12" fill="#2ecc71" /><text x="40" y="95" textAnchor="middle" fill="white" fontSize="10">H</text>
              <circle cx="80" cy="90" r="16" fill="#1e3a5f" /><text x="80" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C</text>
              <circle cx="120" cy="90" r="16" fill="#1e3a5f" /><text x="120" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">C</text>
              <circle cx="160" cy="90" r="12" fill="#2ecc71" /><text x="160" y="95" textAnchor="middle" fill="white" fontSize="10">H</text>
              <line x1="52" y1="90" x2="64" y2="90" stroke="#1e3a5f" strokeWidth="2"/>
              <line x1="96" y1="87" x2="104" y2="87" stroke="#1e3a5f" strokeWidth="2.5"/>
              <line x1="96" y1="90" x2="104" y2="90" stroke="#f39c12" strokeWidth="2.5"/>
              <line x1="96" y1="93" x2="104" y2="93" stroke="#1e3a5f" strokeWidth="2.5"/>
              <line x1="136" y1="90" x2="148" y2="90" stroke="#1e3a5f" strokeWidth="2"/>
            </svg>
            <div className="font-black text-xl text-blue-900 mb-1">sp</div>
            <div className="text-sm text-gray-500">خطي • 180°</div>
            <div className="text-xs text-emerald-600 mt-2 font-medium">C₂H₂</div>
          </div>
        </div>

        {/* Benzene Ring SVG */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
          <h3 className="text-lg font-black text-gray-900 mb-2 text-center">بنية البنزين والرنين</h3>
          <p className="text-center text-sm text-gray-500 mb-6">الإلكترونات متوزعة بالتساوي على الحلقة كلها</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <svg viewBox="0 0 160 160" className="w-40 h-40" xmlns="http://www.w3.org/2000/svg">
              <polygon points="80,20 130,50 130,110 80,140 30,110 30,50" fill="none" stroke="#1e3a5f" strokeWidth="3"/>
              <line x1="80" y1="20" x2="130" y2="50" stroke="#f39c12" strokeWidth="4"/>
              <line x1="130" y1="110" x2="80" y2="140" stroke="#f39c12" strokeWidth="4"/>
              <line x1="30" y1="50" x2="30" y2="110" stroke="#f39c12" strokeWidth="4"/>
              <circle cx="42" cy="12" r="7" fill="#2ecc71"/><text x="42" y="16" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="118" cy="12" r="7" fill="#2ecc71"/><text x="118" y="16" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="148" cy="80" r="7" fill="#2ecc71"/><text x="148" y="84" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="118" cy="148" r="7" fill="#2ecc71"/><text x="118" y="152" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="42" cy="148" r="7" fill="#2ecc71"/><text x="42" y="152" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="12" cy="80" r="7" fill="#2ecc71"/><text x="12" y="84" textAnchor="middle" fill="white" fontSize="8">H</text>
            </svg>
            <div className="text-center">
              <div className="text-3xl font-black text-amber-500 mb-2">↔</div>
              <p className="text-sm text-gray-600 max-w-48">الرنين يوزّع الإلكترونات على الحلقة بأكملها</p>
            </div>
            <svg viewBox="0 0 160 160" className="w-40 h-40" xmlns="http://www.w3.org/2000/svg">
              <polygon points="80,20 130,50 130,110 80,140 30,110 30,50" fill="none" stroke="#1e3a5f" strokeWidth="2.5"/>
              <circle cx="80" cy="80" r="30" fill="none" stroke="#f39c12" strokeWidth="2.5" strokeDasharray="5,3"/>
              <circle cx="42" cy="12" r="7" fill="#2ecc71"/><text x="42" y="16" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="118" cy="12" r="7" fill="#2ecc71"/><text x="118" y="16" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="148" cy="80" r="7" fill="#2ecc71"/><text x="148" y="84" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="118" cy="148" r="7" fill="#2ecc71"/><text x="118" y="152" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="42" cy="148" r="7" fill="#2ecc71"/><text x="42" y="152" textAnchor="middle" fill="white" fontSize="8">H</text>
              <circle cx="12" cy="80" r="7" fill="#2ecc71"/><text x="12" y="84" textAnchor="middle" fill="white" fontSize="8">H</text>
            </svg>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">التمثيل الكيكولي (يسار) والتمثيل الصحيح (يمين — دائرة داخل السداسي)</p>
        </div>

        {/* Chapters Grid */}
        <h2 className="text-2xl font-black text-gray-900 mb-6 text-center chapter-heading">الفصول الدراسية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {chapters.map((ch) => (
            <Link
              key={ch.id}
              href={`/chapter/${ch.id}`}
              className="block bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[ch.color] || "from-blue-700 to-blue-500"} text-2xl mb-3 shadow-sm group-hover:scale-105 transition-transform`}>
                {ch.icon}
              </div>
              <div className="text-xs text-gray-400 mb-1">الفصل {ch.id}</div>
              <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1">{ch.title}</h3>
              <p className="text-xs text-gray-500 leading-snug">{ch.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="navy-gradient text-white mt-8 py-8 px-6 text-center">
        <div className="text-2xl mb-2">⚗️</div>
        <p className="text-blue-200 text-sm">الكيمياء العضوية — كتاب تعليمي متكامل</p>
        <p className="text-blue-300/60 text-xs mt-1">استناداً إلى ملخص الكيمياء العضوية الجامعي</p>
      </footer>
    </div>
  );
}
