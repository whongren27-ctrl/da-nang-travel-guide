export const navItems = [
  { label: '首頁', icon: '⌂', to: '/' },
  { label: '正餐', icon: '♨', to: '/food' },
  { label: '小食', icon: '◒', to: '/snacks' },
  { label: '咖啡廳', icon: '☕', to: '/cafe' },
  { label: '按摩 SPA', icon: '♧', to: '/spa' },
  { label: '行程推薦', icon: '▣', to: '/itinerary' },
];
export const quickLinks = [
  { icon: '✈', title: '快速攻略', detail: '入境 · 交通 · 天氣', to: '/guide' },
  { icon: '♧', title: '必去景點', detail: '海灘 · 地標 · 拍照點', to: '/spots' },
  { icon: '▣', title: '行程推薦', detail: '2天1夜精選路線', to: '/itinerary' },
  { icon: '♡', title: '旅行小貼士', detail: '換匯 · 網卡 · APP', to: '/tips' },
];

export const itineraryDays = [
  {
    day: 'DAY 01',
    date: '09/22',
    subtitle: '抵達 · 海鮮 · 夜生活',
    items: [
      { time: '18:30', icon: '✈️', title: '抵達峴港 / 離開機場' },
      { time: '19:30', icon: '🦞', title: 'Mộc Quán Seafood', note: '峴港的第一頓，從海鮮開始。', slug: 'moc-quan-seafood' },
      { time: '21:00', icon: '🏨', title: 'Hotel / Check-in / Rest' },
      { time: '22:30 — Late', icon: '🍸', title: 'KALA KALA', note: '玩到凌晨再回酒店' },
    ],
  },
  {
    day: 'DAY 02',
    date: '09/23',
    subtitle: '慢晨 · 美食 · 按摩',
    items: [
      { time: '10:30', icon: '☀️', title: 'Slow Morning', note: '睡到自然醒' },
      { time: '11:30', icon: '☕', title: 'tan.', badge: 'Optional', note: '喝杯咖啡再開始今天', slug: 'tan' },
      { time: '12:00', icon: '🥢', title: 'Bếp Cuốn', meta: 'MICHELIN Guide', note: '今天的越南料理午餐', slug: 'bep-cuon' },
      { time: '13:30', icon: '🌿', title: 'Golden Lotus', meta: 'Massage & Relax', note: '60–75 min', slug: 'golden-lotus' },
      { time: '15:10', icon: '🍕', title: "Pizza 4P's", note: '旅行結束前的最後一頓', slug: 'pizza-4ps' },
      { time: '16:00', icon: '🧳', title: 'Back to Hotel', note: '拿行李' },
      { time: '16:30', icon: '✈️', title: 'Leave for Da Nang Airport' },
    ],
  },
];

