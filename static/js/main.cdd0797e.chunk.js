(this["webpackJsonpludicterms.github.io"]=this["webpackJsonpludicterms.github.io"]||[]).push([[0],{13:function(e,t,n){"use strict";var c=n(80),i=n.n(c),s=n(0);t.a=function(e){return Object(s.jsx)("section",{className:i.a.section,children:e.children})}},132:function(e,t){},162:function(e,t,n){"use strict";n.r(t);var c,i,s,a,r,o,l,j,d,b,u,h=n(2),f=n.n(h),O=n(79),x=n.n(O),m=(n(97),n(5)),p=n(11),g=n(12),v=(n(98),n(0)),w=function(e){return Object(v.jsx)("input",{type:"text",placeholder:"\uf002 Search...",onFocus:e.onFocus,onBlur:e.onBlur,onKeyUp:e.onChange,value:e.searchTerm,onChange:e.onChange})},T=n(13),_=n(166),C=g.b.div(c||(c=Object(p.a)(["\n    display: block;\n    align-content: center;\n    margin: 2rem;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #ebebeb;\n    padding: 2rem;\n    border-radius: 12px;\n    max-width: 800px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n"]))),L=n(19),y=function(){var e=Object(L.a)(),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(v.jsx)(T.a,{children:Object(v.jsxs)(C,{children:[!c&&Object(v.jsx)(_.a,{children:n[0].fields.projectDescription}),c&&Object(v.jsx)("p",{children:"Loading..."})]})})},N=n(25),E=n.n(N),k=n(89),A=function(e,t,n){var c=Object(h.useState)(""),i=Object(m.a)(c,2),s=i[0],a=i[1],r=Object(h.useState)([]),o=Object(m.a)(r,2),l=o[0],j=o[1];return Object(h.useEffect)((function(){Object(k.a)(E.a.mark((function n(){var c,i;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=[],s||!t){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,e.filter((function(e){return e.fields.mainTitle.toLowerCase().includes(s.toLowerCase())||e.fields.mainContent.toLowerCase().includes(s.toLowerCase())||e.fields.keywords.toLowerCase().includes(s.toLowerCase())}));case 7:c=n.sent,i=c.sort((function(e,t){var n=e.fields.mainTitle.toLowerCase().includes(s.toLowerCase())?3:e.fields.keywords.toLowerCase().includes(s.toLowerCase())?2:1,c=t.fields.mainTitle.toLowerCase().includes(s.toLowerCase())?3:t.fields.keywords.toLowerCase().includes(s.toLowerCase())?2:1;return n<c?1:n>c?-1:0})),j(i);case 10:case"end":return n.stop()}}),n)})))()}),[e,s,t]),{searchResults:l,searchTerm:s,handleChange:function(e){t&&n(!0),a(e.target.value)}}},S=n(9),F=n(43),B=n.n(F),I=function(e){var t=e.data.fields.slug;return Object(v.jsx)(S.b,{className:B.a.cardsWrapper,style:{textDecoration:"none"},to:"".concat(e.isHome?"articles/":"").concat(t),children:Object(v.jsxs)("div",{className:B.a.card,children:[Object(v.jsx)("h1",{children:e.data.fields.mainTitle}),Object(v.jsxs)("p",{className:B.a.preview,children:[" ",e.data.fields.abstract]}),Object(v.jsxs)("p",{children:["Author: ",e.data.fields.author]})]})},t)},M=n(90),R=n.n(M),W=function(e){return Object(v.jsxs)("div",{className:R.a.cardContainer,children:[!e.isLoading&&e.data.length>0&&e.data.map((function(t){return Object(v.jsx)(I,{isHome:e.isHome,data:t},t.fields.slug)})),e.isLoading&&Object(v.jsx)("p",{children:"Loading..."})]})},D=n(36),z=Object(D.a)(),H=function(){var e=Object(h.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(h.useState)(!0),s=Object(m.a)(i,2),a=s[0],r=s[1];return Object(h.useEffect)((function(){z.then((function(e){c(e),r(!1)})).catch((function(e){alert(e)}))}),[]),[n,a]},U=n(37),G=g.b.div(i||(i=Object(p.a)(["\n  margin-top: 100px;\n"]))),P=function(){var e=H(),t=Object(m.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0})),s=Object(h.useState)(!1),a=Object(m.a)(s,2),r=a[0],o=a[1],l=A(i,!0,o),j=l.searchResults,d=l.searchTerm,b=l.handleChange;return f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(G,{children:[Object(v.jsxs)(T.a,{children:[Object(v.jsx)(w,{searchTerm:d,onChange:b,onKeyUp:b,onBlur:function(){setTimeout((function(){o(!1)}),500)}}),r&&(j.length?Object(v.jsx)(W,{isLoading:c,data:j,isHome:!0}):Object(v.jsxs)(C,{children:[Object(v.jsx)("h2",{children:"No results found"}),Object(v.jsx)("p",{children:"Try to search for a different keyword or contact us"})]}))]}),!r&&Object(v.jsxs)(f.a.Fragment,{children:[Object(v.jsx)(U.a,{path:"articles",className:"btnDark centered",style:{width:"100px",height:"20px",fontSize:"18px",fontWeight:500},buttonName:"Browse"}),Object(v.jsx)(y,{})]})]})},Q=n(21),K=n.n(Q),V=n.p+"static/media/eolt_logo.69abea68.svg",J=n.p+"static/media/eolt_logo_white.5142cef3.svg",q=g.b.img(s||(s=Object(p.a)(["\n  width: 200px;\n  height: 60px;\n  margin-left: 10px;\n"]))),X=g.b.span(a||(a=Object(p.a)(["\n  display: block;\n\n  @media screen and (max-width: 900px) {\n    display: none;\n  }\n"]))),Y=g.b.span(r||(r=Object(p.a)(["\n  display: none;\n\n  @media screen and (max-width: 900px) {\n    display: block;\n  }\n"]))),Z=function(){var e=Object(h.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],i=function(){var e=window.scrollY;c(e>=100)};Object(h.useEffect)((function(){window.addEventListener("scroll",i)}),[n]);var s=n?K.a.scrolled:"",a=n?Object(v.jsx)(q,{src:J,alt:"eoltLogoWhite"}):Object(v.jsx)(q,{src:V,alt:"eoltLogo"});return Object(v.jsxs)("header",{className:s,children:[Object(v.jsxs)(S.b,{to:"/",children:[" ",a]}),Object(v.jsx)("nav",{children:Object(v.jsxs)("div",{className:K.a.buttonContainer,children:[Object(v.jsxs)(S.c,{to:"toc",className:function(e){return e.isActive?K.a.active:K.a.btnLight},children:[Object(v.jsx)(X,{children:"Table of Contents"}),Object(v.jsx)(Y,{children:"ToC"})]}),Object(v.jsx)(S.c,{to:"about",className:function(e){return e.isActive?K.a.active:K.a.btnLight},children:"About"}),Object(v.jsx)(S.c,{to:"contact",className:function(e){return e.isActive?K.a.active:K.a.btnLight},children:"Contact"})]})})]})},$=n(17),ee=n.n($),te=n.p+"static/media/erc_eu_logo.22d24860.jpg",ne=function(){return Object(v.jsxs)("footer",{children:[Object(v.jsxs)("section",{className:ee.a.ftMain,children:[Object(v.jsxs)("div",{className:ee.a.ftMainItem,children:[Object(v.jsx)("p",{className:ee.a.ftTitle,children:"About"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(S.b,{to:"editorial-information",children:"Editorial Information"})}),Object(v.jsx)("li",{children:Object(v.jsx)(S.b,{to:"about",children:"About the EoLT"})}),Object(v.jsx)("li",{children:Object(v.jsx)(S.b,{to:"how-to-cite",children:"How to Cite the EoLT"})}),Object(v.jsx)("li",{children:Object(v.jsx)(S.b,{to:"contact",children:"Contact"})})]})]}),Object(v.jsxs)("div",{className:ee.a.ftMainItem,children:[Object(v.jsx)("p",{className:ee.a.ftTitle,children:"Browse"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(S.b,{to:"toc",children:"Table of Contents"})}),Object(v.jsx)("li",{children:Object(v.jsx)(S.b,{to:"author-list",children:"List of Authors"})}),Object(v.jsx)("li",{children:Object(v.jsx)(S.b,{to:"recent-articles",children:"Recent Articles"})})]})]}),Object(v.jsxs)("div",{className:ee.a.ftMainItem,children:[Object(v.jsx)("p",{className:ee.a.ftTitle,children:"Funded by"}),Object(v.jsxs)("ul",{className:ee.a.eu,children:[Object(v.jsx)("li",{children:Object(v.jsx)("p",{children:"This research has received funding from the European Research Council (ERC) under the European Union\u2019s Horizon 2020 research and innovation programme (Grant Agreement No [695528] \u2013 MSG: Making Sense of Games)."})}),Object(v.jsx)("li",{children:Object(v.jsx)("img",{src:te,alt:"euLogo"})})]})]})]}),Object(v.jsx)("section",{className:ee.a.ftLegal,children:Object(v.jsx)("ul",{className:ee.a.ftLegalList,children:Object(v.jsxs)("li",{children:["\xa9 2022 Encyclopedia of Ludic Terms. All Rights Reserved (unless specified otherwise). Developed by"," ",Object(v.jsx)("a",{href:"https://sophiaauer.me/",rel:"noreferrer",target:"_blank",style:{textDecoration:"none",color:"#bbb"},children:"Sophia Auer"}),"."]})})})]})},ce=function(){var e=H(),t=Object(m.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0})),s=A(i,!1),a=s.searchResults,r=s.searchTerm,o=s.handleChange;return Object(v.jsxs)(T.a,{children:[Object(v.jsx)(w,{searchTerm:r,onChange:o}),a.length?Object(v.jsx)(W,{isLoading:c,data:a,isHome:!1}):Object(v.jsxs)(C,{children:[Object(v.jsx)("h2",{children:"No results found"}),Object(v.jsx)("p",{children:"Try to search for a different keyword or contact us"})]})]})},ie=n(6),se=Object(g.b)(_.a)(o||(o=Object(p.a)(['\n  && {\n    li {\n      margin: 16px 0;\n      &::marker {\n        content: "(" counter(list-item) ") ";\n      }\n    }\n  }\n']))),ae=function(){var e=Object(L.a)(),t=Object(m.a)(e,2),n=t[0],c=t[1];return f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:"pageTitle",children:Object(v.jsx)("h1",{children:"Encyclopedia of Ludic Terms"})}),!c&&Object(v.jsx)(se,{children:n[0].fields.about}),c&&Object(v.jsx)("p",{children:"Loading..."})]})},re=Object(g.b)(C)(l||(l=Object(p.a)(["\n  margin-left: 0;\n  margin-right: 0;\n"]))),oe=function(){var e=Object(L.a)(),t=Object(m.a)(e,2),n=t[0],c=t[1];return f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:"pageTitle",children:Object(v.jsx)("h1",{children:"Contact Information"})}),Object(v.jsx)("div",{children:Object(v.jsxs)(re,{children:[!c&&Object(v.jsx)(_.a,{children:n[0].fields.contactUs}),c&&Object(v.jsx)("p",{children:"Loading..."})]})})]})},le=g.b.div(j||(j=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  margin-top: 100px;\n  gap: 20px;\n\n  h1 {\n    font-size: 120px;\n    color: #006838;\n    margin: 0;\n    letter-spacing: 15px;\n  }\n  h3 {\n    font-size: 45px;\n    margin: 0;\n  }\n  h4 {\n    font-size: 30px;\n    margin: 0;\n  }\n"]))),je=function(){return Object(v.jsxs)(le,{style:{textAlign:"center"},children:[Object(v.jsx)("h1",{children:"404"}),Object(v.jsx)("h3",{children:"Oops..."}),Object(v.jsx)("h4",{children:"page not found"}),Object(v.jsx)(U.a,{path:"/",buttonName:"Go back to home",className:"btnDark centered"})]})},de=function(){var e=H(),t=Object(m.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.author<t.fields.author?-1:e.fields.author>t.fields.author?1:0}));return f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:"pageTitle",children:Object(v.jsx)("h1",{children:"List of Authors"})}),Object(v.jsx)("div",{children:!c&&i.length>0&&i.map((function(e){return Object(v.jsxs)("p",{children:[e.fields.author," "]})}))})]})},be=g.b.ul(d||(d=Object(p.a)(["\n  line-height: 35px;\n"]))),ue=function(){var e=Object(L.a)(),t=Object(m.a)(e,2),n=t[0],c=t[1];return f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:"pageTitle",children:Object(v.jsx)("h1",{children:"Editorial Information"})}),!c&&Object(v.jsx)(_.a,{children:n[0].fields.editorialText}),c&&Object(v.jsx)("p",{children:"Loading..."}),Object(v.jsx)("h2",{children:"EoLT Editorial Board"}),Object(v.jsxs)(be,{children:[!c&&Object(v.jsx)(_.a,{children:n[0].fields.editorialBoard}),c&&Object(v.jsx)("p",{children:"Loading..."})]})]})},he=Object(g.b)(S.b)(b||(b=Object(p.a)(["\n  text-decoration: none;\n  line-height: 35px;\n  font-size: 18px;\n  color: black;\n  :hover {\n    color: #006838;\n    text-decoration: underline;\n  }\n  li {\n    list-style: none;\n  }\n"]))),fe=function(){var e=H(),t=Object(m.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0}));return f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:"pageTitle",children:Object(v.jsx)("h1",{children:"Table of Contents"})}),Object(v.jsx)("div",{style:{width:"max-content"},children:!c&&i.length>0&&i.map((function(e){return Object(v.jsx)(he,{to:"../articles/".concat(e.fields.slug),children:Object(v.jsx)("li",{children:e.fields.mainTitle},e.fields.slug)})}))})]})},Oe=function(){var e=Object(L.a)(),t=Object(m.a)(e,2),n=t[0],c=t[1];return f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:"pageTitle",children:Object(v.jsx)("h1",{children:"How to Cite"})}),!c&&Object(v.jsx)(_.a,{children:n[0].fields.howToCite}),c&&Object(v.jsx)("p",{children:"Loading..."})]})},xe=Object(g.b)(S.b)(u||(u=Object(p.a)(["\n  text-decoration: none;\n  line-height: 35px;\n  font-size: 18px;\n  color: black;\n  :hover {\n    color: #006838;\n    text-decoration: underline;\n  }\n  li {\n    list-style: none;\n  }\n"]))),me=function(){var e=H(),t=Object(m.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.sys.createdAt>t.sys.createdAt?-1:e.sys.createdAt<t.sys.createdAt?1:0}));return console.log(i),console.log(n),f.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(v.jsxs)(T.a,{children:[Object(v.jsx)("div",{className:"pageTitle",children:Object(v.jsx)("h1",{children:"Recent Articles"})}),Object(v.jsx)("div",{style:{width:"max-content"},children:!c&&i.length>0&&i.slice(0,5).map((function(e){return Object(v.jsx)(xe,{to:"../articles/".concat(e.fields.slug),children:Object(v.jsx)("li",{children:e.fields.mainTitle},e.fields.slug)})}))})]})},pe=n(56),ge=n.n(pe),ve=Object(h.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,179))})),we=function(){return Object(v.jsxs)("div",{className:ge.a.layoutWrapper,children:[Object(v.jsx)(Z,{}),Object(v.jsx)("div",{className:ge.a.layout,children:Object(v.jsx)(h.Suspense,{fallback:Object(v.jsx)("p",{style:{textAlign:"center"},children:"Loading..."}),children:Object(v.jsxs)(ie.c,{children:[Object(v.jsx)(ie.a,{path:"/",element:Object(v.jsx)(P,{})}),Object(v.jsx)(ie.a,{path:"/articles",element:Object(v.jsx)(ce,{})}),Object(v.jsx)(ie.a,{path:"/articles/:contentId",element:Object(v.jsx)(ve,{})}),Object(v.jsx)(ie.a,{path:"/about",element:Object(v.jsx)(ae,{})}),Object(v.jsx)(ie.a,{path:"/contact",element:Object(v.jsx)(oe,{})}),Object(v.jsx)(ie.a,{path:"/author-list",element:Object(v.jsx)(de,{})}),Object(v.jsx)(ie.a,{path:"/editorial-information",element:Object(v.jsx)(ue,{})}),Object(v.jsx)(ie.a,{path:"/toc",element:Object(v.jsx)(fe,{})}),Object(v.jsx)(ie.a,{path:"/how-to-cite",element:Object(v.jsx)(Oe,{})}),Object(v.jsx)(ie.a,{path:"/recent-articles",element:Object(v.jsx)(me,{})}),Object(v.jsx)(ie.a,{path:"*",element:Object(v.jsx)(je,{})})]})})}),Object(v.jsx)(ne,{})]})},Te=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,178)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};x.a.render(Object(v.jsx)(S.a,{children:Object(v.jsx)(we,{})}),document.getElementById("root")),Te()},17:function(e,t,n){e.exports={ftMainItem:"Footer_ftMainItem__22rN7",ftLegal:"Footer_ftLegal__7QVoK",ftTitle:"Footer_ftTitle__16Msb",ftMain:"Footer_ftMain__FUbNr",eu:"Footer_eu__qRx9o",ftLegalList:"Footer_ftLegalList__1I5Od"}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(5),i=n(2),s=n(36),a=Object(s.b)(),r=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],s=t[1],r=Object(i.useState)(!0),o=Object(c.a)(r,2),l=o[0],j=o[1];return Object(i.useEffect)((function(){a.then((function(e){s(e),j(!1)})).catch((function(e){alert(e)}))}),[]),[n,l]}},21:function(e,t,n){e.exports={scrolled:"Navbar_scrolled__wgQ-v",buttonContainer:"Navbar_buttonContainer__1SOht",active:"Navbar_active__1_PBO"}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a}));var c=n(103).createClient({space:"cr5wpatokgnn",accessToken:"MicnxUBs5bVvo69DwyXWGWpBDr2Vz2vHCWWkBIwPU9A"}),i=function(){return c.getEntries({content_type:"gameArticle"}).then((function(e){return e.items.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0}))}))},s=function(e){return c.getEntries({"fields.slug":e,content_type:"gameArticle"}).then((function(e){return e.items}))},a=function(){return c.getEntries({content_type:"generalContent"}).then((function(e){return e.items}))}},37:function(e,t,n){"use strict";var c=n(9),i=n(0);t.a=function(e){return Object(i.jsx)(c.b,{to:e.path,className:e.className,style:e.style,onClick:e.onClick,children:e.buttonName})}},43:function(e,t,n){e.exports={cardsWrapper:"Card_cardsWrapper__1LDBp",card:"Card_card__1eE8R",preview:"Card_preview__34tlp"}},54:function(e,t){},56:function(e,t,n){e.exports={layoutWrapper:"App_layoutWrapper__1orrE",layout:"App_layout__1LipR"}},80:function(e,t,n){e.exports={section:"Section_section__3vam2"}},90:function(e,t,n){e.exports={cardContainer:"CardContainer_cardContainer__7AQTQ"}},97:function(e,t,n){},98:function(e,t,n){}},[[162,1,2]]]);
//# sourceMappingURL=main.cdd0797e.chunk.js.map