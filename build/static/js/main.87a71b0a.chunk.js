(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,c){e.exports=c(18)},16:function(e,n,c){},17:function(e,n,c){},18:function(e,n,c){"use strict";c.r(n);var a=c(0),t=c.n(a),r=c(4),i=c.n(r),s=(c(16),c(5)),l=c(6),d=c(8),m=c(7),o=c(9);var p=function(e){return t.a.createElement("nav",{className:"navbar fixed-top navbar-light bg-light"},t.a.createElement("a",{className:"navbar-brand",href:"#"},"Experiment Round Up"),t.a.createElement("span",null,"Score: ",e.score))};var u=function(){return t.a.createElement("div",{className:"jumbotron jumbotron-fluid"},t.a.createElement("div",{className:"container text-center"},t.a.createElement("h1",{className:"display-4"},"Ohana!"),t.a.createElement("p",{className:"lead"},"Oh no! Some of Jumba's 626 experiments got loose! Find all the experiments, but don't find the same one twice!")))},g=c(1);var f=function(e){var n;return t.a.createElement("div",{className:"card"},t.a.createElement("img",(n={className:"card-img",src:e.src,id:e.id},Object(g.a)(n,"className","card-img-top"),Object(g.a)(n,"onClick",function(n){return e.clickHandler(e.id,n)}),n)))},k=c(2),h=(c(17),function(e){function n(){var e,c;Object(s.a)(this,n);for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return(c=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(t)))).state={score:0,cards:k},c.shuffle=function(e){return e.sort(function(){return Math.random()-.5}),e},c.clickHandler=function(e){if(c.state.cards.find(function(n){return n.id===e}).clicked)c.gameOver();else{var n=c.state.cards.map(function(n){return n.id===e&&(n.clicked=!0),n});c.setState({score:c.state.score+1,cards:c.shuffle(n)})}},c.gameOver=function(){c.setState({score:0,cards:c.shuffle(k)})},c}return Object(o.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return t.a.createElement(t.a.Fragment,null,t.a.createElement(p,{score:this.state.score}),t.a.createElement(u,null),t.a.createElement("div",null,this.state.cards.map(function(n){return t.a.createElement(f,{key:n.id,id:n.id,src:n.src,clicked:n.clicked,clickHandler:e.clickHandler})})))}}]),n}(t.a.Component));i.a.render(t.a.createElement(h,null),document.getElementById("root"))},2:function(e){e.exports=[{id:1,src:"/images/experiments/stitch.png",clicked:!1},{id:2,src:"/images/experiments/finder.png",clicked:!1},{id:3,src:"/images/experiments/hammerface.png",clicked:!1},{id:4,src:"/images/experiments/plasmoid.png",clicked:!1},{id:5,src:"/images/experiments/rueben.png",clicked:!1},{id:6,src:"/images/experiments/sparky.jpg",clicked:!1},{id:7,src:"/images/experiments/yang.jpg",clicked:!1},{id:8,src:"/images/experiments/heat.png",clicked:!1},{id:9,src:"/images/experiments/angel.png",clicked:!1},{id:10,src:"/images/experiments/richter.png",clicked:!1},{id:11,src:"/images/experiments/sample.png",clicked:!1},{id:12,src:"/images/experiments/spike.png",clicked:!1},{id:13,src:"/images/experiments/clip.png",clicked:!1},{id:14,src:"/images/experiments/cannonball.png",clicked:!1},{id:15,src:"/images/experiments/kixx.png",clicked:!1},{id:16,src:"/images/experiments/houdini.png",clicked:!1}]}},[[10,1,2]]]);
//# sourceMappingURL=main.87a71b0a.chunk.js.map