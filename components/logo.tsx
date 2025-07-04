import Link from "next/link"

interface LogoProps {
  className?: string
  showTagline?: boolean
  variant?: "light" | "dark"
}

export function Logo({ className = "", showTagline = true, variant = "light" }: LogoProps) {
  const textColor = variant === "light" ? "text-slate-900" : "text-white"
  const taglineColor = variant === "light" ? "text-slate-500" : "text-slate-400"

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Modern gradient logo with glassmorphism effect */}
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

          {/* Main logo text */}
          <div className="relative text-white font-bold text-lg tracking-tight">T</div>

          {/* Verification badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50 transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
        </div>
      </div>
      <div>
        <span className={`text-xl font-bold ${textColor} tracking-tight`}>TrueWorkHQ</span>
        {showTagline && <div className={`text-xs ${taglineColor} -mt-1 font-medium`}>Workplace Transparency</div>}
      </div>
    </Link>
  )
}
