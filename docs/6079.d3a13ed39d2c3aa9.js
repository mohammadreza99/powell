"use strict";(self.webpackChunkpowell=self.webpackChunkpowell||[]).push([[6079],{6079:(W,s,a)=>{a.r(s),a.d(s,{LoadingContainerPageModule:()=>Q});var l=a(6814),g=a(823),d=a(9937),n=a(8926);let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.D,l.ez,d.I]}),t})();var f=a(987),u=a(1344),c=a(8047),h=a(7680);function C(t,i){1&t&&n.GkF(0)}function y(t,i){if(1&t&&(n.ynx(0),n.YNc(1,C,1,0,"ng-container",3),n.BQk()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngTemplateOutlet",e.contentTemplate)}}function x(t,i){1&t&&n.GkF(0)}function L(t,i){if(1&t&&(n.ynx(0),n.YNc(1,x,1,0,"ng-container",3),n.BQk()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",e.loadingTemplate)}}const T=function(t,i){return{width:t,height:i}};function A(t,i){if(1&t&&(n.TgZ(0,"div",5),n._UZ(1,"p-progressSpinner",6),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.Akn(n.WLB(4,T,e.spinnerWidth,e.spinnerHeight)),n.Q6J("strokeWidth",e.spinnerStrokeWidth.toString())("fill",e.spinnerFill)}}function _(t,i){if(1&t&&(n.YNc(0,L,2,1,"ng-container",1),n.YNc(1,A,2,7,"ng-template",null,4,n.W1O)),2&t){const e=n.MAs(2),o=n.oxw();n.Q6J("ngIf",o.loadingTemplate)("ngIfElse",e)}}let O=(()=>{class t{constructor(){this.considerEmptyArrayAsFilled=!0,this.considerEmptyObjectAsFilled=!0,this.spinnerStrokeWidth=4,this.spinnerFill="var(--surface-ground)",this.spinnerWidth="70px",this.spinnerHeight="70px"}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.templateRef;break;case"loading":this.loadingTemplate=e.templateRef}})}isEmptyData(){return(o=>{const r=JSON.stringify(o);if(null==o&&null==o)return!0;if("string"==typeof o){if(""==o||!o?.length||""==o.trim())return!0}else if(Array.isArray(o)){if(!(o?.length&&"[]"!=r||this.considerEmptyArrayAsFilled))return!0}else{if("object"!=typeof o)return!1;if("{}"==r&&!this.considerEmptyObjectAsFilled)return!0}})("function"==typeof this.data?this.data():this.data)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-loading-container"]],contentQueries:function(e,o,r){if(1&e&&n.Suo(r,c.S,4),2&e){let p;n.iGM(p=n.CRH())&&(o.templates=p)}},inputs:{data:"data",considerEmptyArrayAsFilled:"considerEmptyArrayAsFilled",considerEmptyObjectAsFilled:"considerEmptyObjectAsFilled",spinnerStrokeWidth:"spinnerStrokeWidth",spinnerFill:"spinnerFill",spinnerWidth:"spinnerWidth",spinnerHeight:"spinnerHeight"},decls:4,vars:2,consts:[[1,"loading-container"],[4,"ngIf","ngIfElse"],["emptyDataPlaceholder",""],[4,"ngTemplateOutlet"],["defaultLoadingTemplate",""],[1,"loading"],[3,"strokeWidth","fill"]],template:function(e,o){if(1&e&&(n.TgZ(0,"div",0),n.YNc(1,y,2,1,"ng-container",1),n.YNc(2,_,3,2,"ng-template",null,2,n.W1O),n.qZA()),2&e){const r=n.MAs(3);n.xp6(1),n.Q6J("ngIf",!o.isEmptyData())("ngIfElse",r)}},dependencies:[h.G,l.O5,l.tP],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     .loading{display:flex;align-items:center;justify-content:center}"],changeDetection:0}),t})();var F=a(4532),v=a(1230),P=a(3999);function Z(t,i){if(1&t&&(n.TgZ(0,"li"),n._uU(1),n.qZA()),2&t){const e=i.$implicit;n.xp6(1),n.hij("item-",e,"")}}function M(t,i){if(1&t&&(n.TgZ(0,"ul"),n.YNc(1,Z,2,1,"li",5),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.list)}}let E=(()=>{class t{ngOnInit(){setTimeout(()=>{this.list=[1,2,3,4,5]},3e3)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-loading-container-page"]],decls:9,vars:7,consts:[[1,"container"],["header","LoadingContainer","subheader","LoadingContainer is a container to show a loading template until data loaded."],[3,"header"],[3,"data"],["ngTemplate","content"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"p-card",1),n.TgZ(2,"p-panel",2),n.ALo(3,"translate"),n._uU(4," Options should edit in code. "),n.qZA(),n.TgZ(5,"p-panel",2),n.ALo(6,"translate"),n.TgZ(7,"ng-loading-container",3),n.YNc(8,M,2,1,"ng-template",4),n.qZA()()()),2&e&&(n.xp6(2),n.Q6J("header",n.lcZ(3,3,"options")),n.xp6(3),n.Q6J("header",n.lcZ(6,5,"preview")),n.xp6(2),n.Q6J("data",o.list))},dependencies:[O,c.S,F.Z,v.s,l.sg,P.X$],styles:["[_nghost-%COMP%]{display:block;padding:3rem 0}p-card[_ngcontent-%COMP%], p-card[_ngcontent-%COMP%] ~ p-panel[_ngcontent-%COMP%]{margin-bottom:1rem;display:block}p-card[_ngcontent-%COMP%]     .p-card-content{padding:0}"]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m,f.p,u.Bz.forChild([{path:"",component:E}])]}),t})()}}]);