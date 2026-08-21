---
date: 2026-08-07
tags: [portfolio, devlog, ui, vercel]
---

# Log Sesi Pengembangan - 7 Agustus 2026

## Ringkasan Perubahan Hari Ini
Hari ini kita melakukan penyempurnaan besar-besaran (Impeccable UI Pass) pada *frontend* portofolio Anda, mengamankan *deployment* di Vercel, dan merapikan arsitektur dengan membuang fitur yang tidak diperlukan (Backend).

### 1. 🎨 UI/UX Polish (Impeccable Design)
- **Glassmorphism & Gradients**: Menambahkan efek kaca buram dan teks gradien pada komponen Hero dan kartu (Portfolio/Experience).
- **Mobile Ergonomics**: Mengoptimalkan menu *Drawer* di layar kecil, memperlebar ukuran tombol (*touch-targets*) pada HP menjadi `w-full` agar mudah disentuh.
- **Micro-animations & Hover States**: Menambahkan efek melayang (`-translate-y-2`) dan bayangan berlapis (`shadow-2xl`) saat kartu portofolio dan *experience* disentuh/di-hover.
- **Dark Mode Visibility**: Memperbaiki kontras teks agar keterbacaan sempurna baik di mode Terang maupun Gelap.

### 2. 🗃️ Arsitektur & Manajemen Proyek
- **Integrasi Proyek Baru**: Menambahkan 2 proyek baru ke dalam daftar Portfolio:
  1. *Smart Waste Management* (AI/ML)
  2. *E-Commerce Demand Forecasting* (Data Science)
- **Penghapusan Backend**: Memutuskan bahwa aplikasi murni berupa **Static Frontend** (tanpa fitur komentar *real-time* dan *database* SQLite). Folder `backend` telah dihapus sepenuhnya dari repositori untuk memangkas *overhead* dan mempermudah pemeliharaan. Fitur *Contact* dialihkan ke mode "Simulasi Sukses".

### 3. 🚀 Deployment & Vercel Fixes
- **Vercel Routing**: Menghapus `vercel.json` dan memindahkan Framework Preset ke **Vite** murni. Ini memperbaiki masalah `404 NOT_FOUND` pada halaman *frontend*.
- **Permission Fix (Error 126)**: Mengatasi *bug* Vite `Permission denied` di Vercel dengan menghapus folder `node_modules` yang sebelumnya tidak sengaja ikut ter-*commit* di Git dari Windows.
- **Live Demo Link**: Memperbarui link `demoUrl` di file `Portfolio.jsx` agar mengarah ke domain Vercel terbaru Anda: `https://portfolio-ari-navy.vercel.app/`.

## Catatan untuk Sesi Besok (Next Steps)
- Graphify index (`graphify-out`) telah di-*update*.
- Semua perubahan telah di-*commit* dan didorong (*push*) ke *branch* `main` di GitHub Anda.
- Vercel sekarang terhubung otomatis secara bersih (otomatis *build* jika ada *commit* baru).
- Portofolio statis sudah siap pakai dan sangat responsif.

---
*Catatan ini dibuat secara otomatis untuk disimpan di dalam brankas (Vault) Obsidian Anda.*
