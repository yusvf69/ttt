import { chapters } from "@/data/chapters";
import { Link } from "wouter";
import {
  WohlerExperiment, SN2Diagram, SN1Diagram,
  MarkownikovRule, E2Elimination, EnergyDiagram,
  NewmanProjection, CarbocationStability, HydrogenBonding,
  BenzeneRing, BenzeneFullStructure, Tetrahedral,
  MethaneStructure, EthaneStructure, EtheneStructure, EthyneStructure,
  EthanolStructure, AceticAcidStructure, HalideStructure, CarbonylStructure,
  HalogenationDiagram, MarkovnikovStructure, WurtzDiagram,
  E2Structure, CarbonylAddition, EsterificationDiagram,
  SN2FullDiagram, AlkeneHydration,
} from "@/data/diagrams";

const diagramMap: Record<string, React.ReactNode> = {
  "فوهلر": <WohlerExperiment />,
  "SN2": <SN2FullDiagram />,
  "SN1": <SN1Diagram />,
  "ماركوفنيكوف": <MarkovnikovStructure />,
  "E2": <E2Structure />,
  "هيدروجينية": <HydrogenBonding />,
  "طاقة": <EnergyDiagram />,
  "نيومان": <NewmanProjection />,
  "كربوكاتيون": <CarbocationStability />,
  "هلجنة": <HalogenationDiagram />,
  "فورتز": <WurtzDiagram />,
  "كربونيل": <CarbonylAddition />,
  "الأسترة": <EsterificationDiagram />,
  "إماهة": <AlkeneHydration />,
  "بنزين": <BenzeneFullStructure />,
  "تهجين": <Tetrahedral />,
};

function getDiagram(name: string, equation: string): React.ReactNode | null {
  const text = name + " " + equation;
  for (const [key, diagram] of Object.entries(diagramMap)) {
    if (text.includes(key)) return diagram;
  }
  return null;
}

export default function ReactionsPage() {
  return (
    <div className="page-enter">
      <div className="navy-gradient text-white px-6 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-5xl mb-4">⚗️</div>
          <h1 className="text-3xl sm:text-4xl font-black mb-2 chapter-heading">جميع التفاعلات الكيميائية</h1>
          <p className="text-blue-200 text-sm">جميع التفاعلات من الفصول الثلاثة عشر — بهياكل جزيئية ورسوم توضيحية</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {chapters.map((ch) => {
          if (ch.reactions.length === 0) return null;
          return (
            <div key={ch.id} className="mb-10">
              <Link
                href={`/chapter/${ch.id}`}
                className="inline-flex items-center gap-2 text-lg font-black text-gray-900 hover:text-emerald-700 transition-colors mb-4"
              >
                <span>{ch.icon}</span>
                <span className="chapter-heading">{ch.title}</span>
                <span className="text-xs text-gray-400">(الفصل {ch.id})</span>
              </Link>

              <div className="space-y-4">
                {ch.reactions.map((r, i) => {
                  const diagram = getDiagram(r.name, r.equation);
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col lg:flex-row gap-5">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 mb-2 text-base">
                              <span className="text-emerald-600 ml-1">{i + 1}.</span>
                              {r.name}
                            </h3>
                            <pre dir="ltr" className="bg-gray-50 rounded-xl p-3 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre-wrap text-left leading-relaxed">
                              {r.equation}
                            </pre>
                            <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                              {r.conditions && (
                                <p><span className="font-medium text-gray-800">الشروط:</span> {r.conditions}</p>
                              )}
                              {r.products && (
                                <p><span className="font-medium text-gray-800">النواتج:</span> {r.products}</p>
                              )}
                              {r.note && (
                                <p className="text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5">
                                  <span className="font-medium">ملاحظة:</span> {r.note}
                                </p>
                              )}
                            </div>
                          </div>
                          {diagram && (
                            <div className="shrink-0 flex items-center justify-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                              {diagram}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
