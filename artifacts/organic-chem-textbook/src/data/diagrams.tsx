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
