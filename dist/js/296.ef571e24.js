"use strict";(self["webpackChunknouveau_projet"]=self["webpackChunknouveau_projet"]||[]).push([[296],{3470:function(e,t,a){a.r(t),a.d(t,{default:function(){return Oi}});var i=a(6768);function o(e,t,a,o,l,s){const n=(0,i.g2)("adminDashNavbarComponent"),r=(0,i.g2)("userDashLayout");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(r,null,{topbar:(0,i.k6)((()=>[(0,i.bF)(n)])),dashboard:(0,i.k6)((()=>[((0,i.uX)(),(0,i.Wv)((0,i.$y)(l.CurrentView)))])),_:1})])}var l=a(1319),s=a(4232),n=a(5130),r=a(8889);const c=e=>((0,i.Qi)("data-v-530e0de6"),e=e(),(0,i.jt)(),e),u={class:"navigation"},d={class:"search"},p={key:0,class:"dropdown"},h=["onClick"],k={key:1,class:"dropdown"},v={class:"icons"},g=c((()=>(0,i.Lk)("img",{src:r,alt:"Notification",class:"notification-icon"},null,-1))),m={key:0,class:"dropdown"},f={key:0},L=["src"],b={key:1,class:"dropdown"},y=c((()=>(0,i.Lk)("div",{class:"hamburger"},null,-1))),C=[y],_={class:"content"},w={class:"side-buttons"},D={class:"nav"},A={class:"nav"},F={class:"nav"},T={class:"nav"},P={class:"nav"},j={class:"nav"},E={class:"nav"};function O(e,t,a,o,l,r){const c=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("nav",u,[(0,i.Lk)("button",{class:"menu-btn",onClick:t[0]||(t[0]=(...e)=>r.toggleMenu&&r.toggleMenu(...e))},"More"),(0,i.Lk)("ul",{class:(0,s.C4)({"show-menu":l.isMenuOpen})},[(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/analytics",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("dashboard")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/suivi",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("goal")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/rapport",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("report")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/ActiviteHebdomadaire",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("weeklyGoal")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/inscription",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("registration")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/weekGoal",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("week")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/listOfchildren",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("present")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/Absent",class:"nav-link","active-class":"active"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("absent")),1)])),_:1})])],2),(0,i.Lk)("div",d,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.searchQuery=e),onInput:t[2]||(t[2]=(...e)=>r.search&&r.search(...e)),placeholder:"Search..."},null,544),[[n.Jo,l.searchQuery]]),l.searchResults.length>0?((0,i.uX)(),(0,i.CE)("ul",p,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.searchResults,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:t,onClick:t=>r.displayResult(e)},(0,s.v_)(e),9,h)))),128))])):(0,i.Q3)("",!0),l.searchQuery.length>0&&0===l.searchResults.length?((0,i.uX)(),(0,i.CE)("p",k,"No results found.")):(0,i.Q3)("",!0)]),(0,i.Lk)("div",v,[(0,i.Lk)("div",{class:"notification-wrapper",onClick:t[3]||(t[3]=(...e)=>r.toggleNotificationDropdown&&r.toggleNotificationDropdown(...e))},[g,(0,i.Lk)("span",{class:(0,s.C4)({"notification-count":!0,"few-notifications":e.notifications.length<=2})},(0,s.v_)(e.notifications.length),3)]),l.isNotificationDropdownOpen?((0,i.uX)(),(0,i.CE)("div",m,[(0,i.Lk)("ul",null,[0===e.notifications.length?((0,i.uX)(),(0,i.CE)("li",f,"No notifications")):(0,i.Q3)("",!0),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.notifications,((e,t)=>((0,i.uX)(),(0,i.CE)("li",{key:t},(0,s.v_)(e.user)+","+(0,s.v_)(e.entry),1)))),128))])])):(0,i.Q3)("",!0),(0,i.Lk)("img",{src:l.profilePhotoURL,onClick:t[4]||(t[4]=(...e)=>r.toggleProfileDropdown&&r.toggleProfileDropdown(...e)),alt:"Profile Icon",class:"profile-icon"},null,8,L),l.isProfileDropdownOpen?((0,i.uX)(),(0,i.CE)("div",b,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/userInfo"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("editPhoto")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/gererCount"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("manageAccount")),1)])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(c,{to:"/admin/Parametre"},{default:(0,i.k6)((()=>[(0,i.eW)((0,s.v_)(r.getTranslatedTitle("setting")),1)])),_:1})])]),(0,i.Lk)("div",{onClick:t[5]||(t[5]=(...e)=>r.confirmLogout&&r.confirmLogout(...e))},(0,s.v_)(r.getTranslatedTitle("logout")),1)])):(0,i.Q3)("",!0)])]),(0,i.Lk)("div",null,[(0,i.Lk)("div",{class:"menu-toggle",onClick:t[6]||(t[6]=(...e)=>r.toggleMenu&&r.toggleMenu(...e))},C),(0,i.Lk)("div",{class:(0,s.C4)(["side-bar",{"hide-menu":e.isMobile&&!e.menuVisible}])},[(0,i.Lk)("div",_,[(0,i.Lk)("div",w,[(0,i.bF)(c,{to:"/admin/userActivity","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",D,(0,s.v_)(r.getTranslatedTitle("board")),1)])),_:1}),(0,i.bF)(c,{to:"/admin/Review","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",A,(0,s.v_)(r.getTranslatedTitle("users")),1)])),_:1}),(0,i.bF)(c,{to:"/admin/dailyObject","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",F,(0,s.v_)(r.getTranslatedTitle("activities")),1)])),_:1}),(0,i.bF)(c,{to:"/admin/report","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",T,(0,s.v_)(r.getTranslatedTitle("report")),1)])),_:1}),(0,i.bF)(c,{to:"/admin/statistic","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",P,(0,s.v_)(r.getTranslatedTitle("statistics")),1)])),_:1}),(0,i.bF)(c,{to:"/admin/message","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",j,(0,s.v_)(r.getTranslatedTitle("messages")),1)])),_:1}),(0,i.bF)(c,{to:"/admin/setting","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[(0,i.Lk)("div",E,(0,s.v_)(r.getTranslatedTitle("settings")),1)])),_:1})])])],2)])],64)}a(4114);var x=a(6666),I=a(4249),S=a(4373),$=a(2169),X={mixins:[x.y],data(){return{isMenuOpen:!1,searchQuery:"",searchResults:[],isNotificationDropdownOpen:!1,isProfileDropdownOpen:!1,profilePhotoURL:""}},computed:{...(0,I.aH)(["theme","language"]),translatedTitles(){return{en:{dashboard:"Dashboard",goal:"Goal",report:"Report",weeklyGoal:"Weekly Goal",registration:"Registration",week:"Week",present:"Present",absent:"Absent",board:"Board",users:"Users",activities:"Activities",statistics:"Statistics",messages:"Messages",settings:"Settings",editPhoto:"Edit Photo",manageAccount:"Manage Account",setting:"Settings",logout:"Logout"},fr:{dashboard:"Accueil",goal:"Objectif",report:"Rapport",weeklyGoal:"Objectifs Heb",registration:"Inscription",week:"Semaine",present:"Presents",absent:"Absents",board:"Tableau",users:"Utilisateurs",activities:"Activites",statistics:"Statistique",messages:"Message",settings:"Paramètre",editPhoto:"Modifier Photo",manageAccount:"Gestion de compte",setting:"Parametre",logout:"Deconnexion"}}}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},toggleNotificationDropdown(){this.isNotificationDropdownOpen=!this.isNotificationDropdownOpen},toggleProfileDropdown(){this.isProfileDropdownOpen=!this.isProfileDropdownOpen},fetchProfilePicture(){const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`};S.A.get(`${$.J}/admin/getprofil`,{headers:t}).then((e=>{this.profilePhotoURL=e.data.profilePhotoUrl,console.log("profilePicture",this.profilePhotoURL)})).catch((e=>{console.error("Error fetching profile picture:",e)}))},search(){this.searchResults=[],0!==this.searchQuery.length&&S.A.get(`${$.J}/search?q=`+this.searchQuery).then((e=>{this.searchResults=e.data})).catch((e=>{console.error("Error fetching search results:",e)}))},displayResult(e){console.log("Selected result info:",e)},async logout(){try{await S.A.post(`${$.J}/user/logout`,{},{withCredentials:!0}),localStorage.removeItem("authToken"),sessionStorage.removeItem("authToken"),this.$router.push("/login")}catch(e){console.error("Error during logout:",e)}},confirmLogout(){confirm("Are you sure you want to log out?")&&this.logout()},handleClickOutside(e){const t=this.$refs.notificationWrapper,a=this.$refs.profileIcon,i=t&&!t.contains(e.target),o=a&&!a.contains(e.target);i&&this.isNotificationDropdownOpen&&(this.isNotificationDropdownOpen=!1),o&&this.isProfileDropdownOpen&&(this.isProfileDropdownOpen=!1)},getTranslatedTitle(e){return this.translatedTitles[this.language][e]},shouldReceiveNotification(e){return"Coordinateur"!=e.role}},mounted(){this.fetchProfilePicture(),document.addEventListener("click",this.handleClickOutside)},beforeMount(){document.removeEventListener("click",this.handleClickOutside)}},R=a(1241);const G=(0,R.A)(X,[["render",O],["__scopeId","data-v-530e0de6"]]);var M=G,W=a(7599);const U=e=>((0,i.Qi)("data-v-761ff8ea"),e=e(),(0,i.jt)(),e),N=U((()=>(0,i.Lk)("div",{class:"hamburger"},null,-1))),B=[N],Q={class:"content"},J=U((()=>(0,i.Lk)("div",{class:"logo"},[(0,i.Lk)("img",{class:"logo-rr",src:W,alt:"CDE koinonia"})],-1))),z={class:"side-buttons"},V=U((()=>(0,i.Lk)("div",{class:"nav"},"Tableau",-1))),q=U((()=>(0,i.Lk)("div",{class:"nav"},"Utilisateurs",-1))),H=U((()=>(0,i.Lk)("div",{class:"nav"},"Activites",-1))),K=U((()=>(0,i.Lk)("div",{class:"nav"},"Rapport",-1))),Z=U((()=>(0,i.Lk)("div",{class:"nav"},"Statistique",-1))),Y=U((()=>(0,i.Lk)("div",{class:"nav"},"Message",-1))),ee=U((()=>(0,i.Lk)("div",{class:"nav"},"Paramètre",-1)));function te(e,t,a,o,l,n){const r=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("div",{class:"menu-toggle",onClick:t[0]||(t[0]=(...e)=>n.toggleMenu&&n.toggleMenu(...e))},B),(0,i.Lk)("div",{class:(0,s.C4)(["side-bar",{"hide-menu":l.isMobile&&!l.menuVisible}])},[(0,i.Lk)("div",Q,[J,(0,i.Lk)("div",z,[(0,i.bF)(r,{to:"/admin/userActivity","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[V])),_:1}),(0,i.bF)(r,{to:"/admin/Review","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[q])),_:1}),(0,i.bF)(r,{to:"/admin/dailyObject","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[H])),_:1}),(0,i.bF)(r,{to:"/admin/report","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[K])),_:1}),(0,i.bF)(r,{to:"/admin/statistic","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[Z])),_:1}),(0,i.bF)(r,{to:"/admin/message","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[Y])),_:1}),(0,i.bF)(r,{to:"/admin/setting","active-class":"active","exact-active-class":"exact-active",class:"default-link"},{default:(0,i.k6)((()=>[ee])),_:1})])])],2)])}var ae={data(){return{isMobile:!1,menuVisible:!1}},mounted(){this.isMobile=window.innerWidth<768,window.addEventListener("resize",this.handleResize)},beforeMount(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.isMobile=window.innerWidth<768},toggleMenu(){this.menuVisible=!this.menuVisible}}};const ie=(0,R.A)(ae,[["render",te],["__scopeId","data-v-761ff8ea"]]);var oe=ie,le=a(3231);const se=e=>((0,i.Qi)("data-v-46d64df5"),e=e(),(0,i.jt)(),e),ne={class:"container"},re={class:"content"},ce=se((()=>(0,i.Lk)("hr",null,null,-1))),ue={class:"goal"},de={class:"input-group"},pe=se((()=>(0,i.Lk)("label",{for:"arrivalTime"},"Temps d'arrivée au service:",-1))),he=se((()=>(0,i.Lk)("br",null,null,-1))),ke={class:"input-group"},ve=se((()=>(0,i.Lk)("label",{for:"date"},"Date:",-1))),ge=se((()=>(0,i.Lk)("br",null,null,-1))),me={class:"input-group"},fe=se((()=>(0,i.Lk)("label",{for:"dailyGoal"},"Objectif de la journée:",-1))),Le=se((()=>(0,i.Lk)("br",null,null,-1))),be={key:0,class:"error-message"},ye={key:0},Ce={key:0,class:"popup"},_e=se((()=>(0,i.Lk)("h2",null,"Formulaire soumis avec succès !",-1))),we=[_e];function De(e,t,a,o,l,r){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)([e.theme,"page"])},[(0,i.Lk)("div",ne,[(0,i.Lk)("div",re,[(0,i.Lk)("h2",null,(0,s.v_)(r.translatedTitle),1),ce,(0,i.Lk)("div",ue,[(0,i.Lk)("p",null,(0,s.v_)(l.dailyGoals),1)]),(0,i.Lk)("div",de,[pe,he,(0,i.bo)((0,i.Lk)("input",{type:"text",id:"arrivalTime","onUpdate:modelValue":t[0]||(t[0]=e=>l.arrivalTime=e),readonly:""},null,512),[[n.Jo,l.arrivalTime]])]),(0,i.Lk)("div",ke,[ve,ge,(0,i.bo)((0,i.Lk)("input",{type:"date",id:"date","onUpdate:modelValue":t[1]||(t[1]=e=>l.date=e),readonly:""},null,512),[[n.Jo,l.date]])]),(0,i.Lk)("div",me,[fe,Le,(0,i.bo)((0,i.Lk)("textarea",{id:"dailyGoal","onUpdate:modelValue":t[2]||(t[2]=e=>l.dailyGoal=e),class:(0,s.C4)({error:l.errorMessage}),rows:"4",ref:"dailyGoalInput"},"\n          ",2),[[n.Jo,l.dailyGoal]]),l.errorMessage?((0,i.uX)(),(0,i.CE)("p",be,(0,s.v_)(l.errorMessage),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>r.submitForm&&r.submitForm(...e))},"Submit"),l.errorFetchingDate?((0,i.uX)(),(0,i.CE)("h5",ye,"Erreur lors du chargement de la date. Veuillez vérifier votre connexion Internet.")):(0,i.Q3)("",!0)]),l.showPopup?((0,i.uX)(),(0,i.CE)("div",Ce,we)):(0,i.Q3)("",!0)])],2)}var Ae={data(){return{arrivalTime:"",date:"",dailyGoal:"",dailyGoals:"",errorFetchingDate:!1,showPopup:!1,weeklyGoals:{},errorMessage:""}},computed:{...(0,I.aH)(["theme"]),...(0,I.aH)(["theme","language"]),translatedTitle(){const e={en:"Fill in the daily goal",fr:"Remplir l'objectif de la journée"};return e[this.language]}},mounted(){this.arrivalTime=this.getCurrentTime(),this.fetchDate()},methods:{getCurrentTime(){const e=new Date,t=String(e.getHours()).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0");return`${t}:${a}`},fetchDate(){const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");this.date=`${t}-${a}-${i}`;const o=localStorage.getItem("token"),l={"Content-Type":"application/json",Authorization:`Bearer ${o}`};S.A.get(`${$.J}/week/getweekly`,{headers:l}).then((e=>{this.weeklyGoals=e.data,this.setDailyGoal()})).catch((e=>{console.error("Error fetching weekly goals:",e),this.errorFetchingDate=!0}))},setDailyGoal(){const e=(new Date).getDay(),t=this.weeklyGoals.data,a=Object.keys(t).filter((e=>["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].includes(e.toLowerCase()))),i=a[e];i?this.dailyGoals=t[i]:console.log("Day key not found for current day of week:",e)},submitForm(){if(!this.dailyGoal)return this.errorMessage="Le champ 'Objectif de la journée' est requis.",void this.shakeInput();const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`},a={arrivalTime:this.arrivalTime,date:this.date,dailyGoal:this.dailyGoal};S.A.post(`${$.J}/user/entre`,a,{headers:t}).then((e=>{console.log("Form submitted successfully:",e.data),this.arrivalTime="",this.date="",this.dailyGoal="",this.showPopup=!0,this.errorMessage="",setTimeout((()=>{this.showPopup=!1,this.$router.push("/admin/analytics")}),3e3),localStorage.setItem("dailyGoal",a.dailyGoal)})).catch((e=>{console.error("Error submitting form:",e)}))},shakeInput(){const e=this.$refs.dailyGoalInput;e.classList.add("shake"),setTimeout((()=>e.classList.remove("shake")),500)}}};const Fe=(0,R.A)(Ae,[["render",De],["__scopeId","data-v-46d64df5"]]);var Te=Fe,Pe=a(2323);const je=e=>((0,i.Qi)("data-v-4c53ae1f"),e=e(),(0,i.jt)(),e),Ee={class:"container1"},Oe={class:"content1"},xe=je((()=>(0,i.Lk)("h2",null,"Rapport journalier",-1))),Ie=je((()=>(0,i.Lk)("br",null,null,-1))),Se={class:"goal"},$e=je((()=>(0,i.Lk)("h4",null,"Est-ce que l'objectif quotidien a été réalisé ?",-1))),Xe={class:"check"},Re=je((()=>(0,i.Lk)("label",{for:"oui"},"Oui :",-1))),Ge={class:"check"},Me=je((()=>(0,i.Lk)("label",{for:"non"},"Non:",-1))),We=je((()=>(0,i.Lk)("label",{for:"pourcentage"},"Pourcentage de travail effectué:",-1))),Ue=je((()=>(0,i.Lk)("option",{value:""},"Sélectionner le pourcentage",-1))),Ne=["value"],Be={class:"input-group"},Qe=je((()=>(0,i.Lk)("label",{for:"justification"},"Commentaire ou justification",-1))),Je=je((()=>(0,i.Lk)("h5",null,"Bon travail ! Passez une agréable soirée sous la protection de Dieu",-1))),ze=je((()=>(0,i.Lk)("br",null,null,-1))),Ve={class:"popup",ref:"popup"},qe=je((()=>(0,i.Lk)("img",{class:"check",src:Pe},null,-1))),He=je((()=>(0,i.Lk)("h2",null,"Rapport soumis avec succès !",-1)));function Ke(e,t,a,o,l,r){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)([e.theme,"page"])},[(0,i.Lk)("div",Ee,[(0,i.Lk)("div",Oe,[xe,Ie,(0,i.Lk)("div",Se,[(0,i.Lk)("p",null,(0,s.v_)(l.dailyGoal),1)]),$e,(0,i.Lk)("div",Xe,[Re,(0,i.bo)((0,i.Lk)("input",{type:"radio",id:"oui",value:"oui","onUpdate:modelValue":t[0]||(t[0]=e=>l.choix=e),class:(0,s.C4)({error:l.errors.choix}),ref:"choixField"},null,2),[[n.XL,l.choix]])]),(0,i.Lk)("div",Ge,[Me,(0,i.bo)((0,i.Lk)("input",{type:"radio",id:"non",value:"non","onUpdate:modelValue":t[1]||(t[1]=e=>l.choix=e),class:(0,s.C4)({error:l.errors.choix}),ref:"choixField"},null,2),[[n.XL,l.choix]])]),(0,i.Lk)("div",null,[We,(0,i.bo)((0,i.Lk)("select",{id:"pourcentage","onUpdate:modelValue":t[2]||(t[2]=e=>l.pourcentage=e),class:(0,s.C4)({error:l.errors.pourcentage}),ref:"pourcentageField"},[Ue,((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)(11,(e=>(0,i.Lk)("option",{key:e,value:10*e},(0,s.v_)(10*e)+"%",9,Ne))),64))],2),[[n.u1,l.pourcentage]])]),(0,i.Lk)("div",Be,[Qe,(0,i.bo)((0,i.Lk)("textarea",{id:"justification","onUpdate:modelValue":t[3]||(t[3]=e=>l.justification=e),rows:"4",class:(0,s.C4)({error:l.errors.justification}),ref:"justificationField"},null,2),[[n.Jo,l.justification]])]),Je,ze,(0,i.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>r.submitForm&&r.submitForm(...e))},"Soumettre")]),(0,i.Lk)("div",Ve,[qe,He,(0,i.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>r.closePopup&&r.closePopup(...e)),type:"button"},"OK")],512)])],2)}var Ze={data(){return{justification:"",choix:"",pourcentage:"",dailyGoal:"",errors:{justification:!1,choix:!1,pourcentage:!1}}},computed:{...(0,I.aH)(["theme"])},mounted(){this.dailyGoal=localStorage.getItem("dailyGoal")},methods:{openPopup(){this.$refs.popup.classList.add("open-popup")},closePopup(){this.$refs.popup.classList.remove("open-popup"),this.$router.push("/admin/analytics")},submitForm(){if(this.errors.justification=!this.justification,this.errors.choix=!this.choix,this.errors.pourcentage=!this.pourcentage,this.errors.justification||this.errors.choix||this.errors.pourcentage)return void this.shakeInput();const e={justification:this.justification,choix:this.choix,pourcentage:this.pourcentage,dailyGoal:this.dailyGoal},t=localStorage.getItem("token"),a={"Content-Type":"application/json",Authorization:`Bearer ${t}`};S.A.post(`${$.J}/user/rapport`,e,{headers:a}).then((e=>{200===e.status&&(this.openPopup(),setTimeout((()=>{this.closePopup()}),3e3))})).catch((e=>{console.error(e)}))},shakeInput(){const e=[this.$refs.justificationField,this.$refs.choixField,this.$refs.pourcentageField];e.forEach((e=>{e&&(Array.isArray(e)?e.forEach((e=>{e.classList.add("shake"),setTimeout((()=>e.classList.remove("shake")),500)})):(e.classList.add("shake"),setTimeout((()=>e.classList.remove("shake")),500)))}))}}};const Ye=(0,R.A)(Ze,[["render",Ke],["__scopeId","data-v-4c53ae1f"]]);var et=Ye;const tt=e=>((0,i.Qi)("data-v-98904c4a"),e=e(),(0,i.jt)(),e),at={class:"stud-dash"},it={class:"welcome"},ot={class:"right"},lt={class:"up-welcome"},st=tt((()=>(0,i.Lk)("p",{class:"under-welcome"}," N'oubliez pas de générer le rapport à la fin de la journée. Votre rapport reflète le travail accompli et ne peut être rempli qu'une fois par jour. ",-1))),nt=tt((()=>(0,i.Lk)("div",{class:"blue"},null,-1))),rt=tt((()=>(0,i.Lk)("div",{class:"left"},[(0,i.Lk)("img",{class:"welcome-img",src:W,alt:"dashboard"})],-1))),ct={class:"statistics-component"},ut=tt((()=>(0,i.Lk)("h2",null,"Statistiques du jour",-1))),dt={class:"percentage-of-the-day"},pt={class:"chart"},ht=tt((()=>(0,i.Lk)("h3",null,"Diagramme à barres",-1))),kt={ref:"barChartCanvas"},vt={class:"chart"},gt=tt((()=>(0,i.Lk)("h3",null,"Diagramme en courbes",-1))),mt={ref:"lineChartCanvas"};function ft(e,t,a,o,l,n){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)([e.theme,"page"])},[(0,i.Lk)("div",at,[(0,i.Lk)("div",it,[(0,i.Lk)("div",ot,[(0,i.Lk)("p",lt,[(0,i.eW)(" Bienvenue "),(0,i.Lk)("span",null,(0,s.v_)(l.firstName),1)]),st,nt]),rt])]),(0,i.Lk)("div",ct,[ut,(0,i.Lk)("div",dt,[(0,i.Lk)("p",null,"Percentage du jour: "+(0,s.v_)(l.percentageOfDay)+"%",1)]),(0,i.Lk)("div",pt,[ht,(0,i.Lk)("canvas",kt,null,512)]),(0,i.Lk)("div",vt,[gt,(0,i.Lk)("canvas",mt,null,512)])])],2)}var Lt=a(3456),bt={data(){return{percentageOfDay:0,userData:[],firstName:""}},computed:{...(0,I.aH)(["theme"])},mounted(){this.fetchUserDataFromBackend(),this.firstName=localStorage.getItem("user")},methods:{async fetchUserDataFromBackend(){try{const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`},a=await S.A.get(`${$.J} /admin/percent`,{headers:t});this.userData=a.data,console.log("Data",a.data),this.calculatePercentageOfDay(),this.populateCharts()}catch(e){console.error("Error fetching user data from backend:",e)}},calculatePercentageOfDay(){const e=this.userData.reduce(((e,t)=>e+parseFloat(t.pourcentage)),0);console.log("sum",e),this.percentageOfDay=this.userData.length>0?Math.round(e/this.userData.length):0},populateCharts(){const e=this.userData.map((e=>e.name)),t=this.userData.map((e=>e.percentage)),a=["Day 1","Day 2","Day 3","Day 4","Day 5"],i=this.userData.map((e=>e.variations)),o=this.$refs.barChartCanvas.getContext("2d");new Lt.Ay(o,{type:"bar",data:{labels:e,datasets:[{label:"Percentage",data:t,backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}});const l=this.$refs.lineChartCanvas.getContext("2d");new Lt.Ay(l,{type:"line",data:{labels:a,datasets:this.userData.map(((e,t)=>({label:e.name,data:i[t],borderColor:"#"+(16777215*Math.random()|0),fill:!1})))},options:{scales:{y:{beginAtZero:!0}}}})}}};const yt=(0,R.A)(bt,[["render",ft],["__scopeId","data-v-98904c4a"]]);var Ct=yt,_t=a(2206),wt=a(9074);const Dt={class:"user-dashboard"},At=(0,i.Lk)("h2",null,"Tableau des utilisateurs",-1),Ft={key:0},Tt=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Date"),(0,i.Lk)("th",null,"Nom"),(0,i.Lk)("th",null,"Prénom"),(0,i.Lk)("th",null,"Téléphone"),(0,i.Lk)("th",null,"Rôle"),(0,i.Lk)("th",null,"Objectif"),(0,i.Lk)("th",null,"Rapport")])],-1),Pt={key:1},jt=(0,i.Lk)("p",null,"Aucun utilisateur à afficher.",-1),Et=[jt],Ot=(0,i.Lk)("br",null,null,-1),xt={class:"personnel"},It=(0,i.Lk)("h2",null,"Les personnels",-1),St={key:0},$t=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Nom"),(0,i.Lk)("th",null,"Prenom"),(0,i.Lk)("th",null,"Nationalite"),(0,i.Lk)("th",null,"Niveau d'etude"),(0,i.Lk)("th",null,"Specialite"),(0,i.Lk)("th",null,"Numero de la carte d'idente"),(0,i.Lk)("th",null,"contact"),(0,i.Lk)("th",null,"Email"),(0,i.Lk)("th",null,"Poste occuper")])],-1);function Xt(e,t,a,o,l,n){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)([e.theme,"page"])},[(0,i.Lk)("div",Dt,[At,l.users.length?((0,i.uX)(),(0,i.CE)("div",Ft,[(0,i.Lk)("table",null,[Tt,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.users,((e,t)=>((0,i.uX)(),(0,i.CE)("tr",{key:t},[(0,i.Lk)("td",null,(0,s.v_)(e.date),1),(0,i.Lk)("td",null,(0,s.v_)(e.nom),1),(0,i.Lk)("td",null,(0,s.v_)(e.prenom),1),(0,i.Lk)("td",null,(0,s.v_)(e.tel),1),(0,i.Lk)("td",null,(0,s.v_)(e.role),1),(0,i.Lk)("td",null,(0,s.v_)(e.objectif),1),(0,i.Lk)("td",null,(0,s.v_)(e.rapport),1)])))),128))])])])):((0,i.uX)(),(0,i.CE)("div",Pt,Et)),Ot,(0,i.Lk)("div",xt,[It,l.personnels.length?((0,i.uX)(),(0,i.CE)("div",St,[(0,i.Lk)("table",null,[$t,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.personnels,((e,t)=>((0,i.uX)(),(0,i.CE)("tr",{key:t},[(0,i.Lk)("td",null,(0,s.v_)(e.nom),1),(0,i.Lk)("td",null,(0,s.v_)(e.prenom),1),(0,i.Lk)("td",null,(0,s.v_)(e.nationalite),1),(0,i.Lk)("td",null,(0,s.v_)(e.niveau),1),(0,i.Lk)("td",null,(0,s.v_)(e.specialite),1),(0,i.Lk)("td",null,(0,s.v_)(e.carte),1),(0,i.Lk)("td",null,(0,s.v_)(e.contact),1),(0,i.Lk)("td",null,(0,s.v_)(e.email),1),(0,i.Lk)("td",null,(0,s.v_)(e.post),1)])))),128))])])])):(0,i.Q3)("",!0)])])],2)}var Rt={data(){return{users:[{date:"2024-05-27",nom:"Doe",prenom:"John",tel:"123-456-7890",role:"Sante",objectif:"Oui",rapport:"60%"},{date:"2024-05-27",nom:"Smith",prenom:"Jane",tel:"098-765-4321",role:"Comptable",objectif:"oui",rapport:"80%"},{date:"2024-05-27",nom:"Rene",prenom:"Djemi",tel:"098-765-4321",role:"Assistante",objectif:"non",rapport:"non"},{date:"2024-05-27",nom:"Roland",prenom:"cyrile",tel:"098-765-4321",role:"Surveillant",objectif:"oui",rapport:"100%"}],personnels:[{nom:"Atikpo",prenom:"David",nationalite:"Togolaise",niveau:"Bachelier",specialite:"developpeur web",carte:"0023458960385902843",contact:"99058645",email:"davidatikpo44@gmail.com",post:"informatique"},{nom:"Roger",prenom:"Millan",nationalite:"Camerounaise",niveau:"BT",specialite:"constructeur mecanique",carte:"0023458960385902843",contact:"99058645",email:"davidatikpo44@gmail.com",post:"informatique"},{nom:"AYALE",prenom:"Pele",nationalite:"Togolaise",niveau:"Bac+2",specialite:"Ressources humaine",carte:"0023458960385902841",contact:"79058645",email:"davidatikpo44@gmail.com",post:"Culture des enfants"},{nom:"Jean",prenom:"Davido",nationalite:"Ivoirienne",niveau:"Bachelier",specialite:"developpeur mobile",carte:"0023458960385978967",contact:"92591228",email:"davido@gmail.com",post:"informatique"}]}},computed:{...(0,I.aH)(["theme"])}};const Gt=(0,R.A)(Rt,[["render",Xt]]);var Mt=Gt,Wt=a(7679),Ut=a(6384),Nt=a(5303);const Bt=e=>((0,i.Qi)("data-v-38291c94"),e=e(),(0,i.jt)(),e),Qt=Bt((()=>(0,i.Lk)("h2",null,"Modifier la photo de profil",-1))),Jt=Bt((()=>(0,i.Lk)("p",null,"Sélectionnez une nouvelle photo de profil :",-1))),zt={key:0},Vt=Bt((()=>(0,i.Lk)("h3",null,"Aperçu de la nouvelle photo :",-1))),qt=["src"],Ht={key:1};function Kt(e,t,a,o,l,s){return(0,i.uX)(),(0,i.CE)("div",null,[Qt,Jt,(0,i.Lk)("input",{type:"file",onChange:t[0]||(t[0]=(...e)=>s.handleFileChange&&s.handleFileChange(...e))},null,32),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.uploadPhoto&&s.uploadPhoto(...e))},"Enregistrer"),l.previewImage?((0,i.uX)(),(0,i.CE)("div",zt,[Vt,(0,i.Lk)("img",{src:l.previewImage,alt:"Aperçu de la photo de profil"},null,8,qt)])):(0,i.Q3)("",!0),l.uploadSuccess?((0,i.uX)(),(0,i.CE)("p",Ht,"La photo de profil a été téléchargée avec succès !")):(0,i.Q3)("",!0)])}a(4603),a(7566),a(8721);var Zt={data(){return{selectedFile:null,previewImage:null,uploadSuccess:!1}},methods:{handleFileChange(e){this.selectedFile=e.target.files[0],this.previewImage=URL.createObjectURL(this.selectedFile)},uploadPhoto(){this.selectedFile&&setTimeout((()=>{this.uploadSuccess=!0;const e=this.previewImage;localStorage.setItem("profilePhotoURL",e),this.$router.push("/admin/analytics")}),1500)}}};const Yt=(0,R.A)(Zt,[["render",Kt],["__scopeId","data-v-38291c94"]]);var ea=Yt,ta=a(6144),aa=a(4824);const ia=["onClick"],oa={class:"profile-info"},la=["src"],sa={key:0,class:"dropdown"};function na(e,t,a,o,l,n){return(0,i.uX)(),(0,i.CE)("div",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.users,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"user-profile",key:e._id,onClick:t=>n.toggleDropdown(e._id)},[(0,i.Lk)("div",oa,[(0,i.Lk)("img",{class:"icone",src:e.profilePhotoURL,alt:"profile"},null,8,la),(0,i.Lk)("span",null,(0,s.v_)(e.firstName),1)]),l.isDropdownOpen===e._id?((0,i.uX)(),(0,i.CE)("div",sa,[(0,i.Lk)("p",null,"Nom: "+(0,s.v_)(e.lastName),1),(0,i.Lk)("p",null,"Prénom: "+(0,s.v_)(e.firstName),1),(0,i.Lk)("p",null,"Rôle: "+(0,s.v_)(e.role),1),(0,i.Lk)("p",null,"Objectif du jour: "+(0,s.v_)(e.dailyObjective),1)])):(0,i.Q3)("",!0)],8,ia)))),128))])}var ra={data(){return{users:[],isDropdownOpen:null}},methods:{toggleDropdown(e){this.isDropdownOpen=this.isDropdownOpen===e?null:e},fetchDataFromBackend(){const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`};S.A.get(`${$.J}/admin/allusers`,{headers:t}).then((e=>{this.users=e.data.map((e=>({...e,profilePhotoURL:`${$.J}`+e.profilePhotoURL})))})).catch((e=>{console.error("Erreur lors de la récupération des données utilisateur:",e)}))}},mounted(){this.fetchDataFromBackend()}};const ca=(0,R.A)(ra,[["render",na],["__scopeId","data-v-1a77e6c6"]]);var ua=ca;const da={class:"objective-time"},pa={class:"user-profile"},ha=["src"],ka={class:"profile-info"},va={class:"objective"};function ga(e,t,a,o,l,n){return(0,i.uX)(),(0,i.CE)("div",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.users,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e._id,class:"objective-component"},[(0,i.Lk)("div",da,(0,s.v_)(e.objectiveTime),1),(0,i.Lk)("div",pa,[(0,i.Lk)("img",{src:e.profilePhotoURL,alt:"Profile"},null,8,ha),(0,i.Lk)("div",ka,[(0,i.Lk)("h3",null,(0,s.v_)(e.firstName),1),(0,i.Lk)("p",null,(0,s.v_)(e.role),1)])]),(0,i.Lk)("div",va,[(0,i.Lk)("p",null,"Objectif: "+(0,s.v_)(e.dailyGoal),1),(0,i.Lk)("div",null,(0,s.v_)(e.date),1),(0,i.Lk)("div",null,(0,s.v_)(e.arrivalTime),1),(0,i.Lk)("div",null,(0,s.v_)(e.createdAt),1)])])))),128))])}var ma={data(){return{users:[]}},mounted(){this.fetchDataFromBackend()},methods:{fetchDataFromBackend(){const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`};S.A.get(`${$.J}/admin/getallObjective`,{headers:t}).then((e=>{this.users=e.data.map((e=>({...e,profilePhotoURL:`${$.J}`+e.profilePhotoURL})))})).catch((e=>{console.error("Erreur lors de la récupération des données utilisateur:",e)}))}}};const fa=(0,R.A)(ma,[["render",ga],["__scopeId","data-v-16ebb094"]]);var La=fa;const ba=e=>((0,i.Qi)("data-v-c5859028"),e=e(),(0,i.jt)(),e),ya={class:"profile-info"},Ca=["src"],_a={class:"report-time"},wa={class:"date"},Da={class:"report-info"},Aa={class:"objectif"},Fa=ba((()=>(0,i.Lk)("h3",null,"Rapport de l'utilisateur",-1))),Ta={class:"role"},Pa={class:"justification"};function ja(e,t,a,o,l,n){return(0,i.uX)(),(0,i.CE)("div",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.users,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"report-component",key:e._id},[(0,i.Lk)("div",ya,[(0,i.Lk)("img",{class:"icone",src:e.profilePhotoURL,alt:"Profile"},null,8,Ca),(0,i.Lk)("span",null,[(0,i.Lk)("span",null,(0,s.v_)(e.firstName),1)])]),(0,i.Lk)("div",_a,[(0,i.Lk)("span",wa,(0,s.v_)(e.createdAt),1)]),(0,i.Lk)("div",Da,[(0,i.Lk)("p",null,[(0,i.eW)("Objectif défini:"),(0,i.Lk)("span",Aa,(0,s.v_)(e.dailyGoal),1)]),Fa,(0,i.Lk)("div",null,[(0,i.eW)("Role:"),(0,i.Lk)("span",Ta,(0,s.v_)(e.role),1)]),(0,i.Lk)("p",null,[(0,i.eW)("Percentage:"),(0,i.Lk)("span",{class:(0,s.C4)(n.getPercentageClass(e))},(0,s.v_)(e.pourcentage)+"%",3)]),(0,i.Lk)("p",null,[(0,i.eW)("Decision:"),(0,i.Lk)("span",{class:(0,s.C4)(n.getDecisionClass(e))},(0,s.v_)(e.choix),3)]),(0,i.Lk)("p",null,[(0,i.eW)("Justification:"),(0,i.Lk)("span",Pa,(0,s.v_)(e.justification),1)])])])))),128))])}var Ea={data(){return{users:[]}},mounted(){this.fetchReportFromBackend()},methods:{fetchReportFromBackend(){const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`};S.A.get(`${$.J}/admin/allreport`,{headers:t}).then((e=>{this.users=e.data.map((e=>({...e,profilePhotoURL:`${$.J}`+e.profilePhotoURL}))).reverse(),console.log("users",this.users)})).catch((e=>{console.error("Error fetching report data from backend:",e)}))},getPercentageClass(e){return"non"===e.choix&&e.pourcentage<=60?"percentage-red":"percentage-green"},getDecisionClass(e){return"non"===e.choix&&e.pourcentage>=60?"decision-red":"oui"===e.choix&&e.pourcentage>=100?"decision-green":""}}};const Oa=(0,R.A)(Ea,[["render",ja],["__scopeId","data-v-c5859028"]]);var xa=Oa;const Ia=e=>((0,i.Qi)("data-v-2834c671"),e=e(),(0,i.jt)(),e),Sa={key:0},$a={key:1},Xa=Ia((()=>(0,i.Lk)("h2",null,"Statistiques du jour",-1))),Ra={class:"percentage-of-the-day"},Ga={class:"chart"},Ma=Ia((()=>(0,i.Lk)("h3",null,"Diagramme à barres",-1))),Wa={ref:"dayBarChartCanvas"},Ua=Ia((()=>(0,i.Lk)("h2",null,"Statistiques de la semaine",-1))),Na={class:"percentage-of-the-week"},Ba={class:"chart"},Qa=Ia((()=>(0,i.Lk)("h3",null,"Diagramme à barres",-1))),Ja={ref:"weekBarChartCanvas"},za=Ia((()=>(0,i.Lk)("h2",null,"Statistiques du mois",-1))),Va={class:"percentage-of-the-month"},qa={class:"chart"},Ha=Ia((()=>(0,i.Lk)("h3",null,"Diagramme en courbes",-1))),Ka={ref:"monthLineChartCanvas"};function Za(e,t,a,o,l,n){return(0,i.uX)(),(0,i.CE)("div",{class:(0,s.C4)([e.theme,"page"])},[l.loading?((0,i.uX)(),(0,i.CE)("div",Sa,"Loading...")):((0,i.uX)(),(0,i.CE)("div",$a,[Xa,(0,i.Lk)("div",Ra,[(0,i.Lk)("p",null,"Percentage du jour: "+(0,s.v_)(l.percentageOfDay)+"%",1)]),(0,i.Lk)("div",Ga,[Ma,(0,i.Lk)("canvas",Wa,null,512)]),Ua,(0,i.Lk)("div",Na,[(0,i.Lk)("p",null,"Percentage de la semaine: "+(0,s.v_)(l.percentageOfWeek)+"%",1)]),(0,i.Lk)("div",Ba,[Qa,(0,i.Lk)("canvas",Ja,null,512)]),za,(0,i.Lk)("div",Va,[(0,i.Lk)("p",null,"Percentage du mois: "+(0,s.v_)(l.percentageOfMonth)+"%",1)]),(0,i.Lk)("div",qa,[Ha,(0,i.Lk)("canvas",Ka,null,512)])]))],2)}var Ya={data(){return{loading:!0,percentageOfDay:0,percentageOfWeek:{monday:0,tuesday:0,wednesday:0,thursday:0,friday:0},percentageOfMonth:[]}},computed:{...(0,I.aH)(["theme"])},mounted(){this.fetchData()},methods:{async fetchData(){try{const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`},[a,i,o]=await Promise.all([S.A.get(`${$.J}/admin/percent`,{headers:t}),S.A.get(`${$.J}/admin/weekperc`,{headers:t}),S.A.get(`${$.J}/admin/monthperc`,{headers:t})]);this.percentageOfDay=a.data,this.percentageOfWeek=i.data,this.percentageOfMonth=o.data,this.populateCharts(),this.loading=!1}catch(e){console.error("Error fetching data:",e),this.loading=!1}},populateCharts(){const e=this.$refs.dayBarChartCanvas.getContext("2d");new Lt.Ay(e,{type:"bar",data:{labels:["Day 1"],datasets:[{label:"Percentage",data:[this.percentageOfDay],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}});const t=this.$refs.weekBarChartCanvas.getContext("2d");new Lt.Ay(t,{type:"bar",data:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],datasets:[{label:"Percentage",data:[this.percentageOfWeek.monday,this.percentageOfWeek.tuesday,this.percentageOfWeek.wednesday,this.percentageOfWeek.thursday,this.percentageOfWeek.friday],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}});const a=this.$refs.monthLineChartCanvas.getContext("2d");new Lt.Ay(a,{type:"line",data:{labels:["Month 1","Month 2","Month 3","Month 4","Month 5"],datasets:[{label:"Percentage",data:this.percentageOfMonth,borderColor:"rgba(75, 192, 192, 1)",borderWidth:1,fill:!1}]},options:{scales:{y:{beginAtZero:!0}}}})}}};const ei=(0,R.A)(Ya,[["render",Za],["__scopeId","data-v-2834c671"]]);var ti=ei;function ai(e,t,a,o,l,s){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("input",{type:"file",onChange:t[0]||(t[0]=(...e)=>s.handleFileUpload&&s.handleFileUpload(...e))},null,32),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>s.uploadFile&&s.uploadFile(...e))},"Upload")])}var ii={data(){return{file:null}},methods:{handleFileUpload(e){this.file=e.target.files[0]},uploadFile(){const e=localStorage.getItem("token"),t={Authorization:`Bearer ${e}`},a=new FormData;a.append("file",this.file),fetch(`${$.J}/admin/upload`,{method:"POST",body:a,headers:t}).then((e=>{e.ok?console.log("File uploaded successfully"):console.error("Failed to upload file")})).catch((e=>{console.error("Error uploading file:",e)}))}}};const oi=(0,R.A)(ii,[["render",ai]]);var li=oi,si=a(8747),ni=a(2749),ri=a(2181),ci=a(2565);const ui=e=>((0,i.Qi)("data-v-55fae7d8"),e=e(),(0,i.jt)(),e),di={class:"page"},pi={class:"container"},hi={class:"content"},ki=ui((()=>(0,i.Lk)("h2",null,"Définir l'objectif pour la Semaine",-1))),vi=ui((()=>(0,i.Lk)("hr",null,null,-1))),gi={class:"input-group"},mi=ui((()=>(0,i.Lk)("label",{for:"weeklyGoal"},"Objectif",-1))),fi=ui((()=>(0,i.Lk)("br",null,null,-1))),Li=ui((()=>(0,i.Lk)("br",null,null,-1))),bi={key:0},yi={key:0,class:"popup"},Ci=ui((()=>(0,i.Lk)("h2",null,"Formulaire soumis avec succès !",-1))),_i=[Ci];function wi(e,t,a,o,l,r){return(0,i.uX)(),(0,i.CE)("div",di,[(0,i.Lk)("div",pi,[(0,i.Lk)("div",hi,[ki,vi,(0,i.Lk)("div",gi,[mi,fi,(0,i.bo)((0,i.Lk)("textarea",{id:"weeklyGoal","onUpdate:modelValue":t[0]||(t[0]=e=>l.weeklyGoal=e),rows:"4",class:(0,s.C4)({"error-border":l.errorSubmitting}),ref:"weeklyGoalField"},null,2),[[n.Jo,l.weeklyGoal]])]),Li,(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>r.submitForm&&r.submitForm(...e))},"Soumettre"),l.errorFetchingDate?((0,i.uX)(),(0,i.CE)("h5",bi,"Erreur lors du chargement de la date. Veuillez vérifier votre connexion Internet.")):(0,i.Q3)("",!0)]),l.showPopup?((0,i.uX)(),(0,i.CE)("div",yi,_i)):(0,i.Q3)("",!0)])])}var Di={data(){return{weeklyGoal:"",showPopup:!1,errorSubmitting:!1,errorFetchingDate:!1}},methods:{submitForm(){const e=localStorage.getItem("token"),t={"Content-Type":"application/json",Authorization:`Bearer ${e}`},a={weeklyGoal:this.weeklyGoal};S.A.post(`${$.J}/week/weekly`,a,{headers:t}).then((e=>{console.log("Form submitted successfully:",e.data),this.weeklyGoal="",this.showPopup=!0,setTimeout((()=>{this.showPopup=!1,this.$router.push("/admin/analytics")}),3e3),this.errorSubmitting=!1})).catch((e=>{console.error("Error submitting form:",e),this.errorSubmitting=!0,this.shakeInput()}))},shakeInput(){const e=this.$refs.weeklyGoalField;e&&(e.classList.add("shake"),setTimeout((()=>e.classList.remove("shake")),500))}}};const Ai=(0,R.A)(Di,[["render",wi],["__scopeId","data-v-55fae7d8"]]);var Fi=Ai,Ti=a(1369),Pi=a(9173),ji={components:{userDashLayout:l.A,adminDashSidebarComponent:oe,adminDashNavbarComponent:M,analytics:Ct,inscription:le.A,suivi:Te,rapport:et,setting:_t.A,search:wt.A,userActivity:Mt,editphoto:ea,changeCount:Nt.A,gererCount:ta.A,aide:Ut.A,logout:aa.A,Parametre:Wt.A,Review:ua,dailyObject:La,report:xa,statistic:ti,uploadPicture:li,Absent:si.A,listOfchildren:ni.A,userInfo:ri.A,ActiviteHebdomadaire:ci.A,weekGoal:Fi,childPicture:Ti["default"],message:Pi.A},data(){return{CurrentView:"userActivity"}},watch:{$route(e){this.CurrentView=e.params.id}}};const Ei=(0,R.A)(ji,[["render",o]]);var Oi=Ei}}]);