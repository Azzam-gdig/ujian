import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-[#2B2A64] font-sans overflow-x-hidden">
      <header className="relative z-30 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-[1340px] mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo KEMENPORA"
              width={260}
              height={70}
              priority
              className="h-[64px] w-auto object-contain transition-transform hover:scale-105"
            />
          </a>
          <div className="hidden md:flex items-center filter drop-shadow-sm contrast-105">
            <nav className="flex items-center space-x-7 text-[15px] font-semibold text-[#2B2A64]">
              <a href="#" className="hover:text-[#1982C4] transition-colors">
                Beranda
              </a>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-[#1982C4] transition-colors">
                <span>Profil</span>
                <span className="text-[10px]">▼</span>
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-[#1982C4] transition-colors">
                <span>Kebijakan</span>
                <span className="text-[10px]">▼</span>
              </div>
              <a href="#" className="hover:text-[#1982C4] transition-colors">
                Berita
              </a>
              <a href="#" className="hover:text-[#1982C4] transition-colors">
                Galeri
              </a>
              <a href="#" className="hover:text-[#1982C4] transition-colors">
                Event
              </a>
              <a href="#" className="hover:text-[#1982C4] transition-colors">
                Pengumuman
              </a>
              <a href="#" className="hover:text-[#1982C4] transition-colors">
                Layanan
              </a>
              <button 
                type="button"
                className="w-10 h-10 rounded-full bg-[#EBF3FB] flex items-center justify-center text-[#2B2A64] hover:bg-[#D4E5F7] transition-all ml-2 shadow-sm"
                aria-label="Cari"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.5" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </button>
            </nav>
          </div>

        </div>
      </header>
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-end pb-12 lg:pb-20 pt-4">
        <div className="absolute top-0 left-0 w-full z-0">
          <Image
            src="/tengah.png"
            alt="Kemenpora Graphic Wave"
            width={1920}
            height={800}
            priority
            className="w-full h-auto object-cover object-top min-h-[400px]"
          />
        </div>
        <div className="relative z-10 max-w-[1340px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 relative flex justify-center lg:justify-start -ml-2 lg:-ml-6">
              <Image
                src="/kiri.png"
                alt="Atlet dan Pemuda Prestasi Indonesia"
                width={850}
                height={550}
                priority
                className="w-full max-w-[720px] h-auto object-contain drop-shadow-md"
              />
            </div>
            <div className="lg:col-span-5 space-y-4 mb-4 lg:pl-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#2B2A64] leading-[1.15]">
                BERGERAK, BERSATU, BERPRESTASI
              </h1>
              
              <p className="text-[15px] sm:text-[16px] text-[#4A4A6A] leading-relaxed max-w-[480px]">
                Kementerian Pemuda dan Olahraga berfokus pada pengembangan bakat generasi muda, pembinaan prestasi olahraga, dan kemajuan kegiatan kepemudaan di seluruh Indonesia.
              </p>

              <div className="pt-2">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-[#2B2A64] hover:bg-[#1f1e4b] text-white text-xs font-bold tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>PROFIL KEMENPORA</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                    ›
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="relative z-10 max-w-[1340px] mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-[#2B2A64]">Kegiatan Terkini</h2>
          <div className="w-12 h-1 bg-[#2B2A64] mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <div className="relative h-52 w-full">
              <Image
                src="/pertama.jpeg"
                alt="Kegiatan Utama Kemenpora"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-bold text-red-600 uppercase">Kegiatan</span>
              <h3 className="font-bold text-base mt-1 text-[#2B2A64] line-clamp-2">
                Opening Ceremony World Aquatic Certification Course
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <div className="relative h-52 w-full">
              <Image
                src="/kedua.jpg"
                alt="Pembinaan Pemuda dan Olahraga"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-bold text-red-600 uppercase">Kepemudaan</span>
              <h3 className="font-bold text-base mt-1 text-[#2B2A64] line-clamp-2">
                Dukungan dan Pembinaan Potensi Atlet Muda Daerah
              </h3>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
            <div className="relative h-52 w-full">
              <Image
                src="/ketiga.jpeg"
                alt="Foto Bersama Kegiatan Kemenpora"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-bold text-red-600 uppercase">Event</span>
              <h3 className="font-bold text-base mt-1 text-[#2B2A64] line-clamp-2">
                Sinergi Program Kerja Kemenpora Bersama Pengurus Cabang Olahraga
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 left-6 z-50">
        <button 
          className="w-12 h-12 bg-[#0055FE] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Aksesibilitas Disabilitas"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a2 2 0 100 4 2 2 0 000-4zm-1 5h2v6h-2V7zm-3 2h2v4H8V9zm8 0h2v4h-2V9zm-5 7h2v6h-2v-6z" />
          </svg>
        </button>
      </div>

    </div>
  );
}