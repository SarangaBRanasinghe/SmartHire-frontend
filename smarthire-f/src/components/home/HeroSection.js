import Image from 'next/image';

export default function HeroSection() {
	return (
		<>
			{/* Main Hero Section */}
			<section id="hero" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<div>
							<h1 className="text-5xl md:text-6xl font-extrabold text-emerald-600 leading-tight">
								SmartHire
							</h1>
							<p className="text-emerald-600 font-semibold text-lg mt-2">
								AI-Powered Job Finding
							</p>
							<p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl">
								Revolutionizing recruitment with intelligent matching, automated CV parsing, and smart candidate screening
							</p>
							
							{/* CTA Buttons */}
							<div className="flex flex-wrap gap-4 mt-8">
								<button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
									Find Jobs
								</button>
								<button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-lg transition duration-300">
									Hire Talent
								</button>
							</div>
						</div>

						{/* Right Image with Stats Badge */}
						<div className="relative">
							<div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
								<Image
									src="/images/hero/team-meeting.png"
									alt="Team Meeting"
									fill
									className="object-cover"
									priority
								/>
							</div>
							
							{/* Stats Badge */}
							<div className="absolute bottom-6 right-6 bg-emerald-100 rounded-2xl p-4 shadow-lg">
								<div className="flex items-center gap-3">
									<div className="text-emerald-600">
										<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
											<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
										</svg>
									</div>
									<div>
										<p className="text-3xl font-bold text-emerald-600">95%</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Cards Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition duration-300">
							<div className="w-12 h-12 bg-emerald-200 rounded-lg flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V15a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">Instant AI Matching</h3>
							<p className="text-gray-600 leading-relaxed">
								Get personalized job recommendations powered by AI algorithms that understand your skills and career goals
							</p>
						</div>

						{/* Feature 2 */}
						<div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition duration-300">
							<div className="w-12 h-12 bg-emerald-200 rounded-lg flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
									<path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">Smart CV Parsing</h3>
							<p className="text-gray-600 leading-relaxed">
								Upload your CV once and let AI automatically extract and populate your profile information instantly
							</p>
						</div>

						{/* Feature 3 */}
						<div className="bg-emerald-50 rounded-2xl p-8 hover:shadow-lg transition duration-300">
							<div className="w-12 h-12 bg-emerald-200 rounded-lg flex items-center justify-center mb-6">
								<svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M5.5 2a1 1 0 011 1v1h1a1 1 0 011 1v1h1V5a1 1 0 011-1h1V3a1 1 0 011-1h4a2 2 0 012 2v2h1a1 1 0 011 1v1h1a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a1 1 0 011-1h1V5a1 1 0 011-1h1V3a1 1 0 011-1h4V2a1 1 0 011-1zm0 5a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zm5 1a1 1 0 11-2 0 1 1 0 012 0zm-11 4a1 1 0 110 2 1 1 0 010-2zm2 1a1 1 0 11-2 0 1 1 0 012 0zm2 0a1 1 0 110 2 1 1 0 010-2zm2-1a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z" clipRule="evenodd" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 mb-3">Precision Hiring</h3>
							<p className="text-gray-600 leading-relaxed">
								AI-driven candidate screening helps recruiters find the perfect match faster and more accurately
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

