import { Eyebrow } from "@/components/ui/Eyebrow";

export const ServicesSection = () => {
  const services = [
    {
      tag: "Design",
      title: "Landscape design",
      description:
        "Concept, 3D visuals and planting plans chosen for Dubai's heat, soil and water budget.",
      items: ["Site survey", "Concept & 3D", "Planting schedule", "Authority drawings"],
    },
    {
      tag: "Build",
      title: "Landscape construction",
      description:
        "Soil preparation, red sand filling, softscape and turf installation for villas, communities and public realm.",
      items: ["Earthworks", "Softscape", "Natural & artificial turf"],
    },
    {
      tag: "Build",
      title: "Hardscape installation",
      description:
        "Paving, pergolas, seating, boundary walls and outdoor kitchens in heat-reflective, durable materials.",
      items: ["Interlock & stone", "Pergolas", "Outdoor kitchens"],
    },
    {
      tag: "Water",
      title: "Swimming pools & water features",
      description:
        "Custom pool design and construction, fountains and water walls, with plant rooms and ongoing pool care.",
      items: ["Pool construction", "Water features", "Pool maintenance"],
    },
    {
      tag: "Water",
      title: "Irrigation systems",
      description:
        "Design, installation and upkeep of drip and sprinkler networks with automated controllers that cut water use.",
      items: ["Drip & bubbler", "Smart controllers", "Leak audits"],
    },
    {
      tag: "Care",
      title: "Landscape maintenance",
      description:
        "Scheduled grounds maintenance for private, commercial and government clients, with KPI reporting and dedicated supervisors.",
      items: ["Annual contracts", "Pruning & plant health", "Monthly reporting"],
    },
    {
      tag: "Care",
      title: "Indoor plants",
      description:
        "Supply, styling and maintenance of indoor plants for offices, lobbies and hospitality spaces.",
      items: ["Plant supply", "Scheduled care", "Replacement guarantee"],
    },
  ];

  return (
    <section id="services" className="bg-sand py-[clamp(64px,9vw,120px)]">
      <div className="wrap">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-12">
          <div className="grid gap-[14px] max-w-[640px]">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="heading-display text-[clamp(2rem,4.2vw,3.2rem)]">
              One contractor, from first sketch to year-five maintenance.
            </h2>
          </div>
          <a className="btn btn-ghost" href="#contact">
            Discuss a project
          </a>
        </div>

        <div className="border-t border-line">
          {services.map((svc, index) => (
            <div
              key={index}
              className="grid grid-cols-[200px_1fr_1.1fr] max-[860px]:grid-cols-1 gap-7 max-[860px]:gap-[10px] py-7 border-b border-line items-start"
            >
              <span className="font-mono text-[0.75rem] tracking-[0.1em] uppercase text-water pt-[6px]">
                {svc.tag}
              </span>
              <h3 className="heading-display text-[1.45rem]">{svc.title}</h3>
              <div className="min-w-0">
                <p className="text-ink-2">{svc.description}</p>
                <ul className="mt-[10px] p-0 list-none flex flex-wrap gap-[6px]">
                  {svc.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-[0.82rem] px-[10px] py-1 border border-line rounded-full text-ink-2 bg-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

