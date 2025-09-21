import Link from "next/link"
import { buttonClasses } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$19",
    cadence: "/mo",
    features: ["Basic insights", "Email reports", "3 team members"],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$79",
    cadence: "/mo",
    features: ["Advanced funnels", "AI insights", "Priority support", "10 team members"],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    features: ["Unlimited everything", "Dedicated CSM", "SAML SSO", "Onboarding"],
    cta: "Contact sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="w-full border-t">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                "rounded-2xl border bg-card text-card-foreground p-6 shadow-sm transition-all " +
                (plan.highlighted
                  ? "ring-1 ring-primary/30 shadow-md md:scale-[1.02]"
                  : "hover:shadow-md")
              }
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-primary/10 text-primary px-2 py-1 text-xs">Most popular</span>
                )}
              </div>
              <div className="mb-6">
                <span className="text-3xl font-semibold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.cadence}</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="#" className={buttonClasses({ variant: plan.highlighted ? "primary" : "secondary", size: "lg", className: "w-full" })}>
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
