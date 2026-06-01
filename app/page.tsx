export default function Page() {
  return (
    <div style={{fontFamily:"'Cormorant Garamond', Georgia, serif",minHeight:'100vh',position:'relative',overflow:'hidden',background:'#f9f8f5'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        .nav-link:hover { color:#2c3e25 !important; }
        .size-box:hover { background:#fff !important; border-color:#7a9470 !important; }
      `}</style>

      <div style={{position:'fixed',inset:0,zIndex:0,opacity:0.12,pointerEvents:'none'}}>
        <svg viewBox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}} preserveAspectRatio="xMidYMid slice">
          <path d="M80 950 Q75 750 85 550 Q90 350 75 100" stroke="#4a7c40" strokeWidth="1.8" fill="none"/>
          <ellipse cx="100" cy="880" rx="28" ry="19" fill="#4a7c40" transform="rotate(20 100 880)"/>
          <ellipse cx="68" cy="810" rx="30" ry="21" fill="#3d6b34" transform="rotate(-15 68 810)"/>
          <ellipse cx="105" cy="740" rx="27" ry="19" fill="#4a7c40" transform="rotate(25 105 740)"/>
          <ellipse cx="65" cy="670" rx="31" ry="21" fill="#3d6b34" transform="rotate(-20 65 670)"/>
          <ellipse cx="100" cy="600" rx="28" ry="19" fill="#4a7c40" transform="rotate(15 100 600)"/>
          <ellipse cx="68" cy="530" rx="30" ry="20" fill="#3d6b34" transform="rotate(-25 68 530)"/>
          <ellipse cx="103" cy="460" rx="27" ry="18" fill="#4a7c40" transform="rotate(20 103 460)"/>
          <ellipse cx="70" cy="390" rx="29" ry="20" fill="#3d6b34" transform="rotate(-15 70 390)"/>
          <ellipse cx="98" cy="320" rx="26" ry="18" fill="#4a7c40" transform="rotate(25 98 320)"/>
          <ellipse cx="72" cy="250" rx="27" ry="18" fill="#3d6b34" transform="rotate(-20 72 250)"/>
          <path d="M260 950 Q255 780 265 600 Q272 420 255 200" stroke="#3d6b34" strokeWidth="1.6" fill="none"/>
          <ellipse cx="280" cy="890" rx="26" ry="18" fill="#4a7c40" transform="rotate(-20 280 890)"/>
          <ellipse cx="248" cy="820" rx="28" ry="19" fill="#3d6b34" transform="rotate(15 248 820)"/>
          <ellipse cx="278" cy="750" rx="25" ry="17" fill="#4a7c40" transform="rotate(-25 278 750)"/>
          <ellipse cx="245" cy="680" rx="27" ry="19" fill="#3d6b34" transform="rotate(20 245 680)"/>
          <ellipse cx="275" cy="610" rx="25" ry="17" fill="#4a7c40" transform="rotate(-15 275 610)"/>
          <ellipse cx="248" cy="540" rx="27" ry="18" fill="#3d6b34" transform="rotate(25 248 540)"/>
          <ellipse cx="272" cy="470" rx="24" ry="16" fill="#4a7c40" transform="rotate(-20 272 470)"/>
          <ellipse cx="250" cy="400" rx="26" ry="17" fill="#3d6b34" transform="rotate(15 250 400)"/>
          <path d="M580 950 Q575 760 588 570 Q596 380 578 150" stroke="#3d6b34" strokeWidth="1.7" fill="none"/>
          <ellipse cx="600" cy="880" rx="27" ry="18" fill="#4a7c40" transform="rotate(20 600 880)"/>
          <ellipse cx="568" cy="810" rx="29" ry="20" fill="#3d6b34" transform="rotate(-15 568 810)"/>
          <ellipse cx="598" cy="740" rx="26" ry="18" fill="#4a7c40" transform="rotate(25 598 740)"/>
          <ellipse cx="570" cy="670" rx="28" ry="19" fill="#3d6b34" transform="rotate(-20 570 670)"/>
          <ellipse cx="596" cy="600" rx="25" ry="17" fill="#4a7c40" transform="rotate(15 596 600)"/>
          <ellipse cx="572" cy="530" rx="27" ry="18" fill="#3d6b34" transform="rotate(-25 572 530)"/>
          <ellipse cx="594" cy="460" rx="25" ry="17" fill="#4a7c40" transform="rotate(20 594 460)"/>
          <ellipse cx="574" cy="390" rx="26" ry="17" fill="#3d6b34" transform="rotate(-15 574 390)"/>
          <path d="M900 950 Q895 760 908 570 Q916 380 898 150" stroke="#4a7c40" strokeWidth="1.7" fill="none"/>
          <ellipse cx="920" cy="880" rx="27" ry="18" fill="#3d6b34" transform="rotate(-20 920 880)"/>
          <ellipse cx="888" cy="810" rx="29" ry="20" fill="#4a7c40" transform="rotate(15 888 810)"/>
          <ellipse cx="918" cy="740" rx="26" ry="18" fill="#3d6b34" transform="rotate(-25 918 740)"/>
          <ellipse cx="890" cy="670" rx="28" ry="19" fill="#4a7c40" transform="rotate(20 890 670)"/>
          <ellipse cx="916" cy="600" rx="25" ry="17" fill="#3d6b34" transform="rotate(-15 916 600)"/>
          <ellipse cx="892" cy="530" rx="27" ry="18" fill="#4a7c40" transform="rotate(25 892 530)"/>
          <ellipse cx="914" cy="460" rx="25" ry="17" fill="#3d6b34" transform="rotate(-20 914 460)"/>
          <ellipse cx="894" cy="390" rx="26" ry="17" fill="#4a7c40" transform="rotate(15 894 390)"/>
          <path d="M1150 950 Q1145 750 1158 550 Q1165 350 1148 100" stroke="#3d6b34" strokeWidth="1.8" fill="none"/>
          <ellipse cx="1170" cy="870" rx="28" ry="19" fill="#4a7c40" transform="rotate(20 1170 870)"/>
          <ellipse cx="1138" cy="800" rx="30" ry="21" fill="#3d6b34" transform="rotate(-15 1138 800)"/>
          <ellipse cx="1168" cy="730" rx="27" ry="19" fill="#4a7c40" transform="rotate(25 1168 730)"/>
          <ellipse cx="1140" cy="660" rx="29" ry="20" fill="#3d6b34" transform="rotate(-20 1140 660)"/>
          <ellipse cx="1165" cy="590" rx="27" ry="18" fill="#4a7c40" transform="rotate(15 1165 590)"/>
          <ellipse cx="1142" cy="520" rx="28" ry="19" fill="#3d6b34" transform="rotate(-25 1142 520)"/>
          <ellipse cx="1163" cy="450" rx="26" ry="17" fill="#4a7c40" transform="rotate(20 1163 450)"/>
          <ellipse cx="1144" cy="380" rx="27" ry="18" fill="#3d6b34" transform="rotate(-15 1144 380)"/>
        </svg>
      </div>

      <div style={{position:'relative',zIndex:1}}>

        {/* Nav */}
        <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'14px 40px',borderBottom:'0.5px solid #c8d8c0'}}>
          <div style={{display:'flex',gap:'28px'}}>
            {['HOME','SHOP','OUR STORY','CONTACT'].map(link => (
              <span key={link} className="nav-link" style={{fontSize:'11px',letterSpacing:'2.5px',#3d5c35,cursor:'pointer'}}>{link}</span>
            ))}
          </div>
          
          <div style={{fontSize:'11px',letterSpacing:'2px',#3d5c35}}>EST. 1984</div>
        </nav>

        {/* Hero */}
        <section style={{textAlign:'center',padding:'56px 32px 44px'}}>
          <p style={{fontSize:'11px',letterSpacing:'3px',#3d5c35,margin:'0 0 10px'}}>HANDMADE IN ITALY</p>
          <h1 style={{fontFamily:"'Great Vibes', cursive",fontSize:'72px',color:'#2c3e25',lineHeight:1.1,margin:'0 0 12px',fontWeight:400}}>A Little Different</h1>
          <div style={{width:'50px',height:'0.5px',background:'#c8d8c0',margin:'0 auto 14px'}}></div>
          <p style={{fontSize:'13px',letterSpacing:'2px',#3d5c35,fontStyle:'italic'}}>Italian fabrics · Exceptional craftsmanship</p>
        </section>

        {/* Shop */}
        <section style={{padding:'0 40px 56px'}}>
          <p style={{textAlign:'center',fontSize:'10px',letterSpacing:'3px',#3d5c35,marginBottom:'20px'}}>SHOP BY SIZE</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',maxWidth:'500px',margin:'0 auto'}}>
            {['Girls 2–8','Teens 10–20'].map(size => (
              <div key={size} className="size-box" style={{border:'0.5px solid #c8d8c0',padding:'32px 16px',textAlign:'center',background:'rgba(255,255,255,0.8)',cursor:'pointer'}}>
                <div style={{fontSize:'26px',fontWeight:300,color:'#2c3e25',letterSpacing:'2px',marginBottom:'6px'}}>{size}</div>
                <div style={{fontSize:'10px',letterSpacing:'2px',#3d5c35}}>SHOP NOW</div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section style={{margin:'0 40px 56px',padding:'40px 48px',background:'rgba(255,255,255,0.6)',border:'0.5px solid #c8d8c0',textAlign:'center'}}>
          <p style={{fontFamily:"'Great Vibes', cursive",fontSize:'36px',color:'#2c3e25',margin:'0 0 16px'}}>Our Story</p>
          <p style={{fontSize:'15px',color:'#556b4a',lineHeight:1.9,maxWidth:'540px',margin:'0 auto',fontStyle:'italic'}}>
            For over 40 years, A Little Different has been crafting exceptional children's clothing by hand in Italy, using only the finest Italian fabrics. Every piece tells a story of tradition, care, and timeless style.
          </p>
          <p style={{fontSize:'11px',#3d5c35,letterSpacing:'2px',marginTop:'16px'}}>FOUNDED 1984 · MADE IN ITALY · FAMILY OWNED</p>
        </section>

        {/* Footer */}
        <footer style={{borderTop:'0.5px solid #c8d8c0',padding:'22px 40px',textAlign:'center'}}>
          <p style={{fontSize:'14px',color:'#2c3e25',letterSpacing:'1px',marginBottom:'6px'}}>(516) 374-7392</p>
          <p style={{fontSize:'12px',color:'#2c3e25',letterSpacing:'1px',marginBottom:'6px'}}>
  <a href="https://www.instagram.com/alittlediff405" target="_blank" style={{color:'#2c3e25',textDecoration:'none',letterSpacing:'1px'}}>📷 @alittlediff405</a>
</p>
<p style={{fontSize:'10px',#3d5c35,letterSpacing:'1px'}}>© A Little Different · All rights reserved</p>
        </footer>

      </div>
    </div>
  )
}
