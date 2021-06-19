(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),a=t(9),i=t.n(a),o=(t(14),t(0)),r=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{children:"Budget App"})})},j=t(5),u=t(8),l=t(2),x=function(e,n){switch(n.type){case"ADD_INCOME":return Object(l.a)(Object(l.a)({},e),{},{incomeTransactions:[n.payload].concat(Object(u.a)(e.incomeTransactions))});case"ADD_EXPENSE":return Object(l.a)(Object(l.a)({},e),{},{expenseTransactions:[n.payload].concat(Object(u.a)(e.expenseTransactions))});case"DELETE_TRANSACTION":return Object(l.a)(Object(l.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==n.payload})),expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==n.payload}))});default:return e}},m={incomeTransactions:JSON.parse(localStorage.getItem("incomeTransactions"))||[],expenseTransactions:JSON.parse(localStorage.getItem("expenseTransactions"))||[]},p=Object(c.createContext)(m),d=function(e){var n=e.children,t=Object(c.useReducer)(x,m),s=Object(j.a)(t,2),a=s[0],i=s[1];Object(c.useEffect)((function(){localStorage.setItem("incomeTransactions",JSON.stringify(a.incomeTransactions)),localStorage.setItem("expenseTransactions",JSON.stringify(a.expenseTransactions))}));return Object(o.jsx)(p.Provider,{value:{incomeTransactions:a.incomeTransactions,expenseTransactions:a.expenseTransactions,deleteTransaction:function(e){i({type:"DELETE_TRANSACTION",payload:e})},addIncome:function(e){i({type:"ADD_INCOME",payload:e})},addExpense:function(e){i({type:"ADD_EXPENSE",payload:e})}},children:n})},b=function(){var e=Object(c.useContext)(p),n=e.incomeTransactions,t=e.expenseTransactions,s=n.map((function(e){return e.incomeAmount})),a=t.map((function(e){return e.expenseAmount})),i=s.reduce((function(e,n){return e+n}),0).toFixed(2),r=a.reduce((function(e,n){return e+n}),0).toFixed(2);return Object(o.jsxs)("div",{className:"balance",children:[Object(o.jsx)("h2",{children:"Your Balance"}),Object(o.jsxs)("h3",{children:["$",(i-r).toFixed(2)]}),Object(o.jsxs)("div",{className:"income-expense",children:[Object(o.jsxs)("div",{className:"plus",children:[Object(o.jsx)("h3",{children:"Income"}),Object(o.jsxs)("p",{children:["+$",i]})]}),Object(o.jsxs)("div",{className:"minus",children:[Object(o.jsx)("h3",{children:"Expenses"}),Object(o.jsxs)("p",{children:["-$",r]})]})]})]})},O=t(4),h=t(19),f=function(){var e=Object(c.useContext)(p),n=e.addIncome,t=e.addExpense,s=Object(c.useState)({incomeText:"",incomeAmount:0}),a=Object(j.a)(s,2),i=a[0],r=a[1],u=i.incomeText,x=i.incomeAmount,m=function(e){r(Object(l.a)(Object(l.a)({},i),{},Object(O.a)({},e.target.name,e.target.value)))},d=Object(c.useState)({expenseText:"",expenseAmount:0}),b=Object(j.a)(d,2),f=b[0],T=b[1],N=f.expenseText,v=f.expenseAmount,g=function(e){T(Object(l.a)(Object(l.a)({},f),{},Object(O.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)("div",{className:"form-wrapper",children:[Object(o.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==u){var t={id:Object(h.a)(),incomeText:u,incomeAmount:1*x};n(t),r({incomeText:"",incomeAmount:0})}},children:Object(o.jsxs)("div",{className:"input-group income",children:[Object(o.jsx)("input",{type:"text",name:"incomeText",value:u,placeholder:"Add Income...",autoComplete:"off",onChange:m}),Object(o.jsx)("input",{type:"number",name:"incomeAmount",value:x,placeholder:"Amount",autoComplete:"off",onChange:m}),Object(o.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(o.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),""!==N){var n={id:Object(h.a)(),expenseText:N,expenseAmount:1*v};t(n),T({expenseText:"",expenseAmount:0})}},children:Object(o.jsxs)("div",{className:"input-group expense",children:[Object(o.jsx)("input",{type:"text",name:"expenseText",value:N,placeholder:"Add Expense...",autoComplete:"off",onChange:g}),Object(o.jsx)("input",{type:"number",name:"expenseAmount",value:v,placeholder:"Amount",autoComplete:"off",onChange:g}),Object(o.jsx)("input",{type:"submit",value:"Submit"})]})})]})},T=function(e){var n=e.incomeTransaction,t=Object(c.useContext)(p).deleteTransaction;return Object(o.jsxs)("li",{className:"transaction",children:[Object(o.jsx)("span",{className:"transaction-text",children:n.incomeText}),Object(o.jsxs)("span",{className:"transaction-amount",children:["$",n.incomeAmount]}),Object(o.jsx)("button",{onClick:function(){return t(n.id)},className:"delete-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},N=function(){var e=Object(c.useContext)(p).incomeTransactions;return console.log(e),Object(o.jsxs)("div",{className:"transactions transactions-income",children:[Object(o.jsx)("h2",{children:"Transaction History"}),Object(o.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(o.jsx)(T,{incomeTransaction:e},e.id)}))})]})},v=function(e){var n=e.expenseTransaction,t=Object(c.useContext)(p).deleteTransaction;return Object(o.jsxs)("li",{className:"transaction",children:[Object(o.jsx)("span",{className:"transaction-text",children:n.expenseText}),Object(o.jsxs)("span",{className:"transaction-amount",children:["$",n.expenseAmount]}),Object(o.jsx)("button",{onClick:function(){return t(n.id)},className:"delete-btn",children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})},g=function(){var e=Object(c.useContext)(p).expenseTransactions;return console.log(e),Object(o.jsxs)("div",{className:"transactions transactions-expense",children:[Object(o.jsx)("h2",{children:"Transaction History"}),Object(o.jsx)("ul",{className:"transaction-list",children:e.map((function(e){return Object(o.jsx)(v,{expenseTransaction:e},e.id)}))})]})},A=(t(16),function(){return Object(o.jsx)(d,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"app-wrapper",children:[Object(o.jsx)(r,{}),Object(o.jsx)(b,{}),Object(o.jsx)(f,{}),Object(o.jsx)(N,{}),Object(o.jsx)(g,{})]})})})}),y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.e2258d85.chunk.js.map