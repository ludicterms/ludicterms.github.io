(this["webpackJsonpludicterms.github.io"]=this["webpackJsonpludicterms.github.io"]||[]).push([[13],{186:function(t,e,n){"use strict";n.r(e);var i,c=n(7),r=n(8),s=n(0),o=n.n(s),u=n(36),a=n(9),l=n(191),f=n(40),d=n(1),j=a.b.ul(i||(i=Object(r.a)(["\n  line-height: 35px;\n"])));e.default=function(){var t=Object(f.a)(),e=Object(c.a)(t,2),n=e[0],i=e[1];return o.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(d.jsxs)(u.a,{children:[Object(d.jsx)("div",{className:"pageTitle",children:Object(d.jsx)("h1",{children:"Editorial Information"})}),!i&&Object(d.jsx)(l.a,{children:n[0].fields.editorialText}),i&&Object(d.jsx)("p",{children:"Loading..."}),Object(d.jsx)("h2",{children:"EoLT Editorial Board"}),Object(d.jsxs)(j,{children:[!i&&Object(d.jsx)(l.a,{children:n[0].fields.editorialBoard}),i&&Object(d.jsx)("p",{children:"Loading..."})]})]})}},35:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return s}));var i=n(41).createClient({space:"cr5wpatokgnn",accessToken:"MicnxUBs5bVvo69DwyXWGWpBDr2Vz2vHCWWkBIwPU9A"}),c=function(){return i.getEntries({content_type:"gameArticle"}).then((function(t){return t.items.sort((function(t,e){return t.fields.mainTitle<e.fields.mainTitle?-1:t.fields.mainTitle>e.fields.mainTitle?1:0}))}))},r=function(t){return i.getEntries({"fields.slug":t,content_type:"gameArticle"}).then((function(t){return t.items}))},s=function(){return i.getEntries({content_type:"generalContent"}).then((function(t){return t.items}))}},36:function(t,e,n){"use strict";var i=n(38),c=n.n(i),r=n(1);e.a=function(t){return Object(r.jsx)("section",{className:c.a.section,children:t.children})}},38:function(t,e,n){t.exports={section:"Section_section__3vam2"}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(7),c=n(0),r=n(35),s=Object(r.b)(),o=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(!0),u=Object(i.a)(o,2),a=u[0],l=u[1];return Object(c.useEffect)((function(){s.then((function(t){r(t),l(!1)})).catch((function(t){alert(t)}))}),[]),[n,a]}},43:function(t,e){},44:function(t,e){}}]);
//# sourceMappingURL=13.79b9a836.chunk.js.map