function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-morning via-sky-noon to-sky-afternoon flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center text-white animate-fade-in">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">Today Sky</h1>
        <p className="text-xl mb-8 opacity-90">View the sky from anywhere in the world</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
          <p className="text-lg mb-4">Experience real-time sky conditions from any location</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-lg">🌍 Location Search</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">🌤️ Live Weather</div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">🖼️ Wallpaper Mode</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
