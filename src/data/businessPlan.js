export const chartData = {
  membershipRevenue: [
    { year: '2027', value: 3, display: '3 مليون ريال' },
    { year: '2028', value: 6.5, display: '6.5 مليون ريال' },
    { year: '2029', value: 12, display: '12 مليون ريال' },
  ],
  historicalRevenue: [
    { year: '2021', revenue: 6.9, display: '6.9 مليون ريال' },
    { year: '2022', revenue: 11.4, display: '11.4 مليون ريال' },
    { year: '2023', revenue: 15.08063808, display: '15,080,638.08 ريال', displayEn: 'SAR 15,080,638.08' },
    { year: '2024', revenue: 15.30718905, display: '15,307,189.05 ريال', displayEn: 'SAR 15,307,189.05' },
    { year: '2025', revenue: 22.60714125, display: '22,607,141.25 ريال', displayEn: 'SAR 22,607,141.25' },
  ],
  revenueDistribution2025: [
    { sector: 'الأفراد', revenue: 15.25839432558873, display: '15.26 مليون ريال', displayEn: 'SAR 15.26 million' },
    { sector: 'الشركات', revenue: 6.493136027649284, display: '6.49 مليون ريال', displayEn: 'SAR 6.49 million' },
    { sector: 'الجهات الحكومية', revenue: 0.8556108967619849, display: '0.86 مليون ريال', displayEn: 'SAR 0.86 million' },
  ],
  currentProjects: [
    { project: 'KAFD', revenue: 6, display: '6 مليون ريال' },
    { project: 'تعمير', revenue: 1.125, display: '1.125 مليون ريال' },
    { project: 'المملكة', revenue: 0.8, display: '800 ألف ريال' },
    { project: 'قوات الطوارئ', revenue: 1, display: '1 مليون ريال' },
    { project: 'ولاء بلس', revenue: 0.54, display: '540 ألف ريال' },
    { project: 'سيتي سكيب', revenue: 0.5, display: '500 ألف ريال' },
  ],
  financialForecast: [
    {
      year: '2027',
      revenue: 33,
      membershipRevenue: 3,
      netProfit: 3.5,
      netMargin: 10.6,
      revenueDisplay: '33 مليون ريال',
      membershipDisplay: '3 مليون ريال',
      profitDisplay: '3.5 مليون ريال',
      marginDisplay: '10.6%',
    },
    {
      year: '2028',
      revenue: 42.5,
      membershipRevenue: 6.5,
      netProfit: 6,
      netMargin: 14.1,
      revenueDisplay: '42.5 مليون ريال',
      membershipDisplay: '6.5 مليون ريال',
      profitDisplay: '6 مليون ريال',
      marginDisplay: '14.1%',
    },
    {
      year: '2029',
      revenue: 55,
      membershipRevenue: 12,
      netProfit: 9.5,
      netMargin: 17.3,
      revenueDisplay: '55 مليون ريال',
      membershipDisplay: '12 مليون ريال',
      profitDisplay: '9.5 مليون ريال',
      marginDisplay: '17.3%',
    },
  ],
};

