(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40922d2b"],{"052e":function(t,e,a){"use strict";var s=a("6a87"),n=a.n(s);n.a},"1d94":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.pageloading?a("div",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-spinner fa-spin fa-2x"})]):a("b-card",[a("b-row",[a("b-col",[a("label",{staticClass:"label"},[t._v(" "+t._s(t.$t("TASKINFORMATION"))+" ")])])],1),a("b-form",[a("div",{staticStyle:{overflow:"auto"}},[a("b-row",{staticClass:"ml-2 d-flex align-items-center justify-content-between"},[a("b-col",{staticClass:"pl-0 pr-0 mb-1"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.TASKNAME")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form11",disabled:""},model:{value:t.taskDetailsInfo.taskName,callback:function(e){t.$set(t.taskDetailsInfo,"taskName",e)},expression:"taskDetailsInfo.taskName"}})],1)],1),a("b-col",{staticClass:"pl-0 pr-0 mb-1",attrs:{cols:"12",sm:"6",lg:"3"}},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0 tableManner",attrs:{prepend:t.$t("TASK.PROCESSINGDATETIME")}},[a("b-input",{staticClass:"backgroundDisable pr-0 pl-1",attrs:{id:"inline-form12",disabled:""},model:{value:t.taskDetailsInfo.processingDateTime,callback:function(e){t.$set(t.taskDetailsInfo,"processingDateTime",e)},expression:"taskDetailsInfo.processingDateTime"}})],1)],1),a("b-col",{staticClass:"pl-0 pr-0 mb-1"},[a("div",{staticClass:"d-flex align-items-center justify-content-between"},[a("span",{staticClass:"p-2 w-70 input-group-text modalSelection"},[t._v(t._s(t.$t("TASK.PERSONINCHARGE"))+" ")]),a("span",{staticClass:"w-30 mr-1"},[a("b-input-group",{staticClass:"d-flex justify-content-between w-220"},[a("b-input",{staticClass:"backgroundDisable pr-0 pl-2 modalWork",attrs:{disabled:""},model:{value:t.taskDetailsInfo.personInCharge,callback:function(e){t.$set(t.taskDetailsInfo,"personInCharge",e)},expression:"taskDetailsInfo.personInCharge"}}),a("b-button",{staticClass:"btn-primary d-inline-block modalButton",attrs:{disabled:!t.getContentAccess(),size:"sm",variant:"primary"},on:{click:t.showPersonModal}},[t._v(t._s(t.$t("TASK.PERSONINCHARGESELECT")))])],1)],1)])]),a("b-col",{staticClass:"pl-0 pr-0 mb-1"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.TASKSTATUS")}},[a("b-form-select",{attrs:{disabled:!t.getContentAccess(),options:t.options},model:{value:t.taskDetailsInfo.taskStatus,callback:function(e){t.$set(t.taskDetailsInfo,"taskStatus",e)},expression:"taskDetailsInfo.taskStatus"}})],1)],1)],1)],1)]),a("br"),a("b-button",{attrs:{disabled:!t.getContentAccess(),variant:"primary"},on:{click:t.updateTaskData}},[t._v(t._s(t.$t("UPDATE"))),t.loading?a("i",{staticClass:"fa fa-spinner fa-spin"}):t._e()]),a("hr",{staticClass:"hrBarType"}),a("b-row",[a("b-col",[a("label",{staticClass:"label"},[t._v(" "+t._s(t.$t("DETAILSINFORMATION"))+" ")])])],1),a("b-form",[a("b-row",[a("b-col",{attrs:{cols:"12",xl:"6"}},[a("div",{staticClass:"bindInputGroup"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.REQUESTDATETIME")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form1",disabled:""},model:{value:t.expenseDetailsInfo.requestDateTime,callback:function(e){t.$set(t.expenseDetailsInfo,"requestDateTime",e)},expression:"expenseDetailsInfo.requestDateTime"}})],1)],1),a("div",{staticClass:"bindInputGroup"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.EXPENSEITEM")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form2",disabled:""},model:{value:t.expenseDetailsInfo.expenseItemName,callback:function(e){t.$set(t.expenseDetailsInfo,"expenseItemName",e)},expression:"expenseDetailsInfo.expenseItemName"}})],1)],1),a("div",{staticClass:"bindInputGroup"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.COMPANYNAME")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form3",disabled:""},model:{value:t.expenseDetailsInfo.companyName,callback:function(e){t.$set(t.expenseDetailsInfo,"companyName",e)},expression:"expenseDetailsInfo.companyName"}})],1)],1),a("div",{staticClass:"bindInputGroup"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.INDUSTRY")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form4",disabled:""},model:{value:t.expenseDetailsInfo.industry,callback:function(e){t.$set(t.expenseDetailsInfo,"industry",e)},expression:"expenseDetailsInfo.industry"}})],1)],1),a("div",{staticClass:"bindInputGroup"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.PREFECTURES")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form5",disabled:""},model:{value:t.expenseDetailsInfo.prefectures,callback:function(e){t.$set(t.expenseDetailsInfo,"prefectures",e)},expression:"expenseDetailsInfo.prefectures"}})],1)],1)]),a("b-col",{attrs:{cols:"12",xl:"6"}},[a("div",{staticClass:"bindInputGroup"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.EXPENSEITEMAMOUNT")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form6",disabled:""},model:{value:t.expenseDetailsInfo.expenseItemAmount,callback:function(e){t.$set(t.expenseDetailsInfo,"expenseItemAmount",e)},expression:"expenseDetailsInfo.expenseItemAmount"}})],1)],1),a("div",{staticClass:"bindInputGroup"},[a("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:t.$t("TASK.REDUCEABLEAMOUNT")}},[a("b-input",{staticClass:"backgroundDisable",attrs:{id:"inline-form7",disabled:""},model:{value:t.expenseDetailsInfo.reduceableAmount,callback:function(e){t.$set(t.expenseDetailsInfo,"reduceableAmount",e)},expression:"expenseDetailsInfo.reduceableAmount"}})],1)],1),a("div",{staticClass:"bindInputGroup"},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"md"},on:{click:t.goToReductionProposal}},[t._v(t._s(t.$t("CUSTOMERSERVICE")))])],1)])],1)],1)],1),a("b-modal",{ref:"person-modal",attrs:{id:"person-modal","hide-footer":!0,centered:"",variant:"secondary","modal-class":"py-0","body-class":"py-0",size:"md","footer-class":"border-0","header-class":"border-0 bg-white pd-0","button-size":"sm","hide-header-close":""},scopedSlots:t._u([{key:"modal-header",fn:function(e){var s=e.cancel;return[a("div",{staticClass:"title-fw title-fs text-dark ml-2 mt-2"},[t._v(" "+t._s(t.$t("SELECTCONTACT"))+" ")]),a("div",{staticClass:"w-75 d-flex justify-content-end"},[a("b-button",{staticClass:"back-btn close-btn mt-2",attrs:{variant:"primary"},on:{click:s}},[t._v(t._s(t.$t("CLOSE")))])],1)]}}])},[a("b-card",{staticClass:"pop-up-box"},[a("b-row",[a("b-col",[a("b-form-group",[a("b-form-radio-group",{staticClass:"radioControl mb-3 pt-2",attrs:{id:"radio-group-1",options:t.searchSelect,size:"md",stacked:""},model:{value:t.selectedPersonID,callback:function(e){t.selectedPersonID=e},expression:"selectedPersonID"}})],1)],1)],1)],1),a("b-row",[a("b-col",{staticClass:"text-center mb-2",attrs:{cols:"12"}},[a("b-button",{staticClass:"float-right",attrs:{variant:"primary"},on:{click:t.getSelectedPerson}},[t._v(t._s(t.$t("SELECT"))+" ")])],1)],1)],1)],1)},n=[],r=(a("8e6e"),a("ac6a"),a("cadf"),a("456d"),a("6b54"),a("a481"),a("7514"),a("96cf"),a("3b8d")),o=a("bd86"),i=a("3f54"),c=a("8992"),l=a("2f62"),u=a("1315"),p=a("2f4e");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b=i["a"].get("basic");u["Settings"].defaultLocale="ja";var m={name:"TaskDetails",components:{},data:function(){return{selectedPerson:{},selectedPersonID:"",searchSelect:[],defaultDataItem:{item:"",value:""},pageloading:!1,loading:!1,getAccessControl:!0,options:[{value:"01",text:this.$t("UNPROCESSED")},{value:"02",text:this.$t("PROCESSING")},{value:"03",text:this.$t("PROCESSED")}],taskType:{"001":this.$t("REQUESTQUOTATIONTASK"),"002":this.$t("CONTRACTTASK")},taskDetailsInfo:{},expenseDetailsInfo:{}}},computed:f({},Object(l["b"])({task_data:"getTaskDetails"})),validations:{},mounted:function(){},created:function(){this.getPersonIncharge(),this.getTaskDetails()},methods:{showPersonModal:function(){this.selectedPersonID="",this.$refs["person-modal"].show()},getPersonIncharge:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=localStorage.getItem("personCompanyID"),t.next=3,b.postAPI(p["a"].MASTERREADMPERSON,{fieldlist:["person_id","person_name"],conditions:[{key:"person_company",value:e}]});case 3:for(a=t.sent,s=a.data,n=s.data,this.searchSelect=[],r=0;r<n.length;r++)this.searchSelect.push({value:n[r].person_id,text:n[r].person_name});case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSelectedPerson:function(){this.$refs["person-modal"].hide();var t=this._.find(this.searchSelect,{value:this.selectedPersonID});t&&(this.selectedPerson={personID:t.value?t.value:"",personName:t.text?t.text:""},this.taskDetailsInfo.personInCharge=this.selectedPerson.personName)},getContentAccess:function(){var t=localStorage.getItem("person_auth"),e=this.taskDetailsInfo.taskPersonId,a=localStorage.getItem("personID");return"02"==t||null!=e&&e==a},getDateFormat:function(t){return t?t.slice(0,4)+"/"+t.slice(5,7)+"/"+t.slice(8,10)+" "+t.slice(11,16):""},goToReductionProposal:function(){localStorage.setItem("activeTab",10),this.$store.dispatch("setClientData",{client_name:this.expenseDetailsInfo.companyName,client_no:this.expenseDetailsInfo.client_no}),this.$router.push({name:"client_process"})},updateTaskData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,e={conditions:{task_no:this.taskDetailsInfo.taskNo,task_type:this.taskDetailsInfo.taskType},data:{task_kbn:this.taskDetailsInfo.taskStatus,task_person_id:this.selectedPerson.personID?this.selectedPerson.personID:this.taskDetailsInfo.taskPersonId,task_body_no:this.taskDetailsInfo.taskBodyNo,task_dt:Object(c["i"])(new Date),update_id:localStorage.getItem("personID"),update_dt:Object(c["i"])(new Date)}},t.next=4,b.postAPI(p["a"].TASKUPDATETASKANDTYPETABLE,e);case 4:a=t.sent,s=a.data,this.loading=!1,s.success&&this.$router.push({name:"admin_dasboard"});case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filterByCurrency:function(t){try{return parseInt(t).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}catch(e){return 0}},bindTaskPersonData:function(){var t=this.taskDetailsInfo.taskPersonId,e=this._.find(this.searchSelect,{value:t});if(e)this.defaultDataItem=e;else{var a={text:this.taskDetailsInfo.personInCharge?this.taskDetailsInfo.personInCharge:"",value:this.taskDetailsInfo.taskPersonId?this.taskDetailsInfo.taskPersonId:""};this.searchSelect.push(a),this.defaultDataItem=a}},getTaskDetails:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.pageloading=!0,t.next=3,b.postAPI(p["a"].TASKTASKDETAILCOSTREDUCTION,{task_no:this.task_data.task_no,task_type:this.task_data.task_type,client_no:this.task_data.client_no});case 3:e=t.sent,a=e.data,this.pageloading=!1,s=a.data[0],this.taskDetailsInfo={taskNo:s.task_no,taskType:s.task_type,taskBodyNo:s.task_body_no,taskName:s.task_type?this.taskType[s.task_type]:"",taskPersonId:s.task_person_id?s.task_person_id:"",processingDateTime:s.task_dt?this.getDateFormat(s.task_dt):"",personInCharge:s.person_name?s.person_name:"",taskStatus:s.task_kbn},this.expenseDetailsInfo={client_no:s.client_no,expenseItemName:s.expense_item_nm?s.expense_item_nm:"",companyName:s.client_name?s.client_name:"",industry:s.industry_nm?s.industry_nm:"",prefectures:s.prefectures?s.prefectures:"",requestDateTime:s.create_dt?this.getDateFormat(s.create_dt):"",expenseItemAmount:s.cost?this.filterByCurrency(parseFloat(s.cost))+this.$t("YEN"):"",reduceableAmount:s.cost?this.filterByCurrency(parseFloat(s.cost)-parseFloat(s.reduction_proposal_cost))+this.$t("YEN"):""};case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},I=m,g=(a("052e"),a("2877")),h=Object(g["a"])(I,s,n,!1,null,"4d8f4873",null);e["default"]=h.exports},"3f54":function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));a("7f7f");var s=a("3fba"),n=a("2f4e"),r=a("edfa"),o=a("8992"),i=a("41cb"),c=a("d3a4"),l=a("2b0e"),u=function(t){return console.log("error",t),t.response?401===t.request.status&&l["default"].swal.fire({type:"error",text:c["a"].t("UNAUTHORISED"),icon:"error",confirmButtonText:c["a"].t("LOGIN")}).then((function(t){t&&(o["d"].clear(),i["a"].push("/login"))})):l["default"].swal({type:"warning",text:c["a"].t("NETWORKERROR")}),t},p=function(t){var e=n["a"].MLOGIN,a=n["a"].LOGIN,s=n["a"].EVALUATIONUSERMANAGEMENT,i=n["a"].FORGOTPASSWORD,l=n["a"].MFORGOTPASSWORD,u=n["a"].EVALUATIONCLIENTCOSTEXPANSIONITEMLIST,p=n["a"].CLIENTREADCLIENTPOINTINFO,d=n["a"].DASHBOARD,f=n["a"].INTEGRATIONCLIENTDETAILS,b=n["a"].INTEGRATIONREADJOURNALSTATUS,m=n["a"].EVALUATIONEXPENSEITEMCOMPAISON,I=n["a"].INTEGRATIONREFRESHTOKEN,g=n["a"].EVALUATIONCOSTINFOTREELIST,h=n["a"].EVALUATIONCOMPANYJUDGEMENTCOMPARISON,D=n["a"].EVALUATIONEXPENSEITEMCOMPAISON,k=n["a"].EVALUATIONREADEXPENSISYEAR,T=n["a"].EVALUATIONREADYEARLYCOSTINFO;return 200==t.request.status&&t.data.success||t.config.url=="".concat(r["a"].apiUrl).concat(e)||t.config.url=="".concat(r["a"].apiUrl).concat(a)||t.config.url=="".concat(r["a"].apiUrl).concat(i)||t.config.url=="".concat(r["a"].apiUrl).concat(l)||t.config.url=="".concat(r["a"].apiUrl).concat(s)||t.config.url=="".concat(r["a"].apiUrl).concat(u)||t.config.url=="".concat(r["a"].apiUrl).concat(p)||t.config.url=="".concat(r["a"].apiUrl).concat(d)||t.config.url=="".concat(r["a"].apiUrl).concat(f)||t.config.url=="".concat(r["a"].apiUrl).concat(b)||t.config.url=="".concat(r["a"].apiUrl).concat(m)||t.config.url=="".concat(r["a"].apiUrl).concat(I)||t.config.url=="".concat(r["a"].apiUrl).concat(h)||t.config.url=="".concat(r["a"].apiUrl).concat(D)||t.config.url=="".concat(r["a"].apiUrl).concat(k)||t.config.url=="".concat(r["a"].apiUrl).concat(T)||t.config.url=="".concat(r["a"].apiUrl).concat(g)||Object(o["l"])(c["a"].t("ERRORMESSAGE")),t};s["a"].interceptors.response.use((function(t){return p(t)}),(function(t){return u(t)}));var d={getGroupTypes:function(t){return s["a"].post("".concat(n["a"].GROUPTYPESLIST),t)},postAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(o["a"])()),s["a"].post("".concat(r["a"].apiUrl).concat(t),e,{headers:n})},getAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(o["a"])()),s["a"].get("".concat(r["a"].apiUrl).concat(t),{params:e,headers:n})},getCourses:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};return e&&(a=Object(o["a"])()),s["a"].get("".concat(n["a"].COURSE),{params:t,headers:a})},putAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(o["a"])()),s["a"].put("".concat(r["a"].apiUrl).concat(t),e,{headers:n})},deleteAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(o["a"])()),s["a"].delete("".concat(r["a"].apiUrl).concat(t),{params:e,headers:n})}},f={basic:d},b={get:function(t){return f[t]}}},"454f":function(t,e,a){a("46a7");var s=a("584a").Object;t.exports=function(t,e,a){return s.defineProperty(t,e,a)}},"46a7":function(t,e,a){var s=a("63b6");s(s.S+s.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"6a87":function(t,e,a){},"7f7f":function(t,e,a){var s=a("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,o="name";o in n||a("9e1e")&&s(n,o,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"85f2":function(t,e,a){t.exports=a("454f")},"8e6e":function(t,e,a){var s=a("5ca1"),n=a("990b"),r=a("6821"),o=a("11e9"),i=a("f1ae");s(s.S,"Object",{getOwnPropertyDescriptors:function(t){var e,a,s=r(t),c=o.f,l=n(s),u={},p=0;while(l.length>p)a=c(s,e=l[p++]),void 0!==a&&i(u,e,a);return u}})},"990b":function(t,e,a){var s=a("9093"),n=a("2621"),r=a("cb7c"),o=a("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=s.f(r(t)),a=n.f;return a?e.concat(a(t)):e}},bd86:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("85f2"),n=a.n(s);function r(t,e,a){return e in t?n()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}}]);
//# sourceMappingURL=chunk-40922d2b.f46d7c9b.js.map