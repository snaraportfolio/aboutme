export interface Project {
  title: string;
  years: string;
  shortName: string;
  oneSentenceImpact: string;
  role: string;
  context: string;
  problem: string;
  decision: string;
  outcome: string;
  impact: string;
  tags: string[];
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Essay {
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Sunitha has a rare ability to bridge the gap between high-level executive vision and deep architectural constraints. She doesn't just manage products; she unblocks entire engineering organizations.",
    author: "Engineering Director",
    role: "Digital Platform Lead @ Nike"
  },
  {
    quote: "Sunitha has a rare ability to blend her engineering pedigree to deliver great product experiences. She keeps the customer at the heart of everything she does, building lasting business partnerships while navigating real-world technical constraints without losing momentum. A product leader with a serious engineering background who stays curious—she has the unique vision required to lead radical transformations.",
    author: "Engineering Director",
    role: "Director Product Creation"
  },
  {
    quote: "A minimalistic website that gets right to the point. The allocation of text compared to whitespace makes it incredibly easy to navigate. The product stories and the bookshelf tab are great highlights that show deep commitment to craft.",
    author: "Product Design Peer",
    role: "Portfolio Reviewer"
  }
];

export const ESSAYS: Essay[] = [
  {
    title: "The Agentic Adoption Blueprint",
    excerpt: "Moving beyond LLM chat toward autonomous trust boundaries. How to architect for agents in high-compliance environments.",
    date: "May 2026",
    content: `
# The Agentic Adoption Blueprint

Moving beyond basic LLM interactions requires establishing robust trust and architectural boundaries. For high-compliance environments, an agentic strategy is not about replacing human decision-making; it's about augmenting human capacity through secure, repeatable autonomous patterns.

## 1. Establishing Trust Boundaries
The foundation of agentic adoption in enterprise is strict policy-based control. Before an agent can act, it must operate within a clearly defined scope (the "Trust Boundary"). This prevents unauthorized actions and ensures accountability in automated workflows.

## 2. Infrastructure for Observability
You cannot trust what you cannot measure. Deploying agents at scale requires sophisticated observability. This includes logging every decision step, monitoring for unexpected behavior, and implementing automated kill-switches for when an agent deviates from its defined parameters.

## 3. Metrics for Capacity Creation
Don't measure adoption; measure outcomes. The success of an enterprise agent is defined by the capacity it creates—the time it saves, the error rate it reduces, or the new business scenarios it enables. Map agentic capability directly to measurable business throughput to ensure sustained investment.
    `
  },
  {
    title: "Innovation to Scale: An Orchestration Playbook",
    excerpt: "A tactical framework for bridging the gap between ambitious R&D concepts and stable, global enterprise deployments.",
    date: "2025",
    content: `
# Innovation to Scale: An Orchestration Playbook
A Point of View on Product Leadership and Organizational Diplomacy

In a global enterprise, the gap between a "Lab" and a "Retail Store" is measured in more than miles—it’s measured in competing incentives. Moving a high-science R&D project into the real world isn't a technical hurdle; it’s an orchestration challenge.

My POV: A Principal Product Manager’s true value isn’t being the smartest subject matter expert in the room; it’s being the "connective tissue" that aligns disparate experts toward a single, scalable outcome. My superpower isn't knowing the science of biomechanics—it’s knowing the systems of retail and the diplomacy required to lead through partnership.

## 1. Innovation: The Multi-Expert Discovery
Innovation dies in a vacuum. To build a service that actually worked for runners, I had to align a symphony of conflicting perspectives: Biomechanical PhDs, ML Engineers, Physical Therapists, and Software Engineers.
The Power of Partnership: My background isn't in biomechanics; it’s in tech and retail systems. I didn’t try to be the scientist. Instead, I focused on being the translator, ensuring that elite lab research was distilled into a product that could actually run on a retail network.

The "Stitched" Solution: We moved fast by using "stitched" prototypes—manual interventions that bridged technical gaps where the automation wasn't ready. We partnered with local Running Groups to validate the core value proposition before committing to heavy enterprise engineering.

Defining Success: At this stage, our metric was Desirability. We weren't looking at ROI yet; we were measuring if the "actionable drills" provided by the experts actually resonated with a runner training for their first 5K.

## 2. Pilot: Navigating Organizational Separation
The Lab doesn't own the retail floor. This is where most R&D projects fail—they don't account for the "permission to play" required to occupy premium retail space.
Executive Navigation: Because of the organizational separation between R&D and Retail, I worked through my General Manager (GM) to secure top-down buy-in. While I managed the ground-level coordination, I equipped my GM with the strategic narrative needed to align with Retail Leadership—framing the service as a driver for footwear conversion rather than a disruption to store flow.

The Service Partnership: I relied heavily on Service Experts and Service Managers to define how the product lived on the floor. They understood the human element—how a store associate explains a complex metric to a customer—which was just as critical as the algorithm itself.

Managing Conflicting Metrics: I balanced three distinct objectives:
- The Lab: Measured Scientific Accuracy and data integrity.
- Retail: Measured Throughput and Floor Impact.
- The Product (My Focus): I measured Conversion—did this data lead to a more confident purchase?

## 3. Scale: Enterprise Accountability & Physical Reality
Scaling to flagship stores in Shanghai, Harajuku, and London meant the system had to be bulletproof, compliant, and operationally invisible.
Hardware and Infrastructure: This is where the "real world" hits the tech. I partnered with Principle Hardware Engineers and Networking Engineers to solve for physical constraints: managing store crowds, finding space for equipment, and navigating the basic physics of where to run wires and find power plugs in high-traffic retail environments.

Hybrid Architecture: We deployed on-location installations for local data processing to solve for latency and privacy, while integrating with global cloud systems for model refinement.

The Compliance Layer: I relied on Legal, Privacy, and Security Experts to navigate geo-specific frameworks (GDPR/PIPL). By respecting the organizational separation, I ensured that while the scientists focused on the model, the infrastructure teams ensured it was a compliant and stable service.

## Lessons Learned: The Principal’s Retrospective
- Velocity Requires "Stitching": Manual interventions aren't technical debt; they are a strategic choice to validate desirability months before the automation is ready.
- Objectives Must Be Multilingual: Success looks different to a PhD than it does to a Retail Manager. Your job is to translate those goals into a single hierarchy of metrics.
- Diplomacy is Critical: You don't need to own the expertise to own the outcome. Leadership is about empowering specialized partners—the Service Managers, Hardware Engineers, and Scientists—to win within your shared framework.
- Architecture is Physical: Global scaling is dictated by the physical reality of the store (plugs, wires, and floor space) as much as it is by code.

## Conclusion: The Principal PM as the Orchestrator
Ultimately, my role was to manage the "Messy Middle." I didn't do the work of the scientists or the engineers—I built the infrastructure that allowed their work to live in the hands of thousands of consumers. By respecting organizational boundaries and leveraging the strengths of my business partners, we turned a lab-grade experiment into a global standard for how runners move, train, and shop.
    `
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Strategic AI & Agentic Core",
    years: "AI Adoption",
    shortName: "AGENTIC",
    oneSentenceImpact: "Developing an enterprise-grade framework for business case selection and agentic capacity creation.",
    role: "Principal PM, AI Strategy",
    context: "Organizations struggle to move from LLM chat curiosity to measurable agentic workflows with ROI.",
    problem: "Lack of a structured method for identifying high-margin agentic use cases and measuring the resulting capacity creation.",
    decision: "Independently researching a 'Decision-to-Metric' framework that maps agent capability to organizational capacity.",
    outcome: "Drafting the 'Strategy in Motion' blueprint to enable secure adoption and measurable business metrics for agentic pilots.",
    impact: "Researching autonomous agent frameworks with a focus on data dependency and cost-to-value trade-offs. Mapping how agentic implementations create capacity for new organizational capabilities.",
    tags: ["Agentic AI", "Business Metrics", "Strategic Framework", "Capacity Creation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Innovation & Biomechanical Platform",
    years: "Innovation & Scale",
    shortName: "INNOVATION",
    oneSentenceImpact: "Orchestrated the experimentation, pilot, and global scale-up of biomechanical insights and ML-driven consumer platforms, governing enterprise PII while driving 180% engagement.",
    role: "Principal Product Manager",
    context: "High-latency, bespoke biomechanical research needed democratization at global scale for everyday runners, requiring new governance and ML integration. For example, to pilot biomechanical insights, I launched a series of small-scale sensor-based experiments that validated the core user needs before scaling the platform globally.",
    problem: "Bridging the gap between specialized elite athletic research and everyday consumer experiences, while managing complex biometric PII and cross-geo compliance.",
    decision: "Pioneered a 'Pilot-to-Global' model, building automated digital asset pipelines and governance-first ML frameworks that democratized elite insights.",
    outcome: "Successfully launched biomechanical and predictive sizing platforms across US, UK, China, and Japan, reducing return rates by 20% and lifting LTV by 18%.",
    impact: "Established a 'Total Product Health' framework for complex technical builds, mandating instrumentation and SLAs that maintained 95%+ user satisfaction during global scale events.",
    tags: ["POC-to-Scale", "Cross-Geo Governance", "ML Experience", "PII/Privacy"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Enterprise Platforms & Digital Core",
    years: "Digital Core Transformation",
    shortName: "SCALE",
    oneSentenceImpact: "Modernized legacy supply chains into a unified, cloud-native digital core with 12x faster release velocity.",
    role: "Principal Product Manager",
    context: "A multi-billion dollar supply chain was running on fragmented, 20-year-old legacy systems.",
    problem: "Deployment cycles took months, and data silos were causing multi-million dollar inventory errors.",
    decision: "Proposed and unblocked a wholesale migration to a cloud-native 'Single Source of Truth' digital core.",
    outcome: "Increased release frequency 12x and maintained 99.9% uptime during peak holiday traffic.",
    impact: "Modernizing fragmented legacy systems into a unified cloud-native platform, streamlining manufacturing and product creation across the global digital thread.",
    tags: ["Enterprise SaaS", "Digital Thread", "Modernization", "Operational Excellence"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Multi-Region Ecommerce Orchestration",
    years: "Global Expansion",
    shortName: "GLOBAL",
    oneSentenceImpact: "Shipped a multi-billion dollar D2C platform across 5 global regions with 99.99% availability.",
    role: "Principal Product Manager",
    context: "Global expansion was stalled by a monolithic architecture that couldn't handle localized regional requirements.",
    problem: "Entry into China and Japan required a localized tech stack that the current monolith couldn't support.",
    decision: "Decided to decouple the checkout and identity services to allow for regional-specific integrations.",
    outcome: "Successfully scaled to 500%+ traffic growth and supported $1B+ in new regional ARR.",
    impact: "Engineering the strategic roadmap for ecommerce expansion across China, Japan, and the EU. Scaling architecture to support 500%+ traffic growth while maintaining 99.99% availability for a multi-billion dollar platform.",
    tags: ["Global Scale", "Localization", "Multi-Billion ARR", "Strategic Execution"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
  },
];
