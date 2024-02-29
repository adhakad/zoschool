"use strict";(self.webpackChunkzoclass=self.webpackChunkzoclass||[]).push([[6306],{36306:(S,c,m)=>{m.r(c),m.d(c,{AdminForgotModule:()=>Q});var g=m(36895),d=m(89299),i=m(24006),t=m(94650),_=m(73716),x=m(462),v=m(4859),l=m(59549),A=m(44144);function F(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1,"Product key is required."),t.qZA())}function Z(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1," Product key can't be more than 40 characters long. "),t.qZA())}function y(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"form",7),t.NdJ("ngSubmit",function(){t.CHM(n);const a=t.oxw(2);return t.KtG(a.adminVarify())}),t.TgZ(1,"mat-form-field",8)(2,"mat-label"),t._uU(3,"Product Key"),t.qZA(),t._UZ(4,"input",9),t.YNc(5,F,2,0,"mat-hint",10),t.YNc(6,Z,2,0,"mat-hint",10),t.qZA(),t.TgZ(7,"button",11),t._uU(8,"Varify"),t.qZA()()}if(2&o){const n=t.oxw(2);let r,a;t.Q6J("formGroup",n.varifyForm),t.xp6(5),t.Q6J("ngIf",(null==(r=n.varifyForm.get("productKey"))?null:r.hasError("required"))&&(null==(r=n.varifyForm.get("productKey"))?null:r.touched)),t.xp6(1),t.Q6J("ngIf",null==(a=n.varifyForm.get("productKey"))?null:a.hasError("maxlength")),t.xp6(1),t.Q6J("disabled",!n.varifyForm.valid)}}function T(o,e){if(1&o&&(t.TgZ(0,"div",3)(1,"div",1)(2,"div",4)(3,"h3"),t._uU(4,"Admin Varification"),t.qZA(),t.TgZ(5,"div",5)(6,"h2"),t._uU(7),t.qZA(),t.YNc(8,y,9,4,"form",6),t.qZA()()()()),2&o){const n=t.oxw();t.xp6(7),t.Oqu(n.errorMsg),t.xp6(1),t.Q6J("ngIf","Varify"==n.formType)}}function C(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1,"Username is required."),t.qZA())}function b(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1," Username must be at least 6 characters long. "),t.qZA())}function M(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1," Username can't be more than 30 characters long. "),t.qZA())}function I(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1," Only alphanumeric characters and underscore are allowed. "),t.qZA())}function U(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1,"Password is required."),t.qZA())}function q(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1," Password must be at least 6 characters long. "),t.qZA())}function J(o,e){1&o&&(t.TgZ(0,"mat-hint",12),t._uU(1," Password can't be more than 30 characters long. "),t.qZA())}function P(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",3)(1,"div",1)(2,"div",4)(3,"h3"),t._uU(4,"Admin Username or Password Reset"),t.qZA(),t.TgZ(5,"div",5)(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"form",7),t.NdJ("ngSubmit",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.usernamePasswordReset())}),t.TgZ(9,"mat-form-field",8)(10,"mat-label"),t._uU(11,"Username"),t.qZA(),t._UZ(12,"input",13),t.YNc(13,C,2,0,"mat-hint",10),t.YNc(14,b,2,0,"mat-hint",10),t.YNc(15,M,2,0,"mat-hint",10),t.YNc(16,I,2,0,"mat-hint",10),t.qZA(),t.TgZ(17,"mat-form-field",8)(18,"mat-label"),t._uU(19,"Reset Password"),t.qZA(),t._UZ(20,"input",14),t.YNc(21,U,2,0,"mat-hint",10),t.YNc(22,q,2,0,"mat-hint",10),t.YNc(23,J,2,0,"mat-hint",10),t.qZA(),t.TgZ(24,"button",11),t._uU(25,"Reset"),t.qZA()()()()()()}if(2&o){const n=t.oxw();let r,a,u,p,s,f,h;t.xp6(7),t.Oqu(n.errorMsg),t.xp6(1),t.Q6J("formGroup",n.resetForm),t.xp6(5),t.Q6J("ngIf",(null==(r=n.resetForm.get("email"))?null:r.hasError("required"))&&(null==(r=n.resetForm.get("email"))?null:r.touched)),t.xp6(1),t.Q6J("ngIf",null==(a=n.resetForm.get("email"))?null:a.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(u=n.resetForm.get("email"))?null:u.hasError("maxlength")),t.xp6(1),t.Q6J("ngIf",null==(p=n.resetForm.get("email"))?null:p.hasError("pattern")),t.xp6(5),t.Q6J("ngIf",(null==(s=n.resetForm.get("password"))?null:s.hasError("required"))&&(null==(s=n.resetForm.get("password"))?null:s.touched)),t.xp6(1),t.Q6J("ngIf",null==(f=n.resetForm.get("password"))?null:f.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(h=n.resetForm.get("password"))?null:h.hasError("maxlength")),t.xp6(1),t.Q6J("disabled",!n.resetForm.valid)}}function w(o,e){if(1&o&&(t.TgZ(0,"div",3)(1,"div",1)(2,"div",4)(3,"p",15),t._uU(4),t.qZA()()()()),2&o){const n=t.oxw();t.xp6(4),t.Oqu(n.successMsg)}}const N=[{path:"",component:(()=>{class o{constructor(n,r,a){this.fb=n,this.router=r,this.adminAuthService=a,this.errorMsg="",this.successMsg="",this.formType="Varify",this.varifyForm=this.fb.group({productKey:["",[i.kI.required,i.kI.maxLength(40)]]}),this.resetForm=this.fb.group({email:["",[i.kI.required,i.kI.minLength(6),i.kI.maxLength(30),i.kI.pattern(/^[a-zA-Z0-9_]+$/)]],password:["",[i.kI.required,i.kI.minLength(6),i.kI.maxLength(30)]],productKey:[""]})}ngOnInit(){}adminVarify(){this.varifyForm.valid&&this.adminAuthService.adminVarify(this.varifyForm.value).subscribe(n=>{n&&(this.errorMsg="",this.varifiedAdminInfo=n.varifiedAdminInfo,this.formType="Reset")},n=>{this.errorMsg=n.error.errorMsg})}usernamePasswordReset(){this.resetForm.value.productKey=this.varifiedAdminInfo.productKey,this.adminAuthService.usernamePasswordReset(this.resetForm.value).subscribe(n=>{n&&(this.errorMsg="",this.formType="ResetSuccsess","ResetSuccsess"==this.formType&&(this.successMsg=n.successMsg))},n=>{this.errorMsg=n.error.errorMsg})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(i.qu),t.Y36(d.F0),t.Y36(_.Y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin-forgot"]],decls:6,vars:3,consts:[[1,"login"],[1,"row"],["class","col-12 col-lg-5 offset-lg-3 login-card",4,"ngIf"],[1,"col-12","col-lg-5","offset-lg-3","login-card"],[1,"col-12","col-lg-10","offset-lg-1"],[1,"col-12"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","text","formControlName","productKey"],["class","form-text text-danger",4,"ngIf"],["type","submit","mat-raised-button","",1,"submit-button",3,"disabled"],[1,"form-text","text-danger"],["matInput","","type","text","formControlName","email"],["matInput","","type","password","formControlName","password"],[1,"success-message"]],template:function(n,r){1&n&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"div",1),t.YNc(3,T,9,2,"div",2),t.YNc(4,P,26,10,"div",2),t.YNc(5,w,5,1,"div",2),t.qZA()()),2&n&&(t.xp6(3),t.Q6J("ngIf","Varify"==r.formType),t.xp6(1),t.Q6J("ngIf","Reset"==r.formType),t.xp6(1),t.Q6J("ngIf","ResetSuccsess"==r.formType))},dependencies:[g.O5,x.G,v.lW,l.KE,l.bx,l.hX,A.Nt,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".login[_ngcontent-%COMP%]{background-color:#fff;padding-top:10vh;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{background-color:#fff;padding-top:5vh;padding-bottom:5vh;box-shadow:none}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%]{color:#4e4caacd;padding-bottom:2vh;letter-spacing:.6px;font-size:18px;font-weight:500;margin-bottom:5px;text-align:center}h2[_ngcontent-%COMP%]{color:#e4409a;font-size:16px;letter-spacing:.5px}p[_ngcontent-%COMP%]{color:#4e4caac1;margin-top:2vh;letter-spacing:.25px;font-size:16px;margin-bottom:5px}a[_ngcontent-%COMP%]{color:#4e4caac1;font-size:16px;font-weight:500;letter-spacing:.25px;text-decoration:none}.success-message[_ngcontent-%COMP%]{color:#16b978;font-size:20px}@media (min-width:1200px){.login[_ngcontent-%COMP%]{min-height:90vh;padding-top:5vh;background-color:#64748d15;padding-left:2%;padding-right:2%}.login-card[_ngcontent-%COMP%]{margin-top:2vh;margin-left:30%;margin-bottom:10vh;border-radius:15px;border:1px solid rgba(218,218,224,.858)}.login-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:48px;margin-bottom:15px}}"]}),o})()}];let O=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(N),d.Bz]}),o})();var Y=m(11160);let Q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,O,Y.S]}),o})()}}]);