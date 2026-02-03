export default function CoreValues() {
	const values = [
		{
			id: 1,
			title: "Innovation",
			description: "Pushing boundaries with AI and technology to create better recruitment solutions"
		},
		{
			id: 2,
			title: "User-Centric",
			description: "Designing every feature with our users' needs and experience at the forefront"
		},
		{
			id: 3,
			title: "Integrity",
			description: "Maintaining transparency, fairness, and ethical practices in everything we do"
		}
	];

	// Icon Components
	const InnovationIcon = () => (
		<svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
			<circle cx="12" cy="12" r="9" />
			<circle cx="12" cy="12" r="5" />
			<circle cx="12" cy="12" r="1" />
		</svg>
	);

	const UserCentricIcon = () => (
		<svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
			<rect x="5" y="2" width="14" height="16" rx="2" ry="2" />
			<path d="M9 9h6M9 13h6" />
		</svg>
	);

	const IntegrityIcon = () => (
		<svg className="w-16 h-16 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);

	const icons = [InnovationIcon, UserCentricIcon, IntegrityIcon];

	return (
		<section id="core-values" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Our Core Values
					</h2>
				</div>

				{/* Values Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{values.map((value, index) => {
						const IconComponent = icons[index];
						return (
							<div key={value.id} className="text-center">
								{/* Icon */}
								<div className="flex justify-center mb-6">
									<IconComponent />
								</div>

								{/* Title */}
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{value.title}
								</h3>

								{/* Description */}
								<p className="text-gray-600 leading-relaxed">
									{value.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}