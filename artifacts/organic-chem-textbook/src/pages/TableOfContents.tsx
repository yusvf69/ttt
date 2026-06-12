import { Link } from "wouter";
import { chapters } from "@/data/chapters";

const colorMap: Record<string, string> = {
  navy: "bg-blue-900",
  emerald: "bg-emerald-700",
  blue: "bg-blue-600",
  teal: "bg-teal-600",
  purple: "bg-purple-700",
  indigo: "bg-indigo-700",
  cyan: "bg-cyan-600",
  green: "bg-green-700",
};

export default function TableOfContents() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-4 border border-emerald-200">
          📋 فهرس المحتويات
        </div>
        <h1 className="text-3xl font-black text-gray-900 chapter-heading mb-3">دليل الكيمياء العضوية الشامل</h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          يغطي هذا الكتاب ثمانية فصول متكاملة من أساسيات الكيمياء العضوية حتى المركبات العطرية والوظيفية
        </p>
      </div>

      <div className="space-y-3 mb-10">
        {chapters.map((ch) => (
          <Link
            key={ch.id}
            href={`/chapter/${ch.id}`}
            className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer overflow-hidden"
          >
            <div className="flex items-stretch">
              <div className={`${colorMap[ch.color] || "bg-blue-700"} w-16 flex items-center justify-center text-2xl shrink-0`}>
                {ch.icon}
              </div>
              <div className="flex-1 px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">الفصل {ch.id}</div>
                    <h3 className="font-black text-gray-900">{ch.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{ch.subtitle}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-gray-400">{ch.sections.length} مقاطع</span>
                    <div className="mt-1 flex gap-1 justify-end flex-wrap">
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{ch.reactions.length} تفاعلات</span>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">{ch.examQuestions.length} أسئلة</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {ch.keyTerms.slice(0, 3).map((t) => (
                    <span key={t.term} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{t.term}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Navigation */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 text-white">
        <h2 className="font-black text-lg mb-4">روابط سريعة</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/cheatsheet"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors cursor-pointer"
          >
            <span className="text-xl">⚡</span>
            <div>
              <div className="font-bold text-sm">الورقة الذهبية</div>
              <div className="text-xs text-blue-200">مراجعة سريعة شاملة</div>
            </div>
          </Link>
          <Link
            href="/chapter/1"
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-colors cursor-pointer"
          >
            <span className="text-xl">🚀</span>
            <div>
              <div className="font-bold text-sm">ابدأ من الفصل الأول</div>
              <div className="text-xs text-blue-200">مدخل للكيمياء العضوية</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
