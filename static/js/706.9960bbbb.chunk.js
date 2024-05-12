"use strict";(self.webpackChunkpsychologists=self.webpackChunkpsychologists||[]).push([[706],{6466:function(n,e,r){r.d(e,{Bn:function(){return S},CV:function(){return g},Ep:function(){return b},Pu:function(){return v},TX:function(){return k},U0:function(){return w},V0:function(){return j},_:function(){return Z},mV:function(){return P},vJ:function(){return y},wZ:function(){return m}});var i,t,o,s,a,d,u,p,c,l,x,f=r(168),h=r(2683),g=h.ZP.div(i||(i=(0,f.Z)(["\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: auto;\n"]))),b=h.ZP.div(t||(t=(0,f.Z)(["\n  border: 1px solid rgba(239, 237, 232, 0.2);\n  border-radius: 30px;\n  background: #fbfbfb;\n  margin: 10% auto;\n  box-sizing: border-box;\n  width: 565px;\n  height: 509px;\n  padding: 64px;\n  position: relative;\n"]))),Z=h.ZP.h3(o||(o=(0,f.Z)(["\n  font-weight: 500;\n  font-size: 40px;\n  line-height: 120%;\n  letter-spacing: -0.02em;\n  color: #191a15;\n  margin-bottom: 20px;\n"]))),m=h.ZP.p(s||(s=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 125%;\n  color: rgba(25, 26, 21, 0.5);\n  margin-bottom: 40px;\n  width: 90%;\n"]))),w=h.ZP.form(a||(a=(0,f.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),v=h.ZP.div(d||(d=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),y=h.ZP.input(u||(u=(0,f.Z)(["\n  border: 1px solid rgba(25, 26, 21, 0.1);\n  border-radius: 12px;\n  padding: 16px 18px;\n"]))),P=h.ZP.input(p||(p=(0,f.Z)(["\n  border: 1px solid rgba(25, 26, 21, 0.1);\n  border-radius: 12px;\n  padding: 16px 18px;\n  width: 398px;\n"]))),j=h.ZP.div(c||(c=(0,f.Z)(["\n  position: relative;\n  width: 414px;\n"]))),k=h.ZP.button(l||(l=(0,f.Z)(["\n  border-radius: 30px;\n  padding: 16px 196px;\n  margin-top: 20px;\n"]))),S=h.ZP.button(x||(x=(0,f.Z)(["\n  position: absolute;\n  right: 29px;\n  top: 26px;\n  background: none;\n  padding: 0;\n"])))},6706:function(n,e,r){r.r(e);var i=r(1413),t=r(5861),o=r(9439),s=r(7757),a=r.n(s),d=r(2791),u=r(1134),p=r(8007),c=r(4695),l=r(3353),x=r(8265),f=r(4420),h=r(7689),g=r(6466),b=r(5210),Z=r(2564),m=(r(5462),r(184)),w=p.Ry().shape({name:p.Z_().required(),email:p.Z_().email().required(),password:p.Z_().min(6).required()});e.default=function(){var n=(0,d.useState)(!1),e=(0,o.Z)(n,2),r=e[0],s=e[1],p=(0,d.useState)(""),v=(0,o.Z)(p,2),y=v[0],P=v[1],j=(0,f.I0)(),k=(0,h.s0)();(0,d.useEffect)((function(){var n=function(n){"Escape"===n.key&&k("/")};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[k]);var S=(0,u.cI)({resolver:(0,c.X)(w)}),C=S.register,z=S.handleSubmit,G=S.formState.errors,E=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j((0,x.r4)(e));case 2:if(r=n.sent,localStorage.setItem("emailPsych",JSON.stringify(e.email)),"This address already exists. Log in"!==r.payload){n.next=9;break}return(0,Z.Am)("This address already exists. Log in"),n.abrupt("return");case 9:k("/login");case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),L=function(){s(!r)};return(0,m.jsxs)(l.nM,{onClick:function(n){n.target===n.currentTarget&&k("/")},children:[(0,m.jsx)(Z.Ix,{toastStyle:{background:"#fc0317",color:"white"}}),(0,m.jsxs)(l.Ul,{children:[(0,m.jsx)(g.Bn,{onClick:function(){k("/")},children:(0,m.jsx)("svg",{width:"32",height:"32",children:(0,m.jsx)("use",{href:"".concat(b.Z,"#out")})})}),(0,m.jsx)(l.i1,{children:"Registration"}),(0,m.jsx)(l.Bw,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."}),(0,m.jsxs)(l.GG,{onSubmit:z(E),children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(l.SG,(0,i.Z)((0,i.Z)({type:"name"},C("name")),{},{placeholder:"Name"})),G.name&&(0,m.jsx)("span",{style:{color:"#f71b2e"},children:G.name.message})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(l.SG,(0,i.Z)((0,i.Z)({type:"email"},C("email")),{},{placeholder:"Email"})),G.email&&(0,m.jsx)("span",{style:{color:"#f71b2e"},children:G.email.message})]}),(0,m.jsxs)(l.C9,{children:[(0,m.jsx)(l.SG,(0,i.Z)((0,i.Z)({type:r?"text":"password"},C("password")),{},{placeholder:"Password",value:y,onChange:function(n){P(n.target.value)}})),G.password&&(0,m.jsx)("span",{style:{color:"#f71b2e"},children:G.password.message}),r?(0,m.jsx)(l.pl,{width:"20",height:"20",onClick:L,children:(0,m.jsx)("use",{href:"".concat(b.Z,"#eye")})}):(0,m.jsx)(l.pl,{width:"20",height:"20",onClick:L,children:(0,m.jsx)("use",{href:"".concat(b.Z,"#eye-off")})})]}),(0,m.jsx)(l.PL,{type:"submit",children:"Sign Up"})]})]})]})}},3353:function(n,e,r){r.d(e,{Bw:function(){return b},C9:function(){return v},GG:function(){return Z},PL:function(){return w},SG:function(){return m},Ul:function(){return h},i1:function(){return g},nM:function(){return f},pl:function(){return y}});var i,t,o,s,a,d,u,p,c,l=r(168),x=r(2683),f=x.ZP.div(i||(i=(0,l.Z)(["\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: auto;\n"]))),h=x.ZP.div(t||(t=(0,l.Z)(["\n  border: 1px solid rgba(239, 237, 232, 0.2);\n  border-radius: 30px;\n  background: #fbfbfb;\n  margin: 10% auto;\n  box-sizing: border-box;\n  width: 565px;\n  height: 579px;\n  padding: 64px;\n  position: relative;\n"]))),g=x.ZP.h3(o||(o=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 40px;\n  line-height: 120%;\n  letter-spacing: -0.02em;\n  color: #191a15;\n  margin-bottom: 20px;\n"]))),b=x.ZP.p(s||(s=(0,l.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 125%;\n  color: rgba(25, 26, 21, 0.5);\n  margin-bottom: 40px;\n  width: 90%;\n"]))),Z=x.ZP.form(a||(a=(0,l.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),m=x.ZP.input(d||(d=(0,l.Z)(["\n  border: 1px solid rgba(25, 26, 21, 0.1);\n  border-radius: 12px;\n  padding: 16px 18px;\n  width: 100%;\n"]))),w=x.ZP.button(u||(u=(0,l.Z)(["\n  border-radius: 30px;\n  padding: 16px 189px;\n  margin-top: 20px;\n"]))),v=x.ZP.div(p||(p=(0,l.Z)(["\n  position: relative;\n"]))),y=x.ZP.svg(c||(c=(0,l.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 0;\n"])))}}]);
//# sourceMappingURL=706.9960bbbb.chunk.js.map