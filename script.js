/* ---------- Page switching (single-file, no reload) ---------- */
function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active', b.dataset.page===name));
  window.scrollTo({top:0, behavior:'instant'});
}

/* ---------- Language toggle ---------- */
function toggleLang(){
  const body=document.body;
  const isEn=body.classList.toggle('lang-en');
  document.documentElement.lang= isEn ? 'en':'ar';
  document.documentElement.dir = isEn ? 'ltr':'rtl';
  renderServices();
  renderOffers();
  renderBranches();
  renderTabs();
  renderMenuTable(currentTab);
}

/* ---------- Services ---------- */
const services=[
  {icon:'👕', ar:'غسيل وكوي الملابس', en:'Washing & Pressing', ard:'تنظيف يومي للملابس بمعايير احترافية', end:'Everyday clothing cleaned and pressed to a professional finish.'},
  {icon:'🧥', ar:'التنظيف الجاف', en:'Dry Cleaning', ard:'للقطع الحساسة اللي تحتاج عناية خاصة', end:'For delicate pieces that need special care.'},
  {icon:'♨️', ar:'كوي على البخار', en:'Steam Pressing', ard:'كوي احترافي يحافظ على شكل القماش', end:'Professional steam pressing that protects fabric shape.'},
  {icon:'🧶', ar:'غسيل وتنظيف السجاد', en:'Carpet Washing & Cleaning', ard:'تنظيف عميق للسجاد بجميع المقاسات', end:'Deep cleaning for carpets of all sizes.'},
  {icon:'👟', ar:'تنظيف الأحذية', en:'Shoes Cleaning', ard:'إعادة الحياة لأحذيتك الرياضية والجلدية', end:'Bringing sneakers and leather shoes back to life.'},
  {icon:'🪟', ar:'غسيل وتنظيف الستائر', en:'Curtain Washing & Cleaning', ard:'ستائر خفيفة وثقيلة بأسعار محسوبة بالمتر', end:'Light and heavy curtains, priced per square meter.'},
  {icon:'🛏️', ar:'غسيل وتنظيف المفارش', en:'Bedspreads Cleaning', ard:'ملاءات وأغطية ولحف بكل المقاسات', end:'Sheets, covers and quilts in every size.'},
  {icon:'🧺', ar:'الفرشات والبطانيات', en:'Mattresses & Blankets', ard:'تنظيف وتعقيم للفرشات والبطانيات', end:'Cleaning and sanitizing mattresses and blankets.'},
  {icon:'👶', ar:'عربات الأطفال', en:'Baby Stroller Care', ard:'غسيل وتعقيم كامل لعربة طفلك', end:'Full washing and sanitizing for your baby stroller.'},
  {icon:'🪑', ar:'تنظيف الكراسي', en:'Chair Cleaning', ard:'جلد، قماش أو كنب — نغطي جميع الأنواع', end:'Leather, fabric or sofa chairs — all types covered.'},
];
function renderServices(){
  const en=document.body.classList.contains('lang-en');
  const grid=document.getElementById('servicesGrid');
  grid.innerHTML=services.map(s=>`
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${en?s.en:s.ar}</h3>
      <p>${en?s.end:s.ard}</p>
    </div>`).join('');
}

