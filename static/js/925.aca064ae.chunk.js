"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[925],{964:function(e,n,t){t.d(n,{Bd:function(){return c},T$:function(){return u},cl:function(){return i},fI:function(){return o},u_:function(){return a}});var r=t(294).Z.create({baseURL:"https://api.themoviedb.org",method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjY0NzdhNWJlYzBjZDMxODg3YzI0Mjc4YTk2OTc0YSIsInN1YiI6IjY1NTY1YjMzNjdiNjEzNDVjY2FmNjRjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm6bCbKSjQCJ3o_hxKCB1vDtvimoS_GCFv44Y1Q5P3Y"}}),a=function(e){return r.get("/3/movie/".concat(e,"?language=en-US"))},c=function(){return r.get("/3/trending/all/day?language=en-US")},i=function(e){return r.get("/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"))},u=function(e){return r.get("/3/movie/".concat(e,"/credits?language=en-US"))},o=function(e){return r.get("/3/movie/".concat(e,"/reviews?language=en-US"))}},925:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(861),a=t(439),c=t(757),i=t.n(c),u=t(689),o=t(791),s=t(964),l={},h=t(184),f=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],f=(0,o.useState)(!1),d=(0,a.Z)(f,2),g=d[0],p=d[1],m=(0,o.useState)(null),j=(0,a.Z)(m,2),v=j[0],x=j[1],I=(0,u.UO)().id,Y=Boolean(t.length);(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,s.T$)(I);case 4:n=e.sent,t=n.data,c(t.cast),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.message);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[I]);var S=t.map((function(e){var n=e.id,t=e.profile_path,r=e.original_name,a=e.character;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t),alt:"",className:l.img}),(0,h.jsx)("h4",{children:r}),(0,h.jsx)("p",{children:a})]},n)}));return(0,h.jsxs)(h.Fragment,{children:[g&&(0,h.jsx)("p",{children:"...Loading"}),v&&(0,h.jsx)("p",{children:v}),Y&&(0,h.jsx)("ul",{children:S})]})}}}]);
//# sourceMappingURL=925.aca064ae.chunk.js.map