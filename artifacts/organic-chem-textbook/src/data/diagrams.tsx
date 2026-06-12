import React from "react";

export function BenzeneRing({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,5 52,18 52,42 30,55 8,42 8,18" stroke="#1e3a5f" strokeWidth="2" fill="none" />
      <circle cx="30" cy="30" r="16" stroke="#1e3a5f" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    </svg>
  );
}

export function Tetrahedral({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="8" x2="30" y2="52" stroke="#1e3a5f" strokeWidth="2" />
      <line x1="8" y1="38" x2="52" y2="38" stroke="#1e3a5f" strokeWidth="2" />
      <line x1="15" y1="18" x2="45" y2="18" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 2" />
      <circle cx="30" cy="30" r="6" fill="#1e3a5f" />
    </svg>
  );
}

export function DoubleBond({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="20" r="5" fill="#1e3a5f" />
      <circle cx="68" cy="20" r="5" fill="#1e3a5f" />
      <line x1="17" y1="14" x2="63" y2="14" stroke="#1e3a5f" strokeWidth="2" />
      <line x1="17" y1="26" x2="63" y2="26" stroke="#1e3a5f" strokeWidth="2" />
      <text x="40" y="36" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">C=C</text>
    </svg>
  );
}

export function TripleBond({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="20" r="5" fill="#1e3a5f" />
      <circle cx="68" cy="20" r="5" fill="#1e3a5f" />
      <line x1="17" y1="12" x2="63" y2="12" stroke="#1e3a5f" strokeWidth="2" />
      <line x1="17" y1="20" x2="63" y2="20" stroke="#1e3a5f" strokeWidth="2" />
      <line x1="17" y1="28" x2="63" y2="28" stroke="#1e3a5f" strokeWidth="2" />
      <text x="40" y="36" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">C≡C</text>
    </svg>
  );
}

export function EthanolMolecule({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="20" fill="#1e3a5f" fontSize="10" fontFamily="monospace">H</text>
      <text x="25" y="8" fill="#1e3a5f" fontSize="10" fontFamily="monospace">H</text>
      <text x="45" y="8" fill="#1e3a5f" fontSize="10" fontFamily="monospace">H</text>
      <text x="60" y="20" fill="#1e3a5f" fontSize="10" fontFamily="monospace">H</text>
      <line x1="14" y1="22" x2="24" y2="22" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="28" y1="22" x2="38" y2="22" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="20" y1="12" x2="28" y2="18" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="20" y1="12" x2="14" y2="18" stroke="#1e3a5f" strokeWidth="1" />
      <text x="22" y="18" fill="#1e3a5f" fontSize="7" fontFamily="monospace">|</text>
      <circle cx="20" cy="22" r="2" fill="#333" />
      <circle cx="30" cy="22" r="2" fill="#333" />
      <circle cx="40" cy="22" r="2" fill="#c00" />
      <text x="42" y="14" fill="#c00" fontSize="7" fontFamily="monospace">OH</text>
      <text x="60" y="40" textAnchor="middle" fill="#666" fontSize="7" fontFamily="sans-serif">CH₃CH₂OH (إيثانول)</text>
    </svg>
  );
}

export function SN2Diagram({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="180" height="60" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="90" y="15" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">آلية SN2 — انقلاب فراغي</text>
      <rect x="10" y="22" width="50" height="24" rx="4" stroke="#1e3a5f" strokeWidth="1.5" fill="#e8f0fe" />
      <text x="35" y="37" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="monospace">R-X</text>
      <text x="15" y="18" fill="#c00" fontSize="6">Nu⁻</text>
      <line x1="18" y1="22" x2="25" y2="28" stroke="#c00" strokeWidth="1" strokeDasharray="3 2" markerEnd="url(#arrowheadRed)" />
      
      <rect x="65" y="22" width="50" height="24" rx="4" stroke="#d4a017" strokeWidth="1.5" fill="#fff8e1" />
      <text x="90" y="32" textAnchor="middle" fill="#d4a017" fontSize="5">حالة</text>
      <text x="90" y="40" textAnchor="middle" fill="#d4a017" fontSize="5">انتقال</text>
      <text x="70" y="18" fill="#c00" fontSize="6">δ⁻...Nu</text>
      <text x="100" y="18" fill="#1e3a5f" fontSize="6">...Xδ⁻</text>

      <rect x="120" y="22" width="50" height="24" rx="4" stroke="#1e3a5f" strokeWidth="1.5" fill="#e8f0fe" />
      <text x="145" y="37" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="monospace">Nu-R</text>
      <text x="155" y="18" fill="#1e3a5f" fontSize="6">X⁻</text>

      <defs>
        <marker id="arrowheadRed" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#c00" />
        </marker>
      </defs>
    </svg>
  );
}

export function WohlerExperiment({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">تجربة فوهلر 1828</text>
      
      <rect x="5" y="18" width="85" height="28" rx="4" stroke="#1e3a5f" strokeWidth="1.5" fill="#e8f0fe" />
      <text x="47" y="30" textAnchor="middle" fill="#1e3a5f" fontSize="5" fontFamily="monospace">AgCNO + NH₄Cl</text>
      <text x="47" y="38" textAnchor="middle" fill="#666" fontSize="5">(غير عضوي)</text>

      <text x="95" y="36" textAnchor="middle" fill="#c00" fontSize="10">→</text>

      <rect x="105" y="18" width="85" height="28" rx="4" stroke="#c00" strokeWidth="1.5" fill="#fff0f0" />
      <text x="147" y="30" textAnchor="middle" fill="#c00" fontSize="6" fontFamily="monospace">NH₂CONH₂</text>
      <text x="147" y="38" textAnchor="middle" fill="#c00" fontSize="5">(يوريا — عضوي)</text>

      <text x="100" y="60" textAnchor="middle" fill="#666" fontSize="6">Δ — تسخين ← تفكك نظرية القوة الحيوية</text>
    </svg>
  );
}

