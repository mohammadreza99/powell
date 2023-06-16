"use strict";(self.webpackChunkpowell=self.webpackChunkpowell||[]).push([[12],{12:(w,d,o)=>{o.r(d),o.d(d,{UtilsPageModule:()=>A});var g=o(987),u=o(1344),t=o(8926),s=o(8734);let h=(()=>{class n{constructor(e,l){this.config=e,this.dialog=l}onClose(){this.dialog.close("some value")}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.S),t.Y36(s.E7))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-dynamic-dialog-sample"]],decls:8,vars:1,consts:[[1,"text-wrapper"],[1,"actions"],[1,"button",3,"click"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2),t.qZA()(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return l.onClose()}),t._uU(5,"CANCEL"),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return l.onClose()}),t._uU(7,"OK"),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(l.config.data.message))},styles:["[_nghost-%COMP%]{border:2px #382ecc solid;font-size:16px;color:#382ecc;display:flex;flex-direction:column;flex:1}.text-wrapper[_ngcontent-%COMP%]{display:flex;flex:1;align-content:center;justify-content:center;text-align:center}.actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}"]}),n})();var y=o(5861),f=o(8645),v=o(9773),C=o(8818),m=o(4480),Z=o(9864),D=o(6814);const P=["*"];let b=(()=>{class n{constructor(e,l){this.element=e,this.document=l}ngOnInit(){this.document.body.appendChild(this.element.nativeElement),this.element.nativeElement.addEventListener("click",e=>{"jw-modal"===e.target.className&&this.close()})}ngOnDestroy(){this.element.nativeElement.remove()}open(){this.element.nativeElement.style.display="block",this.document.body.classList.add("jw-modal-open"),this.document.body.style.overflow="hidden"}close(){this.element.nativeElement.style.display="none",this.document.body.classList.remove("jw-modal-open"),this.document.body.style.overflow=null}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(D.K0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-dialog2"]],ngContentSelectors:P,decls:4,vars:0,consts:[[1,"jw-modal"],[1,"jw-modal-body"],[1,"jw-modal-background"]],template:function(e,l){1&e&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA()(),t._UZ(3,"div",2))},styles:["[_nghost-%COMP%]{display:none}[_nghost-%COMP%]   .jw-modal[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:2000;overflow:auto;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .jw-modal[_ngcontent-%COMP%]   .jw-modal-body[_ngcontent-%COMP%]{padding:20px;background:#fff;margin:40px}[_nghost-%COMP%]   .jw-modal-background[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#000;opacity:.75;z-index:1500}"],changeDetection:0}),n})();var p=o(8160),T=o(4532),x=o(1230),U=o(3999);let M=(()=>{class n{constructor(e,l,a){this.userService=e,this.overlayService=l,this.persianService=a,this.destroy$=new f.x}showCustomDynamicDialog(){this.overlayService.open(h,{data:{message:"I am a dynamic component inside of a dialog!"}}).afterClosed.pipe((0,v.R)(this.destroy$)).subscribe(e=>{this.customDynamicDialogResult=e})}request(){var e=this;return(0,y.Z)(function*(){yield e.userService.get()})()}onInputChange(e){this.persianWord=this.persianService.toPersianWord(e.value)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C.Do),t.Y36(m.F0),t.Y36(m.qw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-utils-page"]],decls:23,vars:14,consts:[[1,"container"],["header","Utils","subheader","Utils is a helper utility service to implement different things. Example below demonstrates how to use methods of it."],[3,"header"],["label","HTTP Request",3,"click"],["label","Custom Dialog",3,"click"],["label","Custom Dynamic Dialog",3,"click"],[1,"mb-0"],[3,"onInput"],[1,"mt-3","border","rounded","p-2"],["modal",""]],template:function(e,l){if(1&e){const a=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"p-card",1),t.TgZ(2,"p-panel",2),t.ALo(3,"translate"),t.TgZ(4,"ng-button",3),t.NdJ("click",function(){return l.request()}),t.qZA()(),t.TgZ(5,"p-panel",2),t.ALo(6,"translate"),t.TgZ(7,"ng-button",4),t.NdJ("click",function(){t.CHM(a);const r=t.MAs(21);return t.KtG(r.open())}),t.qZA()(),t.TgZ(8,"p-panel",2),t.ALo(9,"translate"),t.TgZ(10,"ng-button",5),t.NdJ("click",function(){return l.showCustomDynamicDialog()}),t.qZA(),t.TgZ(11,"p",6)(12,"b"),t._uU(13," Custom Dynamic Dialog Result: "),t.qZA(),t._uU(14),t.qZA()(),t.TgZ(15,"p-panel",2),t.ALo(16,"translate"),t.TgZ(17,"ng-input-number",7),t.NdJ("onInput",function(r){return l.onInputChange(r)}),t.qZA(),t.TgZ(18,"p",8),t._uU(19),t.qZA()()(),t.TgZ(20,"ng-dialog2",null,9),t._uU(22," Custom Modal Content\n"),t.qZA()}2&e&&(t.xp6(2),t.Q6J("header",t.lcZ(3,6,"preview")),t.xp6(3),t.Q6J("header",t.lcZ(6,8,"preview")),t.xp6(3),t.Q6J("header",t.lcZ(9,10,"preview")),t.xp6(6),t.hij(" ",l.customDynamicDialogResult," "),t.xp6(1),t.Q6J("header",t.lcZ(16,12,"preview")),t.xp6(4),t.Oqu(l.persianWord||"-"))},dependencies:[Z.r,b,p.l,T.Z,x.s,U.X$],styles:["[_nghost-%COMP%]{display:block;padding:3rem 0;direction:ltr}p-card[_ngcontent-%COMP%], p-card[_ngcontent-%COMP%] ~ p-panel[_ngcontent-%COMP%]{margin-bottom:1rem;display:block}p-card[_ngcontent-%COMP%]     .p-card-content{padding:0}p-panel[_ngcontent-%COMP%]     ng-button{margin-right:1rem;margin-bottom:1rem}"]}),n})();var O=o(263);let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[O.h,s.U8,p.L,g.p,u.Bz.forChild([{path:"",component:M}])]}),n})()}}]);