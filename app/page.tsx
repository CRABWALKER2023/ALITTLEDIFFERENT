export default function Page() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#f9f8f5' }}>

      {/* Full botanical background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.15, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
          {/* Branch 1 - far left vertical */}
          <path d="M80 950 Q75 750 85 550 Q90 350 75 100" stroke="#4a7c40" strokeWidth="1.8" fill="none"/>
          <ellipse cx="100" cy="880" rx="28" ry="19" fill="#4a7c40" transform="rotate(20 100 880)"/>
          <ellipse cx="68" cy="820" rx="30" ry="21" fill="#3d6b34" transform="rotate(-15 68 820)"/>
          <ellipse cx="105" cy="750" rx="27" ry="19" fill="#4a7c40" transform="rotate(25 105 750)"/>
          <ellipse cx="65" cy="680" rx="31" ry="21" fill="#3d6b34" transform="rotate(-20 65 680)"/>
          <ellipse cx="100" cy="610" rx="28" ry="19" fill="#4a7c40" transform="rotate(15 100 610)"/>
          <ellipse cx="68" cy="540" rx="30" ry="20" fill="#3d6b34" transform="rotate(-25 68 540)"/>
          <ellipse cx="103" cy="470" rx="27" ry="18" fill="#4a7c40" transform="rotate(20 103 470)"/>
          <ellipse cx="70" cy="400" rx="29" ry="20" fill="#3d6b34" transform="rotate(-15 70 400)"/>
          <ellipse cx="98" cy="330" rx="26" ry="18" fill="#4a7c40" transform="rotate(25 98 330)"/>
          <ellipse cx="72" cy="260" rx="27" ry="18" fill="#3d6b34" transform="rotate(-20 72 260)"/>
          <ellipse cx="95" cy="190" rx="24" ry="16" fill="#4a7c40" transform="rotate(15 95 190)"/>
          <ellipse cx="74" cy="130" rx="22" ry="15" fill="#3d6b34" transform="rotate(-10 74 130)"/>

          {/* Branch 2 - left center */}
          <path d="M260 950 Q255 780 265 600 Q272 420 255 200" stroke="#3d6b34" strokeWidth="1.6" fill="none"/>
          <ellipse cx="280" cy="900" rx="26" ry="18" fill="#4a7c40" transform="rotate(-20 280 900)"/>
          <ellipse cx="248" cy="840" rx="28" ry="19" fill="#3d6b34" transform="rotate(15 248 840)"/>
          <ellipse cx="278" cy="770" rx="25" ry="17" fill="#4a7c40" transform="rotate(-25 278 770)"/>
          <ellipse cx="245" cy="700" rx="27" ry="19" fill="#3d6b34" transform="rotate(20 245 700)"/>
          <ellipse cx="275" cy="630" rx="25" ry="17" fill="#4a7c40" transform="rotate(-15 275 630)"/>
          <ellipse cx="248" cy="560" rx="27" ry="18" fill="#3d6b34" transform="rotate(25 248 560)"/>
          <ellipse cx="272" cy="490" rx="24" ry="16" fill="#4a7c40" transform="rotate(-20 272 490)"/>
          <ellipse cx="250" cy="420" rx="26" ry="17" fill="#3d6b34" transform="rotate(15 250 420)"/>
          <ellipse cx="268" cy="350" rx="23" ry="16" fill="#4a7c40" transform="rotate(-25 268 350)"/>
          <ellipse cx="252" cy="280" rx="24" ry="16" fill="#3d6b34" transform="rotate(20 252 280)"/>
          <ellipse cx="262" cy="220" rx="22" ry="15" fill="#4a7c40" transform="rotate(-15 262 220)"/>

          {/* Branch 3 - diagonal top left */}
          <path d="M0 300 Q100 280 200 250 Q320 220 450 180" stroke="#4a7c40" strokeWidth="1.5" fill="none"/>
          <ellipse cx="60" cy="295" rx="22" ry="15" fill="#4a7c40" transform="rotate(10 60 295)"/>
          <ellipse cx="130" cy="275" rx="24" ry="16" fill="#3d6b34" transform="rotate(-10 130 275)"/>
          <ellipse cx="200" cy="258" rx="22" ry="15" fill="#4a7c40" transform="rotate(15 200 258)"/>
          <ellipse cx="270" cy="238" rx="24" ry="16" fill="#3d6b34" transform="rotate(-8 270 238)"/>
          <ellipse cx="350" cy="215" rx="22" ry="15" fill="#4a7c40" transform="rotate(12 350 215)"/>
          <ellipse cx="420" cy="192" rx="20" ry="14" fill="#3d6b34" transform="rotate(-15 420 192)"/>

          {/* Branch 4 - center */}
          <path d="M580 950 Q575 760 588 570 Q596 380 578 150" stroke="#3d6b34" strokeWidth="1.7" fill="none"/>
          <ellipse cx="600" cy="890" rx="27" ry="18" fill="#4a7c40" transform="rotate(20 600 890)"/>
          <ellipse cx="568" cy="820" rx="29" ry="20" fill="#3d6b34" transform="rotate(-15 568 820)"/>
          <ellipse cx="598" cy="750" rx="26" ry="18" fill="#4a7c40" transform="rotate(25 598 750)"/>
          <ellipse cx="570" cy="680" rx="28" ry="19" fill="#3d6b34" transform="rotate(-20 570 680)"/>
          <ellipse cx="596" cy="610" rx="25" ry="17" fill="#4a7c40" transform="rotate(15 596 610)"/>
          <ellipse cx="572" cy="540" rx="27" ry="18" fill="#3d6b34" transform="rotate(-25 572 540)"/>
          <ellipse cx="594" cy="470" rx="25" ry="17" fill="#4a7c40" transform="rotate(20 594 470)"/>
          <ellipse cx="574" cy="400" rx="26" ry="17" fill="#3d6b34" transform="rotate(-15 574 400)"/>
          <ellipse cx="590" cy="330" rx="24" ry="16" fill="#4a7c40" transform="rotate(25 590 330)"/>
          <ellipse cx="576" cy="260" rx="25" ry="16" fill="#3d6b34" transform="rotate(-20 576 260)"/>
          <ellipse cx="586" cy="195" rx="22" ry="15" fill="#4a7c40" transform="rotate(15 586 195)"/>

          {/* Branch 5 - diagonal across top */}
          <path d="M500 50 Q650 80 800 60 Q950 40 1100 70" stroke="#4a7c40" strokeWidth="1.5" fill="none"/>
          <ellipse cx="550" cy="58" rx="22" ry="15" fill="#3d6b34" transform="rotate(8 550 58)"/>
          <ellipse cx="640" cy="72" rx="24" ry="16" fill="#4a7c40" transform="rotate(-12 640 72)"/>
          <ellipse cx="730" cy="62" rx="22" ry="15" fill="#3d6b34" transform="rotate(10 730 62)"/>
          <ellipse cx="820" cy="52" rx="23" ry="15" fill="#4a7c40" transform="rotate(-8 820 52)"/>
          <ellipse cx="920" cy="58" rx="22" ry="15" fill="#3d6b34" transform="rotate(14 920 58)"/>
          <ellipse cx="1020" cy="68" rx="23" ry="16" fill="#4a7c40" transform="rotate(-10 1020 68)"/>

          {/* Branch 6 - right center */}
          <path d="M900 950 Q895 760 908 570 Q916 380 898 150" stroke="#4a7c40" strokeWidth="1.7" fill="none"/>
          <ellipse cx="920" cy="890" rx="27" ry="18" fill="#3d6b34" transform="rotate(-20 920 890)"/>
          <ellipse cx="888" cy="820" rx="29" ry="20" fill="#4a7c40" transform="rotate(15 888 820)"/>
          <ellipse cx="918" cy="750" rx="26" ry="18" fill="#3d6b34" transform="rotate(-25 918 750)"/>
          <ellipse cx="890" cy="680" rx="28" ry="19" fill="#4a7c40" transform="rotate(20 890 680)"/>
          <ellipse cx="916" cy="610" rx="25" ry="17" fill="#3d6b34" transform="rotate(-15 916 610)"/>
          <ellipse cx="892" cy="540" rx="27" ry="18" fill="#4a7c40" transform="rotate(25 892 540)"/>
          <ellipse cx="914" cy="470" rx="25" ry="17" fill="#3d6b34" transform="rotate(-20 914 470)"/>
          <ellipse cx="894" cy="400" rx="26" ry="17" fill="#4a7c40" transform="rotate(15 894 400)"/>
          <ellipse cx="910" cy="330" rx="24" ry="16" fill="#3d6b34" transform="rotate(-25 910 330)"/>
          <ellipse cx="896" cy="260" rx="25" ry="16" fill="#4a7c40" transform="rotate(20 896 260)"/>
          <ellipse cx="906" cy="195" rx="22" ry="15" fill="#3d6b34" transform="rotate(-15 906 195)"/>

          {/* Branch 7 - far right */}
          <path d="M1150 950 Q1145 750 1158 550 Q1165 350 1148 100" stroke="#3d6b34" strokeWidth="1.8" fill="none"/>
          <ellipse cx="1170" cy="880" rx="28" ry="19" fill="#4a7c40" transform="rotate(20 1170 880)"/>
          <ellipse cx="1138" cy="810" rx="30" ry="21" fill="#3d6b34" transform="rotate(-15 1138 810)"/>
          <ellipse cx="1168" cy="740" rx="27" ry="19" fill="#4a7c40" transform="rotate(25 1168 740)"/>
          <ellipse cx="1140" cy="670" rx="29" ry="20" fill="#3d6b34" transform="rotate(-20 1140 670)"/>
          <ellipse cx="1165"