export function MarkownikovRule({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">قاعدة ماركوفنيكوف: H⁺ للكربون الأغنى بـ H</text>
      <text x="20" y="32" fill="#1e3a5f" fontSize="8" fontFamily="monospace">CH₃-CH=CH₂</text>
      <text x="85" y="36" textAnchor="middle" fill="#c00" fontSize="12">+</text>
      <text x="100" y="32" fill="#c00" fontSize="8" fontFamily="monospace">HBr</text>
      <text x="133" y="36" textAnchor="middle" fill="#1e3a5f" fontSize="12">→</text>
      <text x="155" y="32" fill="#1e3a5f" fontSize="8" fontFamily="monospace">CH₃-CHBr-CH₃</text>
      <text x="100" y="52" textAnchor="middle" fill="#d4a017" fontSize="6">(2-بروموبروبان — الناتج الرئيسي)</text>
    </svg>
  );
}

export function SN1Diagram({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="220" height="80" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="110" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">آلية SN1 — خطوتان عبر كربوكاتيون</text>
      <rect x="5" y="18" width="55" height="24" rx="4" stroke="#1e3a5f" strokeWidth="1.5" fill="#e8f0fe" />
      <text x="32" y="33" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="monospace">R-X</text>
      <text x="63" y="36" textAnchor="middle" fill="#c00" fontSize="8" fontFamily="monospace">→</text>
      <text x="65" y="18" fill="#c00" fontSize="5">خطوة بطيئة</text>
      <rect x="75" y="18" width="55" height="24" rx="4" stroke="#d4a017" strokeWidth="1.5" fill="#fff8e1" />
      <text x="102" y="29" textAnchor="middle" fill="#c00" fontSize="7" fontFamily="monospace">R⁺</text>
      <text x="102" y="38" textAnchor="middle" fill="#666" fontSize="5">كربوكاتيون</text>
      <text x="133" y="36" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="monospace">→</text>
      <text x="135" y="18" fill="#1e3a5f" fontSize="5">سريعة (+ Nu⁻)</text>
      <rect x="145" y="18" width="55" height="24" rx="4" stroke="#1e3a5f" strokeWidth="1.5" fill="#e8f0fe" />
      <text x="172" y="33" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="monospace">Nu-R</text>
      <text x="110" y="60" textAnchor="middle" fill="#666" fontSize="6">R-X → R⁺ + X⁻ (بطيئة) → R⁺ + Nu⁻ → Nu-R (سريعة)</text>
      <text x="110" y="70" textAnchor="middle" fill="#d4a017" fontSize="6">← خليط راسميك (Racemic Mixture)</text>
    </svg>
  );
}

export function EnergyDiagram({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="280" height="140" viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="140" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">مخطط الطاقة — SN1 مقابل SN2</text>
      <rect x="5" y="18" width="260" height="105" rx="4" stroke="#ccc" strokeWidth="1" fill="#fafafa" />
      <text x="15" y="115" fill="#666" fontSize="6">مسار التفاعل →</text>
      <text x="265" y="30" fill="#666" fontSize="5" transform="rotate(-90,265,30)">الطاقة ↑</text>
      <line x1="30" y1="105" x2="250" y2="105" stroke="#999" strokeWidth="1" />
      {/* SN1 curve */}
      <path d="M40 100 C60 100, 70 30, 90 30 C110 30, 115 55, 125 55 C135 55, 140 30, 160 30 C180 30, 190 100, 210 100" stroke="#c00" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
      <text x="90" y="26" fill="#c00" fontSize="5">ح. انت. (SN1)</text>
      <text x="125" y="50" fill="#d4a017" fontSize="5">R⁺ وسيط</text>
      {/* SN2 curve */}
      <path d="M40 100 C80 100, 100 20, 140 20 C180 20, 200 100, 240 100" stroke="#1e3a5f" strokeWidth="1.5" fill="none" />
      <text x="140" y="16" fill="#1e3a5f" fontSize="5">ح. انت. SN2</text>
      <line x1="40" y1="100" x2="40" y2="15" stroke="#999" strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="40" y="10" textAnchor="middle" fill="#666" fontSize="5">المتفاعلات</text>
      <line x1="240" y1="100" x2="240" y2="35" stroke="#999" strokeWidth="0.5" strokeDasharray="2 2" />
      <text x="240" y="10" textAnchor="middle" fill="#666" fontSize="5">النواتج</text>
    </svg>
  );
}

export function NewmanProjection({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="220" height="70" viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="55" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">Staggered (مائل)</text>
      <circle cx="55" cy="40" r="22" stroke="#1e3a5f" strokeWidth="1.5" fill="none" />
      <circle cx="55" cy="40" r="4" fill="#1e3a5f" />
      <line x1="55" y1="18" x2="72" y2="28" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="55" y1="18" x2="38" y2="28" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="55" y1="18" x2="55" y2="18" stroke="#1e3a5f" strokeWidth="1" />
      <text x="76" y="27" fill="#666" fontSize="5">H</text>
      <text x="32" y="27" fill="#666" fontSize="5">H</text>
      <line x1="55" y1="58" x2="72" y2="52" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="55" y1="58" x2="38" y2="52" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="55" y1="58" x2="55" y2="58" stroke="#1e3a5f" strokeWidth="1" />
      <text x="73" y="54" fill="#666" fontSize="5">H</text>
      <text x="33" y="54" fill="#666" fontSize="5">H</text>
      <text x="55" y="67" textAnchor="middle" fill="#2e7d32" fontSize="6">أقل طاقة</text>
      <text x="110" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">Eclipsed (متقابل)</text>
      <circle cx="165" cy="40" r="22" stroke="#1e3a5f" strokeWidth="1.5" fill="none" />
      <line x1="165" y1="18" x2="182" y2="28" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="165" y1="18" x2="148" y2="28" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="165" y1="18" x2="165" y2="18" stroke="#1e3a5f" strokeWidth="1" />
      <text x="186" y="27" fill="#666" fontSize="5">H</text>
      <text x="142" y="27" fill="#666" fontSize="5">H</text>
      <line x1="165" y1="58" x2="182" y2="52" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="165" y1="58" x2="148" y2="52" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="165" y1="58" x2="165" y2="58" stroke="#1e3a5f" strokeWidth="1" />
      <text x="186" y="54" fill="#666" fontSize="5">H</text>
      <text x="133" y="54" fill="#666" fontSize="5">H</text>
      <text x="165" y="67" textAnchor="middle" fill="#c00" fontSize="6">أعلى طاقة بـ 12 kJ/mol</text>
    </svg>
  );
}

