(this["webpackJsonpludicterms.github.io"]=this["webpackJsonpludicterms.github.io"]||[]).push([[0],{131:function(e,t){},162:function(e,t,n){"use strict";n.r(t);var c,i,r,a,s,o,l,d,j,b,u,h,f,x,O,p,m=n(2),g=n.n(m),v=n(77),w=n.n(v),y=(n(96),n(4)),T=n(9),C=n(10),_=(n(97),n(0)),L=function(e){return Object(_.jsx)("input",{type:"text",placeholder:"\uf002 Search...",onFocus:e.onFocus,onBlur:e.onBlur,onKeyUp:e.onChange,value:e.searchTerm,onChange:e.onChange})},N=n(78),E=n.n(N),k=function(e){return Object(_.jsx)("section",{className:E.a.section,children:e.children})},A=n(173),I=C.b.div(c||(c=Object(T.a)(["\n    display: block;\n    align-content: center;\n    margin: 2rem;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #ebebeb;\n    padding: 2rem;\n    border-radius: 12px;\n    max-width: 800px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n"]))),S=n(102).createClient({space:"cr5wpatokgnn",accessToken:"MicnxUBs5bVvo69DwyXWGWpBDr2Vz2vHCWWkBIwPU9A"}),B=S.getEntries({content_type:"generalContent"}).then((function(e){return e.items})),M=function(){var e=Object(m.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],i=Object(m.useState)(!0),r=Object(y.a)(i,2),a=r[0],s=r[1];return Object(m.useEffect)((function(){B.then((function(e){c(e),s(!1)})).catch((function(e){alert(e)}))}),[]),[n,a]},W=function(){var e=M(),t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(_.jsx)(k,{children:Object(_.jsxs)(I,{children:[!c&&Object(_.jsx)(A.a,{children:n[0].fields.projectDescription}),c&&Object(_.jsx)("p",{children:"Loading..."})]})})},F=n(25),H=n.n(F),D=n(87),R=function(e,t,n){var c=Object(m.useState)(""),i=Object(y.a)(c,2),r=i[0],a=i[1],s=Object(m.useState)([]),o=Object(y.a)(s,2),l=o[0],d=o[1];return Object(m.useEffect)((function(){Object(D.a)(H.a.mark((function n(){var c,i;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=[],r||!t){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,e.filter((function(e){return e.fields.mainTitle.toLowerCase().includes(r.toLowerCase())||e.fields.mainContent.toLowerCase().includes(r.toLowerCase())||e.fields.keywords.toLowerCase().includes(r.toLowerCase())}));case 7:c=n.sent,i=c.sort((function(e,t){var n=e.fields.mainTitle.toLowerCase().includes(r.toLowerCase())?3:e.fields.keywords.toLowerCase().includes(r.toLowerCase())?2:1,c=t.fields.mainTitle.toLowerCase().includes(r.toLowerCase())?3:t.fields.keywords.toLowerCase().includes(r.toLowerCase())?2:1;return n<c?1:n>c?-1:0})),d(i);case 10:case"end":return n.stop()}}),n)})))()}),[e,r,t]),{searchResults:l,searchTerm:r,handleChange:function(e){t&&n(!0),a(e.target.value)}}},z=n(11),P=n(42),U=n.n(P),G=function(e){var t=e.data.fields.slug;return Object(_.jsx)(z.b,{className:U.a.cardsWrapper,style:{textDecoration:"none"},to:"".concat(e.isHome?"articles/":"").concat(t),children:Object(_.jsxs)("div",{className:U.a.card,children:[Object(_.jsx)("h1",{children:e.data.fields.mainTitle}),Object(_.jsxs)("p",{className:U.a.preview,children:[" ",e.data.fields.abstract]}),Object(_.jsxs)("p",{children:["Author: ",e.data.fields.author]})]})},t)},V=n(88),q=n.n(V),Q=function(e){return Object(_.jsxs)("div",{className:q.a.cardContainer,children:[!e.isLoading&&e.data.length>0&&e.data.map((function(t){return Object(_.jsx)(G,{isHome:e.isHome,data:t},t.fields.slug)})),e.isLoading&&Object(_.jsx)("p",{children:"Loading..."})]})},K=S.getEntries({content_type:"gameArticle"}).then((function(e){return e.items.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0}))})),J=function(){var e=Object(m.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],i=Object(m.useState)(!0),r=Object(y.a)(i,2),a=r[0],s=r[1];return Object(m.useEffect)((function(){K.then((function(e){c(e),s(!1)})).catch((function(e){alert(e)}))}),[]),[n,a]},X=function(e){return Object(_.jsx)(z.b,{to:e.path,className:e.className,style:e.style,onClick:e.onClick,children:e.buttonName})},Y=C.b.div(i||(i=Object(T.a)(["\n  margin-top: 100px;\n"]))),Z=function(){var e=J(),t=Object(y.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0})),r=Object(m.useState)(!1),a=Object(y.a)(r,2),s=a[0],o=a[1],l=R(i,!0,o),d=l.searchResults,j=l.searchTerm,b=l.handleChange;return g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(Y,{children:[Object(_.jsxs)(k,{children:[Object(_.jsx)(L,{searchTerm:j,onChange:b,onKeyUp:b,onBlur:function(){setTimeout((function(){o(!1)}),500)}}),s&&(d.length?Object(_.jsx)(Q,{isLoading:c,data:d,isHome:!0}):Object(_.jsxs)(I,{children:[Object(_.jsx)("h2",{children:"No results found"}),Object(_.jsx)("p",{children:"Try to search for a different keyword or contact us"})]}))]}),!s&&Object(_.jsxs)(g.a.Fragment,{children:[Object(_.jsx)(X,{path:"articles",className:"btnDark centered",style:{width:"100px",height:"20px",fontSize:"18px",fontWeight:500},buttonName:"Browse"}),Object(_.jsx)(W,{})]})]})},$=n(20),ee=n.n($),te=n.p+"static/media/eolt_logo.69abea68.svg",ne=n.p+"static/media/eolt_logo_white.5142cef3.svg",ce=C.b.img(r||(r=Object(T.a)(["\n  width: 200px;\n  height: 60px;\n  margin-left: 10px;\n"]))),ie=C.b.span(a||(a=Object(T.a)(["\n  display: block;\n\n  @media screen and (max-width: 900px) {\n    display: none;\n  }\n"]))),re=C.b.span(s||(s=Object(T.a)(["\n  display: none;\n\n  @media screen and (max-width: 900px) {\n    display: block;\n  }\n"]))),ae=function(){var e=Object(m.useState)(!1),t=Object(y.a)(e,2),n=t[0],c=t[1],i=function(){var e=window.scrollY;c(e>=100)};Object(m.useEffect)((function(){window.addEventListener("scroll",i)}),[n]);var r=n?ee.a.scrolled:"",a=n?Object(_.jsx)(ce,{src:ne,alt:"eoltLogoWhite"}):Object(_.jsx)(ce,{src:te,alt:"eoltLogo"});return Object(_.jsxs)("header",{className:r,children:[Object(_.jsxs)(z.b,{to:"/",children:[" ",a]}),Object(_.jsx)("nav",{children:Object(_.jsxs)("div",{className:ee.a.buttonContainer,children:[Object(_.jsxs)(z.c,{to:"toc",className:function(e){return e.isActive?ee.a.active:ee.a.btnLight},children:[Object(_.jsx)(ie,{children:"Table of Contents"}),Object(_.jsx)(re,{children:"ToC"})]}),Object(_.jsx)(z.c,{to:"about",className:function(e){return e.isActive?ee.a.active:ee.a.btnLight},children:"About"}),Object(_.jsx)(z.c,{to:"contact",className:function(e){return e.isActive?ee.a.active:ee.a.btnLight},children:"Contact"})]})})]})},se=n(18),oe=n.n(se),le=n.p+"static/media/erc_eu_logo.22d24860.jpg",de=function(){return Object(_.jsxs)("footer",{children:[Object(_.jsxs)("section",{className:oe.a.ftMain,children:[Object(_.jsxs)("div",{className:oe.a.ftMainItem,children:[Object(_.jsx)("p",{className:oe.a.ftTitle,children:"About"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(z.b,{to:"editorial-information",children:"Editorial Information"})}),Object(_.jsx)("li",{children:Object(_.jsx)(z.b,{to:"about",children:"About the EoLT"})}),Object(_.jsx)("li",{children:Object(_.jsx)(z.b,{to:"how-to-cite",children:"How to Cite the EoLT"})}),Object(_.jsx)("li",{children:Object(_.jsx)(z.b,{to:"contact",children:"Contact"})})]})]}),Object(_.jsxs)("div",{className:oe.a.ftMainItem,children:[Object(_.jsx)("p",{className:oe.a.ftTitle,children:"Browse"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(z.b,{to:"toc",children:"Table of Contents"})}),Object(_.jsx)("li",{children:Object(_.jsx)(z.b,{to:"author-list",children:"List of Authors"})}),Object(_.jsx)("li",{children:Object(_.jsx)(z.b,{to:"recent-articles",children:"Recent Articles"})})]})]}),Object(_.jsxs)("div",{className:oe.a.ftMainItem,children:[Object(_.jsx)("p",{className:oe.a.ftTitle,children:"Funded by"}),Object(_.jsxs)("ul",{className:oe.a.eu,children:[Object(_.jsx)("li",{children:Object(_.jsx)("p",{children:"This research has received funding from the European Research Council (ERC) under the European Union\u2019s Horizon 2020 research and innovation programme (Grant Agreement No [695528] \u2013 MSG: Making Sense of Games)."})}),Object(_.jsx)("li",{children:Object(_.jsx)("img",{src:le,alt:"euLogo"})})]})]})]}),Object(_.jsx)("section",{className:oe.a.ftLegal,children:Object(_.jsx)("ul",{className:oe.a.ftLegalList,children:Object(_.jsxs)("li",{children:["\xa9 2022 Encyclopedia of Ludic Terms. All Rights Reserved (unless specified otherwise). Developed by"," ",Object(_.jsx)("a",{href:"https://sophiaauer.me/",rel:"noreferrer",target:"_blank",style:{textDecoration:"none",color:"#bbb"},children:"Sophia Auer"}),"."]})})})]})},je=function(){var e=J(),t=Object(y.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0})),r=R(i,!1),a=r.searchResults,s=r.searchTerm,o=r.handleChange;return Object(_.jsxs)(k,{children:[Object(_.jsx)(L,{searchTerm:s,onChange:o}),a.length?Object(_.jsx)(Q,{isLoading:c,data:a,isHome:!1}):Object(_.jsxs)(I,{children:[Object(_.jsx)("h2",{children:"No results found"}),Object(_.jsx)("p",{children:"Try to search for a different keyword or contact us"})]})]})},be=n(6),ue=function(e){var t=function(e){return S.getEntries({"fields.slug":e,content_type:"gameArticle"}).then((function(e){return e.items}))}(e),n=Object(m.useState)(null),c=Object(y.a)(n,2),i=c[0],r=c[1],a=Object(m.useState)(!0),s=Object(y.a)(a,2),o=s[0],l=s[1];return Object(m.useEffect)((function(){t.then((function(e){r(e[0].fields),l(!1)})).catch((function(e){alert(e)}))}),[t]),[i,o]},he=n(90),fe=n(43),xe=function(){var e=Object(m.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(m.useEffect)((function(){var e=function(e){var t=[];return e.forEach((function(e,n){var c=e.innerText,i=e.id;"H1"===e.nodeName?t.push({id:i,title:c,items:[]}):"H2"===e.nodeName&&t.length>0&&t[t.length-1].items.push({id:i,title:c})})),t}(Array.from(document.querySelectorAll("h1, h2")));c(e)}),[]),{nestedHeadings:n}},Oe=function(e){var t=g.a.useRef({});g.a.useEffect((function(){var n=new IntersectionObserver((function(n){t.current=n.reduce((function(e,t){return e[t.target.id]=t,e}),t.current);var i=[];Object.keys(t.current).forEach((function(e){var n=t.current[e];n.isIntersecting&&i.push(n)}));var r=function(e){return c.findIndex((function(t){return t.id===e}))};if(1===i.length)e(i[0].target.id);else if(i.length>1){var a=i.sort((function(e,t){return r(e.target.id)>r(t.target.id)}));e(a[0].target.id)}}),{root:document.querySelector("iframe"),rootMargin:"500px"}),c=Array.from(document.querySelectorAll("h1, h2"));return c.forEach((function(e){return n.observe(e)})),function(){return n.disconnect()}}),[e])},pe=function(e){var t=e.headings,n=e.activeId;return Object(_.jsx)("ul",{children:t.map((function(e){return Object(_.jsxs)("li",{className:e.id===n?"active":"",children:[Object(_.jsx)(z.b,{to:"./#".concat(e.id),onClick:function(t){t.preventDefault(),document.getElementById("".concat(e.id)).scrollIntoView({behavior:"smooth"})},children:e.title}),e.items.length>0&&Object(_.jsx)("ul",{children:e.items.map((function(e){return Object(_.jsx)("li",{className:e.id===n?"active":"",children:Object(_.jsx)(z.b,{to:"./#".concat(e.id),onClick:function(t){t.preventDefault(),document.getElementById("".concat(e.id)).scrollIntoView({behavior:"smooth"})},children:e.title})},"".concat(e.id))}))})]},"".concat(e.id))}))})},me=C.b.div(o||(o=Object(T.a)(["\n  ","\n  align-self: flex-start;\n\n  padding: 16px;\n  margin: 8px;\n  display: flex;\n  flex-flow: column;\n  max-height: calc(100vh - 70px);\n  background-color: #f8f7f8;\n  border-radius: 12px;\n\n  /* @media screen and (max-width: 900px) {\n    display: none;\n  } */\n\n  ul {\n    line-height: 1.8;\n    li {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      text-align: left;\n      ul {\n        li {\n          display: flex;\n          flex-direction: column;\n          gap: 12px;\n        }\n      }\n      a {\n        text-decoration: none;\n        color: #006838;\n      }\n    }\n  }\n\n  li.active > a {\n    color: #767676;\n    text-decoration: underline;\n  }\n"])),(function(e){return!e.isMobile&&Object(C.a)(l||(l=Object(T.a)(["\n      position: sticky;\n      z-index: 2;\n      top: 35%;\n      right: 16px;\n      overflow: auto;\n      width: 300px;\n      min-width: 200px;\n    "])))})),ge=function(e){var t=g.a.useState(),n=Object(y.a)(t,2),c=n[0],i=n[1],r=xe().nestedHeadings;return Oe(i),Object(_.jsx)(me,{"aria-label":"Table of contents",isMobile:e.isMobile,children:Object(_.jsx)(pe,{headings:r,activeId:c})})},ve=Object(C.b)(A.a)(d||(d=Object(T.a)(["\n  && {\n    li {\n      line-height: 2;\n      scroll-margin-top: 120px;\n    }\n    h1 {\n      scroll-margin-top: 120px;\n    }\n    h2 {\n      scroll-margin-top: 120px;\n    }\n    table {\n      max-width: 100%;\n    }\n\n    tr:nth-child(odd) {\n      background-color: #eee;\n    }\n\n    th {\n      background-color: #555;\n      color: #fff;\n    }\n\n    th,\n    td {\n      text-align: left;\n      padding: 0.5em 1em;\n    }\n\n    img {\n      width: 60%;\n    }\n\n    @media screen and (max-width: 900px) {\n      img {\n        width: 100%;\n      }\n    }\n  }\n"]))),we=C.b.span(j||(j=Object(T.a)(["\n  display: none;\n\n  @media screen and (max-width: 900px) {\n    display: block;\n  }\n"]))),ye=function(e){var t=e.article,n=M(),c=Object(y.a)(n,2),i=c[0],r=c[1];return Object(_.jsxs)(g.a.Fragment,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("p",{style:{marginBottom:"15px",lineHeight:"50px"},children:t.mainTitle})}),Object(_.jsx)("h4",{style:{fontSize:"18px",marginBottom:"35px",marginTop:"0",fontWeight:"400"},children:t.author}),Object(_.jsx)("h3",{style:{fontStyle:"italic",fontWeight:"normal"},children:t.subtitle}),Object(_.jsx)(A.a,{children:t.abstract}),Object(_.jsx)(we,{children:Object(_.jsx)(ge,{isMobile:!0})}),Object(_.jsx)(ve,{remarkPlugins:[he.a],rehypePlugins:[fe.a],children:t.mainContent,id:"mainContent"}),Object(_.jsx)("h1",{id:"bibliography-".concat(t.slug),style:{scrollMarginTop:"120px"},children:"Bibliography"}),Object(_.jsx)(A.a,{children:t.bibliography,rehypePlugins:[fe.a]}),t.authorInfo&&Object(_.jsx)(A.a,{children:t.authorInfo,rehypePlugins:[fe.a]}),Object(_.jsx)("h1",{id:"copyright-".concat(t.slug),style:{scrollMarginTop:"120px"},children:"Copyright"}),!r&&Object(_.jsx)(ve,{children:i[0].fields.copyright}),r&&Object(_.jsx)("p",{children:"Loading..."})]})},Te=function(){var e=Object(m.useState)(window.innerWidth),t=Object(y.a)(e,2),n=t[0],c=t[1];return Object(m.useEffect)((function(){var e=function(){return c(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:n,setWidth:c}},Ce=C.b.div(b||(b=Object(T.a)(["\n  position: relative;\n  height: max-content;\n  display: flex;\n\n  @media screen and (max-width: 900px) {\n  \n  display: block;\n}\n"]))),_e=function(){var e=Object(be.g)().contentId,t=Object(be.f)(),n=ue(e),c=Object(y.a)(n,2),i=c[0],r=c[1],a=Te(),s=a.width,o=a.setWidth;if(g.a.useEffect((function(){return s>475&&window.scrollTo(0,0),function(){return o(null)}}),[s,o]),r)return Object(_.jsx)("p",{style:{textAlign:"center"},children:"Loading..."});return document.getElementById("root"),Object(_.jsxs)(Ce,{children:[Object(_.jsx)(k,{children:Object(_.jsxs)("div",{children:[Object(_.jsx)(X,{className:"btnLight leftAligned",style:{width:"70px",height:"15px"},onClick:function(e){e.preventDefault(),t(-1)},buttonName:"Go Back",path:""}),!r&&Object(_.jsx)(ye,{article:i})]})}),Object(_.jsx)(ge,{})]})},Le=Object(C.b)(A.a)(u||(u=Object(T.a)(['\n  && {\n    li {\n      margin: 16px 0;\n      &::marker {\n        content: "(" counter(list-item) ") ";\n      }\n    }\n  }\n']))),Ne=function(){var e=M(),t=Object(y.a)(e,2),n=t[0],c=t[1];return g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(k,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("h1",{children:"Encyclopedia of Ludic Terms"})}),!c&&Object(_.jsx)(Le,{children:n[0].fields.about}),c&&Object(_.jsx)("p",{children:"Loading..."})]})},Ee=Object(C.b)(I)(h||(h=Object(T.a)(["\n  margin-left: 0;\n  margin-right: 0;\n"]))),ke=function(){var e=M(),t=Object(y.a)(e,2),n=t[0],c=t[1];return g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(k,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("h1",{children:"Contact Information"})}),Object(_.jsx)("div",{children:Object(_.jsxs)(Ee,{children:[!c&&Object(_.jsx)(A.a,{children:n[0].fields.contactUs}),c&&Object(_.jsx)("p",{children:"Loading..."})]})})]})},Ae=C.b.div(f||(f=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  margin-top: 100px;\n  gap: 20px;\n\n  h1 {\n    font-size: 120px;\n    color: #006838;\n    margin: 0;\n    letter-spacing: 15px;\n  }\n  h3 {\n    font-size: 45px;\n    margin: 0;\n  }\n  h4 {\n    font-size: 30px;\n    margin: 0;\n  }\n"]))),Ie=function(){return Object(_.jsxs)(Ae,{style:{textAlign:"center"},children:[Object(_.jsx)("h1",{children:"404"}),Object(_.jsx)("h3",{children:"Oops..."}),Object(_.jsx)("h4",{children:"page not found"}),Object(_.jsx)(X,{path:"/",buttonName:"Go back to home",className:"btnDark centered"})]})},Se=function(){var e=J(),t=Object(y.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.author<t.fields.author?-1:e.fields.author>t.fields.author?1:0}));return g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(k,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("h1",{children:"List of Authors"})}),Object(_.jsx)("div",{children:!c&&i.length>0&&i.map((function(e){return Object(_.jsxs)("p",{children:[e.fields.author," "]})}))})]})},Be=C.b.ul(x||(x=Object(T.a)(["\n  line-height: 35px;\n"]))),Me=function(){var e=M(),t=Object(y.a)(e,2),n=t[0],c=t[1];return g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(k,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("h1",{children:"Editorial Information"})}),!c&&Object(_.jsx)(A.a,{children:n[0].fields.editorialText}),c&&Object(_.jsx)("p",{children:"Loading..."}),Object(_.jsx)("h2",{children:"EoLT Editorial Board"}),Object(_.jsxs)(Be,{children:[!c&&Object(_.jsx)(A.a,{children:n[0].fields.editorialBoard}),c&&Object(_.jsx)("p",{children:"Loading..."})]})]})},We=Object(C.b)(z.b)(O||(O=Object(T.a)(["\n  text-decoration: none;\n  line-height: 35px;\n  font-size: 18px;\n  color: black;\n  :hover {\n    color: #006838;\n    text-decoration: underline;\n  }\n  li {\n    list-style: none;\n  }\n"]))),Fe=function(){var e=J(),t=Object(y.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.fields.mainTitle<t.fields.mainTitle?-1:e.fields.mainTitle>t.fields.mainTitle?1:0}));return g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(k,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("h1",{children:"Table of Contents"})}),Object(_.jsx)("div",{style:{width:"max-content"},children:!c&&i.length>0&&i.map((function(e){return Object(_.jsx)(We,{to:"../articles/".concat(e.fields.slug),children:Object(_.jsx)("li",{children:e.fields.mainTitle},e.fields.slug)})}))})]})},He=function(){var e=M(),t=Object(y.a)(e,2),n=t[0],c=t[1];return g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(k,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("h1",{children:"How to Cite"})}),!c&&Object(_.jsx)(A.a,{children:n[0].fields.howToCite}),c&&Object(_.jsx)("p",{children:"Loading..."})]})},De=Object(C.b)(z.b)(p||(p=Object(T.a)(["\n  text-decoration: none;\n  line-height: 35px;\n  font-size: 18px;\n  color: black;\n  :hover {\n    color: #006838;\n    text-decoration: underline;\n  }\n  li {\n    list-style: none;\n  }\n"]))),Re=function(){var e=J(),t=Object(y.a)(e,2),n=t[0],c=t[1],i=n.sort((function(e,t){return e.sys.createdAt>t.sys.createdAt?-1:e.sys.createdAt<t.sys.createdAt?1:0}));return console.log(i),console.log(n),g.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(_.jsxs)(k,{children:[Object(_.jsx)("div",{className:"pageTitle",children:Object(_.jsx)("h1",{children:"Recent Articles"})}),Object(_.jsx)("div",{style:{width:"max-content"},children:!c&&i.length>0&&i.slice(0,5).map((function(e){return Object(_.jsx)(De,{to:"../articles/".concat(e.fields.slug),children:Object(_.jsx)("li",{children:e.fields.mainTitle},e.fields.slug)})}))})]})},ze=n(55),Pe=n.n(ze),Ue=function(){return Object(_.jsxs)("div",{className:Pe.a.layoutWrapper,children:[Object(_.jsx)(ae,{}),Object(_.jsx)("div",{className:Pe.a.layout,children:Object(_.jsxs)(be.c,{children:[Object(_.jsx)(be.a,{path:"/",element:Object(_.jsx)(Z,{})}),Object(_.jsx)(be.a,{path:"/articles",element:Object(_.jsx)(je,{})}),Object(_.jsx)(be.a,{path:"/articles/:contentId",element:Object(_.jsx)(_e,{})}),Object(_.jsx)(be.a,{path:"/about",element:Object(_.jsx)(Ne,{})}),Object(_.jsx)(be.a,{path:"/contact",element:Object(_.jsx)(ke,{})}),Object(_.jsx)(be.a,{path:"/author-list",element:Object(_.jsx)(Se,{})}),Object(_.jsx)(be.a,{path:"/editorial-information",element:Object(_.jsx)(Me,{})}),Object(_.jsx)(be.a,{path:"/toc",element:Object(_.jsx)(Fe,{})}),Object(_.jsx)(be.a,{path:"/how-to-cite",element:Object(_.jsx)(He,{})}),Object(_.jsx)(be.a,{path:"/recent-articles",element:Object(_.jsx)(Re,{})}),Object(_.jsx)(be.a,{path:"*",element:Object(_.jsx)(Ie,{})})]})}),Object(_.jsx)(de,{})]})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};w.a.render(Object(_.jsx)(z.a,{children:Object(_.jsx)(Ue,{})}),document.getElementById("root")),Ge()},18:function(e,t,n){e.exports={ftMainItem:"Footer_ftMainItem__22rN7",ftLegal:"Footer_ftLegal__7QVoK",ftTitle:"Footer_ftTitle__16Msb",ftMain:"Footer_ftMain__FUbNr",eu:"Footer_eu__qRx9o",ftLegalList:"Footer_ftLegalList__1I5Od"}},20:function(e,t,n){e.exports={scrolled:"Navbar_scrolled__wgQ-v",buttonContainer:"Navbar_buttonContainer__1SOht",active:"Navbar_active__1_PBO"}},42:function(e,t,n){e.exports={cardsWrapper:"Card_cardsWrapper__1LDBp",card:"Card_card__1eE8R",preview:"Card_preview__34tlp"}},53:function(e,t){},55:function(e,t,n){e.exports={layoutWrapper:"App_layoutWrapper__1orrE",layout:"App_layout__1LipR"}},78:function(e,t,n){e.exports={section:"Section_section__3vam2"}},88:function(e,t,n){e.exports={cardContainer:"CardContainer_cardContainer__7AQTQ"}},96:function(e,t,n){},97:function(e,t,n){}},[[162,1,2]]]);
//# sourceMappingURL=main.57a643ab.chunk.js.map