export const businessPlan = {
  title: 'وصول كونسيرج',
  subtitle: ['خطة الأعمال والتوقعات المالية'],
  meta: 'Business Plan · Confidential · 2027–2029',
  sections: [
    {
      id: 'cover',
      number: '00',
      title: 'الغلاف',
      label: 'Cover',
      kind: 'cover',
    },
    {
      id: 'executive-summary',
      number: '01',
      title: 'الملخص التنفيذي',
      label: 'Executive Summary',
      kind: 'summary',
      paragraphs: [
        'تُعد شركة وصول كونسيرج أول شركة سعودية متخصصة في خدمات الكونسيرج وإدارة نمط الحياة، حيث تأسست عام 2011 في مدينة الرياض، ونجحت خلال أكثر من خمسة عشر عاماً في بناء مكانة رائدة في تقديم الخدمات الشخصية والتنفيذية الراقية للأفراد والشركات والجهات الحكومية وكبار الشخصيات.',
        'تقدم الشركة منظومة متكاملة من الخدمات تجمع بين إدارة السفر، وإدارة نمط الحياة، وكونسيرج الأعمال، بالإضافة إلى تشغيل خدمات الضيافة والوجهات، من خلال منصة تقنية مملوكة بالكامل للشركة تُمكّن العملاء من الوصول إلى الخدمات وإدارتها رقمياً.',
        'وتسعى الشركة خلال الفترة من 2027 إلى 2029 إلى التحول من شركة خدمات كونسيرج تقليدية إلى منصة متكاملة لإدارة نمط الحياة والخدمات التنفيذية مدعومة بالتقنية، تجمع بين الخدمات الشخصية، والعقود المؤسسية، والعضويات الحصرية، والتشغيل المتخصص للضيافة.',
      ],
    },
    {
      id: 'company-overview',
      number: '02',
      title: 'نبذة عن الشركة',
      label: 'Company Overview',
      blocks: [
        {
          heading: 'معلومات عامة',
          facts: [
            ['اسم الشركة', 'وصول كونسيرج'],
            ['سنة التأسيس', '2011'],
            ['المقر الرئيسي', 'الرياض – المملكة العربية السعودية'],
            ['النشاط الرئيسي', 'إدارة نمط الحياة وخدمات الكونسيرج'],
          ],
        },
        {
          heading: 'نموذج العمل',
          bullets: [
            'إدارة السفر',
            'إدارة نمط الحياة',
            'كونسيرج الأعمال',
            'تشغيل خدمات الضيافة وتجربة العملاء',
            'العضويات الحصرية',
            'المنصة التقنية',
            'عمولات الموردين والشركاء',
          ],
        },
      ],
    },
    {
      id: 'vision-mission',
      number: '03',
      title: 'الرؤية والرسالة',
      label: 'Vision And Mission',
      blocks: [
        {
          heading: 'الرؤية',
          paragraphs: [
            'أن تصبح وصول المنصة الرائدة عالمياً التي تمكّن الأعضاء من الوصول إلى الخدمات والتجارب والحلول الشخصية من خلال نقطة اتصال واحدة في أي مكان حول العالم.',
          ],
        },
        {
          heading: 'الرسالة',
          paragraphs: [
            'تقديم تجربة استثنائية للعملاء من خلال توفير حلول متكاملة لإدارة نمط الحياة والسفر والأعمال بأعلى معايير الجودة والخصوصية والاحترافية.',
          ],
        },
      ],
    },
    {
      id: 'market-opportunity',
      number: '04',
      title: 'الفرصة السوقية',
      label: 'Market Opportunity',
      paragraphs: [
        'تشهد المملكة العربية السعودية نمواً متسارعاً في القطاعات المرتبطة بإدارة نمط الحياة والسفر والضيافة والخدمات المتميزة، مدعوماً بمستهدفات رؤية المملكة 2030',
      ],
      bullets: [
        'السياحة الفاخرة',
        'الضيافة الراقية',
        'الطيران الخاص',
        'البنوك الخاصة',
        'المشاريع الاستراتيجية',
        'المشاريع النوعية',
        'الأندية الخاصة',
        'تجربة العملاء والكونسيرج',
      ],
      closing:
        'ويؤدي هذا النمو إلى زيادة الطلب على خدمات إدارة نمط الحياة وإدارة السفر وخدمات الكونسيرج وتشغيل تجربة العملاء، مما يمنح وصول كونسيرج فرصة استراتيجية للتوسع وتعزيز حضورها في القطاعات ذات القيمة المرتفعة داخل المملكة وخارجها.',
    },
    {
      id: 'business-sectors',
      number: '05',
      title: 'قطاعات الأعمال الرئيسية',
      label: 'Core Business Segments',
      paragraphs: [
        'تعتمد شركة وصول كونسيرج على ثلاثة قطاعات أعمال رئيسية تشكل الركائز الأساسية لنمو الشركة واستراتيجيتها المستقبلية، حيث تقدم حلولاً متكاملة لإدارة السفر، وإدارة نمط الحياة، والخدمات التنفيذية للأفراد والشركات والجهات الحكومية من خلال منصة تشغيلية وتقنية موحدة.',
      ],
      blocks: [
        {
          heading: 'إدارة نمط الحياة',
          intro: 'تشمل الخدمات:',
          bullets: [
            'حجوزات المطاعم',
            'التسوق الشخصي',
            'العناية الشخصية',
            'المناسبات الخاصة',
            'حجوزات الفعاليات',
            'الهدايا',
            'المساعد الشخصي',
            'اشتراكات الأندية',
            'التجارب والأنشطة',
            'المصممون والأزياء',
            'الفن والثقافة',
            'الخدمات العائلية',
            'الفحوصات الطبية',
            'المغامرات والرحلات الخاصة',
            'المنتجعات الصحية',
            'المدرب الشخصي',
            'خدمات التجميل والعناية بالشعر',
          ],
        },
        {
          heading: 'إدارة السفر',
          intro: 'تشمل الخدمات:',
          bullets: [
            'الطيران الخاص',
            'تذاكر الطيران',
            'الهليكوبتر',
            'اليخوت',
            'الفنادق والمنتجعات',
            'الفلل الخاصة',
            'التأشيرات',
            'خدمات الاستقبال والتوديع',
            'الكروز',
            'الشاليهات',
            'البنتهاوس',
            'شوفير سيرفس',
            'التأمين على السفر',
            'الحراسة الشخصية',
          ],
        },
        {
          heading: 'كونسيرج الأعمال',
          intro: 'تشمل الخدمات:',
          bullets: [
            'إدارة الممتلكات والعقارات',
            'إدارة المواعيد والاجتماعات',
            'هدايا الأعمال',
            'الاستشارات القانونية',
            'الخدمات الاستثمارية',
            'قاعات الاجتماعات',
            'تنظيم المؤتمرات والفعاليات',
            'الدورات والبرامج التدريبية',
            'خدمات الترجمة والتحرير',
          ],
        },
      ],
      audience: {
        title: 'الفئة المستهدفة',
        body:
          'تستهدف وصول كونسيرج الأفراد ذوي الملاءة المالية العالية، وكبار الشخصيات، والتنفيذيين، ورجال الأعمال، والمكاتب العائلية، والشركات والجهات المتميزة، ممن يبحثون عن إدارة احترافية لنمط الحياة والسفر والأعمال، والوصول إلى خدمات وتجارب مصممة وفق أعلى معايير الجودة والخصوصية.',
      },
    },
    {
      id: 'service-model',
      number: '06',
      title: 'المنظومة التشغيلية',
      label: 'Operational Framework',
      paragraphs: ['تعتمد وصول كونسيرج على نموذج تشغيلي موحد يرتكز على:'],
      bullets: [
        'مدير علاقة مخصص',
        'شبكة موردين معتمدة',
        'تطبيق وصول كونسيرج',
        'نظام إدارة الطلبات والعمليات',
        'إدارة التفضيلات الشخصية',
        'خدمات على مدار الساعة',
      ],
      closing:
        'ويتيح هذا النموذج للعملاء الوصول إلى جميع الخدمات من خلال نقطة اتصال واحدة تغطي احتياجات السفر وإدارة نمط الحياة وكونسيرج الأعمال.',
    },
    {
      id: 'memberships',
      number: '07',
      title: 'العضويات',
      label: 'Membership Model',
      blocks: [
        {
          heading: 'عضوية Prestige',
          paragraphs: [
            'مخصصة للشركات والمؤسسات الراغبة في توفير خدمات الكونسيرج لعملائها أو موظفيها.',
          ],
        },
        {
          heading: 'عضوية Premier',
          paragraphs: [
            'مخصصة لرجال الأعمال والتنفيذيين والأفراد الباحثين عن إدارة احترافية لنمط الحياة.',
          ],
        },
        {
          heading: 'عضوية Imperial',
          paragraphs: [
            'مخصصة للعملاء الذين يتطلبون أعلى درجات العناية الشخصية والخصوصية والوصول إلى خدمات وتجارب استثنائية حول العالم.',
          ],
        },
      ],
      audienceCards: [
        {
          title: 'الأهداف الاستراتيجية للعضويات',
          paragraphs: [
            'تمثل العضويات أحد المحركات الرئيسية للنمو المستقبلي للشركة، وتهدف إلى:',
          ],
          bullets: [
            'بناء إيرادات متكررة ومستدامة.',
            'تعزيز العلاقة طويلة الأمد مع الأعضاء.',
            'رفع القيمة العمرية للعميل (Customer Lifetime Value).',
            'توسيع قاعدة الأعضاء من الأفراد والشركات.',
            'زيادة الاعتماد على خدمات نمط الحياة والسفر والأعمال.',
            'دعم التوسع والتطوير المستقبلي للمنصة.',
          ],
        },
        {
          title: 'العضو المستهدف',
          bullets: [
            'أفراد ذوو ملاءة مالية عالية.',
            'كبار التنفيذيين ورجال الأعمال.',
            'العائلات والمكاتب العائلية.',
            'شركات ومؤسسات مختارة.',
            'متوسط إنفاق مستهدف يتجاوز 300 ألف ريال سنوياً.',
          ],
        },
      ],
      chart: 'membershipRevenue',
      closing:
        'بما يجعل العضويات أحد أهم مصادر النمو المستدام والإيرادات طويلة الأجل لشركة وصول كونسيرج.',
    },
    {
      id: 'technology-platform',
      number: '08',
      title: 'المنصة التقنية',
      label: 'Technology Platform',
      lead: {
        title: 'منصة تقنية رائدة في قطاع الكونسيرج',
        body: 'أول منصة متخصصة بالكونسيرج وإدارة نمط الحياة في الشرق الأوسط، مطورة داخلياً ومملوكة بالكامل للشركة، وتشمل تطبيق العميل، أنظمة إدارة العمليات، إدارة العملاء، العضويات، الموردين، والتكامل مع الشركاء ومزودي الخدمات.',
      },
      blocks: [
        {
          heading: 'توفر المنصة:',
          bullets: [
            'تقديم الطلبات ومتابعتها.',
            'المحادثة المباشرة داخل التطبيق.',
            'الاتصال الصوتي والمرئي.',
            'الرسائل الصوتية ومشاركة الصور والملفات.',
            'التواصل المباشر مع مدير العلاقة.',
            'المحفظة الإلكترونية.',
            'الفواتير والمدفوعات.',
            'إدارة التفضيلات الشخصية.',
            'إدارة أفراد العائلة.',
            'إدارة الضيوف.',
            'إدارة العاملين والمساعدين الشخصيين.',
            'حفظ الجوازات والتأشيرات والمستندات.',
            'إدارة أعياد الميلاد والمناسبات المهمة.',
          ],
        },
        {
          heading: 'التطوير المستقبلي',
          bullets: [
            'مساعد ذكي بالذكاء الاصطناعي.',
            'توصيات وخدمات استباقية.',
            'أتمتة العمليات والطلبات.',
            'تحليل سلوك العملاء.',
            'التنبؤ بالاحتياجات المستقبلية.',
            'تكاملات مباشرة مع الشركاء ومزودي الخدمات',
          ],
        },
      ],
    },
    {
      id: 'competitive-advantages',
      number: '09',
      title: 'المزايا التنافسية',
      label: 'Competitive Advantages',
      blocks: [
        { heading: 'أول شركة كونسيرج سعودية', paragraphs: ['خبرة تشغيلية تمتد لأكثر من خمسة عشر عاماً.'] },
        { heading: 'قاعدة بيانات حصرية', paragraphs: ['سجل متكامل لتفضيلات العملاء عالية القيمة.'] },
        { heading: 'منصة تقنية مملوكة', paragraphs: ['مرتبطة بأنظمة التشغيل الحديثة ومملوكة بالكامل للشركة.'] },
        { heading: 'شبكة موردين متخصصة', paragraphs: ['علاقات استراتيجية محلية وعالمية'] },
        { heading: 'عقود تشغيل مؤسسية', paragraphs: ['وجود فعلي داخل مشاريع ووجهات استراتيجية بالمملكة.'] },
      ],
    },
    {
      id: 'historical-financial-performance',
      number: '10',
      title: 'الأداء المالي التاريخي',
      label: 'Historical Financial Performance',
      chart: 'historicalRevenue',
      table: {
        headers: ['السنة', 'الإيرادات'],
        rows: [
          ['2021', '6.9 مليون ريال'],
          ['2022', '11.4 مليون ريال'],
          ['2023', '15,080,638.08 ريال'],
          ['2024', '15,307,189.05 ريال'],
          ['2025', '22,607,141.25 ريال'],
        ],
      },
      closing: 'معدل النمو السنوي المركب: 34.5%.',
    },
    {
      id: 'financial-performance-2025',
      number: '11',
      title: 'الأداء المالي لعام 2025',
      label: '2025 Financial Performance',
      metrics: [
        ['الإيرادات', '22,607,141.25 ريال'],
        ['صافي الربح', '2,022,397 ريال'],
        ['عدد العملاء الأفراد', '120'],
        ['عدد العملاء المؤسسيين', '5'],
        ['عدد الموظفين', '66'],
        ['إجمالي الرواتب', '6,067,723 ريال'],
        ['المصاريف التشغيلية', '1,579,606 ريال'],
      ],
    },
    {
      id: 'revenue-distribution-2025',
      number: '12',
      title: 'توزيع الإيرادات 2025',
      label: 'Revenue Mix 2025',
      chart: 'revenueDistribution2025',
      table: {
        headers: ['القطاع', 'الإيرادات'],
        rows: [
          ['الأفراد', '15.26 مليون ريال'],
          ['الشركات', '6.49 مليون ريال'],
          ['الجهات الحكومية', '0.86 مليون ريال'],
          ['الإجمالي', '22.61 مليون ريال'],
        ],
      },
    },
    {
      id: 'current-projects',
      number: '13',
      title: 'المشاريع الحالية',
      label: 'Current Projects',
      chart: 'currentProjects',
      table: {
        headers: ['المشروع', 'الإيراد السنوي المتوقع'],
        rows: [
          ['KAFD', '6 مليون ريال'],
          ['تعمير', '1.125 مليون ريال'],
          ['المملكة', '800 ألف ريال'],
          ['قوات الطوارئ', '1 مليون ريال'],
          ['ولاء بلس', '540 ألف ريال'],
          ['سيتي سكيب', '500 ألف ريال'],
        ],
      },
    },
    {
      id: 'strategic-opportunities',
      number: '14',
      title: 'الفرص الاستراتيجية قيد التفاوض',
      label: 'Strategic Opportunities',
      bullets: [
        'المطار التنفيذي',
        'طيران الرياض',
        'STC Elite',
        'وي بوك',
        'القدية',
        'كور كلوب',
        'مركز الفعاليات الوطني',
        'صندوق الفعاليات الاستثماري',
        'البواني',
        'سولتير',
      ],
    },
    {
      id: 'strategic-plan',
      number: '15',
      title: 'الخطة الاستراتيجية 2027 – 2029',
      label: 'Strategic Plan 2027–2029',
      blocks: [
        { heading: 'التوسع في العضويات', paragraphs: ['زيادة الإيرادات المتكررة.'] },
        { heading: 'التوسع في إنفاق العملاء', paragraphs: ['رفع متوسط الإنفاق من خلال خدمات وتجارب ذات قيمة أعلى.'] },
        { heading: 'التوسع في العقود المؤسسية', paragraphs: ['التوسع مع الجهات الحكومية والشركات الكبرى.'] },
        { heading: 'التوسع التقني', paragraphs: ['تعزيز المنصة وتطبيقات الذكاء الاصطناعي.'] },
        { heading: 'تشغيل الوجهات', paragraphs: ['التوسع في تشغيل خدمات الكونسيرج والضيافة داخل المشاريع الكبرى.'] },
      ],
    },
    {
      id: 'financial-forecasts',
      number: '16',
      title: 'التوقعات المالية',
      label: 'Financial Forecasts',
      chart: 'financialForecast',
      table: {
        headers: ['البند', '2027', '2028', '2029'],
        rows: [
          ['الإيرادات', '33 مليون ريال', '42.5 مليون ريال', '55 مليون ريال'],
          ['إيرادات العضويات', '3 مليون ريال', '6.5 مليون ريال', '12 مليون ريال'],
          ['صافي الربح', '3.5 مليون ريال', '6 مليون ريال', '9.5 مليون ريال'],
          ['هامش الربح الصافي', '10.6%', '14.1%', '17.3%'],
        ],
      },
      closing: 'الأهداف الاستراتيجية بحلول 2029',
      bullets: [
        'تجاوز 55 مليون ريال إيرادات سنوية.',
        'تحقيق صافي ربح يتجاوز 9.5 مليون ريال.',
        'بناء أكبر منصة سعودية لإدارة نمط الحياة والكونسيرج.',
        'تعزيز الإيرادات المتكررة من العضويات والعقود.',
        'التوسع في تشغيل خدمات الضيافة والوجهات.',
        'تطوير منصة تقنية مدعومة بالذكاء الاصطناعي تقدم تجربة استباقية وشخصية للعملاء.',
      ],
    },
    {
      id: 'investment-thesis',
      number: '17',
      title: 'مبررات الاستثمار (Investment Thesis)',
      label: 'Investment Thesis',
      paragraphs: [
        'تمثل شركة وصول كونسيرج فرصة استثمارية فريدة في السوق السعودي نظراً لتمتعها بمجموعة من المزايا التنافسية التي يصعب تكرارها أو بناؤها خلال فترة قصيرة.',
      ],
      blocks: [
        {
          heading: '1. الريادة السوقية',
          paragraphs: [
            'تُعد وصول كونسيرج أول شركة سعودية متخصصة في خدمات الكونسيرج وإدارة نمط الحياة، مع خبرة تشغيلية تتجاوز 15 عاماً في خدمة كبار الشخصيات والعملاء ذوي الملاءة المالية العالية.',
          ],
        },
        {
          heading: '2. قاعدة عملاء عالية القيمة',
          paragraphs: [
            'تمتلك الشركة قاعدة عملاء تضم عدداً من كبار الشخصيات ورجال الأعمال والتنفيذيين، مع متوسط إنفاق سنوي مرتفع مقارنة بمتوسط السوق.',
            'ويبلغ متوسط إنفاق أعلى عشرة عملاء أكثر من 1.8 مليون ريال سنوياً للعميل الواحد.',
          ],
        },
        {
          heading: '3. نموذج أعمال متنوع',
          paragraphs: ['تعتمد الشركة على ثلاثة محركات رئيسية للإيرادات:'],
          bullets: ['إدارة السفر', 'إدارة نمط الحياة', 'كونسيرج الأعمال'],
          after:
            'بالإضافة إلى العقود المؤسسية والعضويات والمنصة التقنية.\nويؤدي هذا التنوع إلى تقليل المخاطر التشغيلية وخلق فرص نمو متعددة.',
        },
        {
          heading: '4. منصة تقنية مملوكة',
          paragraphs: [
            'استثمرت الشركة أكثر من 2.1 مليون ريال في تطوير منصة تقنية متكاملة مملوكة بالكامل.',
            'وتشكل المنصة أساساً للتوسع المستقبلي وزيادة كفاءة التشغيل ورفع الربحية وتحويل جزء من الخدمات إلى نموذج رقمي قابل للتوسع.',
          ],
        },
        {
          heading: '5. عقود استراتيجية طويلة الأجل',
          paragraphs: [
            'تمتلك الشركة عقوداً قائمة مع جهات ومشاريع استراتيجية داخل المملكة، إضافة إلى فرص توسع كبيرة مع عدد من المؤسسات والوجهات الكبرى.',
          ],
        },
        {
          heading: '6. الاستفادة من رؤية المملكة 2030',
          paragraphs: [
            'تعمل الشركة في قطاعات تشهد نمواً استثنائياً مدعوماً برؤية المملكة 2030، بما في ذلك السياحة والضيافة والترفيه والطيران والمشاريع العملاقة وبرامج الولاء وتجربة العملاء، مما يوفر بيئة مواتية للنمو المستدام خلال السنوات القادمة.',
          ],
        },
      ],
    },
    {
      id: 'valuation-narrative',
      number: '18',
      title: 'مبررات التقييم المستقبلي (Valuation Narrative)',
      label: 'Valuation Narrative',
      paragraphs: [
        'تستند إمكانية وصول الشركة إلى تقييم يتجاوز 100 مليون ريال خلال السنوات القادمة إلى مجموعة من العوامل التشغيلية والاستراتيجية والمالية.',
      ],
      blocks: [
        {
          heading: 'أولاً: النمو المالي',
          paragraphs: [
            'حققت الشركة نمواً في الإيرادات من:',
            '6.9 مليون ريال في عام 2021',
            'إلى',
            '22.6 مليون ريال في عام 2025',
            'بمعدل نمو سنوي مركب يقارب 34.5%.',
            'وتستهدف الشركة الوصول إلى:',
            '55 مليون ريال إيرادات سنوية بحلول عام 2029.',
          ],
        },
        {
          heading: 'ثانياً: نمو الربحية',
          paragraphs: [
            'من المتوقع ارتفاع صافي الربح إلى:',
            '9.5 مليون ريال سنوياً بحلول عام 2029',
            'نتيجة:',
          ],
          bullets: [
            'التوسع في العقود المؤسسية',
            'زيادة إيرادات العضويات',
            'رفع كفاءة التشغيل',
            'زيادة الاعتماد على التقنية',
          ],
        },
        {
          heading: 'ثالثاً: الإيرادات المتكررة',
          paragraphs: [
            'تعمل الشركة على تحويل جزء متزايد من الإيرادات إلى إيرادات متكررة من خلال:',
          ],
          bullets: ['عضوية Premier', 'عضوية Prestige', 'عضوية Imperial'],
          after:
            'بالإضافة إلى العقود السنوية طويلة الأجل.\nويؤدي ذلك إلى رفع جودة الإيرادات وزيادة جاذبية الشركة للمستثمرين.',
        },
        {
          heading: 'رابعاً: قيمة المنصة التقنية',
          paragraphs: [
            'مع زيادة عدد المستخدمين والاعتماد على التطبيق وإطلاق خدمات الذكاء الاصطناعي، تتحول المنصة التقنية إلى أصل استراتيجي مستقل يمكن أن يضيف قيمة جوهرية إلى تقييم الشركة.',
          ],
        },
        {
          heading: 'خامساً: التوسع المؤسسي',
          paragraphs: ['تعمل الشركة على تطوير فرص نمو استراتيجية مع:'],
          bullets: [
            'المطار التنفيذي',
            'طيران الرياض',
            'STC',
            'وي بوك',
            'القدية',
            'سولتير',
            'مركز الفعاليات الوطني',
            'صندوق الفعاليات الاستثماري',
          ],
          after: 'وتمثل هذه الفرص محركات نمو إضافية غير مدرجة بالكامل ضمن التوقعات الأساسية.',
        },
        {
          heading: 'سيناريو التقييم المستهدف',
          paragraphs: ['في حال تحقيق الخطة التشغيلية والوصول إلى:'],
          bullets: [
            'إيرادات سنوية تتجاوز 55 مليون ريال',
            'صافي ربح يتجاوز 9.5 مليون ريال',
            'نمو العضويات والإيرادات المتكررة',
            'توسع المنصة التقنية',
          ],
          after:
            'فإن الشركة تصبح مؤهلة للوصول إلى تقييم يتجاوز 100 مليون ريال اعتماداً على مضاعفات الربحية والنمو المطبقة على الشركات المشابهة في قطاعات الخدمات الفاخرة والتقنية والضيافة.',
        },
      ],
    },
    {
      id: 'exit-strategy',
      number: '19',
      title: 'استراتيجية الخروج المحتملة (Exit Strategy)',
      label: 'Exit Strategy',
      paragraphs: ['تشمل الخيارات المستقبلية للمساهمين:'],
      bullets: [
        'بيع حصة استراتيجية لشريك تشغيلي أو استثماري.',
        'دخول صندوق استثمار مباشر.',
        'الاندماج مع منصة ضيافة أو خدمات فاخرة.',
        'إدخال مستثمر تقني لدعم التوسع الإقليمي.',
        'الإدراج في السوق الموازية (نمو) على المدى الطويل.',
      ],
      closing:
        'وتهدف الشركة إلى بناء كيان مؤسسي قابل للتوسع والاستثمار بما يحقق أعلى قيمة للمساهمين خلال السنوات القادمة.',
    },
    {
      id: 'conclusion',
      number: '20',
      title: 'الخلاصة',
      label: 'Final Insight',
      kind: 'closing',
      paragraphs: [
        'تمتلك وصول كونسيرج نموذج أعمال متكاملاً يجمع بين الخبرة التشغيلية الممتدة، والعقود المؤسسية، وقاعدة العملاء عالية القيمة، ومنصة تقنية مملوكة بالكامل للشركة ومطورة داخلياً، تُعد من أوائل المنصات المتخصصة في خدمات الكونسيرج وإدارة نمط الحياة في المنطقة.',
        'ومع النمو المتسارع لقطاع السياحة والضيافة والخدمات الفاخرة في المملكة العربية السعودية، وتوسع الشركة في التحول الرقمي وتنويع مصادر الإيرادات، تتمتع وصول كونسيرج بمقومات قوية لتحقيق نمو مستدام وتعزيز مكانتها كمنصة رائدة في قطاع الكونسيرج والخدمات الراقية خلال السنوات القادمة.',
      ],
    },
  ],
};