export function E2Elimination({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="100" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">آلية E2 — حذف في خطوة واحدة</text>
      <rect x="5" y="18" width="55" height="24" rx="4" stroke="#1e3a5f" strokeWidth="1.5" fill="#e8f0fe" />
      <text x="32" y="29" textAnchor="middle" fill="#1e3a5f" fontSize="6" fontFamily="monospace">R-CH₂-CH₂-X</text>
      <text x="32" y="37" textAnchor="middle" fill="#1e3a5f" fontSize="5" fontFamily="monospace">+ قاعدة :B⁻</text>
      <rect x="68" y="18" width="60" height="24" rx="4" stroke="#d4a017" strokeWidth="1.5" fill="#fff8e1" />
      <text x="98" y="33" textAnchor="middle" fill="#d4a017" fontSize="5">حالة انتقالية</text>
      <text x="98" y="40" textAnchor="middle" fill="#666" fontSize="4">B···H···C=C···X</text>
      <rect x="136" y="18" width="55" height="24" rx="4" stroke="#1e3a5f" strokeWidth="1.5" fill="#e8f0fe" />
      <text x="163" y="29" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="monospace">R-CH=CH₂</text>
      <text x="163" y="37" textAnchor="middle" fill="#666" fontSize="5">+ B⁻H + X⁻</text>
      <text x="62" y="36" textAnchor="middle" fill="#c00" fontSize="8" fontFamily="monospace">→</text>
      <text x="133" y="36" textAnchor="middle" fill="#c00" fontSize="8" fontFamily="monospace">→</text>
      <text x="100" y="58" textAnchor="middle" fill="#d4a017" fontSize="6">B⁻ و X في وضع trans (معاكس)</text>
    </svg>
  );
}

export function CarbocationStability({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="260" height="80" viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="130" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="sans-serif">ترتيب ثبات الكربوكاتيونات</text>
      <rect x="5" y="20" width="36" height="24" rx="4" stroke="#c00" strokeWidth="1.5" fill="#ffebee" />
      <text x="23" y="35" textAnchor="middle" fill="#c00" fontSize="6" fontFamily="monospace">CH₃⁺</text>
      <text x="23" y="52" textAnchor="middle" fill="#c00" fontSize="5">مثيل</text>
      <text x="23" y="60" textAnchor="middle" fill="#c00" fontSize="4">(غير مستقر)</text>
      <text x="43" y="35" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">&lt;</text>
      <rect x="53" y="20" width="36" height="24" rx="4" stroke="#ff9800" strokeWidth="1.5" fill="#fff3e0" />
      <text x="71" y="35" textAnchor="middle" fill="#ff9800" fontSize="6" fontFamily="monospace">R⁺</text>
      <text x="71" y="52" textAnchor="middle" fill="#ff9800" fontSize="5">أولي</text>
      <text x="91" y="35" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">&lt;</text>
      <rect x="100" y="20" width="36" height="24" rx="4" stroke="#d4a017" strokeWidth="1.5" fill="#fff8e1" />
      <text x="118" y="35" textAnchor="middle" fill="#d4a017" fontSize="6" fontFamily="monospace">R₂⁺</text>
      <text x="118" y="52" textAnchor="middle" fill="#d4a017" fontSize="5">ثانوي</text>
      <text x="138" y="35" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">&lt;</text>
      <rect x="147" y="20" width="36" height="24" rx="4" stroke="#2e7d32" strokeWidth="1.5" fill="#e8f5e9" />
      <text x="165" y="35" textAnchor="middle" fill="#2e7d32" fontSize="6" fontFamily="monospace">R₃⁺</text>
      <text x="165" y="52" textAnchor="middle" fill="#2e7d32" fontSize="5">ثالثي</text>
      <text x="165" y="60" textAnchor="middle" fill="#2e7d32" fontSize="4">(الأكثر ثباتاً)</text>
      <text x="130" y="75" textAnchor="middle" fill="#666" fontSize="5">السبب: تأثير (+I) + ترافق فائق (Hyperconjugation)</text>
    </svg>
  );
}

/* ─── Molecular structure components (carbon + bonds) ─── */

function CarbonDot({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r="3" fill="#1e3a5f" />;
}

function BondLine({ x1, y1, x2, y2, color = "#1e3a5f", dash = false }: { x1: number; y1: number; x2: number; y2: number; color?: string; dash?: boolean }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" strokeDasharray={dash ? "3 2" : undefined} />;
}

function AtomLabel({ x, y, label, color = "#1e3a5f", fontSize = 6, fontWeight }: { x: number; y: number; label: string; color?: string; fontSize?: number; fontWeight?: string }) {
  return <text x={x} y={y} fill={color} fontSize={fontSize} fontWeight={fontWeight} fontFamily="sans-serif" textAnchor="middle" dominantBaseline="central">{label}</text>;
}

/* Methane: central C with 4 bonds to H */
export function MethaneStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="90" height="70" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={45} cy={35} />
      <BondLine x1={45} y1={35} x2={45} y2={10} />
      <BondLine x1={45} y1={35} x2={72} y2={22} />
      <BondLine x1={45} y1={35} x2={22} y2={55} />
      <BondLine x1={45} y1={35} x2={68} y2={52} dash />
      <AtomLabel x={45} y={6} label="H" />
      <AtomLabel x={76} y={22} label="H" />
      <AtomLabel x={16} y={58} label="H" />
      <AtomLabel x={72} y={56} label="H" />
      <AtomLabel x={45} y={24} label="C" fontSize={7} />
      <text x={45} y={68} textAnchor="middle" fill="#666" fontSize="6">الميثان CH₄</text>
    </svg>
  );
}

/* Ethane: CH₃–CH₃ */
export function EthaneStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={30} cy={30} />
      <CarbonDot cx={70} cy={30} />
      <BondLine x1={33} y1={30} x2={67} y2={30} />
      <BondLine x1={30} y1={30} x2={15} y2={14} />
      <BondLine x1={30} y1={30} x2={10} y2={46} />
      <BondLine x1={30} y1={30} x2={30} y2={12} />
      <BondLine x1={70} y1={30} x2={85} y2={14} />
      <BondLine x1={70} y1={30} x2={90} y2={46} />
      <BondLine x1={70} y1={30} x2={70} y2={12} />
      <AtomLabel x={30} y={22} label="C" fontSize={6} />
      <AtomLabel x={70} y={22} label="C" fontSize={6} />
      <text x={50} y={58} textAnchor="middle" fill="#666" fontSize="6">الإيثان CH₃CH₃</text>
    </svg>
  );
}

