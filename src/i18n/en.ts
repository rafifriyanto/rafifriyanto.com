import type { Dict } from './id';

export const en: Dict = {
  meta: {
    lang: 'en',
    title: 'Rafif Riyanto — Automation & AI for Business',
    description:
      'I build bots, scrapers, and AI workflows that replace repetitive manual work. Freelance automation engineer, based in Indonesia.',
    ogAlt: 'Rafif Riyanto — automation & AI engineer',
  },

  nav: {
    links: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#process', label: 'Process' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#about', label: 'About' },
    ],
    cta: 'Start a project',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skip: 'Skip to main content',
    langLabel: 'Change language',
  },

  hero: {
    eyebrow: 'Stop doing it by hand',
    title: { lead: 'Let The', accent: 'System', tail: 'Do It' },
    lede: 'Bots, scrapers, and AI workflows for teams whose data grows faster than their headcount.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'See the work',
    scroll: 'scroll to explore',
    terminal: {
      title: 'pipeline.log',
      status: 'running',
      lines: [
        { time: '09:00:02', text: 'scraper: 1,248 products pulled from 3 sources', tone: 'ok' },
        { time: '09:00:19', text: 'dedup: dropped 84 duplicates → 1,164 clean rows', tone: 'ok' },
        { time: '09:00:21', text: 'competitor price fell 12% across 7 SKUs', tone: 'warn' },
        { time: '09:00:22', text: 'telegram: alert delivered to pricing team', tone: 'ok' },
        { time: '09:00:23', text: 'sheets: daily report updated', tone: 'ok' },
      ],
      footer: 'Runs itself every morning. Not one manual click.',
    },
  },

  values: [
    { k: 'Runs 24/7', v: 'With nobody watching over it' },
    { k: 'Full handover', v: 'The code and the access are yours' },
    { k: 'Fixed price', v: 'Agreed before the first line is written' },
  ],

  stack: {
    label: 'What I build with',
    items: [
      'Python',
      'Playwright',
      'Telegram Bot API',
      'Claude API',
      'PostgreSQL',
      'Google Sheets',
      'Docker',
      'Cron / launchd',
      'REST & Webhooks',
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'Three things I build',
    lede: 'All of it starts from the same question: which work in your business genuinely no longer needs a human touching it?',
    items: [
      {
        no: '01',
        title: 'Bots & Automation',
        summary:
          'Telegram or WhatsApp bots that run around the clock — watching prices, stock, or queues, and pinging you the moment something needs your attention.',
        points: [
          'Real-time alerts from any API',
          'Chat-based commands, not another dashboard to learn',
          'Scheduled jobs: daily reports, weekly digests, reminders',
        ],
      },
      {
        no: '02',
        title: 'Scraping & Data',
        summary:
          'Pull data out of catalogues, marketplaces, or competitor sites. It comes out in a shape you can actually use, not raw HTML.',
        points: [
          'Paginated crawling with polite rate limiting',
          'Clean output to CSV, JSON, Google Sheets, or a database',
          'Resilient — broken items get skipped, the run never dies',
        ],
      },
      {
        no: '03',
        title: 'AI Workflows',
        summary:
          'An LLM wired into how the work actually happens, not a chatbot bolted onto the corner of a screen.',
        points: [
          'Automatic triage: category, urgency, sentiment',
          'Validated structured output, not free-form text',
          'Draft replies ready to send, a human just approves',
        ],
      },
    ],
  },

  work: {
    eyebrow: 'Work',
    title: 'Open demos you can read',
    lede: 'These are public demos I wrote to show how I work — not client projects. You can read the code before deciding anything.',
    openLabel: 'See detail',
    items: [
      {
        tag: 'Bots & Automation',
        title: 'Price Alert Bot',
        problem:
          'Watching prices by hand is exhausting and always late. The moment that mattered passes while you are looking somewhere else.',
        solution:
          'A Telegram bot that stores per-user alerts, polls prices from Binance’s public API, and messages you the instant a threshold is crossed. One-shot alerts clear themselves after firing.',
        highlights: ['Python', 'Telegram Bot API', 'No heavy framework', 'Pure logic split from I/O'],
      },
      {
        tag: 'Scraping & Data',
        title: 'Product Catalogue Scraper',
        problem:
          'Competitor catalogue data only exists on a web page. Copying it by hand just burns your team’s hours.',
        solution:
          'A scraper that walks paginated catalogues, repairs mangled price encoding, drops duplicates, then emits CSV and JSON plus a summary you can forward to a client as-is.',
        highlights: ['Polite rate limiting', 'Deduplication', 'CSV + JSON', 'Automatic summary'],
      },
      {
        tag: 'AI Workflows',
        title: 'Customer Support Triage',
        problem:
          'Support inboxes arrive as one undifferentiated pile. Sorting it takes longer than answering it.',
        solution:
          'Every inbound message is read once by the model and comes back as a structured object — category, sentiment, urgency, a one-line summary, plus a draft reply. An offline heuristic mode lets you test it without spending on API calls.',
        highlights: ['Claude API', 'Pydantic schema', 'Structured output', 'Offline mode'],
      },
    ],
  },

  process: {
    eyebrow: 'Process',
    title: 'Four steps, no drama',
    lede: 'You always know where the project stands and what happens next.',
    steps: [
      {
        no: '01',
        title: 'First conversation',
        body: 'Tell me which work drains you most. I check whether it is genuinely worth automating — sometimes the answer is no, and I will say so.',
        meta: '30 minutes · free',
      },
      {
        no: '02',
        title: 'Scope & price',
        body: 'You get it in writing: what gets built, what does not, how long, and what it costs. Fixed price, not hourly.',
        meta: '1–2 days',
      },
      {
        no: '03',
        title: 'Build & demo',
        body: 'I ship something working early so you can try it, not just read a progress report. Revisions happen here.',
        meta: '1–3 weeks',
      },
      {
        no: '04',
        title: 'Handover',
        body: 'The code, the docs, and the access are entirely yours. Includes 30 days of bug fixes at no extra cost.',
        meta: '30-day warranty',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Estimate your project',
    lede: 'Every project differs. This calculator gives you a first bearing — the real number comes out of a conversation.',
    baseLabel: 'Pick a starting point',
    addonLabel: 'Add-ons',
    sourceLabel: 'Number of data sources or flows',
    sourceHint: 'How many distinct sites, APIs, or processes need handling?',
    includedLabel: 'Included in every package',
    included: [
      'The source code is yours',
      'Documentation on how to run it',
      'Error handling on every network call',
      '30-day bug-fix warranty',
    ],
    bases: {
      bot: { title: 'Bots & Automation', desc: 'A chat bot or scheduled job' },
      scraping: { title: 'Scraping & Data', desc: 'Structured data extraction' },
      ai: { title: 'AI Workflows', desc: 'An LLM inside real work' },
    },
    addons: {
      dashboard: { title: 'Dashboard & reporting', desc: 'A visual view of results, not just files' },
      database: { title: 'Database integration', desc: 'PostgreSQL, Google Sheets, or Airtable' },
      hosting: { title: 'Deploy & run 24/7', desc: 'Server, scheduling, and monitoring' },
      antibot: { title: 'Hard-to-reach sites', desc: 'Headless browser, proxies, session handling' },
      multichannel: { title: 'Multiple channels', desc: 'Telegram, WhatsApp, and email at once' },
      handover: { title: 'Handover session', desc: 'A live walkthrough for your team' },
    },
    totalLabel: 'Estimated from',
    retainerLabel: 'Optional — monthly maintenance',
    retainerDesc: 'Monitoring, repairs when a source changes, and small adjustments.',
    retainerSuffix: '/month',
    disclaimer:
      'All figures are estimates and non-binding. I put together the final quote after our first conversation.',
    cta: 'Request a quote',
  },

  about: {
    eyebrow: 'About',
    title: 'The person behind the automation',
    greeting: 'Hi,',
    quote: 'Good automation is boring. It runs every day, and you stop thinking about it.',
    body: [
      'My name is Rafif Riyanto. I build automation and tooling — bots, scrapers, AI workflows — for people who have run out of patience doing the same thing over and over.',
      'Most of how I work was shaped by building trading systems: tools that have to run unattended, survive failure, and still be correct when nobody is watching. That is the standard I bring to client work.',
      'I would rather hand you something you can run and understand yourself than a black box that keeps you dependent on me.',
    ],
    principlesLabel: 'How I work',
    principles: [
      { title: 'The code is yours', body: 'No locked licences, no mandatory monthly fee.' },
      { title: 'Fixed price up front', body: 'You know the total before I write the first line.' },
      { title: 'Fail loudly', body: 'A system that goes quiet when it breaks is worse than no system.' },
      { title: 'Honest about fit', body: 'If automation is not the answer, I say so early.' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Ready for the next step?',
    lede: 'Tell me which work eats the most of your team’s time. I reply within one business day.',
    directLabel: 'Or go direct',
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      budget: 'Rough budget',
      budgetOptions: ['Not sure yet', 'Under Rp 5M', 'Rp 5–15M', 'Rp 15–40M', 'Above Rp 40M'],
      message: 'What would you like automated?',
      messagePlaceholder:
        'For example: every morning my team copies prices from 4 competitor sites into a spreadsheet, and it takes 2 hours.',
      optional: 'optional',
      required: 'required',
      consent:
        'I use what you send only to answer this enquiry. It is not shared with anyone else.',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Sent. Thank you — I will get back to you shortly.',
      error: 'Could not send. Please email me directly using the address below.',
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions that come up often',
    items: [
      {
        q: 'How long does it take?',
        a: 'A straightforward bot or scraper is usually 1–2 weeks. An AI workflow touching several systems can run 3–4 weeks. The firm estimate goes into the scope document before we start.',
      },
      {
        q: 'What do I need to have ready?',
        a: 'Just an explanation of the process you want automated and a real example of it — a screenshot, a file, or a link to the page. Access to the systems involved is only needed once building starts.',
      },
      {
        q: 'What if the source site changes and it breaks?',
        a: 'It can, and that is normal — every scraper depends on the structure of the page it reads. That is why each project carries a 30-day fix warranty, with optional monthly maintenance for the long run.',
      },
      {
        q: 'Do I own the code and the data?',
        a: 'Entirely. You receive the source code, the documentation, and every credential. I keep no copy of your data once the project closes.',
      },
      {
        q: 'Why is there no mandatory monthly fee?',
        a: 'Because you own the code. Monthly maintenance is a choice, not the condition for keeping your system alive.',
      },
      {
        q: 'Can you work with our existing team or developer?',
        a: 'Yes. I usually hand over modules with clean boundaries so your team can keep building on them, with a walkthrough session if it helps.',
      },
      {
        q: 'Is scraping legal?',
        a: 'It depends on the source and the purpose. I only work with publicly accessible data, respect rate limits, and turn down projects that clearly breach terms of service or touch personal data. If there is any doubt, I raise it before we agree on anything.',
      },
    ],
  },

  footer: {
    tagline: 'Automation, scraping, and AI workflows. Built from Indonesia.',
    navLabel: 'Pages',
    contactLabel: 'Contact',
    socialLabel: 'Links',
    rights: 'All rights reserved',
    built: 'Built with Astro. No tracking cookies.',
  },
};