const englishSectionOverrides = {
  cover: {
    title: 'Cover',
    label: 'Cover',
  },
  'executive-summary': {
    title: 'Executive Summary',
    label: 'Executive Summary',
    paragraphs: [
      'WOSOL Concierge is the first Saudi company specialized in concierge services and lifestyle management. Founded in 2011 in Riyadh, the company has built a leading position over more than fifteen years in delivering premium personal and executive services to individuals, companies, government entities, and VIP clients.',
      'The company provides an integrated service ecosystem that combines travel management, lifestyle management, business concierge, and hospitality and destination service operations, supported by a fully owned technology platform that enables clients to access and manage services digitally.',
      'From 2027 to 2029, the company aims to transform from a traditional concierge services company into an integrated lifestyle and executive services platform powered by technology, combining personal services, corporate contracts, exclusive memberships, and specialized hospitality operations.',
    ],
  },
  'company-overview': {
    title: 'Company Overview',
    label: 'Company Overview',
    blocks: [
      {
        heading: 'General Information',
        facts: [
          ['Company Name', 'WOSOL Concierge'],
          ['Founding Year', '2011'],
          ['Headquarters', 'Riyadh – Kingdom of Saudi Arabia'],
          ['Primary Activity', 'Lifestyle management and concierge services'],
        ],
      },
      {
        heading: 'Business Model',
        bullets: [
          'Travel management',
          'Lifestyle management',
          'Business concierge',
          'Hospitality and customer experience operations',
          'Exclusive memberships',
          'Technology platform',
          'Supplier and partner commissions',
        ],
      },
    ],
  },
  'vision-mission': {
    title: 'Vision and Mission',
    label: 'Vision and Mission',
    blocks: [
      {
        heading: 'Vision',
        paragraphs: [
          'To become WOSOL, the globally leading platform that enables members to access services, experiences, and personalized solutions through a single point of contact anywhere in the world.',
        ],
      },
      {
        heading: 'Mission',
        paragraphs: [
          'To deliver an exceptional client experience by providing integrated solutions for lifestyle, travel, and business management with the highest standards of quality, privacy, and professionalism.',
        ],
      },
    ],
  },
  'market-opportunity': {
    title: 'Market Opportunity',
    label: 'Market Opportunity',
    paragraphs: [
      'The Kingdom of Saudi Arabia is witnessing accelerated growth in sectors related to lifestyle management, travel, hospitality, and premium services, supported by the objectives of Saudi Vision 2030',
    ],
    bullets: [
      'Luxury tourism',
      'Premium hospitality',
      'Private aviation',
      'Private banking',
      'Strategic projects',
      'Distinctive projects',
      'Private clubs',
      'Customer experience and concierge',
    ],
    closing:
      'This growth is increasing demand for lifestyle management, travel management, concierge services, and customer experience operations, giving WOSOL Concierge a strategic opportunity to expand and strengthen its presence in high-value sectors inside and outside the Kingdom.',
  },
  'business-sectors': {
    title: 'Core Business Segments',
    label: 'Core Business Segments',
    paragraphs: [
      'WOSOL Concierge relies on three core business segments that form the foundation of the company\'s growth and future strategy. The company provides integrated solutions for travel management, lifestyle management, and executive services for individuals, companies, and government entities through a unified operational and technology platform.',
    ],
    blocks: [
      {
        heading: 'Lifestyle Concierge',
        intro: 'Services include:',
        bullets: [
          'Restaurant reservations',
          'Personal shopping',
          'Personal care',
          'Private occasions',
          'Event bookings',
          'Gifts',
          'Personal assistant',
          'Club memberships',
          'Experiences and activities',
          'Designers and fashion',
          'Art and culture',
          'Family services',
          'Medical checkups',
          'Private adventures and trips',
          'Wellness resorts',
          'Personal trainer',
          'Beauty and hair care services',
        ],
      },
      {
        heading: 'Travel Management',
        intro: 'Services include:',
        bullets: [
          'Private aviation',
          'Airline tickets',
          'Helicopter',
          'Yachts',
          'Hotels and resorts',
          'Private villas',
          'Visas',
          'Meet-and-assist services',
          'Cruises',
          'Chalets',
          'Penthouses',
          'Chauffeur service',
          'Travel insurance',
          'Personal security',
        ],
      },
      {
        heading: 'Business Concierge',
        intro: 'Services include:',
        bullets: [
          'Property and real estate management',
          'Appointment and meeting management',
          'Business gifts',
          'Legal consultations',
          'Investment services',
          'Meeting rooms',
          'Conference and event organization',
          'Courses and training programs',
          'Translation and editing services',
        ],
      },
    ],
    audience: {
      title: 'Target Audience',
      body:
        'WOSOL Concierge targets high-net-worth individuals, VIPs, executives, business leaders, family offices, and distinguished companies and entities seeking professional management of lifestyle, travel, and business, with access to services and experiences designed according to the highest standards of quality and privacy.',
    },
  },
  'service-model': {
    title: 'Operational Framework',
    label: 'Operational Framework',
    paragraphs: ['WOSOL Concierge relies on a unified operating model built around:'],
    bullets: [
      'Dedicated relationship manager',
      'Approved supplier network',
      'WOSOL Concierge application',
      'Request and operations management system',
      'Personal preference management',
      '24/7 services',
    ],
    closing:
      'This model enables clients to access all services through a single point of contact covering travel, lifestyle management, and business concierge needs.',
  },
  memberships: {
    title: 'Memberships',
    label: 'Membership Model',
    blocks: [
      {
        heading: 'Prestige Membership',
        paragraphs: ['Designed for companies and institutions that wish to provide concierge services to their clients or employees.'],
      },
      {
        heading: 'Premier Membership',
        paragraphs: ['Designed for businesspeople, executives, and individuals seeking professional lifestyle management.'],
      },
      {
        heading: 'Imperial Membership',
        paragraphs: [
          'Designed for clients who require the highest levels of personal care, privacy, and access to exceptional services and experiences around the world.',
        ],
      },
    ],
    audienceCards: [
      {
        title: 'Strategic Objectives of Memberships',
        paragraphs: [
          'Memberships represent one of the company’s key future growth drivers and aim to:',
        ],
        bullets: [
          'Build recurring and sustainable revenue.',
          'Strengthen long-term relationships with members.',
          'Increase Customer Lifetime Value.',
          'Expand the member base across individuals and companies.',
          'Increase reliance on lifestyle, travel, and business services.',
          'Support future expansion and platform development.',
        ],
      },
      {
        title: 'Target Member',
        bullets: [
          'High-net-worth individuals.',
          'Senior executives and business owners.',
          'Families and family offices.',
          'Selected companies and institutions.',
          'Target average spend exceeding SAR 300,000 annually.',
        ],
      },
    ],
    closing:
      'This makes memberships one of the most important sources of sustainable growth and long-term revenue for WOSOL Concierge.',
  },
  'technology-platform': {
    title: 'Technology Platform',
    label: 'Technology Platform',
    lead: {
      title: 'A Leading Technology Platform in the Concierge Sector',
      body: 'The first specialized concierge and lifestyle management platform in the Middle East, developed internally and fully owned by the company. It includes the client application, operations management systems, client management, memberships, suppliers, and integrations with partners and service providers.',
    },
    blocks: [
      {
        heading: 'The platform provides:',
        bullets: [
          'Request submission and tracking.',
          'In-app live chat.',
          'Voice and video calling.',
          'Voice messages and sharing of images and files.',
          'Direct communication with the relationship manager.',
          'Digital wallet.',
          'Invoices and payments.',
          'Personal preference management.',
          'Family member management.',
          'Guest management.',
          'Staff and personal assistant management.',
          'Storage of passports, visas, and documents.',
          'Management of birthdays and important occasions.',
        ],
      },
      {
        heading: 'Future Development',
        bullets: [
          'AI-powered smart assistant.',
          'Proactive recommendations and services.',
          'Automation of operations and requests.',
          'Client behavior analysis.',
          'Prediction of future needs.',
          'Direct integrations with partners and service providers.',
        ],
      },
    ],
  },
  'competitive-advantages': {
    title: 'Competitive Advantages',
    label: 'Competitive Advantages',
    blocks: [
      { heading: 'First Saudi Concierge Company', paragraphs: ['Operational experience extending over more than fifteen years.'] },
      { heading: 'Exclusive Database', paragraphs: ['An integrated record of high-value client preferences.'] },
      { heading: 'Owned Technology Platform', paragraphs: ['Connected to modern operating systems and fully owned by the company.'] },
      { heading: 'Specialized Supplier Network', paragraphs: ['Strategic local and global relationships.'] },
      { heading: 'Corporate Operating Contracts', paragraphs: ['An active presence within strategic projects and destinations in the Kingdom.'] },
    ],
  },
  'historical-financial-performance': {
    title: 'Historical Financial Performance',
    label: 'Historical Financial Performance',
    table: {
      headers: ['Year', 'Revenue'],
      rows: [
        ['2021', 'SAR 6.9 million'],
        ['2022', 'SAR 11.4 million'],
        ['2023', 'SAR 15,080,638.08'],
        ['2024', 'SAR 15,307,189.05'],
        ['2025', 'SAR 22,607,141.25'],
      ],
    },
    closing: 'Compound annual growth rate: 34.5%.',
  },
  'financial-performance-2025': {
    title: '2025 Financial Performance',
    label: '2025 Financial Performance',
    metrics: [
      ['Revenue', 'SAR 22,607,141.25'],
      ['Net Profit', 'SAR 2,022,397'],
      ['Number of Individual Clients', '120'],
      ['Number of Corporate Clients', '5'],
      ['Number of Employees', '66'],
      ['Total Salaries', 'SAR 6,067,723'],
      ['Operating Expenses', 'SAR 1,579,606'],
    ],
  },
  'revenue-distribution-2025': {
    title: '2025 Revenue Distribution',
    label: 'Revenue Mix 2025',
    table: {
      headers: ['Segment', 'Revenue'],
      rows: [
        ['Individuals', 'SAR 15.26 million'],
        ['Corporate', 'SAR 6.49 million'],
        ['Government Entities', 'SAR 0.86 million'],
        ['Total', 'SAR 22.61 million'],
      ],
    },
  },
  'current-projects': {
    title: 'Current Projects',
    label: 'Current Projects',
    table: {
      headers: ['Project', 'Expected Annual Revenue'],
      rows: [
        ['KAFD', 'SAR 6 million'],
        ['Tameer', 'SAR 1.125 million'],
        ['Al Mamlaka', 'SAR 800 thousand'],
        ['Emergency Forces', 'SAR 1 million'],
        ['Walaa Plus', 'SAR 540 thousand'],
        ['Cityscape', 'SAR 500 thousand'],
      ],
    },
  },
  'strategic-opportunities': {
    title: 'Strategic Opportunities Under Negotiation',
    label: 'Strategic Opportunities',
    bullets: [
      'Executive Airport',
      'Riyadh Air',
      'STC Elite',
      'WeBook',
      'Qiddiya',
      'CORE Club',
      'National Events Center',
      'Events Investment Fund',
      'Albawani',
      'Solitaire',
    ],
  },
  'strategic-plan': {
    title: 'Strategic Plan 2027 – 2029',
    label: 'Strategic Plan 2027–2029',
    blocks: [
      { heading: 'Membership Expansion', paragraphs: ['Increase recurring revenue.'] },
      { heading: 'Expansion in Client Spending', paragraphs: ['Increase average spend through higher-value services and experiences.'] },
      { heading: 'Corporate Contract Expansion', paragraphs: ['Expand with government entities and major companies.'] },
      { heading: 'Technology Expansion', paragraphs: ['Enhance the platform and artificial intelligence applications.'] },
      { heading: 'Destination Operations', paragraphs: ['Expand concierge and hospitality service operations inside major projects.'] },
    ],
  },
  'financial-forecasts': {
    title: 'Financial Forecasts',
    label: 'Financial Forecasts',
    table: {
      headers: ['Item', '2027', '2028', '2029'],
      rows: [
        ['Revenue', 'SAR 33 million', 'SAR 42.5 million', 'SAR 55 million'],
        ['Membership Revenue', 'SAR 3 million', 'SAR 6.5 million', 'SAR 12 million'],
        ['Net Profit', 'SAR 3.5 million', 'SAR 6 million', 'SAR 9.5 million'],
        ['Net Profit Margin', '10.6%', '14.1%', '17.3%'],
      ],
    },
    closing: 'Strategic objectives by 2029',
    bullets: [
      'Exceed SAR 55 million in annual revenue.',
      'Achieve net profit exceeding SAR 9.5 million.',
      'Build the largest Saudi platform for lifestyle management and concierge.',
      'Strengthen recurring revenue from memberships and contracts.',
      'Expand hospitality and destination service operations.',
      'Develop an AI-powered technology platform that provides a proactive and personalized client experience.',
    ],
  },
  'investment-thesis': {
    title: 'Investment Thesis',
    label: 'Investment Thesis',
    paragraphs: [
      'WOSOL Concierge represents a unique investment opportunity in the Saudi market due to a set of competitive advantages that are difficult to replicate or build within a short period.',
    ],
    blocks: [
      {
        heading: '1. Market Leadership',
        paragraphs: [
          'WOSOL Concierge is the first Saudi company specialized in concierge services and lifestyle management, with more than 15 years of operational experience serving VIPs and high-net-worth clients.',
        ],
      },
      {
        heading: '2. High-Value Client Base',
        paragraphs: [
          'The company owns a client base that includes a number of VIPs, businesspeople, and executives, with high average annual spend compared with the market average.',
          'The average spend of the top ten clients exceeds SAR 1.8 million annually per client.',
        ],
      },
      {
        heading: '3. Diversified Business Model',
        paragraphs: ['The company relies on three main revenue engines:'],
        bullets: ['Travel management', 'Lifestyle management', 'Business concierge'],
        after:
          'In addition to corporate contracts, memberships, and the technology platform.\nThis diversification reduces operational risk and creates multiple growth opportunities.',
      },
      {
        heading: '4. Owned Technology Platform',
        paragraphs: [
          'The company has invested more than SAR 2.1 million in developing a fully owned integrated technology platform.',
          'The platform forms the basis for future expansion, improved operational efficiency, higher profitability, and the conversion of part of the services into a scalable digital model.',
        ],
      },
      {
        heading: '5. Long-Term Strategic Contracts',
        paragraphs: [
          'The company has existing contracts with strategic entities and projects inside the Kingdom, in addition to significant expansion opportunities with a number of major institutions and destinations.',
        ],
      },
      {
        heading: '6. Benefit from Saudi Vision 2030',
        paragraphs: [
          'The company operates in sectors witnessing exceptional growth supported by Saudi Vision 2030, including tourism, hospitality, entertainment, aviation, giga-projects, loyalty programs, and customer experience, creating a favorable environment for sustainable growth over the coming years.',
        ],
      },
    ],
  },
  'valuation-narrative': {
    title: 'Valuation Narrative',
    label: 'Valuation Narrative',
    paragraphs: [
      'The company\'s potential to reach a valuation exceeding SAR 100 million in the coming years is based on a set of operational, strategic, and financial factors.',
    ],
    blocks: [
      {
        heading: 'First: Financial Growth',
        paragraphs: [
          'The company achieved revenue growth from:',
          'SAR 6.9 million in 2021',
          'to',
          'SAR 22.6 million in 2025',
          'with a compound annual growth rate of approximately 34.5%.',
          'The company targets reaching:',
          'SAR 55 million in annual revenue by 2029.',
        ],
      },
      {
        heading: 'Second: Profitability Growth',
        paragraphs: [
          'Net profit is expected to rise to:',
          'SAR 9.5 million annually by 2029',
          'as a result of:',
        ],
        bullets: [
          'Expansion in corporate contracts',
          'Growth in membership revenue',
          'Improved operational efficiency',
          'Greater reliance on technology',
        ],
      },
      {
        heading: 'Third: Recurring Revenue',
        paragraphs: ['The company is working to convert a growing portion of revenue into recurring revenue through:'],
        bullets: ['Premier Membership', 'Prestige Membership', 'Imperial Membership'],
        after:
          'In addition to long-term annual contracts.\nThis improves revenue quality and increases the company\'s attractiveness to investors.',
      },
      {
        heading: 'Fourth: Technology Platform Value',
        paragraphs: [
          'As the number of users increases, reliance on the application grows, and AI services are launched, the technology platform becomes an independent strategic asset that can add significant value to the company valuation.',
        ],
      },
      {
        heading: 'Fifth: Corporate Expansion',
        paragraphs: ['The company is developing strategic growth opportunities with:'],
        bullets: [
          'Executive Airport',
          'Riyadh Air',
          'STC',
          'WeBook',
          'Qiddiya',
          'Solitaire',
          'National Events Center',
          'Events Investment Fund',
        ],
        after: 'These opportunities represent additional growth drivers that are not fully included in the base forecasts.',
      },
      {
        heading: 'Target Valuation Scenario',
        paragraphs: ['If the operating plan is achieved and the company reaches:'],
        bullets: [
          'Annual revenue exceeding SAR 55 million',
          'Net profit exceeding SAR 9.5 million',
          'Growth in memberships and recurring revenue',
          'Expansion of the technology platform',
        ],
        after:
          'The company becomes qualified to reach a valuation exceeding SAR 100 million based on profitability and growth multiples applied to comparable companies in luxury services, technology, and hospitality sectors.',
      },
    ],
  },
  'exit-strategy': {
    title: 'Potential Exit Strategy',
    label: 'Exit Strategy',
    paragraphs: ['Future options for shareholders include:'],
    bullets: [
      'Selling a strategic stake to an operating or investment partner.',
      'Introducing a private equity fund.',
      'Merging with a hospitality or luxury services platform.',
      'Introducing a technology investor to support regional expansion.',
      'Listing on the Parallel Market (Nomu) over the long term.',
    ],
    closing:
      'The company aims to build a scalable and investable institutional entity that maximizes shareholder value over the coming years.',
  },
  conclusion: {
    title: 'Conclusion',
    label: 'Final Insight',
    paragraphs: [
      'WOSOL Concierge has an integrated business model that combines extended operational experience, corporate contracts, a high-value client base, and a fully owned technology platform developed internally, positioning it among the first specialized platforms for concierge and lifestyle management services in the region.',
      'With the rapid growth of tourism, hospitality, and premium services in the Kingdom of Saudi Arabia, alongside the company’s expansion in digital transformation and revenue diversification, WOSOL Concierge has strong fundamentals to achieve sustainable growth and strengthen its position as a leading platform in the concierge and premium services sector over the coming years.',
    ],
  },
};

export const businessPlanEn = {
  title: 'WOSOL Concierge',
  subtitle: ['Business Plan & Financial Forecast'],
  meta: 'Business Plan · Confidential · 2027–2029',
  sections: businessPlan.sections.map((section) => ({
    ...section,
    ...englishSectionOverrides[section.id],
  })),
};