/* Ethene: CH₂=CH₂ with double bond */
export function EtheneStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={35} cy={30} />
      <CarbonDot cx={85} cy={30} />
      <BondLine x1={38} y1={26} x2={82} y2={26} />
      <BondLine x1={38} y1={34} x2={82} y2={34} />
      <BondLine x1={35} y1={30} x2={10} y2={12} />
      <BondLine x1={35} y1={30} x2={10} y2={48} />
      <BondLine x1={85} y1={30} x2={110} y2={12} />
      <BondLine x1={85} y1={30} x2={110} y2={48} />
      <AtomLabel x={35} y={22} label="C" fontSize={6} />
      <AtomLabel x={85} y={22} label="C" fontSize={6} />
      <text x={60} y={58} textAnchor="middle" fill="#666" fontSize="6">الإيثين CH₂=CH₂</text>
    </svg>
  );
}

/* Ethyne: HC≡CH with triple bond */
export function EthyneStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={35} cy={25} />
      <CarbonDot cx={85} cy={25} />
      <BondLine x1={38} y1={21} x2={82} y2={21} />
      <BondLine x1={38} y1={25} x2={82} y2={25} />
      <BondLine x1={38} y1={29} x2={82} y2={29} />
      <BondLine x1={35} y1={25} x2={10} y2={25} />
      <BondLine x1={85} y1={25} x2={110} y2={25} />
      <AtomLabel x={8} y={25} label="H" fontSize={6} />
      <AtomLabel x={113} y={25} label="H" fontSize={6} />
      <text x={60} y={48} textAnchor="middle" fill="#666" fontSize="6">الإيثاين HC≡CH</text>
    </svg>
  );
}

/* Benzene with explicit carbons */
export function BenzeneFullStructure({ className = "inline-block" }: { className?: string }) {
  const pts = [
    [50, 8], [78, 22], [78, 52], [50, 66], [22, 52], [22, 22]
  ];
  return (
    <svg className={className} width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points={pts.map(p => p.join(",")).join(" ")} stroke="#1e3a5f" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="37" r="18" stroke="#1e3a5f" strokeWidth="1" fill="none" strokeDasharray="3 2" />
      {pts.map((p, i) => <CarbonDot key={i} cx={p[0]} cy={p[1]} />)}
      {pts.map((p, i) => <AtomLabel key={i} x={p[0]} y={p[1] - 2} label="C" fontSize={5} />)}
      {/* H labels around ring */}
      <AtomLabel x={50} y={2} label="H" fontSize={5} />
      <AtomLabel x={88} y={18} label="H" fontSize={5} />
      <AtomLabel x={88} y={58} label="H" fontSize={5} />
      <AtomLabel x={50} y={74} label="H" fontSize={5} />
      <AtomLabel x={12} y={58} label="H" fontSize={5} />
      <AtomLabel x={12} y={18} label="H" fontSize={5} />
      <text x={60} y={78} textAnchor="middle" fill="#666" fontSize="6">البنزين C₆H₆</text>
    </svg>
  );
}

/* CH₃–CH₂–OH (ethanol structural) */
export function EthanolStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="130" height="55" viewBox="0 0 130 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={20} cy={25} />
      <CarbonDot cx={55} cy={25} />
      <CarbonDot cx={90} cy={25} />
      <BondLine x1={23} y1={25} x2={52} y2={25} />
      <BondLine x1={58} y1={25} x2={87} y2={25} />
      <BondLine x1={20} y1={25} x2={5} y2={8} />
      <BondLine x1={20} y1={25} x2={5} y2={42} />
      <BondLine x1={20} y1={25} x2={20} y2={8} />
      <BondLine x1={55} y1={25} x2={55} y2={8} />
      <BondLine x1={55} y1={25} x2={40} y2={42} />
      <BondLine x1={90} y1={25} x2={90} y2={8} />
      <BondLine x1={90} y1={25} x2={90} y2={42} />
      <BondLine x1={90} y1={25} x2={110} y2={25} color="#c00" />
      <AtomLabel x={110} y={22} label="OH" color="#c00" fontSize={6} />
      <text x={60} y={53} textAnchor="middle" fill="#666" fontSize="6">الإيثانول CH₃CH₂OH</text>
    </svg>
  );
}

/* CH₃COOH (acetic acid) */
export function AceticAcidStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="140" height="60" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={20} cy={30} />
      <CarbonDot cx={55} cy={30} />
      <BondLine x1={23} y1={30} x2={52} y2={30} />
      <BondLine x1={20} y1={30} x2={5} y2={12} />
      <BondLine x1={20} y1={30} x2={5} y2={48} />
      <BondLine x1={20} y1={30} x2={20} y2={12} />
      <BondLine x1={55} y1={30} x2={55} y2={12} />
      <CarbonDot cx={85} cy={30} />
      <BondLine x1={58} y1={30} x2={82} y2={30} />
      <BondLine x1={85} y1={26} x2={105} y2={26} color="#c00" />
      <BondLine x1={85} y1={34} x2={105} y2={34} color="#c00" />
      <BondLine x1={85} y1={30} x2={85} y2={50} color="#c00" />
      <AtomLabel x={108} y={26} label="O" color="#c00" fontSize={6} />
      <AtomLabel x={82} y={52} label="OH" color="#c00" fontSize={6} />
      <text x={70} y={58} textAnchor="middle" fill="#666" fontSize="5">حمض الخليك CH₃COOH</text>
    </svg>
  );
}

/* R-X halide structure */
export function HalideStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="120" height="50" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={30} cy={25} />
      <CarbonDot cx={60} cy={25} />
      <BondLine x1={33} y1={25} x2={57} y2={25} />
      <BondLine x1={30} y1={25} x2={10} y2={8} />
      <BondLine x1={30} y1={25} x2={10} y2={42} />
      <BondLine x1={30} y1={25} x2={30} y2={8} />
      <BondLine x1={60} y1={25} x2={60} y2={8} />
      <BondLine x1={60} y1={25} x2={60} y2={42} />
      <BondLine x1={60} y1={25} x2={88} y2={25} color="#d4a017" />
      <AtomLabel x={91} y={22} label="X" color="#d4a017" fontSize={7} fontWeight="bold" />
      <text x={60} y={48} textAnchor="middle" fill="#666" fontSize="6">هاليد الألكيل R-X</text>
    </svg>
  );
}

