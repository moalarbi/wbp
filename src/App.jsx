import React, { useEffect, useState } from 'react';
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
import { businessPlan, businessPlanEn, chartData } from './data/businessPlan.js';

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

const languageOptions = [
  { code: 'ar', label: 'AR', ariaLabel: 'العربية' },
  { code: 'en', label: 'EN', ariaLabel: 'English' },
];

const localizedCopy = {
  ar: {
    documentTitle: 'WOSOL Concierge | خطة الأعمال 2026–2028',
    documentMap: 'Document Map',
    coverFactsAria: 'بيانات الغلاف',
    coverFacts: [
      ['سنة التأسيس', '2011'],
      ['المقر الرئيسي', 'الرياض – المملكة العربية السعودية'],
      ['النشاط الرئيسي', 'إدارة نمط الحياة وخدمات الكونسيرج'],
    ],
    targetLabel: 'الفئة المستهدفة:',
    footerMeta: 'Confidential · 2026–2028',
    totalLabel: 'الإجمالي',
    expectedTotalLabel: 'إجمالي متوقع',
    totalRevenue2025: '23.79 مليون ريال',
    currentProjectsTotal: '13.965M ريال',
    chartTitles: {
      membershipRevenue: ['نمو إيرادات العضويات', 'Membership Revenue'],
      historicalRevenue: ['نمو الإيرادات التاريخي', 'Historical Revenue Growth'],
      revenueDistribution2025: ['توزيع الإيرادات حسب القطاعات 2025', 'Revenue Distribution 2025'],
      currentProjects: ['الإيرادات السنوية المتوقعة من المشاريع الحالية', 'Current Projects Revenue'],
      financialForecast: ['التوقعات المالية 2026–2028', 'Financial Forecasts'],
    },
    series: {
      revenue: 'الإيرادات',
      membershipRevenue: 'إيرادات العضويات',
      netProfit: 'صافي الربح',
      netMargin: 'هامش الربح الصافي',
    },
  },
  en: {
    documentTitle: 'WOSOL Concierge | Business Plan 2026–2028',
    documentMap: 'Document Map',
    coverFactsAria: 'Cover facts',
    coverFacts: [
      ['Founding Year', '2011'],
      ['Headquarters', 'Riyadh – Kingdom of Saudi Arabia'],
      ['Primary Activity', 'Lifestyle management and concierge services'],
    ],
    targetLabel: 'Target Segment:',
    footerMeta: 'Confidential · 2026–2028',
    totalLabel: 'Total',
    expectedTotalLabel: 'Expected Total',
    totalRevenue2025: 'SAR 23.79 million',
    currentProjectsTotal: 'SAR 13.965M',
    chartTitles: {
      membershipRevenue: ['Membership Revenue Growth', 'Membership Revenue'],
      historicalRevenue: ['Historical Revenue Growth', 'Historical Revenue Growth'],
      revenueDistribution2025: ['2025 Revenue Distribution by Segment', 'Revenue Distribution 2025'],
      currentProjects: ['Expected Annual Revenue from Current Projects', 'Current Projects Revenue'],
      financialForecast: ['Financial Forecasts 2026–2028', 'Financial Forecasts'],
    },
    series: {
      revenue: 'Revenue',
      membershipRevenue: 'Membership Revenue',
      netProfit: 'Net Profit',
      netMargin: 'Net Profit Margin',
    },
  },
};

const localizedChartData = {
  ar: chartData,
  en: {
    membershipRevenue: chartData.membershipRevenue.map((item) => ({
      ...item,
      display: `SAR ${item.value} million`,
    })),
    historicalRevenue: chartData.historicalRevenue.map((item) => ({
      ...item,
      display: `SAR ${item.revenue} million`,
    })),
    revenueDistribution2025: [
      { ...chartData.revenueDistribution2025[0], sector: 'Individuals', display: 'SAR 16.05 million' },
      { ...chartData.revenueDistribution2025[1], sector: 'Corporate', display: 'SAR 6.83 million' },
      { ...chartData.revenueDistribution2025[2], sector: 'Government Entities', display: 'SAR 0.90 million' },
    ],
    currentProjects: [
      { ...chartData.currentProjects[0], project: 'KAFD', display: 'SAR 10 million' },
      { ...chartData.currentProjects[1], project: 'Tameer', display: 'SAR 1.125 million' },
      { ...chartData.currentProjects[2], project: 'Al Mamlaka', display: 'SAR 800 thousand' },
      { ...chartData.currentProjects[3], project: 'Emergency Forces', display: 'SAR 1 million' },
      { ...chartData.currentProjects[4], project: 'Walaa Plus', display: 'SAR 540 thousand' },
      { ...chartData.currentProjects[5], project: 'Cityscape', display: 'SAR 500 thousand' },
    ],
    financialForecast: chartData.financialForecast.map((item) => ({
      ...item,
      revenueDisplay: `SAR ${item.revenue} million`,
      membershipDisplay: `SAR ${item.membershipRevenue} million`,
      profitDisplay: `SAR ${item.netProfit} million`,
    })),
  },
};

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'ar';
    }

    return localStorage.getItem('wosol-language') || 'ar';
  });
  const activeLanguage = language === 'en' ? 'en' : 'ar';
  const plan = activeLanguage === 'en' ? businessPlanEn : businessPlan;
  const copy = localizedCopy[activeLanguage];
  const sections = plan.sections;

  useEffect(() => {
    document.documentElement.lang = activeLanguage;
    document.documentElement.dir = activeLanguage === 'ar' ? 'rtl' : 'ltr';
    document.title = copy.documentTitle;
    localStorage.setItem('wosol-language', activeLanguage);
  }, [activeLanguage, copy.documentTitle]);

  return (
    <>
      <div className="pattern-bg" />
      <div className={`page-wrapper language-${activeLanguage}`}>
        <DocumentHeader plan={plan} language={activeLanguage} onLanguageChange={setLanguage} />
        <SingleDocumentVersion sections={sections} plan={plan} copy={copy} language={activeLanguage} />
        <SiteFooter copy={copy} />
      </div>
    </>
  );
}

