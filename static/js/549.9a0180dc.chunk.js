"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{200:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(501),a="TrendsGalleryItem_ImageGalleryItem__+xnMl",c="TrendsGalleryItem_ImageGalleryItemImage__gu3Ux",l="TrendsGalleryItem_text__TBy4z",i="TrendsGalleryItem_textTitle__HTV99",u="TrendsGalleryItem_link__ao1Q-",o=n(393),s=n(184);function f(e){var t=e.item;return(0,s.jsx)("li",{className:a,children:(0,s.jsxs)(r.rU,{to:"/movies/".concat(t.id),className:u,children:[t.poster_path?(0,s.jsx)("img",{className:c,src:"https://themoviedb.org/t/p/w342".concat(t.poster_path),alt:t.original_title}):(0,s.jsx)("img",{className:c,src:o,alt:t.original_title}),(0,s.jsx)("div",{className:l,children:t.title?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("h3",{className:i,children:t.title})}):(0,s.jsx)("h3",{className:i,children:t.original_name})})]})},t.id)}var m="TrendsGallery_CardGallery__oSnfU";function x(e){var t=e.data;return(0,s.jsx)("ul",{className:m,children:t.map((function(e){return(0,s.jsx)(f,{item:e},e.id)}))})}},549:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r,a,c=n(982),l=n(885),i=n(791),u=n(501),o=n(562),s=n.n(o),f=n(234),m=n(200),x=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t){var n=e.title,c=e.titleId,l=g(e,x);return i.createElement("svg",d({id:"magnifier",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024",enableBackground:"new 0 0 1024 1024",xmlSpace:"preserve",ref:t,"aria-labelledby":c},l),n?i.createElement("title",{id:c},n):null,r||(r=i.createElement("rect",{id:"magnifier-label",fill:"#F2F7FD",width:1024,height:1024})),a||(a=i.createElement("g",{id:"magnifier-magnifier"},i.createElement("path",{fill:"#FFFFFF",d:"M486.2998,538.1855c-64.6284-64.3496-64.8569-168.9355-0.5-233.5644 c64.3574-64.6357,168.9434-64.8496,233.5713-0.4927"}),i.createElement("path",{fill:"#D0E8F9",d:"M719.3711,304.1284c64.6435,64.3716,64.8574,168.9429,0.4863,233.5855 c-64.3428,64.6289-168.9139,64.8427-233.5576,0.4716"}),i.createElement("g",null,i.createElement("path",{fill:"#0096E6",d:"M602.8281,599.1143c-98.1279,0-177.9565-79.8291-177.9565-177.9502 c0-98.1285,79.8286-177.9571,177.9565-177.9571c98.1289,0,177.9717,79.8286,177.9717,177.9571 C780.7998,519.2852,700.957,599.1143,602.8281,599.1143L602.8281,599.1143z M602.8281,268.8071 c-84.0068,0-152.3564,68.3501-152.3564,152.357c0,84.0073,68.3496,152.3496,152.3564,152.3496 c84.0147,0,152.3721-68.3423,152.3721-152.3496C755.2002,337.1572,686.8428,268.8071,602.8281,268.8071L602.8281,268.8071z"})),i.createElement("g",null,i.createElement("polygon",{fill:"#0096E6",points:"446.7217,595.3711 428.6216,577.2568 478.1787,527.7139 496.2783,545.8281 446.7217,595.3711  "})),i.createElement("g",null,i.createElement("polygon",{fill:"#FFFFFF",points:"412.8857,561.543 462.4287,611.0859 305.543,768 256,718.457  "}),i.createElement("path",{fill:"#0096E6",d:"M305.543,786.0996l-67.6426-67.6426l174.9853-175.0135l67.6426,67.6425L305.543,786.0996L305.543,786.0996 z M274.1001,718.457l31.4429,31.4434l138.7856-138.8145l-31.4429-31.4433L274.1001,718.457L274.1001,718.457z"})))))}var y=i.forwardRef(h),p=(n.p,"Searchbar_Searchbar__5WKzV"),J="Searchbar_Form__Cmaeh",S="Searchbar_Button__tufiu",k="Searchbar_Input__M5lKV",b=n(184);function A(e){var t=e.onSubmit,n=(0,i.useState)(""),r=(0,l.Z)(n,2),a=r[0],c=r[1];return(0,b.jsx)("div",{className:p,children:(0,b.jsxs)("form",{className:J,onSubmit:function(e){if(e.preventDefault(),""===a.trim())return o.Notify.warning("Enter the text of the request");t(a),c("")},children:[(0,b.jsx)("input",{className:k,type:"search",name:"search",value:a,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){c(e.currentTarget.value.toLowerCase())}}),(0,b.jsx)("button",{type:"submit",className:S,children:(0,b.jsx)(y,{})})]})})}var v=n(102),T=function(){var e=(0,i.useState)([]),t=(0,l.Z)(e,2),n=t[0],r=t[1],a=(0,i.useState)(!1),o=(0,l.Z)(a,2),x=o[0],d=o[1],g=(0,u.lr)(),h=(0,l.Z)(g,2),y=h[0],p=h[1],J=y.get("movie")||"";(0,i.useEffect)((function(){""!==J&&(d(!0),(0,f.hN)(J).then((function(e){0===e.results.length&&s().Report.failure("WARNING","Sorry, there is no image named ".concat(J),"Close"),r((function(t){return(0,c.Z)(e.results)})),d(!1)})))}),[J]);return(0,b.jsxs)("div",{className:"ImageInfo",children:[(0,b.jsx)(A,{onSubmit:function(e){r([]),p({movie:e})}}),x&&(0,b.jsx)(v.Z,{}),n.length>0&&(0,b.jsx)(m.Z,{data:n})]})}},234:function(e,t,n){n.d(t,{a9:function(){return f},c_:function(){return m},hN:function(){return s}});var r=n(861),a=n(757),c=n.n(a),l="https://api.themoviedb.org/3",i="59364287eb9441f4377a756545696a86";function u(){return o.apply(this,arguments)}function o(){return o=(0,r.Z)(c().mark((function e(){var t,n,r,a,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",n=l.length>1&&void 0!==l[1]?l[1]:{},r=l.length>2&&void 0!==l[2]?l[2]:"",e.next=5,fetch(t,n,r);case 5:if(!(a=e.sent).ok){e.next=12;break}return e.next=9,a.json();case 9:e.t0=e.sent,e.next=13;break;case 12:e.t0=Promise.reject(new Error("Not found"));case 13:return e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function s(e){return u("".concat(l,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function f(e){return u("".concat(l,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"))}function m(e){return u("".concat(l,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}var x={fetchMovieTrends:function(){return u("".concat(l,"/trending/all/day?api_key=").concat(i))},fetchMovieWithQuery:s,fetchMovieDetails:function(e){return u("".concat(l,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"))},fetchActorsDetails:f,fetchReviewsDetails:m};t.ZP=x},393:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=549.9a0180dc.chunk.js.map