/* Carbonyl C=O */
export function CarbonylStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="140" height="55" viewBox="0 0 140 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <CarbonDot cx={20} cy={28} />
      <CarbonDot cx={55} cy={28} />
      <CarbonDot cx={85} cy={28} />
      <BondLine x1={23} y1={28} x2={52} y2={28} />
      <BondLine x1={58} y1={28} x2={82} y2={28} />
      <BondLine x1={20} y1={28} x2={5} y2={10} />
      <BondLine x1={20} y1={28} x2={5} y2={46} />
      <BondLine x1={20} y1={28} x2={20} y2={10} />
      <BondLine x1={55} y1={28} x2={55} y2={10} />
      <BondLine x1={85} y1={24} x2={110} y2={24} color="#c00" />
      <BondLine x1={85} y1={32} x2={110} y2={32} color="#c00" />
      <AtomLabel x={113} y={24} label="O" color="#c00" fontSize={6} />
      <text x={60} y={53} textAnchor="middle" fill="#666" fontSize="6">مجموعة كربونيل C=O</text>
    </svg>
  );
}

/* ─── Reaction-specific diagrams showing structures ─── */

/* Halogenation: RH + X₂ → RX + HX */
export function HalogenationDiagram({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="300" height="75" viewBox="0 0 300 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">هلجنة الألكان</text>
      <CarbonDot cx={30} cy={35} />
      <CarbonDot cx={60} cy={35} />
      <BondLine x1={33} y1={35} x2={57} y2={35} />
      <BondLine x1={30} y1={35} x2={10} y2={18} />
      <BondLine x1={30} y1={35} x2={10} y2={52} />
      <BondLine x1={30} y1={35} x2={30} y2={18} />
      <BondLine x1={60} y1={35} x2={60} y2={18} />
      <BondLine x1={60} y1={35} x2={60} y2={52} />
      <BondLine x1={60} y1={35} x2={82} y2={35} color="#666" dash />
      <AtomLabel x={82} y={32} label="H" fontSize={5} />
      <text x="45" y="50" fill="#666" textAnchor="middle" fontSize="5" fontFamily="monospace">CH₃CH₃</text>
      <text x="95" y="40" textAnchor="middle" fill="#c00" fontSize="8" fontFamily="monospace">+</text>
      <AtomLabel x={105} y={38} label="Cl" fontSize={7} color="#d4a017" />
      <BondLine x1={112} y1={38} x2={112} y2={30} color="#d4a017" />
      <AtomLabel x={112} y={27} label="Cl" fontSize={4} color="#d4a017" />
      <text x="115" y="48" textAnchor="middle" fill="#999" fontSize="4" fontFamily="monospace">Cl₂</text>
      <text x="125" y="40" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="monospace">→</text>
      <CarbonDot cx={145} cy={35} />
      <CarbonDot cx={175} cy={35} />
      <BondLine x1={148} y1={35} x2={172} y2={35} />
      <BondLine x1={145} y1={35} x2={125} y2={18} />
      <BondLine x1={145} y1={35} x2={125} y2={52} />
      <BondLine x1={145} y1={35} x2={145} y2={18} />
      <BondLine x1={175} y1={35} x2={175} y2={18} />
      <BondLine x1={175} y1={35} x2={175} y2={52} />
      <BondLine x1={175} y1={35} x2={198} y2={35} color="#d4a017" />
      <AtomLabel x={200} y={32} label="Cl" color="#d4a017" fontSize={5} />
      <text x="160" y="50" fill="#666" textAnchor="middle" fontSize="5" fontFamily="monospace">CH₃CH₂Cl</text>
      <text x="210" y="40" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontFamily="monospace">+</text>
      <CarbonDot cx={228} cy={35} />
      <BondLine x1={228} y1={35} x2={213} y2={18} />
      <BondLine x1={228} y1={35} x2={213} y2={52} />
      <BondLine x1={228} y1={35} x2={228} y2={18} />
      <BondLine x1={228} y1={35} x2={250} y2={35} color="#666" dash />
      <AtomLabel x={250} y={32} label="Cl" fontSize={5} />
      <text x="228" y="50" fill="#666" textAnchor="middle" fontSize="5" fontFamily="monospace">HCl</text>
      <text x="150" y="70" textAnchor="middle" fill="#d4a017" fontSize="5">UV أو حرارة — استبدال جذري</text>
    </svg>
  );
}

/* Markovnikov: CH₃CH=CH₂ + HBr → CH₃CHBrCH₃ */
export function MarkovnikovStructure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="340" height="70" viewBox="0 0 340 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">قاعدة ماركوفنيكوف — إضافة HX</text>
      <CarbonDot cx={25} cy={48} />
      <CarbonDot cx={50} cy={35} />
      <CarbonDot cx={80} cy={35} />
      <BondLine x1={28} y1={48} x2={47} y2={37} />
      <BondLine x1={25} y1={48} x2={15} y2={60} />
      <BondLine x1={25} y1={48} x2={15} y2={36} />
      <BondLine x1={25} y1={48} x2={25} y2={33} />
      <BondLine x1={53} y1={32} x2={77} y2={32} />
      <BondLine x1={53} y1={38} x2={77} y2={38} />
      <BondLine x1={50} y1={35} x2={50} y2={18} />
      <BondLine x1={80} y1={35} x2={90} y2={48} />
      <BondLine x1={80} y1={35} x2={90} y2={22} />
      <AtomLabel x={90} y={52} label="H" fontSize={5} />
      <AtomLabel x={90} y={18} label="H" fontSize={5} />
      <text x="100" y="42" textAnchor="middle" fill="#1e3a5f" fontSize="9">+</text>
      <AtomLabel x={112} y={40} label="HBr" fontSize={7} color="#c00" />
      <text x="134" y="42" textAnchor="middle" fill="#1e3a5f" fontSize="9">→</text>
      <CarbonDot cx={155} cy={48} />
      <CarbonDot cx={180} cy={35} />
      <CarbonDot cx={210} cy={35} />
      <BondLine x1={158} y1={48} x2={177} y2={37} />
      <BondLine x1={155} y1={48} x2={145} y2={60} />
      <BondLine x1={155} y1={48} x2={145} y2={36} />
      <BondLine x1={155} y1={48} x2={155} y2={33} />
      <BondLine x1={183} y1={35} x2={207} y2={35} />
      <BondLine x1={180} y1={35} x2={180} y2={18} />
      <BondLine x1={210} y1={35} x2={220} y2={48} />
      <BondLine x1={210} y1={35} x2={230} y2={35} color="#d4a017" />
      <AtomLabel x={233} y={32} label="Br" color="#d4a017" fontSize={5} />
      <AtomLabel x={220} y={52} label="CH₃" fontSize={5} />
      <text x="170" y="66" textAnchor="middle" fill="#666" fontSize="5">الناتج الرئيسي: 2-بروموبروبان</text>
    </svg>
  );
}

