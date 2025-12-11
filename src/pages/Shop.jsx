  const Shop = () => {
    const coffee = [
    { id: 1, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60", title: "Lungo coffee", price: 200 },
    { id: 2, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60", title: "Lungo coffee", price: 200 },
    { id: 3, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60", title: "Lungo coffee", price: 200 },
    { id: 4, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60", title: "Lungo coffee", price: 200 },
  ]
  
  const dessert = [
    { id: 5, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60", title: "Dessert", price: 200 },
    { id: 6, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=60", title: "Dessert", price: 200 },
    { id: 7, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60", title: "Dessert", price: 200 },
    { id: 8, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=60", title: "Dessert", price: 200 },
  ]
  
  const slide = (id, d) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollLeft += d === "l" ? -270 : 270
  }
  
  const card = {
    width: "250px",
    background: "#fff",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 3px 12px rgba(0,0,0,.12)"
  }
  
  return (
    <div style={{ background: "#f4f1ed", minHeight: "100vh", paddingBottom: "50px",marginLeft: 150 }}>
      
      <h2 style={{ textAlign: "center", marginTop: 40, letterSpacing: "1px" }}>OUR SPECIAL COFFEE</h2>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20, position: "relative" }}>

        <button
          onClick={() => slide("coffeeWrap", "l")}
          style={{
            width: 42, height: 42, borderRadius: "50%",
            border: "none", background: "#e9dfcf", position: "absolute",
            left: "5%", top: "50%", transform: "translateY(-50%)",
            cursor: "pointer"
          }}
          >←</button>

        <div
          id="coffeeWrap"
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            padding: 15,
            width: "80%",
            scrollBehavior: "smooth"
          }}
          >
          {coffee.map(i => (
            <div key={i.id} style={card}>
              <img src={i.img} style={{ width: "100%", borderRadius: 10, height: 170, objectFit: "cover" }} />
              <h4 style={{ marginTop: 10 }}>{i.title}</h4>
              <p style={{ margin: 0, fontSize: 14, color: "#444" }}>Lorem ipsum dolor sit amet.</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <span>Rs. {i.price}</span>
                <button style={{ background: "#3b0000", color: "#fff", border: "none", padding: "4px 12px", borderRadius: 5 }}>Order Now</button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => slide("coffeeWrap", "r")}
          style={{
            width: 42, height: 42, borderRadius: "50%",
            border: "none", background: "#e9dfcf",
            position: "absolute", right: "5%", top: "50%",
            transform: "translateY(-50%)", cursor: "pointer"
          }}
          >→</button>

      </div>

      <h2 style={{ textAlign: "center", marginTop: 60 }}>OUR SPECIAL DESSERT</h2>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20, position: "relative" }}>

        <button
          onClick={() => slide("dessertWrap", "l")}
          style={{
            width: 42, height: 42, borderRadius: "50%",
            border: "none", background: "#e9dfcf", position: "absolute",
            left: "5%", top: "50%", transform: "translateY(-50%)",
            cursor: "pointer"
          }}
          >←</button>

        <div
          id="dessertWrap"
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            padding: 15,
            width: "80%",
            scrollBehavior: "smooth"
          }}
          >
          {dessert.map(d => (
            <div key={d.id} style={card}>
              <img src={d.img} style={{ width: "100%", borderRadius: 10, height: 170, objectFit: "cover" }} />
              <h4 style={{ marginTop: 10 }}>{d.title}</h4>
              <p style={{ margin: 0, fontSize: 14, color: "#444" }}>Lorem ipsum dolor sit amet.</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <span>Rs. {d.price}</span>
                <button style={{ background: "#3b0000", color: "#fff", border: "none", padding: "4px 12px", borderRadius: 5 }}>Order Now</button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => slide("dessertWrap", "r")}
          style={{
            width: 42, height: 42, borderRadius: "50%",
            border: "none", background: "#e9dfcf",
            position: "absolute", right: "5%", top: "50%",
            transform: "translateY(-50%)", cursor: "pointer"
          }}
          >→</button>

      </div>

    </div>
  )
}



export default Shop;