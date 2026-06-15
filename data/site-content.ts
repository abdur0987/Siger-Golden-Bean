export type Language = "en" | "id" | "ar";

export const languageOptions: Array<{
  code: Language;
  label: string;
  shortLabel: string;
  dir: "ltr" | "rtl";
}> = [
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "id", label: "Indonesia", shortLabel: "ID", dir: "ltr" },
  { code: "ar", label: "العربية", shortLabel: "AR", dir: "rtl" }
];

export const siteContent = {
  en: {
    nav: {
      items: [
        ["Home", "#home"],
        ["Origins", "#origins"],
        ["Products", "#products"],
        ["Process", "#process"],
        ["Gallery", "#gallery"],
        ["Certifications", "#certifications"],
        ["Sample", "#sample"],
        ["Contact", "#contact"]
      ],
      requestSample: "Request Sample",
      openMenu: "Open navigation menu"
    },
    hero: {
      eyebrow: "Sumatran Premium Coffee Export",
      title: "Siger Golden Bean",
      headline: "Premium Sumatra Coffee for Global Buyers",
      description:
        "Siger Golden Bean supplies selected Sumatran coffee with strong Lampung origin identity, prepared for importers, roasteries, cafes, resellers, and private label opportunities.",
      catalog: "Get Product Catalog",
      whatsapp: "WhatsApp",
      stats: [
        ["Origin", "Lampung"],
        ["Start", "Sample first"],
        ["Buyer", "B2B ready"]
      ]
    },
    origins: {
      eyebrow: "Lampung Coffee Origins",
      title: "Origin clarity for buyers who need more than a generic coffee offer.",
      description:
        "The landing page puts Lampung origin first, covering highland, west coast, and supporting Sumatra options for sample-based validation.",
      note:
        "Lampung is the core identity, with curated supporting origins introduced only when quality and consistency align with buyer needs.",
      keyAreas: "Key areas",
      items: [
        {
          region: "West Lampung",
          areas: ["Liwa", "Sekincau", "Belalau", "Sumber Jaya", "Way Tenong", "Air Hitam", "Batu Brak", "Suoh"],
          coffeeType: ["Robusta"],
          highlight: "Highland identity",
          description:
            "Selected robusta from highland areas and surrounding coffee-growing communities, positioned for buyers seeking bold body and clear Lampung origin."
        },
        {
          region: "Krui / West Coast Lampung",
          areas: ["Pesisir Tengah", "Pesisir Selatan", "Pesisir Utara", "Karya Penggawa", "Bengkunat"],
          coffeeType: ["Robusta", "Blend"],
          highlight: "Coastal origin story",
          description:
            "Coffee from the west coast supply network with a distinctive regional story and flexible blending potential for retail or cafe programs."
        },
        {
          region: "Tanggamus",
          areas: ["Ulubelu", "Pulau Panggung", "Air Naningan", "Sumberejo", "Gisting", "Kota Agung"],
          coffeeType: ["Robusta"],
          highlight: "Quality potential",
          description:
            "Origin support from established growing areas with strong potential for consistent robusta supply and sample-based buyer validation."
        },
        {
          region: "Way Kanan",
          areas: ["Banjit", "Kasui", "Rebang Tangkas", "Baradatu"],
          coffeeType: ["Robusta"],
          highlight: "Supply variation",
          description:
            "Additional Lampung supply line for buyers that need volume options, blend flexibility, and origin diversity within the robusta category."
        },
        {
          region: "North Lampung",
          areas: ["Bukit Kemuning", "Abung Tinggi", "Tanjung Raja", "Kotabumi"],
          coffeeType: ["Robusta"],
          highlight: "Volume support",
          description:
            "Supporting robusta origin for larger sourcing discussions, sample comparisons, and practical buyer programs that require steady availability."
        },
        {
          region: "Supporting Origins",
          areas: ["Lampung Tengah", "Pesawaran", "Pringsewu", "Pagar Alam", "Aceh Gayo"],
          coffeeType: ["Robusta", "Arabica", "Blend"],
          highlight: "Curated options",
          description:
            "Additional Sumatra options can be introduced when supplier quality, consistency, and buyer requirements are aligned."
        }
      ]
    },
    products: {
      eyebrow: "Product Selection",
      title: "Coffee options built for import, roasting, retail, and private label conversations.",
      description:
        "Products are presented as a sample-first catalog, keeping expectations practical while giving buyers clear paths to evaluate taste, form, and packaging.",
      askSample: "Ask for sample",
      forms: "Forms",
      suitableFor: "Suitable for",
      sampleAvailable: "Sample available",
      askAvailability: "Ask availability",
      items: [
        {
          name: "Lampung Robusta",
          origin: "Lampung",
          type: "Robusta",
          forms: ["Green bean", "Roasted bean", "Ground coffee"],
          suitableFor: ["Importers", "Roasteries", "Cafes"],
          sampleAvailable: true,
          notes: "Main robusta option with strong body and practical export positioning."
        },
        {
          name: "West Lampung Robusta",
          origin: "Liwa, Sekincau, Sumber Jaya",
          type: "Robusta",
          forms: ["Green bean", "Roasted bean"],
          suitableFor: ["Roasteries", "Private label"],
          sampleAvailable: true,
          notes: "Premium Lampung robusta profile for buyers seeking highland origin identity."
        },
        {
          name: "Krui / West Coast Coffee",
          origin: "Pesisir Barat / Krui",
          type: "Blend",
          forms: ["Roasted bean", "Ground coffee"],
          suitableFor: ["Retail packs", "Cafes", "Resellers"],
          sampleAvailable: true,
          notes: "Origin-led option with west coast Lampung storytelling for retail programs."
        },
        {
          name: "Tanggamus Robusta",
          origin: "Ulubelu, Pulau Panggung, Gisting",
          type: "Robusta",
          forms: ["Green bean", "Roasted bean"],
          suitableFor: ["Importers", "Roasteries"],
          sampleAvailable: true,
          notes: "Supporting robusta origin for comparison samples and buyer-specific blends."
        },
        {
          name: "House Blend Sumatra",
          origin: "Lampung and surrounding Sumatra origins",
          type: "Blend",
          forms: ["Roasted bean", "Ground coffee", "Drip bag"],
          suitableFor: ["Cafes", "Resellers", "Gift packs"],
          sampleAvailable: true,
          notes: "Flexible blend option for private label, cafe menus, and premium retail packs."
        },
        {
          name: "Aceh Gayo Arabica",
          origin: "Aceh Gayo",
          type: "Arabica",
          forms: ["Green bean", "Roasted bean"],
          suitableFor: ["Roasteries", "Specialty buyers"],
          sampleAvailable: true,
          notes: "Premium arabica comparison option for buyers reviewing a broader Sumatra catalog."
        },
        {
          name: "Ground Coffee Option",
          origin: "Lampung / Sumatra Blend",
          type: "Blend",
          forms: ["Fine grind", "Medium grind", "Retail pouch"],
          suitableFor: ["Arabic style", "Turkish style", "Retail"],
          sampleAvailable: true,
          notes: "Grind size can be discussed based on brewing culture and packaging needs."
        },
        {
          name: "Private Label Pack",
          origin: "Based on buyer requirement",
          type: "Blend",
          forms: ["Retail pouch", "Sample pack", "Carton"],
          suitableFor: ["Private label", "Distributors"],
          sampleAvailable: true,
          notes: "Packaging and label conversations can start after sample validation."
        }
      ]
    },
    process: {
      eyebrow: "From Bean to Export",
      title: "Our coffee preparation process keeps the buyer validation path clear.",
      description:
        "Every coffee starts from origin. We work through a sample-first process, allowing buyers to validate aroma, taste, roast profile, grind size, and packaging before moving into larger orders.",
      note:
        "We avoid unsupported claims. Certification, lab, and export documents are shared only when valid, applicable, and aligned with the actual order.",
      steps: [
        ["Sourcing from Origin", "Coffee is sourced from selected Lampung and Sumatra origin areas based on buyer needs."],
        ["Supplier & Farmer Selection", "Supplier selection considers quality, consistency, availability, and practical communication."],
        ["Bean Selection", "Initial sorting helps separate visible defects and align samples with expected standards."],
        ["Processing Check", "Natural, semi-washed, full-washed, honey, or other process details are discussed when available."],
        ["Roasting Option", "Light-medium, medium, medium-dark, or dark roast can be prepared for validation samples."],
        ["Grinding Option", "Whole bean or ground coffee options include fine grind discussions for Arabic or Turkish style."],
        ["Packing", "Sample packs, retail pouches, cartons, or bulk bags can be coordinated based on order type."],
        ["Quality Check", "Aroma, roast date, packing, label, batch, and sample condition are checked before dispatch."],
        ["Sample Dispatch", "Small samples are sent first so buyers can evaluate taste, aroma, grind, and packaging."],
        ["Quotation & Order Confirmation", "After sample feedback, quotation, quantity, packaging, and order terms can be confirmed."],
        ["Export Preparation", "Invoice, packing list, supporting documents, and forwarder coordination are prepared per shipment."]
      ]
    },
    quality: {
      eyebrow: "Quality Assurance",
      title: "Sample-first validation before larger orders.",
      description:
        "We recommend a sample-first process before larger orders, so buyers can validate taste, aroma, grind size, roast profile, and packaging expectations.",
      points: [
        "Selected origin",
        "Sample-first approach",
        "Batch-based supply",
        "Roast date control",
        "Packing check",
        "Buyer feedback loop",
        "Documentation readiness"
      ]
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Visual documentation categories for buyer confidence.",
      description:
        "A lightweight gallery highlights the types of product, sample, origin, packing, and shipment documentation buyers naturally expect during export discussions.",
      items: [
        ["Coffee Beans", "Beans", "/images/gallery/coffee-beans.webp", "Lampung robusta coffee beans selected for sample export"],
        ["Roasted Coffee", "Roasting", "/images/gallery/roasted-coffee.webp", "Siger Golden Bean roasted coffee preparation"],
        ["Ground Coffee", "Beans", "/images/gallery/ground-coffee.webp", "Ground coffee option prepared for buyer sample review"],
        ["Packaging", "Packing", "/images/gallery/packaging.webp", "Siger Golden Bean coffee packaging option"],
        ["Sample Pack", "Sample", "/images/gallery/sample-pack.webp", "Coffee sample pack preparation for overseas buyer"],
        ["Origin Area", "Origin", "/images/gallery/origin-lampung.webp", "Lampung coffee origin area visual"],
        ["Sorting Process", "Beans", "/images/gallery/sorting-process.webp", "Coffee bean sorting process before sample dispatch"],
        ["Roasting Process", "Roasting", "/images/gallery/roasting-process.webp", "Roasting process option for Sumatra coffee buyers"],
        ["Shipment Preparation", "Shipment", "/images/gallery/shipment-preparation.webp", "Coffee carton shipment preparation for export inquiry"]
      ]
    },
    certifications: {
      eyebrow: "Certifications & Legal Readiness",
      title: "Document readiness with careful, honest status labels.",
      description:
        "Business legality, product specifications, and export-related documents can be provided based on order requirements. We only display valid documents and avoid unsupported claims.",
      requestDocument: "Request Document",
      items: [
        ["NIB / Business Registration", "In Preparation", "Business legality information can be shared after verification."],
        ["Halal Certificate", "In Preparation", "Halal readiness status should follow the valid issued document."],
        ["PIRT / BPOM", "In Preparation", "Product registration status depends on final product form and market requirements."],
        ["Company Profile", "Available", "Brand and company introduction can be provided to qualified buyers."],
        ["Product Specification Sheet", "Available", "Specs can be prepared per coffee option, roast profile, grind, and packaging."],
        ["Certificate of Origin", "Available Upon Request", "Handled according to the export process and buyer destination requirements."],
        ["Phytosanitary Certificate", "If Required", "Relevant for green bean export or destination-specific import rules."],
        ["Invoice & Packing List", "Available", "Prepared per confirmed order, quantity, packing format, and shipment terms."],
        ["Lab Test / Cupping Notes", "Available Upon Request", "Can be discussed for buyers that need technical validation before larger orders."]
      ]
    },
    sample: {
      eyebrow: "Packaging & Sample Program",
      title: "Start with a small sample pack before larger orders.",
      description:
        "This helps both sides validate taste, roast profile, grind size, packaging, price expectations, and buyer communication before scaling.",
      requestQuotation: "Request Quotation",
      note:
        "Sample cost and shipping are buyer-paid or based on agreement. The first goal is validation of taste, aroma, packaging, and commercial fit.",
      points: [
        ["2-5 kg sample pack", "Start small before committing to larger orders and shipment planning."],
        ["Mix sample options", "Main robusta, house blend, and arabica comparison can be discussed."],
        ["Whole bean or ground", "Roasted, green bean, grind size, and retail pack expectations can be validated."]
      ]
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "A practical supplier story for buyers who want to test before they scale.",
      description:
        "Siger Golden Bean is positioned for trust-building first: clear origin, understandable product choices, a visible preparation process, and straightforward inquiry paths.",
      reasons: [
        "Strong Lampung origin identity",
        "Premium Sumatra positioning",
        "Sample-first approach",
        "Flexible for small buyers",
        "Suitable for roastery, cafe, reseller, and private label",
        "Export-minded communication",
        "Quality and documentation readiness"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Send a buyer inquiry and start from samples.",
      description:
        "Tell us your product interest, destination country, estimated quantity, and preferred sample format. For the MVP, inquiries can be sent by WhatsApp or email.",
      locationLabel: "Location",
      form: {
        name: "Name",
        namePlaceholder: "Buyer name",
        company: "Company",
        companyPlaceholder: "Company / roastery",
        country: "Country",
        countryPlaceholder: "Destination country",
        productInterest: "Product interest",
        selectProduct: "Select product",
        quantity: "Quantity estimate",
        quantityPlaceholder: "Example: sample / 50 kg / 1 ton",
        buyerContact: "WhatsApp / Email",
        buyerContactPlaceholder: "Your contact",
        message: "Message",
        messagePlaceholder: "Tell us your sample needs, roast preference, grind size, packaging, or export question.",
        send: "Send Inquiry",
        chat: "Chat via WhatsApp"
      },
      productInterests: [
        "Lampung Robusta",
        "West Lampung Robusta",
        "House Blend Sumatra",
        "Green Bean Option",
        "Roasted Bean Option",
        "Ground Coffee Option",
        "Private Label"
      ]
    },
    footer: {
      statement:
        "Siger Golden Bean is a Sumatra coffee export brand rooted in Lampung heritage, focused on selected robusta and specialty coffee options for buyer validation.",
      quickLinks: "Quick links",
      contact: "Contact",
      copyright: "All rights reserved."
    }
  },
  id: {
    nav: {
      items: [
        ["Beranda", "#home"],
        ["Origin", "#origins"],
        ["Produk", "#products"],
        ["Proses", "#process"],
        ["Galeri", "#gallery"],
        ["Legalitas", "#certifications"],
        ["Sampel", "#sample"],
        ["Kontak", "#contact"]
      ],
      requestSample: "Minta Sampel",
      openMenu: "Buka menu navigasi"
    },
    hero: {
      eyebrow: "Ekspor Kopi Premium Sumatra",
      title: "Siger Golden Bean",
      headline: "Kopi Sumatra Premium untuk Buyer Global",
      description:
        "Siger Golden Bean menyediakan kopi Sumatra pilihan dengan identitas origin Lampung yang kuat, disiapkan untuk importir, roastery, kafe, reseller, dan peluang private label.",
      catalog: "Minta Katalog Produk",
      whatsapp: "WhatsApp",
      stats: [
        ["Origin", "Lampung"],
        ["Mulai", "Sampel dulu"],
        ["Buyer", "Siap B2B"]
      ]
    },
    origins: {
      eyebrow: "Origin Kopi Lampung",
      title: "Origin yang jelas untuk buyer yang membutuhkan lebih dari sekadar penawaran kopi umum.",
      description:
        "Halaman ini menempatkan origin Lampung sebagai fokus utama, mencakup area dataran tinggi, pesisir barat, dan origin pendukung Sumatra untuk validasi berbasis sampel.",
      note:
        "Lampung adalah identitas utama, dengan origin pendukung yang dikurasi hanya saat kualitas dan konsistensinya sesuai kebutuhan buyer.",
      keyAreas: "Area utama",
      items: [
        {
          region: "Lampung Barat",
          areas: ["Liwa", "Sekincau", "Belalau", "Sumber Jaya", "Way Tenong", "Air Hitam", "Batu Brak", "Suoh"],
          coffeeType: ["Robusta"],
          highlight: "Identitas dataran tinggi",
          description:
            "Robusta pilihan dari area dataran tinggi dan komunitas penghasil kopi sekitar, cocok untuk buyer yang mencari body kuat dan origin Lampung yang jelas."
        },
        {
          region: "Krui / Pesisir Barat Lampung",
          areas: ["Pesisir Tengah", "Pesisir Selatan", "Pesisir Utara", "Karya Penggawa", "Bengkunat"],
          coffeeType: ["Robusta", "Blend"],
          highlight: "Cerita origin pesisir",
          description:
            "Kopi dari jaringan supply pesisir barat dengan cerita regional yang khas dan potensi blending untuk program retail atau kafe."
        },
        {
          region: "Tanggamus",
          areas: ["Ulubelu", "Pulau Panggung", "Air Naningan", "Sumberejo", "Gisting", "Kota Agung"],
          coffeeType: ["Robusta"],
          highlight: "Potensi kualitas",
          description:
            "Origin pendukung dari area tanam yang mapan dengan potensi supply robusta yang konsisten dan bisa divalidasi melalui sampel."
        },
        {
          region: "Way Kanan",
          areas: ["Banjit", "Kasui", "Rebang Tangkas", "Baradatu"],
          coffeeType: ["Robusta"],
          highlight: "Variasi supply",
          description:
            "Jalur supply Lampung tambahan untuk buyer yang membutuhkan opsi volume, fleksibilitas blend, dan ragam origin robusta."
        },
        {
          region: "Lampung Utara",
          areas: ["Bukit Kemuning", "Abung Tinggi", "Tanjung Raja", "Kotabumi"],
          coffeeType: ["Robusta"],
          highlight: "Pendukung volume",
          description:
            "Origin robusta pendukung untuk diskusi sourcing lebih besar, perbandingan sampel, dan program buyer yang membutuhkan ketersediaan stabil."
        },
        {
          region: "Origin Pendukung",
          areas: ["Lampung Tengah", "Pesawaran", "Pringsewu", "Pagar Alam", "Aceh Gayo"],
          coffeeType: ["Robusta", "Arabika", "Blend"],
          highlight: "Opsi terkurasi",
          description:
            "Opsi Sumatra tambahan dapat diperkenalkan saat kualitas supplier, konsistensi, dan kebutuhan buyer sudah selaras."
        }
      ]
    },
    products: {
      eyebrow: "Pilihan Produk",
      title: "Opsi kopi untuk importir, roasting, retail, dan private label.",
      description:
        "Produk ditampilkan sebagai katalog berbasis sampel agar buyer mudah mengevaluasi rasa, bentuk produk, dan kebutuhan kemasan.",
      askSample: "Minta sampel",
      forms: "Bentuk",
      suitableFor: "Cocok untuk",
      sampleAvailable: "Sampel tersedia",
      askAvailability: "Tanya ketersediaan",
      items: [
        {
          name: "Lampung Robusta",
          origin: "Lampung",
          type: "Robusta",
          forms: ["Green bean", "Roasted bean", "Kopi bubuk"],
          suitableFor: ["Importir", "Roastery", "Kafe"],
          sampleAvailable: true,
          notes: "Opsi robusta utama dengan body kuat dan posisi ekspor yang praktis."
        },
        {
          name: "West Lampung Robusta",
          origin: "Liwa, Sekincau, Sumber Jaya",
          type: "Robusta",
          forms: ["Green bean", "Roasted bean"],
          suitableFor: ["Roastery", "Private label"],
          sampleAvailable: true,
          notes: "Profil robusta Lampung premium untuk buyer yang mencari identitas dataran tinggi."
        },
        {
          name: "Krui / West Coast Coffee",
          origin: "Pesisir Barat / Krui",
          type: "Blend",
          forms: ["Roasted bean", "Kopi bubuk"],
          suitableFor: ["Retail pack", "Kafe", "Reseller"],
          sampleAvailable: true,
          notes: "Opsi berbasis origin pesisir barat Lampung untuk program retail."
        },
        {
          name: "Tanggamus Robusta",
          origin: "Ulubelu, Pulau Panggung, Gisting",
          type: "Robusta",
          forms: ["Green bean", "Roasted bean"],
          suitableFor: ["Importir", "Roastery"],
          sampleAvailable: true,
          notes: "Origin robusta pendukung untuk perbandingan sampel dan blend khusus buyer."
        },
        {
          name: "House Blend Sumatra",
          origin: "Lampung dan origin Sumatra sekitar",
          type: "Blend",
          forms: ["Roasted bean", "Kopi bubuk", "Drip bag"],
          suitableFor: ["Kafe", "Reseller", "Gift pack"],
          sampleAvailable: true,
          notes: "Opsi blend fleksibel untuk private label, menu kafe, dan retail premium."
        },
        {
          name: "Aceh Gayo Arabica",
          origin: "Aceh Gayo",
          type: "Arabika",
          forms: ["Green bean", "Roasted bean"],
          suitableFor: ["Roastery", "Buyer specialty"],
          sampleAvailable: true,
          notes: "Opsi arabika premium sebagai pembanding dalam katalog Sumatra."
        },
        {
          name: "Ground Coffee Option",
          origin: "Lampung / Sumatra Blend",
          type: "Blend",
          forms: ["Fine grind", "Medium grind", "Retail pouch"],
          suitableFor: ["Arabic style", "Turkish style", "Retail"],
          sampleAvailable: true,
          notes: "Ukuran grind dapat didiskusikan sesuai budaya seduh dan kebutuhan kemasan."
        },
        {
          name: "Private Label Pack",
          origin: "Sesuai kebutuhan buyer",
          type: "Blend",
          forms: ["Retail pouch", "Sample pack", "Carton"],
          suitableFor: ["Private label", "Distributor"],
          sampleAvailable: true,
          notes: "Diskusi kemasan dan label dapat dimulai setelah validasi sampel."
        }
      ]
    },
    process: {
      eyebrow: "Dari Biji ke Ekspor",
      title: "Proses persiapan kopi kami menjaga jalur validasi buyer tetap jelas.",
      description:
        "Setiap kopi dimulai dari origin. Kami menggunakan proses sample-first agar buyer bisa memvalidasi aroma, rasa, roast profile, grind size, dan kemasan sebelum order lebih besar.",
      note:
        "Kami menghindari klaim yang tidak didukung. Sertifikasi, lab, dan dokumen ekspor hanya dibagikan saat valid, relevan, dan sesuai order aktual.",
      steps: [
        ["Sourcing dari Origin", "Kopi diambil dari area origin Lampung dan Sumatra pilihan sesuai kebutuhan buyer."],
        ["Seleksi Supplier & Petani", "Seleksi mempertimbangkan kualitas, konsistensi, ketersediaan, dan komunikasi praktis."],
        ["Seleksi Biji", "Sortasi awal membantu memisahkan defect visual dan menyelaraskan sampel dengan standar yang diharapkan."],
        ["Cek Proses", "Natural, semi-washed, full-washed, honey, atau detail proses lain dibahas saat tersedia."],
        ["Opsi Roasting", "Light-medium, medium, medium-dark, atau dark roast dapat disiapkan untuk sampel validasi."],
        ["Opsi Grinding", "Whole bean atau ground coffee, termasuk fine grind untuk Arabic atau Turkish style."],
        ["Packing", "Sample pack, retail pouch, carton, atau bulk bag dapat disesuaikan dengan jenis order."],
        ["Quality Check", "Aroma, roast date, packing, label, batch, dan kondisi sampel dicek sebelum dikirim."],
        ["Pengiriman Sampel", "Sampel kecil dikirim lebih dulu agar buyer dapat mengevaluasi rasa, aroma, grind, dan kemasan."],
        ["Quotation & Konfirmasi Order", "Setelah feedback sampel, quotation, kuantitas, kemasan, dan term order dapat dikonfirmasi."],
        ["Persiapan Ekspor", "Invoice, packing list, dokumen pendukung, dan koordinasi forwarder disiapkan per shipment."]
      ]
    },
    quality: {
      eyebrow: "Jaminan Kualitas",
      title: "Validasi sampel sebelum order lebih besar.",
      description:
        "Kami merekomendasikan proses sample-first sebelum order besar, agar buyer dapat memvalidasi rasa, aroma, grind size, roast profile, dan ekspektasi kemasan.",
      points: [
        "Origin terpilih",
        "Pendekatan sample-first",
        "Supply berbasis batch",
        "Kontrol roast date",
        "Cek packing",
        "Feedback loop buyer",
        "Kesiapan dokumen"
      ]
    },
    gallery: {
      eyebrow: "Galeri",
      title: "Kategori dokumentasi visual untuk membangun kepercayaan buyer.",
      description:
        "Galeri ringan menampilkan kategori produk, sampel, origin, packing, dan shipment yang biasanya dibutuhkan buyer dalam diskusi ekspor.",
      items: [
        ["Biji Kopi", "Beans", "/images/gallery/coffee-beans.webp", "Biji robusta Lampung pilihan untuk sampel ekspor"],
        ["Roasted Coffee", "Roasting", "/images/gallery/roasted-coffee.webp", "Persiapan roasted coffee Siger Golden Bean"],
        ["Kopi Bubuk", "Beans", "/images/gallery/ground-coffee.webp", "Opsi kopi bubuk untuk review sampel buyer"],
        ["Kemasan", "Packing", "/images/gallery/packaging.webp", "Opsi kemasan kopi Siger Golden Bean"],
        ["Sample Pack", "Sample", "/images/gallery/sample-pack.webp", "Persiapan sample pack kopi untuk buyer luar negeri"],
        ["Area Origin", "Origin", "/images/gallery/origin-lampung.webp", "Visual area origin kopi Lampung"],
        ["Proses Sortasi", "Beans", "/images/gallery/sorting-process.webp", "Proses sortasi biji kopi sebelum pengiriman sampel"],
        ["Proses Roasting", "Roasting", "/images/gallery/roasting-process.webp", "Opsi proses roasting untuk buyer kopi Sumatra"],
        ["Persiapan Shipment", "Shipment", "/images/gallery/shipment-preparation.webp", "Persiapan carton kopi untuk inquiry ekspor"]
      ]
    },
    certifications: {
      eyebrow: "Sertifikasi & Kesiapan Legal",
      title: "Kesiapan dokumen dengan status yang hati-hati dan jujur.",
      description:
        "Legalitas bisnis, spesifikasi produk, dan dokumen terkait ekspor dapat disediakan sesuai kebutuhan order. Kami hanya menampilkan dokumen valid dan menghindari klaim tanpa dukungan.",
      requestDocument: "Minta Dokumen",
      items: [
        ["NIB / Registrasi Bisnis", "Dalam Persiapan", "Informasi legalitas bisnis dapat dibagikan setelah verifikasi."],
        ["Sertifikat Halal", "Dalam Persiapan", "Status halal harus mengikuti dokumen resmi yang valid."],
        ["PIRT / BPOM", "Dalam Persiapan", "Status registrasi produk bergantung pada bentuk produk final dan kebutuhan pasar."],
        ["Company Profile", "Tersedia", "Profil brand dan perusahaan dapat diberikan kepada buyer yang relevan."],
        ["Product Specification Sheet", "Tersedia", "Spesifikasi dapat disiapkan per opsi kopi, roast profile, grind, dan kemasan."],
        ["Certificate of Origin", "Tersedia Saat Diminta", "Ditangani sesuai proses ekspor dan persyaratan negara tujuan buyer."],
        ["Phytosanitary Certificate", "Jika Diperlukan", "Relevan untuk ekspor green bean atau aturan impor negara tujuan."],
        ["Invoice & Packing List", "Tersedia", "Disiapkan per order, kuantitas, format packing, dan term shipment yang sudah dikonfirmasi."],
        ["Lab Test / Cupping Notes", "Tersedia Saat Diminta", "Dapat didiskusikan untuk buyer yang membutuhkan validasi teknis sebelum order lebih besar."]
      ]
    },
    sample: {
      eyebrow: "Program Kemasan & Sampel",
      title: "Mulai dengan sample pack kecil sebelum order lebih besar.",
      description:
        "Ini membantu kedua pihak memvalidasi rasa, roast profile, grind size, kemasan, ekspektasi harga, dan komunikasi buyer sebelum scaling.",
      requestQuotation: "Minta Quotation",
      note:
        "Biaya sampel dan pengiriman ditanggung buyer atau berdasarkan kesepakatan. Tujuan awalnya adalah validasi rasa, aroma, kemasan, dan kecocokan komersial.",
      points: [
        ["Sample pack 2-5 kg", "Mulai kecil sebelum komitmen order lebih besar dan rencana shipment."],
        ["Opsi mix sample", "Robusta utama, house blend, dan pembanding arabika dapat didiskusikan."],
        ["Whole bean atau ground", "Roasted, green bean, grind size, dan ekspektasi retail pack dapat divalidasi."]
      ]
    },
    why: {
      eyebrow: "Mengapa Memilih Kami",
      title: "Cerita supplier yang praktis untuk buyer yang ingin menguji sebelum scaling.",
      description:
        "Siger Golden Bean diposisikan untuk trust-building: origin jelas, pilihan produk mudah dipahami, proses persiapan terlihat, dan jalur inquiry sederhana.",
      reasons: [
        "Identitas origin Lampung yang kuat",
        "Positioning premium Sumatra",
        "Pendekatan sample-first",
        "Fleksibel untuk buyer kecil",
        "Cocok untuk roastery, kafe, reseller, dan private label",
        "Komunikasi berorientasi ekspor",
        "Kesiapan kualitas dan dokumen"
      ]
    },
    contact: {
      eyebrow: "Kontak",
      title: "Kirim inquiry buyer dan mulai dari sampel.",
      description:
        "Sampaikan produk yang diminati, negara tujuan, estimasi kuantitas, dan format sampel yang diinginkan. Untuk MVP, inquiry dapat dikirim melalui WhatsApp atau email.",
      locationLabel: "Lokasi",
      form: {
        name: "Nama",
        namePlaceholder: "Nama buyer",
        company: "Perusahaan",
        companyPlaceholder: "Perusahaan / roastery",
        country: "Negara",
        countryPlaceholder: "Negara tujuan",
        productInterest: "Minat produk",
        selectProduct: "Pilih produk",
        quantity: "Estimasi kuantitas",
        quantityPlaceholder: "Contoh: sampel / 50 kg / 1 ton",
        buyerContact: "WhatsApp / Email",
        buyerContactPlaceholder: "Kontak Anda",
        message: "Pesan",
        messagePlaceholder: "Ceritakan kebutuhan sampel, roast preference, grind size, kemasan, atau pertanyaan ekspor.",
        send: "Kirim Inquiry",
        chat: "Chat via WhatsApp"
      },
      productInterests: [
        "Lampung Robusta",
        "West Lampung Robusta",
        "House Blend Sumatra",
        "Green Bean Option",
        "Roasted Bean Option",
        "Ground Coffee Option",
        "Private Label"
      ]
    },
    footer: {
      statement:
        "Siger Golden Bean adalah brand ekspor kopi Sumatra yang berakar pada heritage Lampung, fokus pada robusta pilihan dan opsi kopi specialty untuk validasi buyer.",
      quickLinks: "Tautan cepat",
      contact: "Kontak",
      copyright: "Seluruh hak cipta dilindungi."
    }
  },
  ar: {
    nav: {
      items: [
        ["الرئيسية", "#home"],
        ["المناطق", "#origins"],
        ["المنتجات", "#products"],
        ["العملية", "#process"],
        ["المعرض", "#gallery"],
        ["الوثائق", "#certifications"],
        ["العينة", "#sample"],
        ["التواصل", "#contact"]
      ],
      requestSample: "طلب عينة",
      openMenu: "فتح قائمة التنقل"
    },
    hero: {
      eyebrow: "تصدير قهوة سومطرة الممتازة",
      title: "Siger Golden Bean",
      headline: "قهوة سومطرة ممتازة للمشترين العالميين",
      description:
        "توفر Siger Golden Bean قهوة سومطرية مختارة بهوية قوية من لامبونغ، ومجهزة للمستوردين والمحمصات والمقاهي والموزعين وفرص العلامات الخاصة.",
      catalog: "طلب كتالوج المنتجات",
      whatsapp: "واتساب",
      stats: [
        ["المنشأ", "لامبونغ"],
        ["البداية", "العينة أولا"],
        ["المشتري", "جاهز B2B"]
      ]
    },
    origins: {
      eyebrow: "مناطق قهوة لامبونغ",
      title: "وضوح المنشأ للمشترين الذين يحتاجون إلى أكثر من عرض قهوة عام.",
      description:
        "تركز الصفحة على منشأ لامبونغ، وتشمل المرتفعات والساحل الغربي وخيارات سومطرة الداعمة للتحقق عبر العينات.",
      note:
        "لامبونغ هي الهوية الأساسية، مع إضافة مناطق داعمة مختارة فقط عندما تتوافق الجودة والاستمرارية مع احتياجات المشتري.",
      keyAreas: "المناطق الرئيسية",
      items: [
        {
          region: "غرب لامبونغ",
          areas: ["Liwa", "Sekincau", "Belalau", "Sumber Jaya", "Way Tenong", "Air Hitam", "Batu Brak", "Suoh"],
          coffeeType: ["روبوستا"],
          highlight: "هوية المرتفعات",
          description:
            "روبوستا مختارة من مناطق المرتفعات ومجتمعات زراعة القهوة، مناسبة للمشترين الذين يبحثون عن قوام قوي ومنشأ واضح من لامبونغ."
        },
        {
          region: "Krui / الساحل الغربي لامبونغ",
          areas: ["Pesisir Tengah", "Pesisir Selatan", "Pesisir Utara", "Karya Penggawa", "Bengkunat"],
          coffeeType: ["روبوستا", "مزيج"],
          highlight: "قصة منشأ ساحلية",
          description:
            "قهوة من شبكة توريد الساحل الغربي بقصة إقليمية مميزة وإمكانات مزج مرنة لبرامج البيع بالتجزئة أو المقاهي."
        },
        {
          region: "Tanggamus",
          areas: ["Ulubelu", "Pulau Panggung", "Air Naningan", "Sumberejo", "Gisting", "Kota Agung"],
          coffeeType: ["روبوستا"],
          highlight: "إمكانات جودة",
          description:
            "منشأ داعم من مناطق زراعة معروفة مع إمكانية توريد روبوستا مستقرة ويمكن التحقق منها عبر العينة."
        },
        {
          region: "Way Kanan",
          areas: ["Banjit", "Kasui", "Rebang Tangkas", "Baradatu"],
          coffeeType: ["روبوستا"],
          highlight: "تنوع التوريد",
          description:
            "خط توريد إضافي من لامبونغ للمشترين الذين يحتاجون إلى خيارات حجم ومرونة مزج وتنوع منشأ ضمن فئة الروبوستا."
        },
        {
          region: "شمال لامبونغ",
          areas: ["Bukit Kemuning", "Abung Tinggi", "Tanjung Raja", "Kotabumi"],
          coffeeType: ["روبوستا"],
          highlight: "دعم الحجم",
          description:
            "منشأ روبوستا داعم لمناقشات التوريد الأكبر ومقارنة العينات وبرامج المشترين التي تحتاج إلى توفر مستقر."
        },
        {
          region: "مناطق داعمة",
          areas: ["Lampung Tengah", "Pesawaran", "Pringsewu", "Pagar Alam", "Aceh Gayo"],
          coffeeType: ["روبوستا", "أرابيكا", "مزيج"],
          highlight: "خيارات مختارة",
          description:
            "يمكن تقديم خيارات إضافية من سومطرة عندما تتوافق جودة المورد والاستمرارية ومتطلبات المشتري."
        }
      ]
    },
    products: {
      eyebrow: "اختيار المنتجات",
      title: "خيارات قهوة للاستيراد والتحميص والتجزئة والعلامات الخاصة.",
      description:
        "تقدم المنتجات ككتالوج يبدأ بالعينة، ليتمكن المشتري من تقييم الطعم وشكل المنتج والتعبئة بوضوح.",
      askSample: "طلب عينة",
      forms: "الأشكال",
      suitableFor: "مناسب لـ",
      sampleAvailable: "العينة متاحة",
      askAvailability: "اسأل عن التوفر",
      items: [
        {
          name: "Lampung Robusta",
          origin: "لامبونغ",
          type: "روبوستا",
          forms: ["حبوب خضراء", "حبوب محمصة", "قهوة مطحونة"],
          suitableFor: ["مستوردون", "محمصات", "مقاه"],
          sampleAvailable: true,
          notes: "الخيار الرئيسي من الروبوستا بقوام قوي وتموضع عملي للتصدير."
        },
        {
          name: "West Lampung Robusta",
          origin: "Liwa, Sekincau, Sumber Jaya",
          type: "روبوستا",
          forms: ["حبوب خضراء", "حبوب محمصة"],
          suitableFor: ["محمصات", "علامة خاصة"],
          sampleAvailable: true,
          notes: "ملف روبوستا ممتاز من لامبونغ للمشترين الباحثين عن هوية المرتفعات."
        },
        {
          name: "Krui / West Coast Coffee",
          origin: "Pesisir Barat / Krui",
          type: "مزيج",
          forms: ["حبوب محمصة", "قهوة مطحونة"],
          suitableFor: ["عبوات تجزئة", "مقاه", "موزعون"],
          sampleAvailable: true,
          notes: "خيار قائم على منشأ الساحل الغربي لامبونغ لبرامج التجزئة."
        },
        {
          name: "Tanggamus Robusta",
          origin: "Ulubelu, Pulau Panggung, Gisting",
          type: "روبوستا",
          forms: ["حبوب خضراء", "حبوب محمصة"],
          suitableFor: ["مستوردون", "محمصات"],
          sampleAvailable: true,
          notes: "منشأ روبوستا داعم لمقارنة العينات ومزيج مخصص للمشتري."
        },
        {
          name: "House Blend Sumatra",
          origin: "لامبونغ ومناطق سومطرة المحيطة",
          type: "مزيج",
          forms: ["حبوب محمصة", "قهوة مطحونة", "Drip bag"],
          suitableFor: ["مقاه", "موزعون", "هدايا"],
          sampleAvailable: true,
          notes: "خيار مزيج مرن للعلامات الخاصة وقوائم المقاهي وعبوات التجزئة الممتازة."
        },
        {
          name: "Aceh Gayo Arabica",
          origin: "Aceh Gayo",
          type: "أرابيكا",
          forms: ["حبوب خضراء", "حبوب محمصة"],
          suitableFor: ["محمصات", "مشترو specialty"],
          sampleAvailable: true,
          notes: "خيار أرابيكا ممتاز للمقارنة ضمن كتالوج سومطرة الأوسع."
        },
        {
          name: "Ground Coffee Option",
          origin: "مزيج لامبونغ / سومطرة",
          type: "مزيج",
          forms: ["طحن ناعم", "طحن متوسط", "عبوة تجزئة"],
          suitableFor: ["النمط العربي", "النمط التركي", "التجزئة"],
          sampleAvailable: true,
          notes: "يمكن مناقشة درجة الطحن حسب ثقافة التحضير واحتياجات التعبئة."
        },
        {
          name: "Private Label Pack",
          origin: "حسب متطلبات المشتري",
          type: "مزيج",
          forms: ["عبوة تجزئة", "عبوة عينة", "كرتون"],
          suitableFor: ["علامة خاصة", "موزعون"],
          sampleAvailable: true,
          notes: "يمكن بدء نقاش التعبئة والملصق بعد التحقق من العينة."
        }
      ]
    },
    process: {
      eyebrow: "من الحبة إلى التصدير",
      title: "تحافظ عملية تجهيز القهوة لدينا على مسار تحقق واضح للمشتري.",
      description:
        "تبدأ كل قهوة من المنشأ. نعمل بمنهج العينة أولا حتى يتحقق المشتري من الرائحة والطعم وملف التحميص ودرجة الطحن والتعبئة قبل الطلبات الأكبر.",
      note:
        "نتجنب الادعاءات غير المدعومة. تتم مشاركة الشهادات والفحوصات ووثائق التصدير فقط عندما تكون صالحة ومناسبة ومتوافقة مع الطلب الفعلي.",
      steps: [
        ["التوريد من المنشأ", "يتم توريد القهوة من مناطق مختارة في لامبونغ وسومطرة حسب احتياجات المشتري."],
        ["اختيار الموردين والمزارعين", "يراعي الاختيار الجودة والاستمرارية والتوفر وسهولة التواصل."],
        ["اختيار الحبوب", "تساعد الفرز الأولي على إزالة العيوب المرئية ومواءمة العينات مع المعايير المطلوبة."],
        ["فحص المعالجة", "تتم مناقشة natural أو semi-washed أو full-washed أو honey أو غيرها عند توفرها."],
        ["خيار التحميص", "يمكن تجهيز light-medium أو medium أو medium-dark أو dark roast لعينات التحقق."],
        ["خيار الطحن", "تشمل الخيارات الحبوب الكاملة أو المطحونة، بما في ذلك الطحن الناعم للنمط العربي أو التركي."],
        ["التعبئة", "يمكن تنسيق عينات أو أكياس تجزئة أو كراتين أو أكياس bulk حسب نوع الطلب."],
        ["فحص الجودة", "يتم فحص الرائحة وتاريخ التحميص والتعبئة والملصق والدفعة وحالة العينة قبل الإرسال."],
        ["إرسال العينة", "ترسل عينات صغيرة أولا حتى يقيّم المشتري الطعم والرائحة والطحن والتعبئة."],
        ["العرض وتأكيد الطلب", "بعد ملاحظات العينة، يتم تأكيد السعر والكمية والتعبئة وشروط الطلب."],
        ["تجهيز التصدير", "يتم تجهيز الفاتورة وقائمة التعبئة والوثائق الداعمة والتنسيق مع الشاحن لكل شحنة."]
      ]
    },
    quality: {
      eyebrow: "ضمان الجودة",
      title: "التحقق بالعينة قبل الطلبات الأكبر.",
      description:
        "نوصي بعملية العينة أولا قبل الطلبات الكبيرة، حتى يتحقق المشتري من الطعم والرائحة ودرجة الطحن وملف التحميص وتوقعات التعبئة.",
      points: [
        "منشأ مختار",
        "منهج العينة أولا",
        "توريد حسب الدفعات",
        "تحكم بتاريخ التحميص",
        "فحص التعبئة",
        "حلقة ملاحظات المشتري",
        "جاهزية الوثائق"
      ]
    },
    gallery: {
      eyebrow: "المعرض",
      title: "فئات توثيق بصري لتعزيز ثقة المشتري.",
      description:
        "يعرض المعرض الخفيف أنواع المنتجات والعينات والمنشأ والتعبئة والشحن التي يتوقعها المشترون عادة في نقاشات التصدير.",
      items: [
        ["حبوب القهوة", "حبوب", "/images/gallery/coffee-beans.webp", "حبوب روبوستا لامبونغ مختارة لعينة التصدير"],
        ["قهوة محمصة", "تحميص", "/images/gallery/roasted-coffee.webp", "تحضير قهوة Siger Golden Bean المحمصة"],
        ["قهوة مطحونة", "حبوب", "/images/gallery/ground-coffee.webp", "خيار قهوة مطحونة لمراجعة عينة المشتري"],
        ["التعبئة", "تعبئة", "/images/gallery/packaging.webp", "خيار تعبئة قهوة Siger Golden Bean"],
        ["عبوة عينة", "عينة", "/images/gallery/sample-pack.webp", "تحضير عينة قهوة للمشتري الخارجي"],
        ["منطقة المنشأ", "منشأ", "/images/gallery/origin-lampung.webp", "صورة توضيحية لمنطقة منشأ قهوة لامبونغ"],
        ["عملية الفرز", "حبوب", "/images/gallery/sorting-process.webp", "عملية فرز الحبوب قبل إرسال العينة"],
        ["عملية التحميص", "تحميص", "/images/gallery/roasting-process.webp", "خيار عملية التحميص لمشتري قهوة سومطرة"],
        ["تجهيز الشحن", "شحن", "/images/gallery/shipment-preparation.webp", "تجهيز كراتين القهوة لاستفسار التصدير"]
      ]
    },
    certifications: {
      eyebrow: "الشهادات والجاهزية القانونية",
      title: "جاهزية الوثائق مع حالات واضحة وصادقة.",
      description:
        "يمكن توفير القانونية التجارية ومواصفات المنتج والوثائق المتعلقة بالتصدير حسب متطلبات الطلب. نعرض فقط الوثائق الصالحة ونتجنب الادعاءات غير المدعومة.",
      requestDocument: "طلب وثيقة",
      items: [
        ["NIB / تسجيل الأعمال", "قيد التحضير", "يمكن مشاركة معلومات القانونية بعد التحقق."],
        ["شهادة حلال", "قيد التحضير", "يجب أن يتبع وضع الحلال الوثيقة الرسمية الصالحة."],
        ["PIRT / BPOM", "قيد التحضير", "يعتمد تسجيل المنتج على شكل المنتج النهائي ومتطلبات السوق."],
        ["ملف الشركة", "متاح", "يمكن تقديم تعريف العلامة والشركة للمشترين المؤهلين."],
        ["ورقة مواصفات المنتج", "متاح", "يمكن إعداد المواصفات لكل خيار قهوة وتحميص وطحن وتعبئة."],
        ["شهادة المنشأ", "متاحة عند الطلب", "تعالج حسب عملية التصدير ومتطلبات بلد وجهة المشتري."],
        ["شهادة الصحة النباتية", "إذا لزم الأمر", "مناسبة لتصدير الحبوب الخضراء أو قواعد الاستيراد الخاصة بالوجهة."],
        ["الفاتورة وقائمة التعبئة", "متاح", "تعد لكل طلب مؤكد حسب الكمية وشكل التعبئة وشروط الشحن."],
        ["اختبار مختبر / ملاحظات تذوق", "متاح عند الطلب", "يمكن مناقشتها للمشترين الذين يحتاجون إلى تحقق فني قبل الطلبات الأكبر."]
      ]
    },
    sample: {
      eyebrow: "برنامج التعبئة والعينات",
      title: "ابدأ بعبوة عينة صغيرة قبل الطلبات الأكبر.",
      description:
        "يساعد ذلك الطرفين على التحقق من الطعم وملف التحميص ودرجة الطحن والتعبئة وتوقعات السعر والتواصل قبل التوسع.",
      requestQuotation: "طلب عرض سعر",
      note:
        "تكلفة العينة والشحن على المشتري أو حسب الاتفاق. الهدف الأول هو التحقق من الطعم والرائحة والتعبئة والملاءمة التجارية.",
      points: [
        ["عبوة عينة 2-5 كجم", "ابدأ بكمية صغيرة قبل الالتزام بطلبات أكبر وخطة شحن."],
        ["خيارات عينة مختلطة", "يمكن مناقشة الروبوستا الرئيسية والمزيج المنزلي ومقارنة الأرابيكا."],
        ["حبوب كاملة أو مطحونة", "يمكن التحقق من التحميص والحبوب الخضراء ودرجة الطحن وتوقعات عبوات التجزئة."]
      ]
    },
    why: {
      eyebrow: "لماذا نحن",
      title: "قصة مورد عملية للمشترين الذين يريدون الاختبار قبل التوسع.",
      description:
        "يتموضع Siger Golden Bean لبناء الثقة أولا: منشأ واضح، خيارات منتجات مفهومة، عملية تجهيز مرئية، ومسارات استفسار مباشرة.",
      reasons: [
        "هوية منشأ قوية من لامبونغ",
        "تموضع ممتاز لسومطرة",
        "منهج العينة أولا",
        "مرونة للمشترين الصغار",
        "مناسب للمحمصات والمقاهي والموزعين والعلامات الخاصة",
        "تواصل موجه للتصدير",
        "جاهزية الجودة والوثائق"
      ]
    },
    contact: {
      eyebrow: "التواصل",
      title: "أرسل استفسار المشتري وابدأ بالعينة.",
      description:
        "أخبرنا بالمنتج المطلوب وبلد الوجهة والكمية التقديرية وشكل العينة المفضل. في نسخة MVP يمكن إرسال الاستفسارات عبر واتساب أو البريد الإلكتروني.",
      locationLabel: "الموقع",
      form: {
        name: "الاسم",
        namePlaceholder: "اسم المشتري",
        company: "الشركة",
        companyPlaceholder: "الشركة / المحمصة",
        country: "الدولة",
        countryPlaceholder: "بلد الوجهة",
        productInterest: "المنتج المطلوب",
        selectProduct: "اختر المنتج",
        quantity: "الكمية التقديرية",
        quantityPlaceholder: "مثال: عينة / 50 كجم / 1 طن",
        buyerContact: "واتساب / بريد إلكتروني",
        buyerContactPlaceholder: "بيانات التواصل",
        message: "الرسالة",
        messagePlaceholder: "اذكر احتياج العينة أو التحميص أو الطحن أو التعبئة أو سؤال التصدير.",
        send: "إرسال الاستفسار",
        chat: "التواصل عبر واتساب"
      },
      productInterests: [
        "Lampung Robusta",
        "West Lampung Robusta",
        "House Blend Sumatra",
        "Green Bean Option",
        "Roasted Bean Option",
        "Ground Coffee Option",
        "Private Label"
      ]
    },
    footer: {
      statement:
        "Siger Golden Bean هي علامة تصدير قهوة سومطرية متجذرة في تراث لامبونغ، وتركز على روبوستا مختارة وخيارات قهوة specialty للتحقق من قبل المشتري.",
      quickLinks: "روابط سريعة",
      contact: "التواصل",
      copyright: "جميع الحقوق محفوظة."
    }
  }
} as const;

export type SiteContent = (typeof siteContent)[Language];
