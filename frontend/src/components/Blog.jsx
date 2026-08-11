import React, { useState, useEffect } from 'react';
import { Clock, ArrowUpRight, X } from 'lucide-react';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeArticle]);

  const articles = [
    {
      id: 4,
      title: 'Rahasia Mengelola Stok E-Commerce Secara Otomatis Berbasis Data Science & Kurva Pareto',
      summary: 'Mengupas tuntas bagaimana integrasi Business Intelligence, Machine Learning CatBoost, dan Klasifikasi ABC Pareto mentransformasikan pengelolaan stok konvensional menjadi sistem otomatis yang presisi.',
      date: 'Aug 2026',
      readTime: '7 min read',
      tag: 'Data Science & BI',
      content: (
        <div className="space-y-6 text-[var(--color-text-primary)] text-sm sm:text-base leading-relaxed">
          <p>
            Di tengah ketatnya persaingan industri e-commerce modern, pengelolaan persediaan barang (inventory management) sering kali menjadi penentu utama antara profitabilitas yang tinggi atau kerugian operasional yang membengkak.
          </p>
          <p>
            Dua musuh utama pelaku usaha ritel digital adalah <strong>overstock</strong> (penumpukan barang) dan <strong>stockout</strong> (kelangkaan barang). Artikel ini mengupas secara tuntas bagaimana integrasi Business Intelligence (BI), Machine Learning CatBoost, dan Klasifikasi ABC Pareto mampu mentransformasikan pengelolaan stok konvensional menjadi sistem otomatis yang presisi.
          </p>
          
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">I. Pendahuluan: Dilema Klasik Rantai Pasok E-Commerce</h3>
          <p>Setiap pengelola bisnis e-commerce menghadapi dua skenario buruk yang sama-sama merugikan:</p>
          <ul className="list-decimal pl-5 space-y-2">
            <li><strong>Overstock:</strong> Menyimpan barang dalam jumlah berlebihan meningkatkan biaya penyimpanan gudang (holding cost), risiko kerusakan, penumpukan modal kerja (working capital), hingga depresiasi nilai produk.</li>
            <li><strong>Stockout:</strong> Kehabisan stok barang di saat permintaan sedang melonjak berakibat langsung pada kehilangan potensi pendapatan (lost sales) dan menurunnya kepercayaan pelanggan.</li>
          </ul>
          
          <h4 className="font-semibold text-lg mt-6">Mengapa Metode Tradisional Gagal?</h4>
          <p>
            Sebagian besar perusahaan ritel masih mengandalkan analisis deskriptif sederhana seperti hitungan rata-rata bergerak (moving average) atau tebakan intuitif staf logistik. Pendekatan linier ini memperlakukan pola permintaan seolah-olah statis, padahal permintaan pasar sangat sensitif terhadap berbagai variabel eksternal non-linier seperti fluktuasi cuaca harian, status hari libur nasional (holidays), tren akhir pekan, hingga fenomena tanggal muda/akhir bulan.
          </p>
          <p>
            Untuk mengatasi keterbatasan tersebut, dibutuhkan kerangka kerja kolaboratif yang menggabungkan kekuatan visualisasi Business Intelligence (BI) dan ketajaman analisis prediktif Data Science (DS).
          </p>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">II. Fondasi Sistem: Sinergi Business Intelligence dan Data Science</h3>
          <p>
            Sistem yang ideal tidak membiarkan tim BI dan tim Data Science bekerja secara terisolasi (siloed system). Sebaliknya, kedua disiplin ini disatukan ke dalam satu pipa data terintegrasi (integrated data pipeline).
          </p>
          <div className="bg-[var(--color-surface-card)] p-4 rounded-lg border border-[var(--color-surface-border)] font-mono text-xs overflow-x-auto text-center my-4">
            Data Mentah Transaksi ➔ [ETL &amp; Cleaning BI] ➔ [Feature Engineering DS] ➔ [Model CatBoost AI] ➔ [Klasifikasi Pareto ABC] ➔ [Otomasi ERP]
          </div>

          <h4 className="font-semibold text-lg mt-6">1. Peran Business Intelligence (BI): Pengawasan Real-Time Hulu Data</h4>
          <p>Business Intelligence berfungsi sebagai fondasi utama dalam mengolah data operasional harian melalui proses Extract, Transform, Load (ETL). Pada tahap hulu, sistem BI bertugas:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Pembersihan Data (Data Cleaning):</strong> Mengeliminasi anomali transaksi, seperti menghapus catatan kuantitas negatif akibat retur barang (Quantity &gt; 0) agar sesuai dengan kondisi fisik riil di gudang.</li>
            <li><strong>Monitoring KPI Utama:</strong> Menyajikan indikator kinerja kunci seperti Total Sales Volume, Revenue per Product, Daily Transaction Count, serta Stock Turn Rate.</li>
            <li><strong>Analisis Spasial dan Temporal:</strong> Memetakan tren penjualan berdasarkan klaster wilayah (Region Cluster) dan pola mingguan (Week Number).</li>
          </ul>
          <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
            <strong>💡 Keterbatasan BI:</strong> Walaupun BI sangat unggul dalam menyajikan laporan visual yang mudah dipahami manajemen, BI pada dasarnya bersifat backward-looking—ia mampu menjelaskan apa yang telah terjadi, tetapi belum bisa memprediksi kebutuhan stok di masa depan secara otomatis.
          </div>

          <h4 className="font-semibold text-lg mt-6">2. Peran Data Science (DS): Ketajaman Prediksi Masa Depan</h4>
          <p>Di sinilah Data Science masuk untuk melengkapi BI melalui analisis prediktif (predictive analytics). Menggunakan data bersih dari infrastruktur BI, tim DS merancang 31 fitur prediktor yang kaya:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Fitur Lag Historis:</strong> Merekam tren penjualan riil dari hari ke-1 hingga hari ke-7 sebelum hari prediksi.</li>
            <li><strong>Rolling Windows:</strong> Menghitung rata-rata bergerak 7 hari terakhir untuk menangkap momentum jangka pendek.</li>
            <li><strong>Variabel Kalender Multi-Negara:</strong> Mengintegrasikan kalender libur resmi untuk menghitung jarak mundur menuju hari libur terdekat.</li>
            <li><strong>Kontekstual Lingkungan:</strong> Menggabungkan klaster wilayah dengan indeks bulan untuk menyimulasikan kondisi cuaca dan kategori suhu.</li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">III. Evaluasi Algoritma: Mengapa CatBoost Menjadi Pilihan Terbaik?</h3>
          <p>
            Dalam pemodelan peramalan runtun waktu multi-langkah (multi-step ahead forecasting 7 hari ke depan), dilakukan pengujian komparatif terhadap tiga algoritma Gradient Boosting Regression Trees ternama menggunakan skema Time-Series Split.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse border border-[var(--color-surface-border)] text-sm">
              <thead>
                <tr className="bg-[var(--color-surface-card)]">
                  <th className="border border-[var(--color-surface-border)] p-2 text-left">Model Eksperimen</th>
                  <th className="border border-[var(--color-surface-border)] p-2 text-left">MAE (Unit)</th>
                  <th className="border border-[var(--color-surface-border)] p-2 text-left">RMSE (Unit)</th>
                  <th className="border border-[var(--color-surface-border)] p-2 text-left">R² Score (%)</th>
                  <th className="border border-[var(--color-surface-border)] p-2 text-left">Catatan Performa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">CatBoost Baseline</td>
                  <td className="border border-[var(--color-surface-border)] p-2">77,65</td>
                  <td className="border border-[var(--color-surface-border)] p-2">183,83</td>
                  <td className="border border-[var(--color-surface-border)] p-2">56,86%</td>
                  <td className="border border-[var(--color-surface-border)] p-2">Performa awal bawaan sangat kuat</td>
                </tr>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">XGBoost Baseline</td>
                  <td className="border border-[var(--color-surface-border)] p-2">79,73</td>
                  <td className="border border-[var(--color-surface-border)] p-2">194,09</td>
                  <td className="border border-[var(--color-surface-border)] p-2">51,91%</td>
                  <td className="border border-[var(--color-surface-border)] p-2">Cenderung membutuhkan tuning ketat</td>
                </tr>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">LightGBM Baseline</td>
                  <td className="border border-[var(--color-surface-border)] p-2">78,84</td>
                  <td className="border border-[var(--color-surface-border)] p-2">196,85</td>
                  <td className="border border-[var(--color-surface-border)] p-2">50,53%</td>
                  <td className="border border-[var(--color-surface-border)] p-2">Sangat cepat, namun varians cukup tinggi</td>
                </tr>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">LightGBM Tuned (800 Trees)</td>
                  <td className="border border-[var(--color-surface-border)] p-2">78,40</td>
                  <td className="border border-[var(--color-surface-border)] p-2">190,06</td>
                  <td className="border border-[var(--color-surface-border)] p-2">53,88%</td>
                  <td className="border border-[var(--color-surface-border)] p-2">Peningkatan signifikan setelah tuning</td>
                </tr>
                <tr className="bg-[var(--color-accent)]/10 font-bold">
                  <td className="border border-[var(--color-surface-border)] p-2">CatBoost Tuned (800 Trees)*</td>
                  <td className="border border-[var(--color-surface-border)] p-2">77,47</td>
                  <td className="border border-[var(--color-surface-border)] p-2">186,30</td>
                  <td className="border border-[var(--color-surface-border)] p-2">55,69%</td>
                  <td className="border border-[var(--color-surface-border)] p-2">Model Final Terbaik (Presisi &amp; Paling Stabil)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong>Keunggulan Utama CatBoost:</strong> CatBoost dipilih sebagai model final karena menghasilkan tingkat kesalahan mutlak rata-rata terendah (MAE: 77,47 unit) dan koefisien determinasi tertinggi (R²: 55,69%). Arsitektur Symmetric Trees serta penggunaan teknik Ordered Boosting internal pada CatBoost sangat efektif menangani fitur kategorikal berdimensi tinggi tanpa mengalami masalah overfitting.
          </p>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">IV. Integrasi Hilir: Konversi Prediksi AI ke Parameter Stok Adaptif</h3>
          <p>
            Angka prediksi saja tidak akan berguna jika tidak ditransformasikan menjadi keputusan operasional gudang. Oleh karena itu, hasil prediksi volume 7 hari ke depan dikawinkan dengan skema Klasifikasi ABC (Kurva Pareto).
          </p>
          
          <h4 className="font-semibold text-lg mt-6">1. Segmentasi Zona Prioritas Pareto</h4>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Kelas A (Fast-Moving):</strong> Produk super kritis yang menyerap 0%–70% total volume prediksi. Membutuhkan prioritas tertinggi.</li>
            <li><strong>Kelas B (Medium-Moving):</strong> Produk moderat yang menyerap akumulasi volume &gt;70%–90%.</li>
            <li><strong>Kelas C (Slow-Moving):</strong> Produk long-tail yang menyerap sisa akumulasi volume &gt;90%–100%.</li>
          </ul>

          <h4 className="font-semibold text-lg mt-6">2. Formulasi Safety Stock Berbasis Margin Eror AI</h4>
          <p>Alih-alih menebak angka stok pengaman secara manual, batas aman stok (Safety Stock) dikunci secara dinamis menggunakan metrik deviasi kesalahan prediksi model (MAE ≈ 78 unit):</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Kelas A (High Protection):</strong> Safety Stock = 3 × MAE ≈ <strong>233 unit</strong> (Proteksi maksimal untuk mencegah risiko lost sales).</li>
            <li><strong>Kelas B (Moderate Protection):</strong> Safety Stock = 1 × MAE ≈ <strong>78 unit</strong> (Proteksi standar setara batas toleransi eror).</li>
            <li><strong>Kelas C (Low Holding Cost):</strong> Safety Stock = <strong>5 unit</strong> (Pemangkasan ekstrem untuk meminimalkan modal mati).</li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">V. Dampak Bisnis dan Otomatisasi ERP</h3>
          <p>Implementasi sistem terintegrasi ini memberikan tiga manfaat strategis yang terukur:</p>
          <ul className="list-decimal pl-5 space-y-2 ml-4">
            <li><strong>Eliminasi Lost Sales (Kelas A):</strong> Dengan proteksi Safety Stock 233 unit, perusahaan berhasil mengamankan tingkat ketersediaan barang mendekati 100% pada produk penyumbang 70% omzet.</li>
            <li><strong>Penurunan Holding Cost (Kelas C):</strong> Memangkas stok pengaman produk slow-moving hingga 5 unit terbukti mencegah pembekuan modal kerja dan menekan biaya sewa gudang.</li>
            <li><strong>Otomatisasi Logistik (Closed-Loop System):</strong> Ketika kuantitas fisik menyentuh batas Safety Stock, sistem Power BI yang terhubung ke ERP akan otomatis menerbitkan Purchase Requisition tanpa intervensi manual.</li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">VI. Kesimpulan &amp; Langkah Strategis Ke Depan</h3>
          <p>
            Menggabungkan Business Intelligence dan Data Science bukan lagi sekadar pilihan teknologi, melainkan kebutuhan strategis bagi bisnis e-commerce modern. Melalui pemodelan kecerdasan buatan CatBoost Tuned dan integrasi Kurva Pareto, perusahaan dapat mengubah manajemen logistik yang reaktif menjadi proaktif, presisi, dan terotomatisasi.
          </p>
          <h4 className="font-semibold text-lg mt-6">Rekomendasi Masa Depan:</h4>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Akses Data Real-Time Inventory:</strong> Mengintegrasikan data fisik gudang secara langsung agar sistem dapat mengalkulasi kapasitas sisa ruang simpan.</li>
            <li><strong>Integrasi API Cuaca Riil:</strong> Menghubungkan pipa data prediktif dengan API cuaca berjangka (seperti OpenWeatherMap) untuk menangkap dampak cuaca ekstrem terhadap laju transaksi.</li>
          </ul>

          <div className="mt-8 p-4 bg-[var(--color-surface-card)] rounded-lg text-sm text-[var(--color-text-secondary)] border border-[var(--color-surface-border)]">
            <p><strong>Riset Ilmiah Referensi:</strong> "Optimasi Rantai Pasok E-Commerce Melalui Integrasi Business Intelligence dan CatBoost Demand Forecasting" (Ari Hermawan, Adistiya Firdaus, Royhan Achmad, Firstyan Rizky Sesarwanto, Hilgan Armeylito Geanardi Rumbiak — Universitas Mercu Buana, 2026).</p>
          </div>
        </div>
      )
    },

    {
      id: 2,
      title: 'MobileNetV2 & Smart Waste Management: Solusi AI Cerdas Otomatisasi Pemilahan Sampah Organik dan Anorganik',
      summary: 'Membahas arsitektur ringan MobileNetV2 dan penerapannya dalam mengotomatisasi pemilahan sampah organik dan anorganik secara efisien di lingkungan Smart City.',
      date: 'Jul 2026',
      readTime: '6 min read',
      tag: 'AI & Smart City',
      content: (
        <div className="space-y-6 text-[var(--color-text-primary)] text-sm sm:text-base leading-relaxed">
          <p>
            Peningkatan jumlah limbah rumah tangga dan industri merupakan salah satu tantangan lingkungan paling krusial saat ini. Tanpa pengelolaan yang tepat, tumpukan sampah di Tempat Pembuangan Akhir (TPA) memicu pencemaran tanah, air, dan udara.
          </p>
          <p>
            Kunci utama pengelolaan sampah yang efektif berawal dari proses pemilahan. Namun, ketergantungan pada pemilahan manual membutuhkan waktu lama, tenaga besar, serta rentan terhadap <em>human error</em>.
          </p>
          <p>
            Di sinilah Artificial Intelligence (AI)—khususnya cabang Computer Vision dan Deep Learning—hadir memberikan solusi. Berdasarkan riset terbaru dari peneliti Universitas Mercu Buana, arsitektur AI ringan MobileNetV2 terbukti mampu mengotomatisasi pemilahan sampah organik dan anorganik secara cepat, presisi, dan efisien.
          </p>
          
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">I. Pendahuluan: Mengapa Pemilahan Manual Tidak Lagi Cukup?</h3>
          <p>Proses pemilahan sampah di tingkat awal menentukan keberhasilan alur daur ulang. Ketika sampah organik dan anorganik tercampur, kualitas material daur ulang menurun drastis dan biaya pengolahannya meningkat.</p>
          <p>Sayangnya, pemilahan manual memiliki berbagai keterbatasan utama:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Kapasitas Terbatas:</strong> Membutuhkan sumber daya manusia yang besar untuk memproses tonan sampah harian.</li>
            <li><strong>Faktor Kelelahan:</strong> Konsistensi pemilahan menurun seiring berjalannya waktu operasional.</li>
            <li><strong>Risiko Kesehatan:</strong> Kontak langsung dengan limbah berbahaya berpotensi menimbulkan gangguan kesehatan bagi pekerja.</li>
          </ul>
          <p className="mt-4">
            Mengintegrasikan Computer Vision ke dalam sistem Smart Waste Management memungkinkan kamera mengenali visual sampah secara otomatis layaknya mata manusia, namun dengan kecepatan dan konsistensi mesin.
          </p>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">II. Mengapa Memilih MobileNetV2 untuk Smart Waste Management?</h3>
          <p>
            Dalam penerapannya di lapangan, model AI sering kali diintegrasikan ke dalam perangkat keras berkapasitas komputasi terbatas (embedded system atau perangkat IoT) seperti Raspberry Pi, Jetson Nano, atau kamera Smart Bin.
          </p>
          <p>
            Model Convolutional Neural Network (CNN) konvensional umumnya berukuran sangat besar dan berat, sehingga membutuhkan GPU komputer yang mahal. MobileNetV2 hadir sebagai jawaban atas tantangan tersebut:
          </p>
          <ul className="list-decimal pl-5 space-y-2 ml-4">
            <li><strong>Arsitektur Ringan:</strong> Memanfaatkan teknik <em>inverted residual</em> dan <em>linear bottleneck</em> untuk mengurangi jumlah parameter tanpa mengorbankan akurasi klasifikasi secara signifikan.</li>
            <li><strong>Transfer Learning Pretrained ImageNet:</strong> Menggunakan bobot model yang telah dipelajari dari jutaan citra umum, sehingga proses pelatihan pada citra sampah menjadi jauh lebih cepat dan efisien.</li>
            <li><strong>Optimasi Berdaya Rendah:</strong> Sangat ideal dieksekusi langsung pada perangkat IoT di lokasi pembuangan sampah tanpa tergantung koneksi internet berkecepatan tinggi secara terus-menerus.</li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">III. Metodologi Penelitian &amp; Strategi Pelatihan Model</h3>
          <p>
            Riset ini memanfaatkan dataset masif sebanyak 22.564 citra sampah yang terbagi menjadi dua kategori utama: Organic Waste (O) dan Recyclable Waste (R).
          </p>
          
          <h4 className="font-semibold text-lg mt-6">1. Tahapan Preprocessing</h4>
          <p>Sebelum dimasukkan ke dalam model, setiap citra diproses secara sistematis:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Resize:</strong> Menyeragamkan seluruh ukuran gambar menjadi 224 × 224 piksel agar sesuai dengan standar masukan MobileNetV2.</li>
            <li><strong>Normalisasi:</strong> Mengubah kisaran piksel ke rentang -1 hingga 1 untuk mempercepat konvergensi pelatihan.</li>
            <li><strong>Data Augmentation:</strong> Menerapkan variasi <em>Random Flip</em>, <em>Rotation</em>, <em>Zoom</em>, dan <em>Contrast</em> agar model fleksibel menghadapi variasi sudut pandang dan pencahayaan objek di dunia nyata.</li>
          </ul>

          <h4 className="font-semibold text-lg mt-6">2. Strategi Optimasi Early Stopping</h4>
          <p>
            Untuk mencegah model menghafal data (overfitting), diterapkan mekanisme <em>Early Stopping</em> dengan menguji variasi nilai <em>patience</em> (3, 5, 7, dan 10). Nilai <em>patience</em> menentukan berapa lama proses pelatihan ditoleransi saat tidak ada peningkatan performa pada data validasi.
          </p>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">IV. Hasil Evaluasi Performa Model</h3>
          <p>
            Pengujian membuktikan bahwa konfigurasi Early Stopping dengan patience 10 memberikan performa terbaik dan paling stabil.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse border border-[var(--color-surface-border)] text-sm">
              <thead>
                <tr className="bg-[var(--color-surface-card)]">
                  <th className="border border-[var(--color-surface-border)] p-2 text-left">Metrik Evaluasi</th>
                  <th className="border border-[var(--color-surface-border)] p-2 text-left">Hasil Eksperimen (Patience = 10)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">Akurasi Validasi</td>
                  <td className="border border-[var(--color-surface-border)] p-2 font-semibold text-[var(--color-accent)]">93,88%</td>
                </tr>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">Validation Loss</td>
                  <td className="border border-[var(--color-surface-border)] p-2">0,1641</td>
                </tr>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">Rata-rata Precision</td>
                  <td className="border border-[var(--color-surface-border)] p-2">94,00%</td>
                </tr>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">Rata-rata Recall</td>
                  <td className="border border-[var(--color-surface-border)] p-2">94,00%</td>
                </tr>
                <tr>
                  <td className="border border-[var(--color-surface-border)] p-2">Rata-rata F1-Score</td>
                  <td className="border border-[var(--color-surface-border)] p-2">94,00%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-semibold text-lg mt-6">Hasil Pengujian pada Citra Baru</h4>
          <p>Ketika diuji menggunakan citra sampah segar di luar dataset pelatihan, model berhasil menunjukkan kemampuan generalisasi yang sangat tinggi:</p>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Sampah Organik (Composting Waste):</strong> Berhasil diklasifikasikan dengan tingkat kepercayaan (confidence score) hingga <strong className="text-[var(--color-accent)]">99,69%</strong>.</li>
            <li><strong>Sampah Anorganik (Recyclable Waste):</strong> Berhasil diklasifikasikan dengan confidence score hingga <strong className="text-[var(--color-accent)]">92,90%</strong>.</li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">V. Potensi Implementasi pada Ekosistem Smart City</h3>
          <p>Hasil eksperimen yang presisi dan berarsitektur ringan ini membuka peluang besar untuk diimplementasikan langsung ke lapangan:</p>
          <div className="bg-[var(--color-surface-card)] p-4 rounded-lg border border-[var(--color-surface-border)] font-mono text-xs overflow-x-auto text-center my-4">
            [Kamera Smart Bin] ➔ [Model MobileNetV2 di IoT] ➔ [Pembeda Otomatis / Sorter] ➔ [Pemisahan Organik &amp; Anorganik]
          </div>
          <ul className="list-decimal pl-5 space-y-2 ml-4">
            <li><strong>Integrasi Tempat Sampah Cerdas (Smart Bin):</strong> Kamera kecil di atas tempat sampah dapat mendeteksi jenis sampah yang akan dibuang secara real-time, lalu menggerakkan sekat pemisah secara otomatis.</li>
            <li><strong>Meningkatkan Nilai Ekonomi Daur Ulang:</strong> Pemilahan yang bersih dari hulu meningkatkan persentase bahan anorganik yang layak didaur ulang dan mempercepat pembuatan kompos dari sampah organik.</li>
            <li><strong>Mendukung Konsep Smart City:</strong> Sistem manajemen sampah berbasis AI selaras dengan pilar Smart Environment untuk menciptakan kota yang bersih, efisien, dan berkelanjutan.</li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-8 mb-4 border-b border-[var(--color-surface-border)] pb-2">VI. Kesimpulan &amp; Langkah Selanjutnya</h3>
          <p>
            Penerapan MobileNetV2 berbasis Transfer Learning terbukti menjadi solusi yang sangat potensial dalam mendukung otomatisasi pemilahan sampah. Dengan akurasi mencapai 93,88% dan tingkat kepercayaan hingga 99,69%, model ini siap dipadukan dengan infrastruktur IoT.
          </p>
          <h4 className="font-semibold text-lg mt-6">Arah Pengembangan Selanjutnya:</h4>
          <ul className="list-disc pl-5 space-y-2 ml-4">
            <li><strong>Klasifikasi Multi-Kelas:</strong> Mengembangkan model tidak hanya biner (organik/anorganik), tetapi juga membedakan spesifik kategori seperti plastik, kertas, kaca, logam, dan B3.</li>
            <li><strong>Pengujian Hardware Fisik:</strong> Mengintegrasikan model langsung dengan pemilah mekanis menggunakan mikrokontroler di lingkungan riil.</li>
          </ul>

          <div className="mt-8 p-4 bg-[var(--color-surface-card)] rounded-lg text-sm text-[var(--color-text-secondary)] border border-[var(--color-surface-border)]">
            <p><strong>Riset Ilmiah Referensi:</strong> "Penerapan Computer Vision Menggunakan MobileNetV2 untuk Klasifikasi Limbah Dalam Mendukung Smart Waste Management" (Ari Hermawan, Royhan Achmad, Adistya Firdaus — Universitas Mercu Buana, Pembimbing: Essy Malay Sari Sakti, S.Kom., MMSI).</p>
          </div>
        </div>
      )
    },

  ];

  return (
    <section id="blog" className="py-20 border-b border-[var(--color-surface-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider mb-2">
            <span>// 04. Articles &amp; Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Blog &amp; <span className="text-[var(--color-accent)]">Engineering Notes</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">
            Kumpulan tulisan ringkas seputar arsitektur perangkat lunak, integrasi kecerdasan buatan, dan tips pengkodean.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article 
              key={art.id}
              className="p-6 rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-surface-card)] flex flex-col justify-between space-y-4 hover:border-[var(--color-accent)] transition-all group cursor-pointer shadow-sm hover:shadow-md"
              onClick={() => setActiveArticle(art)}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold">
                    {art.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[var(--color-text-secondary)]">
                    <Clock size={12} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 mb-2">
                  {art.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-surface-border)]/60 flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--color-text-secondary)]">{art.date}</span>
                <button className="inline-flex items-center gap-1 text-[var(--color-accent)] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={() => setActiveArticle(null)}></div>
          
          <div className="bg-[var(--color-bg-base)] w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 border border-[var(--color-surface-border)] relative z-10">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[var(--color-surface-border)] bg-[var(--color-surface-card)]">
              <div className="flex items-center gap-3">
                 <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold">
                   {activeArticle.tag}
                 </span>
                 <span className="text-xs text-[var(--color-text-secondary)] font-mono flex items-center gap-1">
                   <Clock size={12} /> {activeArticle.readTime}
                 </span>
              </div>
              <button 
                onClick={() => setActiveArticle(null)} 
                className="p-2 rounded-lg hover:bg-[var(--color-surface-border)] text-[var(--color-text-primary)] transition-colors"
                title="Tutup Artikel"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-[var(--color-text-primary)] leading-tight text-pretty">
                {activeArticle.title}
              </h2>
              {activeArticle.content ? (
                <div>{activeArticle.content}</div>
              ) : (
                <div className="py-12 text-center text-[var(--color-text-secondary)] border-2 border-dashed border-[var(--color-surface-border)] rounded-xl">
                  <p>Konten artikel sedang dalam tahap penulisan dan belum tersedia secara penuh.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
