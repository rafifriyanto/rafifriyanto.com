# rafifriyanto.com

Situs jasa automation & AI. Astro, statis, dua bahasa (ID default, EN di `/en/`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run shoot    # screenshot tiap section di 1440 / 768 / 375
node scripts/smoke.mjs http://localhost:4321   # nav, FAQ, ganti bahasa, validasi form
```

## Arah desain

**Editorial gelap, asimetris.** Tiga huruf, masing-masing satu tugas — dan ini
aturan yang paling gampang dilanggar tanpa sadar:

| Huruf | Tugas | Jangan |
|---|---|---|
| Space Grotesk | judul, UI, body | — |
| JetBrains Mono | label, indeks, angka, harga, status | jangan jadi body |
| Instrument Serif *italic* | **satu** kata aksen di hero, **satu** pull quote per bagian | jangan jadi body, jangan lebih dari itu |

Serif italik itu satu-satunya alasan halaman ini kelihatan dirancang, bukan
digenerate. Begitu dia dipakai di mana-mana, efeknya hilang.

Aturan lain yang menahan tampilan supaya tidak balik jadi template:

- **Header bagian selalu asimetris** — indeks di kolom kiri, judul di tengah,
  lede di kanan ([`SectionHead.astro`](src/components/section/SectionHead.astro)).
  Menumpuk ketiganya di satu blok adalah persis yang bikin semua bagian terasa sama.
- **Copper hanya untuk keputusan** — CTA utama, status aktif, indeks bagian, kata
  aksen. Bukan untuk dekorasi.
- **Grid tidak pernah rata** — bento layanan 1,12fr / 0,88fr, bukan kolom sama besar.

## ⚠️ Masih placeholder

Semua ada di [`src/config.ts`](src/config.ts). Email dan WhatsApp sudah asli;
sisanya belum:

| Konstanta | Isi sekarang | Perlu |
|---|---|---|
| `CONTACT.email` | `rafifriyanto@gmail.com` | ✅ sudah benar |
| `CONTACT.whatsapp` | `6281386100409` | ✅ sudah benar |
| `CONTACT.github` | `hanbaenom-coder` | ✅ sudah benar |
| `CONTACT.linkedin` | `/in/rafifriyanto` | ✅ sudah benar |
| `FORM_ENDPOINT` | `''` | endpoint form (lihat bawah) |

### Form kontak

Selama `FORM_ENDPOINT` kosong, tombol kirim membuka aplikasi email pengguna
dengan isian sudah terisi. Itu jalan, tapi konversinya jelek.

Untuk form sungguhan, daftar gratis di [Web3Forms](https://web3forms.com) atau
[Formspree](https://formspree.io), lalu tempel URL-nya ke `FORM_ENDPOINT`.
Tidak perlu ubah kode lain — pengiriman, status sukses, dan penanganan error
sudah ada.

## Isi & bahasa

Semua teks ada di dua kamus:

- [`src/i18n/id.ts`](src/i18n/id.ts) — Indonesia, sekaligus penentu struktur
- [`src/i18n/en.ts`](src/i18n/en.ts) — Inggris, bertipe `Dict`

Kalau kamu tambah key di `id.ts` tapi lupa di `en.ts`, **build gagal**. Itu
disengaja supaya dua bahasa tidak pernah beda isi.

Harga ada terpisah di [`src/i18n/pricing.ts`](src/i18n/pricing.ts) — angka saja,
tanpa teks, jadi ID dan EN tidak mungkin beda harga.

## Struktur

```
src/
├── components/<fitur>/     satu folder per bagian halaman
├── i18n/                   kamus ID/EN + data harga
├── layouts/
│   ├── Base.astro          <head>, SEO, JSON-LD, scroll reveal
│   └── Home.astro          susunan section
├── pages/
│   ├── index.astro         ID
│   └── en/index.astro      EN
└── styles/
    ├── tokens.css          warna, tipografi, spasi, motion
    └── global.css          reset, atmosfer, primitif bersama
```

## Deploy

**Situs sudah hidup:** https://hanbaenom-coder.github.io/rafifriyanto.com/

Setiap `git push` ke `main` memicu
[workflow GitHub Pages](.github/workflows/deploy.yml) yang membangun ulang dan
menerbitkan. Tidak ada langkah manual.

Syaratnya satu kali saja, dan sudah dilakukan: repo Settings → Pages → Source =
**GitHub Actions**. Workflow tidak bisa menyalakannya sendiri karena token bawaan
Actions di repo ini hanya punya izin baca.

### Kalau nanti pindah ke domain sendiri

Domain `rafifriyanto.com` **belum dibeli**. Kalau nanti dibeli:

1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Build command `npm run build`, output directory `dist`, preset Astro
3. Custom domains → tambahkan domainnya, ikuti instruksi DNS

Tidak ada kode yang perlu diubah. `site` dan `base` dibaca dari environment
(`SITE_URL`, `SITE_BASE`), dan semua URL absolut — canonical, hreflang, sitemap,
robots — diturunkan dari situ. Build default sudah menunjuk domain root.

Header keamanan di [`public/_headers`](public/_headers) **belum aktif** di GitHub
Pages — itu fitur Cloudflare/Netlify, dan akan langsung berfungsi setelah pindah.

## Catatan

- Bagian **Kerjaan** sengaja ditulis sebagai *demo publik, bukan proyek klien* —
  jangan diubah jadi seolah-olah pekerjaan berbayar sampai memang ada.
- Tidak ada testimoni di situs ini. Tambahkan hanya kalau sudah ada klien asli
  yang memberi izin.
- Tidak ada cookie pelacak dan tidak ada analytics. Kalau nanti mau pasang,
  pilih yang tanpa cookie (Plausible, Umami) supaya tidak perlu banner consent.
