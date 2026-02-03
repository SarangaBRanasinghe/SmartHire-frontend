'use client';

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-emerald-50">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						How It Works
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Get started in minutes with our simple process
					</p>
				</div>

				{/* Video Container */}
				<div className="flex justify-center">
					<div className="w-full max-w-2xl">
						<div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-black" style={{ aspectRatio: '16/9' }}>
							<video
								src="/images/how-it-works/Video_Demonstrates_Job_Application_Process.mp4"
								className="w-full h-full object-cover"
								controls
								poster="/images/how-it-works/poster.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}