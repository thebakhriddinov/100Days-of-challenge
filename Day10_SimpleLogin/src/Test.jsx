function Test() {
    return (
<div class="min-h-screen bg-[#0d1b2a] flex items-center justify-center">
  <div class="bg-[#1b263b] p-10 rounded-2xl 
              shadow-[0_0_40px_10px_rgba(255,255,255,0.08)]
              w-[350px]">

    <h2 class="text-white text-3xl font-semibold text-center mb-8">Sign In</h2>

    <!-- Username field -->
    <div class="bg-[#2c3e50] mb-6 flex items-center gap-3 px-4 py-3 rounded-xl
                shadow-[inset_3px_3px_8px_rgba(0,0,0,0.6),inset_-3px_-3px_8px_rgba(255,255,255,0.05)]">
      <span class="text-teal-300 text-xl">👤</span>
      <input type="text" placeholder="username" 
             class="bg-transparent text-white outline-none w-full">
    </div>

    <!-- Password field -->
    <div class="bg-[#2c3e50] mb-6 flex items-center gap-3 px-4 py-3 rounded-xl
                shadow-[inset_3px_3px_8px_rgba(0,0,0,0.6),inset_-3px_-3px_8px_rgba(255,255,255,0.05)]">
      <span class="text-teal-300 text-xl">🔒</span>
      <input type="password" placeholder="password" 
             class="bg-transparent text-white outline-none w-full">
    </div>

    <!-- Button -->
    <button class="w-full py-3 rounded-full text-white text-lg
                   bg-gradient-to-r from-teal-400 to-cyan-500
                   shadow-[0_0_15px_3px_rgba(0,255,255,0.4)]
                   hover:scale-[1.02] transition">
      Login
    </button>

    <p class="text-gray-300 text-center mt-6">
      Not Registered? 
      <a class="text-white underline cursor-pointer">Create an account</a>
    </p>

  </div>
</div>
    )
}

export default Test;