(function(){"use strict";var e={2442:function(e,t,o){var l=o(9242),n=o(3396),a=o(7718),r=o(9271);function i(e,t,o,l,i,s){const u=(0,n.up)("app-bar"),d=(0,n.up)("router-view"),c=(0,n.up)("app-footer");return(0,n.wg)(),(0,n.j4)(a.q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u),(0,n.Wm)(r.O,{class:"app__main pb-4"},{default:(0,n.w5)((()=>[(0,n.Wm)(d)])),_:1}),(0,n.Wm)(c)])),_:1})}var s=o.p+"img/logo_scbs.2044408b.svg",u=o(8796),d=o(7312),c=o(3289),m=o(8694);const p={class:"g-content-block g-content-block--no-padding w-100 d-flex align-center justify-space-between"},h={class:"d-flex align-center"},f=(0,n.Uk)(" mdi-account-check-outline "),g=(0,n.Uk)(" Войти ");function v(e,t,o,l,a,r){const i=(0,n.up)("app-bar-user"),v=(0,n.up)("login-modal");return(0,n.wg)(),(0,n.j4)(u.L,{app:"",color:"#e6e6e6",elevation:"0",height:"54"},{default:(0,n.w5)((()=>[(0,n._)("div",p,[(0,n.Wm)(m.f,{src:s,"max-width":"175"}),(0,n._)("div",null,[r.isSearchAvaliable?((0,n.wg)(),(0,n.j4)(d.T,{key:0,icon:r.isSearchOpen?"mdi-magnify-minus-outline":"mdi-magnify",onClick:r.toggleSearch},null,8,["icon","onClick"])):(0,n.kq)("",!0),r.isLogin?((0,n.wg)(),(0,n.j4)(i,{key:2,onLogout:r.logout},null,8,["onLogout"])):((0,n.wg)(),(0,n.j4)(d.T,{key:1,onClick:r.openLogin},{default:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n.Wm)(c.t,{size:"22",class:"mr-1"},{default:(0,n.w5)((()=>[f])),_:1}),g])])),_:1},8,["onClick"]))]),(0,n.Wm)(v,{modelValue:e.showLogin,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showLogin=t)},null,8,["modelValue"])])])),_:1})}var w=o(6265),y=o.n(w);class b{constructor(e={}){this.roles=e.roles||[],this.isLogin=e.isLogin}isLogin=!1;roles=[];can(e){return this.roles.includes(e)}}var _=o(65),k=Object.freeze([{id:"auto",label:"Авто",icon:"mdi-shield-car",subcategories:[{id:"auto-kasko",label:"Каско",icon:"mdi-shield-car"},{id:"auto-osago",label:"Осаго",icon:"mdi-shield-car"}]},{id:"travel",label:"Путешествия",icon:"mdi-shield-airplane-outline",subcategories:[{id:"travel-accident",label:"Страхование от несчастного случая",icon:"mdi-shield-airplane-outline"},{id:"travel-visa",label:"Полис выезжающего за рубеж",icon:"mdi-shield-airplane-outline"}]},{id:"realEstate",label:"Недвижимость",icon:"mdi-shield-home-outline",subcategories:[{id:"realEstate-apartments",label:"Квартиры и апартаменты",icon:"mdi-shield-home-outline"},{id:"realEstate-home",label:"Дом",icon:"mdi-shield-home-outline"},{id:"realEstate-responsibility",label:"Ответственность перед соседями",icon:"mdi-shield-home-outline"}]},{id:"health",label:"Здоровие",icon:"mdi-shield-account-outline",subcategories:[{id:"health-nszh",label:"НСЖ",icon:"mdi-shield-account-outline"},{id:"health-garmoniya",label:"Женское страхование",icon:"mdi-shield-account-outline"},{id:"health-child",label:"Детское страхование",icon:"mdi-shield-account-outline"}]},{id:"cash",label:"Кредитование",icon:"mdi-shield-sync-outline",subcategories:[{id:"cash-cash",label:"Кредит наличными",icon:"mdi-shield-sync-outline"},{id:"cash-mortgage",label:"Ипотека",icon:"mdi-shield-sync-outline"},{id:"cash-auto",label:"Автокредиты",icon:"mdi-shield-sync-outline"}]}]);const V=(0,_.MT)({state:{user:new b,isSearchOpen:!1,products:k,cities:[]},mutations:{updateState(e,t={}){console.log(t),Object.entries(t).forEach((([t,o])=>{t in e&&(e[t]=o)}))}},actions:{async loadCities({commit:e,state:t}){if(!t.cities.length){const{data:t}=await C.get("/get/cities");e("updateState",{cities:t})}}}}),W=y().create({baseURL:"http://localhost:5000/api",timeout:1e3});W.updateToken=async e=>{if(e)try{const{data:t}=await W.get("/user/login/check",{headers:{Authorization:e}});V.commit("updateState",{user:new b({...t,isLogin:!0})}),localStorage.setItem("token",e),W.interceptors.request.use((t=>(t.headers.Authorization=e,t)))}catch(t){localStorage.removeItem("token"),V.commit("updateState",{user:new b})}},W.logout=()=>{W.interceptors.request.use((e=>(e.headers.Authorization="",e))),localStorage.removeItem("token"),V.commit("updateState",{user:new b})},W.updateToken(localStorage.getItem("token"));var C=W,q=o(7139),U=o(5677),P=o(1334),S=o(3601),j=o(6422),x=o(9234),L=o(9671),O=o(5869),$=o(7471),A=o(5030);const T=(0,n.Uk)("Авторизоваться"),R=(0,n.Uk)(" Отмена "),D=(0,n.Uk)(" Войти ");function B(e,t,o,l,a,r){const i=(0,n.up)("ui-loader");return(0,n.wg)(),(0,n.j4)(S.B,{modelValue:r.showModal,"onUpdate:modelValue":t[4]||(t[4]=e=>r.showModal=e),persistent:"","max-width":"500px"},{default:(0,n.w5)((()=>[(0,n.Wm)(U._,{class:"login-modal rounded-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)($.iv,{dark:"",color:"primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(A.q,null,{default:(0,n.w5)((()=>[T])),_:1})])),_:1}),(0,n.Wm)(j.O,{class:"pa-4 pb-0 position-relative",modelValue:e.form.valid,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.valid=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:e.isLoading},{default:(0,n.w5)((()=>[(0,n.Wm)(O.h,{modelValue:e.form.login,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.login=t),rules:e.form.RequiredRules,"append-inner-icon":"mdi-account",label:"Логин",type:"text"},null,8,["modelValue","rules"]),(0,n.Wm)(O.h,{modelValue:e.form.password,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.password=t),rules:e.form.RequiredRules,"append-inner-icon":"mdi-lock",label:"Пароль",type:"password"},null,8,["modelValue","rules"])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,n.Wm)(P.h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d.T,{onClick:r.close},{default:(0,n.w5)((()=>[R])),_:1},8,["onClick"]),(0,n.Wm)(x.C),(0,n.Wm)(d.T,{onClick:r.send},{default:(0,n.w5)((()=>[D])),_:1},8,["onClick"])])),_:1}),(0,n.Wm)(L.v,{modelValue:e.error.isShow,"onUpdate:modelValue":t[3]||(t[3]=t=>e.error.isShow=t),timeout:"2000"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)(e.error.message),1)])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])}var I={name:"LoginModal",props:{modelValue:{type:Boolean,default:!0}},data:()=>({error:{isShow:!1,message:""},isLoading:!1,form:{valid:!1,login:"",password:"",RequiredRules:[e=>Boolean(e)||"Поле обязательно для заполнения!"]}}),computed:{showModal:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{close(){this.$emit("update:modelValue",!1)},async send(){if(this.form.valid)try{this.isLoading=!0;const{data:e}=await C.post("/user/login",{login:this.form.login,password:this.form.password});C.updateToken(e.Authorization),this.showModal=!1}catch({response:e}){this.error.message=e.data.message,this.error.isShow=!0}finally{this.isLoading=!1}}}},Z=o(89);const z=(0,Z.Z)(I,[["render",B]]);var E=z,F=o(4075),M=o(2329),H=o(7397),N=o(7288),Y=o(2127),G=o(4193);const J={class:"d-flex align-center"},K=(0,n.Uk)(" mdi-account-check-outline "),Q=(0,n.Uk)(" Admin ");function X(e,t,o,l,a,r){return(0,n.wg)(),(0,n.j4)(d.T,null,{default:(0,n.w5)((()=>[(0,n._)("div",J,[(0,n.Wm)(c.t,{size:"22",class:"mr-1"},{default:(0,n.w5)((()=>[K])),_:1}),Q]),(0,n.Wm)(G.T,{activator:"parent"},{default:(0,n.w5)((()=>[(0,n.Wm)(M.i,{dense:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.links,((e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},[(0,n.Wm)(H.l,{onClick:t=>r.provider(e.action)},{default:(0,n.w5)((()=>[(0,n.Wm)(N.U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c.t,{icon:e.icon},null,8,["icon"])])),_:2},1024),(0,n.Wm)(Y.V,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["onClick"]),e.divider?((0,n.wg)(),(0,n.j4)(F.J,{key:0,inset:""})):(0,n.kq)("",!0)],64)))),128))])),_:1})])),_:1})])),_:1})}var ee={name:"AppBarUser",data:()=>({links:[{title:"Выйти",icon:"mdi-logout",action:"logout"}]}),methods:{provider(e){this[e]()},logout(){this.$emit("logout")}}};const te=(0,Z.Z)(ee,[["render",X]]);var oe=te,le={name:"AppBar",components:{LoginModal:E,AppBarUser:oe},data:()=>({showLogin:!1}),computed:{isLogin(){return this.$store.state.user.isLogin},isSearchAvaliable(){return Boolean(this.$route.meta?.search)},isSearchOpen(){return this.$store.state.isSearchOpen}},methods:{openLogin(){this.showLogin=!0},logout(){C.logout()},toggleSearch(){this.$store.commit("updateState",{isSearchOpen:!this.isSearchOpen})}}};const ne=(0,Z.Z)(le,[["render",v]]);var ae=ne,re=o(1888),ie=o(1666);const se=(0,n.Uk)(" text "),ue=(0,n._)("strong",null,"scb-bonus",-1);function de(e,t,o,l,a,r){return(0,n.wg)(),(0,n.j4)(ie.c,{color:"#e6e6e6"},{default:(0,n.w5)((()=>[(0,n.Wm)(U._,{flat:"",class:"text-center app-footer__card g-content-block w-100"},{default:(0,n.w5)((()=>[(0,n.Wm)(re.Z,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.links,(e=>((0,n.wg)(),(0,n.j4)(d.T,{key:e.label,href:e.to,variant:"text",color:"primary",target:"_blank"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)(e.label),1)])),_:2},1032,["href"])))),128))])),_:1}),(0,n.Wm)(re.Z,{class:"white--text pt-0"},{default:(0,n.w5)((()=>[se])),_:1}),(0,n.Wm)(F.J),(0,n.Wm)(re.Z,{class:"white--text"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)((new Date).getFullYear())+" — ",1),ue])),_:1})])),_:1})])),_:1})}var ce={name:"AppFooter",data:()=>({links:[{label:"Банк",to:"https://sovcombank.ru/"},{label:"Страховая",to:"https://sovcomins.ru/"}]})};const me=(0,Z.Z)(ce,[["render",de]]);var pe=me,he={name:"App",components:{AppBar:ae,AppFooter:pe}};const fe=(0,Z.Z)(he,[["render",i]]);var ge=fe,ve=(o(9773),o(3398)),we=o(8604),ye=o(2482),be=(0,ve.Rd)({locale:{defaultLocale:"ru",fallbackLocale:"en",messages:{ru:we.Z,en:ye.Z}},theme:{themes:{light:{colors:{primary:"#0a68ff",lighten:"#d7edff"}}}}});async function _e(){const e=await o.e(461).then(o.t.bind(o,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var ke=o(678);const Ve={class:"mt-4"};function We(e,t,o,l,a,r){const i=(0,n.up)("products-container"),s=(0,n.up)("request-steps"),u=(0,n.up)("pyrus-create"),d=(0,n.up)("request-create");return(0,n.wg)(),(0,n.iD)("div",Ve,[(0,n.Wm)(i,{modelValue:e.product,"onUpdate:modelValue":t[0]||(t[0]=t=>e.product=t),recommended:e.productRecommended},null,8,["modelValue","recommended"]),(0,n.Wm)(F.J,{class:"my-4 g-content-block"}),(0,n.Wm)(s),(0,n.Wm)(F.J,{class:"my-4 g-content-block"}),e.isPyrus?((0,n.wg)(),(0,n.j4)(u,{key:0,"select-product":e.product},null,8,["select-product"])):((0,n.wg)(),(0,n.j4)(d,{key:1,"select-product":e.product},null,8,["select-product"]))])}const Ce={id:"products-container",class:"g-content-block"},qe=(0,n._)("div",{id:"products-container__link",class:"products-container__link"},null,-1),Ue={key:0,class:"products-container__navigation mb-4"},Pe=(0,n.Uk)(" mdi-arrow-left "),Se={key:1,class:"products-container__navigation-search p-4"},je={class:"products-container p-4"};function xe(e,t,o,l,a,r){const i=(0,n.up)("ui-autocomplete"),s=(0,n.up)("product-card");return(0,n.wg)(),(0,n.iD)("div",Ce,[qe,r.isAvailableBack||r.isAvailableSearch?((0,n.wg)(),(0,n.iD)("div",Ue,[r.isAvailableBack?((0,n.wg)(),(0,n.j4)(c.t,{key:0,class:"products-container__navigation-back mr-4",type:"button",onClick:r.goBack},{default:(0,n.w5)((()=>[Pe])),_:1},8,["onClick"])):(0,n.kq)("",!0),r.isAvailableSearch?((0,n.wg)(),(0,n.iD)("div",Se,[(0,n.Wm)(i,{modelValue:e.search,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.search=t),r.setFilter],items:r.expandedProducts,"item-title":"label",label:"Поиск","return-object":""},null,8,["modelValue","items","onUpdate:modelValue"])])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),(0,n._)("div",je,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.showProducts,(e=>((0,n.wg)(),(0,n.j4)(s,{key:e.id,icon:e.icon,label:e.label,subcategories:e.subcategories||[],select:e.select,recommended:e.recommended,onClick:t=>r.select(e)},null,8,["icon","label","subcategories","select","recommended","onClick"])))),128))])])}o(6699);var Le=o(6572),Oe=o(7103),$e=o(7769);const Ae=(0,n.Uk)(" Вам рекомендуют "),Te={class:"product-card__icon"};function Re(e,t,o,l,a,r){const i=(0,n.up)("v-list-item-content");return(0,n.wg)(),(0,n.j4)(U._,{class:(0,q.C_)(["product-card rounded-lg",{"product-card--select":o.select}]),type:"button"},{default:(0,n.w5)((()=>[(0,n.Wm)(H.l,{"two-line":""},{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Le.E,{class:"pa-0"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)(o.label)+" ",1),o.recommended?((0,n.wg)(),(0,n.j4)(Oe.v,{key:0,class:"mx-2",color:"orange",label:""},{default:(0,n.w5)((()=>[(0,n.Wm)(c.t,{start:"",icon:"mdi-star-outline"}),Ae])),_:1})):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)($e.o,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.subcategories,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},(0,q.zw)(e.label),1)))),128))])),_:1})])),_:1})])),_:1}),(0,n._)("div",Te,[(0,n.Wm)(c.t,{color:o.select?"primary":""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)(o.select?"mdi-shield-check-outline":o.icon),1)])),_:1},8,["color"])])])),_:1},8,["class"])}var De={name:"productCard",props:{label:{type:String,default:""},icon:{type:String,default:""},subcategories:{type:Array,default:()=>[]},select:{type:Boolean,default:!1},recommended:{type:Boolean,default:!1}}};const Be=(0,Z.Z)(De,[["render",Re]]);var Ie=Be,Ze={name:"ProductsContainer",components:{ProductCard:Ie},props:{modelValue:{type:String,default:""},recommended:{type:String,default:""}},data:()=>({search:null,activeCategory:[],oldActiveCategory:[]}),computed:{activeProduct:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},recommendedIDs(){return this.deepFined(this.products,"subcategories",(e=>e.id===this.recommended)).map((e=>e.id))},showProducts(){return this.activeCategory.reduce(((e,t)=>{const{subcategories:o}=e.find((e=>e.id===t));return o||e}),this.products).map((e=>({...e,select:e.id===this.activeProduct,recommended:this.recommendedIDs.includes(e.id)})))},expandedProducts(){return this.expandProducts(this.products)},isAvailableBack(){return Boolean(this.activeCategory.length)},isAvailableSearch(){return this.$store.state.isSearchOpen},products(){return this.$store.state.products},queryCategory(){return this.$route.query.category},queryProduct(){return this.$route.query.product}},watch:{activeCategory:{deep:!0,handler(e){e.length!==this.oldActiveCategory.length&&(this.routerUpdate(),this.scrollToProducts()),this.oldActiveCategory=[...e]}},activeProduct:{deep:!0,handler(){this.routerUpdate()}},queryProduct:{deep:!0,handler(e){this.activeCategory=e||null}},queryCategory:{immediate:!0,deep:!0,handler(e){this.activeCategory=e?.split("$$")||[]}}},methods:{scrollToProducts(){const e=document.getElementById("products-container__link");e.scrollIntoView({block:"start",behavior:"smooth"})},deepFined(e,t,o){return e.reduce(((e,l)=>{if(e.length)return e;if(o(l))return[l];if(l[t]){const e=this.deepFined(l[t],t,o);if(e.length)return[l,...e]}return e}),[])},routerUpdate({product:e=this.activeProduct,category:t=this.activeCategory,oldCategory:o=[]}={}){this.$router.replace({query:{...this.$route.query,category:t.length?t.join("$$"):void 0,product:e&&t.length>o.length?e:void 0}})},select(e){e.subcategories&&!this.activeCategory.includes(e.id)?this.activeCategory.push(e.id):this.activeProduct=e.id},goBack(){this.activeCategory.pop(),this.activeProduct=null},setFilter({mapIds:e,id:t}){this.search=null,this.activeCategory=e,this.activeProduct=t},expandProducts(e,t=[]){return e.reduce(((e,o)=>(o.subcategories?e.push(...this.expandProducts(o.subcategories,[...t,o.id])):e.push({mapIds:t,...o}),e)),[])}}};const ze=(0,Z.Z)(Ze,[["render",xe]]);var Ee=ze,Fe=o(7783),Me=o(7400),He=o(1332),Ne=o(6353),Ye=o(1278);const Ge={class:"g-content-block request-create"},Je=(0,n.Uk)(" Мы зачислим вам бонус "),Ke=(0,n._)("div",{class:"text-caption mx-1"},"Количество активаций",-1),Qe={class:"px-4 w-100 request-create__card--form-btn"},Xe=(0,n.Uk)(" Создать предложение "),et={key:1,class:"mx-4"},tt=(0,n.Uk)(" Ссылка скопирована ");function ot(e,t,o,l,a,r){const i=(0,n.up)("ui-qr-code");return(0,n.wg)(),(0,n.iD)("div",Ge,[(0,n.Wm)(U._,{class:"request-create__card request-create__card--info rounded-lg"}),(0,n.Wm)(U._,{class:"request-create__card request-create__card--form rounded-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(Fe.k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Me.B,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Le.E,{class:"text-h5"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,q.zw)(e.promoId?"Поделится":"Пригласить"),1)])),_:1}),(0,n.Wm)(He.Q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c.t,{icon:"mdi-information-outline",size:"18",color:"info",class:"mr-1 pb-1"}),Je])),_:1})])),_:1})])),_:1}),e.promoId?((0,n.wg)(),(0,n.iD)("div",et,[(0,n.Wm)(L.v,{modelValue:e.snackbar,"onUpdate:modelValue":t[6]||(t[6]=t=>e.snackbar=t),timeout:"1000"},{default:(0,n.w5)((()=>[tt])),_:1},8,["modelValue"]),(0,n.Wm)(O.h,{ref:"textToCopy",modelValue:r.link,label:"Ссылка",role:"button","prepend-inner-icon":"mdi-content-copy",onClick:r.copyLink},null,8,["modelValue","onClick"]),(0,n.Wm)(i,{"model-value":r.link},null,8,["model-value"])])):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(j.O,{modelValue:e.valid,"onUpdate:modelValue":t[5]||(t[5]=t=>e.valid=t),class:"ma-4"},{default:(0,n.w5)((()=>[(0,n.Wm)(O.h,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.name=t),counter:160,rules:e.nameRules,label:"ФИО",require:"","prepend-inner-icon":"mdi-account-arrow-right-outline"},null,8,["modelValue","rules"]),(0,n.Wm)(O.h,{modelValue:e.form.phone,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.phone=t),rules:e.emailRules,label:"Телефон",required:"","prepend-inner-icon":"mdi-phone-dial-outline"},null,8,["modelValue","rules"]),r.adminContent?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[Ke,(0,n.Wm)(Ne.R,{modelValue:e.form.limit,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.limit=t),max:500,min:1,step:1,label:"G","hide-details":"",disabled:e.form.unlimit},{append:(0,n.w5)((()=>[(0,n.Wm)(O.h,{modelValue:e.form.limit,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.limit=t),type:"number",style:{width:"80px"},density:"compact","hide-details":"",variant:"outlined",disabled:e.form.unlimit},null,8,["modelValue","disabled"])])),_:1},8,["modelValue","disabled"]),(0,n.Wm)(Ye.G,{modelValue:e.form.unlimit,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.unlimit=t),label:"Безлимитно"},null,8,["modelValue"])],64)):(0,n.kq)("",!0)])),_:1},8,["modelValue"]),(0,n._)("div",Qe,[(0,n.Wm)(d.T,{flat:"",color:"primary",class:"w-100",disabled:!e.form.phone||!e.form.name,onClick:r.createPromo},{default:(0,n.w5)((()=>[Xe])),_:1},8,["disabled","onClick"])])],64))])),_:1})])}var lt={name:"RequestCreate",props:{selectProduct:{type:String,default:""}},data:()=>({form:{name:"",phone:"",limit:1,unlimit:!1},promoId:"",snackbar:!1}),computed:{adminContent(){return this.$store.state.user.can("MAIN_ADMIN")},link(){return`${window.location.origin}/?promo=${this.promoId}`}},methods:{async createPromo(){let e={username:this.form.name,phone:this.form.phone,product:this.selectProduct||void 0};this.adminContent&&(e={...e,limit:this.form.limit,unlimit:this.form.unlimit});const{data:t}=await C.post("promo/create",e);this.promoId=t[0].name},copyLink(){const e=this.$refs.textToCopy.$el.querySelector("input");e.select(),document.execCommand("copy"),this.snackbar=!0}}};const nt=(0,Z.Z)(lt,[["render",ot]]);var at=nt,rt=o(795),it=o(2773);const st={class:"g-content-block"},ut=(0,n._)("div",null,[(0,n._)("div",{class:"text-h6"},"Приглашение"),(0,n._)("p",null," Создайте приглашение, заполнив небольшую форму ниже. Вы так же можете выбрать продукт и мы подсветим его вашему знакомому. "),(0,n._)("p",null," На это уйдёт не больше минуты. ")],-1),dt=(0,n._)("div",null,[(0,n._)("div",{class:"text-h6"},"Ссылка"),(0,n._)("p",null," Скопируйте сгенерированный QR-код или ссылку и отправьте дугу. ")],-1),ct=(0,n._)("div",null,[(0,n._)("div",{class:"text-h6"},"Бонус"),(0,n._)("p",null," После оформления вашим знакомым страхового продукта, мы вышлем вам бонус. ")],-1);function mt(e,t,o,l,a,r){return(0,n.wg)(),(0,n.iD)("div",st,[(0,n.Wm)(rt.R,{side:"end"},{default:(0,n.w5)((()=>[(0,n.Wm)(it.N,null,{default:(0,n.w5)((()=>[ut])),_:1}),(0,n.Wm)(it.N,null,{default:(0,n.w5)((()=>[dt])),_:1}),(0,n.Wm)(it.N,null,{default:(0,n.w5)((()=>[ct])),_:1})])),_:1})])}var pt={name:"RequestSteps"};const ht=(0,Z.Z)(pt,[["render",mt]]);var ft=ht,gt=o(3894),vt=o(5900);const wt={class:"g-content-block request-create"},yt=(0,n.Uk)(" mdi-arrow-up-circle-outline "),bt=(0,n.Uk)(" Выберите продукт "),_t=(0,n.Uk)("Заявка"),kt={class:"px-4 w-100 request-create__card--form-btn"},Vt=(0,n.Uk)(" Отправить заявку ");function Wt(e,t,o,l,a,r){return(0,n.wg)(),(0,n.iD)("div",wt,[(0,n.Wm)(U._,{class:"request-create__card request-create__card--info rounded-lg"}),(0,n.Wm)(U._,{class:"request-create__card request-create__card--form rounded-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(vt.y,{modelValue:!o.selectProduct,contained:"","scroll-strategy":"scroll",class:"align-center justify-center rounded-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.T,{color:"warning",onClick:r.scrollToProducts},{default:(0,n.w5)((()=>[(0,n.Wm)(c.t,{start:""},{default:(0,n.w5)((()=>[yt])),_:1}),bt])),_:1},8,["onClick"])])),_:1},8,["modelValue"]),(0,n.Wm)(Fe.k,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Me.B,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Le.E,{class:"text-h5"},{default:(0,n.w5)((()=>[_t])),_:1})])),_:1})])),_:1}),(0,n.Wm)(j.O,{modelValue:e.valid,"onUpdate:modelValue":t[4]||(t[4]=t=>e.valid=t),class:"ma-4"},{default:(0,n.w5)((()=>[(0,n.Wm)(O.h,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.name=t),counter:160,label:"ФИО",require:"","prepend-inner-icon":"mdi-account-arrow-right-outline"},null,8,["modelValue"]),(0,n.Wm)(O.h,{modelValue:e.form.phone,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.phone=t),label:"Телефон",required:"","prepend-inner-icon":"mdi-phone-dial-outline"},null,8,["modelValue"]),(0,n.Wm)(gt.f,{modelValue:e.form.city,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.city=t),search:e.form.cityFilter,"onUpdate:search":t[3]||(t[3]=t=>e.form.cityFilter=t),label:"Город",items:r.cities,required:"","prepend-inner-icon":"mdi-map-marker-radius-outline"},null,8,["modelValue","search","items"])])),_:1},8,["modelValue"]),(0,n._)("div",kt,[(0,n.Wm)(d.T,{flat:"",color:"primary",class:"w-100",onClick:r.createPyrus},{default:(0,n.w5)((()=>[Vt])),_:1},8,["onClick"])])])),_:1})])}var Ct={name:"PyrusCreate",props:{selectProduct:{type:String,default:""}},data:()=>({isLoading:!1,form:{name:"",phone:"",city:"",cityFilter:"",limit:1,unlimit:!1},valid:!0}),computed:{adminContent(){return!1},cities(){return this.form.cityFilter?this.$store.state.cities.filter((e=>e.toLowerCase().startsWith(this.form.cityFilter.toLowerCase()))):[]}},mounted(){this.loadCities()},methods:{async loadCities(){await this.$store.dispatch("loadCities")},scrollToProducts(){const e=document.getElementById("products-container__link");e.scrollIntoView({block:"center",behavior:"smooth"})},async createPyrus(){const e={username:this.form.name,phone:this.form.phone,city:this.form.city,product:this.selectProduct||void 0},{data:t}=await C.post(`promo/pyrus/${this.$route.query.promo}`,e);console.log(t)}}};const qt=(0,Z.Z)(Ct,[["render",Wt]]);var Ut=qt,Pt={name:"IndexPage",components:{ProductsContainer:Ee,RequestCreate:at,RequestSteps:ft,PyrusCreate:Ut},data:()=>({product:null,productRecommended:null,isPyrus:!1}),mounted(){this.checkCode()},methods:{async checkCode(){const e=this.$route.query.promo;try{if(e){const{data:t}=await C.get(`promo/check/${e}`);this.productRecommended=t.product||null,this.isPyrus=!0}}catch{await this.$router.replace({...this.$route.query,promo:void 0})}}}};const St=(0,Z.Z)(Pt,[["render",We]]);var jt=St;const xt={class:"g-content-block pyrus-page mt-4"},Lt=(0,n._)("div",{class:"pyrus-page__buffer"},null,-1),Ot={class:"pyrus-page__main"},$t=(0,n.Uk)(" Отправить заявку ");function At(e,t,o,l,a,r){const i=(0,n.up)("ui-loader");return(0,n.wg)(),(0,n.iD)("div",xt,[Lt,(0,n._)("div",Ot,[(0,n.Wm)(j.O,{class:"pyrus-page__form",modelValue:e.form.valid,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.valid=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{modelValue:e.isLoading},{default:(0,n.w5)((()=>[(0,n.Wm)(O.h,{modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.name=t),rules:e.form.RequiredRules,"append-inner-icon":"mdi-account",label:"ФИО",type:"text"},null,8,["modelValue","rules"]),(0,n.Wm)(O.h,{modelValue:e.form.city,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.city=t),rules:e.form.RequiredRules,"append-inner-icon":"mdi-map",label:"Город",type:"text"},null,8,["modelValue","rules"]),(0,n.Wm)(O.h,{modelValue:e.form.phone,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.phone=t),rules:e.form.RequiredRules,"append-inner-icon":"mdi-phone",label:"Телефон",type:"text"},null,8,["modelValue","rules"])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,n.Wm)(d.T,{onClick:r.send},{default:(0,n.w5)((()=>[$t])),_:1},8,["onClick"])])])}var Tt={name:"PyrusPage",data:()=>({isLoading:!1,form:{valid:!1,name:"",city:"",phone:"",RequiredRules:[e=>Boolean(e)||"Поле обязательно для заполнения!"]}}),methods:{async send(){this.form.valid&&console.log("send")}}};const Rt=(0,Z.Z)(Tt,[["render",At]]);var Dt=Rt,Bt=[{path:"/",component:jt,meta:{search:!0}},{path:"/pyrus",component:Dt},{path:"/generate",component:Dt}],It=o(3173);const Zt={key:0,class:"ui-loader"};function zt(e,t,o,l,a,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.WI)(e.$slots,"default"),o.modelValue?((0,n.wg)(),(0,n.iD)("div",Zt,[(0,n.Wm)(It.L,{size:50,color:"primary",indeterminate:""})])):(0,n.kq)("",!0)],64)}var Et={name:"UiLoader",props:{modelValue:{type:Boolean,default:!0}}};const Ft=(0,Z.Z)(Et,[["render",zt]]);var Mt=Ft;const Ht={class:"ui-autocomplete"};function Nt(e,t,o,l,a,r){return(0,n.wg)(),(0,n.iD)("div",Ht,[(0,n.Wm)(gt.f,(0,q.vs)((0,n.F4)(e.$attrs)),null,16)])}var Yt={name:"UiAutocomplete"};const Gt=(0,Z.Z)(Yt,[["render",Nt]]);var Jt=Gt,Kt=o(7584);const Qt=["innerHTML"];function Xt(e,t,o,l,a,r){return(0,n.wg)(),(0,n.j4)(Kt.V,null,{default:(0,n.w5)((({isHovering:e,props:t})=>[(0,n._)("div",(0,n.dG)({class:"position-relative mb-4"},t),[(0,n._)("div",{class:"ui-qr-code__code",innerHTML:r.qrSVG},null,8,Qt),(0,n.Wm)(vt.y,{modelValue:e,contained:"","scroll-strategy":"scroll",class:"align-center justify-center rounded-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.T,{icon:"mdi-cloud-download-outline"})])),_:2},1032,["modelValue"])],16)])),_:1})}var eo=o(8385),to={name:"UiQrCode",props:{modelValue:{type:String,default:""}},computed:{qrSVG(){let e="";return eo.toString(this.modelValue,((t,o)=>{e=o})),e}}};const oo=(0,Z.Z)(to,[["render",Xt]]);var lo=oo,no={install:e=>{e.component("ui-loader",Mt),e.component("ui-autocomplete",Jt),e.component("ui-qr-code",lo)}};_e();const ao=(0,ke.p7)({history:(0,ke.PO)(),routes:Bt});(0,l.ri)(ge).use(ao).use(be).use(V).use(no).mount("#app")}},t={};function o(l){var n=t[l];if(void 0!==n)return n.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,l,n,a){if(!l){var r=1/0;for(d=0;d<e.length;d++){l=e[d][0],n=e[d][1],a=e[d][2];for(var i=!0,s=0;s<l.length;s++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](l[s])}))?l.splice(s--,1):(i=!1,a<r&&(r=a));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[l,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(l,n){if(1&n&&(l=this(l)),8&n)return l;if("object"===typeof l&&l){if(4&n&&l.__esModule)return l;if(16&n&&"function"===typeof l.then)return l}var a=Object.create(null);o.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&l;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){r[e]=function(){return l[e]}}));return r["default"]=function(){return l},o.d(a,r),a}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,l){return o.f[l](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.9ad06255.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front:";o.l=function(l,n,a,r){if(e[l])e[l].push(n);else{var i,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==l||c.getAttribute("data-webpack")==t+a){i=c;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=l),e[l]=[n];var m=function(t,o){i.onerror=i.onload=null,clearTimeout(p);var n=e[l];if(delete e[l],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.f.j=function(t,l){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)l.push(n[2]);else{var a=new Promise((function(o,l){n=e[t]=[o,l]}));l.push(n[2]=a);var r=o.p+o.u(t),i=new Error,s=function(l){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=l&&("load"===l.type?"missing":l.type),r=l&&l.target&&l.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}};o.l(r,s,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,a,r=l[0],i=l[1],s=l[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var d=s(o)}for(t&&t(l);u<r.length;u++)a=r[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},l=self["webpackChunkfront"]=self["webpackChunkfront"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[998],(function(){return o(2442)}));l=o.O(l)})();
//# sourceMappingURL=app.dc8de1c6.js.map