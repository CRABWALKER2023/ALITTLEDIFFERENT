export default function Page() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      
      {/* Header */}
      <header style={{ textAlign: 'center', borderBottom: '1px solid #ccc', paddingBottom: '20px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '4px', fontWeight: 300 }}>A LITTLE DIFFERENT</h1>
        <p style={{ fontSize: '0.9rem', letterSpacing: '2px', color: '#888' }}>HANDMADE IN ITALY · FINAL SALE</p>
      </header>

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: '10px' }}>40 Years of Italian Craftsmanship</h2>
        <p style={{ fontSize: '1rem', color: '#555', maxWidth: '600px', margin: '0 auto 20px' }}>
          Handmade children's clothing crafted in Italy from the finest Italian fabrics. 
          We're offering our remaining inventory at blowout prices — all sales final.
        </p>
        <p style={{ fontSize: '1.4rem', color: '#b85c3a', fontWeight: 600, letterSpacing: '1px' }}>UP TO 70% OFF · ALL SALES FINAL</p>
      </section>

      {/* Categories */}
      <section style={{ marginBottom: '60px' }}>
        <h3 style={{ textAlign: 'center', letterSpacing: '3px', fontWeight: 300, marginBottom: '30px' }}>SHOP BY AGE</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
          {['Newborn', 'Infant (6–12m)', 'Toddler (1–3)', 'Kids (4–8)', 'Tween (8–12)'].map((cat) => (
            <div key={cat} style={{ border: '1px solid #ddd', padding: '30px 10px', cursor: 'pointer' }}>
              <p style={{ fontWeight: 400, letterSpacing: '1px' }}>{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', borderTop: '1px solid #ccc', paddingTop: '20px', color: '#aaa', fontSize: '0.8rem' }}>
        <p>© A Little Different · All sales final · No returns or exchanges</p>
      </footer>

    </main>
  )
}