/* ---------- Offers ---------- */
const offers=[
  {icon:'⚡', tAr:'الخدمة السريعة (خلال ساعتين)', dAr:'يتم احتساب الخدمة السريعة بسعر مضاعف.', tEn:'Express Service (within 2 hours)', dEn:'Express requests are charged at double the price.'},
  {icon:'📅', tAr:'التسليم في نفس اليوم', dAr:'خدمة الاستلام والتسليم في نفس اليوم يُضاف 50٪ إلى السعر الأساسي.', tEn:'Same-Day Delivery', dEn:'Same-day pickup and delivery adds 50% to the base price.'},
  {icon:'🧒', tAr:'خصم ملابس الأطفال', dAr:'خصم 50٪ على ملابس الأطفال حتى عمر 12 سنة.', tEn:'Kidswear Discount', dEn:"50% off children's clothing up to 12 years old."},
  {icon:'💛', tAr:'خصومات خاصة لأصحاب الهمم', dAr:'نقدم عروضًا وخصومات مميزة تقديرًا لهم.', tEn:'Offers for People of Determination', dEn:'We offer special discounts in their honor.'},
  {icon:'🐾', tAr:'خدمة جديدة', dAr:'تنظيف وتعقيم مستلزمات الحيوانات الأليفة بعناية ومواد آمنة.', tEn:'New Service', dEn:'Pet accessories cleaned and sanitized with care using safe materials.'},
];
function renderOffers(){
  const en=document.body.classList.contains('lang-en');
  const grid=document.getElementById('offersGrid');
  grid.innerHTML=offers.map(o=>`
    <div class="offer-item">
      <div class="icon">${o.icon}</div>
      <div class="content">
        <b>${en?o.tEn:o.tAr}</b>
        <p>${en?o.dEn:o.dAr}</p>
      </div>
    </div>`).join('');
}

/* ---------- Branches ---------- */
const branches=[
  {ar:'جزيرة السعديات', en:'Saadiyat Island', tagAr:'موقعنا', tagEn:'Our location', phone1:'025655436', phone2:'0509292788 / 0543105196', map:'Saadiyat Island Abu Dhabi Vanish Laundry'},
];
function renderBranches(){
  const en=document.body.classList.contains('lang-en');
  const grid=document.getElementById('branchGrid');
  grid.innerHTML=branches.map(b=>`
    <div class="branch-card">
      <h3>${en?b.en:b.ar}</h3>
      <span class="tag">${en?b.tagEn:b.tagAr}</span>
      <div class="branch-line"><span class="icon-dot">📞</span><a href="tel:+971${b.phone1}">${b.phone1}</a></div>
      <div class="branch-line"><span class="icon-dot">💬</span><a href="https://wa.me/971509292788" target="_blank" rel="noopener">${b.phone2}</a></div>
      <div class="branch-line"><span class="icon-dot">🕐</span><span>${en?'Daily · 8:00 AM – 12:00 AM':'يوميًا · 8:00 AM – 12:00 AM'}</span></div>
      <div class="branch-line"><span class="icon-dot">📍</span><a href="https://www.google.com/maps/search/${encodeURIComponent(b.map)}" target="_blank" rel="noopener">${en?'Get directions':'فتح الموقع على الخريطة'}</a></div>
    </div>`).join('');
}

