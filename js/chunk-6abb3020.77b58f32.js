(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6abb3020"],{"017d":function(t,e,a){"use strict";var n=a("7f9d"),r=a.n(n);r.a},"19ce":function(t,e,a){t.exports=a.p+"img/hatena-icon.8174d1f1.svg"},2538:function(t,e,a){t.exports=a.p+"img/matrix-bg_pc.de80183b.png"},3188:function(t,e,a){"use strict";var n=a("6cf0"),r=a.n(n);r.a},"325c":function(t,e,a){"use strict";var n=a("d6e4"),r=a.n(n);r.a},"3f54":function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));a("7f7f");var n=a("3fba"),r=a("2f4e"),s=a("edfa"),o=a("8992"),i=a("41cb"),c=a("d3a4"),l=a("2b0e"),d=function(t){return console.log("error",t),t.response?401===t.request.status&&l["default"].swal.fire({type:"error",text:c["a"].t("UNAUTHORISED"),icon:"error",confirmButtonText:c["a"].t("LOGIN")}).then((function(t){t&&(o["d"].clear(),i["a"].push("/login"))})):l["default"].swal({type:"warning",text:c["a"].t("NETWORKERROR")}),t},p=function(t){var e=r["a"].MLOGIN,a=r["a"].LOGIN,n=r["a"].EVALUATIONUSERMANAGEMENT,i=r["a"].FORGOTPASSWORD,l=r["a"].MFORGOTPASSWORD,d=r["a"].EVALUATIONCLIENTCOSTEXPANSIONITEMLIST,p=r["a"].CLIENTREADCLIENTPOINTINFO,u=r["a"].DASHBOARD,h=r["a"].INTEGRATIONCLIENTDETAILS,m=r["a"].INTEGRATIONREADJOURNALSTATUS,f=r["a"].EVALUATIONEXPENSEITEMCOMPAISON,g=r["a"].INTEGRATIONREFRESHTOKEN,b=r["a"].EVALUATIONCOSTINFOTREELIST,x=r["a"].EVALUATIONCOMPANYJUDGEMENTCOMPARISON,y=r["a"].EVALUATIONEXPENSEITEMCOMPAISON,v=r["a"].EVALUATIONREADEXPENSISYEAR,A=r["a"].EVALUATIONREADYEARLYCOSTINFO;return 200==t.request.status&&t.data.success||t.config.url=="".concat(s["a"].apiUrl).concat(e)||t.config.url=="".concat(s["a"].apiUrl).concat(a)||t.config.url=="".concat(s["a"].apiUrl).concat(i)||t.config.url=="".concat(s["a"].apiUrl).concat(l)||t.config.url=="".concat(s["a"].apiUrl).concat(n)||t.config.url=="".concat(s["a"].apiUrl).concat(d)||t.config.url=="".concat(s["a"].apiUrl).concat(p)||t.config.url=="".concat(s["a"].apiUrl).concat(u)||t.config.url=="".concat(s["a"].apiUrl).concat(h)||t.config.url=="".concat(s["a"].apiUrl).concat(m)||t.config.url=="".concat(s["a"].apiUrl).concat(f)||t.config.url=="".concat(s["a"].apiUrl).concat(g)||t.config.url=="".concat(s["a"].apiUrl).concat(x)||t.config.url=="".concat(s["a"].apiUrl).concat(y)||t.config.url=="".concat(s["a"].apiUrl).concat(v)||t.config.url=="".concat(s["a"].apiUrl).concat(A)||t.config.url=="".concat(s["a"].apiUrl).concat(b)||Object(o["l"])(c["a"].t("ERRORMESSAGE")),t};n["a"].interceptors.response.use((function(t){return p(t)}),(function(t){return d(t)}));var u={getGroupTypes:function(t){return n["a"].post("".concat(r["a"].GROUPTYPESLIST),t)},postAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={};return a&&(r=Object(o["a"])()),n["a"].post("".concat(s["a"].apiUrl).concat(t),e,{headers:r})},getAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={};return a&&(r=Object(o["a"])()),n["a"].get("".concat(s["a"].apiUrl).concat(t),{params:e,headers:r})},getCourses:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};return e&&(a=Object(o["a"])()),n["a"].get("".concat(r["a"].COURSE),{params:t,headers:a})},putAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={};return a&&(r=Object(o["a"])()),n["a"].put("".concat(s["a"].apiUrl).concat(t),e,{headers:r})},deleteAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={};return a&&(r=Object(o["a"])()),n["a"].delete("".concat(s["a"].apiUrl).concat(t),{params:e,headers:r})}},h={basic:u},m={get:function(t){return h[t]}}},5446:function(t,e,a){"use strict";var n=a("e04f"),r=a.n(n);r.a},"6cf0":function(t,e,a){},"7ef5":function(t,e,a){},"7f9d":function(t,e,a){},b50b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"w-full"},[a("b-col",{attrs:{cols:"12"}},[a("DashboardComponent")],1)],1)],1)},r=[],s=(a("cadf"),a("456d"),a("ac6a"),a("96cf"),a("3b8d")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"content"},[n("b-row",{staticClass:"w-full justify-content-between align-items-center my-4 mx-auto",on:{click:t.updateToggle}},[n("b-col",{attrs:{cols:"12",xl:"12"}},[n("span",{staticClass:"font-weight-bold judgmentVal-font"},[t._v(t._s(t.financialYear)+t._s(t.$t("YEARJP"))+t._s(t.month)+t._s(t.$t("MONTHJP"))+" "+t._s(t.$t("DASHBOARD.FOR_COMPANY_JUDGEMENT"))+" ")]),t.companyPosition?n("b-button",{staticClass:"ml-2 performanceButton"},[t._v(" "+t._s(t.rankLetters[t.companyPosition-1])+" ")]):t._e(),n("span",{staticClass:"ml-2 text-dashboard d-none d-md-none d-sm-none d-lg-flex"},[t._v(" "+t._s(t.$t("DASHBOARDPERFORMER")))]),n("button",{staticClass:"btn btn-custom-color margin-right-4 float-right",on:{click:t.goToInputExpenseItem}},[t._v(" "+t._s(t.$t("GRAPH.ENTER"))+" ")])],1)],1),n("b-row",{staticClass:"justify-content-center"},[n("b-col",{staticClass:"mb-4",attrs:{cols:"12",xl:"4",md:"8"}},[n("button",{staticClass:"w-100 px-3 py-2 dropdownToggle border-0 d-flex justify-content-between align-items-center",attrs:{id:"toggleBtn"},on:{click:function(e){e.preventDefault(),t.toggleSubtree=!t.toggleSubtree}}},[n("span",{staticClass:"title-dropdown"},[t._v(t._s(t.$t("SELECTDROPDOWN")))]),n("span",[n("i",{class:(t.toggleSubtree,"fa fa-caret-down")})])]),t.toggleSubtree?n("b-row",{staticClass:"dropdownToggleBody mx-auto",attrs:{id:"dashboardAccountDropdown"}},[n("b-col",{staticClass:"selectExpenseItem",attrs:{cols:"12",xl:"12"}},[n("b-col",{staticClass:"submenuScroll"},[n("SubMenuTree",{staticClass:"mt-1",attrs:{"tree-options":t.treeOptions,treeTitle:t.treeTitle,selectedState:t.selectedState},on:{"update-multiselect-exp-item":t.getExpItmCodeArray}})],1),n("div",{staticClass:"w-100 mb-2 mt-2 px-2 d-flex align-items-center justify-content-center"},[n("span",[n("b-button",{staticClass:"py-1 modal-mblBtn modal-updateBtn ml-1",attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.applyCheckExpItem(e)}}},[t._v(t._s(t.$t("UPDATE")))])],1),n("span",[n("b-button",{staticClass:"modal-clearButton ml-3 modal-mblBtn py-1",on:{click:function(e){return e.preventDefault(),t.clearSubmenu()}}},[t._v(t._s(t.$t("CLEAR")))])],1)])],1)],1):t._e()],1)],1),n("b-row",{staticClass:"align-items-start",attrs:{"no-gutters":!0},on:{click:t.updateToggle}},[n("b-col",{attrs:{cols:"12",md:"9"}}),n("b-col",{attrs:{cols:"12",md:"3"}}),n("b-col",{attrs:{cols:"12",md:"12"}},[t.loading?n("div",{staticClass:"text-center mb-2"},[n("strong",{staticClass:"mx-2"},[t._v("Loading...")]),n("b-spinner",{staticClass:"ml-auto"})],1):t._e(),n("div",{attrs:{id:"arc1"}})])],1),n("b-row",{on:{click:t.updateToggle}},[n("b-col",{staticClass:"d-flex justify-content-center align-items-center",attrs:{cols:"12"}},[n("div",{staticClass:"py-2 px-2 pillButtons bg-white d-flex justify-content-center align-items-center"},[n("b-link",{staticClass:"link d-flex justify-content-center align-items-center",attrs:{disabled:t.prevLinkDisabled,href:"javascript:;"},on:{click:function(e){return t.getPrevMonth()}}},[n("span",[n("i",{staticClass:"fa fa-caret-left fa-2x text-muted mr-2",attrs:{"aria-hidden":"true"}})]),n("span",{staticClass:"mr-2"},[t._v(t._s(t.$t("PREVIOUSMONTH")))])]),t._v(" | "),n("b-link",{staticClass:"link ml-2 d-flex justify-content-center align-items-center",attrs:{disabled:t.nextLinkDisabled,href:"javascript:;"},on:{click:function(e){return t.getNextMonth()}}},[n("span",[t._v(t._s(t.$t("NEXTMONTH")))]),n("span",[n("i",{staticClass:"fa fa-caret-right fa-2x text-muted ml-2",attrs:{"aria-hidden":"true"}})])])],1)])],1),n("b-row",{staticClass:"mt-3",on:{click:t.updateToggle}},[n("b-col",{staticClass:"d-none d-sm-none d-md-none d-lg-flex justify-content-center align-items-center mb-5",attrs:{cols:"12"}},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom.html",value:t.slimToolTip,expression:"slimToolTip",modifiers:{hover:!0,bottom:!0,html:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{id:"tooltip2",placement:"bottom"},expression:"{id:'tooltip2',placement: 'bottom' }",modifiers:{hover:!0}}],staticClass:"explanationButton",attrs:{id:"explanationButton",variant:"primary"}},[t._v(t._s(t.$t("OVERALLJUDGEMENTCHART.SLIM")))]),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom.html",value:t.healthyToolTip,expression:"healthyToolTip",modifiers:{hover:!0,bottom:!0,html:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{id:"tooltip2",placement:"bottom"},expression:"{id:'tooltip2',placement: 'bottom' }",modifiers:{hover:!0}}],staticClass:"explanationButton",attrs:{id:"explanationButton",variant:"primary"}},[t._v(t._s(t.$t("OVERALLJUDGEMENTCHART.HEALTHY")))]),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom.html",value:t.fatToolTip,expression:"fatToolTip",modifiers:{hover:!0,bottom:!0,html:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{id:"tooltip2",placement:"bottom"},expression:"{id:'tooltip2',placement: 'bottom' }",modifiers:{hover:!0}}],staticClass:"explanationButton",attrs:{variant:"primary"}},[t._v(t._s(t.$t("OVERALLJUDGEMENTCHART.FAT")))]),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom.html",value:t.metaboToolTip,expression:"metaboToolTip",modifiers:{hover:!0,bottom:!0,html:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{id:"tooltip2",placement:"bottom"},expression:"{id:'tooltip2',placement: 'bottom' }",modifiers:{hover:!0}}],staticClass:"explanationButton",attrs:{id:"explanationButton",variant:"primary"}},[t._v(t._s(t.$t("OVERALLJUDGEMENTCHART.METABO")))]),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom.html",value:t.spoilerToolTip,expression:"spoilerToolTip",modifiers:{hover:!0,bottom:!0,html:!0}},{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:{id:"tooltip2",placement:"bottom"},expression:"{id:'tooltip2',placement: 'bottom' }",modifiers:{hover:!0}}],staticClass:"explanationButton",attrs:{id:"explanationButton",variant:"primary"}},[t._v(t._s(t.$t("OVERALLJUDGEMENTCHART.SPOILER")))])],1)],1),n("b-row",{staticClass:"d-md-block d-lg-none px-4",on:{click:t.updateToggle}},[n("b-col",{staticClass:"w-100 mt-3 justify-content-center text-center",attrs:{cols:"12"}},[n("b-button",{staticClass:"expandButton"},[n("img",{staticClass:"navbar-brand-full p-1",attrs:{src:a("19ce"),width:"10%",alt:"Expense Reduction Management Logo"}}),t._v(" コストについての説明 "),n("span",{on:{click:function(e){e.preventDefault(),t.showFirst=!t.showFirst}}},[t.showFirst?n("span",[n("i",{staticClass:"fa fa-minus mt-1 text-center float-right",attrs:{"aria-hidden":"true"}})]):t._e(),t.showFirst?t._e():n("span",[n("i",{staticClass:"fa fa-plus mt-1 text-center ipadBtn float-right",attrs:{"aria-hidden":"true"}})])])])],1),t.showFirst?n("b-col",{attrs:{cols:"12",sm:"3",md:"12"}},[n("ul",{staticClass:"list-unstyled mt-3 list-legend ml-1"},t._l(t.$t("GRAPH.LEGENDS"),(function(e,a){return n("li",{key:a,staticClass:"d-flex justify-content-start mb-3"},[n("div",[n("span",{staticClass:"block py-1 mr-1 font-weight-bold",style:"color:"+e.COLOR},[t._v(" "+t._s(e.LEGEND)+" ")]),n("br"),n("span",{staticClass:"block py-1"},[t._v(t._s(e.MEANING))])])])})),0)]):t._e()],1),n("b-modal",{attrs:{id:"modal-tall",centered:"",variant:"secondary","modal-class":"py-0","body-class":"py-0",size:"md","footer-class":"border-0","header-class":"border-0 bg-white"},scopedSlots:t._u([{key:"modal-header",fn:function(e){var a=e.cancel;return[n("div",{staticClass:"w-100 d-flex justify-content-end"},[n("button",{staticClass:"cross-close-btn border-dark text-dark font-weight-bold text-sm m-0 bg-white mr-2",on:{click:function(t){return a()}}},[t._v(" X ")])])]}},{key:"modal-footer",fn:function(e){var a=e.cancel;return[n("div",{staticClass:"w-100"},[n("button",{staticClass:"btn-sm float-left btn-custom-color px-1 ml-2",on:{click:function(t){return a()}}},[t._v(" "+t._s(t.$t("CLOSE"))+" ")])])]}}])},[n("b-card",{staticClass:"pop-up-box"},[n("div",{staticClass:"my-0 py-0 px-2"},[n("ul",{staticClass:"list-unstyled my-0 py-0"},t._l(t.$t("DASHBOARD.OVERALL_JUDGEMENTS"),(function(e,a){return n("li",{key:a},[n("span",{staticClass:"font-weight-bold block"},[t._v(" "+t._s(e.LABEL)+" ")]),n("p",{staticClass:"mb-0"},[t._v(t._s(e.VALUE))])])})),0)])])],1),n("b-modal",{ref:"tree-modal",attrs:{id:"tree-modal","hide-footer":!1,centered:"",variant:"secondary","modal-class":"py-0","body-class":"border-0 py-0",size:"md","footer-class":"border-0","header-class":"border-0 bg-white pd-0","button-size":"sm","hide-header-close":""},scopedSlots:t._u([{key:"modal-header",fn:function(e){var a=e.cancel;return[n("div",{staticClass:"title-fs font-weight-bold mt-2 text-dark ml-3"},[t._v(" "+t._s(t.$t("EXPENSEITEMSELECTION"))+" ")]),n("b-button",{staticClass:"back-btn close-btn mt-2",attrs:{variant:"primary"},on:{click:a}},[t._v(t._s(t.$t("CLOSE")))])]}},{key:"modal-footer",fn:function(){return[n("div",{staticClass:"w-100"},[n("b-button",{staticClass:"px-4 send-btn float-right mr-2",attrs:{variant:"primary",type:"submit"},on:{click:function(e){return e.preventDefault(),t.applyCheckExpItem(e)}}},[t._v(t._s(t.$t("SELECTEXPENSEITEMS")))])],1)]},proxy:!0}])},[n("b-card",{staticClass:"pop-up-box"},[n("b-row",[n("b-col",{staticClass:"overflow-subtree"},[n("SubMenuTree",{attrs:{"tree-options":t.treeOptions,treeTitle:t.treeTitle},on:{"update-multiselect-exp-item":t.getExpItmCodeArray}})],1)],1)],1)],1)],1)},i=[],c=(a("8e6e"),a("7f7f"),a("f751"),a("4917"),a("6b54"),a("7514"),a("bd86")),l=a("5698"),d=a("2538"),p=a.n(d),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"min-dashboard-tree-height"},[a("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.treeTitle))]),0==t.treeData.length?[a("div",{staticClass:"text-center errorColor"},[t._v(" "+t._s(t.$t("GENRALDATAERRORMESSAGE"))+" ")])]:[a("span",{staticClass:"tree-text"},[a("b-form-checkbox",{staticClass:"ml-1",attrs:{id:"allCheckbox",name:"allCheckbox"},on:{change:t.updateAllCheckbox},model:{value:t.selectedState,callback:function(e){t.selectedState=e},expression:"selectedState"}},[t._v("All")])],1),a("tree",{ref:"tree",attrs:{id:"dashboardTree",data:t.treeData,options:t.treeOptions},on:{"node:selected":t.onNodeSelected,"node:checked":t.getCheckedItem,"node:unchecked":t.getCheckedItem},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node;return a("span",{staticClass:"tree-text"},[n.hasChildren()?[t._v(" "+t._s(n.text)+" ")]:[a("span",{staticClass:"tree-text",class:t.selected_expense_item.expense_item_nm==n.text?"selected-tree-text":""},[a("span",[t._v(" "+t._s(n.text)+" ")])])]],2)}}])})]],2)},h=[],m=a("2f62");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={name:"SubMenuTree",components:{},inheritAttrs:!1,props:{treeOptions:{type:[Array,Object,String,Function],default:function(){return[]}},selectedState:{type:Boolean,default:function(){return[]}},treeTitle:{type:String,default:function(){return[]}}},data:function(){return{ids:[],checkedItems:[]}},computed:g({eventsList:function(){return this.events.concat().reverse()}},Object(m["b"])({costInfoTree:"getCostInfoTreeList",treeData:"getTreeDashboard",selected_expense_item:"getSelectedExpenseItem",checkedItemsExpCodeArray:"getCheckedExpItemCodeArray"})),mounted:function(){},methods:{updateAllCheckbox:function(){var t=this;setTimeout((function(){console.log(t.selectedState),t.$emit("update-all-exp-item",t.selectedState);t.$refs.tree.findAll({}).map((function(e){Object.assign(e.states,{checked:!t.selectedState})}));t.getCheckedItem()}),0)},getCheckedItem:function(){var t=this,e=this.$refs.tree.findAll({state:{checked:!0}}).map((function(e){return t._.find(t.costInfoTree,{expense_item_nm:e.text?e.text:""})})),a=[];e.length>0&&e.forEach((function(t){null!=t&&a.push({accounts_name_cd:t.accounts_name_cd,expense_item_cd:t.expense_item_cd})})),this.$emit("update-multiselect-exp-item",a)},onNodeSelected:function(t){this.$emit("update-expense-type",t.text),this.selectedExpenseItem=t.text},dd:function(){var t=this.$refs.tree.findAll({state:{checked:!1}});return t}}},x=b,y=(a("017d"),a("5446"),a("2877")),v=Object(y["a"])(x,u,h,!1,null,"1d589749",null),A=v.exports,_=a("3fba"),E=a("d3a4"),C=a("3f54"),T=a("2f4e");function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function I(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(a,!0).forEach((function(e){Object(c["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S=C["a"].get("basic"),k={components:{SubMenuTree:A},data:function(){return{treeTitle:" ",loading:!1,showFirst:!1,selectedState:!1,toggleSubtree:!1,nextLinkDisabled:!1,prevLinkDisabled:!1,settingLinkDisabled:!1,dataApi:[],settingLinkValue:"",companySettingsArray:{industryNumber:"",industryType:"",floorSpace:"",capital:"",revenue:"",employees:""},treeOptions:{checkbox:!0},month:"",year:"",companyPosition:"",dataset:[],checkedExpenseItemCodeArray:[],datasetApi:[],bgImage:p.a,costInfoTree:[],yearStartMonth:"",financialYear:(new Date).getFullYear(),rankLetters:["S","A","B","C","D","E"]}},computed:I({},Object(m["b"])({checkExpenseItemList:"getCheckedExpItemCodeArrayInDashboard",userAccountData:"getUserDetails"}),{getData:function(){return this.dataset}}),created:function(){this.getUnreadNotifications()},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("updateExpenseItemYear",{expense_item_year:""}),this.getTreeData();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{getYearStartMonth:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S.postAPI(T["a"].MASTERREADDATAMCLIENTOTHERINFO,{fieldlist:["client_no","input_agency_option","year_start_month"],conditions:[{key:"client_no",value:localStorage.getItem("client_account_no")}]});case 2:e=t.sent,a=e.data,n=a.data,this.yearStartMonth=n[0].year_start_month?n[0].year_start_month:1,this.yearStartMonth>parseInt(this.getApiMonth)?this.financialYear=parseInt(this.getApiYear)-1:this.financialYear=parseInt(this.getApiYear);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getTreeData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,S.postAPI(T["a"].DASHBOARD,{client_no:localStorage.getItem("client_account_no")});case 3:if(e=t.sent,a=e.data,this.loading=!1,!a.success){t.next=18;break}return n=a.data.clientJudgementArray,this.costInfoTree=n,this.costInfoTree.forEach((function(t){var e={expense_item_cd:t.expense_item_cd,accounts_name_cd:t.accounts_name_cd};r.checkedExpenseItemCodeArray.push(e)})),this.checkExpenseItemList.length>0&&(this.checkedExpenseItemCodeArray=this.checkExpenseItemList),this.$store.dispatch("updateCheckedExpItemCodeArrayInDasboard",this.checkedExpenseItemCodeArray),t.next=14,this.dashboardApi();case 14:this.draw(),this.constructTreeArray(),t.next=21;break;case 18:return t.next=20,this.dashboardApi();case 20:this.draw();case 21:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),clearSubmenu:function(){this.checkedExpenseItemCodeArray=[],this.$store.dispatch("updateCheckedExpItemCodeArrayInDasboard",this.checkedExpenseItemCodeArray),this.checkedExpenseItemCodeArray.length<=0?this.selectedState=!0:this.selectedState=!1,this.dashboardApi(),this.constructTreeArray(),this.toggleSubtree=!1},applyCheckExpItem:function(){this.$store.dispatch("updateCheckedExpItemCodeArrayInDasboard",this.checkedExpenseItemCodeArray),this.checkedExpenseItemCodeArray.length<=0?this.selectedState=!0:this.selectedState=!1,this.dashboardApi(),this.constructTreeArray(),this.toggleSubtree=!1},constructTreeArray:function(){var t=this,e=[],a=this._.groupBy(this.costInfoTree,"accounts_name_nm");Object.keys(a).forEach((function(n){var r=[];a[n].forEach((function(e){var a,n=t.checkExpenseItemList.find((function(t){return t.expense_item_cd===e.expense_item_cd&&t.accounts_name_cd===e.accounts_name_cd}));a=n?{text:e.expense_item_nm,state:{checked:!0},expenseItemCode:e.expense_item_cd,accountNameCode:e.accounts_name_cd}:{text:e.expense_item_nm,expenseItemCode:e.expense_item_cd,accountNameCode:e.accounts_name_cd},r.push(a)}));var s={text:n,state:{expanded:!0},children:r};e.push(s)})),this.$store.dispatch("updateTreeDashboard",e)},getPrevMonth:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.nextLinkDisabled=!1,this.month=parseInt(this.month)-1,this.yearStartMonth>parseInt(this.month)?(this.financialYear=parseInt(this.year)-1,this.month<=0?(this.year=parseInt(this.year)-1,this.month=12):this.month>9?this.month=this.month:this.month="0"+this.month):this.month<=0?(this.year=parseInt(this.year)-1,this.month=12):this.month>9?this.month=this.month:this.month="0"+this.month,t.next=5,this.dashboardApi();case 5:return t.next=7,this.draw();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getNextMonth:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return parseInt(this.getApiMonth)<=parseInt(this.month)+1&&parseInt(this.getApiYear)==this.year&&(this.nextLinkDisabled=!0),this.month=parseInt(this.month)+1,this.month>12?(this.year=parseInt(this.year)+1,this.month="01"):this.month>9?this.month=this.month:this.month="0"+this.month,this.yearStartMonth>parseInt(this.month)?this.financialYear=parseInt(this.year)-1:this.financialYear=parseInt(this.year),t.next=6,this.dashboardApi();case 6:return t.next=8,this.draw();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dashboardApi:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,""!=this.month){t.next=8;break}return t.next=4,_["a"].post(T["a"].DASHBOARD,{client_no:localStorage.getItem("client_account_no"),month:this.month,year:this.year,expense_item_cd:this.checkedExpenseItemCodeArray});case 4:this.dataApi=t.sent,this.dataApi.data.success?(this.getApiMonth=this.dataApi.data.data.dataAvailableMonthYear.toString().slice(4,6),this.getApiYear=this.dataApi.data.data.dataAvailableMonthYear.toString().slice(0,4),this.nextLinkDisabled=!0,e=this.dataApi.data.data.clientJudgementArray,0==e.length&&(this.prevLinkDisabled=!0),this.getYearStartMonth()):(this.getApiMonth=(new Date).getMonth()+1,this.getApiYear=(new Date).getFullYear(),this.nextLinkDisabled=!0,this.prevLinkDisabled=!0,this.getYearStartMonth()),t.next=11;break;case 8:return t.next=10,_["a"].post(T["a"].DASHBOARD,{client_no:localStorage.getItem("client_account_no"),month:this.month,year:this.year,expense_item_cd:this.checkedExpenseItemCodeArray});case 10:this.dataApi=t.sent;case 11:this.dataApi.data.success||(this.loading=!1,this.settingLinkDisabled=!0,this.nextLinkDisabled=!0,this.prevLinkDisabled=!0,a=(new Date).getMonth()+1,a>9&&(this.month=a),a<10&&(this.month="0"+a),this.year=(new Date).getFullYear()),this.dataApi.data.success&&(this.month=this.dataApi.data.data.dataAvailableMonthYear.toString().slice(4,6),this.year=this.dataApi.data.data.dataAvailableMonthYear.toString().slice(0,4),n=this.dataApi.data.data.companySettingArray,n&&(this.companySettingsArray={industryType:n.industry_nm?n.industry_nm:"",floorSpace:n.floor_space?parseInt(n.floor_space):"",capital:n.capital?n.capital:"",revenue:n.revenue?n.revenue:"",employees:n.employee_number?n.employee_number:""}),this.generateSettingLinkValueHtml(),this.datasetApi=this.dataApi.data.data.clientJudgementArray,this.dataApi.data.data.judgementCompanyDetails.length>0?(localStorage.setItem("judg_company_point",this.dataApi.data.data.judgementCompanyDetails[0].judg_company_point),this.$store.dispatch("updateExcellentPoint",this.dataApi.data.data.judgementCompanyDetails[0].judg_company_point+"P"),this.companyPosition=parseInt(this.dataApi.data.data.judgementCompanyDetails[0].judg_company)):(this.$store.dispatch("updateExcellentPoint","0P"),this.companyPosition=""),this.checkedExpenseItemCodeArray.length<=0&&(this.datasetApi=[]),this.dataset=this.datasetApi.map((function(t){return{name:t.expense_item_nm,x:t.cost?parseInt(t.cost)<=2e6?parseInt(t.cost):2e6:"",y:t.reduction_range?parseInt(t.reduction_range)>=70?parseInt(t.reduction_range)<=230?parseInt(t.reduction_range):230:70:"",accounts_name_cd:t.accounts_name_cd?t.accounts_name_cd:"",expense_item_cd:t.expense_item_cd?t.expense_item_cd:""}})),this.assignColorCode(),this.draw(),this.loading=!1);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),isMobileScreen:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},test:function(){var t=this,e=this.dataset.map((function(t){return{x:t.x,y:t.y}})),a=e.map((function(a){if(t._.filter(e,{x:a.x,y:a.y}).length>1&&a)return a})),n=[];return a.map((function(e){t._.find(n,e)||n.push(e)})),console.log("newM",n),n},slimToolTip:function(){return this.$t("GRAPH.LEGENDS[0].MEANING")},healthyToolTip:function(){return this.$t("GRAPH.LEGENDS[1].MEANING")},fatToolTip:function(){return this.$t("GRAPH.LEGENDS[2].MEANING")},metaboToolTip:function(){return this.$t("GRAPH.LEGENDS[3].MEANING")},spoilerToolTip:function(){return this.$t("GRAPH.LEGENDS[4].MEANING")},assignColorCode:function(){var t=this.dataset.map((function(t){return t.x<=1e6&&t.y>=70&&t.y<149?Object.assign(t,{bgColor:"#3FB0F0",radius:32}):t.x>=1e6&&t.y>=70&&t.y<149?Object.assign(t,{bgColor:"#A9D28E",radius:32}):t.x<=75e4&&t.y>=149?Object.assign(t,{bgColor:"#FEB653",radius:40}):t.x>=75e4&&t.x<125e4&&t.y>=149?Object.assign(t,{bgColor:"#FEAFE6",radius:40}):t.x>=125e4&&t.y>=149?Object.assign(t,{bgColor:"#F89C9F",radius:40}):void 0}));console.log("KKKKKKKKK",t)},getColorCode:function(t,e){var a=800,n=500;return t<a/2&&e>n/2?"#3FB0F0":t>a/2&&e>n/2?"#A9D28E":t<a/3&&e<n/2?"#FEB653":t>a/3&&e<n/2?"#FEAFE6":t>a/3&&e<n/2?"#F89C9F":void 0},constructHoverData:function(){var t,e=this;this.test().map((function(a){var n=[];t=e.dataset.map((function(t){return t.x==a.x&&t.y==a.y?(n.push(t.name),Object.assign(t,{hover:!0,hoverDetais:n})):t}))})),console.log("newDataset",t)},getUnreadNotifications:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["a"].post(T["a"].MESSAGEREDORUNREDCOUNT,{client_no:localStorage.getItem("client_account_no")});case 2:e=t.sent,a=e.data,a.success&&this.$store.dispatch("updateUnreadMessages",{unread_messages:a.data.messageCount});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goToSettings:function(){this.$router.push({name:"edit_settings"})},goToInputExpenseItem:function(){this.$router.push({name:"user_input_expense_item"})},generateSettingLinkValueHtml:function(){this.settingLinkValue=this.companySettingsArray.industryType+",  "+E["a"].t("DASHBOARD.NUMBER_OF_EMPLOYEES")+this.companySettingsArray.employees+E["a"].t("DASHBOARD.MAN_UNIT")+",  "+E["a"].t("DASHBOARD.BUSINESS_AREA")+this.companySettingsArray.floorSpace+E["a"].t("DASHBOARD.AREA_UNIT")+",  "+E["a"].t("DASHBOARD.SALES_SCALE")+this.companySettingsArray.revenue+"万"+E["a"].t("DASHBOARD.COST_UNIT")},updateToggle:function(){this.toggleSubtree=!1},getExpItmCodeArray:function(t){this.checkedExpenseItemCodeArray=t},draw:function(){var t=this,e={top:50,right:40,bottom:50,left:80},a=879-e.left-e.right,n=785-e.top-e.bottom;l["h"]("svg").remove();var r=l["g"]().domain([0,2e6]).range([0,a-20]),s=l["g"]().domain([70,230]).range([n-255,25]),o=l["h"]("#arc1").append("svg").attr("viewBox","0 0 840 580").append("g").attr("transform","translate(50,20)");o.append("image").attr("xlink:href",this.bgImage).attr("width",a).attr("height",490);var i=this,c=o.selectAll(".dot").data(this.getData).enter().append("g"),d=l["h"]("body").append("div").attr("class","tooltip").style("opacity",0);c.append("circle").attr("class","dot").attr("cx",(function(t){return console.log("XXXXXX",r(1),r(t.x),t.name,t.x),r(t.x)})).attr("cy",(function(t){return console.log("YYYYYYY",s(1),s(t.y),t.name,t.y),s(t.y)})).attr("r",(function(t){return t.radius})).style("fill",(function(t){return t.bgColor})).attr("stroke","#ffffff").attr("filter",(function(t){return"drop-shadow(0px 0px 10px "+t.bgColor+")"})).on("mouseover",(function(){})).on("mouseout",(function(){d.transition().duration(500).style("opacity",0)})),c.append("text").attr("x",(function(t){return r(t.x)-40})).attr("y",(function(t){return s(t.y)-15})),c.selectAll("ellipse").on("click",(function(){t.$store.dispatch("updateExpenseItemYear",{expense_item_year:t.year}),t.$router.push({name:"monthly_expense_details"})})),c.append("foreignObject").attr("x",(function(t){return r(t.x)-40})).attr("y",(function(t){return s(t.y)-15})).attr("width",70).attr("height",40).attr("stroke","black").attr("text-anchor","middle").attr("style","text-align:center").attr("style","padding-left: 10px;").append("xhtml:body").html((function(t){return t.name})).on("mouseover",(function(t){t.hover&&1==t.hover&&(d.transition().duration(200).style("opacity",.9),d.style("left",l["c"].pageX-30+"px").style("top",l["c"].pageY-70+"px").style("font-weight","900"))})).on("mouseout",(function(){d.transition().duration(500).style("opacity",0)})).attr("style","text-align:center;font-size:14px;font-weight:800;color:white;overflow:hidden;background:transparent;cursor:pointer"),c.selectAll("foreignObject").on("click",(function(e){t.$store.dispatch("updateSelectedExpenseItem",{accounts_name_cd:e.accounts_name_cd,expense_item_cd:e.expense_item_cd,expense_item_nm:e.name}),t.$router.push({name:"monthly_expense_details"}),t.$store.dispatch("updateExpenseItemYear",{expense_item_year:t.year})})),o.append("linearGradient").attr("id","line-gradient").attr("gradientUnits","userSpaceOnUse").attr("x1","0%").attr("x2","100%").attr("y1","0%").attr("y2","100%").selectAll("stop").data([{offset:"25%",color:"#B9E6FF"},{offset:"100%",color:"#FCB8BA"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("linearGradient").attr("id","right-line-gradient").attr("gradientUnits","userSpaceOnUse").attr("x1","0%").attr("x2","0%").attr("y1","50%").attr("y2","0%").selectAll("stop").data([{offset:"0%",color:"#B9E6FF"},{offset:"100%",color:"#FCB8BA"}]).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("svg:line").attr("class","left-axis").attr("x1",a-720).attr("x2",a-95).attr("y1",n-180).attr("y2",n-180).attr("marker-end","url(#arrow)").attr("stroke","url(#line-gradient)").attr("stroke-width",(function(){return i.isMobileScreen()?12:7})),o.append("circle").attr("cx",a-773).attr("cy",n-182).attr("r",7).attr("stroke","#3FB0F0").attr("stroke-width","1").attr("fill","none"),o.append("circle").attr("cx",a-773).attr("cy",n-182).attr("r",4).attr("stroke","#3FB0F0").attr("fill","none").attr("stroke-width","1"),o.append("svg:text").attr("x",a-756).attr("y",n-176).text("適正").style("font-size","16").style("font-weight","bold").attr("fill","#3FB0F0"),o.append("svg:text").attr("x",a-60).attr("y",n-176).text("コスト大").style("font-size","16").style("font-weight","bold").attr("fill","#F67C80"),o.append("svg:line").attr("class","right-axis").attr("transform","rotate(0)").attr("x1",-15).attr("x2",-15).attr("y1",n/1.4).attr("y2",n/80).attr("marker-end","url(#up-arrow)").attr("stroke","url(#right-line-gradient)").attr("stroke-width",(function(){return i.isMobileScreen()?12:7})),o.append("svg:text").attr("x",-4).attr("y",-2).text("無駄あり").style("font-size","16").style("font-weight","bold").attr("fill","#F67C80");var p=o.append("defs");p.append("marker").attr("id","arrow").attr("viewBox","0 -5 10 10").attr("refX",0).attr("refY",0).attr("markerWidth",1).attr("markerHeight",1).attr("orient","auto").append("path").attr("d","M0,-5L10,0L0,5").attr("fill","#FCB8BA");var u=o.append("defs");u.append("marker").attr("id","up-arrow").attr("viewBox","0 -5 10 10").attr("refX",0).attr("refY",0).attr("markerWidth",1).attr("markerHeight",1).attr("orient","auto").append("path").attr("d","M0,-5L10,0L0,5").attr("fill","#FCB8BA"),o.append("text").attr("x",a/2).attr("y",n-156).attr("text-anchor","middle").text(this.$t("DASHBOARGRAPHDUPPER")).style("font-weight","700").style("font-size","16"),o.append("text").attr("font-family","FontAwesome").attr("x",-23).attr("y",-2).attr("fill","#F67C80").style("font-size","16").text((function(){return""})),o.append("text").attr("font-family","FontAwesome").attr("x",a-80).attr("y",n-176).attr("fill","#F67C80").style("font-size","16").text((function(){return""})),o.append("text").attr("x","-30").attr("y",n/2-100).attr("text-anchor","middle").text("幅").style("font-weight","700").style("font-size","16"),o.append("text").attr("x","-30").attr("y",n/2-120).attr("text-anchor","middle").text("減").style("font-weight","700").style("font-size","16"),o.append("text").attr("x","-30").attr("y",n/2-140).attr("text-anchor","middle").text("削").style("font-weight","700").style("font-size","16")},showTreeModal:function(){this.$refs["tree-modal"].show()},onExpenseClick:function(){this.showTreeModal()}}},w=k,D=(a("3188"),a("ffc8"),Object(y["a"])(w,o,i,!1,null,"ba44760c",null)),N=D.exports,R=C["a"].get("basic"),L={components:{DashboardComponent:N},data:function(){return{}},mounted:function(){this.getTreeData()},methods:{getTreeData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R.postAPI(T["a"].EVALUATIONCOSTINFOTREELIST,{client_no:localStorage.getItem("client_account_no")});case 2:e=t.sent,a=e.data,a.success&&(n=a.data,this.allTreeData=n,r=[],s=this._.groupBy(n,"accounts_name_nm"),Object.keys(s).forEach((function(t){var e=[];s[t].forEach((function(t){var a={text:t.expense_item_nm,expenseItemCode:t.expense_item_cd,accountsNameCode:t.accounts_name_cd};e.push(a)}));var a={text:t,state:{expanded:!0},children:e};r.push(a)})),this.$store.dispatch("updateTree",r),this.$store.dispatch("costInfoTreeList",this.allTreeData));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},M=L,j=(a("325c"),Object(y["a"])(M,n,r,!1,null,"2656b100",null));e["default"]=j.exports},d6e4:function(t,e,a){},e04f:function(t,e,a){},ffc8:function(t,e,a){"use strict";var n=a("7ef5"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-6abb3020.77b58f32.js.map