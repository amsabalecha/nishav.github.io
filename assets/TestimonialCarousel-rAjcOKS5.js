import{r as l,j as e}from"./index-By1PfYuK.js";import{c as d,A as b,m as v}from"./App-CEAdCrAv.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=d("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=d("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=d("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),S=({testimonials:a,autoPlayInterval:x=5e3})=>{const[t,i]=l.useState(0),[m,h]=l.useState(!0),[u,o]=l.useState("right"),n=a.length,c=l.useCallback(()=>{o("right"),i(t===n-1?0:t+1)},[t,n]),p=l.useCallback(()=>{o("left"),i(t===0?n-1:t-1)},[t,n]);l.useEffect(()=>{if(!m)return;const r=setInterval(()=>{c()},x);return()=>clearInterval(r)},[m,c,x]);const f=()=>h(!1),g=()=>h(!0),y={enter:r=>({x:r==="right"?300:-300,opacity:0}),center:{x:0,opacity:1},exit:r=>({x:r==="right"?-300:300,opacity:0})};return e.jsxs("div",{className:"relative max-w-4xl mx-auto overflow-hidden py-12 px-4 md:px-12",onMouseEnter:f,onMouseLeave:g,children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl"}),e.jsxs("div",{className:"relative py-8",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-10",children:"What Our Clients Say"}),e.jsxs("div",{className:"relative",children:[e.jsx(b,{mode:"wait",custom:u,children:e.jsxs(v.div,{custom:u,variants:y,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.5}},className:"bg-white rounded-xl shadow-lg p-6 md:p-8 relative",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-start md:items-center mb-6",children:[e.jsx("div",{className:"flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-4",children:e.jsx("span",{className:"text-2xl font-bold text-primary",children:a[t].author.charAt(0)})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold",children:a[t].author}),e.jsx("p",{className:"text-gray-600",children:a[t].role}),e.jsx("div",{className:"flex items-center mt-1",children:[...Array(5)].map((r,s)=>e.jsx(w,{size:16,className:s<a[t].rating?"text-yellow-500 fill-yellow-500":"text-gray-300"},s))})]})]}),e.jsxs("blockquote",{className:"text-lg md:text-xl italic text-gray-700 leading-relaxed",children:['"',a[t].content,'"']})]},t)}),e.jsx("button",{className:"absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10",onClick:p,"aria-label":"Previous testimonial",children:e.jsx(j,{size:24})}),e.jsx("button",{className:"absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10",onClick:c,"aria-label":"Next testimonial",children:e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex justify-center space-x-2 mt-6",children:a.map((r,s)=>e.jsx("button",{onClick:()=>{o(s>t?"right":"left"),i(s)},className:`w-3 h-3 rounded-full transition-colors ${s===t?"bg-primary":"bg-gray-300"}`,"aria-label":`Go to testimonial ${s+1}`},s))})]})]})};export{S as default};
