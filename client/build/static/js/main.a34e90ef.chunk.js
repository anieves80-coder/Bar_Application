(this["webpackJsonpbar-app"]=this["webpackJsonpbar-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/loading.7e835bf5.gif"},57:function(e,t,a){e.exports=a(87)},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),s=a.n(r),l=a(9),i=a.n(l),o=a(20),m=a(5),u=a(21),d=a(16),f=a.n(d),b=a(10),v=Object(b.a)(),E=a(31),p=a(92),g=a(93),h=a(32),N=function(e){var t=function(){"Login"===e.logStat?e.msgFnc(!0):v.push("/saved")};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col font-italic",style:{fontSize:"18px"}},"Search for a Random Drink."),c.a.createElement("div",{className:"d-block d-sm-none mr-2"},c.a.createElement(p.a,{className:"mr-2"},c.a.createElement(g.a,{variant:"secondary-primary",title:"MENU",id:"menu-dropdown",size:"sm"},c.a.createElement(h.a.Item,{as:"button"},c.a.createElement(E.a,{to:"/"},c.a.createElement("i",{className:"fas fa-search mr-1"}),"Search")),c.a.createElement(h.a.Item,{as:"button",className:"text-primary btn btn-link",onClick:t},c.a.createElement("i",{className:"fas fa-book-open mr-1"}),"Saved"),c.a.createElement(h.a.Item,{as:"button",className:"text-primary btn btn-link",onClick:function(){return e.logFnc()}},c.a.createElement("i",{className:"fas fa-sign-in-alt"})," ",e.logStat)))),c.a.createElement("div",{className:"col text-right d-none d-sm-block"},c.a.createElement("span",null,c.a.createElement(E.a,{to:"/"},c.a.createElement("i",{className:"fas fa-search mr-1"}),"Search")),c.a.createElement("span",{className:"mx-3"},c.a.createElement("button",{className:"btn btn-link",onClick:t},c.a.createElement("i",{className:"fas fa-book-open mr-1"}),"Saved")),c.a.createElement("span",null,c.a.createElement("button",{className:"text-primary btn btn-link",onClick:function(){return e.logFnc()}},c.a.createElement("i",{className:"fas fa-sign-in-alt mr-1"}),e.logStat)))),c.a.createElement("hr",null)))},k=a(36),j=a.n(k),w=function(e){var t=Object(n.useState)(["text-warning"]),a=Object(m.a)(t,2),r=a[0],s=a[1],l=[],i=function(t){for(var a=0;a<5;a++)a<t?l.push("text-warning"):l.push("");e.editable&&(s(l),e.star(t))};return Object(n.useEffect)((function(){i(e.val),s(l)}),[e.val]),c.a.createElement("div",{className:"mt-3"},c.a.createElement("div",{className:"font-weight-bold"},e.label),c.a.createElement("span",{className:r[0],onClick:function(){return i(1)}},c.a.createElement("i",{className:"fas fa-star mr-1"})),c.a.createElement("span",{className:r[1],onClick:function(){return i(2)}},c.a.createElement("i",{className:"fas fa-star mr-1"})),c.a.createElement("span",{className:r[2],onClick:function(){return i(3)}},c.a.createElement("i",{className:"fas fa-star mr-1"})),c.a.createElement("span",{className:r[3],onClick:function(){return i(4)}},c.a.createElement("i",{className:"fas fa-star mr-1"})),c.a.createElement("span",{className:r[4],onClick:function(){return i(5)}},c.a.createElement("i",{className:"fas fa-star mr-1"})))},O=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){e.clear?s(""):e.defaultComment&&s(e.defaultComment)}),[e.clear,e.defaultComment]),c.a.createElement("div",null,c.a.createElement("div",{className:"font-weight-bold mt-3"},"Comment:"),c.a.createElement("textarea",{className:"form-control",rows:"3",onChange:function(t){var a=t.target.value;s(a),e.comment(a)},value:r}))},x=function(e){return c.a.createElement("div",null,c.a.createElement("button",{className:"mt-1 mb-2 btn btn-success",onClick:function(){return e.saveFnc()}},"SAVE"))},S=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)(""),u=Object(m.a)(l,2),d=u[0],b=u[1],v=Object(n.useState)(""),E=Object(m.a)(v,2),p=E[0],g=E[1],h=Object(n.useState)(""),N=Object(m.a)(h,2),k=N[0],S=N[1],y=Object(n.useState)(""),C=Object(m.a)(y,2),I=C[0],D=C[1],F=Object(n.useState)(""),L=Object(m.a)(F,2),A=L[0],R=L[1],T=Object(n.useState)(""),M=Object(m.a)(T,2),U=M[0],q=M[1],z=Object(n.useState)(""),B=Object(m.a)(z,2),G=B[0],H=B[1],J=Object(n.useState)(""),W=Object(m.a)(J,2),Y=W[0],_=W[1],K=Object(n.useState)(1),P=Object(m.a)(K,2),V=P[0],Q=P[1],X=Object(n.useState)(!1),Z=Object(m.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ae=Object(m.a)(te,2),ne=ae[0],ce=ae[1],re=function(){var e=Object(o.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(j.a),e.next=3,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 3:return t=e.sent,a=t.data.drinks[0].idDrink,e.next=7,f.a.post("/api/verifyDuplicate",{drinkId:a});case 7:e.sent.data.res&&ce("This drink is already saved."),le(t);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(j.a),a=t.id,e.next=4,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(a));case 4:(n=e.sent).data.drinks?(_(t.comments),Q(t.star),le(n)):re();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e){if(e.data.drinks){var t=e.data.drinks[0];s(t.idDrink),b(t.strDrinkThumb),g(t.strDrink),S(t.strCategory),D(t.strGlass),R(t.strAlcoholic),H(t.strInstructions),q(ie(t)),ce("")}};Object(n.useEffect)((function(){e.savedInfo.id?se(e.savedInfo):re()}),[]);var ie=function(e){var t=[],a=[],n=[],r=[];for(var s in e)"strIngredient"===s.substr(0,13)&&e[s]&&t.push(s),"strMeasure"===s.substr(0,10)&&a.push(s);t.forEach((function(t,c){n.push(e[t]),r.push(e[a[c]])}));var l=r.map((function(e,t){return c.a.createElement("div",{key:t},e)}));return n.map((function(e,t){return l[t].props.children&&l[t].props.children.length>1?c.a.createElement("div",{className:"row",key:t},c.a.createElement("div",{className:"col font-weight-bold border-bottom border-right"},e,":"),c.a.createElement("div",{className:"col text-left font-italic border-bottom"},l[t])):c.a.createElement("div",{className:"row",key:t},c.a.createElement("div",{className:"col text-center font-weight-bold border-bottom"},e))}))},oe=function(){var t=Object(o.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Login"!==e.logStat){t.next=4;break}ce("You need to be logged in to save."),t.next=10;break;case 4:return a={drinkId:r,comments:Y,star:V,drinkImg:d,drinkName:p},t.next=7,f.a.post("/api/save",a);case 7:"ok"===(n=t.sent).data.status&&ce("Save successful."),"updated"===n.data.status&&ce("This drink was already saved. Info was updated.");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),me=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(!0),_(""),Q(1),e.next=5,re();case 5:ee(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 text-left mt-1 "},c.a.createElement("img",{src:d,alt:"Drink Thumb",height:"400px",width:"100%",style:{maxWidth:"400px"}}),c.a.createElement("button",{className:"btn btn-outline-primary btn-lg btn-block mt-1 mb-2",onClick:me,width:"100%",style:{maxWidth:"400px"}},"Search")),c.a.createElement("div",{className:"col mt-2"},c.a.createElement("h3",null,c.a.createElement("u",null,p)),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3 col-md-2"},c.a.createElement("div",{className:"font-weight-bold"},"Category: "),c.a.createElement("div",{className:"font-weight-bold"},"Glass: "),c.a.createElement("div",{className:"font-weight-bold"},"Drink: ")),c.a.createElement("div",{className:"col text-left"},c.a.createElement("div",{className:"font-italic"},k),c.a.createElement("div",{className:"font-italic"},I),c.a.createElement("div",{className:"font-italic"},A))),c.a.createElement("div",{className:"font-weight-bold"},"Ingredients:"),c.a.createElement("div",{className:"row container"},c.a.createElement("div",{className:"col text-right"},U)),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("span",{className:"font-weight-bold"},"Instructions: "),c.a.createElement("span",{className:"font-italic"},G)))),c.a.createElement(O,{comment:_,clear:$,defaultComment:Y}),c.a.createElement(w,{star:Q,label:"Rating:",editable:!0,val:V,clear:$}),c.a.createElement("div",{className:"mt-4"},c.a.createElement("small",{className:"text-danger"},ne)),c.a.createElement(x,{saveFnc:oe}))},y=(a(86),function(e){var t=function(){var t=Object(o.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post("/api/delete",{id:a});case 2:e.cbFnc();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"col-lg-3 mb-3 mr-4"},c.a.createElement("div",{className:"card cardLayout"},c.a.createElement("img",{src:e.savedUrl,className:"card-img-top drinkImg",alt:"Not available."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("u",null,c.a.createElement("button",{className:"font-weight-bold text-dark btn btn-link",onClick:function(){var t={id:e.savedDrink,star:e.savedRating,comments:e.savedComments};e.getDrinkInfo(t)}},e.savedName)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-7"},c.a.createElement(w,{star:function(){return null},editable:!1,val:e.savedRating})),c.a.createElement("div",{className:"col text-center pt-2"},c.a.createElement("button",{className:"btn btn-link",onClick:function(){return t(e.drinkColId)}},c.a.createElement("small",{className:"font-weight-bold text-danger"},"Delete")))))))}),C=function(e){var t=Object(n.useState)("Loading..."),a=Object(m.a)(t,2),r=a[0],s=a[1],l=function(t){e.getFnc(t)};return Object(n.useEffect)((function(){"Login"===e.logStat&&v.push("/"),function e(){var t=[];f.a.get("/api/getAllSaved").then((function(a){for(var n=0;n<a.data.length;n++)t.push(c.a.createElement(y,{savedDrink:a.data[n].drinkId,savedUrl:a.data[n].drinkImg,savedRating:a.data[n].star,savedComments:a.data[n].comments,savedName:a.data[n].drinkName,drinkColId:a.data[n]._id,cbFnc:function(){return e()},getDrinkInfo:l,key:a.data[n].drinkId}));s(t)}))}()}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},r))},I=a(94),D=function(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),r=a[0],l=a[1],i=function(){e.cb&&e.cb(),e.setActive&&e.setActive(!1),l(!1)};return Object(n.useEffect)((function(){}),[]),s.a.createPortal(c.a.createElement("div",null,c.a.createElement(I.a,{show:r,onHide:i},c.a.createElement(I.a.Header,{closeButton:!0},c.a.createElement("span",{className:"font-weight-bold"},"Message")),c.a.createElement("form",null,c.a.createElement(I.a.Body,null,c.a.createElement("div",null,e.msg)),c.a.createElement(I.a.Footer,null,c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:i},"OK"))))),document.querySelector("#modal"))},F=function(){var e=Object(n.useState)("Login"),t=Object(m.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({}),l=Object(m.a)(s,2),d=l[0],b=l[1],E=Object(n.useState)(!1),p=Object(m.a)(E,2),g=p[0],h=p[1],k=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/current_user");case 2:e.sent.data?r("Logout"):r("Login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){v.push("/")};Object(n.useEffect)((function(){k()}),[]);var w=function(e){b(e),v.push("/")};return c.a.createElement("div",null,c.a.createElement(u.b,{history:v},c.a.createElement("div",null,c.a.createElement(N,{logStat:a,logFnc:function(){window.location.href="Logout"===a?"/api/logout":"/auth/google"},msgFnc:h}),c.a.createElement(u.a,{exact:!0,path:"/",render:function(){return c.a.createElement(S,{savedInfo:d,logStat:a})}}),c.a.createElement(u.a,{exact:!0,path:"/saved",render:function(){return c.a.createElement(C,{logStat:a,getFnc:w})}}))),c.a.createElement("div",null,function(){if(g)return c.a.createElement(D,{msg:"You need to be logged in to view your saved drinks.",cb:j,setActive:h})}()))};s.a.render(c.a.createElement(F,null),document.querySelector("#root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.a34e90ef.chunk.js.map