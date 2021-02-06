(this["webpackJsonpdl-react-app"]=this["webpackJsonpdl-react-app"]||[]).push([[0],{19:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(27),s=c.n(i),a=(c(33),c.p,c(34),c(11)),o=c.n(a),l=c(14),u=c(9),j={HOST:"http://localhost:3500",SHOP_API_ROUT:"/get-product",USER_API_ROUT:"/api/app-users"},d="ICREASE_SECOND_COUNTER",h="DECREASE_SECOND_COUNTER",b="GET_SHOP_DATA",p="GET_SINGLE_ITEM",O="GET_ALL_USERS",x="POST_NEW_USER",f="DELETE_USER",m=function(e){return fetch(e.url)},g=function(e){return e.originData.find((function(t){return parseInt(t.id)===parseInt(e.id)}))},v=function(e){return new Promise((function(t,c){(function(e){return fetch(e.url,{method:"post",headers:{"Content-Type":"application/json"},body:e.body?e.body:null})})(e).then((function(e){return e.json()})).then((function(e){console.log(e),t({data:e.body,type:x})})).catch((function(e){c("Error has been occured: ".concat(e))}))}))},C=function(e){return new Promise((function(t,c){e.headers={"user-id":e.userData.id},function(e){return fetch(e.url,{method:"DELETE",headers:e.headers})}(e).then((function(e){return e.json()})).then((function(e){console.log(e),t({data:e.body,type:f})})).catch((function(e){c("Error has been occured: ".concat(e))}))}))},k=c(4),P={secondClickCounter:0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:case h:return Object(k.a)(Object(k.a)({},e),{},{secondClickCounter:e.secondClickCounter+t.value})}},S={allProducts:null,singleProduct:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(k.a)(Object(k.a)({},e),{},{allProducts:t.data});case p:return Object(k.a)(Object(k.a)({},e),{},{singleProduct:g({originData:e.allProducts,id:t.id})})}},N={allUsers:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(k.a)(Object(k.a)({},e),{},{allUsers:t.data});case x:return Object(k.a)({},e);case f:return e}},E=(c(36),c(0)),T=function(e){return Object(E.jsx)(r.a.Fragment,{children:Object(E.jsx)("div",{className:"app-footer"})})},R=c(8),w=c(2),I=(c(38),c(20)),_=c(21),H=c(12),A=c(25),F=c(24),L=(c(39),function(e){Object(A.a)(c,e);var t=Object(F.a)(c);function c(e){var n;return Object(I.a)(this,c),(n=t.call(this)).helloWords=e.hello,n.state={clickCounter:0,homeInputText:"",isRed:!1,count:0},n.increseClickHandler=n.increaseClicks.bind(Object(H.a)(n)),n.decreseClickHandler=n.decreaseClicks.bind(Object(H.a)(n)),n.onBoxToggle=n.onBoxToggle.bind(Object(H.a)(n)),n}return Object(_.a)(c,[{key:"componentDidMount",value:function(){console.log("component Did Mount ".concat(this.state.count))}},{key:"componentWillMount",value:function(){console.log("component Will Mount")}},{key:"componentWillUpdate",value:function(){console.log("component Will Update")}},{key:"componentDidUpdate",value:function(){console.log("component Did Update  ".concat(this.state.count))}},{key:"componentWillUnmount",value:function(){console.log("component Will Unmount")}},{key:"componentDidCatch",value:function(){console.log("component Did Catch")}},{key:"increaseClicks",value:function(e){console.log("togle");var t=this.state.clickCounter+e;this.setState({clickCounter:t})}},{key:"decreaseClicks",value:function(e){var t=this.state.clickCounter+-1*e;this.setState({clickCounter:t})}},{key:"onTextCahnge",value:function(e){console.log(e.target.value),this.setState({homeInputText:e.target.value})}},{key:"onBoxToggle",value:function(){console.log(this.state.isRed),this.setState({isRed:!this.state.isRed})}},{key:"render",value:function(){var e=this,t=this.state.clickCounter;return Object(E.jsx)(n.Fragment,{children:Object(E.jsxs)("div",{className:"app-container",children:[Object(E.jsx)("h1",{children:"Home Component"}),Object(E.jsxs)("p",{children:["\u0412\u0438 \u043d\u0430\u0442\u0438\u0441\u043d\u0443\u043b\u0438 ",this.state.count," \u0440\u0430\u0437\u0456\u0432"]}),Object(E.jsx)("button",{onClick:function(){return e.setState({count:e.state.count+1})},children:"counter"}),Object(E.jsx)("p",{children:this.helloWords?this.helloWords:"No hello words!"}),Object(E.jsxs)("h2",{children:["Clicks: ",t," "]}),Object(E.jsx)("button",{onClick:function(){e.increaseClicks(1)},children:"Increase +1"}),Object(E.jsx)("button",{onClick:function(){e.decreaseClicks(1)},children:"Decrease -1"}),Object(E.jsx)(B,{increseClickHandler:this.increseClickHandler,decreseClickHandler:this.decreseClickHandler}),Object(E.jsx)("h3",{children:this.state.homeInputText?this.state.homeInputText:"No input text"}),Object(E.jsx)("input",{type:"text",onChange:function(t){e.onTextCahnge(t)},placeholder:"enter you`r text"}),Object(E.jsx)(W,{isRed:this.state.isRed}),Object(E.jsx)("input",{onChange:this.onBoxToggle,type:"checkbox"}),Object(E.jsx)(q,{})]})})}}]),c}(n.Component)),W=function(e){return Object(E.jsxs)(n.Fragment,{children:[Object(E.jsx)("div",{className:e.isRed?"box red-box":"box"}),Object(E.jsx)("div",{className:e.isRed?"box":"box red-box"}),Object(E.jsx)("div",{className:e.isRed?"box blue-box":"box yellow-box"})]})},q=function(e){var t=Object(n.useContext)(re);return Object(E.jsxs)(n.Fragment,{children:[Object(E.jsx)("hr",{}),Object(E.jsx)("h2",{children:"REDUX clicker"}),Object(E.jsx)("h4",{children:t.clickCounter.secondClickCounter}),Object(E.jsx)("button",{onClick:function(){t.clickIncrease(4)},children:"Second Increase"}),Object(E.jsx)("button",{onClick:function(){t.clickDecreaser(2)},children:"Second Decreaser"})]})},B=function(e){Object(A.a)(c,e);var t=Object(F.a)(c);function c(e){return Object(I.a)(this,c),t.call(this,e)}return Object(_.a)(c,[{key:"render",value:function(){var e=this;return Object(E.jsxs)(r.a.Fragment,{children:[Object(E.jsx)("hr",{}),Object(E.jsx)("h4",{children:"Event in child component"}),Object(E.jsx)("button",{onClick:function(){e.props.increseClickHandler(5)},children:"Increase +5"}),Object(E.jsx)("button",{onClick:function(){e.props.decreseClickHandler(5)},children:"Decrease -5"})]})}}]),c}(n.Component),M=function(e){return Object(E.jsx)(r.a.Fragment,{children:Object(E.jsx)("div",{className:"app-container",children:Object(E.jsx)("h1",{children:"About Page"})})})},G=c(15),J=function(e){var t=new RegExp(/\s\W\w/g);return e.replace(t,"-").replaceAll("/","-").split(" ").map((function(e){return e.toLowerCase()})).join("")},X=function(e){var t=new RegExp(/^(http|https)/);return e.match(t)},$=function(e){return new Intl.NumberFormat("us-US",{style:"currency",currency:"USD"}).format(e.price)||""},z=(c(19),function(e){var t=Object(w.h)(),c=t.path,r=t.url,i=Object(w.f)(),s=Object(w.g)();return console.log(c,r,i,s),Object(E.jsx)(n.Fragment,{children:Object(E.jsx)("ul",{className:"shop-products-wrapper",children:e.allProducts?e.allProducts.map((function(e,t){var c=$({price:e.price});return Object(E.jsx)("li",{className:"product-card",children:Object(E.jsx)(R.b,{to:{pathname:"".concat(r.endsWith("/")?r.replace(/.$/,""):r,"/").concat(J(e.name),"?id=").concat(e.id),query:{id:e.id}},children:Object(E.jsxs)("div",{className:"product-card-inner",children:[Object(E.jsx)("img",{src:j.HOST+e.image[0],alt:e.name}),Object(E.jsx)("h4",{children:e.name}),Object(E.jsx)("h4",{className:"product-price",children:c})]})})},e.id)})):"Loadig..."})})}),K=function(e){var t=Object(n.useContext)(re);return Object(n.useEffect)((function(){t.getAllShopData()}),[]),Object(E.jsx)(r.a.Fragment,{children:Object(E.jsxs)("div",{className:"app-container",children:[Object(E.jsx)("h1",{children:"Shop"}),Object(E.jsx)(z,{allProducts:t.shopData.allProducts})]})})},Q=(c(45),function(e){return Object(E.jsx)("div",{className:"user-form-wrapper",children:Object(E.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=function(e){var t,c={},n=Object(G.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.name&&r.value&&(c[r.name]=r.value),r.name&&!r.value)return!1}}catch(i){n.e(i)}finally{n.f()}return console.log(c,e),c}(t.target);c&&(e.context.postUser(c),t.target.reset())},children:[Object(E.jsxs)("label",{children:[Object(E.jsx)("p",{children:"*User Name"}),Object(E.jsx)("input",{type:"text",name:"name",placeholder:"user name",required:!0})]}),Object(E.jsxs)("label",{children:[Object(E.jsx)("p",{children:"*User Email"}),Object(E.jsx)("input",{type:"email",name:"email",placeholder:"user email",required:!0})]}),Object(E.jsxs)("label",{children:[Object(E.jsx)("p",{children:"*User Password"}),Object(E.jsx)("input",{type:"password",name:"password",placeholder:"user password",required:!0})]}),Object(E.jsx)("br",{}),Object(E.jsx)("input",{type:"submit",value:"create user"})]})})}),V=function(e){return e.allUsers?Object(E.jsx)("div",{className:"user-list-wrapper",children:Object(E.jsx)("ul",{children:e.allUsers.map((function(t){var c=t.id,n=t.name;return Object(E.jsxs)("li",{children:[Object(E.jsx)("span",{children:n}),Object(E.jsx)("button",{onClick:function(){e.context.deleteUser({id:c})},children:"Delete"})]},c)}))})}):Object(E.jsx)("h1",{children:"Loading..."})},Y=function(e){var t=Object(n.useContext)(re);return Object(n.useEffect)((function(){t.getAllUsers()}),[]),Object(E.jsx)(r.a.Fragment,{children:Object(E.jsxs)("div",{className:"app-container",children:[Object(E.jsx)("h1",{children:"Users"}),Object(E.jsxs)("h4",{children:["Number clicks: ",t.clickCounter.secondClickCounter]}),Object(E.jsxs)("div",{className:"user-body-wrapper",children:[Object(E.jsx)(Q,{context:t}),Object(E.jsx)(V,{allUsers:t.usersData.allUsers?t.usersData.allUsers:[],context:t})]})]})})},Z=function(e){return Object(E.jsx)(r.a.Fragment,{children:Object(E.jsx)("div",{className:"app-container",children:Object(E.jsx)("h1",{children:"404 Not Found"})})})},ee=function(e){return e.allProducts&&e.singleProduct?Object(E.jsxs)("div",{className:"side-panel",children:[Object(E.jsx)("p",{children:"Other Products"}),Object(E.jsx)("ul",{children:e.allProducts.map((function(t){var c=t.id,n=t.name,r=t.price,i=t.image;return Object(E.jsx)("li",{className:t.id===e.singleProduct.id?"side-panel-card selected-image":"side-panel-card",children:Object(E.jsxs)(R.b,{to:{pathname:"".concat(J(n),"?id=").concat(c),query:{id:c}},children:[Object(E.jsx)("img",{src:j.HOST+i[0]}),Object(E.jsx)("h4",{children:n}),Object(E.jsx)("h4",{children:$({price:r})})]})},c)}))})]}):Object(E.jsx)("h1",{children:"Loading"})},te=function(e){if(!e.singleProduct)return Object(E.jsx)("div",{children:Object(E.jsx)("h2",{children:"Loading..."})});var t=e.singleProduct,c=(t.id,t.name),n=t.title,r=t.image,i=t.price,s=(t.details,t.detailDescription),a=t.shortDescription,o=e.pictureState.currentPicture?X(e.pictureState.currentPicture):X(e.singleProduct.image[0]);return Object(E.jsxs)("div",{className:"page-text-body",children:[Object(E.jsxs)("div",{className:"media-area",children:[Object(E.jsx)("div",{className:"main-image",children:Object(E.jsx)("img",{src:o?e.pictureState.currentPicture:j.HOST+e.pictureState.currentPicture})}),Object(E.jsx)("div",{className:"gallery",children:r.map((function(t,c){var n=X(t);return Object(E.jsx)("div",{className:t===e.pictureState.currentPicture?"gallery-image-wrapper selected-image":"gallery-image-wrapper",onClick:function(){e.setPictureState({currentPicture:t})},children:Object(E.jsx)("img",{src:n?t:j.HOST+t})},c)}))})]}),Object(E.jsxs)("div",{className:"text-area",children:[Object(E.jsx)("h1",{children:c}),Object(E.jsx)("h3",{children:n}),Object(E.jsx)("p",{children:a}),Object(E.jsx)("h4",{children:$({price:i})}),Object(E.jsx)("p",{children:s})]})]})},ce=function(e){var t=Object(n.useState)({currentPicture:null}),c=Object(u.a)(t,2),i=c[0],s=c[1],a=Object(w.f)(),j=Object(n.useContext)(re),d=(Object(w.g)(),a.query?a.query.id:function(e){var t,c={},n=new URLSearchParams(e),r=Object(G.a)(n.entries());try{for(r.s();!(t=r.n()).done;){var i=Object(u.a)(t.value,2),s=i[0],a=i[1];c[s]=a}}catch(o){r.e(o)}finally{r.f()}return c}(a.search).id);return Object(n.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getAllShopData().then((function(e){e.data&&(j.getShopSingleItem({id:d}),s({currentPicture:j.shopData.singleProduct?j.shopData.singleProduct.image[0]:null}))}));case 2:return e.abrupt("return",(function(){console.log("unsubscribe")}));case 3:case"end":return e.stop()}}),e)}))),[d]),Object(n.useEffect)((function(){j.shopData.singleProduct&&s({currentPicture:j.shopData.singleProduct.image[0]})}),[j.shopData.singleProduct?j.shopData.singleProduct.id:d]),Object(E.jsx)(r.a.Fragment,{children:Object(E.jsx)("div",{className:"app-container ",children:Object(E.jsxs)("div",{className:"shop-wrapper",children:[Object(E.jsx)(te,{pictureState:i,setPictureState:s,singleProduct:j.shopData.singleProduct?j.shopData.singleProduct:null}),Object(E.jsx)(ee,{singleProduct:j.shopData.singleProduct?j.shopData.singleProduct:null,allProducts:j.shopData.allProducts})]})})})},ne=function(e){return Object(E.jsx)(r.a.Fragment,{children:Object(E.jsxs)(R.a,{children:[Object(E.jsx)("div",{className:"main-app-menu",children:Object(E.jsx)("nav",{className:"app-container",children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:Object(E.jsx)(R.c,{exact:!0,to:"/",activeClassName:"active-link",children:"Home"})}),Object(E.jsx)("li",{children:Object(E.jsx)(R.c,{to:"/about-page",activeClassName:"active-link",children:"About"})}),Object(E.jsx)("li",{children:Object(E.jsx)(R.c,{to:"/shop-page",activeClassName:"active-link",children:"Shop"})}),Object(E.jsx)("li",{children:Object(E.jsx)(R.c,{to:"/user-page",activeClassName:"active-link",children:"Users"})})]})})}),Object(E.jsxs)(w.c,{children:[Object(E.jsx)(w.a,{exact:!0,path:"/",children:Object(E.jsx)(L,{hello:e.hello})}),Object(E.jsx)(w.a,{exact:!0,path:"/about-page",children:Object(E.jsx)(M,{})}),Object(E.jsx)(w.a,{exact:!0,path:"/shop-page",children:Object(E.jsx)(K,{})}),Object(E.jsx)(w.a,{exact:!0,path:"/shop-page/:name",children:Object(E.jsx)(ce,{})}),Object(E.jsx)(w.a,{exact:!0,path:"/user-page",children:Object(E.jsx)(Y,{})}),Object(E.jsx)(w.a,{exact:!0,path:"*",children:Object(E.jsx)(Z,{})})]})]})})},re=Object(n.createContext)(null),ie=function(e){var t=Object(n.useReducer)(y,P),c=Object(u.a)(t,2),r=c[0],i=c[1],s=Object(n.useReducer)(D,S),a=Object(u.a)(s,2),x=a[0],f=a[1],g=Object(n.useReducer)(U,N),k=Object(u.a)(g,2),R=k[0],w=k[1],I=function(e){i(function(e){return{value:e,type:d}}(e))},_=function(e){i(function(e){return{value:-1*e,type:h}}(e))},H=function(){var e=j.HOST+j.SHOP_API_ROUT;return new Promise((function(t,c){(function(e){return new Promise((function(t,c){m({url:e.link}).then((function(e){return e.json()})).then((function(e){t({data:e.dataBody,type:b})})).catch((function(e){c("Error has been occured: ".concat(e))}))}))})({link:e}).then(function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(c);case 2:t(c);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.log(e)}))}))},A=function(e){f(function(e){return{type:p,id:e.id}}(e))},F=function(){(function(e){return new Promise((function(t,c){m({url:e.link}).then((function(e){return e.json()})).then((function(e){console.log(e),t({data:e.body,type:O})})).catch((function(e){c("Error has been occured: ".concat(e))}))}))})({link:j.HOST+j.USER_API_ROUT}).then((function(e){w(e)}),(function(e){console.log(e)}))};return Object(E.jsxs)(re.Provider,{value:{clickCounter:r,shopData:x,usersData:R,clickIncrease:function(e){I(e)},clickDecreaser:function(e){_(e)},getAllShopData:function(){return H()},getShopSingleItem:function(e){A(e)},getAllUsers:function(){F()},postUser:function(e){!function(e){v({url:j.HOST+j.USER_API_ROUT,body:JSON.stringify(e)}).then((function(e){F()}))}(e)},deleteUser:function(e){!function(e){C({url:j.HOST+j.USER_API_ROUT,userData:e}).then((function(e){F()}))}(e)}},children:[Object(E.jsx)(ne,{hello:"Hello React"}),Object(E.jsx)(T,{})]})};var se=function(){return Object(E.jsx)(ie,{})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(se,{})}),document.getElementById("root")),ae()}},[[46,1,2]]]);
//# sourceMappingURL=main.55b28d61.chunk.js.map