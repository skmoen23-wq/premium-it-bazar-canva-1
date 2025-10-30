import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "কেন আমাদের কাছ থেকে Canva Pro নিবেন?",
    description: "আমরা সরাসরি অফিসিয়াল Canva Pro দিয়ে থাকি, যা কিনা ১০০% জেনুইন ও নিরাপদ হবে। আমাদের সার্ভিস সবসময় ফাস্ট, ট্রাস্টেড এবং কাস্টমার সাপোর্ট সবসময় একটিভ থাকে।"
  },
  {
    title: "আমাদের Premium Canva Pro নিলে কী কী সুবিধা পাবেন?",
    description: "৬ কোটির বেশি প্রিমিয়াম ফটো, ভিডিও ও এলিমেন্ট আনলিমিটেড ইউজ করতে পারবেন। প্রিমিয়াম ফন্ট, টেমপ্লেট, ব্র্যান্ড কিট, AI টুলস, টিম ওয়ার্ক—all features unlocked!"
  },
  {
    title: "গ্যারান্টি কি পাবেন Canva Pro এর?",
    description: "১০০% satisfaction guarantee with full support & replacement policy."
  },
  {
    title: "সাবস্ক্রিপশন নষ্ট হয়ে গেলে কি রিপ্লেসমেন্ট দিবেন?",
    description: "জি হ্যাঁ, ২৪–৪৮ ঘণ্টার মধ্যে replacement দেওয়া হবে।"
  },
  {
    title: "কোন কোন ডিভাইসে ইউজ করা যাবে?",
    description: "Canva Pro usable on Desktop, Laptop, Mac, Mobile (Android & iOS)."
  },
  {
    title: "কিভাবে ক্যানভা প্রো দিবেন আমাকে?",
    description: "প্রথমে আপনার ইমেল দিন, আমরা access পাঠাবো। আপনি verify করার পর payment করবেন।"
  }
];

export const FeatureList = () => {
  return (
    <section className="mt-16 max-w-4xl mx-auto">
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-success" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              {index < features.length - 1 && (
                <div className="mt-6 border-b border-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
