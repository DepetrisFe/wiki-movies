(this["webpackJsonpwiki-movies"]=this["webpackJsonpwiki-movies"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),a=c(3),n=c.n(a),r=(c(12),c(2)),l=c(5),o=c.n(l),d=c(6),j=c(7),b=(c(14),c(0)),h=function(e){var t=Object(j.a)({defaultShow:!1,onShow:function(e){},onHide:function(e){}}),c=t.Portal,i=t.show,s=t.hide;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"containerMovie",onClick:i,children:[Object(b.jsx)("div",{className:"containerImg",children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.datos.poster_path),alt:e.datos.title})}),Object(b.jsx)("div",{className:"containerTitle",children:Object(b.jsx)("h2",{children:e.datos.title})})]}),Object(b.jsx)(c,{children:Object(b.jsx)("div",{className:"modal",tabIndex:-1,children:Object(b.jsxs)("div",{className:"modal-dialog",role:"dialog","aria-labelledby":"modal-label","aria-modal":"true",children:[Object(b.jsxs)("div",{className:"modal-head",children:[Object(b.jsx)("div",{className:"movieImg",children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.datos.poster_path),alt:e.datos.title})}),Object(b.jsxs)("div",{className:"titleColumn",children:[Object(b.jsx)("h2",{id:"modal-label",className:"modal-title",children:e.datos.original_title}),Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Release date: "})," ",e.datos.release_date,Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"Vote average: "})," ",e.datos.vote_average]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"modal-close",onClick:s,type:"button","aria-label":"Close",children:"X"})})]}),Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsx)("h3",{children:Object(b.jsx)("u",{children:"Overview:"})}),Object(b.jsx)("p",{children:e.datos.overview})]})]})})})]})},u=(c(16),function(e){var t=Object(i.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],n=function(){var e=Object(d.a)(o.a.mark((function e(t){var c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.themoviedb.org/3/discover/"+t+"&api_key=049d63d518130338d64b9940efba8c4f","&page=1"));case 3:return c=e.sent,e.next=6,c.json();case 6:i=e.sent,a(i.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){n(e.middleUrl)}),[e.middleUrl]);var l=s.filter((function(t){return t.title.toLowerCase().includes(e.fillSearch.toLowerCase())}));return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"pageMain",children:l.map((function(e){return Object(b.jsx)(h,{datos:e},e.id)}))})})}),m=(c(17),function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("header",{children:Object(b.jsxs)("div",{className:"searchContainer",children:[Object(b.jsx)("div",{className:"leftSection",children:Object(b.jsx)("img",{src:"https://i.ibb.co/80h8BWN/Wiki-Movies.png",alt:"Logo"})}),Object(b.jsx)("div",{className:"rightSection",children:Object(b.jsx)("input",{type:"search",placeholder:"Search movies or series!",onChange:function(t){var c;c=t.target.value,e.fill(c)}})})]})})})}),O=(c(18),function(e){var t=function(t){e.test(t)};return Object(b.jsx)("div",{className:"mainContainer",children:Object(b.jsxs)("div",{className:"switchBar",children:[Object(b.jsx)("button",{className:"leftSwitch",onClick:function(){return t("movie?primary_release_date.gte=2020-09-15&primary_release_date.lte=2020-10-22")},children:"Actually in Theatres"}),Object(b.jsx)("button",{className:"middleSwitch",onClick:function(){return t("movie?sort_by=popularity.desc")},children:"Popular Movies"}),Object(b.jsx)("button",{className:"rightSwitch",onClick:function(){return t("movie?with_genres=18&primary_release_year=2014")},children:"Best Dramas"})]})})}),v=(c(19),function(){return Object(b.jsx)("div",{className:"containerFooter",children:Object(b.jsx)("p",{children:"Desarrollado por Federico Depetris \xa9 2021"})})});var x=function(){var e=Object(i.useState)("movie?sort_by=popularity.desc"),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(""),n=Object(r.a)(a,2),l=n[0],o=n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{fill:function(e){o(e)}}),Object(b.jsx)(O,{test:function(e){s(e)}}),Object(b.jsx)(u,{middleUrl:c,fillSearch:l}),Object(b.jsx)(v,{})]})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.daced439.chunk.js.map