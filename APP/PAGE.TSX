"use client";
import { useState } from "react";

export default function Page() {
  const [cart, setCart] = useState<number>(0);

  const products = [
    { id:1, name:"Italian Dress", brand:"Kenzo", price:98, old:250 },
    { id:2, name:"Kids Shirt", brand:"Molo", price:20, old:40 },
    { id:3, name:"Top", brand:"Milano", price:70, old:200 },
    { id:4, name:"T-Shirt", brand:"Kenzo", price:42, old:120 },
  ];

  return (
    <div style={{fontFamily:"serif", padding:20}}>
      <h1 style={{textAlign:"center", fontSize:32}}>LUXE OUTLET</h1>

      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:20}}>
        {products.map(p => {
          const discount = Math.round((1 - p.price / p.old) * 100);

          return (
            <div key={p.id}>
              <div style={{height:200, background:"#eee", position:"relative"}}>
                <div style={{
                  position:"absolute",
                  top:10,
                  left:10,
                  background:"black",
                  color:"white",
                  padding:"4px 8px"
                }}>
                  -{discount}%
                </div>
              </div>

              <p>{p.brand}</p>
              <h3>{p.name}</h3>

              <p>
                ${p.price}
                <span style={{textDecoration:"line-through", marginLeft:10}}>
                  ${p.old}
                </span>
              </p>

              <button
                onClick={() => setCart(cart + 1)}
                style={{
                  marginTop:10,
                  width:"100%",
                  padding:8,
                  background:"black",
                  color:"white"
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      <h2 style={{marginTop:20}}>Cart: {cart}</h2>
    </div>
  );
}
