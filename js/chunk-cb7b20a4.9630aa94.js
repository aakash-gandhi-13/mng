(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb7b20a4"],{"16ef":function(t,e,a){},"18a0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content",attrs:{id:"background"}},[n("div",{staticClass:"app flex-row align-items-center"},[n("div",{staticClass:"container"},[n("b-row",{staticClass:"justify-content-center mb-5"},[n("b-col",{attrs:{md:"5",lg:"4",xl:"4"}},[n("div",{staticClass:"text-center mb-4"},[n("img",{staticClass:"navbar-brand-full p-1",attrs:{src:a("8c6f"),width:"55%",alt:"Expense Reduction Management Logo"}})]),n("b-card-group",[n("b-card",{staticClass:"p-1 pc-view",attrs:{"no-body":""}},[n("b-card-body",[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("p",{staticClass:"text-center text-danger"},[t._v(t._s(t.loginValidation))]),n("div",{staticClass:"mb-1"},[n("b-form-group",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-button",{staticClass:"required-btn",attrs:{variant:"primary"}},[t._v(t._s(t.$t("REQUIREDBUTTON")))]),n("label",{staticClass:"line-3 ml-1 txtColor"},[t._v(t._s(t.$t("USERID")))])],1),n("b-col",{attrs:{cols:"12"}},[n("b-input-group",{staticClass:"mb-1 mt-1"},[n("b-input",{staticClass:"form-control bgColor sp-view",attrs:{id:"input-id",type:"text"},model:{value:t.$v.login.login_id.$model,callback:function(e){t.$set(t.$v.login.login_id,"$model","string"===typeof e?e.trim():e)},expression:"$v.login.login_id.$model"}})],1),n("show-errors",{attrs:{control:t.$v.login.login_id,field:t.$t("USERID")}})],1)],1)],1),n("b-form-group",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-button",{staticClass:"px-4 required-btn",attrs:{variant:"primary"}},[t._v(t._s(t.$t("REQUIREDBUTTON")))]),n("label",{staticClass:"line-3 ml-1 txtColor"},[t._v(t._s(t.$t("PASSWORD")))])],1),n("b-col",{attrs:{cols:"12"}},[n("b-input-group",{staticClass:"mb-1 mt-1"},[n("b-form-input",{staticClass:"form-control bgColor sp-view",attrs:{id:"input-pwd",type:"password",autocomplete:"password"},model:{value:t.$v.login.password.$model,callback:function(e){t.$set(t.$v.login.password,"$model","string"===typeof e?e.trim():e)},expression:"$v.login.password.$model"}})],1),n("show-errors",{attrs:{control:t.$v.login.password,field:t.$t("PASSWORD")}})],1)],1)],1)],1),n("b-row",[n("b-col",{staticClass:"text-center mb-3",attrs:{cols:"12"}},[n("b-button",{staticClass:"px-4 login-btn",attrs:{variant:"primary",type:"submit"}},[t._v(t._s(t.$t("LOGIN")))])],1),n("b-col",{staticClass:"text-center",attrs:{cols:"12"}},[t.isAdmin?n("b-link",{staticClass:"px-0",attrs:{variant:"link",to:"/reset/password/request"}},[n("u",{staticClass:"linkTxt"},[t._v(t._s(t.$t("FORGETPASSWORD")))])]):n("b-link",{staticClass:"px-0",attrs:{variant:"primary",to:"/reset/password/request"}},[n("u",{staticClass:"linkTxt"},[t._v(t._s(t.$t("FORGETPASSWORD")))])])],1)],1)],1)],1)],1)],1)],1)],1),n("div",{staticClass:"justify-content-center text-center footerDispaly"},[n("span",{staticClass:"text-center textColor"},[t._v(t._s(t.$t("COPYRIGHT")))])])],1)])])},o=[],s=(a("96cf"),a("3b8d")),i=(a("6762"),a("2fdb"),a("b5ae")),c=a("c827"),l=a("3f54"),r=a("8992"),d=a("2f4e"),u=l["a"].get("basic"),m={name:"Login",components:{ShowErrors:c["a"]},data:function(){return{login:{login_id:"",password:""},loginValidation:"",access_role:""}},validations:{login:{login_id:{required:i["required"]},password:{required:i["required"]}}},computed:{isAdmin:function(){return"ADMIN"===localStorage.getItem("role")}},watch:{login:{handler:function(){this.clearApiValidation()},deep:!0}},beforeCreate:function(){window.location.pathname.includes("mng")?(localStorage.setItem("role","ADMIN"),this.access_role="ADMIN"):(localStorage.setItem("role","USER"),this.access_role="USER")},methods:{submit:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.login.$touch(),this.$v.login.$invalid){t.next=16;break}if(this.loginValidation="","USER"!=localStorage.getItem("role")){t.next=11;break}return t.next=6,u.postAPI(d["a"].LOGIN,{client_login_id:this.login.login_id,client_login_pass:this.login.password});case 6:e=t.sent,a=e.data,a.success?(console.log("OOOOOO",a.data),localStorage.setItem("token",a.data.access_token),this.$store.dispatch("setUserDetails",{client_account_no:a.data.clientAccount.client_no,client_no:a.data.clientAccount.client_account_no,clientName:a.data.clientAccount.client_login_id,clientPersonName:a.data.clientAccount.client_person_name,clientCompanyName:a.data.clientAccount.client_name,icon_path:a.data.clientAccount.icon_path}),localStorage.setItem("client_account_no",a.data.clientAccount.client_no),localStorage.setItem("client_no",a.data.clientAccount.client_account_no),localStorage.setItem("clientName",a.data.clientAccount.client_login_id),localStorage.setItem("clientPersonName",a.data.clientAccount.client_person_name),localStorage.setItem("clientCompanyName",a.data.clientAccount.client_name),localStorage.setItem("icon_path",a.data.clientAccount.icon_path),this.$router.push({name:"user_dasboard"})):this.loginValidation=this.$t("backend."+a.message.code),t.next=16;break;case 11:return t.next=13,u.postAPI(d["a"].MLOGIN,{client_login_id:this.login.login_id,client_login_pass:this.login.password});case 13:n=t.sent,o=n.data,o.success?(console.log("OOOOOO",o.data),localStorage.setItem("token",o.data.access_token),this.$store.dispatch("setUserDetails",{client_account_no:o.data.clientAccount.apl_manager_account_no,clientName:o.data.clientAccount.apl_manager_login_id,clientPersonName:o.data.clientAccount.client_person_name,clientCompanyName:o.data.clientAccount.person_company_name}),localStorage.setItem("client_account_no",o.data.clientAccount.apl_manager_account_no),localStorage.setItem("clientName",o.data.clientAccount.apl_manager_login_id),localStorage.setItem("clientPersonName",o.data.clientAccount.client_person_name),localStorage.setItem("clientCompanyName",o.data.clientAccount.person_company_name),localStorage.setItem("personCompanyID",o.data.clientAccount.person_company_id),localStorage.setItem("personID",o.data.clientAccount.person_id),localStorage.setItem("dummyData",o.data.access_control?JSON.stringify(o.data.access_control):{}),localStorage.setItem("person_auth",o.data.clientAccount.person_auth_kbn),localStorage.setItem("wiz_auth",o.data.clientAccount.wiz_auth_flg),localStorage.setItem("supplier_auth",o.data.clientAccount.supplier_auth_flg),localStorage.setItem("admin_auth",o.data.clientAccount.system_auth_flg),this.$router.push({name:"admin_dasboard"})):this.loginValidation=this.$t("backend."+o.message.code);case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getUserProfile:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.getAPI(d["a"].USER,"",!0);case 3:e=t.sent,a=e.data,a.success?this.$store.dispatch("setUserDetails",a.data):Object(r["j"])("not_a_valid_user","sorry not a valid user"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),Object(r["j"])("user_details_profile",t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}(),clearApiValidation:function(){this.loginValidation=""}}},p=m,_=(a("d085"),a("2877")),g=Object(_["a"])(p,n,o,!1,null,"020356a5",null);e["default"]=g.exports},"8c6f":function(t,e,a){t.exports=a.p+"img/logo-w.e302777f.svg"},d085:function(t,e,a){"use strict";var n=a("16ef"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-cb7b20a4.9630aa94.js.map