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
| `CONTACT.linkedin` | kosong | ganti, atau hapus link-nya dari footer |
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

Repo ini sudah punya commit awal, tapi **belum ada remote** — dan aku tidak bisa
membuatnya untukmu: `gh` CLI belum terpasang, dan kunci SSH di mesin ini (`mac-to-homelab`)
belum terdaftar di GitHub. Keduanya butuh login yang hanya bisa kamu lakukan sendiri.

**Penting:** push ke GitHub **tidak** membuat situsnya bisa diakses. GitHub cuma
menyimpan kodenya. Supaya rafifriyanto.com hidup, butuh dua hal lagi: hosting yang
membangun situs (Cloudflare Pages) dan DNS yang mengarahkan domainmu ke sana.

### 1. Daftarkan kunci SSH (sekali seumur mesin)

Salin kunci publikmu:

```bash
cat ~/.ssh/id_ed25519.pub
```

Tempel di github.com → Settings → SSH and GPG keys → New SSH key. Lalu uji:

```bash
ssh -T git@github.com
```

Harus muncul "Hi <username>! You've successfully authenticated."

### 2. Buat repo kosong dan push

Buat repo baru di github.com (kosong — tanpa README, tanpa .gitignore), lalu:

```bash
cd ~/rafifriyanto-com && git remote add origin git@github.com:<username>/rafifriyanto-com.git && git push -u origin main
```

### 3. Sambungkan ke Cloudflare Pages

1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Pilih repo ini
3. Build command `npm run build`, output directory `dist`, framework preset Astro
4. Deploy. Kamu langsung dapat URL `*.pages.dev` untuk mengecek hasilnya.

### 4. Arahkan domainnya

Di project Pages → Custom domains → tambahkan `rafifriyanto.com` dan `www.rafifriyanto.com`,
lalu ikuti instruksi DNS yang Cloudflare tampilkan.

Setelah domain aktif, cek ulang bahwa `SITE.url` di `src/config.ts`, `site` di
`astro.config.mjs`, serta `public/sitemap.xml` dan `public/robots.txt` semuanya
menunjuk domain final.

Header keamanan (HSTS, CSP, X-Frame-Options, dll.) sudah disiapkan di
[`public/_headers`](public/_headers) — Cloudflare Pages membacanya otomatis.

## Catatan

- Bagian **Kerjaan** sengaja ditulis sebagai *demo publik, bukan proyek klien* —
  jangan diubah jadi seolah-olah pekerjaan berbayar sampai memang ada.
- Tidak ada testimoni di situs ini. Tambahkan hanya kalau sudah ada klien asli
  yang memberi izin.
- Tidak ada cookie pelacak dan tidak ada analytics. Kalau nanti mau pasang,
  pilih yang tanpa cookie (Plausible, Umami) supaya tidak perlu banner consent.
