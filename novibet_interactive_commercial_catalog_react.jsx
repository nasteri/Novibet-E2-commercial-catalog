ansition duration-700 group-hover:scale-105"
             
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
