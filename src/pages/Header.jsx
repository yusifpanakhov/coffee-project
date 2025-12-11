    import React from "react";

    export default function Header() {
    return (
        <div className="min-h-screen flex flex-col bg-[#111] text-white">
        {/* Header */}
        <header className="w-full">
            <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="text-xl font-semibold tracking-wide">coffea</div>

            <nav className="hidden md:flex items-center gap-8 text-sm uppercase">
                <a href="#" className="hover:text-[#c46b2d] transition">Home</a>
                <a href="#" className="hover:text-[#c46b2d] transition">Coffee</a>
                <a href="#" className="hover:text-[#c46b2d] transition">Bakery</a>
                <a href="#" className="hover:text-[#c46b2d] transition">Shop</a>
                <a href="#" className="hover:text-[#c46b2d] transition">About</a>
                <a href="#" className="hover:text-[#c46b2d] transition">Login</a>

                <button className="ml-4 w-9 h-9 flex items-center justify-center rounded-full border border-white/40 hover:border-[#c46b2d] hover:bg-white/5 transition">
                <img src="/img/Searchicon.png" className="w-4 h-4" alt="Search" />
                </button>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center">
                <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                </div>
            </button>
            </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex flex-col">
            {/* Hero Section */}
            <section
            className="flex-1 flex flex-col lg:flex-row max-w-6xl mx-auto px-6 pb-12 lg:pb-0 relative"
            style={{
                backgroundImage: "url('/img/Coffebackground.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-0 relative z-10">
                <p className="tracking-[0.3em] text-xs text-white/60 mb-4 uppercase">Welcome</p>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-white">
                We serve the<br />richest coffee in<br />the city!
                </h1>

                <p className="text-sm text-white/70 max-w-md mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>

                <button className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium shadow-lg hover:bg-[#c46b2d] hover:text-white transition">
                Order Now
                </button>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0 z-10">
                <img src="/img/Coffecup.png" className="w-64 sm:w-72 lg:w-80 drop-shadow-2xl" />
            </div>
            </section>

            {/* Features Section */}
            <section className="w-full bg-[#e9ddc9]">
            <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-xs">
                {[
                { img: "/img/Vector.png", label: "Hot Coffee" },
                { img: "/img/Coldcoffe.png", label: "Cold Coffee" },
                { img: "/img/Cupcoffe.png", label: "Cup Coffee" },
                { img: "/img/Dessert.png", label: "Dessert" },
                ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 text-black">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
                    <img src={item.img} className="w-6" alt={item.label} />
                    </div>
                    <span className="text-[11px] tracking-wide">{item.label}</span>
                </div>
                ))}
            </div>
            </section>
        </main>
        </div>
    );
    }
