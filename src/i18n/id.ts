export const id = {
  meta: {
    lang: 'id',
    title: 'Rafif Riyanto — Automasi & AI untuk Bisnis',
    description:
      'Saya bangun bot, scraper, dan alur kerja AI yang menggantikan pekerjaan manual berulang. Freelance automation engineer, berbasis di Indonesia.',
    ogAlt: 'Rafif Riyanto — automation & AI engineer',
  },

  nav: {
    // Anchors stay English in both languages — they are never shown to a
    // reader, and identical ids keep the two dictionaries from drifting.
    links: [
      { href: '#services', label: 'Layanan' },
      { href: '#work', label: 'Kerjaan' },
      { href: '#process', label: 'Proses' },
      { href: '#pricing', label: 'Harga' },
      { href: '#about', label: 'Tentang' },
    ],
    cta: 'Mulai Proyek',
    menuOpen: 'Buka menu',
    menuClose: 'Tutup menu',
    skip: 'Lompat ke konten utama',
    langLabel: 'Ganti bahasa',
  },

  hero: {
    eyebrow: 'Berhenti kerjain yang sama tiap hari',
    // Split so the middle word can be set in the editorial italic.
    title: { lead: 'Biar', accent: 'Sistem', tail: 'Yang Ngerjain' },
    lede: 'Bot, scraper, dan alur kerja AI untuk bisnis yang datanya tumbuh lebih cepat daripada timnya.',
    ctaPrimary: 'Mulai Proyek',
    ctaSecondary: 'Lihat kerjaan',
    scroll: 'gulir untuk lanjut',
    terminal: {
      title: 'pipeline.log',
      status: 'berjalan',
      lines: [
        { time: '09:00:02', text: 'scraper: 1.248 produk diambil dari 3 sumber', tone: 'ok' },
        { time: '09:00:19', text: 'dedup: 84 duplikat dibuang → 1.164 baris bersih', tone: 'ok' },
        { time: '09:00:21', text: 'harga kompetitor turun 12% di 7 SKU', tone: 'warn' },
        { time: '09:00:22', text: 'telegram: notifikasi terkirim ke tim pricing', tone: 'ok' },
        { time: '09:00:23', text: 'sheets: laporan harian diperbarui', tone: 'ok' },
      ],
      footer: 'Dijalankan otomatis tiap pagi. Tanpa satu pun klik manual.',
    },
  },

  // Sits directly under the hero. Answers "why you" before any scrolling.
  values: [
    { k: 'Jalan 24/7', v: 'Tanpa perlu diawasi siapa pun' },
    { k: 'Serah terima penuh', v: 'Kode dan akses jadi milik kamu' },
    { k: 'Harga tetap', v: 'Disepakati sebelum baris pertama ditulis' },
  ],

  stack: {
    label: 'Yang saya pakai',
    items: [
      'Python',
      'Playwright',
      'Telegram Bot API',
      'Claude API',
      'PostgreSQL',
      'Google Sheets',
      'Docker',
      'Cron / launchd',
      'REST & Webhook',
    ],
  },

  services: {
    eyebrow: 'Layanan',
    title: 'Tiga hal yang saya bangun',
    lede: 'Semuanya berangkat dari satu pertanyaan yang sama: pekerjaan mana di bisnis kamu yang sebenarnya nggak perlu disentuh manusia lagi?',
    items: [
      {
        no: '01',
        title: 'Bot & Automasi',
        summary:
          'Bot Telegram atau WhatsApp yang jalan 24/7 — pantau harga, stok, atau antrean, lalu kirim notifikasi begitu ada yang perlu kamu tahu.',
        points: [
          'Notifikasi real-time dari API mana pun',
          'Perintah berbasis chat, bukan dashboard baru yang harus dipelajari',
          'Tugas terjadwal: laporan harian, rekap mingguan, pengingat',
        ],
      },
      {
        no: '02',
        title: 'Scraping & Data',
        summary:
          'Ambil data dari katalog, marketplace, atau situs kompetitor. Keluar dalam bentuk yang langsung bisa dipakai, bukan HTML mentah.',
        points: [
          'Crawling terpaginasi dengan rate-limit yang sopan',
          'Output rapi ke CSV, JSON, Google Sheets, atau database',
          'Tahan banting — item rusak dilewati, proses nggak ikut mati',
        ],
      },
      {
        no: '03',
        title: 'Alur Kerja AI',
        summary:
          'LLM yang benar-benar nyambung ke proses kerja, bukan sekadar chatbot nempel di pojok layar.',
        points: [
          'Klasifikasi & triase otomatis: kategori, urgensi, sentimen',
          'Output terstruktur yang tervalidasi, bukan teks bebas',
          'Draf balasan siap kirim, manusia tinggal menyetujui',
        ],
      },
    ],
  },

  work: {
    eyebrow: 'Kerjaan',
    title: 'Demo terbuka, kodenya bisa dibaca',
    lede: 'Ini demo publik yang saya tulis sendiri untuk menunjukkan cara kerja saya — bukan proyek klien. Kodenya bisa kamu baca sebelum memutuskan apa pun.',
    openLabel: 'Lihat detail',
    items: [
      {
        tag: 'Bot & Automasi',
        title: 'Bot Notifikasi Harga',
        problem:
          'Memantau harga secara manual itu melelahkan dan selalu telat. Momen yang penting justru lewat saat kamu lagi nggak lihat layar.',
        solution:
          'Bot Telegram yang menyimpan alert per pengguna, memantau harga lewat API publik Binance, dan mengirim pesan tepat saat ambang batas terlampaui. Alert sekali pakai otomatis bersih setelah terpicu.',
        highlights: ['Python', 'Telegram Bot API', 'Tanpa framework berat', 'Logika murni terpisah dari I/O'],
      },
      {
        tag: 'Scraping & Data',
        title: 'Scraper Katalog Produk',
        problem:
          'Data katalog kompetitor cuma ada di halaman web. Menyalinnya manual sama saja membakar jam kerja tim.',
        solution:
          'Scraper yang menelusuri katalog terpaginasi, membersihkan harga yang encoding-nya berantakan, membuang duplikat, lalu menghasilkan CSV dan JSON plus ringkasan yang bisa langsung dikirim ke klien.',
        highlights: ['Rate-limit sopan', 'Deduplikasi', 'CSV + JSON', 'Ringkasan otomatis'],
      },
      {
        tag: 'Alur Kerja AI',
        title: 'Triase Dukungan Pelanggan',
        problem:
          'Inbox dukungan datang campur aduk. Menyortirnya lebih makan waktu daripada menjawabnya.',
        solution:
          'Setiap pesan masuk dibaca sekali oleh model dan keluar sebagai objek terstruktur — kategori, sentimen, urgensi, ringkasan satu baris, plus draf balasan. Ada mode offline berbasis heuristik supaya bisa diuji tanpa biaya API.',
        highlights: ['Claude API', 'Skema Pydantic', 'Output terstruktur', 'Mode offline'],
      },
    ],
  },

  process: {
    eyebrow: 'Proses',
    title: 'Empat langkah, tanpa drama',
    lede: 'Kamu selalu tahu posisi proyek ada di mana dan apa yang terjadi berikutnya.',
    steps: [
      {
        no: '01',
        title: 'Obrolan awal',
        body: 'Ceritakan pekerjaan yang paling bikin capek. Saya cek apakah itu memang layak diotomatiskan — kadang jawabannya tidak, dan saya akan bilang.',
        meta: '30 menit · gratis',
      },
      {
        no: '02',
        title: 'Ruang lingkup & harga',
        body: 'Kamu dapat rincian tertulis: apa yang dibangun, apa yang tidak, berapa lama, dan berapa biayanya. Harga tetap, bukan per jam.',
        meta: '1–2 hari',
      },
      {
        no: '03',
        title: 'Bangun & demo',
        body: 'Saya kirim versi jalan lebih awal supaya kamu bisa mencoba, bukan cuma membaca laporan progres. Revisi masuk di tahap ini.',
        meta: '1–3 minggu',
      },
      {
        no: '04',
        title: 'Serah terima',
        body: 'Kode, dokumentasi, dan akses jadi milik kamu sepenuhnya. Termasuk 30 hari perbaikan bug tanpa biaya tambahan.',
        meta: 'garansi 30 hari',
      },
    ],
  },

  pricing: {
    eyebrow: 'Harga',
    title: 'Perkiraan biaya proyek kamu',
    lede: 'Setiap proyek beda. Kalkulator ini memberi gambaran awal — angka pastinya keluar setelah kita ngobrol.',
    baseLabel: 'Pilih titik awal',
    addonLabel: 'Tambahan',
    sourceLabel: 'Jumlah sumber data atau alur',
    sourceHint: 'Berapa situs, API, atau proses berbeda yang perlu ditangani?',
    includedLabel: 'Sudah termasuk di semua paket',
    included: [
      'Kode sumber jadi milik kamu',
      'Dokumentasi cara menjalankan',
      'Penanganan error di setiap panggilan jaringan',
      'Garansi perbaikan bug 30 hari',
    ],
    bases: {
      bot: { title: 'Bot & Automasi', desc: 'Bot chat atau tugas terjadwal' },
      scraping: { title: 'Scraping & Data', desc: 'Ekstraksi data terstruktur' },
      ai: { title: 'Alur Kerja AI', desc: 'LLM di dalam proses kerja nyata' },
    },
    addons: {
      dashboard: { title: 'Dashboard & laporan', desc: 'Tampilan visual hasil, bukan cuma file' },
      database: { title: 'Integrasi database', desc: 'PostgreSQL, Google Sheets, atau Airtable' },
      hosting: { title: 'Deploy & jalan 24/7', desc: 'Server, penjadwalan, dan pemantauan' },
      antibot: { title: 'Situs yang sulit diakses', desc: 'Browser headless, proxy, penanganan sesi' },
      multichannel: { title: 'Banyak kanal', desc: 'Telegram, WhatsApp, dan email sekaligus' },
      handover: { title: 'Sesi serah terima', desc: 'Panduan langsung untuk tim kamu' },
    },
    totalLabel: 'Perkiraan mulai dari',
    retainerLabel: 'Opsional — pemeliharaan bulanan',
    retainerDesc: 'Pemantauan, perbaikan saat sumber data berubah, dan penyesuaian kecil.',
    retainerSuffix: '/bulan',
    disclaimer:
      'Semua angka bersifat perkiraan dan belum mengikat. Penawaran final saya susun setelah obrolan awal.',
    cta: 'Minta penawaran',
  },

  about: {
    eyebrow: 'Tentang',
    title: 'Orang di balik automasinya',
    greeting: 'Halo,',
    quote: 'Automasi yang bagus itu membosankan. Dia jalan tiap hari, dan kamu berhenti memikirkannya.',
    body: [
      'Nama saya Rafif Riyanto. Saya membangun automasi dan tooling — bot, scraper, dan alur kerja AI — untuk orang yang sudah kehabisan kesabaran mengerjakan hal yang sama berulang kali.',
      'Sebagian besar cara kerja saya terbentuk dari membangun sistem trading: alat yang harus jalan sendiri, tahan gagal, dan tetap benar saat tidak ada yang mengawasi. Standar itu yang saya bawa ke setiap proyek klien.',
      'Saya lebih suka menyerahkan sesuatu yang bisa kamu jalankan dan pahami sendiri daripada kotak hitam yang bikin kamu bergantung terus ke saya.',
    ],
    principlesLabel: 'Cara saya kerja',
    principles: [
      { title: 'Kode jadi milik kamu', body: 'Tanpa lisensi terkunci, tanpa biaya bulanan wajib.' },
      { title: 'Harga tetap di depan', body: 'Kamu tahu total biaya sebelum saya menulis baris pertama.' },
      { title: 'Gagal dengan berisik', body: 'Sistem yang diam saat rusak itu lebih berbahaya daripada tidak ada sistem.' },
      { title: 'Jujur soal kelayakan', body: 'Kalau automasi bukan jawabannya, saya bilang di awal.' },
    ],
  },

  contact: {
    eyebrow: 'Kontak',
    title: 'Siap ke langkah berikutnya?',
    lede: 'Ceritakan pekerjaan yang paling menyita waktu tim kamu. Saya balas dalam 1×24 jam kerja.',
    directLabel: 'Atau langsung saja',
    form: {
      name: 'Nama',
      email: 'Email',
      company: 'Perusahaan',
      budget: 'Perkiraan anggaran',
      budgetOptions: ['Belum tahu', 'Di bawah Rp 5 juta', 'Rp 5–15 juta', 'Rp 15–40 juta', 'Di atas Rp 40 juta'],
      message: 'Pekerjaan apa yang mau diotomatiskan?',
      messagePlaceholder:
        'Contoh: tiap pagi tim saya menyalin harga dari 4 situs kompetitor ke spreadsheet, makan waktu 2 jam.',
      optional: 'opsional',
      required: 'wajib',
      consent:
        'Data yang kamu kirim hanya saya pakai untuk membalas pertanyaan ini. Tidak dibagikan ke pihak lain.',
      submit: 'Kirim pesan',
      sending: 'Mengirim…',
      success: 'Terkirim. Terima kasih — saya akan segera membalas.',
      error: 'Gagal terkirim. Coba kirim langsung lewat email di bawah.',
    },
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang sering muncul',
    items: [
      {
        q: 'Berapa lama sampai jadi?',
        a: 'Bot atau scraper sederhana biasanya 1–2 minggu. Alur kerja AI yang menyentuh banyak sistem bisa 3–4 minggu. Estimasi pastinya masuk di dokumen ruang lingkup sebelum kita mulai.',
      },
      {
        q: 'Saya perlu siapkan apa untuk mulai?',
        a: 'Cukup penjelasan soal proses yang mau diotomatiskan dan contoh nyatanya — screenshot, file, atau tautan halaman. Akses ke sistem terkait baru dibutuhkan di tahap pembangunan.',
      },
      {
        q: 'Kalau situs sumbernya berubah, sistemnya rusak?',
        a: 'Bisa, dan itu wajar — semua scraper bergantung pada struktur halaman sumbernya. Karena itu setiap proyek dapat garansi perbaikan 30 hari, dan ada opsi pemeliharaan bulanan untuk jangka panjang.',
      },
      {
        q: 'Apakah kode dan datanya jadi milik saya?',
        a: 'Ya, sepenuhnya. Kamu terima kode sumber, dokumentasi, dan semua kredensial. Saya tidak menyimpan salinan data kamu setelah proyek selesai.',
      },
      {
        q: 'Kenapa nggak ada biaya bulanan wajib?',
        a: 'Karena kamu memiliki kodenya. Pemeliharaan bulanan itu pilihan, bukan syarat supaya sistemnya tetap hidup.',
      },
      {
        q: 'Bisa kerja dengan tim atau developer yang sudah ada?',
        a: 'Bisa. Saya biasa menyerahkan modul yang rapi batasannya supaya tim kamu bisa lanjut mengembangkan sendiri, lengkap dengan sesi serah terima kalau diperlukan.',
      },
      {
        q: 'Apakah scraping itu legal?',
        a: 'Tergantung sumber dan tujuannya. Saya hanya mengerjakan data yang dapat diakses publik, menghormati rate-limit, dan menolak proyek yang jelas melanggar ketentuan layanan atau menyentuh data pribadi. Kalau ada keraguan, saya sampaikan sebelum kita sepakat.',
      },
    ],
  },

  footer: {
    tagline: 'Automasi, scraping, dan alur kerja AI. Dikerjakan dari Indonesia.',
    navLabel: 'Halaman',
    contactLabel: 'Kontak',
    socialLabel: 'Tautan',
    rights: 'Hak cipta',
    built: 'Dibangun dengan Astro. Tanpa cookie pelacak.',
  },
};

/**
 * The Indonesian dictionary is the source of truth for shape. `en` is typed as
 * `Dict`, so a missing or renamed key fails the build instead of silently
 * rendering `undefined`.
 */
export type Dict = typeof id;
