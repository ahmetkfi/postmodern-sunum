"use client"

import { useEffect, useState } from "react"
import {
  Building2,
  Layers,
  Quote,
  Users,
  Target,
  Clock,
  CheckCircle,
  Eye,
  Grid3X3,
  Scissors,
  Link,
  MessageSquare,
  FlaskConical,
  ChevronDown,
  X,
} from "lucide-react"

const gorselDilOzellikleri = [
  {
    id: "asymmetric",
    icon: "grid",
    title: "Asimetrik ve dinamik yerleşim",
    image: "/images/asymmetric-layout.jpg",
    description: "Geleneksel simetrik düzenlerin aksine, elemanlar bilinçli olarak dengesiz ve dinamik bir şekilde yerleştirilir.",
  },
  {
    id: "scale",
    icon: "layers",
    title: "Çelişkili ölçek ve hizalamalar",
    image: "/images/scale-contrast.jpg",
    description: "Farklı boyutlardaki elemanlar bir arada kullanılarak görsel gerilim ve ilgi yaratılır.",
  },
  {
    id: "layered",
    icon: "building",
    title: "Katmanlı görseller ve dokular",
    image: "/images/layered-textures.jpg",
    description: "Birden fazla görsel katman ve doku üst üste bindirilerek derinlik ve karmaşıklık elde edilir.",
  },
  {
    id: "contrast",
    icon: "colors",
    title: "Kırmızı, siyah, gri gibi güçlü kontrastlar",
    image: "/images/strong-contrast.jpg",
    description: "Güçlü renk kontrastları ile dramatik ve dikkat çekici görsel etki yaratılır.",
  },
  {
    id: "typography",
    icon: "text",
    title: "Deneysel tipografi kullanımı",
    image: "/images/experimental-typography.jpg",
    description: "Geleneksel tipografi kuralları kırılır, harfler deforme edilir ve beklenmedik şekillerde kullanılır.",
  },
]

const temsilciler = [
  {
    name: "Wolfgang Weingart",
    description: "İsviçre Punk Tipografisinin öncüsü. Basel Tasarım Okulu'nda deneysel tipografi çalışmalarıyla tanınır.",
    works: [
      "/images/artists/wolfgang-1.jpg",
      "/images/artists/wolfgang-2.jpg",
      "/images/artists/wolfgang-3.jpg",
    ],
  },
  {
    name: "April Greiman",
    description: "Dijital tasarımın öncülerinden. Bilgisayar grafiklerini sanatsal ifadeyle birleştiren ilk tasarımcılardan.",
    works: [
      "/images/artists/april-1.jpg",
      "/images/artists/april-2.jpg",
      "/images/artists/april-3.jpg",
    ],
  },
  {
    name: "David Carson",
    description: "Ray Gun dergisinin art direktörü. Okunabilirliği reddeden grunge tipografi tarzının yaratıcısı.",
    works: [
      "/images/artists/carson-1.jpg",
      "/images/artists/carson-2.jpg",
      "/images/artists/carson-3.jpg",
    ],
  },
  {
    name: "Paula Scher",
    description: "Pentagram partneri. Büyük ölçekli tipografik tasarımları ve Public Theater posterleriyle ünlü.",
    works: [
      "/images/artists/scher-1.jpg",
      "/images/artists/scher-2.jpg",  
      "/images/artists/scher-3.jpg",
    ],
  },
  {
    name: "Neville Brody",
    description: "The Face dergisinin tasarımcısı. Özel yazı karakterleri ve İngiliz grafik tasarımının öncüsü.",
    works: [
      "/images/artists/brody-1.jpg",
      "/images/artists/brody-2.jpg",
      "/images/artists/brody-3.jpg",
    ],
  },
  {
    name: "Barbara Kruger",
    description: "Kavramsal sanatçı ve grafik tasarımcı. Kırmızı-beyaz-siyah renk şeması ve provokatif metinleriyle tanınır.",
    works: [
      "/images/artists/barbara-1.jpg",
      "/images/artists/barbara-2.jpg",
      "/images/artists/barbara-3.jpg",

    ],
  },
]

