import { useState, useEffect, useMemo } from "react";
import { Link } from "wouter";
import { examQuestions, examDefs, type ExamDef, type ExamQuestion } from "@/data/examData";

type ExamStage = "select" | "taking" | "results" | "review" | "report";

interface Answer {
  selectedIndex: number;
  isCorrect: boolean;
}

interface ChapterResult {
  chapterId: number;
  chapterTitle: string;
  correct: number;
  wrong: number;
  total: number;
  questions: { q: ExamQuestion; answer: Answer }[];
}

export default function ExamPage() {
  const [stage, setStage] = useState<ExamStage>("select");
  const [selectedExam, setSelectedExam] = useState<ExamDef | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);

  const startExam = (exam: ExamDef) => {
    const allIds = [...exam.mcqIds, ...exam.tfIds];
    const qs = allIds.map((id) => examQuestions.find((q) => q.id === id)!).filter(Boolean);
    const shuffled = [...qs].sort(() => Math.random() - 0.5);
    setSelectedExam(exam);
    setQuestions(shuffled);
    setCurrentQ(0);
    setAnswers({});
    setTimeLeft(exam.timeMinutes * 60);
    setAnsweredCurrent(false);
    setStage("taking");
  };

  const currentQuestion = questions[currentQ] || null;
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;

  useEffect(() => {
    if (stage !== "taking") return;
    if (timeLeft <= 0) { setStage("results"); return; }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [stage, timeLeft]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const handleSelect = (optionIndex: number) => {
    if (answeredCurrent || !currentQuestion) return;
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { selectedIndex: optionIndex, isCorrect },
    }));
    setAnsweredCurrent(true);
  };

  const goToQuestion = (idx: number) => {
    setCurrentQ(idx);
    setAnsweredCurrent(answers[questions[idx]?.id] !== undefined);
  };

  const handleNext = () => {
    if (currentQ < totalQuestions - 1) {
      const next = currentQ + 1;
      setCurrentQ(next);
      setAnsweredCurrent(answers[questions[next]?.id] !== undefined);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      const prev = currentQ - 1;
      setCurrentQ(prev);
      setAnsweredCurrent(answers[questions[prev]?.id] !== undefined);
    }
  };

  const handleFinish = () => setStage("results");

  if (stage === "select") {
    return <ExamSelect examDefs={examDefs} onSelect={startExam} />;
  }

  if (stage === "results") {
    return (
      <ResultsScreen
        questions={questions}
        answers={answers}
        examTitle={selectedExam?.title || ""}
        timeLimit={selectedExam?.timeMinutes || 0}
        timeLeft={timeLeft}
        onReview={() => { setCurrentQ(0); setAnsweredCurrent(answers[questions[0]?.id] !== undefined); setStage("review"); }}
        onReport={() => setStage("report")}
        onRestart={() => setStage("select")}
      />
    );
  }

  if (stage === "review") {
    return (
      <ReviewScreen
        questions={questions}
        answers={answers}
        onBackToResults={() => setStage("results")}
        onReport={() => setStage("report")}
      />
    );
  }

  if (stage === "report") {
    return (
      <ReportScreen
        questions={questions}
        answers={answers}
        onBackToResults={() => setStage("results")}
        onRestart={() => setStage("select")}
      />
    );
  }

  if (!currentQuestion) {
    return (
      <div className="page-enter max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="text-5xl mb-4">🔬</div>
        <p className="text-gray-500">لا توجد أسئلة في هذا الامتحان</p>
        <Link href="/exam" className="text-emerald-600 hover:underline mt-4 block">العودة</Link>
      </div>
    );
  }

  const answer = answers[currentQuestion.id];

  return (
    <div className="page-enter max-w-3xl mx-auto px-4 py-6">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <div className={`font-mono font-black text-lg ${timeLeft < 60 ? "text-red-600 animate-pulse" : "text-gray-800"}`}>
          ⏱ {formatTime(timeLeft)}
        </div>
        <div className="text-xs text-gray-400">{selectedExam?.title}</div>
        <button onClick={handleFinish} className="text-xs bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors">
          إنهاء الامتحان
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className="bg-emerald-600 h-2 rounded-full transition-all duration-300" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} />
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="navy-gradient text-white text-xs font-black px-2 py-0.5 rounded-full">{currentQuestion.chapterTitle}</span>
          <span className="text-xs text-gray-400">سؤال {currentQ + 1} من {totalQuestions}</span>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-5 leading-relaxed">{currentQuestion.question}</h3>

        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((opt, oi) => {
            const isSelected = answer?.selectedIndex === oi;
            const isCorrectAnswer = currentQuestion.correctIndex === oi;
            let cls = "w-full text-right px-4 py-3 rounded-xl border-2 transition-all text-sm ";
            if (!answeredCurrent) {
              cls += isSelected ? "border-emerald-500 bg-emerald-50" : "border-gray-200 bg-white hover:border-gray-300";
            } else {
              if (isCorrectAnswer) cls += "border-emerald-500 bg-emerald-50";
              else if (isSelected && !isCorrectAnswer) cls += "border-red-500 bg-red-50";
              else cls += "border-gray-200 bg-white opacity-60";
            }
            return (
              <button key={oi} onClick={() => handleSelect(oi)} disabled={answeredCurrent} className={cls}>
                <span className="font-bold ml-2">{opt.label}.</span>
                {opt.text}
                {answeredCurrent && isCorrectAnswer && <span className="mr-2 text-emerald-600">✓</span>}
                {answeredCurrent && isSelected && !isCorrectAnswer && <span className="mr-2 text-red-600">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Instant feedback: explanation */}
        {answeredCurrent && (
          <div className={`rounded-xl p-4 ${answer!.isCorrect ? "bg-emerald-50 border border-emerald-200" : "bg-red-50 border border-red-200"}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{answer!.isCorrect ? "✅" : "❌"}</span>
              <span className={`font-bold text-sm ${answer!.isCorrect ? "text-emerald-800" : "text-red-800"}`}>
                {answer!.isCorrect ? "إجابة صحيحة!" : "إجابة خاطئة"}
              </span>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              <span className="font-bold">الإجابة الصحيحة: </span>
              <span className="text-emerald-700 font-bold">{currentQuestion.options[currentQuestion.correctIndex].label}. {currentQuestion.options[currentQuestion.correctIndex].text}</span>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <div className="text-xs font-bold text-amber-800 mb-1">💡 شرح الإجابة</div>
              <p className="text-sm text-amber-900 leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Question nav + next/prev */}
      <div className="flex items-center justify-between">
        <button onClick={handlePrev} disabled={currentQ === 0}
          className="px-4 py-2 text-sm rounded-lg border border-gray-200 bg-white font-bold text-gray-700 disabled:opacity-30 hover:shadow-sm transition-all">
          ← السابق
        </button>
        <div className="flex gap-1 flex-wrap justify-center">
          {questions.map((q, idx) => {
            const a = answers[q.id];
            return (
              <button key={q.id} onClick={() => goToQuestion(idx)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                  idx === currentQ ? "navy-gradient text-white"
                  : a ? (a.isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700")
                  : "bg-gray-100 text-gray-500"
                }`}>
                {idx + 1}
              </button>
            );
          })}
        </div>
        <button onClick={handleNext} disabled={currentQ === totalQuestions - 1}
          className="px-4 py-2 text-sm rounded-lg border border-gray-200 bg-white font-bold text-gray-700 disabled:opacity-30 hover:shadow-sm transition-all">
          التالي →
        </button>
      </div>
    </div>
  );
}