/* Wurtz reaction: 2RX + 2Na → R-R + 2NaX */
export function WurtzDiagram({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="320" height="65" viewBox="0 0 320 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="160" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">تفاعل فورتز — تكوين رابطة C–C</text>
      <CarbonDot cx={25} cy={35} />
      <CarbonDot cx={55} cy={35} />
      <BondLine x1={28} y1={35} x2={52} y2={35} />
      <BondLine x1={25} y1={35} x2={5} y2={18} />
      <BondLine x1={25} y1={35} x2={5} y2={52} />
      <BondLine x1={25} y1={35} x2={25} y2={18} />
      <BondLine x1={55} y1={35} x2={55} y2={18} />
      <BondLine x1={55} y1={35} x2={55} y2={52} />
      <BondLine x1={55} y1={35} x2={75} y2={35} color="#d4a017" />
      <AtomLabel x={77} y={32} label="Br" color="#d4a017" fontSize={5} />
      <text x="40" y="52" fill="#666" textAnchor="middle" fontSize="5" fontFamily="monospace">CH₃Br</text>
      <text x="88" y="40" textAnchor="middle" fill="#c00" fontSize="7">+</text>
      <CarbonDot cx={100} cy={35} />
      <CarbonDot cx={130} cy={35} />
      <BondLine x1={103} y1={35} x2={127} y2={35} />
      <BondLine x1={100} y1={35} x2={80} y2={18} />
      <BondLine x1={100} y1={35} x2={80} y2={52} />
      <BondLine x1={100} y1={35} x2={100} y2={18} />
      <BondLine x1={130} y1={35} x2={130} y2={18} />
      <BondLine x1={130} y1={35} x2={130} y2={52} />
      <BondLine x1={130} y1={35} x2={150} y2={35} color="#d4a017" />
      <AtomLabel x={152} y={32} label="Br" color="#d4a017" fontSize={5} />
      <text x="115" y="52" fill="#666" textAnchor="middle" fontSize="5" fontFamily="monospace">CH₃Br</text>
      <text x="160" y="40" textAnchor="middle" fill="#1e3a5f" fontSize="7">+ 2Na →</text>
      <CarbonDot cx={195} cy={35} />
      <CarbonDot cx={230} cy={35} />
      <BondLine x1={198} y1={35} x2={227} y2={35} />
      <BondLine x1={195} y1={35} x2={175} y2={18} />
      <BondLine x1={195} y1={35} x2={175} y2={52} />
      <BondLine x1={195} y1={35} x2={195} y2={18} />
      <BondLine x1={230} y1={35} x2={230} y2={18} />
      <BondLine x1={230} y1={35} x2={230} y2={52} />
      <BondLine x1={230} y1={35} x2={250} y2={35} />
      <CarbonDot cx={250} cy={35} />
      <CarbonDot cx={280} cy={35} />
      <BondLine x1={253} y1={35} x2={277} y2={35} />
      <BondLine x1={250} y1={35} x2={250} y2={18} />
      <BondLine x1={250} y1={35} x2={250} y2={52} />
      <BondLine x1={280} y1={35} x2={280} y2={18} />
      <BondLine x1={280} y1={35} x2={280} y2={52} />
      <BondLine x1={280} y1={35} x2={300} y2={35} />
      <AtomLabel x={302} y={32} label="CH₃" fontSize={4} />
      <text x="240" y="52" fill="#666" textAnchor="middle" fontSize="5" fontFamily="monospace">CH₃CH₃</text>
      <text x="260" y="62" textAnchor="middle" fill="#999" fontSize="5">+ 2NaBr</text>
    </svg>
  );
}

/* E2 elimination */
export function E2Structure({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="320" height="70" viewBox="0 0 320 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="160" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">E2 — حذف بمساعدة قاعدة</text>
      <CarbonDot cx={20} cy={45} />
      <CarbonDot cx={50} cy={45} />
      <CarbonDot cx={80} cy={45} />
      <BondLine x1={23} y1={45} x2={47} y2={45} />
      <BondLine x1={53} y1={45} x2={77} y2={45} />
      <BondLine x1={20} y1={45} x2={20} y2={28} />
      <BondLine x1={20} y1={45} x2={5} y2={58} />
      <BondLine x1={20} y1={45} x2={5} y2={32} />
      <BondLine x1={50} y1={45} x2={50} y2={28} />
      <BondLine x1={80} y1={45} x2={95} y2={58} />
      <BondLine x1={80} y1={45} x2={95} y2={32} />
      <BondLine x1={80} y1={45} x2={95} y2={45} color="#d4a017" />
      <AtomLabel x={97} y={42} label="Br" color="#d4a017" fontSize={5} />
      <text x="100" y="52" textAnchor="middle" fill="#c00" fontSize="7" fontFamily="monospace">+ B:⁻</text>
      <text x="120" y="45" textAnchor="middle" fill="#1e3a5f" fontSize="9">→</text>
      <CarbonDot cx={145} cy={35} />
      <CarbonDot cx={175} cy={35} />
      <BondLine x1={148} y1={31} x2={172} y2={31} />
      <BondLine x1={148} y1={39} x2={172} y2={39} />
      <BondLine x1={145} y1={35} x2={130} y2={48} />
      <BondLine x1={145} y1={35} x2={130} y2={22} />
      <BondLine x1={175} y1={35} x2={190} y2={48} />
      <BondLine x1={175} y1={35} x2={190} y2={22} />
      <text x="160" y="58" textAnchor="middle" fill="#666" fontSize="6">ألكين</text>
      <text x="200" y="50" textAnchor="middle" fill="#1e3a5f" fontSize="7">+ BH + Br⁻</text>
      <text x="160" y="68" textAnchor="middle" fill="#d4a017" fontSize="5">Br و H في وضع anti (معاكس)</text>
    </svg>
  );
}

