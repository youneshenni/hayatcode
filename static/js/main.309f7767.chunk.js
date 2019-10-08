(window["webpackJsonphayatcode-react"]=window["webpackJsonphayatcode-react"]||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(19),l=a.n(c),i=function(){return n.a.createElement("div",null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),n.a.createElement("link",{rel:"icon",href:"static/img/favicon.png",type:"image/png"}),n.a.createElement("title",null,"Medcare Medical"),n.a.createElement("link",{rel:"stylesheet",href:"static/css/bootstrap.css"}),n.a.createElement("link",{rel:"stylesheet",href:"static/css/themify-icons.css"}),n.a.createElement("link",{rel:"stylesheet",href:"static/css/flaticon.css"}),n.a.createElement("link",{rel:"stylesheet",href:"static/vendors/fontawesome/css/all.min.css"}),n.a.createElement("link",{rel:"stylesheet",href:"static/vendors/owl-carousel/owl.carousel.min.css"}),n.a.createElement("link",{rel:"stylesheet",href:"static/vendors/animate-css/animate.css"}),n.a.createElement("link",{rel:"stylesheet",href:"static/css/style.css"}),n.a.createElement("link",{rel:"stylesheet",href:"static/css/responsive.css"}))},o=a(9),s=a(18),u=a.n(s),d=a(25),m=a(2),p=a(7),h=a(45),f=a.n(h);function b(e){var t=e.id,a=e.label,c=e.maxLength,l=e.value,i=(e.required,e.onChange),s=e.sendError,u=e.type,d=Object(p.a)(e,["id","label","maxLength","value","required","onChange","sendError","type"]),h=Object(r.useState)(""),b=Object(o.a)(h,2),g=b[0],y=b[1],v=new f.a;"pin"===t?v.is().min(5).is().max(5):v.is().min(6);return n.a.createElement("div",null,n.a.createElement("input",{type:("pin"===t?"pin":u)||"text",name:t,defaultValue:l,onChange:function(e){if(e.persist(),"password"===u&&d.register){var a=v.validate(e.target.value,{list:!0});a.length?(y("Your "+("pin"===t?"pin":"password")+" doesn't meet the following: "+a.map((function(e){return"Your "+("pin"===t?"pin":"password")+" needs to "+("min"===e?"contain at least "+t==="pin"?5:"6 characters":"uppercase"===e?"include at least one uppercase character":"lowercase"===e?"include at least one lowercase character":"digits"===e?"include at least one digit":"max"===e?"contain less than 20 characters":e)})).join(", ")),s&&s(!0)):(y(""),s&&s(!1),i(Object(m.a)({},e.target.id,e.target.value))),console.log(a)}else i(e)},placeholder:a,id:t,className:"form-control",maxLength:c}),(d.error||g||d.pageError)&&n.a.createElement("div",{style:{color:"red",fontStyle:"italic"}},"Error: "+(d.error||"")+" "+(d.pageError||"")+" "+g))}var g=a(35),y=a(29),v=Object(y.a)();function E(e){var t=e.id,a=e.label,c=e.value,l=e.required,i=e.onChange,s=e.options,u=Object(p.a)(e,["id","label","value","required","onChange","options"]),d=Object(r.useState)(""),h=Object(o.a)(d,1)[0];return n.a.createElement("div",null,n.a.createElement(g.a,{placeholder:a,components:v,id:t,options:s,defaultValue:s.filter((function(e){return e.value===c}))[0],required:l,onChange:function(e){var a=e.value;return i(Object(m.a)({},t,a))}}),(u.error||h||u.pageError)&&n.a.createElement("div",{style:{color:"red",fontStyle:"italic"}},"Error: "+(u.error||"")+" "+(u.pageError||"")+" "+h))}function O(e){var t=e.id,a=e.label,c=e.maxLength,l=e.value,i=(e.required,e.onChange),s=e.sendError,u=Object(p.a)(e,["id","label","maxLength","value","required","onChange","sendError"]),d=Object(r.useState)(l||""),m=Object(o.a)(d,2),h=m[0],f=m[1],b=Object(r.useState)(""),g=Object(o.a)(b,2),y=g[0],v=g[1];return n.a.createElement("div",null,n.a.createElement("input",{type:"text",name:t,value:h,onChange:function(e){e.persist(),Number(e.target.value)||""===e.target.value?(v(""),f(Number(e.target.value)||e.target.value),s&&s(!1),i(e)):(v("Only numbers are allowed"),s&&s(!0),e.target.value=h)},placeholder:a,id:t,className:"form-control",maxLength:c}),(u.error||y||u.pageError)&&n.a.createElement("div",{style:{color:"red",fontStyle:"italic"}},"Error: "+(u.error||"")+" "+(u.pageError||"")+" "+y))}var j=a(47);function w(e){var t=e.id,a=e.label,c=e.maxLength,l=e.value,i=(e.required,e.onChange),s=e.sendError,u=Object(p.a)(e,["id","label","maxLength","value","required","onChange","sendError"]),d=Object(r.useState)(""),m=Object(o.a)(d,2),h=m[0],f=m[1];return n.a.createElement("div",null,n.a.createElement("input",{type:"text",name:t,defaultValue:l,onChange:function(e){e.persist(),Object(j.validate)(e.target.value)?(f(""),s&&s(!1),i(e)):(f("This email address is invalid"),s&&s(!0))},placeholder:a,id:t,className:"form-control",maxLength:c}),(u.error||h||u.pageError)&&n.a.createElement("div",{style:{color:"red",fontStyle:"italic"}},"Error: "+(u.error||"")+" "+(u.pageError||"")+" "+h))}var x=a(36),C=a.n(x);function k(e){var t=e.id,a=e.label,r=e.country,c=e.value,l=e.onChange,i=e.type,o=e.maxLength;return n.a.createElement("div",null,n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("input",{type:"text",name:t,value:"+"+C()(r.toUpperCase())[0],disabled:!0,className:"form-control"})),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement("input",{type:i||"text",name:t,value:c,onChange:function(e){e.persist(),l({phone:"+"+C()(r.toUpperCase())[0]+e.target.value})},placeholder:a,id:t,className:"form-control",maxLength:o})))}var S=a(48);function q(e){var t=e.id,a=e.label,c=e.maxLength,l=(e.country,e.value,e.required,e.onChange),i=e.sendError,s=Object(p.a)(e,["id","label","maxLength","country","value","required","onChange","sendError"]),u=Object(r.useState)(""),d=Object(o.a)(u,2),m=d[0],h=d[1];return n.a.createElement("div",null,n.a.createElement("input",{type:"text",name:t,onChange:function(e){e.persist(),Object(S.validate)(e.target.value)?(h(""),i&&i(!1),l(e)):(h("This postal code is invalid"),i&&i(!0))},placeholder:a,id:t,className:"form-control",maxLength:c}),(s.error||m||s.pageError)&&n.a.createElement("div",{style:{color:"red",fontStyle:"italic"}},"Error: "+(s.error||"")+" "+(s.pageError||"")+" "+m))}Object(y.a)();function P(e){var t=e.id,a=(e.label,e.value,e.required,e.onChange),c=e.options,l=(Object(p.a)(e,["id","label","value","required","onChange","options"]),Object(r.useState)([])),i=Object(o.a)(l,2),s=i[0],u=i[1],d=Object(r.useState)("");Object(o.a)(d,1)[0];return n.a.createElement("div",null,n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},c.map((function(e){return n.a.createElement("div",null,n.a.createElement("input",{type:"checkbox",className:"form-control",name:e.value,value:e.value,onChange:function(e){e.persist();var r=s.filter((function(t){return t!==e.target.value||e.target.checked})),n=e.target.checked?r.concat([e.target.value]):r;u(n),a(Object(m.a)({},t,n))}}),n.a.createElement("label",{htmlFor:e.value},e.label,n.a.createElement("img",{style:{width:200,height:200},src:e.src})))}))),n.a.createElement("br",null),n.a.createElement("h2",null,"Total price: $",10*s.length))}function N(e){var t=function(t){t.persist?(t.persist(),e.onChange(Object(m.a)({},t.target.id,t.target.value))):e.onChange(t)};return n.a.createElement("div",{id:e.id,className:"form-group "+(e.required?"required":"")},n.a.createElement("label",{className:"col-sm-2 control-label",htmlFor:"input-company"},e.label),n.a.createElement("div",{className:"col-sm-10"},function(){switch(e.type){case"enum":return n.a.createElement(E,Object.assign({},e,{onChange:t}));case"int":return n.a.createElement(O,Object.assign({},e,{onChange:t}));case"email":return n.a.createElement(w,Object.assign({},e,{onChange:t}));case"phone":return n.a.createElement(k,Object.assign({},e,{onChange:t}));case"postal":return n.a.createElement(q,Object.assign({},e,{onChange:t}));case"imageEnum":return n.a.createElement(P,Object.assign({},e,{onChange:t}));default:return n.a.createElement(b,Object.assign({},e,{onChange:t}))}}()))}function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function L(e){var t=Object(r.useState)({}),a=Object(o.a)(t,2),c=a[0],l=a[1],i=function(t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c,{},t);l(a),e.onChange(a)};return n.a.createElement("form",null,n.a.createElement("fieldset",{key:e.name},n.a.createElement("legend",null,e.name),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}},e.data.filter((function(e){return!e.hidden})).map((function(e,t){var a=e.type,r=Object(p.a)(e,["type"]);return n.a.createElement("div",{style:{margin:"1vh"},key:"input "+t},n.a.createElement(N,Object.assign({onChange:i,type:a,sendError:r.sendError},r)))})))))}function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function U(e){e.onChange;var t=e.pages,a=(e.loading,e.onSubmit),c=Object(p.a)(e,["onChange","pages","loading","onSubmit"]),l=Object(r.useState)(0),i=Object(o.a)(l,2),s=i[0],h=i[1],f=Object(r.useState)({}),b=Object(o.a)(f,2),g=b[0],y=b[1],v=Object(r.useState)(t),E=Object(o.a)(v,2),O=E[0],j=E[1],w=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,console.log(t),0!==Object.values(O).reduce((function(e,t){return e.concat(t.filter((function(e){return e.required})).map((function(e){return e.id})))}),[]).filter((function(e){return!Object.keys(g).includes(e)})).length||t||a(g);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,a=O[Object.keys(O)[s]].reduce((function(e,t){return t.onPageChange?T({},e,Object(m.a)({},t.id,t.onPageChange)):e}),{}),!Object.keys(a).length){e.next=11;break}return r=T({},O),Array.prototype.asyncForEach=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<this.length)){e.next=7;break}return e.next=4,t(this[a],a,this);case 4:a++,e.next=1;break;case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e.next=7,Object.keys(a).asyncForEach(function(){var e=Object(d.a)(u.a.mark((function e(n,c){var l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a[n](g[n]);case 2:l=e.sent,r[Object.keys(O)[s]][c].pageError=l,l&&(t=!0);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 7:Object.keys(g).forEach((function(e){return O[Object.keys(O)[s]].filter((function(t){return t.id===e})).forEach((function(t){return t.value=g[e]}))})),t&&j(r),e.next=12;break;case 11:return e.abrupt("return",!0);case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:e.sent||h(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,margin:"3vw"}},n.a.createElement(L,{key:JSON.stringify(O),name:Object.keys(O)[s],data:O[Object.keys(O)[s]],onChange:function(e){var t=T({},g,{},e);y(t)}}),Object.keys(O).length>1&&n.a.createElement("div",{style:{display:"flex",height:"15vh",justifyContent:"space-evenly",flexDirection:"column"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row",width:"90vw"}},n.a.createElement("button",{type:"prev",disabled:0===s,onClick:function(){return C(s-1)},className:"btn btn-primary",style:{flexBasis:"auto"}},"Previous"),n.a.createElement("button",{type:"next",className:"btn btn-primary",disabled:s===Object.keys(O).length-1,onClick:function(){return C(s+1)},style:{flexBasis:"auto"}},"Next"))),s===Object.keys(O).length-1&&n.a.createElement("div",{style:{alignSelf:"flex-end"}},n.a.createElement("button",{type:"btn",className:"btn btn-primary",onClick:w,style:{backgroundColor:"rgb(208,0,35)",border:"1px solid rgb(208,0,35)"}},c.submit||"Submit"))))}var _={"Order new code":[{id:"firstName",label:"First name",required:!0,type:"text",onPageChange:function(e){return!e&&"This field is required"}},{id:"lastName",label:"Last name",required:!0,type:"text",onPageChange:function(e){return!e&&"This field is required"}},{id:"email",label:"E-mail",required:!0,type:"email",onPageChange:function(e){return!e&&"This field is required"}},{id:"pin",label:"PIN",required:!0,register:!0,type:"password",maxLength:5,onPageChange:function(e){return!e&&"This field is required"}},{id:"password",required:!0,label:"Password",type:"password",register:!0,onPageChange:function(e){return!e&&"This field is required"}},{id:"idNumber",required:!0,label:"ID Card's Number",type:"Text",onPageChange:function(e){return!e&&"This field is required"}},{id:"address",label:"Delivery address",type:"address",onPageChange:function(e){return!e&&"This field is required"}},{id:"phone",label:"Phone number",type:"phone",country:"dz",onPageChange:function(e){return!e&&"This field is required"}},{id:"products",label:"Choose Products",type:"imageEnum",options:[{src:"static/img/Bracelet.png",value:"bracelet",label:"Bracelet"},{src:"static/img/Shoetag.jpg",value:"shoe_tag",label:"Shoe tag"},{src:"static/img/Keychain.jpg",value:"key_chain",label:"Key chain"},{src:"static/img/Walletcard.jpg",value:"wallet_card",label:"Wallet card"}]}]},A=a(37),B=a.n(A),F=function(){var e=Object(r.useState)({}),t=Object(o.a)(e,2),c=t[0],l=t[1],i=Object(r.useState)({}),s=Object(o.a)(i,2),u=s[0],d=s[1],m=Object(r.useState)({}),p=Object(o.a)(m,2),h=p[0],f=p[1],b=Object(r.useState)(""),g=Object(o.a)(b,2),y=g[0],v=g[1],E={apiKey:"AIzaSyC-eZnVqCn0Qba8EOy8Omzq_7pM4sSRsSc",authDomain:"hayatcode-16825.firebaseapp.com",databaseURL:"https://hayatcode-16825.firebaseio.com",projectId:"hayatcode-16825",storageBucket:"hayatcode-16825.appspot.com",messagingSenderId:"174405701783",appId:"1:174405701783:web:abe19a32b01e7cd080d9d2",measurementId:"G-2K5461Z8Q7"};Object(r.useEffect)((function(){var e=a(134);a(140),a(135),a(141),a(137),e.initializeApp(E),e.analytics(),l(e.database()),d(e.storage()),f(e.auth())}),[]);return n.a.createElement("div",null,""===y?n.a.createElement(U,{pages:_,onSubmit:function(e){h.createUserWithEmailAndPassword(e.email,e.password).then((function(){!function(e){var t=B()(4,"L");t.addData("hayatcode.company/"+e),t.make();var a=t.createDataURL();v(a),u.ref().child("qrcode/"+h.currentUser.uid).putString(a,"data_url").then(console.log,console.log)}(e.email);var t=h.currentUser,a=e.firstName,r=e.lastName,n=e.address,l=e.pin,i=e.idNumber,o=e.phone,s=e.products,d=e.email;console.log(e),c.ref("user").child(t.uid).set({firstName:a,familyName:r,email:d,pin:l,nationalId:i,deliveryAddress:n,phone:o,products:s.join("/")}).catch(console.log);var m=c.ref("order").child("order").push().getKey();c.ref("order").child(m).set({UID:t.uid,created_at:Date.now(),items:s.join("/")})}),(function(t){var a=t.code;return"auth/email-already-in-use"===a?h.signInWithEmailAndPassword(e.email,e.password).then((function(){var t=B()(4,"L");t.addData("hayatcode.company/"+e.email),t.make();var a=t.createDataURL();v(a);var r=h.currentUser,n=c.ref("order").child("order").push().getKey();c.ref("order").child(n).set({UID:r.uid,created_at:Date.now(),items:e.products.join("/")})}),console.log):console.log(a)}))}}):n.a.createElement("div",null,n.a.createElement("h2",null,"You order has been submitted successfully!"),n.a.createElement("h4",null,"You will be contacted soon to confirm your order"),n.a.createElement("h3",{class:"warning"},"For testing purposes, here's the QR Code:"),n.a.createElement("img",{src:y,style:{width:100,height:100},alt:"QR Code should show up here"}),n.a.createElement("p",{class:"warning"},"Once the application is deployed, the QR Code won't be displayed on the website")))},R=function(){return n.a.createElement("footer",{class:"footer-area area-padding-top"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row footer-bottom d-flex justify-content-between"},n.a.createElement("p",{class:"col-lg-8 col-sm-12 footer-text m-0"},"Copyright \xa9",n.a.createElement("script",null,"document.write(new Date().getFullYear());")," All rights reserved | This template is made with"," ",n.a.createElement("i",{class:"fa fa-heart","aria-hidden":"true"})," by"," ",n.a.createElement("a",{href:"https://colorlib.com",target:"_blank"},"Colorlib")),n.a.createElement("div",{class:"col-lg-4 col-sm-12 footer-social"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{class:"fab fa-facebook-f"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{class:"fab fa-twitter"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{class:"fab fa-dribbble"})),n.a.createElement("a",{href:"#"},n.a.createElement("i",{class:"fab fa-linkedin"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement((function(){return n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement(i,null),n.a.createElement(F,null),n.a.createElement(R,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a(139)}},[[50,1,2]]]);
//# sourceMappingURL=main.309f7767.chunk.js.map