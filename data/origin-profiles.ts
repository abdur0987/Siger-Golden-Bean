import type { Language } from "@/data/site-content";

export type OriginProfile = {
  slug: string;
  heroImage: string;
  videoSrc?: string;
  accent: string;
  galleryImages: string[];
  content: Record<Language, OriginProfileCopy>;
};

type OriginProfileCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  profileTitle: string;
  profile: Array<[string, string]>;
  tasteTitle: string;
  taste: string[];
  sampleTitle: string;
  sample: Array<[string, string]>;
  documentsTitle: string;
  documentsIntro: string;
  documents: Array<[string, string]>;
  quotationTitle: string;
  quotationDescription: string;
  ctaPrimary: string;
  ctaSecondary: string;
  storiesTitle: string;
  storiesIntro: string;
  stories: string[];
  galleryTitle: string;
  galleryCaptions: string[];
  videoTitle: string;
  videoNote: string;
  backLabel: string;
};

export const originProfiles: OriginProfile[] = [
  {
    slug: "west-lampung",
    heroImage: "/images/gallery/origin-lampung.webp",
    accent: "Highland Lampung",
    galleryImages: [
      "/images/gallery/coffee-beans.webp",
      "/images/gallery/sorting-process.webp",
      "/images/gallery/sample-pack.webp"
    ],
    content: {
      en: {
        eyebrow: "Origin Detail",
        title: "West Lampung Robusta",
        subtitle: "Liwa, Sekincau, Sumber Jaya, Way Tenong, Air Hitam, Batu Brak, Suoh",
        intro:
          "A highland Lampung profile for buyers seeking firm body, practical export preparation, and a clear origin identity that can be validated through samples.",
        profileTitle: "Coffee Profile",
        profile: [
          ["Coffee type", "Robusta"],
          ["Product form", "Green bean, roasted bean, ground coffee by request"],
          ["Primary areas", "Liwa, Sekincau, Sumber Jaya, Way Tenong"],
          ["Positioning", "Premium Lampung robusta for roasters, importers, and private label"],
          ["Best use", "Espresso blend, milk-based drinks, dark roast retail, bold house blend"]
        ],
        tasteTitle: "Taste Direction",
        taste: ["Bold body", "Cocoa-like bitterness", "Earthy depth", "Low acidity", "Long, sturdy finish"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Sample pack", "2-5 kg sample format for buyer validation"],
          ["Roast option", "Green, medium, medium-dark, or dark roast discussion"],
          ["Packing option", "Sample pouch, retail pouch, carton, or buyer-requested format"],
          ["Buyer check", "Taste, aroma, roast date, grind size, label, and packing condition"]
        ],
        documentsTitle: "Documents & Export Readiness",
        documentsIntro:
          "Document support is prepared according to actual order type, destination country, and valid available records.",
        documents: [
          ["Product specification", "Prepared per selected coffee, roast profile, and packaging"],
          ["Invoice & packing list", "Prepared after quantity, price, and packing are confirmed"],
          ["Certificate of origin", "Available upon request through the export process"],
          ["Phytosanitary / lab support", "Discussed when destination rules or buyer requirements need it"]
        ],
        quotationTitle: "Request Quotation",
        quotationDescription:
          "Share your destination country, target quantity, preferred form, roast profile, and sample requirement so the quotation can match your buying scenario.",
        ctaPrimary: "Request Sample",
        ctaSecondary: "Ask Quotation",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "West Lampung coffee is not only a product line. It carries the rhythm of highland villages where coffee is part of family work, harvest memory, and daily conversation.",
        stories: [
          "In the morning, cool air settles around Liwa and Sekincau while coffee trees stand close to homes, paths, and small gardens.",
          "The character is shaped by simple routines: picking, drying, sorting, and repeated decisions made by hands that know the bean by sight and weight.",
          "For buyers, this story gives the cup a clearer place. It is robusta with a Lampung highland voice, not an anonymous commodity."
        ],
        galleryTitle: "Origin Gallery",
        galleryCaptions: ["Selected beans", "Sorting preparation", "Sample dispatch"],
        videoTitle: "Process Video Slot",
        videoNote:
          "This section is prepared for harvest, sorting, roasting, or packaging video so buyers can see the process behind the sample.",
        backLabel: "Back to origins"
      },
      id: {
        eyebrow: "Detail Origin",
        title: "Robusta Lampung Barat",
        subtitle: "Liwa, Sekincau, Sumber Jaya, Way Tenong, Air Hitam, Batu Brak, Suoh",
        intro:
          "Profil Lampung dataran tinggi untuk buyer yang mencari body kuat, persiapan ekspor yang praktis, dan identitas origin yang jelas untuk divalidasi lewat sampel.",
        profileTitle: "Profil Kopi",
        profile: [
          ["Jenis kopi", "Robusta"],
          ["Bentuk produk", "Green bean, roasted bean, kopi bubuk sesuai permintaan"],
          ["Area utama", "Liwa, Sekincau, Sumber Jaya, Way Tenong"],
          ["Posisi", "Robusta Lampung premium untuk roaster, importir, dan private label"],
          ["Cocok untuk", "Espresso blend, minuman susu, retail dark roast, house blend berkarakter"]
        ],
        tasteTitle: "Arah Rasa",
        taste: ["Body kuat", "Pahit kakao", "Nuansa earthy", "Keasaman rendah", "Aftertaste panjang dan kokoh"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Paket sampel", "Format 2-5 kg untuk validasi buyer"],
          ["Opsi roast", "Green, medium, medium-dark, atau dark roast sesuai diskusi"],
          ["Opsi kemasan", "Sample pouch, retail pouch, karton, atau format sesuai kebutuhan buyer"],
          ["Yang divalidasi", "Rasa, aroma, tanggal roast, grind size, label, dan kondisi kemasan"]
        ],
        documentsTitle: "Dokumen & Kesiapan Ekspor",
        documentsIntro:
          "Dukungan dokumen disiapkan berdasarkan jenis order aktual, negara tujuan, dan dokumen valid yang tersedia.",
        documents: [
          ["Product specification", "Disiapkan per kopi, roast profile, dan kemasan yang dipilih"],
          ["Invoice & packing list", "Disiapkan setelah kuantitas, harga, dan kemasan disepakati"],
          ["Certificate of origin", "Dapat diminta melalui proses ekspor"],
          ["Phytosanitary / lab support", "Dibahas jika aturan negara tujuan atau buyer membutuhkan"]
        ],
        quotationTitle: "Minta Quotation",
        quotationDescription:
          "Kirim negara tujuan, estimasi kuantitas, bentuk produk, roast profile, dan kebutuhan sampel agar quotation sesuai skenario pembelian.",
        ctaPrimary: "Minta Sampel",
        ctaSecondary: "Tanya Quotation",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Kopi Lampung Barat bukan hanya lini produk. Ia membawa ritme kampung dataran tinggi, tempat kopi menjadi bagian dari kerja keluarga, memori panen, dan obrolan harian.",
        stories: [
          "Pagi di Liwa dan Sekincau datang dengan udara dingin, sementara pohon kopi tumbuh dekat rumah, jalan kebun, dan halaman kecil.",
          "Karakternya lahir dari rutinitas sederhana: petik, jemur, sortasi, dan keputusan berulang dari tangan yang mengenal biji dari bentuk dan beratnya.",
          "Bagi buyer, cerita ini memberi tempat pada rasa. Ini robusta dengan suara dataran tinggi Lampung, bukan komoditas tanpa asal."
        ],
        galleryTitle: "Galeri Origin",
        galleryCaptions: ["Biji pilihan", "Persiapan sortasi", "Pengiriman sampel"],
        videoTitle: "Slot Video Proses",
        videoNote:
          "Bagian ini disiapkan untuk video panen, sortasi, roasting, atau packing agar buyer melihat proses di balik sampel.",
        backLabel: "Kembali ke origin"
      },
      ar: {
        eyebrow: "تفاصيل المنشأ",
        title: "روبوستا غرب لامبونغ",
        subtitle: "ليوا، سيكينجاو، سومبر جايا، واي تينونغ، آير هيتام، باتو براك، سووه",
        intro:
          "منشأ مرتفعات لامبونغ للمشترين الذين يبحثون عن قوام قوي، وتجهيز عملي للتصدير، وهوية منشأ واضحة يمكن اختبارها عبر العينات.",
        profileTitle: "ملف القهوة",
        profile: [
          ["نوع القهوة", "روبوستا"],
          ["شكل المنتج", "حبوب خضراء، حبوب محمصة، أو قهوة مطحونة حسب الطلب"],
          ["المناطق الرئيسية", "ليوا، سيكينجاو، سومبر جايا، واي تينونغ"],
          ["التموضع", "روبوستا لامبونغ ممتازة للمحامص والمستوردين والعلامات الخاصة"],
          ["الاستخدام المناسب", "خلطات الإسبريسو، مشروبات الحليب، التحميص الداكن، وخلطات البيت"]
        ],
        tasteTitle: "اتجاه الطعم",
        taste: ["قوام قوي", "مرارة تشبه الكاكاو", "عمق ترابي", "حموضة منخفضة", "نهاية طويلة وثابتة"],
        sampleTitle: "العينات والتغليف",
        sample: [
          ["حزمة العينة", "صيغة 2-5 كجم لاختبار المشتري"],
          ["خيار التحميص", "أخضر أو متوسط أو متوسط داكن أو داكن حسب النقاش"],
          ["خيار التغليف", "كيس عينة أو كيس تجزئة أو كرتون أو صيغة يطلبها المشتري"],
          ["فحص المشتري", "الطعم والرائحة وتاريخ التحميص ودرجة الطحن والملصق وحالة التغليف"]
        ],
        documentsTitle: "الوثائق والاستعداد للتصدير",
        documentsIntro:
          "يتم تجهيز دعم الوثائق حسب نوع الطلب الفعلي وبلد الوجهة والسجلات الصحيحة المتاحة.",
        documents: [
          ["مواصفات المنتج", "تجهز حسب القهوة المختارة والتحميص والتغليف"],
          ["الفاتورة وقائمة التعبئة", "تجهز بعد تأكيد الكمية والسعر والتغليف"],
          ["شهادة المنشأ", "متاحة عند الطلب من خلال عملية التصدير"],
          ["دعم الصحة النباتية / المختبر", "يناقش عند حاجة قواعد بلد الوجهة أو متطلبات المشتري"]
        ],
        quotationTitle: "طلب عرض سعر",
        quotationDescription:
          "شارك بلد الوجهة والكمية المستهدفة وشكل المنتج والتحميص المطلوب واحتياج العينة حتى يكون العرض مناسبا لحالة الشراء.",
        ctaPrimary: "طلب عينة",
        ctaSecondary: "طلب عرض سعر",
        storiesTitle: "حكايات القهوة",
        storiesIntro:
          "قهوة غرب لامبونغ ليست مجرد منتج. إنها تحمل إيقاع قرى المرتفعات حيث تكون القهوة جزءا من عمل العائلة وذاكرة الحصاد والحديث اليومي.",
        stories: [
          "في الصباح، يستقر الهواء البارد حول ليوا وسيكينجاو بينما تقف أشجار القهوة قرب البيوت والطرق والحدائق الصغيرة.",
          "تتشكل الشخصية من روتين بسيط: قطف وتجفيف وفرز وقرارات متكررة من أياد تعرف الحبة من شكلها ووزنها.",
          "للمشتري، تمنح هذه الحكاية مكانا أوضح للكوب. إنها روبوستا بصوت مرتفعات لامبونغ وليست سلعة مجهولة."
        ],
        galleryTitle: "معرض المنشأ",
        galleryCaptions: ["حبوب مختارة", "تحضير الفرز", "إرسال العينة"],
        videoTitle: "مساحة فيديو العملية",
        videoNote:
          "هذه المساحة مخصصة لفيديو الحصاد أو الفرز أو التحميص أو التغليف حتى يرى المشتري العملية خلف العينة.",
        backLabel: "العودة إلى المناشئ"
      }
    }
  },
  {
    slug: "krui-west-coast",
    heroImage: "/images/gallery/coffee-beans.webp",
    accent: "Coastal Lampung",
    galleryImages: [
      "/images/gallery/origin-lampung.webp",
      "/images/gallery/roasted-coffee.webp",
      "/images/gallery/packaging.webp"
    ],
    content: {
      en: {
        eyebrow: "Origin Detail",
        title: "Krui / West Coast Lampung Coffee",
        subtitle: "Pesisir Tengah, Pesisir Selatan, Pesisir Utara, Karya Penggawa, Bengkunat",
        intro:
          "A west coast Lampung story for retail, cafe, and blend programs that need regional character, flexible preparation, and memorable storytelling.",
        profileTitle: "Coffee Profile",
        profile: [
          ["Coffee type", "Robusta and buyer-specific blend"],
          ["Product form", "Roasted bean, ground coffee, green bean by discussion"],
          ["Primary areas", "Krui and West Coast Lampung supply network"],
          ["Positioning", "Story-led Lampung coffee for retail and cafe programs"],
          ["Best use", "Retail pouch, cafe blend, reseller pack, gift pack"]
        ],
        tasteTitle: "Taste Direction",
        taste: ["Medium-bold body", "Roasted nut", "Dark caramel", "Gentle spice", "Clean bitter finish"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Sample pack", "Curated comparison samples for cafe or retail buyers"],
          ["Roast option", "Medium to dark roast for approachable commercial profiles"],
          ["Packing option", "Retail pouch, sample pouch, carton, or private label discussion"],
          ["Buyer check", "Cup impression, packaging look, label direction, and reorder potential"]
        ],
        documentsTitle: "Documents & Export Readiness",
        documentsIntro:
          "Export documents are matched to the confirmed product form and destination requirement.",
        documents: [
          ["Product specification", "Prepared for blend, roasted bean, or ground coffee"],
          ["Company profile", "Available for qualified buyer introduction"],
          ["Invoice & packing list", "Prepared after order confirmation"],
          ["Supporting documents", "Prepared only when valid and relevant to the shipment"]
        ],
        quotationTitle: "Request Quotation",
        quotationDescription:
          "Tell us whether this origin is for cafe menu, retail pack, reseller program, or private label so the sample set can be prepared correctly.",
        ctaPrimary: "Request Sample",
        ctaSecondary: "Discuss Retail Pack",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Krui sits between hills and coast. Its coffee story carries movement: village roads, market conversations, sea wind, and a west Lampung identity with a different mood.",
        stories: [
          "The charm of this origin is contrast. It speaks of coffee gardens, coastal routes, and communities that live between mountain work and shoreline trade.",
          "For a retail buyer, that sense of place can become a label story: a Lampung coffee with a coastal memory, made to be noticed on the shelf.",
          "For cafes, it creates a menu narrative that feels less generic and easier for customers to remember."
        ],
        galleryTitle: "Origin Gallery",
        galleryCaptions: ["Origin landscape mood", "Roasted profile", "Retail packing idea"],
        videoTitle: "Origin Video Slot",
        videoNote:
          "Prepared for short footage of Krui route, roasting, packaging, or cafe-style serving scenes.",
        backLabel: "Back to origins"
      },
      id: {
        eyebrow: "Detail Origin",
        title: "Kopi Krui / Pesisir Barat Lampung",
        subtitle: "Pesisir Tengah, Pesisir Selatan, Pesisir Utara, Karya Penggawa, Bengkunat",
        intro:
          "Cerita pesisir barat Lampung untuk program retail, kafe, dan blend yang membutuhkan karakter daerah, persiapan fleksibel, dan storytelling yang mudah diingat.",
        profileTitle: "Profil Kopi",
        profile: [
          ["Jenis kopi", "Robusta dan blend sesuai kebutuhan buyer"],
          ["Bentuk produk", "Roasted bean, kopi bubuk, green bean sesuai diskusi"],
          ["Area utama", "Krui dan jaringan supply Pesisir Barat Lampung"],
          ["Posisi", "Kopi Lampung berbasis cerita untuk retail dan kafe"],
          ["Cocok untuk", "Retail pouch, cafe blend, reseller pack, gift pack"]
        ],
        tasteTitle: "Arah Rasa",
        taste: ["Body medium-kuat", "Kacang panggang", "Karamel gelap", "Rempah lembut", "Pahit bersih"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Paket sampel", "Sampel pembanding untuk buyer kafe atau retail"],
          ["Opsi roast", "Medium hingga dark roast untuk profil komersial yang mudah diterima"],
          ["Opsi kemasan", "Retail pouch, sample pouch, karton, atau diskusi private label"],
          ["Yang divalidasi", "Kesan rasa, tampilan kemasan, arah label, dan potensi repeat order"]
        ],
        documentsTitle: "Dokumen & Kesiapan Ekspor",
        documentsIntro:
          "Dokumen ekspor disesuaikan dengan bentuk produk final dan kebutuhan negara tujuan.",
        documents: [
          ["Product specification", "Disiapkan untuk blend, roasted bean, atau kopi bubuk"],
          ["Company profile", "Tersedia untuk perkenalan buyer yang qualified"],
          ["Invoice & packing list", "Disiapkan setelah order dikonfirmasi"],
          ["Dokumen pendukung", "Disiapkan hanya saat valid dan relevan dengan shipment"]
        ],
        quotationTitle: "Minta Quotation",
        quotationDescription:
          "Sampaikan apakah origin ini untuk menu kafe, retail pack, program reseller, atau private label agar set sampelnya tepat.",
        ctaPrimary: "Minta Sampel",
        ctaSecondary: "Diskusi Retail Pack",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Krui berada di antara bukit dan pesisir. Cerita kopinya membawa rasa perjalanan: jalan kampung, obrolan pasar, angin laut, dan identitas Lampung barat yang berbeda.",
        stories: [
          "Daya tarik origin ini adalah kontras. Ia bicara tentang kebun kopi, jalur pesisir, dan masyarakat yang hidup di antara kerja gunung dan perdagangan pantai.",
          "Bagi buyer retail, nuansa tempat ini bisa menjadi cerita label: kopi Lampung dengan memori pesisir, dibuat agar mudah diingat di rak.",
          "Bagi kafe, ia menjadi narasi menu yang terasa tidak umum dan lebih mudah diceritakan kepada pelanggan."
        ],
        galleryTitle: "Galeri Origin",
        galleryCaptions: ["Nuansa lanskap origin", "Profil roasted", "Ide retail pack"],
        videoTitle: "Slot Video Origin",
        videoNote:
          "Disiapkan untuk footage rute Krui, roasting, packaging, atau adegan penyajian bergaya kafe.",
        backLabel: "Kembali ke origin"
      },
      ar: {
        eyebrow: "تفاصيل المنشأ",
        title: "قهوة كروي / الساحل الغربي في لامبونغ",
        subtitle: "بيسيسير تنغاه، بيسيسير سيلاتان، بيسيسير أوتارا، كاريا بينغاوا، بنغكونات",
        intro:
          "قصة الساحل الغربي في لامبونغ لبرامج التجزئة والمقاهي والخلطات التي تحتاج إلى طابع إقليمي وتجهيز مرن وحكاية سهلة التذكر.",
        profileTitle: "ملف القهوة",
        profile: [
          ["نوع القهوة", "روبوستا وخلطة حسب حاجة المشتري"],
          ["شكل المنتج", "حبوب محمصة، قهوة مطحونة، أو حبوب خضراء حسب النقاش"],
          ["المناطق الرئيسية", "كروي وشبكة توريد الساحل الغربي في لامبونغ"],
          ["التموضع", "قهوة لامبونغ قائمة على القصة للتجزئة والمقاهي"],
          ["الاستخدام المناسب", "أكياس تجزئة، خلطات مقاهي، عبوات موزعين، وهدايا"]
        ],
        tasteTitle: "اتجاه الطعم",
        taste: ["قوام متوسط قوي", "مكسرات محمصة", "كراميل داكن", "توابل لطيفة", "نهاية مرة ونظيفة"],
        sampleTitle: "العينات والتغليف",
        sample: [
          ["حزمة العينة", "عينات مقارنة للمقاهي أو مشتري التجزئة"],
          ["خيار التحميص", "تحميص متوسط إلى داكن لملف تجاري سهل القبول"],
          ["خيار التغليف", "كيس تجزئة أو كيس عينة أو كرتون أو نقاش علامة خاصة"],
          ["فحص المشتري", "انطباع الكوب ومظهر التغليف واتجاه الملصق وإمكانية إعادة الطلب"]
        ],
        documentsTitle: "الوثائق والاستعداد للتصدير",
        documentsIntro:
          "تتم مطابقة وثائق التصدير مع شكل المنتج المؤكد ومتطلبات بلد الوجهة.",
        documents: [
          ["مواصفات المنتج", "تجهز للخلطة أو الحبوب المحمصة أو القهوة المطحونة"],
          ["ملف الشركة", "متاح للتعريف بالمشتري المؤهل"],
          ["الفاتورة وقائمة التعبئة", "تجهز بعد تأكيد الطلب"],
          ["وثائق داعمة", "تجهز فقط عندما تكون صحيحة وذات صلة بالشحنة"]
        ],
        quotationTitle: "طلب عرض سعر",
        quotationDescription:
          "أخبرنا هل هذا المنشأ لقائمة مقهى أو عبوة تجزئة أو برنامج موزعين أو علامة خاصة حتى نجهز العينات بدقة.",
        ctaPrimary: "طلب عينة",
        ctaSecondary: "نقاش عبوة التجزئة",
        storiesTitle: "حكايات القهوة",
        storiesIntro:
          "تقع كروي بين التلال والساحل. تحمل قصة قهوتها حركة الطرق الريفية وحديث السوق ونسيم البحر وهوية غرب لامبونغ بمزاج مختلف.",
        stories: [
          "سحر هذا المنشأ في التباين. إنه يتحدث عن مزارع القهوة والطرق الساحلية ومجتمعات تعيش بين عمل الجبل وتجارة الساحل.",
          "لمشتري التجزئة، يمكن أن يصبح هذا الإحساس بالمكان قصة ملصق: قهوة لامبونغ بذاكرة ساحلية تلفت النظر على الرف.",
          "وللمقاهي، يمنح القائمة رواية أقل عمومية وأسهل تذكرا للعملاء."
        ],
        galleryTitle: "معرض المنشأ",
        galleryCaptions: ["إحساس المنظر", "ملف التحميص", "فكرة عبوة التجزئة"],
        videoTitle: "مساحة فيديو المنشأ",
        videoNote:
          "مخصصة للقطات طريق كروي أو التحميص أو التغليف أو مشاهد تقديم بأسلوب المقاهي.",
        backLabel: "العودة إلى المناشئ"
      }
    }
  },
  {
    slug: "tanggamus",
    heroImage: "/images/gallery/sorting-process.webp",
    accent: "Careful Supply",
    galleryImages: [
      "/images/gallery/coffee-beans.webp",
      "/images/gallery/roasting-process.webp",
      "/images/gallery/sample-pack.webp"
    ],
    content: {
      en: {
        eyebrow: "Origin Detail",
        title: "Tanggamus Robusta",
        subtitle: "Ulubelu, Pulau Panggung, Air Naningan, Sumberejo, Gisting, Kota Agung",
        intro:
          "A supporting Lampung robusta origin for buyers who value consistency, comparison samples, and a calm, careful sourcing story.",
        profileTitle: "Coffee Profile",
        profile: [
          ["Coffee type", "Robusta"],
          ["Product form", "Green bean and roasted bean"],
          ["Primary areas", "Ulubelu, Pulau Panggung, Gisting, Air Naningan"],
          ["Positioning", "Comparison origin and buyer-specific robusta supply"],
          ["Best use", "Roastery trial, blend component, commercial retail pack"]
        ],
        tasteTitle: "Taste Direction",
        taste: ["Firm body", "Nutty note", "Roasted grain", "Mild spice", "Stable bitterness"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Sample pack", "Prepared for comparison with West Lampung or house blend"],
          ["Roast option", "Medium-dark and dark profiles for robusta evaluation"],
          ["Packing option", "Sample pouch, carton, or buyer-selected format"],
          ["Buyer check", "Consistency, body, roast behavior, and blend fit"]
        ],
        documentsTitle: "Documents & Export Readiness",
        documentsIntro:
          "Document readiness follows sample approval, order confirmation, and final shipment requirements.",
        documents: [
          ["Specification sheet", "Prepared for selected lot or sample profile"],
          ["Order documents", "Invoice and packing list after confirmation"],
          ["Origin support", "Origin explanation and area notes for buyer review"],
          ["Additional documents", "Discussed based on market and product form"]
        ],
        quotationTitle: "Request Quotation",
        quotationDescription:
          "Use this origin when you want a robusta comparison sample or a blend component with practical availability.",
        ctaPrimary: "Request Sample",
        ctaSecondary: "Compare Origins",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Tanggamus feels quieter in the story. It is the kind of origin shaped by patient routines, steady hands, and communities that understand the value of consistency.",
        stories: [
          "In areas like Ulubelu and Gisting, coffee is close to daily discipline: tending, drying, checking, and preparing for the next buyer conversation.",
          "The emotional strength here is trust. It is not loud; it is careful, grounded, and useful for buyers who need repeatable quality.",
          "For Siger Golden Bean, Tanggamus gives the catalog another Lampung voice beside the highlands and west coast."
        ],
        galleryTitle: "Origin Gallery",
        galleryCaptions: ["Bean selection", "Roasting trial", "Sample preparation"],
        videoTitle: "Process Video Slot",
        videoNote:
          "Prepared for sorting, drying, roast trial, or sample packing video from the Tanggamus supply line.",
        backLabel: "Back to origins"
      },
      id: {
        eyebrow: "Detail Origin",
        title: "Robusta Tanggamus",
        subtitle: "Ulubelu, Pulau Panggung, Air Naningan, Sumberejo, Gisting, Kota Agung",
        intro:
          "Origin robusta Lampung pendukung untuk buyer yang menghargai konsistensi, sampel pembanding, dan cerita sourcing yang tenang dan telaten.",
        profileTitle: "Profil Kopi",
        profile: [
          ["Jenis kopi", "Robusta"],
          ["Bentuk produk", "Green bean dan roasted bean"],
          ["Area utama", "Ulubelu, Pulau Panggung, Gisting, Air Naningan"],
          ["Posisi", "Origin pembanding dan supply robusta sesuai kebutuhan buyer"],
          ["Cocok untuk", "Trial roastery, komponen blend, retail pack komersial"]
        ],
        tasteTitle: "Arah Rasa",
        taste: ["Body tegas", "Nuansa nutty", "Biji panggang", "Rempah ringan", "Pahit stabil"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Paket sampel", "Disiapkan untuk dibandingkan dengan Lampung Barat atau house blend"],
          ["Opsi roast", "Profil medium-dark dan dark untuk evaluasi robusta"],
          ["Opsi kemasan", "Sample pouch, karton, atau format pilihan buyer"],
          ["Yang divalidasi", "Konsistensi, body, perilaku roast, dan kecocokan blend"]
        ],
        documentsTitle: "Dokumen & Kesiapan Ekspor",
        documentsIntro:
          "Kesiapan dokumen mengikuti approval sampel, konfirmasi order, dan kebutuhan shipment final.",
        documents: [
          ["Specification sheet", "Disiapkan untuk lot atau profil sampel terpilih"],
          ["Dokumen order", "Invoice dan packing list setelah konfirmasi"],
          ["Dukungan origin", "Penjelasan origin dan catatan area untuk review buyer"],
          ["Dokumen tambahan", "Dibahas berdasarkan market dan bentuk produk"]
        ],
        quotationTitle: "Minta Quotation",
        quotationDescription:
          "Gunakan origin ini saat membutuhkan sampel pembanding robusta atau komponen blend dengan ketersediaan praktis.",
        ctaPrimary: "Minta Sampel",
        ctaSecondary: "Bandingkan Origin",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Tanggamus terasa lebih tenang dalam cerita. Ia dibentuk oleh rutinitas sabar, tangan yang telaten, dan komunitas yang memahami nilai konsistensi.",
        stories: [
          "Di area seperti Ulubelu dan Gisting, kopi dekat dengan disiplin harian: merawat, menjemur, mengecek, dan menyiapkan percakapan buyer berikutnya.",
          "Kekuatan emosionalnya ada pada rasa percaya. Tidak keras, tapi rapi, membumi, dan berguna bagi buyer yang membutuhkan kualitas berulang.",
          "Untuk Siger Golden Bean, Tanggamus memberi katalog suara Lampung lain di samping dataran tinggi dan pesisir barat."
        ],
        galleryTitle: "Galeri Origin",
        galleryCaptions: ["Seleksi biji", "Trial roasting", "Persiapan sampel"],
        videoTitle: "Slot Video Proses",
        videoNote:
          "Disiapkan untuk video sortasi, penjemuran, trial roast, atau packing sampel dari jalur supply Tanggamus.",
        backLabel: "Kembali ke origin"
      },
      ar: {
        eyebrow: "تفاصيل المنشأ",
        title: "روبوستا تانغاموس",
        subtitle: "أولوبيلو، بولاو بانغونغ، آير نانينغان، سومبيريجو، غيستينغ، كوتا أغونغ",
        intro:
          "منشأ داعم من روبوستا لامبونغ للمشترين الذين يقدرون الثبات وعينات المقارنة وقصة توريد هادئة ودقيقة.",
        profileTitle: "ملف القهوة",
        profile: [
          ["نوع القهوة", "روبوستا"],
          ["شكل المنتج", "حبوب خضراء وحبوب محمصة"],
          ["المناطق الرئيسية", "أولوبيلو، بولاو بانغونغ، غيستينغ، آير نانينغان"],
          ["التموضع", "منشأ مقارنة وتوريد روبوستا حسب حاجة المشتري"],
          ["الاستخدام المناسب", "تجربة محمصة، مكون خلطة، عبوة تجزئة تجارية"]
        ],
        tasteTitle: "اتجاه الطعم",
        taste: ["قوام ثابت", "نوتة مكسرات", "حبوب محمصة", "توابل خفيفة", "مرارة مستقرة"],
        sampleTitle: "العينات والتغليف",
        sample: [
          ["حزمة العينة", "تجهز للمقارنة مع غرب لامبونغ أو خلطة البيت"],
          ["خيار التحميص", "متوسط داكن وداكن لتقييم الروبوستا"],
          ["خيار التغليف", "كيس عينة أو كرتون أو صيغة يختارها المشتري"],
          ["فحص المشتري", "الثبات والقوام وسلوك التحميص وملاءمة الخلطة"]
        ],
        documentsTitle: "الوثائق والاستعداد للتصدير",
        documentsIntro:
          "جاهزية الوثائق تتبع قبول العينة وتأكيد الطلب ومتطلبات الشحنة النهائية.",
        documents: [
          ["ورقة المواصفات", "تجهز للدفعة أو ملف العينة المختار"],
          ["وثائق الطلب", "الفاتورة وقائمة التعبئة بعد التأكيد"],
          ["دعم المنشأ", "شرح المنشأ وملاحظات المنطقة لمراجعة المشتري"],
          ["وثائق إضافية", "تناقش حسب السوق وشكل المنتج"]
        ],
        quotationTitle: "طلب عرض سعر",
        quotationDescription:
          "استخدم هذا المنشأ عندما تحتاج عينة مقارنة روبوستا أو مكون خلطة بتوفر عملي.",
        ctaPrimary: "طلب عينة",
        ctaSecondary: "مقارنة المناشئ",
        storiesTitle: "حكايات القهوة",
        storiesIntro:
          "تانغاموس أكثر هدوءا في القصة. إنه منشأ تصنعه العادات الصبورة والأيدي الدقيقة ومجتمعات تفهم قيمة الثبات.",
        stories: [
          "في مناطق مثل أولوبيلو وغيستينغ، ترتبط القهوة بانضباط يومي: عناية وتجفيف وفحص واستعداد لحوار المشتري التالي.",
          "قوتها العاطفية في الثقة. ليست صاخبة، لكنها دقيقة ومتجذرة ومفيدة للمشترين الذين يحتاجون جودة قابلة للتكرار.",
          "بالنسبة إلى Siger Golden Bean، تمنح تانغاموس الكتالوج صوتا آخر من لامبونغ بجانب المرتفعات والساحل الغربي."
        ],
        galleryTitle: "معرض المنشأ",
        galleryCaptions: ["اختيار الحبوب", "تجربة التحميص", "تحضير العينة"],
        videoTitle: "مساحة فيديو العملية",
        videoNote:
          "مخصصة لفيديو الفرز أو التجفيف أو تجربة التحميص أو تعبئة العينات من خط توريد تانغاموس.",
        backLabel: "العودة إلى المناشئ"
      }
    }
  },
  {
    slug: "way-kanan",
    heroImage: "/images/gallery/roasted-coffee.webp",
    accent: "Flexible Supply",
    galleryImages: [
      "/images/gallery/coffee-beans.webp",
      "/images/gallery/ground-coffee.webp",
      "/images/gallery/shipment-preparation.webp"
    ],
    content: {
      en: {
        eyebrow: "Origin Detail",
        title: "Way Kanan Robusta",
        subtitle: "Banjit, Kasui, Rebang Tangkas, Baradatu",
        intro:
          "A practical Lampung supply line for buyers who need volume options, robusta blend flexibility, and sample-based sourcing decisions.",
        profileTitle: "Coffee Profile",
        profile: [
          ["Coffee type", "Robusta"],
          ["Product form", "Green bean, roasted bean, ground coffee by request"],
          ["Primary areas", "Banjit, Kasui, Rebang Tangkas, Baradatu"],
          ["Positioning", "Flexible supply option for blend and volume discussions"],
          ["Best use", "Blend base, commercial roast, ground coffee, reseller supply"]
        ],
        tasteTitle: "Taste Direction",
        taste: ["Strong body", "Roasted cereal", "Mild wood note", "Low acidity", "Practical blend structure"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Sample pack", "Prepared for blend testing and buyer comparison"],
          ["Roast option", "Medium-dark or dark roast for commercial profile review"],
          ["Packing option", "Bulk bag discussion, carton, sample pouch, or private label"],
          ["Buyer check", "Availability, roast response, price fit, and blend role"]
        ],
        documentsTitle: "Documents & Export Readiness",
        documentsIntro:
          "Documentation is prepared after the buyer confirms product form, volume, and destination needs.",
        documents: [
          ["Specification sheet", "Prepared per sample or confirmed supply option"],
          ["Commercial documents", "Invoice and packing list after deal confirmation"],
          ["Shipment readiness", "Forwarder coordination can be discussed per destination"],
          ["Market-specific records", "Prepared only when applicable and valid"]
        ],
        quotationTitle: "Request Quotation",
        quotationDescription:
          "Way Kanan is best discussed with target volume, price expectation, and blend role clearly stated.",
        ctaPrimary: "Request Sample",
        ctaSecondary: "Discuss Volume",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Way Kanan tells the practical side of Lampung coffee. It is about routes, availability, and the quiet importance of keeping supply conversations realistic.",
        stories: [
          "This origin is useful for buyers who think in blends, cartons, repeat orders, and steady movement rather than only one showcase cup.",
          "The story is not less emotional because it is practical. It speaks of families and suppliers who keep coffee moving from village collections to buyer samples.",
          "In the Siger catalog, Way Kanan gives room for flexibility without losing Lampung identity."
        ],
        galleryTitle: "Origin Gallery",
        galleryCaptions: ["Blend-ready beans", "Ground coffee option", "Shipment preparation"],
        videoTitle: "Supply Video Slot",
        videoNote:
          "Prepared for packing, sorting, loading, or sample preparation video that supports volume conversations.",
        backLabel: "Back to origins"
      },
      id: {
        eyebrow: "Detail Origin",
        title: "Robusta Way Kanan",
        subtitle: "Banjit, Kasui, Rebang Tangkas, Baradatu",
        intro:
          "Jalur supply Lampung yang praktis untuk buyer yang membutuhkan opsi volume, fleksibilitas blend robusta, dan keputusan sourcing berbasis sampel.",
        profileTitle: "Profil Kopi",
        profile: [
          ["Jenis kopi", "Robusta"],
          ["Bentuk produk", "Green bean, roasted bean, kopi bubuk sesuai permintaan"],
          ["Area utama", "Banjit, Kasui, Rebang Tangkas, Baradatu"],
          ["Posisi", "Opsi supply fleksibel untuk diskusi blend dan volume"],
          ["Cocok untuk", "Base blend, roast komersial, kopi bubuk, supply reseller"]
        ],
        tasteTitle: "Arah Rasa",
        taste: ["Body kuat", "Sereal panggang", "Nuansa kayu ringan", "Keasaman rendah", "Struktur blend praktis"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Paket sampel", "Disiapkan untuk testing blend dan perbandingan buyer"],
          ["Opsi roast", "Medium-dark atau dark roast untuk review profil komersial"],
          ["Opsi kemasan", "Diskusi bulk bag, karton, sample pouch, atau private label"],
          ["Yang divalidasi", "Ketersediaan, respons roast, kecocokan harga, dan peran dalam blend"]
        ],
        documentsTitle: "Dokumen & Kesiapan Ekspor",
        documentsIntro:
          "Dokumen disiapkan setelah buyer mengonfirmasi bentuk produk, volume, dan kebutuhan negara tujuan.",
        documents: [
          ["Specification sheet", "Disiapkan per sampel atau opsi supply terkonfirmasi"],
          ["Dokumen komersial", "Invoice dan packing list setelah deal dikonfirmasi"],
          ["Kesiapan shipment", "Koordinasi forwarder dapat dibahas per negara tujuan"],
          ["Dokumen spesifik market", "Disiapkan hanya saat relevan dan valid"]
        ],
        quotationTitle: "Minta Quotation",
        quotationDescription:
          "Way Kanan paling baik dibahas dengan target volume, ekspektasi harga, dan peran blend yang jelas.",
        ctaPrimary: "Minta Sampel",
        ctaSecondary: "Diskusi Volume",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Way Kanan menceritakan sisi praktis kopi Lampung. Tentang jalur, ketersediaan, dan pentingnya membuat percakapan supply tetap realistis.",
        stories: [
          "Origin ini berguna untuk buyer yang berpikir tentang blend, karton, repeat order, dan pergerakan stabil, bukan hanya satu cup showcase.",
          "Ceritanya tidak kurang emosional karena praktis. Ia bicara tentang keluarga dan supplier yang menjaga kopi bergerak dari kumpulan kampung menuju sampel buyer.",
          "Dalam katalog Siger, Way Kanan memberi ruang fleksibilitas tanpa kehilangan identitas Lampung."
        ],
        galleryTitle: "Galeri Origin",
        galleryCaptions: ["Biji siap blend", "Opsi kopi bubuk", "Persiapan shipment"],
        videoTitle: "Slot Video Supply",
        videoNote:
          "Disiapkan untuk video packing, sortasi, loading, atau persiapan sampel yang mendukung diskusi volume.",
        backLabel: "Kembali ke origin"
      },
      ar: {
        eyebrow: "تفاصيل المنشأ",
        title: "روبوستا واي كانان",
        subtitle: "بانجيت، كاسوي، ريبانغ تانغكاس، باراداتو",
        intro:
          "خط توريد عملي من لامبونغ للمشترين الذين يحتاجون خيارات حجم ومرونة خلط الروبوستا وقرارات توريد مبنية على العينات.",
        profileTitle: "ملف القهوة",
        profile: [
          ["نوع القهوة", "روبوستا"],
          ["شكل المنتج", "حبوب خضراء، حبوب محمصة، أو قهوة مطحونة حسب الطلب"],
          ["المناطق الرئيسية", "بانجيت، كاسوي، ريبانغ تانغكاس، باراداتو"],
          ["التموضع", "خيار توريد مرن لنقاش الخلطات والحجم"],
          ["الاستخدام المناسب", "قاعدة خلطة، تحميص تجاري، قهوة مطحونة، توريد موزعين"]
        ],
        tasteTitle: "اتجاه الطعم",
        taste: ["قوام قوي", "حبوب محمصة", "نوتة خشبية خفيفة", "حموضة منخفضة", "بنية عملية للخلطة"],
        sampleTitle: "العينات والتغليف",
        sample: [
          ["حزمة العينة", "تجهز لاختبار الخلطة ومقارنة المشتري"],
          ["خيار التحميص", "متوسط داكن أو داكن لمراجعة الملف التجاري"],
          ["خيار التغليف", "نقاش أكياس كبيرة أو كراتين أو أكياس عينة أو علامة خاصة"],
          ["فحص المشتري", "التوفر واستجابة التحميص وملاءمة السعر ودور الخلطة"]
        ],
        documentsTitle: "الوثائق والاستعداد للتصدير",
        documentsIntro:
          "تجهز الوثائق بعد تأكيد المشتري لشكل المنتج والحجم واحتياجات بلد الوجهة.",
        documents: [
          ["ورقة المواصفات", "تجهز حسب العينة أو خيار التوريد المؤكد"],
          ["وثائق تجارية", "الفاتورة وقائمة التعبئة بعد تأكيد الصفقة"],
          ["جاهزية الشحن", "يمكن مناقشة تنسيق وكيل الشحن حسب الوجهة"],
          ["سجلات خاصة بالسوق", "تجهز فقط عندما تكون قابلة للتطبيق وصحيحة"]
        ],
        quotationTitle: "طلب عرض سعر",
        quotationDescription:
          "يناقش واي كانان بشكل أفضل مع حجم مستهدف وتوقع سعر ودور خلطة واضح.",
        ctaPrimary: "طلب عينة",
        ctaSecondary: "نقاش الحجم",
        storiesTitle: "حكايات القهوة",
        storiesIntro:
          "يروي واي كانان الجانب العملي من قهوة لامبونغ: الطرق والتوفر وأهمية إبقاء حوارات التوريد واقعية.",
        stories: [
          "هذا المنشأ مفيد للمشترين الذين يفكرون في الخلطات والكراتين والطلبات المتكررة والحركة المستقرة، وليس فقط كوب عرض واحد.",
          "ليست القصة أقل عاطفة لأنها عملية. إنها تتحدث عن عائلات وموردين يبقون القهوة تتحرك من تجمعات القرى إلى عينات المشترين.",
          "في كتالوج Siger، يمنح واي كانان مساحة للمرونة من دون فقدان هوية لامبونغ."
        ],
        galleryTitle: "معرض المنشأ",
        galleryCaptions: ["حبوب جاهزة للخلط", "خيار القهوة المطحونة", "تحضير الشحنة"],
        videoTitle: "مساحة فيديو التوريد",
        videoNote:
          "مخصصة لفيديو التعبئة أو الفرز أو التحميل أو تحضير العينات لدعم نقاشات الحجم.",
        backLabel: "العودة إلى المناشئ"
      }
    }
  },
  {
    slug: "north-lampung",
    heroImage: "/images/gallery/shipment-preparation.webp",
    accent: "Volume Support",
    galleryImages: [
      "/images/gallery/coffee-beans.webp",
      "/images/gallery/sample-pack.webp",
      "/images/gallery/packaging.webp"
    ],
    content: {
      en: {
        eyebrow: "Origin Detail",
        title: "North Lampung Robusta",
        subtitle: "Bukit Kemuning, Abung Tinggi, Tanjung Raja, Kotabumi",
        intro:
          "A supporting robusta origin for larger sourcing discussions, practical availability checks, and buyer programs that require steady options.",
        profileTitle: "Coffee Profile",
        profile: [
          ["Coffee type", "Robusta"],
          ["Product form", "Green bean, roasted bean, ground coffee by request"],
          ["Primary areas", "Bukit Kemuning, Abung Tinggi, Tanjung Raja, Kotabumi"],
          ["Positioning", "Volume support and comparison origin"],
          ["Best use", "Commercial supply, blend support, reseller program, private label base"]
        ],
        tasteTitle: "Taste Direction",
        taste: ["Solid body", "Roasted grain", "Dark toast", "Low acidity", "Reliable commercial profile"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Sample pack", "Prepared for availability and specification checks"],
          ["Roast option", "Commercial roast profiles based on buyer use case"],
          ["Packing option", "Sample pouch, carton, retail pouch, or bulk discussion"],
          ["Buyer check", "Price fit, consistency, packing, and shipment readiness"]
        ],
        documentsTitle: "Documents & Export Readiness",
        documentsIntro:
          "The document path starts after a buyer chooses the product form and validates the sample.",
        documents: [
          ["Specification sheet", "Prepared according to selected coffee and packing"],
          ["Commercial documents", "Invoice and packing list after confirmation"],
          ["Origin note", "Area and product notes for buyer review"],
          ["Export support", "Forwarder and document needs discussed per shipment"]
        ],
        quotationTitle: "Request Quotation",
        quotationDescription:
          "This origin is suitable when the buyer wants stable options for larger, practical sourcing conversations.",
        ctaPrimary: "Request Sample",
        ctaSecondary: "Check Availability",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "North Lampung brings the story of steadiness. It supports the catalog with a practical supply role while still carrying the everyday life of Lampung coffee communities.",
        stories: [
          "In places like Bukit Kemuning and Tanjung Raja, coffee connects household work, local buying routes, and the long patience behind commercial supply.",
          "Its value is dependable presence: the origin that helps a buyer compare, plan, and build repeatable sourcing.",
          "The emotion here is simple but important: a product that can move from village effort into a buyer program with clarity."
        ],
        galleryTitle: "Origin Gallery",
        galleryCaptions: ["Supply beans", "Sample check", "Packing option"],
        videoTitle: "Shipment Video Slot",
        videoNote:
          "Prepared for packing, carton preparation, sample dispatch, or export readiness documentation.",
        backLabel: "Back to origins"
      },
      id: {
        eyebrow: "Detail Origin",
        title: "Robusta Lampung Utara",
        subtitle: "Bukit Kemuning, Abung Tinggi, Tanjung Raja, Kotabumi",
        intro:
          "Origin robusta pendukung untuk diskusi sourcing lebih besar, cek ketersediaan praktis, dan program buyer yang membutuhkan opsi stabil.",
        profileTitle: "Profil Kopi",
        profile: [
          ["Jenis kopi", "Robusta"],
          ["Bentuk produk", "Green bean, roasted bean, kopi bubuk sesuai permintaan"],
          ["Area utama", "Bukit Kemuning, Abung Tinggi, Tanjung Raja, Kotabumi"],
          ["Posisi", "Pendukung volume dan origin pembanding"],
          ["Cocok untuk", "Supply komersial, pendukung blend, reseller, base private label"]
        ],
        tasteTitle: "Arah Rasa",
        taste: ["Body solid", "Grain panggang", "Toast gelap", "Keasaman rendah", "Profil komersial stabil"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Paket sampel", "Disiapkan untuk cek ketersediaan dan spesifikasi"],
          ["Opsi roast", "Profil roast komersial sesuai use case buyer"],
          ["Opsi kemasan", "Sample pouch, karton, retail pouch, atau diskusi bulk"],
          ["Yang divalidasi", "Kecocokan harga, konsistensi, packing, dan kesiapan shipment"]
        ],
        documentsTitle: "Dokumen & Kesiapan Ekspor",
        documentsIntro:
          "Jalur dokumen dimulai setelah buyer memilih bentuk produk dan memvalidasi sampel.",
        documents: [
          ["Specification sheet", "Disiapkan sesuai kopi dan packing yang dipilih"],
          ["Dokumen komersial", "Invoice dan packing list setelah konfirmasi"],
          ["Catatan origin", "Catatan area dan produk untuk review buyer"],
          ["Dukungan ekspor", "Kebutuhan forwarder dan dokumen dibahas per shipment"]
        ],
        quotationTitle: "Minta Quotation",
        quotationDescription:
          "Origin ini cocok saat buyer mencari opsi stabil untuk diskusi sourcing yang lebih besar dan praktis.",
        ctaPrimary: "Minta Sampel",
        ctaSecondary: "Cek Ketersediaan",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Lampung Utara membawa cerita tentang kestabilan. Ia mendukung katalog dengan peran supply yang praktis, namun tetap membawa kehidupan sehari-hari komunitas kopi Lampung.",
        stories: [
          "Di tempat seperti Bukit Kemuning dan Tanjung Raja, kopi menghubungkan kerja rumah tangga, jalur pembelian lokal, dan kesabaran panjang di balik supply komersial.",
          "Nilainya ada pada kehadiran yang bisa diandalkan: origin yang membantu buyer membandingkan, merencanakan, dan membangun sourcing berulang.",
          "Emosinya sederhana tapi penting: produk yang bisa bergerak dari kerja kampung menuju program buyer dengan jelas."
        ],
        galleryTitle: "Galeri Origin",
        galleryCaptions: ["Biji supply", "Cek sampel", "Opsi packing"],
        videoTitle: "Slot Video Shipment",
        videoNote:
          "Disiapkan untuk video packing, persiapan karton, pengiriman sampel, atau dokumentasi kesiapan ekspor.",
        backLabel: "Kembali ke origin"
      },
      ar: {
        eyebrow: "تفاصيل المنشأ",
        title: "روبوستا شمال لامبونغ",
        subtitle: "بوكيت كيمونينغ، أبونغ تينغي، تانجونغ راجا، كوتابومي",
        intro:
          "منشأ داعم للروبوستا لنقاشات توريد أكبر وفحص توفر عملي وبرامج مشترين تحتاج خيارات مستقرة.",
        profileTitle: "ملف القهوة",
        profile: [
          ["نوع القهوة", "روبوستا"],
          ["شكل المنتج", "حبوب خضراء، حبوب محمصة، أو قهوة مطحونة حسب الطلب"],
          ["المناطق الرئيسية", "بوكيت كيمونينغ، أبونغ تينغي، تانجونغ راجا، كوتابومي"],
          ["التموضع", "دعم الحجم ومنشأ للمقارنة"],
          ["الاستخدام المناسب", "توريد تجاري، دعم خلطة، برنامج موزعين، قاعدة علامة خاصة"]
        ],
        tasteTitle: "اتجاه الطعم",
        taste: ["قوام متين", "حبوب محمصة", "توست داكن", "حموضة منخفضة", "ملف تجاري موثوق"],
        sampleTitle: "العينات والتغليف",
        sample: [
          ["حزمة العينة", "تجهز لفحص التوفر والمواصفات"],
          ["خيار التحميص", "ملفات تحميص تجارية حسب استخدام المشتري"],
          ["خيار التغليف", "كيس عينة أو كرتون أو كيس تجزئة أو نقاش تعبئة كبيرة"],
          ["فحص المشتري", "ملاءمة السعر والثبات والتغليف وجاهزية الشحن"]
        ],
        documentsTitle: "الوثائق والاستعداد للتصدير",
        documentsIntro:
          "يبدأ مسار الوثائق بعد اختيار المشتري لشكل المنتج واعتماد العينة.",
        documents: [
          ["ورقة المواصفات", "تجهز حسب القهوة والتغليف المختارين"],
          ["وثائق تجارية", "الفاتورة وقائمة التعبئة بعد التأكيد"],
          ["ملاحظة المنشأ", "ملاحظات المنطقة والمنتج لمراجعة المشتري"],
          ["دعم التصدير", "تناقش احتياجات وكيل الشحن والوثائق لكل شحنة"]
        ],
        quotationTitle: "طلب عرض سعر",
        quotationDescription:
          "يناسب هذا المنشأ المشتري الذي يريد خيارات مستقرة لنقاشات توريد أكبر وعملية.",
        ctaPrimary: "طلب عينة",
        ctaSecondary: "فحص التوفر",
        storiesTitle: "حكايات القهوة",
        storiesIntro:
          "يحمل شمال لامبونغ قصة الثبات. يدعم الكتالوج بدور توريد عملي مع حياة يومية لمجتمعات قهوة لامبونغ.",
        stories: [
          "في أماكن مثل بوكيت كيمونينغ وتانجونغ راجا، تربط القهوة عمل البيت وطرق الشراء المحلية والصبر الطويل خلف التوريد التجاري.",
          "قيمته في الحضور الموثوق: منشأ يساعد المشتري على المقارنة والتخطيط وبناء توريد قابل للتكرار.",
          "العاطفة هنا بسيطة لكنها مهمة: منتج يتحرك من جهد القرية إلى برنامج المشتري بوضوح."
        ],
        galleryTitle: "معرض المنشأ",
        galleryCaptions: ["حبوب التوريد", "فحص العينة", "خيار التغليف"],
        videoTitle: "مساحة فيديو الشحن",
        videoNote:
          "مخصصة لفيديو التعبئة أو تجهيز الكراتين أو إرسال العينات أو توثيق جاهزية التصدير.",
        backLabel: "العودة إلى المناشئ"
      }
    }
  },
  {
    slug: "supporting-origins",
    heroImage: "/images/gallery/ground-coffee.webp",
    accent: "Curated Sumatra",
    galleryImages: [
      "/images/gallery/origin-lampung.webp",
      "/images/gallery/coffee-beans.webp",
      "/images/gallery/packaging.webp"
    ],
    content: {
      en: {
        eyebrow: "Origin Detail",
        title: "Supporting Sumatra Origins",
        subtitle: "Lampung Tengah, Pesawaran, Pringsewu, Pagar Alam, Aceh Gayo",
        intro:
          "A curated option page for buyers who want a wider Sumatra discussion while keeping Lampung as the brand's main identity.",
        profileTitle: "Coffee Profile",
        profile: [
          ["Coffee type", "Robusta, arabica, or buyer-specific blend"],
          ["Product form", "Green bean, roasted bean, ground coffee, or private label"],
          ["Primary areas", "Curated Lampung and Sumatra options"],
          ["Positioning", "Comparison catalog for buyers reviewing several profiles"],
          ["Best use", "Arabica comparison, house blend, private label, retail program"]
        ],
        tasteTitle: "Taste Direction",
        taste: ["Profile depends on selected origin", "Lampung robusta body", "Sumatra depth", "Arabica comparison when available"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Sample pack", "Mixed sample set can be prepared by buyer interest"],
          ["Roast option", "Profile selected according to each origin and product form"],
          ["Packing option", "Sample pouch, retail pouch, carton, or private label discussion"],
          ["Buyer check", "Origin fit, story fit, taste direction, and commercial potential"]
        ],
        documentsTitle: "Documents & Export Readiness",
        documentsIntro:
          "Supporting origins are introduced carefully, with documentation aligned to the selected supplier and final order.",
        documents: [
          ["Specification sheet", "Prepared per selected origin and sample"],
          ["Supplier confirmation", "Checked before larger order discussion"],
          ["Commercial documents", "Prepared after order confirmation"],
          ["Additional records", "Shared only when valid and relevant"]
        ],
        quotationTitle: "Request Quotation",
        quotationDescription:
          "Use this page when you want a wider sample set beyond the main Lampung robusta identity.",
        ctaPrimary: "Request Mixed Samples",
        ctaSecondary: "Discuss Catalog",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Supporting origins allow Siger Golden Bean to show a wider Sumatra map without losing its Lampung heart.",
        stories: [
          "Some buyers need comparison: robusta beside arabica, highland beside coastal, practical blend beside premium retail profile.",
          "Each added origin should earn its place through quality, consistency, and a story that can be told honestly.",
          "The goal is not to look bigger than reality. The goal is to curate a meaningful coffee journey that helps buyers choose with confidence."
        ],
        galleryTitle: "Origin Gallery",
        galleryCaptions: ["Sumatra origin mood", "Comparison beans", "Private label discussion"],
        videoTitle: "Catalog Video Slot",
        videoNote:
          "Prepared for mixed sample explanation, origin comparison, or private label presentation video.",
        backLabel: "Back to origins"
      },
      id: {
        eyebrow: "Detail Origin",
        title: "Origin Pendukung Sumatra",
        subtitle: "Lampung Tengah, Pesawaran, Pringsewu, Pagar Alam, Aceh Gayo",
        intro:
          "Halaman opsi terkurasi untuk buyer yang ingin diskusi Sumatra lebih luas, sambil tetap menjaga Lampung sebagai identitas utama brand.",
        profileTitle: "Profil Kopi",
        profile: [
          ["Jenis kopi", "Robusta, arabika, atau blend sesuai kebutuhan buyer"],
          ["Bentuk produk", "Green bean, roasted bean, kopi bubuk, atau private label"],
          ["Area utama", "Opsi Lampung dan Sumatra terkurasi"],
          ["Posisi", "Katalog pembanding untuk buyer yang meninjau beberapa profil"],
          ["Cocok untuk", "Pembanding arabika, house blend, private label, program retail"]
        ],
        tasteTitle: "Arah Rasa",
        taste: ["Profil tergantung origin terpilih", "Body robusta Lampung", "Kedalaman Sumatra", "Pembanding arabika saat tersedia"],
        sampleTitle: "Sample & Packaging",
        sample: [
          ["Paket sampel", "Mixed sample set dapat disiapkan sesuai minat buyer"],
          ["Opsi roast", "Profil dipilih sesuai origin dan bentuk produk"],
          ["Opsi kemasan", "Sample pouch, retail pouch, karton, atau diskusi private label"],
          ["Yang divalidasi", "Kecocokan origin, kecocokan cerita, arah rasa, dan potensi komersial"]
        ],
        documentsTitle: "Dokumen & Kesiapan Ekspor",
        documentsIntro:
          "Origin pendukung diperkenalkan secara hati-hati, dengan dokumen disesuaikan supplier terpilih dan order final.",
        documents: [
          ["Specification sheet", "Disiapkan per origin dan sampel terpilih"],
          ["Konfirmasi supplier", "Dicek sebelum diskusi order lebih besar"],
          ["Dokumen komersial", "Disiapkan setelah order dikonfirmasi"],
          ["Dokumen tambahan", "Dibagikan hanya saat valid dan relevan"]
        ],
        quotationTitle: "Minta Quotation",
        quotationDescription:
          "Gunakan halaman ini saat ingin sample set yang lebih luas di luar identitas utama robusta Lampung.",
        ctaPrimary: "Minta Mixed Samples",
        ctaSecondary: "Diskusi Katalog",
        storiesTitle: "Coffee Stories",
        storiesIntro:
          "Origin pendukung memungkinkan Siger Golden Bean menunjukkan peta Sumatra yang lebih luas tanpa kehilangan hati Lampungnya.",
        stories: [
          "Sebagian buyer membutuhkan pembanding: robusta di samping arabika, dataran tinggi di samping pesisir, blend praktis di samping profil retail premium.",
          "Setiap origin tambahan harus layak masuk karena kualitas, konsistensi, dan cerita yang dapat disampaikan dengan jujur.",
          "Tujuannya bukan terlihat lebih besar dari kenyataan. Tujuannya mengkurasi perjalanan kopi yang bermakna agar buyer memilih dengan percaya diri."
        ],
        galleryTitle: "Galeri Origin",
        galleryCaptions: ["Nuansa origin Sumatra", "Biji pembanding", "Diskusi private label"],
        videoTitle: "Slot Video Katalog",
        videoNote:
          "Disiapkan untuk video penjelasan mixed sample, perbandingan origin, atau presentasi private label.",
        backLabel: "Kembali ke origin"
      },
      ar: {
        eyebrow: "تفاصيل المنشأ",
        title: "مناشئ سومطرة الداعمة",
        subtitle: "لامبونغ تنغاه، بيساواران، برينغسيوو، باغار ألام، آتشيه غايو",
        intro:
          "صفحة خيارات منتقاة للمشترين الذين يريدون نقاشا أوسع حول سومطرة مع بقاء لامبونغ الهوية الرئيسية للعلامة.",
        profileTitle: "ملف القهوة",
        profile: [
          ["نوع القهوة", "روبوستا أو أرابيكا أو خلطة حسب حاجة المشتري"],
          ["شكل المنتج", "حبوب خضراء، حبوب محمصة، قهوة مطحونة، أو علامة خاصة"],
          ["المناطق الرئيسية", "خيارات منتقاة من لامبونغ وسومطرة"],
          ["التموضع", "كتالوج مقارنة للمشترين الذين يراجعون عدة ملفات"],
          ["الاستخدام المناسب", "مقارنة أرابيكا، خلطة بيت، علامة خاصة، برنامج تجزئة"]
        ],
        tasteTitle: "اتجاه الطعم",
        taste: ["يعتمد الملف على المنشأ المختار", "قوام روبوستا لامبونغ", "عمق سومطرة", "مقارنة أرابيكا عند التوفر"],
        sampleTitle: "العينات والتغليف",
        sample: [
          ["حزمة العينة", "يمكن تجهيز مجموعة عينات مختلطة حسب اهتمام المشتري"],
          ["خيار التحميص", "يختار الملف حسب كل منشأ وشكل المنتج"],
          ["خيار التغليف", "كيس عينة أو كيس تجزئة أو كرتون أو نقاش علامة خاصة"],
          ["فحص المشتري", "ملاءمة المنشأ والقصة واتجاه الطعم والإمكان التجاري"]
        ],
        documentsTitle: "الوثائق والاستعداد للتصدير",
        documentsIntro:
          "تقدم المناشئ الداعمة بعناية، مع وثائق متوافقة مع المورد المختار والطلب النهائي.",
        documents: [
          ["ورقة المواصفات", "تجهز حسب المنشأ والعينة المختارين"],
          ["تأكيد المورد", "يفحص قبل نقاش طلب أكبر"],
          ["وثائق تجارية", "تجهز بعد تأكيد الطلب"],
          ["سجلات إضافية", "تشارك فقط عندما تكون صحيحة وذات صلة"]
        ],
        quotationTitle: "طلب عرض سعر",
        quotationDescription:
          "استخدم هذه الصفحة عندما تريد مجموعة عينات أوسع من هوية روبوستا لامبونغ الرئيسية.",
        ctaPrimary: "طلب عينات مختلطة",
        ctaSecondary: "نقاش الكتالوج",
        storiesTitle: "حكايات القهوة",
        storiesIntro:
          "تسمح المناشئ الداعمة لـ Siger Golden Bean بإظهار خريطة سومطرة أوسع من دون فقدان قلبها اللامبونغي.",
        stories: [
          "بعض المشترين يحتاجون إلى مقارنة: روبوستا بجانب أرابيكا، مرتفعات بجانب ساحل، خلطة عملية بجانب ملف تجزئة ممتاز.",
          "كل منشأ إضافي يجب أن يستحق مكانه من خلال الجودة والثبات وقصة يمكن قولها بصدق.",
          "الهدف ليس الظهور أكبر من الواقع. الهدف هو تنسيق رحلة قهوة ذات معنى تساعد المشتري على الاختيار بثقة."
        ],
        galleryTitle: "معرض المنشأ",
        galleryCaptions: ["إحساس منشأ سومطرة", "حبوب مقارنة", "نقاش علامة خاصة"],
        videoTitle: "مساحة فيديو الكتالوج",
        videoNote:
          "مخصصة لفيديو شرح العينات المختلطة أو مقارنة المناشئ أو عرض العلامة الخاصة.",
        backLabel: "العودة إلى المناشئ"
      }
    }
  }
];
