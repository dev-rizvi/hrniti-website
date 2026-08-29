export default function TrustedClients() {
    const clients = ["TechCorp", "InnovateLabs", "FutureSystems", "GlobalSolutions", "SmartHR", "CloudSystems"];

    return (
        <section className="bg-white py-12 border-b border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-medium text-text-light mb-8 uppercase tracking-wider">
                    Trusted by 5,000+ businesses across India
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
                    {clients.map((client, i) => (
                        <div key={i} className="flex items-center justify-center font-bold text-xl text-gray-400 hover:text-primary hover:opacity-100 transition-all cursor-pointer">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
