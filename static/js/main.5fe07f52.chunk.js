(this["webpackJsonplotto-number-generator-app"]=this["webpackJsonplotto-number-generator-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),c=n(4),a=n.n(c),s=(n(14),n(15),n(7)),o=n(5),u=n(6),j=n(2),l=n(9),m=n(8),b=(n(16),n(0)),d=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).createLottoNums=function(){i.setState((function(){return{digits:Object(s.a)(new Array(i.props.numQuantity)).map((function(){return Object(b.jsx)("li",{children:Math.floor(Math.random()*(i.props.maxNum+1))})}))}}))},i.state={digits:new Array(i.props.numQuantity).fill(Object(b.jsx)("li",{className:"LottoNumbers-hide"}))},i.createLottoNums=i.createLottoNums.bind(Object(j.a)(i)),i}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Lotto-Ticket",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:this.props.title}),Object(b.jsx)("ul",{children:this.state.digits})]}),Object(b.jsx)("button",{onClick:this.createLottoNums,children:"Generate"})]})}}]),n}(i.Component);d.defaultProps={numQuantity:6,maxNum:40,title:"Lotto"};var p=d;var h=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(p,{title:"Mini Daily",numQuantity:4,maxNum:10}),Object(b.jsx)(p,{title:"Mega Daily",numQuantity:10,maxNum:100})]})})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5fe07f52.chunk.js.map