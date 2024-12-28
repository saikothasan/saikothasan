export function Hero() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-center z-10 px-4">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-400 rounded-full bg-blue-900/20 backdrop-blur-sm">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Creative Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Bringing ideas to life through code and design, specializing in interactive web experiences and creative development
        </p>
      </div>
    </div>
  );
}
