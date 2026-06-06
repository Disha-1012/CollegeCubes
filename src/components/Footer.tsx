export default function Footer() {
    
    return (
        <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        CollegeCubes
                    </h2>
                    <p className="mt-4 text-gray-400 leading-7">
                        Your trusted platform to
                        discover, compare and select
                        the perfect college.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">
                        Explore
                    </h3>
                    <ul className="space-y-3 text-gray-400">
                        <li>
                            Colleges
                        </li>
                        <li>
                            Compare
                        </li>
                        <li>
                            Predictor
                        </li>
                        <li>
                            Saved Colleges
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">
                        Features
                    </h3>
                    <ul className="space-y-3 text-gray-400">
                        <li>
                            College Search
                        </li>
                        <li>
                            Placement Insights
                        </li>
                        <li>
                            Reviews
                        </li>
                        <li>
                            Ranking Analysis
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-4">
                        Contact
                    </h3>
                    <p className="text-gray-400">
                        support@collegecubes.com
                    </p>
                    <p className="mt-2 text-gray-400">
                        India
                    </p>
                    <div className="mt-5 flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition">
                            in
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition">
                            ◎
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 text-center py-5 text-gray-500">
                © 2026 CollegeCubes.
                All rights reserved.
            </div>
        </footer>
    )
}