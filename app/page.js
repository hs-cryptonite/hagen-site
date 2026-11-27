export default function Home() {
  return (
    <div className="min-h-screen grid-bg">
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="max-w-3xl mx-auto px-6 pt-24 pb-8">
        <div className="fade-in-up">
          <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight text-paper">
            Hågen Sagli
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Finance professional based in Calgary, Alberta, focused on
            quantitative finance and energy markets.
          </p>
          <p className="mt-2 text-muted/70 text-sm">
            Hågen Moe Sagli &middot; also written Haagen Sagli or Hagen Sagli
          </p>
        </div>
      </header>

      {/* ── About ───────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-10 fade-in-up d1">
        <div className="h-px bg-line mb-10" />
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-5">
          About
        </h2>
        <div className="space-y-4 text-paper/90 leading-relaxed">
          <p>
            Hågen Moe Sagli &mdash; also written Haagen Sagli or Hagen Sagli
            &mdash; is a Calgary-based finance professional and the founder of
            SPC Capital Inc., a systematic quantitative trading firm, and of
            The Differential, a Canadian energy market analytics platform.
          </p>
          <p>
            His work sits at the intersection of quantitative finance, systematic
            strategy design, and energy markets. He builds the models, data
            pipelines, and decision frameworks that turn messy market data into
            clear, defensible signals &mdash; from momentum-based trading systems
            to differential pricing analytics for Canadian crude.
          </p>
          <p>
            He is an interdisciplinary thinker by temperament, drawn to importing
            structure from fields outside finance &mdash; engineering, statistics,
            and the physical sciences &mdash; and applying it to how markets are
            understood and traded.
          </p>
          <p>
            He holds a Master of Finance (MMF) from McGill University&rsquo;s
            Desautels Faculty of Management, where his Applied Finance Project
            examined LNG arbitrage, and completed his undergraduate studies at
            Mount Royal University, earning recognition on the President&rsquo;s
            Honour Roll.
          </p>
        </div>
      </section>

      {/* ── Education ───────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-10 fade-in-up d2">
        <div className="h-px bg-line mb-10" />
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-5">
          Education
        </h2>
        <div className="space-y-6">
          <div>
            <div className="text-paper font-medium">
              Master of Finance (MMF) — McGill University
            </div>
            <div className="text-muted text-sm mt-1">
              Desautels Faculty of Management · Applied Finance Project:{' '}
              <em>LNG Arbitrage</em>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a
                href="https://www.mcgill.ca/desautels/programs/mmf/montreal/program-overview/applied-finance-project"
                className="text-accent hover:underline"
                rel="noopener"
              >
                McGill MMF — Applied Finance Project
              </a>
            </div>
          </div>
          <div>
            <div className="text-paper font-medium">
              Undergraduate Studies — Mount Royal University
            </div>
            <div className="text-muted text-sm mt-1">
              President&rsquo;s Honour Roll · Calgary, Alberta
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a
                href="https://www.mtroyal.ca/AboutMountRoyal/OfficesGovernance/_pdfs/prez_honourroll2016-2017.pdf"
                className="text-accent hover:underline"
                rel="noopener"
              >
                President&rsquo;s Honour Roll 2016&ndash;17
              </a>
              <a
                href="https://www.mtroyal.ca/AboutMountRoyal/OfficesGovernance/_pdfs/pres_honourroll2015-16.pdf"
                className="text-accent hover:underline"
                rel="noopener"
              >
                President&rsquo;s Honour Roll 2015&ndash;16
              </a>
              <a
                href="https://www.mtroyal.ca/AcademicSupport/_pdfs/2017_spring_convocation_2.pdf"
                className="text-accent hover:underline"
                rel="noopener"
              >
                Spring 2017 Convocation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus ───────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-10 fade-in-up d3">
        <div className="h-px bg-line mb-10" />
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-5">
          Professional Focus
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Quantitative Finance', 'Systematic strategy design, backtesting, and risk management.'],
            ['Energy Markets', 'Canadian crude, pipelines, and commodity pricing dynamics.'],
            ['SPC Capital Inc.', 'Founder of a Calgary-based systematic trading firm.'],
            ['The Differential', 'Founder of a Canadian energy market analytics platform.'],
          ].map(([t, d]) => (
            <div key={t} className="border border-line rounded-lg p-5 bg-ink-soft/50">
              <div className="text-paper font-medium">{t}</div>
              <div className="text-muted text-sm mt-1 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Links ───────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-10 fade-in-up d4">
        <div className="h-px bg-line mb-10" />
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-5">
          Elsewhere
        </h2>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href="https://spclabs.ca" className="text-accent hover:underline" rel="noopener">
            SPC Labs
          </a>
          <a href="https://thedifferential.energy" className="text-accent hover:underline" rel="noopener">
            The Differential
          </a>
          <a href="https://ised-isde.canada.ca/cc/lgcy/fdrlCrpDtls.html?corpId=17822596" className="text-accent hover:underline" rel="noopener">
            SPC Capital Inc. — Corporations Canada
          </a>
          <a href="https://www.bizapedia.com/canada/spc-capital-inc.html" className="text-accent hover:underline" rel="noopener">
            SPC Capital Inc. — Business Record
          </a>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="max-w-3xl mx-auto px-6 py-16 mt-10">
        <div className="h-px bg-line mb-6" />
        <div className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} Hågen Moe Sagli · Calgary, Alberta, Canada
        </div>
      </footer>
    </div>
  )
}
