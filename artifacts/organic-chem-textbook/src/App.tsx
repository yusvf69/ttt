import { useState } from "react";
import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Cover from "@/pages/Cover";
import TableOfContents from "@/pages/TableOfContents";
import ChapterPage from "@/pages/ChapterPage";
import CheatSheet from "@/pages/CheatSheet";
import ExamPage from "@/pages/ExamPage";
import PDFsPage from "@/pages/PDFsPage";
import ReactionsPage from "@/pages/ReactionsPage";
import { chapters } from "@/data/chapters";

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [location] = useLocation();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-40 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:w-64 lg:shadow-none lg:border-l border-gray-100 ${
          open ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="navy-gradient p-5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-white font-bold text-sm tracking-wide">الكيمياء العضوية</h2>
            <button onClick={onClose} className="text-white/60 hover:text-white lg:hidden text-xl">✕</button>
          </div>
          <p className="text-emerald-300 text-xs">دليل الدراسة الشامل</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <Link
            href="/"
            className={`nav-item flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 cursor-pointer text-sm ${location === "/" ? "nav-active" : "text-gray-600 hover:text-gray-900"}`}
          >
            <span className="text-lg">📚</span>
            <span>الصفحة الرئيسية</span>
          </Link>
          <Link
            href="/contents"
            className={`nav-item flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 cursor-pointer text-sm ${location === "/contents" ? "nav-active" : "text-gray-600 hover:text-gray-900"}`}
          >
            <span className="text-lg">📋</span>
            <span>فهرس المحتويات</span>
          </Link>

          <div className="my-3 px-4">
            <div className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">الفصول</div>
          </div>

          {chapters.map((ch) => (
            <Link
              key={ch.id}
              href={`/chapter/${ch.id}`}
              className={`nav-item flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 cursor-pointer text-sm ${location === `/chapter/${ch.id}` ? "nav-active" : "text-gray-600 hover:text-gray-900"}`}
            >
              <span className="text-base">{ch.icon}</span>
              <span className="leading-tight">{ch.title}</span>
            </Link>
          ))}

          <div className="my-3 px-4">
            <div className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">مراجعة</div>
          </div>
          <Link
            href="/cheatsheet"
            className={`nav-item flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 cursor-pointer text-sm ${location === "/cheatsheet" ? "nav-active" : "text-gray-600 hover:text-gray-900"}`}
          >
            <span className="text-lg">⚡</span>
            <span>الورقة الذهبية</span>
          </Link>
          <Link
            href="/exam"
            className={`nav-item flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 cursor-pointer text-sm ${location === "/exam" ? "nav-active" : "text-gray-600 hover:text-gray-900"}`}
          >
            <span className="text-lg">📝</span>
            <span>الامتحان الشامل</span>
          </Link>
          <Link
            href="/reactions"
            className={`nav-item flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 cursor-pointer text-sm ${location === "/reactions" ? "nav-active" : "text-gray-600 hover:text-gray-900"}`}
          >
            <span className="text-lg">⚗️</span>
            <span>جميع المعادلات</span>
          </Link>
          <Link
            href="/pdfs"
            className={`nav-item flex items-center gap-3 px-4 py-2.5 rounded-lg mb-1 cursor-pointer text-sm ${location === "/pdfs" ? "nav-active" : "text-gray-600 hover:text-gray-900"}`}
          >
            <span className="text-lg">📚</span>
            <span>ملفات PDF</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="text-xs text-gray-400 text-center">
            {chapters.length} فصول • كيمياء عضوية متقدمة
          </div>
        </div>
      </aside>
    </>
  );
}

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="w-5 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-5 h-0.5 bg-gray-600 mb-1.5"></div>
          <div className="w-5 h-0.5 bg-gray-600"></div>
        </button>
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <span className="text-xl">⚗️</span>
          <span className="font-bold text-gray-900 text-sm hidden sm:block">الكيمياء العضوية — الكتاب التعليمي الشامل</span>
          <span className="font-bold text-gray-900 text-sm sm:hidden">الكيمياء العضوية</span>
        </Link>
        <Link href="/cheatsheet" className="text-xs bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-3 py-1.5 rounded-full font-bold hover:opacity-90 transition-opacity">
          ⚡ مراجعة سريعة
        </Link>
      </div>
    </header>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="min-h-screen bg-gray-50 flex flex-col" dir="rtl">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <Switch>
              <Route path="/" component={Cover} />
              <Route path="/contents" component={TableOfContents} />
              <Route path="/chapter/:id" component={ChapterPage} />
              <Route path="/cheatsheet" component={CheatSheet} />
              <Route path="/exam" component={ExamPage} />
              <Route path="/pdfs" component={PDFsPage} />
              <Route path="/reactions" component={ReactionsPage} />
              <Route>
                <div className="flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔬</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">الصفحة غير موجودة</h2>
                    <Link href="/" className="text-emerald-600 hover:underline">العودة للرئيسية</Link>
                  </div>
                </div>
              </Route>
            </Switch>
          </main>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
        <Toaster />
        <footer className="navy-gradient text-white py-4 px-6 text-center text-xs">
          <a
            href="https://onz-onz-website.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white transition-colors"
          >
            Developed by ONZ
          </a>
        </footer>
      </div>
    </WouterRouter>
  );
}

export default App;
