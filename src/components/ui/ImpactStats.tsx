import React from "react";
import { GlassCard } from "./GlassCard";

const stats = [
    { label: "Lives Impacted", value: "10,000+", icon: "👥" },
    { label: "Communities Served", value: "50+", icon: "🌍" },
    { label: "Children Educated", value: "2,500+", icon: "🎓" },
    { label: "Women Empowered", value: "1,200+", icon: "👩‍💼" },
];

export function ImpactStats() {
    return (
        <section className="py-12 -mt-16 relative z-20 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <GlassCard key={index} className="p-6 text-center border-t-4 border-t-brand-primary" hoverEffect>
                        <div className="text-4xl mb-4">{stat.icon}</div>
                        <h3 className="text-3xl font-display font-bold text-orange-600 mb-2">
                            {stat.value}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-300 font-medium">
                            {stat.label}
                        </p>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