/* ─── EXAM SELECT ─── */
function ExamSelect({ examDefs, onSelect }: { examDefs: ExamDef[]; onSelect: (e: ExamDef) => void }) {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">📝</div>
        <h1 className="text-3xl font-black text-gray-900 mb-2">الامتحانات</h1>
        <p className="text-gray-500">اختر نوع الامتحان الذي تريد أداءه</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {examDefs.map((exam) => (
          <button key={exam.id} onClick={() => onSelect(exam)}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-right hover:shadow-md hover:border-emerald-200 transition-all text-right">
            <div className="text-3xl mb-3">{exam.icon}</div>
            <h3 className="font-black text-gray-900 text-sm mb-1">{exam.title}</h3>
            <p className="text-xs text-gray-500 mb-3">{exam.description}</p>
            <div className="flex gap-2 text-xs">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">{exam.mcqIds.length + exam.tfIds.length} أسئلة</span>
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">{exam.timeMinutes} دقيقة</span>
            </div>
          </button>
        ))}
      </div>

      <div className="text-center">
        <Link href="/contents" className="text-sm text-gray-400 hover:text-gray-600">← العودة للفهرس</Link>
      </div>
    </div>
  );
}

/* ─── RESULTS SCREEN ─── */
function ResultsScreen({
  questions, answers, examTitle, timeLimit, timeLeft,
  onReview, onReport, onRestart,
}: {
  questions: ExamQuestion[]; answers: Record<number, Answer>; examTitle: string;
  timeLimit: number; timeLeft: number; onReview: () => void; onReport: () => void; onRestart: () => void;
}) {
  const total = questions.length;
  const answered = Object.keys(answers).length;
  const correctCount = questions.filter((q) => answers[q.id]?.isCorrect).length;
  const wrongCount = answered - correctCount;
  const unanswered = total - answered;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const passed = percentage >= 60;
  const elapsedMinutes = Math.round((timeLimit * 60 - timeLeft) / 60);

  return (
    <div className="page-enter max-w-3xl mx-auto px-4 py-6 print-results">
      <div className={`rounded-2xl p-6 mb-6 text-center ${passed ? "bg-emerald-600" : "bg-red-600"} text-white`}>
        <div className="text-5xl mb-2">{passed ? "🎉" : "💪"}</div>
        <h2 className="text-2xl font-black mb-1">{passed ? "مبروك! لقد نجحت" : "لم تنجح هذه المرة"}</h2>
        <p className="text-white/80 text-sm mb-4">{examTitle} • {elapsedMinutes} دقيقة</p>

        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
            <circle cx="60" cy="60" r="54" fill="none" stroke="white" strokeWidth="8"
              strokeDasharray={`${(percentage / 100) * 339.3} 339.3`} strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-black">{percentage}%</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 text-xs">
          <div className="bg-white/15 rounded-lg px-3 py-2"><div className="font-bold">{correctCount}</div><div className="opacity-70">صحيح</div></div>
          <div className="bg-white/15 rounded-lg px-3 py-2"><div className="font-bold">{wrongCount}</div><div className="opacity-70">خطأ</div></div>
          <div className="bg-white/15 rounded-lg px-3 py-2"><div className="font-bold">{unanswered}</div><div className="opacity-70">لم تجب</div></div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-6 no-print">
        <button onClick={onReview} className="w-full navy-gradient text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
          📋 مراجعة الإجابات
        </button>
        <button onClick={onReport} className="w-full bg-amber-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-amber-600 transition-all">
          📊 التقرير التفصيلي — نقاط الضعف والقوة
        </button>
        <button onClick={() => window.print()} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">
          🖨️ طباعة / PDF
        </button>
        <button onClick={onRestart} className="w-full bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-bold text-sm hover:shadow-md transition-all">
          🔄 امتحان آخر
        </button>
      </div>
    </div>
  );
}

