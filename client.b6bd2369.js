webpackJsonp([1],[,,,,,function(e,t,a){a(6),e.exports=a(9)},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),s=a.n(r),n=a(11),c=a.n(n),o=a(19),l=a(27),i=a(28),m=(a.n(i),function(e){c.a.render(s.a.createElement(i.AppContainer,null,s.a.createElement(e,null)),document.getElementById("root"))});m(o.a),Object(l.a)()},,,,,,,,,,function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=a(0),o=a.n(c),l=a(20),i=(a.n(l),a(21)),m=a.n(i),p=a(22),u=a.n(p),f=a(23),v=a.n(f),d=a(24),h=a.n(d),E=a(25),g=a.n(E),y=a(26),N=(a.n(y),function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}()),b="San Francisco, California",w={test:[{artURL:"https://hostesports.com/img/recharge.jpg",name:"Event 20XX 1",desc:"Description",year:"2017",url:"http://google.com"},{artURL:"https://hostesports.com/img/cupcakes.jpg",name:"Event 20XX 2",desc:"Description",year:"2017",url:"http://google.com"},{artURL:"https://hostesports.com/img/conch.jpg",name:"Event 20XX 3",desc:"Description",year:"2017",url:"http://google.com"},{artURL:"https://hostesports.com/img/lounge.jpg",name:"Event 20XX 4",desc:"Description",year:"2017",url:"http://google.com"}]},x={test:[{artURL:u.a,name:"Events",desc:"We create VIP experiences for players at events and after-parties, because they deserve it.",url:"http://google.com"},{artURL:v.a,name:"Player Care",desc:"Happy players are better players, we ensure players play their best game.",url:"http://google.com"},{artURL:h.a,name:"Team Building",desc:"Host believes happy teams are better teams. We help that happen.",url:"http://google.com"},{artURL:g.a,name:"Player Hospitality",desc:"Happy players are better players, we ensure players play their best game.",url:"http://google.com"}]},k=function(){return o.a.createElement("header",{id:"Header"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{className:"header-info mx-auto"},o.a.createElement("img",{className:"logo",src:m.a}),o.a.createElement("h1",{className:"h1"},"Host eSports"),o.a.createElement("h3",{className:"h3"},b),o.a.createElement("a",{className:"button",href:"#Service"},"Learn More"))))},j=function(){return o.a.createElement("div",{className:"mission",id:"Mission"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"mission-info"},o.a.createElement("h3",{className:"h3"},"White-glove facilitation of player experiences at events and tournaments"),o.a.createElement("p",{className:"p"},"Host focuses on planning and providing players and teams with streamline event experiences."))))},O=function(){return o.a.createElement("footer",{id:"Footer"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"footer-info text-center col-sm-12"},o.a.createElement("p",{className:"h4"},"Host eSports"),o.a.createElement("p",{className:"p"},b),o.a.createElement("a",{className:"a button",href:"mailto:info@hostesports.com"},"info@hostesports.com"),o.a.createElement("a",{className:"a button",href:"https://twitter.com/hostesports"},"Follow @hostesports"),o.a.createElement("p",{className:"copyright"},"Copyright © Host Inc 2018"))))},L=function(e){var t=e.work;return o.a.createElement("div",{className:"projects px-3",id:"Work"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("h1",{className:"h1 text-center"},"Our Work")),o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("div",{className:"row"},t.map(function(e,t){return o.a.createElement("div",{className:"col-xs work p-2"},o.a.createElement("img",{src:e.artURL}),o.a.createElement("div",{className:"worksubline"},o.a.createElement("div",{className:"workinfo"},o.a.createElement("div",{className:"workname"},o.a.createElement("a",{target:"blank",className:"workbutton",href:e.url},e.name)),o.a.createElement("div",{className:"workdesc"},e.desc),o.a.createElement("div",{className:"workyear"},e.year))))}))))},R=function(e){var t=e.services;return o.a.createElement("div",{className:"service",id:"Service"},o.a.createElement("div",{className:"col-sm-12 text-center"},o.a.createElement("h1",{className:"h1"},"Our Services")),o.a.createElement("div",{className:"d-flex flex-wrap shell mx-auto col-sm-12"},t.map(function(e,t){return o.a.createElement("div",{className:"services"+(t%2==1?" alt":"")+" col-sm-6"},o.a.createElement("img",{src:e.artURL}),o.a.createElement("div",{className:"servicesSubline"},o.a.createElement("div",{className:"service-info"},o.a.createElement("div",{className:"servicesName"},e.name),o.a.createElement("div",{className:"servicesDesc"},e.desc))))})))},S=function(e){function t(){r(this,t);var e=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={currentWork:w.test,currentServices:x.test},e}return n(t,e),N(t,[{key:"render",value:function(){var e=this.state,t=e.currentWork,a=e.currentServices;return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"container"},o.a.createElement(k,null),o.a.createElement(j,null),o.a.createElement(R,{services:a}),o.a.createElement(L,{work:t}),o.a.createElement(O,null)))}}]),t}(c.Component);t.a=S},function(e,t){},function(e,t,a){e.exports=a.p+"assets/images/logo.c864f54b.png"},function(e,t,a){e.exports=a.p+"assets/images/events.12753f7a.svg"},function(e,t,a){e.exports=a.p+"assets/images/care.dfd9d5ab.svg"},function(e,t,a){e.exports=a.p+"assets/images/team.60106f41.svg"},function(e,t,a){e.exports=a.p+"assets/images/hospitality.f80547b3.svg"},function(e,t,a){e.exports=a.p+"assets/images/mission-bg.be0c1274.png"}],[5]);
//# sourceMappingURL=client.b6bd2369.js.map