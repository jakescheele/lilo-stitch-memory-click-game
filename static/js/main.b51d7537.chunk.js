(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,src:"/images/experiments/stitch.png",clicked:!1},{id:2,src:"/images/experiments/finder.png",clicked:!1},{id:3,src:"/images/experiments/hammerface.png",clicked:!1},{id:4,src:"/images/experiments/plasmoid.png",clicked:!1},{id:5,src:"/images/experiments/rueben.png",clicked:!1},{id:6,src:"/images/experiments/sparky.png",clicked:!1},{id:8,src:"/images/experiments/heat.png",clicked:!1},{id:9,src:"/images/experiments/angel.png",clicked:!1},{id:11,src:"/images/experiments/sample.png",clicked:!1},{id:13,src:"/images/experiments/clip.png",clicked:!1},{id:14,src:"/images/experiments/cannonball.png",clicked:!1},{id:16,src:"/images/experiments/houdini.png",clicked:!1}]},15:function(e,n,a){},16:function(e,n,a){},17:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),r=a(3),i=a.n(r),s=a(4),l=a(5),m=a(7),d=a(6),o=a(8);var u=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-light"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"Experiment Round Up"),c.a.createElement("span",null,"Score: ",e.score)))};var p=function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",{className:"display-4"},"Ohana!"),c.a.createElement("p",{className:"lead"},"Oh no! Some of Jumba's 626 experiments got loose! Find all the experiments, but don't find the same one twice!")))};var g=function(e){return c.a.createElement("img",{className:"card-img",src:"/lilo-stitch-memory-click-game"+e.src,id:e.id,onClick:function(n){return e.clickHandler(e.id,n)}})},f=a(1),k=(a(15),function(e){function n(){var e,a;Object(s.a)(this,n);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(c)))).state={score:0,cards:f},a.shuffle=function(e){return e.sort(function(){return Math.random()-.5}),e},a.clickHandler=function(e){if(a.state.cards.find(function(n){return n.id===e}).clicked)a.gameOver();else{var n=a.state.cards.map(function(n){return n.id===e&&(n.clicked=!0),n});a.setState({score:a.state.score+1,cards:a.shuffle(n)}),a.state.score>=16&&a.gameOver(!0)}},a.gameOver=function(e){console.log(f);var n=a.state.cards.map(function(e){return e.clicked=!1,e});a.setState({score:0,cards:n}),e?alert("You win!"):alert("You lose! Try again!")},a}return Object(o.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement(u,{score:this.state.score}),c.a.createElement(p,null),c.a.createElement("div",{className:"grid"},this.state.cards.map(function(n){return c.a.createElement(g,{key:n.id,id:n.id,src:n.src,clicked:n.clicked,clickHandler:e.clickHandler})}))))}}]),n}(c.a.Component));a(16);i.a.render(c.a.createElement(k,null),document.getElementById("root"))},9:function(e,n,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b51d7537.chunk.js.map