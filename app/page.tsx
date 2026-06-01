export default function Page() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#f9f8f5' }}>

      {/* Botanical background SVG */}
      <div style={{ position: 'fixed', top: 0, right: 0, width: '320px', height: '100vh', zIndex: 0, opacity: 0.18, pointerEvents: 'none' }}>
        <svg viewBox="0 0 320 900" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <g stroke="#2d5a27" strokeWidth="1.5" fill="none">
            <path d="M200 900 Q195 700 210 500 Q220 300 190 100" strokeWidth="2"/>
            <ellipse cx="220" cy="800" rx="28" ry="20" fill="#4a7c40" opacity="0.7" transform="rotate(-20 220 800)"/>
            <ellipse cx="195" cy="730" rx="32" ry="22" fill="#3d6b34" opacity="0.6" transform="rotate(15 195 730)"/>
            <ellipse cx="230" cy="660" rx="30" ry="21" fill="#4a7c40" opacity="0.7" transform="rotate(-25 230 660)"/>
            <ellipse cx="185" cy="590" rx="34" ry="23" fill="#3d6b34" opacity="0.65" transform="rotate(20 185 590)"/>
            <ellipse cx="225" cy="520" rx="28" ry="19" fill="#4a7c40" opacity="0.6" transform="rotate(-15 225 520)"/>
            <ellipse cx="190" cy="450" rx="32" ry="22" fill="#3d6b34" opacity="0.7" transform="rotate(25 190 450)"/>
            <ellipse cx="220" cy="380" rx="30" ry="20" fill="#4a7c40" opacity="0.6" transform="rotate(-20 220 380)"/>
            <ellipse cx="188" cy="310" rx="28" ry="19" fill="#3d6b34" opacity="0.65" transform="rotate(15 188 310)"/>
            <ellipse cx="215" cy="240" rx="26" ry="18" fill="#4a7c40" opacity="0.55" transform="rotate(-30 215 240)"/>
            <ellipse cx="192" cy="170" rx="24" ry="16" fill="#3d6b34" opacity="0.5" transform="rotate(20 192 170)"/>
            <path d="M160 900 Q140 750 155 600 Q165 450 145 300" strokeWidth="1.5" stroke="#4a7c40"/>
            <ellipse cx="138" cy="820" rx="20" ry="14" fill="#4a7c40" opacity="0.5" transform="rotate(30 138 820)"/>
            <ellipse cx="158" cy="700" rx="22" ry="15" fill="#3d6b34" opacity="0.45" transform="rotate(-20 158 700)"/>
            <ellipse cx="140" cy="580" rx="20" ry="14" fill="#4a7c40" opacity="0.5" transform="rotate(25 140 580)"/>
            <ellipse cx="155" cy="460" rx="18" ry="13" fill="#3d6b34" opacity="0.45" transform="rotate(-15 155 460)"/>
            <ellipse cx="142" cy="350" rx="20" ry="14" fill="#4a7c40" opacity="0.4" transform="rotate(20 142 350)"/>
          </g>
        </svg>
      </div>

      {/* Bottom left botanical accent */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '220px', height: '400px', zIndex: 0, opacity: 0.13, pointerEvents: 'none' }}>
        <svg viewBox="0 0 220 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <g stroke="#2d5a27" strokeWidth="1.5" fill="none">
            <path d="M80 400 Q75 300 90 200 Q100 120 80 20" strokeWidth="2"/>
            <ellipse cx="100" cy="350" rx="26" ry="18" fill="#4a7c40" opacity="0.7" transform="rotate(20 100 350)"/>
            <ellipse cx="72" cy="290" rx="28" ry="19" fill="#3d6b34" opacity="0.6" transform="rotate(-15 72 290)"/>
            <ellipse cx="105" cy="230" rx="24" ry="17" fill="#4a7c40" opacity="0.65" transform="rotate(25 105 230)"/>
            <ellipse cx="75" cy="170" rx="26" ry="18" fill="#3d6b34" opacity="0.55" transform="rotate(-20 75 170)"/>
            <ellipse cx="98" cy="110" rx="22" ry="15" fill="#4a7c40" opacity="0.5" transform="rotate(15 98 110)"/>
          </g>
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>

        {/* Header */}
        <header style={{ textAlign: 'center', borderBottom: '1px solid #c8d8c0', paddingBottom: '20px', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', letterSpacing: '4px', fontWeight: 300, color: '#2c3e25' }}>A LITTLE DIFFERENT</h1>
          <p style={{ fontSize: '0.9rem', letterSpacing: '2px', color: '#7a9470' }}>HANDMADE IN ITALY · FINAL SALE</p>
        </header>

        {/* Hero */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '10px', color: '#2c3e25' }}>40 Years of Italian Craftsmanship</h2>
          <p style={{ fontSize: '1rem', color: '#556b4a', maxWidth: '600px', margin: '0 auto 20px' }}>
            Handmade children's clothing crafted in Italy from the finest Italian fabrics.
            We're offering our remaining inventory at blowout prices — all sales final.
          </p>
          <p style={{ fontSize: '1.4rem', color: '#b85c3a', fontWeight: 600, letterSpacing: '1px' }}>UP TO 70% OFF · ALL SALES FINAL</p>
        </section>

        {/* Categories */}
        <section style={{ marginBottom: '60px' }}>
          <h3 style={{ textAlign: 'center', letterSpacing: '3px', fontWeight: 300, marginBottom: '30px', color: '#2c3e25' }}>SHOP BY AGE</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
            {['Newborn', 'Infant (6–12m)', 'Toddler (1–3)', 'Kids (4–8)', 'Tween (8–12)'].map((cat) => (
              <div key={cat} style={{ border: '1px solid #c8d8c0', padding: '30px 10px', cursor: 'pointer', background: 'rgba(255,255,255,0.7)' }}>
                <p style={{ fontWeight: 400, letterSpacing: '1px', color: '#2c3e25' }}>{cat}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', borderTop: '1px solid #c8d8c0', paddingTop: '20px', color: '#7a9470', fontSize: '0.8rem' }}>
          <p>© A Little Different · All sales final · No returns or exchanges</p>
        </footer>

      </div>
    </main>
  )
}
