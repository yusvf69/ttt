import { useState } from "react";
import { useParams, Link } from "wouter";
import { chapters } from "@/data/chapters";

const colorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
  navy:    { bg: "bg-blue-900",    text: "text-blue-900",    light: "bg-blue-50",    border: "border-blue-200" },
  emerald: { bg: "bg-emerald-700", text: "text-emerald-700", light: "bg-emerald-50", border: "border-emerald-200" },
  blue:    { bg: "bg-blue-600",    text: "text-blue-600",    light: "bg-blue-50",    border: "border-blue-200" },
  teal:    { bg: "bg-teal-600",    text: "text-teal-600",    light: "bg-teal-50",    border: "border-teal-200" },
  purple:  { bg: "bg-purple-700",  text: "text-purple-700",  light: "bg-purple-50",  border: "border-purple-200" },
  indigo:  { bg: "bg-indigo-700",  text: "text-indigo-700",  light: "bg-indigo-50",  border: "border-indigo-200" },
  cyan:    { bg: "bg-cyan-600",    text: "text-cyan-600",    light: "bg-cyan-50",    border: "border-cyan-200" },
  green:   { bg: "bg-green-700",   text: "text-green-700",   light: "bg-green-50",   border: "border-green-200" },
};

function Tabs({ tabs, active, onChange }: { tabs: string[]; active: number; onChange: (i: number) => void }) {
  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-xl overflow-x-auto mb-8">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => onChange(i)}
          className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            active === i
              ? "bg-white text-gray-900 shadow-sm font-bold"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export default function ChapterPage() {
  const params = useParams<{ id: string }>();
  const id = parseInt(params.id || "1");
  const chapter = chapters.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState(0);

  if (!chapter) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="text-5xl mb-3">🔬</div>
          <h2 className="text-xl font-bold text-gray-800">الفصل غير موجود</h2>
          <Link href="/contents" className="text-emerald-600 hover:underline mt-2 block">عودة للفهرس</Link>
        </div>
      </div>
    );
  }

  const colors = colorMap[chapter.color] || colorMap.navy;
  const tabs = ["المحتوى", "التفاعلات", "المقارنات", "أسئلة الامتحان", "حيل الحفظ", "الملخص"];

  const prevCh = chapters.find((c) => c.id === id - 1);
  const nextCh = chapters.find((c) => c.id === id + 1);

  return (
    <div className="page-enter">
      {/* Chapter Hero */}
      <div className={`${colors.bg} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/30 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs mb-4 border border-white/20">
            <Link href="/contents" className="opacity-70 hover:opacity-100">الفهرس</Link>
            <span className="opacity-40">›</span>
            <span>الفصل {chapter.id}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center text-3xl border border-white/20">
              {chapter.icon}
            </div>
            <div>
              <div className="text-xs opacity-60 mb-0.5 uppercase tracking-wide">الفصل {chapter.id}</div>
              <h1 className="text-2xl sm:text-3xl font-black chapter-heading">{chapter.title}</h1>
              <p className="text-sm opacity-70 mt-0.5">{chapter.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">{chapter.sections.length} أقسام</span>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">{chapter.reactions.length} تفاعلات</span>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">{chapter.examQuestions.length} أسئلة امتحانية</span>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">{chapter.keyTerms.length} مصطلحات</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Objectives */}
        <div className={`${colors.light} ${colors.border} border rounded-2xl p-5 mb-8`}>
          <h2 className={`font-black text-base ${colors.text} mb-3 flex items-center gap-2`}>
            🎯 أهداف الفصل
          </h2>
          <ul className="space-y-2">
            {chapter.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className={`${colors.text} font-black mt-0.5 shrink-0`}>{i + 1}.</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tabs */}
        <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

        {/* Tab 0: Content */}
        {activeTab === 0 && (
          <div className="space-y-6">
            {chapter.sections.map((sec, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className={`${colors.bg} px-5 py-3 flex items-center gap-3`}>
                  <span className="text-white/60 text-sm font-bold">{i + 1}</span>
                  <h3 className="font-black text-white">{sec.title}</h3>
                </div>
                <div className="p-5">
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                    {sec.content.split('\n').map((line, li) => {
                      if (line.startsWith('•')) {
                        return <div key={li} className="flex gap-2 my-1"><span className={`${colors.text} font-bold shrink-0`}>•</span><span>{line.slice(1).trim()}</span></div>;
                      }
                      if (line.match(/^\d+\./)) {
                        return <div key={li} className={`font-bold ${colors.text} mt-3 mb-1`}>{line}</div>;
                      }
                      if (line.trim() === '') {
                        return <div key={li} className="h-2" />;
                      }
                      if (line.includes('→') || (line.includes('⁺') && line.includes('+'))) {
                        return <div key={li} className="molecule-box text-sm my-2">{line}</div>;
                      }
                      if (line.startsWith('┌') || line.startsWith('│') || line.startsWith('└')) {
                        return <div key={li} className="font-mono text-sm text-gray-700 bg-gray-50 px-3 leading-snug">{line}</div>;
                      }
                      return <div key={li} className="my-0.5 text-sm">{line}</div>;
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Key Terms */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className={`font-black text-base ${colors.text} mb-4 flex items-center gap-2`}>
                📖 المصطلحات الأساسية
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {chapter.keyTerms.map((kt) => (
                  <div key={kt.term} className={`${colors.light} ${colors.border} border rounded-xl p-3`}>
                    <div className={`font-black text-sm ${colors.text} mb-1`}>{kt.term}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{kt.def}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Reactions */}
        {activeTab === 1 && (
          <div className="space-y-5">
            {chapter.reactions.length === 0 ? (
              <div className="text-center py-10 text-gray-400">لا توجد تفاعلات في هذا الفصل</div>
            ) : (
              chapter.reactions.map((rx, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-gray-50">
                    <span className={`w-7 h-7 rounded-full ${colors.bg} text-white text-xs font-black flex items-center justify-center shrink-0`}>{i + 1}</span>
                    <h3 className="font-black text-gray-900 text-sm">{rx.name}</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="molecule-box text-sm sm:text-base font-mono whitespace-pre-line">
                      {rx.equation}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {rx.conditions && (
                        <div className="info-box">
                          <div className="text-xs font-bold text-emerald-700 mb-1">⚙️ الشروط</div>
                          <div className="text-xs text-gray-700">{rx.conditions}</div>
                        </div>
                      )}
                      {rx.products && (
                        <div className="warning-box">
                          <div className="text-xs font-bold text-amber-700 mb-1">🧪 المنتجات</div>
                          <div className="text-xs text-gray-700">{rx.products}</div>
                        </div>
                      )}
                      {rx.note && (
                        <div className="exam-box">
                          <div className="text-xs font-bold text-blue-700 mb-1">📌 ملاحظة</div>
                          <div className="text-xs text-gray-700">{rx.note}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: Comparisons */}
        {activeTab === 2 && (
          <div className="space-y-6">
            {chapter.comparisons.length === 0 ? (
              <div className="text-center py-10 text-gray-400">لا توجد جداول مقارنة في هذا الفصل</div>
            ) : (
              chapter.comparisons.map((comp, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className={`${colors.bg} px-5 py-3`}>
                    <h3 className="font-black text-white">{comp.title}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="comparison-table w-full text-sm">
                      <thead>
                        <tr>
                          {comp.headers.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comp.rows.map((row, ri) => (
                          <tr key={ri}>
                            <td className="font-bold text-gray-900 text-right">{row.property}</td>
                            {row.values.map((v, vi) => (
                              <td key={vi}>{v}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 3: Exam Questions */}
        {activeTab === 3 && (
          <div className="space-y-4">
            {chapter.examQuestions.map((q, i) => (
              <ExamQuestionCard key={i} question={q} index={i} colors={colors} />
            ))}
          </div>
        )}

        {/* Tab 4: Memory Tricks */}
        {activeTab === 4 && (
          <div className="space-y-3">
            <div className="memory-box mb-6">
              <p className="text-sm text-purple-800 font-medium">
                💡 هذه الحيل مصممة لتساعدك على حفظ المعلومات بطريقة مبتكرة وممتعة. استخدمها مع فهم المادة الأصلية لأفضل النتائج.
              </p>
            </div>
            {chapter.memoryTricks.map((trick, i) => (
              <div key={i} className="bg-white rounded-xl border border-purple-100 shadow-sm p-4 flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 text-sm font-black flex items-center justify-center shrink-0">{i + 1}</span>
                <p className="text-sm text-gray-800 leading-relaxed">{trick}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Summary */}
        {activeTab === 5 && (
          <div className="space-y-4">
            <div className={`${colors.bg} text-white rounded-2xl p-6`}>
              <h3 className="font-black text-lg mb-4 flex items-center gap-2">
                📋 ملخص الفصل
              </h3>
              <ul className="space-y-3">
                {chapter.summary.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-sm leading-relaxed opacity-90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <h3 className="font-black text-amber-800 mb-3 flex items-center gap-2">⚠️ نقاط مهمة للامتحان</h3>
              <ul className="space-y-2">
                {chapter.keyTerms.map((kt) => (
                  <li key={kt.term} className="flex items-start gap-2 text-sm">
                    <span className="text-amber-500 font-black shrink-0">→</span>
                    <span><strong className="text-amber-800">{kt.term}:</strong> <span className="text-gray-700">{kt.def}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-10 flex justify-between gap-4">
          {prevCh ? (
            <Link
              href={`/chapter/${prevCh.id}`}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:shadow-md transition-all cursor-pointer text-sm"
            >
              <span className="text-lg">→</span>
              <div className="text-right">
                <div className="text-xs text-gray-400">الفصل السابق</div>
                <div className="font-bold text-gray-800">{prevCh.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextCh ? (
            <Link
              href={`/chapter/${nextCh.id}`}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:shadow-md transition-all cursor-pointer text-sm"
            >
              <div className="text-left">
                <div className="text-xs text-gray-400">الفصل التالي</div>
                <div className="font-bold text-gray-800">{nextCh.title}</div>
              </div>
              <span className="text-lg">←</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}

function ExamQuestionCard({
  question,
  index,
  colors,
}: {
  question: { q: string; type: string; answer?: string; options?: string[] };
  index: number;
  colors: { bg: string; text: string; light: string; border: string };
}) {
  const [revealed, setRevealed] = useState(false);

  const typeLabel: Record<string, string> = {
    mcq: "🔘 اختيار متعدد",
    tf: "✅ صح أم خطأ",
    fill: "✏️ أكمل الفراغ",
    essay: "📝 سؤال مقالي",
  };
  const typeBg: Record<string, string> = {
    mcq: "bg-blue-100 text-blue-700",
    tf: "bg-green-100 text-green-700",
    fill: "bg-yellow-100 text-yellow-700",
    essay: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-gray-50">
        <span className={`w-7 h-7 rounded-full ${colors.bg} text-white text-xs font-black flex items-center justify-center shrink-0`}>{index + 1}</span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${typeBg[question.type] || "bg-gray-100 text-gray-600"}`}>
          {typeLabel[question.type] || question.type}
        </span>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-gray-800 mb-3">{question.q}</p>
        {question.options && (
          <ul className="space-y-1 mb-3">
            {question.options.map((opt, oi) => (
              <li key={oi} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs flex items-center justify-center shrink-0 font-bold">
                  {String.fromCharCode(65 + oi)}
                </span>
                {opt}
              </li>
            ))}
          </ul>
        )}
        {question.answer && (
          <div className="mt-2">
            {revealed ? (
              <div className="info-box">
                <div className="text-xs font-bold text-emerald-700 mb-1">✅ الإجابة الصحيحة:</div>
                <div className="text-sm text-gray-800 font-medium">{question.answer}</div>
              </div>
            ) : (
              <button
                onClick={() => setRevealed(true)}
                className="text-xs bg-emerald-600 text-white px-4 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors font-bold"
              >
                إظهار الإجابة
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
