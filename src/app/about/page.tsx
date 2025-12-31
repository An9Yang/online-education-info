export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen pt-20 pb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-bold text-slate-900 mb-6">About EduGlobal</h1>
                <p className="text-xl text-slate-500 leading-relaxed mb-8">
                    We are on a mission to democratize access to the world's best education.
                    By connecting students with top-tier international schools through real-time data and immersive virtual experiences,
                    we help families make informed decisions about their future.
                </p>

                <div className="space-y-6">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Our Mission</h3>
                        <p className="text-slate-600">To create the most transparent and accessible global school discovery platform.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Our Vision</h3>
                        <p className="text-slate-600">A world where quality education has no borders.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

