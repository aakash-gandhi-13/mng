(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dc6ebea"],{"261d":function(t,e,a){},"3f54":function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));a("7f7f");var s=a("3fba"),n=a("2f4e"),i=a("edfa"),r=a("8992"),c=a("41cb"),o=a("d3a4"),l=a("2b0e"),d=function(t){return console.log("error",t),t.response?401===t.request.status&&l["default"].swal.fire({type:"error",text:o["a"].t("UNAUTHORISED"),icon:"error",confirmButtonText:o["a"].t("LOGIN")}).then((function(t){t&&(r["d"].clear(),c["a"].push("/login"))})):l["default"].swal({type:"warning",text:o["a"].t("NETWORKERROR")}),t},g=function(t){var e=n["a"].MLOGIN,a=n["a"].LOGIN,s=n["a"].EVALUATIONUSERMANAGEMENT,c=n["a"].FORGOTPASSWORD,l=n["a"].MFORGOTPASSWORD,d=n["a"].EVALUATIONCLIENTCOSTEXPANSIONITEMLIST,g=n["a"].CLIENTREADCLIENTPOINTINFO,u=n["a"].DASHBOARD,p=n["a"].INTEGRATIONCLIENTDETAILS,m=n["a"].INTEGRATIONREADJOURNALSTATUS,f=n["a"].EVALUATIONEXPENSEITEMCOMPAISON,h=n["a"].INTEGRATIONREFRESHTOKEN,_=n["a"].EVALUATIONCOSTINFOTREELIST,b=n["a"].EVALUATIONCOMPANYJUDGEMENTCOMPARISON,v=n["a"].EVALUATIONEXPENSEITEMCOMPAISON,T=n["a"].EVALUATIONREADEXPENSISYEAR,C=n["a"].EVALUATIONREADYEARLYCOSTINFO;return 200==t.request.status&&t.data.success||t.config.url=="".concat(i["a"].apiUrl).concat(e)||t.config.url=="".concat(i["a"].apiUrl).concat(a)||t.config.url=="".concat(i["a"].apiUrl).concat(c)||t.config.url=="".concat(i["a"].apiUrl).concat(l)||t.config.url=="".concat(i["a"].apiUrl).concat(s)||t.config.url=="".concat(i["a"].apiUrl).concat(d)||t.config.url=="".concat(i["a"].apiUrl).concat(g)||t.config.url=="".concat(i["a"].apiUrl).concat(u)||t.config.url=="".concat(i["a"].apiUrl).concat(p)||t.config.url=="".concat(i["a"].apiUrl).concat(m)||t.config.url=="".concat(i["a"].apiUrl).concat(f)||t.config.url=="".concat(i["a"].apiUrl).concat(h)||t.config.url=="".concat(i["a"].apiUrl).concat(b)||t.config.url=="".concat(i["a"].apiUrl).concat(v)||t.config.url=="".concat(i["a"].apiUrl).concat(T)||t.config.url=="".concat(i["a"].apiUrl).concat(C)||t.config.url=="".concat(i["a"].apiUrl).concat(_)||Object(r["l"])(o["a"].t("ERRORMESSAGE")),t};s["a"].interceptors.response.use((function(t){return g(t)}),(function(t){return d(t)}));var u={getGroupTypes:function(t){return s["a"].post("".concat(n["a"].GROUPTYPESLIST),t)},postAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(r["a"])()),s["a"].post("".concat(i["a"].apiUrl).concat(t),e,{headers:n})},getAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(r["a"])()),s["a"].get("".concat(i["a"].apiUrl).concat(t),{params:e,headers:n})},getCourses:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};return e&&(a=Object(r["a"])()),s["a"].get("".concat(n["a"].COURSE),{params:t,headers:a})},putAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(r["a"])()),s["a"].put("".concat(i["a"].apiUrl).concat(t),e,{headers:n})},deleteAPI:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n={};return a&&(n=Object(r["a"])()),s["a"].delete("".concat(i["a"].apiUrl).concat(t),{params:e,headers:n})}},p={basic:u},m={get:function(t){return p[t]}}},"5d9b":function(t,e,a){t.exports=a.p+"img/Subsidy.f3678c4b.png"},"6a29":function(t,e,a){"use strict";var s=a("261d"),n=a.n(s);n.a},"6d39":function(t,e,a){t.exports=a.p+"img/arrow-icon02.2abe508c.svg"},"7f7f":function(t,e,a){var s=a("86cc").f,n=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in n||a("9e1e")&&s(n,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},c1ff:function(t,e,a){t.exports=a.p+"img/Notification.26f44e36.png"},e80d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"content"},[s("div",{staticClass:"d-none d-md-none d-lg-flex"},[s("b-button",{staticClass:"mntborder",class:{mntbtn:t.activeClassFlg,mnt2btn:t.notActiveFlg},on:{click:function(e){return t.unReadList()}}},[t._v(t._s(t.$t("UNREADLIST"))+" ")]),s("b-button",{staticClass:"border-radius-imprv",class:{mntbtn:t.notActiveFlg,mnt2btn:t.activeClassFlg},on:{click:function(e){return t.ReadList()}}},[t._v(t._s(t.$t("READLIST"))+" ")])],1),s("br"),s("div",{staticClass:"d-md-flex d-lg-none d-flex align-content-item justify-content-center"},[s("b-button",{staticClass:"mntborder",class:{mntbtn:t.activeClassFlg,mnt2btn:t.notActiveFlg},on:{click:function(e){return t.unReadList()}}},[t._v(t._s(t.$t("UNREADLIST"))+" ")]),s("b-button",{staticClass:"border-radius-imprv",class:{mntbtn:t.notActiveFlg,mnt2btn:t.activeClassFlg},on:{click:function(e){return t.ReadList()}}},[t._v(t._s(t.$t("READLIST"))+" ")])],1),s("br"),t._l(t.messages,(function(e){return[s("div",{key:e.id,staticClass:"card-margin"},[s("b-row",{staticClass:"d-none d-md-none d-lg-flex dropdownToggleBody mx-auto mb-3"},[s("b-row",[s("span",{staticClass:"thumbnailLogo ml-4 mt-2"},["002"==e.messageType?s("img",{attrs:{src:a("f4b1"),width:"100%"}}):"006"==e.messageType?s("img",{attrs:{src:a("5d9b"),width:"100%"}}):s("img",{attrs:{src:a("c1ff"),width:"100%"}})])]),s("div",{staticClass:"pd-23"},[s("b-row",{staticClass:"ml-1 mb-1 mt-2",class:e.message1.length>15?"mobileMargin":""},[t._v(" "+t._s(e.time)+" ")]),s("b-row",{staticClass:"mb-2 pl-1 messageClass",class:e.message1.length>15?"padingAllign messageClass":""},["002"==e.messageType||"006"==e.messageType?s("b-col",[s("span",{domProps:{innerHTML:t._s(t.sliceText(e.message1))}})]):s("b-col",[t.expendedId&&t.expendedId==e.id?s("span",{domProps:{innerHTML:t._s(e.message1)}}):s("span",{domProps:{innerHTML:t._s(t.sliceText(e.message1))}})])],1)],1),s("b-col",{staticClass:"float-right align-items-center d-flex justify-content-end"},[t.expendedId&&t.expendedId==e.id?s("b-link",{staticClass:"card-link float-right link",attrs:{href:"javascript:;"},on:{click:function(e){return t.readLess()}}},[s("img",{attrs:{src:a("6d39"),width:"50%"}})]):s("b-link",{staticClass:"card-link float-right link",attrs:{href:"javascript:;"},on:{click:function(a){return t.readMore(e.id,e.messageType,e.id,e.reductionProposalNumber)}}},[s("img",{attrs:{src:a("6d39"),width:"50%"}})])],1)],1),s("b-row",{staticClass:"d-lg-none d-md-flex dropdownToggleBody mb-3 mx-auto"},[s("b-col",{staticClass:"align-items-center d-flex justify-content-start ml-3",attrs:{cols:"1"}},[s("div",{staticClass:"thumbnailLogo"},["002"==e.messageType?s("img",{attrs:{src:a("f4b1"),width:"100%"}}):"006"==e.messageType?s("img",{attrs:{src:a("5d9b"),width:"100%"}}):s("img",{attrs:{src:a("c1ff"),width:"100%"}})])]),s("b-col",{staticClass:"mobileAdjust",attrs:{cols:"10"}},[t.expendedId&&t.expendedId==e.id?s("div",{staticClass:"pd-23",on:{click:function(e){return t.readLess()}}},[s("b-row",{staticClass:"ml-1 mb-1 mt-3"},[t._v(" "+t._s(e.time)+" ")]),s("b-row",{staticClass:"mb-3 pl-1 messageClass"},["002"==e.messageType||"006"==e.messageType?s("b-col",[s("span",{domProps:{innerHTML:t._s(t.sliceText(e.message1))}})]):s("b-col",[t.expendedId&&t.expendedId==e.id?s("span",{domProps:{innerHTML:t._s(e.message1)}}):s("span",{domProps:{innerHTML:t._s(t.sliceText(e.message1))}})])],1)],1):s("div",{staticClass:"pd-23",on:{click:function(a){return t.readMore(e.id,e.messageType,e.id,e.reductionProposalNumber)}}},[s("b-row",{staticClass:"ml-1 mb-1 mt-3"},[t._v(" "+t._s(e.time)+" ")]),s("b-row",{staticClass:"mb-3 pl-1 messageClass"},["002"==e.messageType||"006"==e.messageType?s("b-col",{staticClass:"pr-0"},[s("span",{domProps:{innerHTML:t._s(t.sliceText(e.message1))}})]):s("b-col",[t.expendedId&&t.expendedId==e.id?s("span",{domProps:{innerHTML:t._s(e.message1)}}):s("span",{domProps:{innerHTML:t._s(t.sliceText(e.message1))}})])],1)],1)]),s("b-col",{staticClass:"float-right align-items-center d-none d-lg-flex d-md-none justify-content-end",attrs:{cols:"1"}},[t.expendedId&&t.expendedId==e.id?s("b-link",{staticClass:"card-link float-right link",attrs:{href:"javascript:;"},on:{click:function(e){return t.readLess()}}},[s("img",{attrs:{src:a("6d39")}})]):s("b-link",{staticClass:"card-link float-right link",attrs:{href:"javascript:;"},on:{click:function(a){return t.readMore(e.id,e.messageType,e.id,e.reductionProposalNumber)}}},[s("img",{attrs:{src:a("6d39")}})])],1)],1)],1)]})),s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"row mt-3"},[t.messages.length>0?s("div",{staticClass:"col-md-12"},[s("nav",[s("ul",{staticClass:"pagination mr-2"},[s("li",{staticClass:"page-item d-flex justify-content-center",class:{disabled:!t.pagination.prev_link}},[s("span",{staticClass:"page-link textClass",attrs:{role:"menuitem","aria-label":"Go to previous page","aria-disabled":"true"},on:{click:function(e){return t.getNotificationMessagesList(t.pagination.prev_link,"link_type_string")}}},[s("i",{staticClass:"fa fa-caret-left text-muted mr-2",attrs:{"data-v-171636d7":"","aria-hidden":"true"}}),t._v(" 前へ")])]),t._l(t.pagination.last_page,(function(e){return[1==e?s("li",{key:e,staticClass:"page-item ml-3",class:{active:t.pagination.current_page==e}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return t.getNotificationMessagesList(e)}}},[t._v(t._s(e))])]):e<t.pagination.current_page+2&&e>t.pagination.current_page-2?s("li",{key:e,staticClass:"page-item ml-2",class:{active:t.pagination.current_page==e}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return t.getNotificationMessagesList(e)}}},[t._v(t._s(e))])]):2==e?s("li",{key:e,staticClass:"page-item ml-2"},[s("a",{staticClass:"page-link",attrs:{href:"javascript:void(0);"}},[t._v("...")])]):e==t.pagination.last_page-1?s("li",{key:e,staticClass:"page-item ml-2"},[s("a",{staticClass:"page-link",attrs:{href:"javascript:void(0);"}},[t._v("...")])]):e==t.pagination.last_page?s("li",{key:e,staticClass:"page-item ml-2"},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return t.getNotificationMessagesList(e)}}},[t._v(t._s(e))])]):t._e()]})),s("li",{staticClass:"page-item ml-2",class:{disabled:!t.pagination.next_link}},[s("span",{staticClass:"page-link textClass",attrs:{role:"menuitem","aria-label":"Go to previous page","aria-disabled":"true"},on:{click:function(e){return t.getNotificationMessagesList(t.pagination.next_link,"link_type_string")}}},[t._v(" 次へ"),s("i",{staticClass:"fa fa-caret-right text-muted ml-2",attrs:{"data-v-171636d7":"","aria-hidden":"true"}})])])],2)])]):s("div",{staticClass:"col-md-12"},[t._v(" "+t._s(t.$t("NOUNREADMESSAGES"))+" ")])])])],2)},n=[],i=(a("f751"),a("ac6a"),a("a481"),a("96cf"),a("3b8d")),r=(a("4917"),a("3f54")),c=a("edfa"),o=a("3fba"),l=a("1315"),d=a("2f4e"),g=r["a"].get("basic");l["Settings"].defaultLocale="ja";var u={name:"ReductionProposal",components:{},data:function(){return{activeClassFlg:!0,notActiveFlg:!1,perPage:3,currentPage:1,expendedId:"",disabled:!1,reductionProposalNumber:"",messages:[],onlyRead:!1,allMessages:["00"],pagination:{},loading:!1}},computed:{rows:function(){return this.messages.length},lists:function(){var t=this.messages;return t.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},isMobileScreen:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPadpro/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},getScreenWidth:function(){return window.screen.width}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getNotificationMessagesList();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),created:function(){},methods:{unReadList:function(){this.activeClassFlg=!0,this.notActiveFlg=!1,this.onlyRead=!1,this.filterByRead()},ReadList:function(){this.activeClassFlg=!1,this.notActiveFlg=!0,this.onlyRead=!0,this.filterByRead()},getNotificationMessagesList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a){var s,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n="".concat(c["a"].apiUrl),this.loading=!0,this.disabled=!0,"link_type_string"!=a){t.next=11;break}return i=e.replace(n,""),this.session_id=localStorage.getItem("client_account_no"),t.next=8,o["a"].post(i,{client_no:this.session_id,status_array:this.allMessages});case 8:s=t.sent,t.next=15;break;case 11:return this.session_id=localStorage.getItem("client_account_no"),t.next=14,o["a"].post("".concat(d["a"].MESSAGELIST,"?page=").concat(e),{client_no:this.session_id,status_array:this.allMessages});case 14:s=t.sent;case 15:this.loading=!1,this.disabled=!1,r=[],this.pagination={current_page:s.data.data.current_page,last_page:s.data.data.last_page,from_page:s.data.data.from,to_page:s.data.data.to,total_page:s.data.data.total,path_page:s.data.data.path+"?page=",first_link:s.data.data.first_page_url,last_link:s.data.data.last_page_url,prev_link:s.data.data.prev_page_url,next_link:s.data.data.next_page_url},s.data.data.data.forEach((function(t){var e={id:t.message_no,isSeen:t.message_sts_kbn,message1:t.message_text?t.message_text:"",title:t.message_title?t.message_title:"",time:t.message_dt.slice(0,4)+"/"+t.message_dt.slice(6,7)+"/"+t.message_dt.slice(8,10),messageType:t.message_type,reductionProposalNumber:"002"==t.message_type?t.reduction_proposal_no:t.assess_req_no};r.push(e)})),this.messages=r;case 21:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),filterByRead:function(){var t=this;setTimeout((function(){t.onlyRead?(t.allMessages=["00","01"],t.getNotificationMessagesList()):(t.allMessages=["00"],t.getNotificationMessagesList())}),0)},getUnreadNotifications:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.postAPI(d["a"].MESSAGEREDORUNREDCOUNT,{client_no:localStorage.getItem("client_account_no")});case 2:e=t.sent,a=e.data,a.success&&this.$store.dispatch("updateUnreadMessages",{unread_messages:a.data.messageCount});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),readMore:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,a,s,n){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.postAPI(d["a"].MESSAGEMARKED,{message_no:s});case 2:if(i=t.sent,r=i.data,r.success&&(console.log("MarkRead Updated to DB",this.messages),this.messages=this._.map(this.messages,(function(t){return t.id==s?Object.assign(t,{isSeen:!0}):t})),this.getUnreadNotifications()),"002"!=a){t.next=8;break}return this.$store.dispatch("updateProposalInfo",{message_no:e,proposal_no:n||"",message_type:a}),t.abrupt("return",this.$router.push({name:"proposal_message"}));case 8:if("006"!=a){t.next=12;break}return console.log("assess_req_no",n),this.$store.dispatch("updateProposalInfo",{message_no:e,proposal_no:n||"",message_type:a}),t.abrupt("return",this.$router.push({name:"notification_subsidy_assess_msg_detail"}));case 12:this.expendedId=s;case 13:case"end":return t.stop()}}),t,this)})));function e(e,a,s,n){return t.apply(this,arguments)}return e}(),readLess:function(){this.expendedId=""},isLargeText:function(t){return t.length>80},sliceText:function(t){return this.isMobileScreen?t.length>=40?t.slice(0,30)+"・・・":t:t.length>=80?t.slice(0,55)+"・・・":t}}},p=u,m=(a("6a29"),a("2877")),f=Object(m["a"])(p,s,n,!1,null,"10496dc7",null);e["default"]=f.exports},f4b1:function(t,e,a){t.exports=a.p+"img/ReductionProposal.82d28db6.png"}}]);
//# sourceMappingURL=chunk-7dc6ebea.afb3a3c1.js.map