export const travelPages = {
  guide: {
    title: '快速攻略',
    script: 'Before you go ♡',
    intro: '第一次去峴港，把入境、交通和天氣先看懂，落地後就能輕鬆開始旅行。',
    tone: 'peach',
    sections: [
      {
        icon: 'passport',
        title: '入境準備',
        lead: '護照、簽證與回程資料',
        items: ['出發前確認護照效期與適用的越南入境規定。', '需要簽證時，請使用越南官方電子簽證網站申請。', '把住宿地址、回程機票與旅遊保險存成離線截圖。'],
      },
      {
        icon: 'transport',
        title: '機場交通',
        lead: '市區距離近，移動很簡單',
        items: ['從峴港國際機場前往市中心，多數行程可直接叫車。', '使用 Grab 時先核對車牌與上車點，再與司機會合。', '多人同行或行李較多，可預約機場接送。'],
      },
      {
        icon: 'weather',
        title: '天氣穿搭',
        lead: '海邊日曬強，雨也來得快',
        items: ['帶輕薄透氣衣物、防曬用品和方便步行的鞋。', '隨身準備摺疊傘，午後陣雨時也用得上。', '海邊、咖啡館與 SPA 冷氣溫差大，可帶一件薄外套。'],
      },
    ],
    note: '小提醒：入境規定可能依國籍與出發時間變動，出發前再確認一次最安心。',
  },
  spots: {
    title: '必去景點',
    script: 'See you by the sea ♡',
    intro: '海灘、城市地標和適合散步拍照的地方，挑幾個喜歡的慢慢走。',
    tone: 'sky',
    sections: [
      {
        icon: 'beach',
        title: '美溪海灘',
        lead: 'My Khe Beach',
        items: ['清晨看日出，傍晚沿海散步，都很舒服。', '光線柔和時最適合拍照，也比較不曬。', '下水前留意現場旗號與海況。'],
      },
      {
        icon: 'bridge',
        title: '龍橋與韓江',
        lead: 'Dragon Bridge · Han River',
        items: ['傍晚從韓江邊一路散步到龍橋。', '亮燈後城市氣氛更完整，適合拍夜景。', '週末活動與交通安排可能調整，當天留意現場資訊。'],
      },
      {
        icon: 'camera',
        title: '山茶半島',
        lead: 'Son Tra Peninsula',
        items: ['適合安排半天看海、看城市與沿途風景。', '山路移動要預留時間，雨天與霧天減速慢行。', '尊重野生動物，不餵食、不靠太近。'],
      },
      {
        icon: 'landmark',
        title: '五行山',
        lead: 'Marble Mountains',
        items: ['洞穴、寺廟與石階交錯，建議穿好走的鞋。', '早一點抵達較涼爽，也能避開人潮。', '部分階梯較陡，行程不用排得太趕。'],
      },
    ],
    note: '拍照建議：清晨去海邊，傍晚留給韓江與龍橋，光線會更柔和。',
  },
  tips: {
    title: '旅行小貼士',
    script: 'Tiny notes for a happy trip ♡',
    intro: '換匯、網路和常用 APP 先準備好，在峴港移動與點餐都會更順。',
    tone: 'sage',
    sections: [
      {
        icon: 'money',
        title: '換匯付款',
        lead: 'Vietnamese Dong · VND',
        items: ['準備少量現金支付小店、街邊小食與零碎車費。', '刷卡前確認金額與幣別，收據保留到旅程結束。', '換匯時當面點清鈔票，避免在匆忙中拿錯面額。'],
      },
      {
        icon: 'sim',
        title: '網卡與 eSIM',
        lead: '落地前先保持聯絡',
        items: ['確認手機是否支援 eSIM，或在機場、市區購買實體 SIM。', '依旅程天數選擇流量，不必追求過大的方案。', '啟用後先測試行動網路與熱點分享。'],
      },
      {
        icon: 'apps',
        title: '實用 APP',
        lead: 'Grab · Maps · Translate',
        items: ['Grab：叫車與查看預估車資。', 'Google Maps：收藏店鋪、景點與離線地圖。', 'Google Translate：點餐與簡單溝通，可先下載越南語。'],
      },
      {
        icon: 'bag',
        title: '隨身小物',
        lead: '少一點狼狽，多一點從容',
        items: ['防曬、雨傘、行動電源與一個輕便購物袋。', '寺廟與室內空間準備較得體的遮肩衣物。', '重要資料各留一份雲端與離線備份。'],
      },
    ],
    note: '把店鋪先收藏到 Google Maps，當天依所在位置彈性調整，旅行會更輕鬆。',
  },
};
export const categories = [
  { title: '正餐', subtitle: '必吃的在地美味', color: 'pink', art: '🍜', to: '/food', mapUrl: '' },
  { title: '小食', subtitle: '邊走邊吃的幸福', color: 'cream', art: '🥖', to: '/snacks', mapUrl: '' },
  { title: '咖啡廳', subtitle: '找一個喜歡的角落', color: 'sage', art: '☕', to: '/cafe', mapUrl: '' },
  { title: '按摩 SPA', subtitle: '放鬆身心的療癒時光', color: 'sky', art: '🌿', to: '/spa', mapUrl: '' },
  { title: '行程推薦', subtitle: '兩種玩法 · 隨你選', color: 'lavender', art: '🗺️', to: '/itinerary', mapUrl: '' },
];

