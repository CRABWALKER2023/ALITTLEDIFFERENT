export default function Page() {
  return (
    <div style={{fontFamily:"'Cormorant Garamond', Georgia, serif",minHeight:'100vh',position:'relative',overflow:'hidden',background:'linear-gradient(135deg,#fdf8f8,#f8f0f4)'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        .nav-link:hover { color:#2a1a1a !important; }
        .size-box:hover { background:#fff !important; border-color:#c87898 !important; }
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
          <path d="M120 900 Q125 700 130 500 Q134 300 128 50" stroke="#c87898" strokeWidth="1.5" fill="none"/>
          <ellipse cx="142" cy="150" rx="24" ry="15" fill="#c87898" transform="rotate(-20 142 150)"/>
          <ellipse cx="122" cy="280" rx="26" ry="16" fill="#c87898" transform="rotate(15 122 280)"/>
          <ellipse cx="140" cy="420" rx="24" ry="15" fill="#c87898" transform="rotate(-25 140 420)"/>
          <ellipse cx="120" cy="560" rx="26" ry="16" fill="#c87898" transform="rotate(20 120 560)"/>
          <ellipse cx="138" cy="700" rx="24" ry="15" fill="#c87898" transform="rotate(-15 138 700)"/>
          <path d="M1400 900 Q1395 700 1390 500 Q1386 300 1392 50" stroke="#c87898" strokeWidth="2" fill="none"/>
          <ellipse cx="1375" cy="100" rx="28" ry="17" fill="#c87898" transform="rotate(-20 1375 100)"/>
          <ellipse cx="1394" cy="200" rx="30" ry="18" fill="#c87898" transform="rotate(15 1394 200)"/>
          <ellipse cx="1372" cy="300" rx="28" ry="17" fill="#c87898" transform="rotate(-25 1372 300)"/>
          <ellipse cx="1395" cy="400" rx="30" ry="18" fill="#c87898" transform="rotate(20 1395 400)"/>
          <ellipse cx="1374" cy="500" rx="28" ry="17" fill="#c87898" transform="rotate(-15 1374 500)"/>
          <ellipse cx="1394" cy="600" rx="30" ry="18" fill="#c87898" transform="rotate(25 1394 600)"/>
          <ellipse cx="1373" cy="700" rx="28" ry="17" fill="#c87898" transform="rotate(-20 1373 700)"/>
          <ellipse cx="1395" cy="800" rx="30" ry="18" fill="#c87898" transform="rotate(15 1395 800)"/>
          <path d="M1280 900 Q1275 700 1270 500 Q1266 300 1272 50" stroke="#c87898" strokeWidth="1.5" fill="none"/>
          <ellipse cx="1258" cy="150" rx="24" ry="15" fill="#c87898" transform="rotate(20 1258 150)"/>
          <ellipse cx="1278" cy="280" rx="26" ry="16" fill="#c87898" transform="rotate(-15 1278 280)"/>
          <ellipse cx="1260" cy="420" rx="24" ry="15" fill="#c87898" transform="rotate(25 1260 420)"/>
          <ellipse cx="1280" cy="560" rx="26" ry="16" fill="#c87898" transform="rotate(-20 1280 560)"/>
          <ellipse cx="1262" cy="700" rx="24" ry="15" fill="#c87898" transform="rotate(15 1262 700)"/>
          <path d="M0 100 Q200 80 400 95 Q600 110 800 90 Q1000 70 1200 85 Q1350 95 1400 80" stroke="#c87898" strokeWidth="1.2" fill="none"/>
          <ellipse cx="200" cy="88" rx="22" ry="13" fill="#c87898" transform="rotate(10 200 88)"/>
          <ellipse cx="500" cy="102" rx="22" ry="13" fill="#c87898" transform="rotate(-10 500 102)"/>
          <ellipse cx="800" cy="86" rx="22" ry="13" fill="#c87898" transform="rotate(10 800 86)"/>
          <ellipse cx="1100" cy="92" rx="22" ry="13" fill="#c87898" transform="rotate(-10 1100 92)"/>
          <path d="M0 820 Q200 840 400 825 Q600 810 800 830 Q1000 850 1200 835 Q1350 825 1400 840" stroke="#c87898" strokeWidth="1.2" fill="none"/>
          <ellipse cx="200" cy="832" rx="22" ry="13" fill="#c87898" transform="rotate(-10 200 832)"/>
          <ellipse cx="500" cy="818" rx="22" ry="13" fill="#c87898" transform="rotate(10 500 818)"/>
          <ellipse cx="800" cy="834" rx="22" ry="13" fill="#c87898" transform="rotate(-10 800 834)"/>
          <ellipse cx="1100" cy="842" rx="22" ry="13" fill="#c87898" transform="rotate(10 1100 842)"/>
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
