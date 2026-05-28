export default function NovibetCommercialCatalog() {
  const products = [
    {
      category: 'Live Results App',
      title: 'Alertagol',
      subtitle: 'Brazilian Live Results App',
      description:
        'Live scores environment with integrated betting inventory, odds comparison tools and interstitial opportunities focused on Brazilian sports audiences.',
      highlights: [
        '12–15M odds impressions/month',
        '33% Share of Voice',
        '100k interstitial impressions/month',
        '3 months trial period',
      ],
      commercial: '€5k monthly flat fee + 30% RevShare',
      tags: ['Odds', 'App', 'Live Results', 'Branding'],
      image:
        'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'WhatsApp Channel',
      title: 'Coluna do Fla',
      subtitle: 'WhatsApp channel with ~1M followers',
      description:
        'Large-scale Flamengo audience activation channel with direct betting promotion opportunities and sponsored content distribution.',
      highlights: [
        'Option 1: 10 posts',
        'Option 2: 15 posts',
        'Option 3: 20 posts',
      ],
      commercial: 'Starting at €3k + 30% RevShare',
      tags: ['WhatsApp', 'Flamengo', 'Audience', 'Acquisition'],
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'Sports Media',
      title: 'Transfermarkt.Br',
      subtitle: 'Sports audience inventory',
      description:
        'Premium football audience environment with contextual inventory and sports-focused visibility opportunities.',
      highlights: [
        'Brazilian football audience',
        'High sports engagement',
        'Contextual exposure',
      ],
      commercial: 'Custom commercial agreement',
      tags: ['Football', 'Media', 'Sports Audience'],
      image:
        'https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1600&auto=format&fit=crop',
    },
    {
      category: 'Club Media',
      title: 'EC Bahia',
      subtitle: 'Official audience channels',
      description:
        'Club-related digital channels including website, Instagram and WhatsApp audience opportunities.',
      highlights: [
        '84k Instagram followers',
        '32k WhatsApp followers',
        'Official club-related ecosystem',
      ],
      commercial: 'Custom partnership structure',
      tags: ['Club', 'Instagram', 'WhatsApp', 'Football'],
      image:
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
                E2 Communications × Novibet
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
                  Brazilian Market
                  <span className="block text-zinc-400">
                    Commercial Inventory
                  </span>
                </h1>

                <p className="max-w-2xl text-lg text-zinc-300">
                  Interactive showcase of media inventory, acquisition channels,
                  betting integrations and audience opportunities available for
                  Novibet in Brazil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:w-[360px]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl font-bold">4</div>
                <div className="mt-2 text-sm text-zinc-400">
                  Commercial Opportunities
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-3xl font-bold">BR</div>
                <div className="mt-2 text-sm text-zinc-400">
                  Brazilian Market Focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">
              Available Inventory & Opportunities
            </h2>
            <p className="mt-2 text-zinc-400">
              Explore available products, audience formats and partnership
              structures.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {['All', 'WhatsApp', 'Football', 'Odds', 'Acquisition'].map(
              (tag) => (
                <button
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 transition hover:border-white/20 hover:bg-zinc-900"
            >
              <div className="relative h-[280px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="mb-2 inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs backdrop-blur">
                      {product.category}
                    </div>

                    <h3 className="text-3xl font-bold">{product.title}</h3>
                    <p className="mt-1 text-zinc-300">{product.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-8">
                <p className="text-zinc-300">{product.description}</p>

                <div>
                  <div className="mb-3 text-sm font-medium uppercase tracking-wider text-zinc-500">
                    Key Highlights
                  </div>

                  <div className="grid gap-3">
                    {product.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-sm text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                  <div className="text-xs uppercase tracking-wider text-emerald-300">
                    Commercial Structure
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {product.commercial}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight">
              Tailored Opportunities for Novibet
            </h2>

            <p className="mt-4 text-zinc-400">
              The presented inventory can be combined into custom acquisition,
              branding and audience engagement strategies focused on the
              Brazilian regulated market.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur lg:w-[420px]">
            <div className="text-sm uppercase tracking-wider text-zinc-500">
              Partnership Scope
            </div>

            <div className="mt-6 grid gap-4">
              {[
                'Audience acquisition',
                'Brand visibility',
                'WhatsApp engagement',
                'Football inventory',
                'Odds integrations',
                'Revenue share models',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
