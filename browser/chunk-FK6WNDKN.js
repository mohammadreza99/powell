import{a as E,b as I}from"./chunk-5DHYUC47.js";import{D as M,Ia as j,Ja as D,O as N,l as v,m as k,n as P,o as q,oa as A,p as R,r as T,s as F,t as B,ua as G,x as W}from"./chunk-GRYET4BD.js";import{Ga as s,Ha as g,Ia as u,N as m,Na as y,Q as C,R as c,S as _,bb as w,cb as n,db as b,hb as p,ka as t,kc as S,rb as h,sb as f,wa as l}from"./chunk-SPGXIA5M.js";var O=()=>["label","variant","hint","rtl","showRequiredStar","followConfig","disabled","readonly","async"],z=()=>({required:"error"}),V=(()=>{class o{configService=C(G);form=new q({c1:new R(null,[v.requiredTrue])});binding;label="label";variant=this.configService.get().inputStyle;hint="";rtl=this.configService.get().rtl;showRequiredStar=this.configService.get().showRequiredStar;followConfig=this.configService.get().followConfig;disabled=!1;readonly=!1;async=!1;asyncFlag=!1;onChangeAsync({loadingCallback:d}){this.asyncFlag=!this.asyncFlag,setTimeout(()=>{d(this.asyncFlag)},3e3)}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=c({type:o,selectors:[["ng-checkbox-page"]],decls:9,vars:29,consts:[[1,"container","py-6","[&_.p-card-content]:hidden","[&>*]:block","[&>*:not(:last-child)]:mb-4"],["header","Checkbox","subheader","Checkbox is an extension to standard checkbox element with theming."],[3,"header"],[3,"labelChange","variantChange","hintChange","rtlChange","showRequiredStarChange","followConfigChange","disabledChange","readonlyChange","asyncChange","previewItems","label","variant","hint","rtl","showRequiredStar","followConfig","disabled","readonly","async"],[3,"formGroup"],["formControlName","c1",3,"onChangeAsync","validation","label","variant","hint","rtl","showRequiredStar","followConfig","disabled","readonly","async"]],template:function(r,e){r&1&&(s(0,"div",0),u(1,"p-card",1),s(2,"p-panel",2),h(3,"translate"),s(4,"ng-preview-options",3),b("labelChange",function(i){return n(e.label,i)||(e.label=i),i})("variantChange",function(i){return n(e.variant,i)||(e.variant=i),i})("hintChange",function(i){return n(e.hint,i)||(e.hint=i),i})("rtlChange",function(i){return n(e.rtl,i)||(e.rtl=i),i})("showRequiredStarChange",function(i){return n(e.showRequiredStar,i)||(e.showRequiredStar=i),i})("followConfigChange",function(i){return n(e.followConfig,i)||(e.followConfig=i),i})("disabledChange",function(i){return n(e.disabled,i)||(e.disabled=i),i})("readonlyChange",function(i){return n(e.readonly,i)||(e.readonly=i),i})("asyncChange",function(i){return n(e.async,i)||(e.async=i),i}),g()(),s(5,"p-panel",2),h(6,"translate"),s(7,"form",4)(8,"ng-checkbox",5),y("onChangeAsync",function(i){return e.onChangeAsync(i)}),g()()()()),r&2&&(t(2),l("header",f(3,23,"options")),t(2),l("previewItems",p(27,O)),w("label",e.label)("variant",e.variant)("hint",e.hint)("rtl",e.rtl)("showRequiredStar",e.showRequiredStar)("followConfig",e.followConfig)("disabled",e.disabled)("readonly",e.readonly)("async",e.async),t(),l("header",f(6,25,"preview")),t(2),l("formGroup",e.form),t(),l("validation",p(28,z))("label",e.label)("variant",e.variant)("hint",e.hint)("rtl",e.rtl)("showRequiredStar",e.showRequiredStar)("followConfig",e.followConfig)("disabled",e.disabled)("readonly",e.readonly)("async",e.async))},dependencies:[j,T,k,P,F,B,E,M,N,A]})}return o})();var se=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=_({type:o});static \u0275inj=m({imports:[D,W,I,S.forChild([{path:"",component:V}])]})}return o})();export{se as CheckboxPageModule};