function DocumentHeader({ plan, language, onLanguageChange }) {
  return (
    <header className="site-header">
      <div className="header-meta">{plan.meta}</div>
      <div className="header-actions">
        <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
        <LogoBlock />
      </div>
    </header>
  );
}

function LanguageToggle({ language, onLanguageChange }) {
  return (
    <div className="language-toggle" aria-label="Language selector">
      {languageOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          className={language === option.code ? 'active' : ''}
          aria-label={option.ariaLabel}
          aria-pressed={language === option.code}
          onClick={() => onLanguageChange(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
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

function SingleDocumentVersion({ sections, plan, copy, language }) {
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
        <p className="cover-subtitle">
          {plan.subtitle.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <div className="cover-facts" aria-label={copy.coverFactsAria}>
          {copy.coverFacts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <div className="document-grid">
        <SectionNav sections={sections} copy={copy} />
        <main className="document-content">
          <section id={`section-${summarySection.id}`} className="summary-anchor">
            <ExecutiveSummary section={summarySection} />
          </section>

          {bodySections.map((section) => (
            <ExecutiveSection key={section.id} section={section} copy={copy} language={language} />
          ))}

          <ClosingSection section={conclusion} />
        </main>
      </div>
    </>
  );
}

function SectionNav({ sections, copy }) {
  return (
    <aside className="section-nav">
      <div className="section-nav-label">{copy.documentMap}</div>
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

function ExecutiveSection({ section, copy, language }) {
  return (
    <section id={`section-${section.id}`} className="section">
      <div className="section-header">
        <span className="section-num">{section.number}</span>
        <div>
          <h2 className="section-title">{section.title}</h2>
          {section.label && section.label !== section.title ? (
            <p className="section-title-en">{section.label}</p>
          ) : null}
        </div>
      </div>
      <div className="section-body">
        <SectionBody section={section} copy={copy} language={language} />
      </div>
    </section>
  );
}

function SectionBody({ section, copy, language }) {
  return (
    <>
      <Paragraphs paragraphs={section.paragraphs} />
      {section.metrics ? <MetricsGrid metrics={section.metrics} /> : null}
      {section.facts ? <FactsTable facts={section.facts} /> : null}
      {section.bullets && !section.blocks ? <BulletGrid bullets={section.bullets} /> : null}
      {section.blocks ? <BlocksGrid blocks={section.blocks} copy={copy} /> : null}
      {section.chart ? <ChartByType type={section.chart} copy={copy} language={language} /> : null}
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

function BlocksGrid({ blocks, copy }) {
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
              <strong>{copy.targetLabel}</strong> {block.target}
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

function ChartByType({ type, copy, language }) {
  const charts = {
    membershipRevenue: <MembershipRevenueChart copy={copy} language={language} />,
    historicalRevenue: <HistoricalRevenueChart copy={copy} language={language} />,
    revenueDistribution2025: <RevenueDistributionChart copy={copy} language={language} />,
    currentProjects: <CurrentProjectsChart copy={copy} language={language} />,
    financialForecast: <FinancialForecastChart copy={copy} language={language} />,
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

function ChartTooltip({ active, payload, label, formatter }) {
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

function MembershipRevenueChart({ copy, language }) {
  const data = localizedChartData[language].membershipRevenue;
  const [title, label] = copy.chartTitles.membershipRevenue;

  return (
    <ChartFrame title={title} label={label}>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data} margin={{ top: 12, right: 6, left: 6, bottom: 6 }}>
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
              <ChartTooltip
                formatter={(entry) => entry.payload.display}
              />
            }
          />
          <Bar name={copy.series.membershipRevenue} dataKey="value" fill={chartColors.navyLight} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

function HistoricalRevenueChart({ copy, language }) {
  const data = localizedChartData[language].historicalRevenue;
  const [title, label] = copy.chartTitles.historicalRevenue;

  return (
    <ChartFrame title={title} label={label}>
      <ResponsiveContainer width="100%" height={340}>
        <LineChart data={data} margin={{ top: 12, right: 22, left: 0, bottom: 6 }}>
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
              <ChartTooltip
                formatter={(entry) => entry.payload.display}
              />
            }
          />
          <Legend content={<ChartLegend />} />
          <Line
            name={copy.series.revenue}
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

function RevenueDistributionChart({ copy, language }) {
  const data = localizedChartData[language].revenueDistribution2025;
  const [title, label] = copy.chartTitles.revenueDistribution2025;

  return (
    <ChartFrame title={title} label={label} className="donut-frame">
      <div className="donut-wrap">
        <ResponsiveContainer width="100%" height={340}>
          <PieChart>
            <Pie
              data={data}
              dataKey="revenue"
              nameKey="sector"
              innerRadius={82}
              outerRadius={124}
              paddingAngle={2}
              stroke="#ffffff"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={entry.sector} fill={distributionColors[index % distributionColors.length]} />
              ))}
            </Pie>
            <Tooltip
              {...fixedTooltipProps}
              content={
                <ChartTooltip
                  formatter={(entry) => entry.payload.display}
                />
              }
            />
            <Legend content={<ChartLegend variant="dot" />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center">
          <span>{copy.totalLabel}</span>
          <strong>{copy.totalRevenue2025}</strong>
        </div>
      </div>
    </ChartFrame>
  );
}

function CurrentProjectsChart({ copy, language }) {
  const data = localizedChartData[language].currentProjects;
  const [title, label] = copy.chartTitles.currentProjects;

  return (
    <ChartFrame title={title} label={label} className="project-share-frame">
      <div className="project-share-layout">
        <div className="project-share-chart">
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={data}
                dataKey="revenue"
                nameKey="project"
                innerRadius={72}
                outerRadius={116}
                paddingAngle={2}
                stroke="#ffffff"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.project} fill={projectColors[index % projectColors.length]} />
                ))}
              </Pie>
              <Tooltip
                {...fixedTooltipProps}
                content={
                  <ChartTooltip
                    formatter={(entry) => entry.payload.display}
                  />
                }
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="project-share-center">
            <span>{copy.expectedTotalLabel}</span>
            <strong>{copy.currentProjectsTotal}</strong>
          </div>
        </div>
        <div className="project-share-list">
          {data.map((item, index) => (
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

function FinancialForecastChart({ copy, language }) {
  const data = localizedChartData[language].financialForecast;
  const [title, label] = copy.chartTitles.financialForecast;
  const formatter = (entry) => {
    if (entry.dataKey === 'revenue') return entry.payload.revenueDisplay;
    if (entry.dataKey === 'membershipRevenue') return entry.payload.membershipDisplay;
    if (entry.dataKey === 'netProfit') return entry.payload.profitDisplay;
    return entry.payload.marginDisplay;
  };

  return (
    <ChartFrame title={title} label={label}>
      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart data={data} margin={{ top: 12, right: 6, left: 6, bottom: 6 }}>
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
          <Tooltip {...fixedTooltipProps} content={<ChartTooltip formatter={formatter} />} />
          <Legend content={<ChartLegend />} />
          <Line
            yAxisId="amount"
            name={copy.series.revenue}
            type="monotone"
            dataKey="revenue"
            stroke={chartColors.navyLight}
            strokeWidth={3}
            dot={{ r: 4, fill: chartColors.navyLight, stroke: '#ffffff', strokeWidth: 2 }}
          />
          <Line
            yAxisId="amount"
            name={copy.series.membershipRevenue}
            type="monotone"
            dataKey="membershipRevenue"
            stroke={chartColors.beigeSand}
            strokeWidth={3}
            dot={{ r: 4, fill: chartColors.beigeSand, stroke: '#ffffff', strokeWidth: 2 }}
          />
          <Line
            yAxisId="amount"
            name={copy.series.netProfit}
            type="monotone"
            dataKey="netProfit"
            stroke={chartColors.navyMid}
            strokeWidth={3}
            dot={{ r: 4, fill: chartColors.navyMid, stroke: '#ffffff', strokeWidth: 2 }}
          />
          <Line
            yAxisId="percent"
            name={copy.series.netMargin}
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

function SiteFooter({ copy }) {
  return (
    <footer className="site-footer">
      <LogoBlock footer />
      <div className="footer-meta">{copy.footerMeta}</div>
    </footer>
  );
}

export default App;
