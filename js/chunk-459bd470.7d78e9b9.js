(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-459bd470"],{"17f6":function(t,s,l){"use strict";l.r(s);var a=function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("div",[l("b-row",[l("b-col",{staticClass:"border border-dark",attrs:{cols:"12",xl:"3"}},[l("b-row",{staticClass:"mt-1"},[l("b-col",{attrs:{cols:"12",xl:"1"}}),l("b-col",{attrs:{cols:"12",xl:"auto"}},[l("label",{staticClass:"title-fw title-fs-2"},[t._v(t._s(t.$t("CATEGORY")))])])],1),t._l(t.categories,(function(s){return l("b-row",{key:s.category_no,staticClass:"d-flex align-items-center",attrs:{"no-body":""}},[l("b-col",{attrs:{cols:"12",xl:"1"}},[l("b-form-checkbox")],1),l("b-col",{staticClass:"p-0",attrs:{cols:"12",xl:"4"}},[l("img",{staticClass:"navbar-brand-full p-3",attrs:{src:s.category_img_path,width:"100%"}})]),l("b-col",{attrs:{cols:"12",xl:"4"}},[l("b-link",{staticClass:"link d-flex align-items-end",attrs:{href:"javascript:;"}},[l("u",[t._v(t._s(s.category_name)+" ")])])],1),l("b-col",{staticClass:"p-0",attrs:{cols:"12",xl:"2"}},[l("button",{staticClass:"btn-sm px-1 btn-primary",on:{click:t.gotoCategoryEdit}},[t._v(" "+t._s(t.$t("EDIT"))+" ")])])],1)})),l("b-button",{staticClass:"mt-3 ml-2",attrs:{variant:"primary"},on:{click:t.gotoCategoryEdit}},[t._v(t._s(t.$t("ADDCATEGORY")))]),l("br"),l("b-button",{staticClass:"mt-3 ml-2",attrs:{variant:"primary"}},[t._v(t._s(t.$t("DELCATEGDEL")))])],2),l("b-col",{staticClass:"border border-dark",attrs:{cols:"12",xl:"6"}},[l("b-row",{staticClass:"mt-1"},[l("b-col",{staticClass:"pl-4",attrs:{cols:"12",xl:"auto"}},[l("label",{staticClass:"title-fw title-fs-2"},[t._v(t._s(t.$t("POINTPROGRAM")))])])],1),l("b-row",{staticClass:"overflow-y"},t._l(t.programs,(function(s){return l("b-col",{key:s.program_no,staticClass:"mt-1 pl-5",attrs:{cols:"12",xl:"4","no-body":""}},[l("b-form-checkbox"),l("img",{staticClass:"navbar-brand-full p-3",attrs:{src:s.program_img_path,width:"100%"}}),l("label",[t._v(t._s(s.program_name)+" ")]),l("br"),l("label",[t._v(t._s(t.$t("CONSUMPTION"))+t._s(s.consumption_points)+" ")]),l("b-link",{staticClass:"link d-flex align-items-end float-right",attrs:{href:"javascript:;"},on:{click:t.gotoProgramEdit}},[l("u",[t._v(t._s(t.$t("EDITING")))])])],1)})),1),l("br"),l("b-row",[l("b-col",{attrs:{cols:"12",xl:"5"}},[l("b-button",{staticClass:"btn-sm font-weight-bold text-sm ml-1",attrs:{variant:"primary"},on:{click:t.gotoProgramEdit}},[t._v(t._s(t.$t("ADDPOINTPROGADD")))])],1),l("b-col",{attrs:{cols:"12",xl:"5"}},[0!=t.programs.length?l("b-pagination",{attrs:{id:"message-list","total-rows":t.programRows,"per-page":t.programPerPage,align:"center"},model:{value:t.programCurrentPage,callback:function(s){t.programCurrentPage=s},expression:"programCurrentPage"}}):t._e()],1)],1),l("b-row",[l("b-col",{attrs:{cols:"12",xl:"6"}},[l("b-button",{staticClass:"btn-sm font-weight-bold text-sm ml-1",attrs:{variant:"primary"}},[t._v(t._s(t.$t("DELPOINTPROGDEL")))])],1),l("b-col",{attrs:{cols:"12",xl:"5"}})],1),l("b-row",[l("b-col",{attrs:{cols:"12",xl:"7"}}),l("b-col",{attrs:{cols:"12",xl:"4"}},[l("div",{staticClass:"countList",attrs:{align:"right"}},[l("label",[t._v(t._s(t.$t("DISPLAY")))]),t._v(" "),l("label",[t._v("50 | ")]),l("b-link",{attrs:{href:"javascript:;"}},[t._v("100 | ")]),l("b-link",{attrs:{href:"javascript:;"}},[t._v("150")])],1)]),l("b-col",{attrs:{cols:"12",xl:"1"}})],1)],1),l("b-col",{staticClass:"border border-dark p-0",attrs:{cols:"12",xl:"3"}},[l("b-row",{staticClass:"mt-1"},[l("b-col",{attrs:{cols:"12",xl:"1"}}),l("b-col",{attrs:{cols:"12",xl:"auto"}},[l("label",{staticClass:"title-fw title-fs-2"},[t._v(t._s(t.$t("GRANTEDPOINTSEDIT")))])])],1),l("b-row",{staticClass:"mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{staticClass:"p-0",attrs:{cols:"12",xl:"auto"}},[l("label",{staticClass:"title-fw"},[t._v(t._s(t.$t("STAGEBONUS")))])])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("EXCELLENT")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v(t._s(t.$t("DOUBLE")))])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("GREAT")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v(t._s(t.$t("DOUBLE")))])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("GOOD")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v(t._s(t.$t("DOUBLE")))])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("STANDARD")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v(t._s(t.$t("DOUBLE")))])],1),l("b-row",{staticClass:"mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{staticClass:"p-0",attrs:{cols:"12",xl:"auto"}},[l("label",{staticClass:"title-fw"},[t._v(t._s(t.$t("STAGEPOINT")))])])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("EXCELLENT")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v("P")])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("GREAT")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v("P")])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("GOOD")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v("P")])],1),l("b-row",{staticClass:"mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{staticClass:"p-0",attrs:{cols:"12",xl:"auto"}},[l("label",{staticClass:"title-fw"},[t._v(t._s(t.$t("SYSTEMPOINTS")))])])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("ENTEREXPENSEITEMSREGISTERJOURNAL")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v("P")])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"auto"}},[l("label",[t._v(t._s(t.$t("POINTSFOREACH10THEXPENSEITEM")))])])],1),l("b-row",{staticClass:"d-flex align-items-center mt-1"},[l("b-col",{attrs:{cols:"12",xl:"2"}}),l("b-col",{attrs:{cols:"12",xl:"5"}},[l("label",[t._v(t._s(t.$t("REQUESTFORQUOTATIONSUBSIDYASSESSMENT")))])]),l("b-col",{attrs:{cols:"12",xl:"1"}},[t._v("：")]),l("b-col",{staticClass:"pr-0",attrs:{cols:"12",xl:"2"}},[l("b-input")],1),l("b-col",{staticClass:"pl-2",attrs:{cols:"12",xl:"auto"}},[t._v("P")])],1),l("b-row",[l("b-col",{attrs:{cols:"12",xl:"7"}}),l("b-col",{attrs:{cols:"12",xl:"auto"}},[l("b-button",{attrs:{variant:"primary"}},[t._v(t._s(t.$t("UPDATING")))])],1)],1),l("br")],1)],1)],1)},o=[],r={data:function(){return{categories:this.getCategoryList(),programs:this.getProgramList(),categoryCurrentPage:1,categoryPerPage:2,programCurrentPage:1,programPerPage:2}},computed:{categoryRows:function(){return this.categories.length},programRows:function(){return this.programs.length}},methods:{getCategoryList:function(){for(var t=[],s=1;s<=6;s++){var a={category_no:s,category_name:"カテゴリ"+s,category_img_path:l("9b19")};t.push(a)}return t},getProgramList:function(){for(var t=[],s=1;s<=9;s++){var a={program_no:s,program_name:"プログラムA",consumption_points:"200P",program_img_path:l("9b19")};t.push(a)}return t},gotoCategoryEdit:function(){this.$router.push({name:"point_program_category_addEdit"})},gotoProgramEdit:function(){this.$router.push({name:"point_program_addEdit"})}}},c=r,i=(l("c409"),l("2877")),e=Object(i["a"])(c,a,o,!1,null,null,null);s["default"]=e.exports},"9b19":function(t,s,l){t.exports=l.p+"img/logo.a8a0355a.svg"},c409:function(t,s,l){"use strict";var a=l("f052"),o=l.n(a);o.a},f052:function(t,s,l){}}]);
//# sourceMappingURL=chunk-459bd470.7d78e9b9.js.map