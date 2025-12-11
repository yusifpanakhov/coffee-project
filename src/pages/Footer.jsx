export default function Footer() {
  return (
    <footer className="w-full bg-[#2d2218] text-white pt-20">


      <div className="bg-[#e5dbc9] text-center py-10 px-4">
        <h2 className="text-2xl font-semibold">Join in and get 15% off!</h2>
        <p className="text-sm mt-1">
          Subscribe to our newsletter to get 15% off discount code.
        </p>

        <div className="mt-5 flex justify-center">
          <div className="flex bg-white rounded-full overflow-hidden w-full max-w-md shadow">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-[#5c4a36] text-white px-5 font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">

        <div>
          <h3 className="text-lg font-semibold mb-4">COFFEE</h3>
        </div>

        <div>
          <h3 className="font-semibold mb-4">PRIVACY</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Shop</li>
            <li>Order ahead</li>
            <li>Menu</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li>Find a location</li>
            <li>About us</li>
            <li>Our story</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">INFORMATION</h3>
          <ul className="space-y-2 text-sm">
            <li>Plans & pricing</li>
            <li>Sell your products</li>
            <li>Jobs</li>
          </ul>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 pb-10 flex gap-5 text-xl">
        <a href="#" className="hover:text-gray-300">✕</a>
        <a href="#" className="hover:text-gray-300">📷</a>
        <a href="#" className="hover:text-gray-300">f</a>
        <a href="#" className="hover:text-gray-300">in</a>
      </div>

    </footer>
  );
}
