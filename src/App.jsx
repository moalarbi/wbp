import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { businessPlan, chartData } from './data/businessPlan.js';

const chartColors = {
  navyDeep: 'var(--navy-deep)',
  navyMid: 'var(--navy-mid)',
  navyLight: 'var(--navy-light)',
  beigeSand: 'var(--beige-sand)',
  textLight: 'var(--text-light)',
};

const distributionColors = [chartColors.navyLight, chartColors.navyMid, chartColors.beigeSand];
const projectColors = [
  chartColors.navyMid,
  chartColors.navyLight,
  chartColors.beigeSand,
  '#8EA0B2',
  '#B8B0A6',
  '#536A82',
];

function App() {
  const sections = businessPlan.sections;

  return (
    <>
      <div className="pattern-bg" />
      <div className="page-wrapper">
        <DocumentHeader />
        <SingleDocumentVersion sections={sections} />
        <SiteFooter />
      </div>
    </>
  );
}

function DocumentHeader() {
  return (
    <header className="site-header">
      <div className="header-meta">{businessPlan.meta}</div>
      <LogoBlock />
    </header>
  );
}

function LogoBlock({ footer = false }) {
  return (
    <div className={footer ? 'footer-logo' : 'logo-block'}>
      <span className="logo-name">WOSOL</span>
      <span className="logo-sub">CONCIERGE</span>
    </div>
  );
}

function SingleDocumentVersion({ sections }) {
  const summarySection = sections.find((section) => section.id === 'executive-summary');
  const bodySections = sections.filter(
    (section) => !['cover', 'executive-summary', 'conclusion'].includes(section.id),
  );
  const conclusion = sections.find((section) => section.id === 'conclusion');

  return (
    <>
      <section id="section-cover" className="title-block cover-block">
        <div className="cover-logo">
          <LogoBlock />
        </div>
        <p className="cover-subtitle">خطة الأعمال للأعوام 2026 – 2028</p>
        <div className="cover-facts" aria-label="بيانات الغلاف">
          <div>
            <span>سنة التأسيس</span>
            <strong>2011</strong>
          </div>
          <div>
            <span>المقر الرئيسي</span>
            <strong>الرياض – المملكة العربية السعودية</strong>
          </div>
          <div>
            <span>النشاط الرئيسي</span>
            <strong>إدارة نمط الحياة وخدمات الكونسيرج</strong>
          </div>
        </div>
      </section>

      <div className="document-grid">
        <SectionNav sections={sections} />
        <main className="document-content">
          <section id={`section-${summarySection.id}`} className="summary-anchor">
            <ExecutiveSummary section={summarySection} />
          </section>

          {bodySections.map((section) => (
            <ExecutiveSection key={section.id} section={section} />
          ))}

          <ClosingSection section={conclusion} />
        </main>
      </div>
    </>
  );
}

function SectionNav({ sections }) {
  return (
    <aside className="section-nav">
      <div className="section-nav-label">Document Map</div>
      <div className="section-nav-list">
        {sections.map((section) => (
          <a key={section.id} href={`#section-${section.id}`}>
            <span>{section.number}</span>
            {section.title}
          </a>
        ))}
      </div>
    </aside>
  );
}