/* ─── REVIEW SCREEN ─── */
function ReviewScreen({ questions, answers, onBackToResults, onReport }: {
  questions: ExamQuestion[]; answers: Record<number, Answer>;
  onBackToResults: () => void; onReport: () => void;
}) {
  const correctCount = questions.filter((q) => answers[q.id]?.isCorrect).length;
  const total = questions.length;

  return (
    <div className="page-enter max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-black text-gray-900 text-lg">📋 مراجعة الإجابات</h2>
        <div className="text-sm text-gray-500">{correctCount}/{total} صحيح</div>
      </div>

      <div className="space-y-4 mb-6">
        {questions.map((q, idx) => {
          const a = answers[q.id];
          const isCorrect = a?.isCorrect;
          const isUnanswered = !a;
          return (
            <div key={q.id} className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${isCorrect ? "border-emerald-100" : isUnanswered ? "border-gray-100" : "border-red-100"}`}>
              <div className="flex items-center gap-2 px-5 py-3 border-b bg-gray-50">
                <span className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 ${
                  isUnanswered ? "bg-gray-200 text-gray-500" : isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
                }`}>{isUnanswered ? "?" : isCorrect ? "✓" : "✗"}</span>
                <span className="text-xs font-bold text-gray-400">سؤال {idx + 1}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">{q.chapterTitle}</span>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-gray-900 mb-3">{q.question}</p>
                <div className="space-y-1 mb-4">
                  {q.options.map((opt, oi) => {
                    const isUserChoice = a?.selectedIndex === oi;
                    const isCorrectChoice = q.correctIndex === oi;
                    let cls = "flex items-center gap-2 px-3 py-2 rounded-lg text-sm ";
                    if (isCorrectChoice) cls += "bg-emerald-50 border border-emerald-200 text-emerald-800";
                    else if (isUserChoice && !isCorrectChoice) cls += "bg-red-50 border border-red-200 text-red-800";
                    else cls += "text-gray-600";
                    return (
                      <div key={oi} className={cls}>
                        <span className="font-bold shrink-0">{opt.label}.</span>
                        <span>{opt.text}</span>
                        {isCorrectChoice && <span className="mr-auto text-emerald-600">✓</span>}
                        {isUserChoice && !isCorrectChoice && <span className="mr-auto text-red-600">✗</span>}
                      </div>
                    );
                  })}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <div className="text-xs font-bold text-amber-800 mb-1">💡 شرح الإجابة</div>
                  <p className="text-sm text-amber-900 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={onBackToResults} className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold text-sm hover:shadow-md transition-all">← النتيجة</button>
        <button onClick={onReport} className="bg-amber-500 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-600 transition-all">📊 التقرير</button>
      </div>
    </div>
  );
}

/* ─── REPORT SCREEN ─── */
function ReportScreen({ questions, answers, onBackToResults, onRestart }: {
  questions: ExamQuestion[]; answers: Record<number, Answer>;
  onBackToResults: () => void; onRestart: () => void;
}) {
  const byChapter = useMemo(() => {
    const map = new Map<number, ChapterResult>();
    questions.forEach((q) => {
      const a = answers[q.id];
      if (!map.has(q.chapterId)) {
        map.set(q.chapterId, {
          chapterId: q.chapterId,
          chapterTitle: q.chapterTitle,
          correct: 0, wrong: 0, total: 0, questions: [],
        });
      }
      const entry = map.get(q.chapterId)!;
      entry.total++;
      if (a) {
        if (a.isCorrect) entry.correct++;
        else entry.wrong++;
      } else {
        entry.wrong++;
      }
      entry.questions.push({ q, answer: a || { selectedIndex: -1, isCorrect: false } });
    });
    return Array.from(map.values()).sort((a, b) => a.chapterId - b.chapterId);
  }, [questions, answers]);

  const totalCorrect = byChapter.reduce((s, c) => s + c.correct, 0);
  const totalQuestions = questions.length;
  const overallPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const weakestChapters = [...byChapter]
    .filter((c) => c.total > 0)
    .sort((a, b) => (a.correct / a.total) - (b.correct / b.total))
    .slice(0, 3);

  const strongestChapters = [...byChapter]
    .filter((c) => c.total > 0)
    .sort((a, b) => (b.correct / b.total) - (a.correct / a.total))
    .slice(0, 3);

  return (
    <div className="page-enter max-w-3xl mx-auto px-4 py-6 print-report">
      {/* Header */}
      <div className="navy-gradient rounded-2xl p-6 text-white mb-6">
        <div className="text-4xl mb-2">📊</div>
        <h2 className="text-xl font-black mb-1">التقرير التفصيلي</h2>
        <p className="text-white/70 text-sm">تحليل الأداء حسب الفصول</p>
      </div>

      {/* Overall score */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-black text-gray-900">النتيجة الإجمالية</h3>
          <span className={`text-2xl font-black ${overallPct >= 60 ? "text-emerald-600" : "text-red-600"}`}>{overallPct}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div className={`h-3 rounded-full ${overallPct >= 60 ? "bg-emerald-500" : "bg-red-500"}`} style={{ width: `${overallPct}%` }} />
        </div>
        <div className="text-xs text-gray-400">{totalCorrect} من {totalQuestions} إجابات صحيحة</div>
      </div>

      {/* Chapter breakdown */}
      <h3 className="font-black text-gray-900 text-sm mb-3">📈 تفصيل النتائج حسب الفصل</h3>
      <div className="space-y-3 mb-6">
        {byChapter.map((ch) => {
          const pct = ch.total > 0 ? Math.round((ch.correct / ch.total) * 100) : 0;
          return (
            <div key={ch.chapterId} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-bold text-gray-900 text-sm">الفصل {ch.chapterId}</span>
                  <span className="text-xs text-gray-500 mr-2">{ch.chapterTitle}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-700 font-bold">{ch.correct}✓</span>
                  <span className="text-red-700 font-bold">{ch.wrong}✗</span>
                  <span className={`font-black text-sm ${pct >= 60 ? "text-emerald-600" : "text-red-600"}`}>{pct}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${pct >= 60 ? "bg-emerald-500" : "bg-red-500"}`} style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Weakest chapters */}
      {weakestChapters.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
          <h3 className="font-black text-red-800 text-sm mb-3 flex items-center gap-2">⚠️ نقاط الضعف — تحتاج مراجعة</h3>
          <ul className="space-y-2">
            {weakestChapters.map((ch) => (
              <li key={ch.chapterId} className="flex items-center gap-2 text-sm text-red-700">
                <span className="text-red-500">▸</span>
                <span className="font-bold">الفصل {ch.chapterId}:</span>
                <span>{ch.chapterTitle} — {ch.correct}/{ch.total} إجابات صحيحة ({Math.round((ch.correct / ch.total) * 100)}%)</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-xs text-red-600 bg-red-100 rounded-lg p-3">
            💡 راجع فصول: {weakestChapters.map((c) => c.chapterId).join("، ")} من الكتاب لتحسين مستواك
          </div>
        </div>
      )}

      {/* Strongest chapters */}
      {strongestChapters.length > 0 && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
          <h3 className="font-black text-emerald-800 text-sm mb-3 flex items-center gap-2">✅ نقاط القوة</h3>
          <ul className="space-y-2">
            {strongestChapters.map((ch) => (
              <li key={ch.chapterId} className="flex items-center gap-2 text-sm text-emerald-700">
                <span className="text-emerald-500">▸</span>
                <span className="font-bold">الفصل {ch.chapterId}:</span>
                <span>{ch.chapterTitle} — {ch.correct}/{ch.total} إجابات صحيحة ({Math.round((ch.correct / ch.total) * 100)}%)</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Wrong answers detail */}
      <h3 className="font-black text-gray-900 text-sm mb-3">❌ الأسئلة التي أخطأت فيها</h3>
      <div className="space-y-3 mb-6">
        {questions.filter((q) => !answers[q.id]?.isCorrect).map((q, idx) => {
          const a = answers[q.id];
          return (
            <div key={q.id} className="bg-white rounded-xl border border-red-100 shadow-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">{q.chapterTitle}</span>
              </div>
              <p className="text-sm font-bold text-gray-900 mb-2">{q.question}</p>
              <div className="text-xs text-red-700 mb-1">
                {a ? <>اخترت: <span className="font-bold">{q.options[a.selectedIndex]?.label}. {q.options[a.selectedIndex]?.text}</span></> : <>لم تجب على هذا السؤال</>}
              </div>
              <div className="text-xs text-emerald-700 mb-2">
                الإجابة الصحيحة: <span className="font-bold">{q.options[q.correctIndex].label}. {q.options[q.correctIndex].text}</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 text-xs text-amber-800">
                {q.explanation}
              </div>
            </div>
          );
        })}
        {questions.filter((q) => !answers[q.id]?.isCorrect).length === 0 && (
          <div className="text-center py-6 text-emerald-600 font-bold">لم تخطئ في أي سؤال! 🎉</div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 no-print">
        <button onClick={onBackToResults} className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold text-sm hover:shadow-md transition-all">← النتيجة</button>
        <button onClick={() => window.print()} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">🖨️ طباعة / PDF</button>
        <button onClick={onRestart} className="navy-gradient text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all">🔄 امتحان آخر</button>
      </div>
    </div>
  );
}