/* Carbonyl addition */
export function CarbonylAddition({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="280" height="75" viewBox="0 0 280 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="140" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">إضافة محب للنواة للكربونيل</text>
      <CarbonDot cx={20} cy={45} />
      <CarbonDot cx={50} cy={35} />
      <CarbonDot cx={80} cy={35} />
      <BondLine x1={23} y1={45} x2={47} y2={37} />
      <BondLine x1={25} y1={45} x2={10} y2={58} />
      <BondLine x1={25} y1={45} x2={10} y2={32} />
      <BondLine x1={50} y1={35} x2={50} y2={18} />
      <BondLine x1={80} y1={31} x2={100} y2={31} color="#c00" />
      <BondLine x1={80} y1={39} x2={100} y2={39} color="#c00" />
      <AtomLabel x={103} y={31} label="O" color="#c00" fontSize={6} />
      <text x="112" y="42" textAnchor="middle" fill="#1e3a5f" fontSize="9">+</text>
      <text x="122" y="40" fill="#c00" fontSize="7" fontFamily="monospace">Nu⁻</text>
      <text x="138" y="42" textAnchor="middle" fill="#1e3a5f" fontSize="9">→</text>
      <CarbonDot cx={160} cy={45} />
      <CarbonDot cx={190} cy={35} />
      <CarbonDot cx={220} cy={35} />
      <BondLine x1={163} y1={45} x2={187} y2={37} />
      <BondLine x1={165} y1={45} x2={150} y2={58} />
      <BondLine x1={165} y1={45} x2={150} y2={32} />
      <BondLine x1={190} y1={35} x2={190} y2={18} />
      <BondLine x1={220} y1={35} x2={240} y2={35} color="#c00" />
      <AtomLabel x={243} y={32} label="O⁻" color="#c00" fontSize={5} />
      <BondLine x1={220} y1={35} x2={220} y2={52} color="#666" dash />
      <AtomLabel x={218} y={56} label="Nu" fontSize={5} />
      <text x="200" y="68" textAnchor="middle" fill="#666" fontSize="5">كحول بعد معالجة حمضية</text>
    </svg>
  );
}

/* Esterification */
export function EsterificationDiagram({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="320" height="80" viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="160" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">الأسترة — حمض + كحول → إستر + ماء</text>
      <CarbonDot cx={15} cy={45} />
      <CarbonDot cx={45} cy={45} />
      <CarbonDot cx={75} cy={35} />
      <BondLine x1={18} y1={45} x2={42} y2={45} />
      <BondLine x1={48} y1={45} x2={72} y2={37} />
      <BondLine x1={15} y1={45} x2={15} y2={28} />
      <BondLine x1={15} y1={45} x2={5} y2={58} />
      <BondLine x1={15} y1={45} x2={5} y2={32} />
      <BondLine x1={75} y1={31} x2={95} y2={31} color="#c00" />
      <BondLine x1={75} y1={39} x2={95} y2={39} color="#c00" />
      <BondLine x1={75} y1={35} x2={75} y2={55} color="#c00" />
      <AtomLabel x={98} y={31} label="O" color="#c00" fontSize={5} />
      <AtomLabel x={73} y={58} label="OH" color="#c00" fontSize={5} />
      <text x="106" y="45" textAnchor="middle" fill="#1e3a5f" fontSize="7">+</text>
      <CarbonDot cx={120} cy={45} />
      <BondLine x1={120} y1={45} x2={120} y2={28} />
      <BondLine x1={120} y1={45} x2={120} y2={62} color="#c00" />
      <BondLine x1={120} y1={45} x2={140} y2={45} />
      <CarbonDot cx={140} cy={45} />
      <CarbonDot cx={160} cy={45} />
      <BondLine x1={143} y1={45} x2={157} y2={45} />
      <AtomLabel x={120} y={65} label="OH" color="#c00" fontSize={5} />
      <text x="168" y="45" textAnchor="middle" fill="#1e3a5f" fontSize="9" fontFamily="monospace">→</text>
      <CarbonDot cx={190} cy={45} />
      <CarbonDot cx={220} cy={45} />
      <CarbonDot cx={250} cy={35} />
      <BondLine x1={193} y1={45} x2={217} y2={45} />
      <BondLine x1={223} y1={45} x2={247} y2={37} />
      <BondLine x1={190} y1={45} x2={190} y2={28} />
      <BondLine x1={190} y1={45} x2={180} y2={58} />
      <BondLine x1={190} y1={45} x2={180} y2={32} />
      <BondLine x1={250} y1={31} x2={270} y2={31} color="#c00" />
      <BondLine x1={250} y1={39} x2={270} y2={39} color="#c00" />
      <BondLine x1={250} y1={35} x2={230} y2={55} color="#c00" />
      <AtomLabel x={273} y={31} label="O" color="#c00" fontSize={5} />
      <text x="260" y="60" textAnchor="middle" fill="#666" fontSize="5" fontFamily="monospace">R'</text>
      <text x="230" y="68" textAnchor="middle" fill="#999" fontSize="5">+ H₂O</text>
      <text x="160" y="78" textAnchor="middle" fill="#d4a017" fontSize="5">H₂SO₄ مركز، تسخين</text>
    </svg>
  );
}