/* ---------- Menu data ---------- */
const menuData={
  household:{
    ar:'مستلزمات المنزل', en:'Household',
    cols:['wash','presser','iron','dry'],
    rows:[
      ['Pillow Cover / Case','غطاء مخدة / وسادة','','2.10','4.20','6.30'],
      ['Table Cloth – Small','غطاء طاولة – صغير','','3.15','3.15','8.40'],
      ['Table Cloth – Big','غطاء طاولة – كبير','','6.30','6.30','10.50'],
      ['Curtain Light (per sqm)','ستارة خفيفة / لكل متر مربع','','','8.40',''],
      ['Curtain Heavy / Velvet (per sqm)','ستارة ثقيلة (مخمل) / لكل متر مربع','','','12.60',''],
      ['Chiffon under Curtain (per pc)','شيفون تحت الستائر / لكل قطعة','','','10.50',''],
      ['Carpet Normal (per sqm)','سجاد عادي / لكل متر مربع','','','12.60',''],
      ['Carpet Wool Normal (per sqm)','سجاد صوف عادي / لكل متر مربع','','','18.90',''],
      ['Sofa Cover – Medium','غطاء أريكة – متوسط','','10.50','15.75',''],
      ['Sofa Cover – Large','غطاء أريكة – كبير','','15.75','21.00',''],
      ['Bed Sheet – Single','ملاءة سرير – مفرد','','3.15','6.30',''],
      ['Bed Sheet – Double','ملاءة سرير – مزدوج','','10.50','15.75',''],
      ['Bed Cover – Single','غطاء سرير – مفرد','','6.30','12.60',''],
      ['Bed Cover – Double','غطاء سرير – مزدوج','','8.40','15.75',''],
      ['Duvet / Quilt Cover – Small','غطاء لحاف – صغير','','','12.60',''],
      ['Duvet / Quilt Cover – Large','غطاء لحاف – كبير','','','21.00',''],
      ['Blanket – Small','بطانية – صغيرة','','','15.75',''],
      ['Blanket – Large','بطانية – كبيرة','','','31.50',''],
      ['Pillow – Small','مخدة / وسادة – صغيرة','','','6.30',''],
      ['Pillow – Big','مخدة / وسادة – كبيرة','','','10.50',''],
      ['Travel Bag – Regular','حقيبة سفر عادية','31.50','','',''],
      ['Bed Spread – Single/Small','مفرش سرير – مفرد/صغير','7.35','8.40','15.75',''],
      ['Bed Spread – Double/Large','مفرش سرير – مزدوج/كبير','12.60','13.65','26.25',''],
      ['Fitted Sheet – Small','ملاءة فرشة – صغيرة','','','15.75',''],
      ['Fitted Sheet – Large','ملاءة فرشة – كبيرة','','','26.25',''],
      ['Leather Chair','كرسي جلد','42.00','','',''],
      ['Fabric Chair','كرسي قماش','36.75','','',''],
      ['Sofa Chair','كرسي كنب','52.50','','',''],
      ['Small Carpet Pieces','قطع سجاد صغيرة','10.50','','',''],
      ['Cushion – Small','وسادة كنب – صغيرة','','','5.25',''],
      ['Cushion – Big','وسادة كنب – كبيرة','','','10.50',''],
      ['Bath Mat – Small','دواسة حمام – صغيرة','','','8.40',''],
      ['Bath Mat – Big','دواسة حمام – كبيرة','','','12.60',''],
    ]
  },
  women:{
    ar:'النساء', en:'Women',
    cols:['wash','presser','iron','dry'],
    rows:[
      ['Beaded Abaya','عباية مطرزة بخرز أو أحجار','15.75','15.75','26.25','31.50'],
      ['Embroidered Thob','ثوب مطرز','10.50','15.75','26.25','31.50'],
      ['Abaya – Normal','عباية – عادي','8.40','10.50','15.75','21.00'],
      ['Shella','شيلة','3.15','','6.30','7.35'],
      ['Skirt – Long','تنورة طويلة','8.40','15.75','','21.00'],
      ['Skirt – Short','تنورة قصيرة','6.30','10.50','','15.75'],
      ['Dress – Normal','فستان – عادي','8.40','15.75','21.00','31.50'],
      ['Saree','ساري','6.30','15.75','21.00','31.50'],
      ['Beaded Saree','ساري مطرز بأحجار أو خرز','21.00','21.00','42.00','57.75'],
      ['Blouse','بلوزة','4.20','3.15','6.30','8.40'],
      ['Shalwar Kameez – 2 pcs','شلوار قميص – قطعتين','5.25','8.40','15.75','15.75'],
      ['Shalwar Kameez – 3 pcs','شلوار قميص – 3 قطع','8.40','15.75','21.00','15.75'],
      ['Night Dress','فستان نوم','','5.25','10.50','15.75'],
      ['Evening Dress','فستان سهرة','','21.00','42.00','63.00'],
      ['Wedding Dress','فستان عرس','','105.00','','210.00'],
      ['Bra','حمالة صدر','','','3.15','5.25'],
      ['Silk Dress','فستان حرير','','15.75','26.25','36.75'],
      ['Silk Coat','معطف حرير','','21.00','31.50','36.75'],
      ['Silk Jacket','جاكيت حرير','','15.75','26.25','36.75'],
      ['Silk Abaya','عباية حرير','','15.75','26.25','31.50'],
      ['Silk Skirt','تنورة حرير','','15.75','26.25','31.50'],
      ['Silk Thob','ثوب حرير','','10.50','15.75','21.00'],
      ['Leather Bag','حقيبة يد جلد','21.00','','',''],
      ['Pleated Skirt','تنورة مكسرات / بلسرات','','10.50','15.75',''],
      ['Small Baby Stroller','عربة أطفال صغيرة','42.00','','',''],
      ['Child Car Seat','مقعد أطفال للسيارة','31.50','','',''],
    ]
  },
  men:{
    ar:'الرجال', en:'Men',
    cols:['wash','presser','iron','dry'],
    rows:[
      ['Ghatra – Normal','غترة عادي','4.20','3.15','5.25',''],
      ['Wazar / Lunghi','وزار','2.10','','4.20','5.25'],
      ['Neck Tie','ربطة عنق','','','4.20','4.20'],
      ['Suit – 2 pcs','بدلة رجالي – قطعتين','15.75','21.00','36.75',''],
      ['Army Uniform','زي عسكري','10.50','','21.00',''],
      ['Kandura / Dishdasha – Summer','كندورة / دشداشة – صيفي','4.20','7.35','5.40',''],
      ['Kandura / Dishdasha – Winter','كندورة / دشداشة – شتوي','5.25','8.40','12.60',''],
      ['Ghatra Wool','غترة صوف','','','10.50',''],
      ['Besht','بشت رجالي','15.75','','26.25','31.50'],
    ]
  },
  unisex:{
    ar:'الجنسين', en:'Uni Sex',
    cols:['wash','presser','iron','dry'],
    rows:[
      ['Shirt','قميص','3.15','4.20','6.30','8.40'],
      ['T-shirt','تي شيرت','2.10','3.15','5.25','6.30'],
      ['Trouser','بنطلون','3.15','4.20','7.35','8.40'],
      ['Normal Jacket','جاكيت عادي','6.30','8.40','12.60','15.75'],
      ['Suit – 2 pcs','بدلة – قطعتين','10.50','12.60','21.00','26.25'],
      ['Over Coat – Normal','معطف عادي','8.40','10.50','15.75','21.00'],
      ['Short','شورت','2.10','3.15','5.25','5.25'],
      ['Overall','أوفرهول','7.35','10.50','15.75','21.00'],
      ['Cap','طاقية','2.10','','',''],
      ['Sweater','سترة صوف','2.10','','3.15',''],
      ['Under Shirt / Inner Vest','فنيلة / ملابس داخلية','3.15','','4.20','5.75'],
      ['Pyjama','بيجامة','4.20','4.20','6.30','10.50'],
      ['Socks','جرابات','','','2.10',''],
      ['Pullover','بلوفر','5.25','','10.50','15.75'],
      ['Under Wear','ملابس داخلية','3.15','','5.25','6.30'],
      ['Silk Blouse','بلوزة حرير','5.25','','10.50','12.60'],
      ['Leather Jacket','جاكيت جلد','52.50','','',''],
      ['Leather Coat','معطف جلد','42.00','','',''],
      ['Silk Shirt','قميص حرير','','6.30','10.50','8.40'],
      ['Under Short','شورت داخلي','','3.15','5.25','4.20'],
      ['Scarf','وشاح','','3.15','5.25','6.30'],
      ['School Uniform (1–2 pcs)','زي مدرسي – قطعة أو قطعتين','5.40','5.25','10.50','12.60'],
      ['Sport Trouser','بنطلون رياضة','3.15','4.20','7.35',''],
      ['Sports Suit – 2 pcs','بدلة رياضية – قطعتين','8.40','10.50','12.60','15.75'],
    ]
  },
  kids:{
    ar:'الأطفال', en:'Kids',
    cols:['wash','presser','iron','dry'],
    rows:[
      ['Kids Shoes','أحذية أطفال','21.00','','',''],
      ['Large Stroller','عربة أطفال كبيرة','84.00','','',''],
      ["Children's Bed Mattress",'مفرش سرير أطفال','5.25','','',''],
      ['Baby Pillow','مخدة / وسادة أطفال','','','5.25',''],
      ['Baby Bib','فرشة أطفال (بيب)','','','3.15',''],
      ['Baby Mattress','فرشة أطفال','10.50','','',''],
      ["Children's Underwear",'ملابس داخلية للأطفال','','','2.10',''],
      ['Shirt / Trouser / Blouse – Children','قميص / بنطلون / بلوزة أطفال','','','3.15',''],
      ['Baby Robe','روب أطفال','','','5.25',''],
    ]
  },
  towels:{
    ar:'المناشف', en:'Towels',
    cols:['wash','presser','iron','dry'],
    rows:[
      ['Bath Towel 140×70','فوطة حمام ١٤٠×٧٠','','','6.30',''],
      ['Hand Towel 40×70 – 50×80cm','فوطة يد ٤٠×٧٠ إلى ٥٠×٨٠سم','','','3.15',''],
      ['Face Towel 30×30cm','فوطة وجه ٣٠×٣٠سم','','','2.10',''],
      ['Medium Towel 80×90 – 140×160cm','منشفة متوسطة ٨٠×٩٠ إلى ١٤٠×١٦٠سم','','','7.35',''],
      ['Bath Sheet 90×100 – 180×200cm','منشفة حمام ٩٠×١٠٠ إلى ١٨٠×٢٠٠سم','','','9.45',''],
      ['Bathrobe / Towel – Light','روب استحمام / منشفة – خفيف','','','6.30','8.40'],
      ['Bathrobe / Towel – Heavy','روب استحمام / منشفة – ثقيل','','','10.50','12.60'],
    ]
  },
  shoes:{
    ar:'الأحذية', en:'Shoes',
    cols:['price'],
    rows:[
      ['Athletic Shoe','حذاء رياضي','52.50'],
      ['Leather Shoes','حذاء جلد قصير','31.50'],
      ['Long Boot Shoes','حذاء جلد طويل','63.00'],
      ['Canvas Shoes','حذاء قماش','42.00'],
    ]
  },
};
const tabOrder=['household','women','men','unisex','kids','towels','shoes'];
let currentTab='household';