function ExecutiveSummary({ section }) {
  return (
    <div className="exec-summary">
      <span className="exec-label">{section.label}</span>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function ExecutiveSection({ section }) {
  return (
    <section id={`section-${section.id}`} className="section">
      <div className="section-header">
        <span className="section-num">{section.number}</span>
        <div>
          <h2 className="section-title">{section.title}</h2>
          <p className="section-title-en">{section.label}</p>
        </div>
      </div>
      <div className="section-body">
        <SectionBody section={section} />
      </div>
    </section>
  );
}

function SectionBody({ section }) {
  return (
    <>
      <Paragraphs paragraphs={section.paragraphs} />
      {section.metrics ? <MetricsGrid metrics={section.metrics} /> : null}
      {section.facts ? <FactsTable facts={section.facts} /> : null}
      {section.bullets && !section.blocks ? <BulletGrid bullets={section.bullets} /> : null}
      {section.blocks ? <BlocksGrid blocks={section.blocks} /> : null}
      {section.chart ? <ChartByType type={section.chart} /> : null}
      {section.table ? <DataTable table={section.table} /> : null}
      {section.closing ? <p className="section-closing">{section.closing}</p> : null}
      {section.bullets && section.blocks ? <BulletGrid bullets={section.bullets} /> : null}
    </>
  );
}

function Paragraphs({ paragraphs }) {
  if (!paragraphs?.length) {
    return null;
  }

  return (
    <div className="prose-block">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function BlocksGrid({ blocks }) {
  return (
    <div className="content-grid">
      {blocks.map((block) => (
        <article className="content-card" key={block.heading}>
          <h3>{block.heading}</h3>
          {block.intro ? <p>{block.intro}</p> : null}
          <Paragraphs paragraphs={block.paragraphs} />
          {block.facts ? <FactsTable facts={block.facts} compact /> : null}
          {block.bullets ? <BulletGrid bullets={block.bullets} compact /> : null}
          {block.target ? (
            <p className="target-line">
              <strong>الفئة المستهدفة:</strong> {block.target}
            </p>
          ) : null}
          {block.after
            ? block.after.split('\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            : null}
        </article>
      ))}
    </div>
  );
}

function BulletGrid({ bullets, compact = false }) {
  return (
    <ul className={compact ? 'bullet-list compact' : 'bullet-list'}>
      {bullets.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function MetricsGrid({ metrics }) {
  return (
    <div className="metric-grid">
      {metrics.map(([label, value]) => (
        <MetricCard key={label} label={label} value={value} />
      ))}
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function FactsTable({ facts, compact = false }) {
  return (
    <div className={compact ? 'facts-list compact' : 'facts-list'}>
      {facts.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

function DataTable({ table }) {
  return (
    <div className="compare-scroll">
      <table>
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChartByType({ type }) {
  const charts = {
    membershipRevenue: <MembershipRevenueChart />,
    historicalRevenue: <HistoricalRevenueChart />,
    revenueDistribution2025: <RevenueDistributionChart />,
    currentProjects: <CurrentProjectsChart />,
    financialForecast: <FinancialForecastChart />,
  };

  return charts[type] || null;
}

function ChartFrame({ title, label, children, className = '' }) {
  return (
    <div className={`chart-frame ${className}`}>
      <div className="chart-heading">
        <span>{label}</span>
        <h3>{title}</h3>
      </div>
      <div className="chart-canvas">{children}</div>
    </div>
  );
}

function ChartLegend({ payload = [], variant = 'line' }) {
  if (!payload.length) {
    return null;
  }

  return (
    <div className={`chart-legend chart-legend-${variant}`}>
      {payload.map((entry) => (
        <div className="chart-legend-item" key={`${entry.dataKey}-${entry.value}`}>
          <span className="chart-legend-label">{entry.value}</span>
          <span
            className="chart-legend-symbol"
            style={{ '--legend-color': entry.color }}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

function ArabicTooltip({ active, payload, label, formatter }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="chart-tooltip">
      <strong>{label}</strong>
      {payload.map((entry) => (
        <div key={entry.dataKey || entry.name}>
          <span style={{ background: entry.color }} />
          {entry.name}: {formatter ? formatter(entry, payload) : `${entry.value} مليون ريال`}
        </div>
      ))}
    </div>
  );
}

const amountAxisTick = {
  fill: chartColors.textLight,
  fontSize: 12,
};

const fixedTooltipProps = {
  position: { x: 18, y: 18 },
  wrapperStyle: {
    zIndex: 30,
    outline: 'none',
    pointerEvents: 'none',
  },
  isAnimationActive: false,
};

function formatAxisMillion(value) {
  return `${value}M`;
}

function MembershipRevenueChart() {
  return (
    <ChartFrame title="نمو إيرادات العضويات" label="Membership Revenue">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chartData.membershipRevenue} margin={{ top: 12, right: 6, left: 6, bottom: 6 }}>
          <CartesianGrid stroke="rgba(4, 16, 38, 0.08)" vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="year" tickLine={false} axisLine={false} />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            width={40}
            tick={amountAxisTick}
            tickMargin={8}
            tickFormatter={formatAxisMillion}
          />
          <Tooltip
            {...fixedTooltipProps}
            cursor={{ fill: 'rgba(209, 199, 186, 0.16)' }}
            content={
              <ArabicTooltip
                formatter={(entry) => entry.payload.display}
              />
            }
          />
          <Bar name="إيرادات العضويات" dataKey="value" fill={chartColors.navyLight} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function HistoricalRevenueChart() {
  return (
    <ChartFrame title="نمو الإيرادات التاريخي" label="Historical Revenue Growth">
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={chartData.historicalRevenue} margin={{ top: 12, right: 22, left: 0, bottom: 6 }}>
          <CartesianGrid stroke="rgba(4, 16, 38, 0.08)" vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="year" tickLine={false} axisLine={false} padding={{ left: 10, right: 24 }} />
          <YAxis
            orientation="left"
            tickLine={false}
            axisLine={false}
            width={42}
            tick={amountAxisTick}
            tickMargin={8}
            tickFormatter={formatAxisMillion}
          />
          <Tooltip
            {...fixedTooltipProps}
            content={
              <ArabicTooltip
                formatter={(entry) => entry.payload.display}
              />
            }
          />
          <Legend content={<ChartLegend />} />
          <Line
            name="الإيرادات"
            type="monotone"
            dataKey="revenue"
            stroke={chartColors.navyLight}
            strokeWidth={3}
            dot={{ r: 4, fill: chartColors.navyLight, stroke: '#ffffff', strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function RevenueDistributionChart() {
  const total = '23.79 مليون ريال';

  return (
    <ChartFrame title="توزيع الإيرادات حسب القطاعات 2025" label="Revenue Distribution 2025" className="donut-frame">
      <div className="donut-wrap">
        <ResponsiveContainer width="100%" height={340}>
          <PieChart>
            <Pie
              data={chartData.revenueDistribution2025}
              dataKey="revenue"
              nameKey="sector"
              innerRadius={82}
              outerRadius={124}
              paddingAngle={2}
              stroke="#ffffff"
              strokeWidth={2}
            >
              {chartData.revenueDistribution2025.map((entry, index) => (
                <Cell key={entry.sector} fill={distributionColors[index % distributionColors.length]} />
              ))}
            </Pie>
            <Tooltip
              {...fixedTooltipProps}
              content={
                <ArabicTooltip
                  formatter={(entry) => entry.payload.display}
                />
              }
            />
            <Legend content={<ChartLegend variant="dot" />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center">
          <span>الإجمالي</span>
          <strong>{total}</strong>
        </div>
      </div>
    </ChartFrame>
  );
}

function CurrentProjectsChart() {
  return (
    <ChartFrame title="الإيرادات السنوية المتوقعة من المشاريع الحالية" label="Current Projects Revenue" className="project-share-frame">
      <div className="project-share-layout">
        <div className="project-share-chart">
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={chartData.currentProjects}
                dataKey="revenue"
                nameKey="project"
                innerRadius={72}
                outerRadius={116}
                paddingAngle={2}
                stroke="#ffffff"
                strokeWidth={2}
              >
                {chartData.currentProjects.map((entry, index) => (
                  <Cell key={entry.project} fill={projectColors[index % projectColors.length]} />
                ))}
              </Pie>
              <Tooltip
                {...fixedTooltipProps}
                content={
                  <ArabicTooltip
                    formatter={(entry) => entry.payload.display}
                  />
                }
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="project-share-center">
            <span>إجمالي متوقع</span>
            <strong>13.965M ريال</strong>
          </div>
        </div>
        <div className="project-share-list">
          {chartData.currentProjects.map((item, index) => (
            <div className="project-share-item" key={item.project}>
              <span
                className="project-share-dot"
                style={{ '--project-color': projectColors[index % projectColors.length] }}
                aria-hidden="true"
              />
              <div>
                <strong>{item.project}</strong>
                <span>{item.display}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ChartFrame>
  );
}

function FinancialForecastChart() {
  const formatter = (entry) => {
    if (entry.dataKey === 'revenue') return entry.payload.revenueDisplay;
    if (entry.dataKey === 'membershipRevenue') return entry.payload.membershipDisplay;
    if (entry.dataKey === 'netProfit') return entry.payload.profitDisplay;
    return entry.payload.marginDisplay;
  };

  return (
    <ChartFrame title="التوقعات المالية 2026–2028" label="Financial Forecasts">
      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart data={chartData.financialForecast} margin={{ top: 12, right: 6, left: 6, bottom: 6 }}>
          <CartesianGrid stroke="rgba(4, 16, 38, 0.08)" vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="year" tickLine={false} axisLine={false} padding={{ left: 10, right: 24 }} />
          <YAxis
            yAxisId="amount"
            orientation="left"
            tickLine={false}
            axisLine={false}
            width={42}
            tick={amountAxisTick}
            tickMargin={8}
            tickFormatter={formatAxisMillion}
          />
          <YAxis
            yAxisId="percent"
            orientation="right"
            tickLine={false}
            axisLine={false}
            width={36}
            tick={{ fill: chartColors.textLight, fontSize: 11 }}
            tickMargin={6}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip {...fixedTooltipProps} content={<ArabicTooltip formatter={formatter} />} />
          <Legend content={<ChartLegend />} />
          <Line
            yAxisId="amount"
            name="الإيرادات"
            type="monotone"
            dataKey="revenue"
            stroke={chartColors.navyLight}
            strokeWidth={3}
            dot={{ r: 4, fill: chartColors.navyLight, stroke: '#ffffff', strokeWidth: 2 }}
          />
          <Line
            yAxisId="amount"
            name="إيرادات العضويات"
            type="monotone"
            dataKey="membershipRevenue"
            stroke={chartColors.beigeSand}
            strokeWidth={3}
            dot={{ r: 4, fill: chartColors.beigeSand, stroke: '#ffffff', strokeWidth: 2 }}
          />
          <Line
            yAxisId="amount"
            name="صافي الربح"
            type="monotone"
            dataKey="netProfit"
            stroke={chartColors.navyMid}
            strokeWidth={3}
            dot={{ r: 4, fill: chartColors.navyMid, stroke: '#ffffff', strokeWidth: 2 }}
          />
          <Line
            yAxisId="percent"
            name="هامش الربح الصافي"
            type="monotone"
            dataKey="netMargin"
            stroke={chartColors.textLight}
            strokeWidth={2}
            strokeDasharray="6 5"
            dot={{ r: 4, fill: chartColors.textLight, stroke: '#ffffff', strokeWidth: 2 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function ClosingSection({ section }) {
  return (
    <div id={`section-${section.id}`} className="closing-section">
      <span className="closing-label">{section.label}</span>
      <h3>{section.title}</h3>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <LogoBlock footer />
      <div className="footer-meta">Confidential · 2026–2028</div>
    </footer>
  );
}

export default App;
