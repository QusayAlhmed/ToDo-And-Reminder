(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{140:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(3),r=n(13),o=n.n(r),s=n(29),i=n(24),l=n(55),d=n(56),u=n(63),b=n(61),p={type:"ADD_REMINDER"},j={type:"REMOVE_REMINDER"},h={type:"CLEAR_REMINDERS"},m=n(57),O=n.n(m),x=n(58),f=n.n(x),v=(n(74),n(75),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:"",date:new Date},e.mapOnData=function(){var t=e.props.data;return Object(a.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(a.jsxs)("li",{className:"list-group-item d-flex flex-row shadow p-3 mb-3 rounded",children:[Object(a.jsx)("span",{className:"p-2 bd-highlight border-right border-top",children:t.text}),Object(a.jsx)("span",{className:"p-2 bd-highlight border-right border-bottom",children:O()(new Date(t.date)).fromNow()}),Object(a.jsx)("span",{onClick:function(){return e.props.RemoveFunction(t.id)},children:Object(a.jsx)("i",{className:"fas fa-window-close"})})]},t.id)}))})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("main",{className:"app",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"input mb-2",children:[Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)("i",{className:"fab fa-react"})}),Object(a.jsx)("h1",{className:"text-center",children:"To Do List & Reminder"}),Object(a.jsx)("input",{className:"",type:"text",value:this.state.text,placeholder:"Add Your Plan !!",onFocus:function(e){return e.target.placeholder=""},onChange:function(t){return e.setState({text:t.target.value})}}),Object(a.jsx)(f.a,{placeholder:"Enter Date",selected:this.state.date,className:"",value:this.state.date,onChange:function(t){return e.setState({date:t})},showTimeSelect:!0,dateFormat:"Pp"}),Object(a.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){e.props.AddFunction(e.state.text,e.state.date),e.setState({text:"",date:""})},children:"Add"}),this.mapOnData(),Object(a.jsx)("button",{className:"btn btn-danger btn-block",onClick:this.props.ClearFunction,children:"Clear"})]})})})}}]),n}(c.Component));var g=Object(s.b)((function(e){return{data:e}}),{AddFunction:function(e,t){var n={type:p,text:e,date:t};return console.log("action file ",n),n},RemoveFunction:function(e){return{type:j,id:e}},ClearFunction:function(){return{type:h}}})(v),N=n(62),k=n(23),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;e=Object(k.read_cookie)("reminders");var n=null;return t.type===p?(n=[].concat(Object(N.a)(e),[{text:t.text,date:t.date,id:Math.random()}]),Object(k.bake_cookie)("reminders",n),console.log("Reducer file",n),n):t.type===j?(n=e.filter((function(e){return e.id!==t.id})),Object(k.bake_cookie)("reminders",n),n):t.type===h?(Object(k.bake_cookie)("reminders",n),n=[]):e},R=(n(140),n(141),Object(i.b)(y));o.a.render(Object(a.jsx)(s.a,{store:R,children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.eb51de3b.chunk.js.map