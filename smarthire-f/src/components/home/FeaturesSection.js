// Icon Components
const AIMatchingIcon = () => (
	<svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
		<path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zM5.757 4.343a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707z" />
	</svg>
);

const CVParsingIcon = () => (
	<svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
		<path d="M4 4a2 2 0 012-2h6a1 1 0 00-1-1v1a2 2 0 11-4 0V3a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2h-2.5a1 1 0 00-1 1v1zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
	</svg>
);

const SchedulingIcon = () => (
	<svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
		<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
	</svg>
);

const ShortlistingIcon = () => (
	<svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
		<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 12a6 6 0 11-12 0 6 6 0 0112 0zM16 9a1 1 0 100 2h4a1 1 0 100-2h-4z" />
	</svg>
);

const AnalyticsIcon = () => (
	<svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
		<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
	</svg>
);

const SearchIcon = () => (
	<svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
		<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
	</svg>
);

export default function FeaturesSection() {
	const features = [
		{
			id: 1,
			title: "AI Job Matching",
			description: "Our AI analyzes your profile and recommends jobs with 95% accuracy, saving you hours of searching.",
			icon: AIMatchingIcon
		},
		{
			id: 2,
			title: "CV Parsing",
			description: "Upload your CV once and let AI extract all information. Supports PDF, DOC, and DOCX formats.",
			icon: CVParsingIcon
		},
		{
			id: 3,
			title: "Interview Scheduling",
			description: "Seamlessly schedule and manage interviews with integrated calendar and notifications.",
			icon: SchedulingIcon
		},
		{
			id: 4,
			title: "Smart Shortlisting",
			description: "AI automatically shortlists the best candidates based on job requirements and experience.",
			icon: ShortlistingIcon
		},
		{
			id: 5,
			title: "Analytics Dashboard",
			description: "Track applications, hiring metrics, and optimize your recruitment strategy with insights.",
			icon: AnalyticsIcon
		},
		{
			id: 6,
			title: "Advanced Search",
			description: "Filter jobs by category, location, salary, and more to find your perfect match.",
			icon: SearchIcon
		}
	];

	return (
		<section id="features" className="py-20 bg-gradient-to-b from-white to-emerald-50">
			<div className="max-w-7xl mx-auto px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Powerful Features
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Everything you need to streamline your recruitment process
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature) => {
						const IconComponent = feature.icon;
						return (
							<div
								key={feature.id}
								className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
							>
								{/* Icon */}
								<div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
									<IconComponent />
								</div>

								{/* Title */}
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{feature.title}
								</h3>

								{/* Description */}
								<p className="text-gray-600 leading-relaxed">
									{feature.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