function renderTabs(){
  const en=document.body.classList.contains('lang-en');
  const tabs=document.getElementById('menuTabs');
  tabs.innerHTML=tabOrder.map(k=>{
    const d=menuData[k];
    return `<button class="tab-btn ${k===currentTab?'active':''}" onclick="selectTab('${k}')">${en?d.en:d.ar}</button>`;
  }).join('');
}
function selectTab(k){ currentTab=k; renderTabs(); renderMenuTable(k); }

function renderMenuTable(key){
  const en=document.body.classList.contains('lang-en');
  const data=menuData[key];
  const head=document.getElementById('menuHeadRow');
  const body=document.getElementById('menuBody');

  const colLabels={
    wash:  en?'Washing & Cleaning':'غسيل وتنظيف',
    presser: en?'Presser':'كوي',
    iron: en?'Washing & Ironing':'غسيل عادي وكوي',
    dry: en?'Dry Clean':'التنظيف الجاف',
    price: en?'Price':'السعر'
  };
  const itemLabel = en? 'Item':'الصنف';

  head.innerHTML = `<th>${itemLabel}</th>` + data.cols.map(c=>`<th class="num">${colLabels[c]}</th>`).join('');

  body.innerHTML = data.rows.map(r=>{
    const name = en? r[0] : r[1];
    const values = r.slice(2);
    const cells = values.map(v=> v? `<td class="num">${v}</td>` : `<td class="num dash">—</td>`).join('');
    return `<tr><td>${name}</td>${cells}</tr>`;
  }).join('');
}

/* ---------- init ---------- */
renderServices();
renderOffers();
renderBranches();
renderTabs();
renderMenuTable(currentTab);
showPage('home');
