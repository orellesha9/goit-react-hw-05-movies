"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{964:function(e,n,t){t.d(n,{Bd:function(){return s},T$:function(){return c},cl:function(){return a},fI:function(){return o},u_:function(){return i}});var r=t(294).Z.create({baseURL:"https://api.themoviedb.org",method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjY0NzdhNWJlYzBjZDMxODg3YzI0Mjc4YTk2OTc0YSIsInN1YiI6IjY1NTY1YjMzNjdiNjEzNDVjY2FmNjRjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qm6bCbKSjQCJ3o_hxKCB1vDtvimoS_GCFv44Y1Q5P3Y"}}),i=function(e){return r.get("/3/movie/".concat(e,"?language=en-US"))},s=function(){return r.get("/3/trending/all/day?language=en-US")},a=function(e){return r.get("/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"))},c=function(e){return r.get("/3/movie/".concat(e,"/credits?language=en-US"))},o=function(e){return r.get("/3/movie/".concat(e,"/reviews?language=en-US"))}},319:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(861),i=t(439),s=t(757),a=t.n(s),c=t(791),o="single-post_img_title__QCnHG",l="single-post_wrapper__2k+-A",u="single-post_title_text__ZRyPB",d="single-post_title__SwWwQ",h="single-post_heading_of_points__Qx4uC",p="single-post_link__KFlMy",f=t(689),j=t(87),g=t(964),m=t(184),v=function(){var e,n=(0,c.useState)(),t=(0,i.Z)(n,2),s=t[0],v=t[1],_=(0,c.useState)(!1),x=(0,i.Z)(_,2),N=x[0],w=x[1],b=(0,c.useState)(),k=(0,i.Z)(b,2),y=k[0],I=k[1],S=(0,f.UO)().id,Y=(null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)||"/",C=(0,f.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,g.u_)(S);case 4:n=e.sent,t=n.data,console.log(t),v(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),I(e.t0.message);case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]);var J=s&&s.genres.map((function(e){return(0,m.jsx)("li",{children:e.name},e.id)}));return(0,m.jsxs)("div",{children:[N&&(0,m.jsx)("p",{children:"...Loading"}),y&&(0,m.jsxs)("p",{children:["Error: ",y]}),(0,m.jsx)("button",{onClick:function(){return C(Y)},type:"button",children:"Go back"}),s&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(s.poster_path),alt:"",className:o}),(0,m.jsxs)("ul",{className:u,children:[(0,m.jsx)("li",{className:d,children:s.title}),(0,m.jsxs)("li",{children:["Popularity ",s.popularity]}),(0,m.jsx)("li",{className:h,children:"Overview"}),(0,m.jsx)("li",{children:s.overview}),(0,m.jsx)("li",{className:h,children:"Genres"}),(0,m.jsx)("li",{children:J})]})]}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsx)(j.rU,{to:"credits",state:{from:Y},children:"Cast"}),(0,m.jsx)(j.rU,{to:"reviews",state:{from:Y},children:"Reviews"})]}),(0,m.jsx)(f.j3,{})]})]})},_=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(v,{})})}}}]);
//# sourceMappingURL=319.d4cb7265.chunk.js.map