const postmodernPosters = [
  "/images/posters/poster-1.jpg",
  "/images/posters/poster-2.jpg",
  "/images/posters/poster-3.jpg",
  "/images/posters/poster-4.jpg",
  "/images/posters/poster-5.jpg",
  "/images/posters/poster-6.jpg",
  "/images/posters/poster-7.jpg",
  "/images/posters/poster-8.jpg",
]

const sections = [
  { id: "intro", title: "Giriş" },
  { id: "nedir", title: "Postmodernizm Nedir?" },
  { id: "gorsel-dil", title: "Görsel Dil Özellikleri" },
  { id: "yaklaşim", title: "Afiş Tasarımında Postmodern Yaklaşım" },
  { id: "poster-galeri", title: "Postmodern Afiş Galerisi" },
  { id: "notlar", title: "Unutulmaması Gereken Notlar" },
  { id: "temsilciler", title: "Önemli Temsilciler ve Etkiler" },
  { id: "kullanim", title: "Kullanım Alanları" },
  { id: "tarihsel", title: "Tarihsel Gelişim" },
  { id: "sonuc", title: "Sonuç" },
  { id: "anahtar", title: "Anahtar Kelimeler" },
  { id: "kaynakcalar", title: "Kaynakçalar" },
]

export default function PostmodernPresentation() {
  const [activeSection, setActiveSection] = useState(0)
  const [selectedFeature, setSelectedFeature] = useState<typeof gorselDilOzellikleri[0] | null>(null)
  const [selectedArtist, setSelectedArtist] = useState<typeof temsilciler[0] | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="bg-[#d9d3c7]">
      {/* Feature Modal */}
      {selectedFeature && (
        <div 
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedFeature(null)}
        >
          <div 
            className="bg-[#1a1a1a] max-w-4xl w-full max-h-[90vh] overflow-hidden relative border-4 border-[#c13b2a]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-[#c13b2a] flex items-center justify-center hover:bg-[#a32f22] transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={selectedFeature.image} 
                alt={selectedFeature.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-black text-white mb-4">{selectedFeature.title}</h3>
              <p className="text-lg text-white/80 leading-relaxed">{selectedFeature.description}</p>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50 uppercase tracking-wider">Postmodern Görsel Dil Özelliği</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Artist Modal */}
      {selectedArtist && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedArtist(null)}
        >
          <div 
            className="bg-[#1a1a1a] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative border-4 border-[#c13b2a]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-[#c13b2a] flex items-center justify-center hover:bg-[#a32f22] transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#c13b2a] flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white">{selectedArtist.name}</h3>
                  <p className="text-white/60">Postmodern Tasarım Temsilcisi</p>
                </div>
              </div>
              
              <p className="text-lg text-white/80 leading-relaxed mb-8">{selectedArtist.description}</p>
              
              <div className="border-t border-white/10 pt-8">
                <h4 className="text-xl font-bold text-[#c13b2a] mb-6">Örnek Çalışmalar</h4>
                <div className={`grid gap-4 ${selectedArtist.works.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {selectedArtist.works.map((work, index) => (
                    <div key={index} className="aspect-[3/4] overflow-hidden group relative">
                      <img 
                        src={work} 
                        alt={`${selectedArtist.name} - Eser ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Dots */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index ? "bg-[#c13b2a] scale-125" : "bg-[#c13b2a]/40 hover:bg-[#c13b2a]/70"
            }`}
            title={section.title}
          />
        ))}
      </nav>

      {/* Section 1: Intro */}
      <section
        id="intro"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#c13b2a] via-[#c13b2a] to-[#8b2a1f] opacity-90" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img src="/images/brutalist-building.jpg" alt="Brutalist Architecture" className="w-full h-full object-cover" />
        </div>

        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
            POSTMODERNİZM
          </h1>
          <h2 className="text-4xl md:text-5xl font-light text-white/90 mb-2">VE</h2>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">AFİŞ TASARIMI</h2>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest mb-12">
            ÇOKLUK, ÇELİŞKİ, YORUM
          </p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-white/90 leading-relaxed">
              Postmodernizm, modernizmin kesin doğrularına ve tek anlatısına karşı, çoğulcu, göreli ve bağlamsal bir bakış sunar. Afiş tasarımı da bu yaklaşımı görsel dile dönüştürerek izleyiciyi sorgulamaya ve katılmaya davet eder.
            </p>
          </div>

          <div className="mt-16 border-l-4 border-white/50 pl-6 text-left max-w-lg mx-auto">
            <Quote className="w-8 h-8 text-white/60 mb-4" />
            <p className="text-xl text-white/90 italic">
              &quot;Her şeyin merkezi olmadığı, her şeyin metin olduğu bir dünya.&quot;
            </p>
            <p className="text-white/60 mt-4">— Jean-François Lyotard</p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Section 2: Postmodernizm Nedir? */}
      <section
        id="nedir"
        className="min-h-screen flex items-center justify-center bg-[#d9d3c7] relative"
      >
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#c13b2a] clip-path-diagonal" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#c13b2a]" />
              <img
                src="/images/brutalist-building.jpg"
                alt="Postmodern Architecture"
                className="w-full aspect-square object-cover grayscale"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c13b2a]" />
              <div className="absolute top-4 right-4">
                <img src="/images/man-silhouette.jpg" alt="Man Silhouette" className="w-24 h-24 object-cover border-2 border-white" />
              </div>
            </div>
            
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-8">
                POSTMODERNİZM
                <br />
                <span className="text-[#c13b2a]">NEDİR?</span>
              </h2>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#c13b2a] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-lg text-[#1a1a1a]">
                    Modernizme bir tepki olarak ortaya çıkmıştır.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#c13b2a] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-lg text-[#1a1a1a]">
                    Kesin doğrular yerine çoğul gerçeklikleri savunur.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#c13b2a] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-lg text-[#1a1a1a]">
                    Parodi, ironi, pastiş ve melezleşme temel araçlarıdır.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#c13b2a] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-lg text-[#1a1a1a]">
                    Yüksek ve popüler kültür ayrımı ortadan kalkar.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#c13b2a] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">•</span>
                  </div>
                  <p className="text-lg text-[#1a1a1a]">
                    Bağlam, metinlerarasılık ve yorum ön plandadır.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Görsel Dil Özellikleri */}
      <section
        id="gorsel-dil"
        className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <img src="/images/city-of-layers.jpg" alt="City of Layers" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            GÖRSEL DİL
            <br />
            <span className="text-[#c13b2a]">ÖZELLİKLERİ</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gorselDilOzellikleri.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setSelectedFeature(feature)}
                className={`bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-[#c13b2a] hover:bg-white/10 transition-all cursor-pointer text-left group ${
                  index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {feature.icon === "grid" && <Grid3X3 className="w-12 h-12 text-[#c13b2a] mb-6 group-hover:scale-110 transition-transform" />}
                {feature.icon === "layers" && <Layers className="w-12 h-12 text-[#c13b2a] mb-6 group-hover:scale-110 transition-transform" />}
                {feature.icon === "building" && <Building2 className="w-12 h-12 text-[#c13b2a] mb-6 group-hover:scale-110 transition-transform" />}
                {feature.icon === "colors" && (
                  <div className="flex gap-2 mb-6 group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-[#c13b2a]" />
                    <div className="w-8 h-8 bg-[#1a1a1a] border border-white" />
                    <div className="w-8 h-8 bg-gray-500" />
                  </div>
                )}
                {feature.icon === "text" && <div className="text-4xl font-black text-[#c13b2a] mb-6 tracking-tighter group-hover:scale-110 transition-transform">Aa</div>}
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">Örnek görmek için tıklayın</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Afiş Tasarımında Postmodern Yaklaşım */}
      <section
        id="yaklaşim"
        className="min-h-screen flex items-center justify-center bg-[#c13b2a] relative"
      >
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img
            src="/images/brutalist-building.jpg"
            alt="Postmodern Design"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">
            AFİŞ TASARIMINDA
            <br />
            POSTMODERN YAKLAŞIM
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6">
                <span className="text-white font-bold text-2xl">•</span>
                <p className="text-lg text-white">Çok katmanlı kompozisyonlar</p>
              </li>
              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6">
                <span className="text-white font-bold text-2xl">•</span>
                <p className="text-lg text-white">Farklı tipografilerin bir arada kullanımı</p>
              </li>
              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6">
                <span className="text-white font-bold text-2xl">•</span>
                <p className="text-lg text-white">Görsel ve metinsel çarpışmalar</p>
              </li>
            </ul>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6">
                <span className="text-white font-bold text-2xl">•</span>
                <p className="text-lg text-white">İroni, mizah ve eleştirel ton</p>
              </li>
              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6">
                <span className="text-white font-bold text-2xl">•</span>
                <p className="text-lg text-white">Alıntı, kolaj ve yeniden bağlamlandırma</p>
              </li>
              <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6">
                <span className="text-white font-bold text-2xl">•</span>
                <p className="text-lg text-white">Okunurluktan çok düşündürmeyi hedefler</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Postmodern Afiş Galerisi */}
      <section
        id="poster-galeri"
        className="min-h-screen flex items-center justify-center bg-[#d9d3c7] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[#c13b2a]" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#c13b2a]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-4 text-center">
            POSTMODERN
            <br />
            <span className="text-[#c13b2a]">AFİŞ GALERİSİ</span>
          </h2>
          <p className="text-center text-[#1a1a1a]/70 mb-16 text-lg">
            Postmodern tasarım anlayışını yansıtan örnek afiş çalışmaları
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {postmodernPosters.map((poster, index) => (
              <div 
                key={index}
                className="group relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] cursor-pointer"
              >
                <img 
                  src={poster} 
                  alt={`Postmodern Afiş ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-medium">Örnek Afiş #{index + 1}</span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#c13b2a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Unutulmaması Gereken Notlar */}
      <section
        id="notlar"
        className="min-h-screen flex items-center justify-center bg-[#d9d3c7] relative"
      >
        <div className="absolute left-0 top-0 w-8 h-full bg-[#c13b2a]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-[#1a1a1a] mb-16">
            UNUTULMAMASI
            <br />
            <span className="text-[#c13b2a]">GEREKEN NOTLAR</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-[#c13b2a] flex-shrink-0 mt-1" />
              <p className="text-lg text-[#1a1a1a]">
                Postmodern tasarım bir stil değil, bir düşünme biçimidir.
              </p>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-[#c13b2a] flex-shrink-0 mt-1" />
              <p className="text-lg text-[#1a1a1a]">
                Mesajdan çok, mesajın nasıl sunulduğu önemlidir.
              </p>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-[#c13b2a] flex-shrink-0 mt-1" />
              <p className="text-lg text-[#1a1a1a]">
                İzleyici pasif alıcı değil, aktif yorumcudur.
              </p>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-[#c13b2a] flex-shrink-0 mt-1" />
              <p className="text-lg text-[#1a1a1a]">
                Bağlamı, göndermeleri ve alt metinleri okumak gerekir.
              </p>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-8 h-8 text-[#c13b2a] flex-shrink-0 mt-1" />
              <p className="text-lg text-[#1a1a1a]">
                Kurallar esnektir; önemli olan anlam üretmektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Önemli Temsilciler ve Etkiler */}
      <section
        id="temsilciler"
        className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            ÖNEMLİ TEMSİLCİLER
            <br />
            <span className="text-[#c13b2a]">VE ETKİLER</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temsilciler.map((artist, index) => (
              <button
                key={index}
                onClick={() => setSelectedArtist(artist)}
                className="group relative overflow-hidden text-left cursor-pointer"
              >
                <div className="bg-[#c13b2a] p-8 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                  <Users className="w-10 h-10 text-white/60 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                  <p className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors">Eserleri görmek için tıklayın</p>
                </div>
                <div className="absolute inset-0 border-2 border-white/30 -z-10" />
              </button>
            ))}
          </div>
          
          <div className="mt-16 flex items-center gap-8">
            <div className="flex-1 border-l-4 border-[#c13b2a] pl-6">
              <Quote className="w-8 h-8 text-white/40 mb-4" />
              <p className="text-xl text-white/80 italic">
                &quot;Tasarım, dünyayı olduğu gibi göstermez; onu yeniden kurar.&quot;
              </p>
            </div>
            <img src="/images/urban-street.jpg" alt="Urban Street" className="w-48 h-36 object-cover grayscale border-2 border-white/20" />
          </div>
        </div>
      </section>


      {/* Section 8: Tarihsel Gelişim */}
      <section
        id="tarihsel"
        className="min-h-screen flex items-center justify-center bg-[#c13b2a] relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <img src="/images/city-of-layers.jpg" alt="City of Layers" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16">
            TARİHSEL
            <br />
            GELİŞİM
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#c13b2a]" />
                </div>
                <div className="w-1 h-full bg-white/30 mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-black text-white mb-2">1960&apos;lar</h3>
                <p className="text-lg text-white/90">Modernizme eleştiriler yükselir.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#c13b2a]" />
                </div>
                <div className="w-1 h-full bg-white/30 mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-black text-white mb-2">1970&apos;ler</h3>
                <p className="text-lg text-white/90">Postmodern düşünce mimarlık ve sanatla yayılır.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#c13b2a]" />
                </div>
                <div className="w-1 h-full bg-white/30 mt-4" />
              </div>
              <div className="pb-8">
                <h3 className="text-2xl font-black text-white mb-2">1980&apos;ler</h3>
                <p className="text-lg text-white/90">Grafik tasarımda postmodern dil güç kazanır.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white flex items-center justify-center">
                  <Clock className="w-8 h-8 text-[#c13b2a]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">1990&apos;lar</h3>
                <p className="text-lg text-white/90">Dijital teknolojilerle birlikte yeni ifade biçimleri ortaya çıkar.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-white/10 backdrop-blur-sm p-6 max-w-md">
            <Quote className="w-6 h-6 text-white/60 mb-2" />
            <p className="text-white/90 italic">&quot;Anlam sabit değil, yoruma açıktır.&quot;</p>
          </div>
        </div>
      </section>

      {/* Section 9: Sonuç */}
      <section
        id="sonuc"
        className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/brutalist-building.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-20 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8">SONUÇ</h2>
          
          <div className="bg-[#c13b2a] p-8 md:p-12">
            <p className="text-xl md:text-2xl text-white leading-relaxed">
              Postmodern afiş tasarımı, çeşitliliği, çelişkiyi ve yaratıcılığı kucaklar. Tek bir doğru yerine, çoklu okumalara açık bir görsel dil oluşturur. Bu yaklaşım, tasarımı hem estetik hem de eleştirel bir araç haline getirir.
            </p>
          </div>
          
    
        </div>
      </section>

      {/* Section 10: Anahtar Kelimeler */}
      <section
        id="anahtar"
        className="min-h-screen flex items-center justify-center bg-[#c13b2a] relative overflow-hidden"
      >
        <div className="absolute left-0 bottom-0 w-1/4 h-2/3 opacity-30">
          <img src="/images/brutalist-building.jpg" alt="Architecture" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            ANAHTAR KELİMELER
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-6 text-center">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#1a1a1a] font-bold">Çoğulluk</p>
            </div>
            
            <div className="bg-white p-6 text-center">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#1a1a1a] font-bold">Parodi</p>
            </div>
            
            <div className="bg-white p-6 text-center">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid3X3 className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#1a1a1a] font-bold">Kolaj</p>
            </div>
            
            <div className="bg-white p-6 text-center">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Link className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#1a1a1a] font-bold">Bağlam</p>
            </div>
            
            <div className="bg-white p-6 text-center">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#1a1a1a] font-bold">Yorum</p>
            </div>
            
            <div className="bg-white p-6 text-center">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#1a1a1a] font-bold">Deneysel</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-white/80 text-lg mb-4">TASARIM: POSTMODERN BAKIŞLA</p>
            <p className="text-white text-2xl font-bold tracking-wider">DÜŞÜN, SORGULA, YENİDEN KUR.</p>
          </div>
          
        </div>
      </section>

      {/* Section 11: Kaynakçalar */}
      <section
        id="kaynakcalar"
        className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/city-of-layers.jpg"
            alt="Kaynakça arkaplan"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-12">
            KAYNAKÇALAR
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-[#c13b2a] p-8">
              <h3 className="text-2xl font-black text-white mb-6">Kitaplar</h3>
              <div className="space-y-5">
                <p className="text-white/90 leading-relaxed">Antmen, A. (2008). 20. Yüzyıl Batı Sanatında Akımlar. İstanbul: Sel Yayıncılık.</p>
                <p className="text-white/90 leading-relaxed">Barnard, M. (2013). Sanat, Tasarım ve Görsel Kültür. (G. Korkmaz, Çev.). Ankara: Ütopya Yayınevi.</p>
                <p className="text-white/90 leading-relaxed">Becer, E. (2015). Modern Sanat ve Grafik Tasarım. Ankara: Dost Kitabevi Yayınları.</p>
                <p className="text-white/90 leading-relaxed">Eskilson, S. J. (2012). Grafik Tasarım: Yeni Bir Tarih. (E. Kılıç, Çev.). İstanbul: Literatür Yayıncılık.</p>
                <p className="text-white/90 leading-relaxed">Meggs, P. B. & Purvis, A. W. (2012). Meggs&apos; History of Graphic Design. New Jersey: John Wiley & Sons.</p>
                <p className="text-white/90 leading-relaxed">Poynor, R. (2003). No More Rules: Graphic Design and Postmodernism. New Haven: Yale University Press.</p>
                <p className="text-white/90 leading-relaxed">Twemlow, A. (2011). Grafik Tasarım Ne İçindir?. (D. Öztürk, Çev.). İstanbul: YEM Yayın.</p>
              </div>
            </div>

            <div className="bg-[#c13b2a] p-8">
              <h3 className="text-2xl font-black text-white mb-6">İnternet Kaynakları ve Makaleler</h3>
              <div className="space-y-6">
                <div className="border-b border-white/30 pb-4">
                  <p className="text-white font-bold">Design Museum</p>
                  <p className="text-white/90">Postmodernism: Style and Subversion 1970–1990.</p>
                  <p className="text-white/80 text-sm">designmuseum.org</p>
                </div>
                <div className="border-b border-white/30 pb-4">
                  <p className="text-white font-bold">AIGA</p>
                  <p className="text-white/90">Eye Magazine Archive - Postmodernism and Graphic Design.</p>
                  <p className="text-white/80 text-sm">aiga.org</p>
                </div>
                <div>
                  <p className="text-white font-bold">Britannica</p>
                  <p className="text-white/90">Postmodernism in Art and Architecture.</p>
                  <p className="text-white/80 text-sm">britannica.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
