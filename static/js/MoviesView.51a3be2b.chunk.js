(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[564],{611:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});n(2791);var r=n(3504),i="moviesList_section__CjbMR",c="moviesList_list__FswJ0",u="moviesList_item__7pkNG",a="moviesList_link__tMBig",o=n(184),s=function(t){var e=t.movies;return(0,o.jsx)("section",{className:i,children:(0,o.jsx)("ul",{className:c,children:e.map((function(t){var e=t.title,n=t.id;return(0,o.jsx)("li",{className:u,children:(0,o.jsx)(r.rU,{className:a,to:"/movies/".concat(n),children:e})},n)}))})})}},7144:function(t,e,n){"use strict";n.d(e,{Gc:function(){return f},TP:function(){return s},Wf:function(){return o},jr:function(){return m},Hg:function(){return a}});var r=n(4569),i="b0de889e3f741ea781569353e4581a9b",c=function(t){return t.data.results.map((function(t){return{title:t.title,id:t.id}}))},u=n.n(r)().create({baseURL:"https://api.themoviedb.org/3"}),a=function(){return u.get("/trending/movie/week?api_key=".concat(i,"&limit=20")).then(c)},o=function(t){return u.get("/search/movie?api_key=".concat(i,"&limit=20&query=").concat(t)).then(c)},s=function(t){return u.get("/movie/".concat(t,"?api_key=").concat(i)).then((function(t){return t.data})).then((function(t){return{title:t.title,poster_path:t.poster_path,vote_average:t.vote_average,overview:t.overview,genres:t.genres}}))},f=function(t){return u.get("/movie/".concat(t,"/credits?api_key=").concat(i)).then((function(t){return t.data.cast.map((function(t){return{id:t.id,profile_path:t.profile_path,original_name:t.original_name,character:t.character}}))}))},m=function(t){return u.get("movie/".concat(t,"/reviews?api_key=").concat(i)).then((function(t){return t.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}}))}))}},174:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(8152),i=n(8730),c=n(2791),u=n(7144),a="searchForm_form__g2fKy",o="searchForm_input__K3D-r",s="searchForm_button__jyg2V",f=n(184),m=function(t){var e=t.onSubmit,n=(0,c.useState)(""),u=(0,r.Z)(n,2),m=u[0],_=u[1];return(0,f.jsxs)("form",{className:a,onSubmit:function(t){t.preventDefault(),m?(e(m),_("")):i.Notify.failure("Empty query")},children:[(0,f.jsx)("input",{className:o,type:"text",value:m,onChange:function(t){var e=t.target;return _(e.value)}}),(0,f.jsx)("button",{className:s,type:"submit",children:"Search"})]})},_=n(611),l=n(6871),h=n(2808),v=n.n(h),p=n(7888),d=function(){var t=(0,c.useState)([]),e=(0,r.Z)(t,2),n=e[0],a=e[1],o=(0,c.useContext)(p.f),s=o.query,h=o.setQuery,d=(0,l.TH)(),g=d.search,y=d.pathname,b=(0,l.s0)();(0,c.useEffect)((function(){g.includes("query")?h(v().parse(g.replace("?","")).query):h("")}),[g]),(0,c.useEffect)((function(){var t=!1;return!s&&a([]),s&&(b("".concat(y,"?query=").concat(s)),(0,u.Wf)(s).then((function(e){return!t&&a(e)})).catch((function(){return i.Notify.failure("Something went wrong!")}))),function(){t=!0}}),[s]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{onSubmit:function(t){return h(t)}}),(0,f.jsx)(_.Z,{movies:n})]})}},4654:function(){}}]);
//# sourceMappingURL=MoviesView.51a3be2b.chunk.js.map