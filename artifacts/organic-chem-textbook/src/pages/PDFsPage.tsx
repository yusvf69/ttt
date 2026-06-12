import { useState } from "react";

const pdfs = [
  { name: "ملخص الكيمياء العضوية", file: "ملخص الكيمياء العضوية.pdf", icon: "📘" },
  { name: "الفصل الأول والتاني", file: "الفصل الاول والتاني.pdf", icon: "📗" },
  { name: "الفصل التالت والرابع والخامس", file: "الفصل التالت والرابع والخامس.pdf", icon: "📙" },
  { name: "Hydrocarbon Notebook", file: "Hydrocarbon Notebook.pdf", icon: "📕" },
  { name: "Organic Chemistry Master Notebook", file: "Organic Chemistry Master Notebook.pdf", icon: "📓" },
  { name: "The Perfect Organic Notebook", file: "The Perfect Organic Notebook.pdf", icon: "📔" },
  { name: "Organic Chemistry Essentials", file: "Organic Chemistry Essentials.pdf", icon: "📒" },
];

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function PDFsPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="page-enter">
      <div className="navy-gradient text-white px-6 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-5xl mb-4">📚</div>
          <h1 className="text-3xl sm:text-4xl font-black mb-2 chapter-heading">المراجع والملخصات PDF</h1>
          <p className="text-blue-200 text-sm">اختر ملفاً لعرضه مباشرة</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {selected && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-gray-900">
                📄 {pdfs.find((p) => p.file === selected)?.name}
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors px-3 py-1 rounded-lg hover:bg-gray-100"
              >
                ✕ إغلاق
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <iframe
                src={`${basePath}/pdfs/${encodeURIComponent(selected)}`}
                className="w-full h-[75vh]"
                title={selected}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pdfs.map((pdf) => (
            <button
              key={pdf.file}
              onClick={() => setSelected(pdf.file)}
              className={`text-right bg-white rounded-2xl p-5 border transition-all cursor-pointer text-right ${
                selected === pdf.file
                  ? "border-emerald-400 shadow-md ring-2 ring-emerald-200"
                  : "border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{pdf.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">{pdf.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">ملف PDF</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center">
          <p className="text-sm text-blue-700">
            جميع الملفات معروضة للاطلاع فقط. يمكنك فتح أي ملف بضغطة واحدة وعرضه مباشرة في الصفحة.
          </p>
        </div>
      </div>
    </div>
  );
}