/* SN2 with structure */
export function SN2FullDiagram({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="150" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">SN2 — هجوم خلفي + انقلاب فراغي</text>
      <CarbonDot cx={30} cy={45} />
      <CarbonDot cx={55} cy={35} />
      <CarbonDot cx={80} cy={45} />
      <BondLine x1={33} y1={45} x2={52} y2={37} />
      <BondLine x1={58} y1={37} x2={77} y2={45} />
      <BondLine x1={30} y1={45} x2={15} y2={58} />
      <BondLine x1={30} y1={45} x2={15} y2={32} />
      <BondLine x1={55} y1={35} x2={55} y2={18} />
      <BondLine x1={80} y1={45} x2={80} y2={28} />
      <BondLine x1={55} y1={35} x2={55} y2={55} color="#d4a017" />
      <AtomLabel x={53} y={58} label="X" color="#d4a017" fontSize={5} />
      <text x="88" y="52" textAnchor="middle" fill="#c00" fontSize="6" fontFamily="monospace">+ Nu⁻</text>
      <text x="105" y="45" textAnchor="middle" fill="#1e3a5f" fontSize="9">→</text>
      <CarbonDot cx={130} cy={35} />
      <CarbonDot cx={155} cy={45} />
      <CarbonDot cx={180} cy={35} />
      <BondLine x1={133} y1={37} x2={152} y2={45} />
      <BondLine x1={158} y1={45} x2={177} y2={37} />
      <BondLine x1={130} y1={35} x2={130} y2={18} />
      <BondLine x1={155} y1={45} x2={155} y2={28} />
      <BondLine x1={180} y1={35} x2={180} y2={18} />
      <BondLine x1={130} y1={35} x2={130} y2={55} />
      <BondLine x1={155} y1={45} x2={155} y2={62} color="#c00" />
      <AtomLabel x={153} y={65} label="Nu" color="#c00" fontSize={5} />
      <BondLine x1={180} y1={35} x2={180} y2={55} />
      <text x="230" y="38" textAnchor="middle" fill="#666" fontSize="5">+ X⁻</text>
      <text x="155" y="78" textAnchor="middle" fill="#d4a017" fontSize="5">انقلاب فراغي (Walden Inversion)</text>
    </svg>
  );
}

/* Alkene hydration */
export function AlkeneHydration({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="280" height="65" viewBox="0 0 280 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="140" y="10" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">إماهة الألكين → كحول (ماركوفنيكوف)</text>
      <CarbonDot cx={25} cy={48} />
      <CarbonDot cx={55} cy={35} />
      <CarbonDot cx={85} cy={35} />
      <BondLine x1={28} y1={48} x2={52} y2={37} />
      <BondLine x1={25} y1={48} x2={10} y2={60} />
      <BondLine x1={25} y1={48} x2={10} y2={36} />
      <BondLine x1={25} y1={48} x2={25} y2={33} />
      <BondLine x1={58} y1={32} x2={82} y2={32} />
      <BondLine x1={58} y1={38} x2={82} y2={38} />
      <AtomLabel x={85} y={22} label="CH₃" fontSize={4.5} />
      <text x="96" y="42" textAnchor="middle" fill="#1e3a5f" fontSize="7">+ H₂O</text>
      <text x="113" y="42" textAnchor="middle" fill="#1e3a5f" fontSize="9">→</text>
      <CarbonDot cx={135} cy={48} />
      <CarbonDot cx={165} cy={35} />
      <CarbonDot cx={195} cy={35} />
      <BondLine x1={138} y1={48} x2={162} y2={37} />
      <BondLine x1={135} y1={48} x2={120} y2={60} />
      <BondLine x1={135} y1={48} x2={120} y2={36} />
      <BondLine x1={135} y1={48} x2={135} y2={33} />
      <BondLine x1={165} y1={35} x2={165} y2={18} />
      <BondLine x1={165} y1={35} x2={165} y2={55} color="#c00" />
      <AtomLabel x={163} y={58} label="OH" color="#c00" fontSize={5} />
      <AtomLabel x={195} y={22} label="CH₃" fontSize={4.5} />
      <text x="210" y="42" textAnchor="middle" fill="#666" fontSize="6">+ H⁺</text>
      <text x="140" y="63" textAnchor="middle" fill="#d4a017" fontSize="5">H₂SO₄ محفز</text>
    </svg>
  );
}

export function HydrogenBonding({ className = "inline-block" }: { className?: string }) {
  return (
    <svg className={className} width="260" height="70" viewBox="0 0 260 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="130" y="12" textAnchor="middle" fill="#1e3a5f" fontSize="7" fontFamily="sans-serif">الروابط الهيدروجينية: كحول (غليان عالٍ) vs إيثر (غليان منخفض)</text>
      <text x="65" y="25" textAnchor="middle" fill="#1e3a5f" fontSize="6" fontFamily="sans-serif">كحول — رابطة H بين جزيئية</text>
      <line x1="15" y1="42" x2="45" y2="42" stroke="#1e3a5f" strokeWidth="1" />
      <circle cx="30" cy="42" r="3" fill="#c00" />
      <circle cx="35" cy="42" r="1.5" fill="#ddd" />
      <text x="15" y="38" fill="#c00" fontSize="4">O</text>
      <text x="36" y="38" fill="#666" fontSize="4">H</text>
      <line x1="50" y1="42" x2="70" y2="42" stroke="#c00" strokeWidth="1" strokeDasharray="3 2" />
      <text x="53" y="40" fill="#c00" fontSize="4">رابطة H</text>
      <circle cx="75" cy="42" r="1.5" fill="#ddd" />
      <text x="76" y="38" fill="#666" fontSize="4">H</text>
      <line x1="78" y1="42" x2="95" y2="42" stroke="#1e3a5f" strokeWidth="1" />
      <circle cx="85" cy="42" r="3" fill="#c00" />
      <text x="83" y="38" fill="#c00" fontSize="4">O</text>
      <text x="100" y="38" fill="#1e3a5f" fontSize="4">R</text>
      <text x="65" y="58" textAnchor="middle" fill="#c00" fontSize="5">نقطة غليان عالية</text>
      <text x="195" y="25" textAnchor="middle" fill="#1e3a5f" fontSize="6" fontFamily="sans-serif">إيثر — لا رابطة H بين جزيئية</text>
      <circle cx="170" cy="42" r="3" fill="#c00" />
      <text x="166" y="38" fill="#c00" fontSize="4">O</text>
      <text x="161" y="42" fill="#1e3a5f" fontSize="4">R</text>
      <text x="183" y="42" fill="#1e3a5f" fontSize="4">R</text>
      <line x1="156" y1="42" x2="161" y2="42" stroke="#1e3a5f" strokeWidth="1" />
      <line x1="177" y1="42" x2="192" y2="42" stroke="#1e3a5f" strokeWidth="1" />
      <text x="195" y="58" textAnchor="middle" fill="#1e3a5f" fontSize="5">نقطة غليان منخفضة</text>
    </svg>
  );
}
