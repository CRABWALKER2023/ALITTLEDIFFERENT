"use client";
import { useState } from "react";

export default function Page() {
  const [showAnimation, setShowAnimation] = useState(true);

  return (
    <div style={{fontFamily:"'Cormorant Garamond', Georgia, serif",minHeight:'100vh',position:'relative',overflow:'hidden',background:'linear-gradient(135deg,#fdf8f8,#f8f0f4)'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        .nav-link:hover { color:#2a1a1a !important; }
        .size-box:hover { background:#fff !important; border-color:#c87898 !important; }
        .fabric { animation: fabricDrift 6s ease-in-out infinite; transform-origin: top left; }
        @keyframes fabricDrift { 0%,100% { transform: rotate(-1deg) translate(0px,0px); } 50% { transform: rotate(1deg) translate(3px,4px); } }
        .tape { stroke-dasharray:800; stroke-dashoffset:800; animation: tapeUnroll 4s ease-in-out infinite; }
        @keyframes tapeUnroll { 0% { stroke-dashoffset:800; opacity:0; } 30% { opacity:1; } 100% { stroke-dashoffset:0; opacity:1; } }
        .scissors-top { animation: snipTop 2.5s ease-in-out infinite; transform-origin: 148px 195px; }
        .scissors-bot { animation: snipBot 2.5s ease-in-out infinite; transform-origin: 148px 195px; }
        @keyframes snipTop { 0%,100% { transform: rotate(0deg); } 40%,60% { transform: rotate(-12deg); } }
        @keyframes snipBot { 0%,100% { transform: rotate(0deg); } 40%,60% { transform: rotate(12deg); } }
        .needle { animation: needleMove 3s ease-in-out infinite; }
        @keyframes needleMove { 0%,100% { transform: translate(0,0) rotate(-30deg); } 50% { transform: translate(8px,-12px) rotate(-15deg); } }
        .spool { animation: spoolSpin 4s linear infinite; transform-origin: 514px 226px; }
        @keyframes spoolSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .pin1 { animation: pinGlow 2s ease-in-out infinite 0s; }
        .pin2 { animation: pinGlow 2s ease-in-out infinite 0.4s; }
        .pin3 { animation: pinGlow 2s ease-in-out infinite 0.8s; }
        .pin4 { animation: pinGlow 2s ease-in-out infinite 1.2s; }
        .pin5 { animation: pinGlow 2s ease-in-out infinite 1.6s; }
        @keyframes pinGlow { 0%,100% { opacity:0.6; } 50% { opacity:1; filter: drop-shadow(0 0 3px #f0c840); } }
        .thimble { animation: thimbleBounce 3s ease-in-out infinite; }
        @keyframes thimbleBounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .thread { stroke-dasharray:400; stroke-dashoffset:400; animation: threadDraw 5s ease-in-out infinite; }
        @keyframes threadDraw { 0% { stroke-dashoffset:400; opacity:0.3; } 60% { stroke-dashoffset:0; opacity:0.8; } 100% { stroke-dashoffset:0; opacity:0.8; } }
        .lace { animation: laceShimmer 4s ease-in-out infinite; }
        @keyframes laceShimmer { 0%,100% { opacity:0.85; } 50% { opacity:1; filter: drop-shadow(0 0 6px rgba(240,176,200,0.5)); } }
        .caption { animation: captionFade 3s ease-in-out infinite; }
        @keyframes captionFade { 0%,100% { opacity:0.7; } 50% { opacity:1; } }
        .toggle-btn { cursor:pointer; font-family:'Cormorant Garamond',Georgia,serif; font-size:11px; letter-spacing:2px; color:#c87898; background:none; border:1px solid #e0c8d0; padding:6px 16px; display:block; margin:0 auto 0; transition:all 0.2s; }
        .toggle-btn:hover { background:#fff; color:#2a1a1a; }
      `}</style>

      <div style={{position:'fixed',inset:0,zIndex:0,opacity:0.1,pointerEvents:'none'}}>
        <svg viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}} preserveAspectRatio="xMidYMid slice">
          <path d="M0 900 Q5 700 10 500 Q14 300 8 50" stroke="#c87898" strokeWidth="2" fill="none"/>
          <ellipse cx="25" cy="100" rx="28" ry="17" fill="#c87898" transform="rotate(20 25 100)"/>
          <ellipse cx="6" cy="200" rx="30" ry="18" fill="#c87898" transform="rotate(-15 6 200)"/>
          <ellipse cx="28" cy="300" rx="28" ry="17" fill="#c87898" transform="rotate(25 28 300)"/>
          <ellipse cx="5" cy="400" rx="30" ry="18" fill="#c87898" transform="rotate(-20 5 400)"/>
          <ellipse cx="26" cy="500" rx="28" ry="17" fill="#c87898" transform="rotate(15 26 500)"/>
          <ellipse cx="6" cy="600" rx="30" ry="18" fill="#c87898" transform="rotate(-25 6 600)"/>
          <ellipse cx="27" cy="700" rx="28" ry="17" fill="#c87898" transform="rotate(20 27 700)"/>
          <ellipse cx="5" cy="800" rx="30" ry="18" fill="#c87898" transform="rotate(-15 5 800)"/>
          <path d="M1400 900 Q1395 700 1390 500 Q1386 300 1392 50" stroke="#c87898" strokeWidth="2" fill="none"/>
          <ellipse cx="1375" cy="100" rx="28" ry="17" fill="#c87898" transform="rotate(-20 1375 100)"/>
          <ellipse cx="1394" cy="200" rx="30" ry="18" fill="#c87898" transform="rotate(15 1394 200)"/>
          <ellipse cx="1372" cy="300" rx="28" ry="17" fill="#c87898" transform="rotate(-25 1372 300)"/>
          <ellipse cx="1395" cy="400" rx="30" ry="18" fill="#c87898" transform="rotate(20 1395 400)"/>
          <ellipse cx="1374" cy="500" rx="28" ry="17" fill="#c87898" transform="rotate(-15 1374 500)"/>
          <ellipse cx="1394" cy="600" rx="30" ry="18" fill="#c87898" transform="rotate(25 1394 600)"/>
          <ellipse cx="1373" cy="700" rx="28" ry="17" fill="#c87898" transform="rotate(-20 1373 700)"/>
          <ellipse cx="1395" cy="800" rx="30" ry="18" fill="#c87898" transform="rotate(15 1395 800)"/>
        </svg>
      </div>

      <div style={{position:'relative',zIndex:1}}>
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 40px',background:'rgba(253,248,248,0.97)',borderBottom:'1px solid #e0c8d0'}}>
          <div style={{display:'flex',gap:'28px'}}>
            {['HOME','SHOP','OUR STORY','CONTACT'].map(link => (
              <span key={link} className="nav-link" style={{fontSize:'11px',letterSpacing:'2.5px',color:'#3a2a2a',cursor:'pointer'}}>{link}</span>
            ))}
          </div>
          <div style={{fontSize:'11px',letterSpacing:'2px',color:'#3a2a2a'}}>EST. 1996</div>
        </nav>

        <section style={{textAlign:'center',padding:'56px 32px 44px'}}>
          <p style={{fontSize:'11px',letterSpacing:'3px',color:'#c87898',margin:'0 0 10px'}}>HANDMADE IN ITALY</p>
          <h1 style={{fontFamily:"'Great Vibes', cursive",fontSize:'72px',color:'#2a1a1a',lineHeight:1.1,margin:'0 0 12px',fontWeight:400}}>A Little Different</h1>
          <div style={{width:'60px',height:'1px',background:'linear-gradient(90deg,transparent,#c87898,transparent)',margin:'0 auto 14px'}}></div>
          <p style={{fontSize:'13px',letterSpacing:'2px',color:'#887080',fontStyle:'italic'}}>Italian fabrics · Exceptional craftsmanship</p>
        </section>

        <section style={{padding:'0 40px 56px'}}>
          <p style={{textAlign:'center',fontSize:'11px',letterSpacing:'3px',color:'#3a2a2a',marginBottom:'20px'}}>SHOP BY SIZE</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'14px',maxWidth:'680px',margin:'0 auto'}}>
            {['Girls 2–8','Teens 10–20','Ladieswear'].map(size => (
              <div key={size} className="size-box" style={{border:'1px solid #e0c8d0',padding:'32px 16px',textAlign:'center',background:'rgba(255,255,255,0.95)',cursor:'pointer',position:'relative'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:'3px',background:'linear-gradient(90deg,#c87898,#f0b0c8)'}}></div>
                <div style={{fontSize:'20px',fontWeight:300,color:'#2a1a1a',letterSpacing:'2px',marginBottom:'6px'}}>{size}</div>
                <div style={{fontSize:'10px',letterSpacing:'2px',color:'#c87898'}}>SHOP NOW</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{margin:'0 40px 56px',padding:'40px 48px',background:'rgba(255,255,255,0.78)',border:'1px solid #e0c8d0',textAlign:'center',position:'relative'}}>
          <div style={{position:'absolute',left:0,top:0,bottom:0,width:'3px',background:'linear-gradient(180deg,#c87898,#f0b0c8)'}}></div>
          <p style={{fontFamily:"'Great Vibes', cursive",fontSize:'36px',color:'#2a1a1a',margin:'0 0 16px'}}>Our Story</p>
          <p style={{fontSize:'15px',color:'#4a3040',lineHeight:1.9,maxWidth:'540px',margin:'0 auto',fontStyle:'italic'}}>
            For over 28 years, A Little Different has been crafting exceptional children's clothing by hand in Italy, using only the finest Italian fabrics. Every piece tells a story of tradition, care, and timeless style.
          </p>
          <p style={{fontSize:'11px',color:'#c87898',letterSpacing:'2px',marginTop:'16px'}}>FOUNDED 1996 · MADE IN ITALY · FAMILY OWNED</p>
        </section>

        {/* Toggle button */}
        <div style={{textAlign:'center',marginBottom:'8px'}}>
          <button className="toggle-btn" onClick={() => setShowAnimation(!showAnimation)}>
            {showAnimation ? 'HIDE ATELIER SCENE' : 'SHOW ATELIER SCENE'}
          </button>
        </div>

        {/* Animated atelier scene */}
        {showAnimation && (
          <div style={{borderTop:'1px solid #e0c8d0',borderBottom:'1px solid #e0c8d0',background:'linear-gradient(135deg,#f8f0ee,#f0e4ec)',overflow:'hidden'}}>
            <svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block'}}>
              <defs>
                <linearGradient id="tableTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f8f2ee"/><stop offset="100%" stopColor="#ede4dc"/></linearGradient>
                <linearGradient id="tableEdge" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c8a880"/><stop offset="100%" stopColor="#a88860"/></linearGradient>
                <linearGradient id="laceGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f5dce4"/><stop offset="100%" stopColor="#e8c8d4"/></linearGradient>
                <linearGradient id="scissorMetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#d8d8d8"/><stop offset="100%" stopColor="#a0a0a0"/></linearGradient>
                <linearGradient id="tapeGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#c8a030"/><stop offset="100%" stopColor="#e0b840"/></linearGradient>
                <filter id="shadow"><feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#8a6060" floodOpacity="0.2"/></filter>
              </defs>
              <rect width="680" height="270" fill="url(#tableTop)"/>
              <rect y="270" width="680" height="50" fill="url(#tableEdge)" rx="2"/>
              <rect y="265" width="680" height="10" fill="#d4b890" opacity="0.7"/>
              <line x1="0" y1="135" x2="680" y2="135" stroke="#e0d0c8" strokeWidth="0.5" opacity="0.5"/>
              <line x1="340" y1="0" x2="340" y2="270" stroke="#e0d0c8" strokeWidth="0.5" opacity="0.5"/>
              <rect x="30" y="15" width="100" height="130" fill="#d4e8f0" opacity="0.5" rx="3"/>
              <line x1="80" y1="15" x2="80" y2="145" stroke="#c0b0a8" strokeWidth="2.5"/>
              <line x1="30" y1="80" x2="130" y2="80" stroke="#c0b0a8" strokeWidth="2.5"/>
              <polygon points="30,15 130,15 175,210 -15,210" fill="#fff8e8" opacity="0.1"/>
              <rect x="8" y="12" width="22" height="134" fill="#c8a888" rx="2"/>
              <rect x="160" y="188" width="360" height="12" fill="#c8a880" rx="2"/>
              <path d="M165 188 Q280 178 370 185 Q440 190 518 182 L518 196 Q440 204 370 198 Q280 192 165 200 Z" fill="#b8c8e8" opacity="0.85"/>
              <g className="fabric lace" filter="url(#shadow)">
                <path d="M20 10 Q80 5 140 20 Q180 30 200 60 Q210 80 195 110 Q180 135 150 145 Q110 155 70 148 Q30 140 15 115 Q0 88 10 55 Q14 30 20 10 Z" fill="url(#laceGrad)" opacity="0.9"/>
                <circle cx="50" cy="45" r="8" fill="none" stroke="#d8a0b8" strokeWidth="1.2" opacity="0.7"/>
                <circle cx="50" cy="45" r="4" fill="#f0c0d0" opacity="0.5"/>
                <circle cx="80" cy="35" r="7" fill="none" stroke="#d8a0b8" strokeWidth="1.2" opacity="0.6"/>
                <circle cx="110" cy="50" r="8" fill="none" stroke="#d8a0b8" strokeWidth="1.2" opacity="0.7"/>
                <circle cx="78" cy="72" r="8" fill="none" stroke="#d8a0b8" strokeWidth="1.2" opacity="0.7"/>
                <circle cx="78" cy="72" r="4" fill="#f0c0d0" opacity="0.5"/>
                <circle cx="50" cy="115" r="8" fill="none" stroke="#d8a0b8" strokeWidth="1.2" opacity="0.6"/>
                <path d="M20 10 Q35 0 50 8 Q65 16 80 8 Q95 0 110 8 Q125 16 140 20" stroke="#d8a0b8" strokeWidth="1.5" fill="none" opacity="0.7"/>
              </g>
              <g filter="url(#shadow)">
                <circle cx="148" cy="195" r="6" fill="#888" opacity="0.9"/>
                <circle cx="148" cy="195" r="3" fill="#c0c0c0"/>
                <g className="scissors-top">
                  <path d="M148 195 L240 155 Q252 148 258 152 Q264 156 258 162 Q252 168 240 168 L148 195 Z" fill="url(#scissorMetal)"/>
                  <path d="M60 168 Q80 158 100 165 Q118 172 130 188 L148 195 L128 200 Q110 192 92 184 Q72 176 60 168 Z" fill="#1a1a1a"/>
                  <ellipse cx="55" cy="168" rx="22" ry="16" fill="none" stroke="#1a1a1a" strokeWidth="8"/>
                  <ellipse cx="55" cy="168" rx="14" ry="10" fill="#f5f0ec"/>
                </g>
                <g className="scissors-bot">
                  <path d="M148 195 L240 235 Q252 242 258 238 Q264 234 258 228 Q252 222 240 222 L148 195 Z" fill="url(#scissorMetal)" opacity="0.9"/>
                  <path d="M60 222 Q80 232 100 225 Q118 218 130 202 L148 195 L128 190 Q110 198 92 206 Q72 214 60 222 Z" fill="#1a1a1a"/>
                  <ellipse cx="55" cy="222" rx="22" ry="16" fill="none" stroke="#1a1a1a" strokeWidth="8"/>
                  <ellipse cx="55" cy="222" rx="14" ry="10" fill="#f5f0ec"/>
                </g>
                <path d="M68 174 Q72 168 76 174 Q72 180 68 174 Z" fill="#e8a0b8" opacity="0.9"/>
                <path d="M68 216 Q72 210 76 216 Q72 222 68 216 Z" fill="#e8a0b8" opacity="0.9"/>
              </g>
              <g filter="url(#shadow)">
                <path d="M280 180 Q320 160 370 170 Q410 178 440 165 Q480 150 520 160 Q550 168 570 180 Q590 192 600 210 Q608 228 595 240 Q580 252 560 248 Q540 244 530 230 Q520 218 530 205" stroke="url(#tapeGrad)" strokeWidth="14" fill="none" strokeLinecap="round" className="tape"/>
                <path d="M280 180 Q320 160 370 170 Q410 178 440 165 Q480 150 520 160 Q550 168 570 180 Q590 192 600 210 Q608 228 595 240 Q580 252 560 248 Q540 244 530 230 Q520 218 530 205" stroke="#fff" strokeWidth="0.5" fill="none" strokeDasharray="5,10" opacity="0.6" className="tape"/>
                <circle cx="280" cy="180" r="6" fill="#c8a030"/>
              </g>
              <g className="needle" filter="url(#shadow)">
                <line x1="390" y1="100" x2="410" y2="145" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round"/>
                <ellipse cx="391" cy="102" rx="3" ry="5" fill="none" stroke="#a0a0a0" strokeWidth="1.5" transform="rotate(-30 391 102)"/>
              </g>
              <path d="M391 102 Q370 85 355 90 Q340 95 335 110 Q330 125 345 130" stroke="#c87898" strokeWidth="1.5" fill="none" strokeLinecap="round" className="thread"/>
              <g filter="url(#shadow)">
                <rect x="460" y="195" width="32" height="50" fill="#c87898" rx="4"/>
                <rect x="456" y="192" width="40" height="10" fill="#e090b0" rx="3"/>
                <rect x="456" y="233" width="40" height="10" fill="#e090b0" rx="3"/>
                <circle cx="476" cy="218" r="5" fill="#b06888" opacity="0.8"/>
              </g>
              <g className="spool" filter="url(#shadow)">
                <rect x="500" y="205" width="28" height="44" fill="#8898c8" rx="4"/>
                <rect x="497" y="202" width="34" height="9" fill="#a0b0e0" rx="3"/>
                <rect x="497" y="243" width="34" height="9" fill="#a0b0e0" rx="3"/>
                <circle cx="514" cy="226" r="5" fill="#7080b0" opacity="0.8"/>
              </g>
              <g filter="url(#shadow)">
                <rect x="538" y="210" width="26" height="40" fill="#c8a840" rx="4"/>
                <rect x="535" y="207" width="32" height="8" fill="#e0c058" rx="3"/>
                <rect x="535" y="245" width="32" height="8" fill="#e0c058" rx="3"/>
                <circle cx="551" cy="228" r="4" fill="#a88828" opacity="0.8"/>
              </g>
              <g className="thimble" filter="url(#shadow)">
                <path d="M430 215 Q428 200 435 192 Q442 185 450 185 Q458 185 465 192 Q472 200 470 215 Q465 225 450 228 Q435 225 430 215 Z" fill="#c8c8b0"/>
                <circle cx="440" cy="200" r="1.5" fill="#a8a898" opacity="0.8"/>
                <circle cx="450" cy="196" r="1.5" fill="#a8a898" opacity="0.8"/>
                <circle cx="460" cy="200" r="1.5" fill="#a8a898" opacity="0.8"/>
              </g>
              <g className="pin1"><line x1="85" y1="30" x2="90" y2="65" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round"/><circle cx="85" cy="28" r="3.5" fill="#c87898"/></g>
              <g className="pin2"><line x1="120" y1="55" x2="118" y2="88" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round"/><circle cx="120" cy="53" r="3.5" fill="#8898c8"/></g>
              <g className="pin3"><line x1="55" y1="95" x2="62" y2="128" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round"/><circle cx="55" cy="93" r="3.5" fill="#c8a840"/></g>
              <g className="pin4"><line x1="95" y1="110" x2="100" y2="142" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round"/><circle cx="95" cy="108" r="3.5" fill="#88b888"/></g>
              <g className="pin5"><line x1="140" y1="75" x2="135" y2="108" stroke="#d0d0d0" strokeWidth="1.5" strokeLinecap="round"/><circle cx="140" cy="73" r="3.5" fill="#e8a040"/></g>
              <g filter="url(#shadow)">
                <ellipse cx="610" cy="175" rx="48" ry="28" fill="#c87898"/>
                <ellipse cx="610" cy="168" rx="44" ry="22" fill="#d890a8"/>
                <ellipse cx="610" cy="165" rx="38" ry="17" fill="#e0a0b8"/>
                <line x1="590" y1="145" x2="594" y2="165" stroke="#d8d8d8" strokeWidth="1.8"/><circle cx="590" cy="143" r="3" fill="#c87898"/>
                <line x1="605" y1="142" x2="607" y2="163" stroke="#d8d8d8" strokeWidth="1.8"/><circle cx="605" cy="140" r="3" fill="#8898c8"/>
                <line x1="620" y1="143" x2="618" y2="163" stroke="#d8d8d8" strokeWidth="1.8"/><circle cx="620" cy="141" r="3" fill="#c8a840"/>
              </g>
              <circle cx="330" cy="230" r="7" fill="#f5f0e8" stroke="#d4c8b0" strokeWidth="1.5"/>
              <circle cx="350" cy="245" r="7" fill="#c87898" stroke="#b06888" strokeWidth="1.5" opacity="0.9"/>
              <circle cx="315" cy="248" r="6" fill="#8898c8" stroke="#7080b0" strokeWidth="1.5" opacity="0.9"/>
              <rect x="0" y="278" width="680" height="42" fill="#c87898" opacity="0.15"/>
              <text x="340" y="303" textAnchor="middle" fontFamily="'Cormorant Garamond',Georgia,serif" fontSize="13" fill="#4a3040" fontStyle="italic" className="caption">Crafted by hand in our Italian atelier · Every detail, every stitch, since 1996</text>
            </svg>
          </div>
        )}

        <footer style={{borderTop:'1px solid #e0c8d0',padding:'22px 40px',textAlign:'center',background:'rgba(253,248,248,0.7)'}}>
          <p style={{fontSize:'14px',color:'#2a1a1a',letterSpacing:'1px',marginBottom:'6px'}}>(516) 374-7392</p>
          <p style={{fontSize:'12px',color:'#3a2a2a',letterSpacing:'1px',marginBottom:'6px'}}>
            <a href="https://www.instagram.com/alittlediff405" target="_blank" style={{color:'#3a2a2a',textDecoration:'none'}}>Instagram: @alittlediff405</a>
          </p>
          <p style={{fontSize:'10px',color:'#887080',letterSpacing:'1px'}}>© A Little Different · All rights reserved</p>
        </footer>
      </div>
    </div>
  )
}
