import { reactive, toRefs } from 'vue';


// LandingPage selected values goes here (it makes them globaly)
const state=reactive({
    carData:[]
})
const productIndex=reactive({
  index:[]
});

const toCartItems=reactive([]);

export default function useSelect(){
  // Car brands, models ...
  const select=reactive({
    brand:[
        {name:'Mitsubishi',model:[
            {name:'Lancer',gen:[
                {date:'2000–2010',type:['Basic','EVO'],engine:['1.3 L 4G13 I4 (gasoline)','1.5 L 4G15 I4 (gasoline)','1.6 L 4G18 I4 (gasoline)','1.8 L 4G93 I4 (gasoline)','1.8 L 4G93T I4-T (gasoline)','2.0 L 4G94 I4 (gasoline)','2.0 L 4G63 I4 (gasoline)','2.4 L 4G69 I4 (gasoline)']},
                {date:'2007–2017',type:['Basic','EVO'],engine:['1.5 L 4A91 I4 (gasoline)','1.6 L 4A92 I4 (gasoline)','1.8 L 4B10 I4 (gasoline)','1.8 L 4J10 I4 (gasoline)','2.0 L 4B11 I4 (gasoline)','2.0 L 4B11T I4-T (gasoline)','2.4 L 4B12 I4 (gasoline)','1.8 L 4N13 I4-T (diesel)','2.0 L VW I4-T (diesel)']},
            ]},
            {name:'3000 GT',gen:[
                {date:'1994-1999',type:['GT'],engine:['DOHC 24v v6','DOHC 24v V6 twin-turbo','SOHC 12v V6']},
                {date:'1994-2001',type:['GT'],engine:['3.0L V6 Turbo 6MT (286 HP)']},
                {date:'1990-1994',type:['GT'],engine:['3.0L V6 DOHC 24v 4AT (222 HP)','3.0L V6 DOHC 24v 5MT (222 HP)','SOHC 12v V6']},
                {date:'1990-1993',type:['GT'],engine:['3.0L V6 4AT (225 HP)','3.0L V6 5MT (225 HP)','3.0L V6 Turbo 5MT (286 HP)']},
            ]},
            {name:'Eclipse',gen:[
                {date:'1990-1994',type:['GS','GS DOHC','GS DOHC AWD','GS TURBO','GSX'],engine:['1.8 L 92 hp (69 kW) 4G37 I4','2.0 L 135 hp (101 kW) 4G63 I4','2.0 L 180 hp (130 kW) 4G63T I4 turbo','2.0 L 195 hp (145 kW) 4G63T I4 turbo']},
                {date:'1995–1999',type:['RS','GS','Spyder GS','GS-T','Spyder GS-T','GSX'],engine:['2.0 L 140 hp (104 kW) 420A I4','2.4 L 141 hp (105 kW) 4G64 I4','2.0 L 210 hp (157 kW) 4G63T I4']},
                {date:'2000-2005',type:['RS','GS','Spyder GS','GT','Spyder GT','GTS','Spyder GTS'],engine:['2.4 L 150 hp (110 kW) 4G64 I4','3.0 L 200 hp (150 kW) 6G72 V6','3.0 L 210 hp (160 kW) 6G72 V6']},
                {date:'2006–2012',type:['GS','GS Sport Spyder','SE','GT','GT Spyder'],engine:['2.4 L 150 hp (110 kW) 4G64 I4','3.0 L 200 hp (150 kW) 6G72 V6','3.0 L 210 hp (160 kW) 6G72 V6']},
            ]}]},
        {name:'Subaru',model:[
            {name:'Impreza',gen:[
                {date:'1992–1996',type:['GM','GC','GF'],engine:['1.5 L EJ15 H4','1.6 L EJ16 H4','1.8 L EJ18 H4','2.0 L EJ20 H4','2.0 L EJ20 H4-T','2.2 L EJ22 H4','2.2 L EJ22G H4-T','2.5 L EJ25 H4']},
                {date:'1992-1993',type:['GC8A WRX'],engine:['240 PS (176.5 kW; 236.7 hp)','208 hp (155 kW; 211 PS)']},
                {date:'1993-1994',type:['GC8B WRX'],engine:['240 PS (176.5 kW; 236.7 hp','220 PS (162 kW; 217 hp)','250 PS (184 kW; 247 bhp)','275 PS (202 kW; 271 bhp)']},
                {date:'1994-1996',type:['GC8C WRX'],engine:['260 PS (191.2 kW; 256.4 hp)','275 PS (202 kW; 271 bhp)']},
            ]}
        ]}
    ]
  });

  // category images, titles ...
  const category=reactive([
    {categoryName:'brakes', img:require('@/assets/gallery/category/brakes-category.png')},
    {categoryName:'turbo', img:require('@/assets/gallery/category/turbo-category.png')},
    {categoryName:'engine', img:require('@/assets/gallery/category/engine-category.png')},
    {categoryName:'suspension', img:require('@/assets/gallery/category/suspension-category.png')},
    {categoryName:'oil', img:require('@/assets/gallery/category/oil-category.png')},
    {categoryName:'spark plug', img:require('@/assets/gallery/category/spark-plug-category.png')},
    {categoryName:'exhaust system', img:require('@/assets/gallery/category/exhaust-category.png')},
    {categoryName:'filters', img:require('@/assets/gallery/category/filters-category.png')},
    {categoryName:'battery', img:require('@/assets/gallery/category/battery-category.png')},
  ])

  // products in categories
  const product=reactive([
    {categoryName:'brakes', productType:[
      {brand:'Apec',name:'Stop Z23',position:'Front - Rare',material:'Galvanized',price:'120',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/brakes/apec-brake.png')},
      {brand:'DFC',name:'ProACT Ultra',position:'Front - Rare',material:'Galvanized',price:'100',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/brakes/dfc-brake.png')},
      {brand:'Ultimate',name:'Advantage',position:'Rear',material:'Ceramic',price:'200',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/brakes/ultimate-brake.png')},
      {brand:'Wagner',name:'QuickStop',position:'Front',material:'Ceramic',price:'80',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/brakes/wagner-brake.png')},
      {brand:'Bosch',name:'QuietCast',position:'Rear',material:'Ceramic',price:'125',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/brakes/bosch-brake.png')},
      {brand:'Bosch',name:'SAE J2784',position:'Front',material:'Ceramic',price:'400',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/brakes/bosch-2-brake.png')},
    ]},
    {categoryName:'turbo', productType:[
      {brand:'Garret ',name:'G25 - 550',price:'900',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/turbos/garret-turbo.png')},
      {brand:'Garret',name:'GTX5020R GEN II',price:'1200',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/turbos/garret-2-turbo.png')},
      {brand:'Aurora',name:'3000',price:'755',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/turbos/aurora-turbo.png')},
      {brand:'Garret',name:'GTW3476R',price:'1099',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/turbos/garret-3-turbo.png')},
      {brand:'Borg Warner',name:'AIRWERKS S200SX',price:'999',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/turbos/borg-warner-turbo.png')},
    ]},
    {categoryName:'engine', productType:[
      {brand:'',name:'ZL1',price:'1799',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/engine/zl1-engine.png')},
      {brand:'',name:'L83',price:'1200',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/engine/l83.png')},
      {brand:'BMW',name:'M4',price:'2999',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/engine/bmw-m4.png')},
      {brand:'Chevrolet',name:'Sonic',price:'1100',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/engine/chevrolet-sonic.png')},
      {brand:'Ford',name:'GT 40',price:'16000',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/engine/ford-gt-40.png')},
      {brand:'',name:'3L V8',price:'2998',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/engine/3l-v8.png')},

    ]},
    {categoryName:'suspension', productType:[
      {brand:'Bilstein',name:'',price:'120',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/suspension/bilstein.png')},
      {brand:'Eibach',name:'',price:'190',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/suspension/eibach.png')},
      {brand:'Fabtech',name:'',price:'119',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/suspension/fabtech.png')},
      {brand:'Koni',name:'',price:'150',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/suspension/koni.png')},
      {brand:'KW',name:'',price:'299',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/suspension/kw.png')},
    ]},
    {categoryName:'oil', productType:[
      {brand:'Castrol',name:'5w-40',price:'40',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/oil/castrol.png')},
      {brand:'Exol',name:'5w-30',price:'49',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/oil/exol.png')},
      {brand:'M-oil',name:'10w-40',price:'60',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/oil/m-oil.png')},
      {brand:'royal purple',name:'5w-40',price:'38',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/oil/royal-purple.png')},
      {brand:'syntix',name:'5w-30 2% ceramic',price:'45',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/oil/syntix.png')},
      {brand:'valvoline',name:'10w-40',price:'70',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/oil/valvoline.png')},
    ]},
    {categoryName:'spark-plug', productType:[
      {brand:'Auto Lite',name:'High Tread Pro',price:'120',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/spark-plug/auto-lite.png')},
      {brand:'Champion',name:'Maximum Performance',price:'100',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/spark-plug/champion.png')},
      {brand:'NGK',name:'Iri Way 7',price:'95',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/spark-plug/ngk-2.png')},
      {brand:'NGK',name:'BP5ES',price:'120',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/spark-plug/ngk-3.png')},
      {brand:'NGK',name:'Racing Competition',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',price:'79',img:require('@/assets/gallery/spark-plug/ngk.png')},
    ]},
    {categoryName:'exhaust system', productType:[
      {brand:'Akrapovic',name:'Downpipe',price:'750',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/exhaust/akrapovic-downpipe.png')},
      {brand:'Akrapovic',name:'System',price:'3999',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/exhaust/akrapovic.png')},
      {brand:'Borla',name:'System',price:'2590',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/exhaust/borla.png')},
      {brand:'Flowmaster',name:'System',price:'1200',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/exhaust/flowmaster.png')},
      {brand:'Magnaflow',name:'System',price:'1100',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/exhaust/magnaflow.png')},
      {brand:'Torxe',name:'System',price:'1700',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/exhaust/torxe.png')},
    ]},
    {categoryName:'filters', productType:[
      {brand:'Bosch',name:'Oil filter',price:'20',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/filters/bosch.png')},
      {brand:'Erolite',name:'Oil filter',price:'39',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/filters/erolite.png')},
      {brand:'Fram',name:'Air filter',price:'25',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/filters/fram-1.png')},
      {brand:'Fram',name:'Oil filter',price:'30',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/filters/fram.png')},
      {brand:'Premium Guard',name:'Filter pack',price:'38',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/filters/premium-guard.png')},
      {brand:'Spectre',name:'Air filter',price:'50',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/filters/spectre.png')},
    ]},
    {categoryName:'battery', productType:[
      {brand:'Bosch',name:'',price:'120',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/battery/bosch.png')},
      {brand:'Backup',name:'',price:'110',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/battery/backup.png')},
      {brand:'Die Hard',name:'',price:'90',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/battery/diehard.png')},
      {brand:'Exide',name:'',price:'100',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/battery/exide.png')},
      {brand:'Monbat',name:'',price:'120',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/battery/monbat.png')},
      {brand:'Mutlu',name:'',price:'112',desc:'This is a product description where we can explain unsure- or highlight important things. Write here the package content ...',img:require('@/assets/gallery/battery/mutlu.png')},
    ]},
  ])
  
  return {
    state,
    select,
    ...toRefs(select),
    category,
    ...toRefs(category),
    product,
    ...toRefs(product),
    productIndex,
    toCartItems
  };
}