// Place content stays in this existing data module; image files are copied verbatim from ~/Desktop/places.
const placeAsset = (slug, file) => `${import.meta.env.BASE_URL}assets/places/${slug}/${file}`;
const googleMapsLink = (placeAndAddress) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeAndAddress)}`;
export const places = [
  { slug: 'nen-danang', name: 'Nén Danang', category: 'food', position: '現代越南精緻料理 / Fine Dining', cardDescription: '用一套像「旅行故事」一樣的菜單，把越南在地食材做成很有創意的一餐。', description: '如果想在峴港安排一頓比較特別的正餐，可以把 Nén Danang 放進名單。這裡不是傳統越南家常菜路線，而是用更現代、更精緻的方式重新表達越南食材與味道。整體用餐更有儀式感，很適合安排成旅行中的特別一餐或約會晚餐。', tags: ['精緻料理', '越南料理', 'Fine Dining', '約會晚餐'], cover: placeAsset('nen-danang', 'cover.jpg'), gallery: [placeAsset('nen-danang', '01.jpg'), placeAsset('nen-danang', '02.jpg')], mapUrl: googleMapsLink('Nén Danang, 16 Mỹ Đa Tây 2, Ngũ Hành Sơn, Đà Nẵng 550000') },
  { slug: 'moc-quan-seafood', name: 'Mộc Quán Seafood', category: 'food', position: '峴港海鮮', cardDescription: '海鮮種類多、份量直接，適合想認真吃一頓蝦蟹和當地海鮮的時候。', description: '來海邊城市當然要安排一頓海鮮。Mộc Quán Seafood 比較適合想一次吃蝦、蟹、龍蝦和各種當地海鮮的人，菜色豐富，整體更偏熱鬧、直接的海鮮大餐路線。', tags: ['海鮮', '龍蝦', '螃蟹', '當地人氣'], cover: placeAsset('moc-quan-seafood', 'cover.jpg'), gallery: [placeAsset('moc-quan-seafood', '01.jpg'), placeAsset('moc-quan-seafood', '02.jpg'), placeAsset('moc-quan-seafood', '03.jpg')], mapUrl: googleMapsLink('Mộc Quán Seafood, 26 Tô Hiến Thành, An Hải, Đà Nẵng 550000') },
  { slug: 'an-thoi', name: 'Ăn Thôi', category: 'food', position: '經典越南料理', cardDescription: '越南煎餅、炒空心菜和各類家常菜都很有代表性，適合一次吃到多種當地味道。', description: '如果第一次來峴港，Ăn Thôi 很適合用來認識經典越南菜。越南煎餅、炒空心菜和各種家常料理都比較容易接受，可以一次點幾道大家分享，屬於比較輕鬆、豐富的一餐。', tags: ['越南料理', '越南煎餅', '在地風味', '家常菜'], cover: placeAsset('an-thoi', 'cover.jpg'), gallery: [placeAsset('an-thoi', '01.jpg'), placeAsset('an-thoi', '02.jpg')], mapUrl: googleMapsLink('Ăn Thôi, 114 Bạch Đằng, Hải Châu, Đà Nẵng 550000') },
  { slug: 'bep-cuon', name: 'Bếp Cuốn', category: 'food', position: '越南卷物與家常料理', cardDescription: '一次可以吃到生春捲、炸捲、烤肉和多種越南傳統搭配，整體很有在地感。', description: 'Bếp Cuốn 的重點是各種越南卷物和傳統搭配。生春捲、炸捲、烤肉和蔬菜一起上桌，吃法很有互動感。如果想吃一頓既有越南特色、又不會太正式的料理，這家很適合。', tags: ['越南料理', '春捲', '烤肉', '在地風味'], cover: placeAsset('bep-cuon', 'cover.jpg'), gallery: [placeAsset('bep-cuon', '01.jpg'), placeAsset('bep-cuon', '02.jpg')], mapUrl: googleMapsLink('Bếp Cuốn, 31-33 Trần Bạch Đằng, An Hải, Đà Nẵng 550000') },
  { slug: 'pizza-4ps', name: "Pizza 4P's", category: 'food', position: '日意融合披薩', cardDescription: '自製芝士、窯烤披薩和義大利麵都很有特色，吃多了越南菜時很適合換個口味。', description: '旅行裡如果連續吃了很多越南料理，可以來 Pizza 4P\'s 換換口味。這裡以窯烤披薩、自製芝士和義大利麵為主，整體環境和完成度都比較穩定，很適合安排成一頓輕鬆的正餐。', tags: ['披薩', 'Burrata', '義大利麵', '異國料理'], cover: placeAsset('pizza-4ps', 'cover.jpg'), gallery: [placeAsset('pizza-4ps', '01.jpg'), placeAsset('pizza-4ps', '02.jpg')], mapUrl: googleMapsLink("Pizza 4P's Indochina Da Nang, Indochina Riverside Towers, Level 2, 74 Bạch Đằng, Hải Châu, Đà Nẵng") },
  { slug: 'bun-cha-ca-109', name: 'Bún Chả Cá 109', category: 'snacks', position: '峴港魚餅米粉', cardDescription: '很有峴港代表性的一碗魚餅米粉，湯頭清鮮，適合早餐或簡單午餐。', description: 'Bún Chả Cá 是峴港很有代表性的當地小吃之一。清鮮的湯底配魚餅、米粉和配菜，不會太厚重，很適合作為早餐、早午餐，或者行程中間快速吃一碗。', tags: ['峴港小吃', '魚餅米粉', '在地美食', '當地特色'], cover: placeAsset('bun-cha-ca-109', 'cover.jpg'), gallery: [placeAsset('bun-cha-ca-109', '01.jpg')], mapUrl: googleMapsLink('Bún Chả Cá 109, 109 Nguyễn Chí Thanh, Hải Châu, Đà Nẵng 550000') },
  { slug: 'nam-house-cafe', name: 'NAM House Cafe', category: 'cafe', position: '復古越南咖啡館', cardDescription: '老家具、舊物和濃濃的越南懷舊感，比單純喝咖啡更像是在逛一間小型生活博物館。', description: 'NAM House Cafe 最吸引人的不是單純一杯咖啡，而是整個空間。綠植、舊家具、老物件和越南復古元素很多，很適合慢慢逛、拍照，再找一個角落坐下來喝咖啡。', tags: ['復古咖啡館', '越南風情', '綠植', '拍照'], cover: placeAsset('nam-house-cafe', 'cover.jpg'), gallery: [placeAsset('nam-house-cafe', '01.jpg')], mapUrl: googleMapsLink('NAM House Cafe, 15/1 Lê Hồng Phong, Hải Châu, Đà Nẵng 550000') },
  { slug: 'tan', name: 'tan.', category: 'cafe', position: '設計感 Specialty Coffee', cardDescription: '空間、光影和咖啡都很有質感，適合下午找個舒服的位置慢慢坐一會兒。', description: '和 NAM House 的復古感不同，tan. 更現代、更簡潔。挑高空間、大面積自然光和建築設計是它的特點，如果下午不想趕行程，很適合在這裡坐一會兒，喝杯咖啡休息。', tags: ['Specialty Coffee', '設計感', '建築空間', '下午咖啡'], cover: placeAsset('tan', 'cover.jpg'), gallery: [placeAsset('tan', '01.jpg')], mapUrl: googleMapsLink('Tân Coffee / tan., Nguyễn Thiện Thuật / 10 Bình Hiên, Hải Châu, Đà Nẵng 550000') },
  { slug: 'golden-lotus', name: 'Golden Lotus', category: 'spa', position: '人氣 / 綜合體驗', cardDescription: '從迎賓茶、按摩到結束後的甜點與薑茶，整體流程完整，適合第一次在峴港安排 SPA 的人。', description: 'Golden Lotus 更像是一家綜合體驗比較完整的 SPA。從進店、迎賓茶、按摩到結束後的茶點，整個流程比較成熟。如果第一次在峴港做 SPA，又希望選擇知名度和整體體驗都比較穩的一家，可以優先考慮這裡。', tags: ['人氣 SPA', '綜合體驗', '足部按摩', '精油按摩'], cover: placeAsset('golden-lotus', 'cover.jpg'), gallery: [placeAsset('golden-lotus', '01.jpg'), placeAsset('golden-lotus', '02.jpg')], mapUrl: googleMapsLink('Golden Lotus Oriental Organic Spa, 209 Trần Phú, Hải Châu, Đà Nẵng') },
  { slug: 'herbal-spa', name: 'Herbal Spa', category: 'spa', position: '按摩 / 草藥特色', cardDescription: '更強調按摩本身和草本放鬆感，空間裡有明顯的越南民族元素，適合把身體放鬆放在第一位。', description: 'Herbal Spa 的特色更集中在按摩和草藥體驗本身。空間裡有不少越南民族風格元素，如果比起豪華環境更重視按摩體驗、草本香氣和身體放鬆，這一家會更符合這個方向。', tags: ['草藥按摩', '越式 SPA', '民族風', '放鬆'], cover: placeAsset('herbal-spa', 'cover.jpg'), gallery: [placeAsset('herbal-spa', '01.jpg'), placeAsset('herbal-spa', '02.jpg')], mapUrl: googleMapsLink('Herbal Spa / Luxury Herbal Spa, 201 D. Đình Nghệ, An Hải, Sơn Trà, Đà Nẵng 550000') },
  { slug: 'charm-spa-grand', name: 'Charm Spa Grand', category: 'spa', position: '環境 / 精緻體驗', cardDescription: '木質空間、藤編燈飾和細節布置都很舒服，適合把 SPA 本身當成一段完整的旅行體驗。', description: 'Charm Spa Grand 的優勢主要是環境。木質空間、藤編燈飾、綠植和茶水細節都做得比較精緻。如果希望拍照好看，同時又想把按摩安排成旅行中一段舒服、完整的體驗，可以選擇這一家。', tags: ['環境好', '精緻 SPA', '木質空間', '放鬆體驗'], cover: placeAsset('charm-spa-grand', 'cover.jpg'), gallery: [placeAsset('charm-spa-grand', '01.jpg'), placeAsset('charm-spa-grand', '02.jpg')], mapUrl: googleMapsLink('Charm Spa Grand Da Nang, 36 Thái Phiên, Hải Châu, Đà Nẵng 550000') },
];
