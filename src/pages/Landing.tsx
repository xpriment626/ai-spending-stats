import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="px-6 py-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-lg font-medium text-gray-900">
            Site name
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
            <Link to="/stats" className="text-gray-700 hover:text-gray-900">Stats</Link>
            <Link to="/contact" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Arasaka Labs
          </h1>
          <div className="max-w-2xl text-lg text-gray-700 leading-relaxed mb-8">
            <p className="mb-4">
              Body text for your whole article or post. We'll put in some lorem ipsum to
              show how a filled-out page might look:
            </p>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully curated
              Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui
              international first-class nulla ut. Punctual adipisicing, essential lovely
              queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian
              impeccable aute quality of life soft power pariatur Melbourne occaecat
              discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable
              officia Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.
            </p>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
            Contact
          </button>
        </section>

        {/* Partners Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="bg-gray-100 rounded-lg p-6 w-full h-20 flex items-center justify-center">
              <span className="text-gray-600 font-medium">Atlas Technologies</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-full h-20 flex items-center justify-center">
              <span className="text-gray-600 font-medium">Meridian Systems</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-full h-20 flex items-center justify-center">
              <span className="text-gray-600 font-medium">Vertex Innovations</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-full h-20 flex items-center justify-center">
              <span className="text-gray-600 font-medium">TechCorp Industries</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-full h-20 flex items-center justify-center">
              <span className="text-gray-600 font-medium">NexGen Solutions</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 w-full h-20 flex items-center justify-center">
              <span className="text-gray-600 font-medium">Quantum Dynamics</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;