(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"./assets/img/gau.jpg",name:"Gau"},{id:2,image:"./assets/img/shadow.jpg",name:"Shadow"},{id:3,image:"./assets/img/setzer.jpg",name:"Setzer"},{id:4,image:"./assets/img/edgar.jpg",name:"Edgar"},{id:5,image:"./assets/img/strago.jpg",name:"Strago"},{id:6,image:"./assets/img/locke.jpg",name:"Locke"},{id:7,image:"./assets/img/ghost.jpg",name:"Ghost"},{id:8,image:"./assets/img/ultros.jpg",name:"Ultros"},{id:9,image:"./assets/img/typhon.png",name:"Typhon"},{id:10,image:"./assets/img/sabin.jpg",name:"Sabin"},{id:11,image:"./assets/img/kefka.png",name:"Kefka"},{id:12,image:"./assets/img/banon.jpg",name:"Banon"}]},10:function(e,a,t){e.exports=t(15)},15:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(3),s=t.n(n),o=t(7),i=t(4),l=t(5),m=t(8),d=t(6),g=t(9),u={nav:{background:"#2c423f",fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",textTransform:"uppercase"}},p=function(e){return c.a.createElement("nav",{style:u.nav},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("a",{href:"#!",className:"brand-logo center",style:u.nav},"Final Fantasy Click-It!"),c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement("a",{href:"#!"},e.currentScore)),c.a.createElement("li",null,c.a.createElement("a",{href:"#!"},e.topScore))))))},f={image:{height:"200px",width:"100%",border:"5pt solid #2C423F"}},h=function(e){return c.a.createElement("div",{className:"col s6 m6 l3"},c.a.createElement("div",{className:"card hoverable",id:e.id},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:e.image,style:f.image,className:"responsive-img",alt:e.name,onClick:function(){return e.handleClick(e.id)}}))))},E={card:{background:"url(./assets/img/paper.jpg)",border:"5pt solid #2C423F",marginTop:"10px"},header:{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",color:"#C5C5C5",textShadow:"5px 5px 2px #000"},score:{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",color:"#C5C5C5",textShadow:"5px 5px 2px #000",textTransform:"uppercase"},container:{background:"#4C5B61"},winLose:{fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",color:"#0000",textTransform:"uppercase"}},k=function(e){return c.a.createElement("div",{className:"container-fluid header",style:E.container},c.a.createElement("div",{className:"row center"},c.a.createElement("div",{className:"col l8 offset-l2 s10 offset-s1"},c.a.createElement("div",{className:"card-horizontal",style:E.card},c.a.createElement("div",{className:"card-content"},c.a.createElement("h2",{className:"white-text"},c.a.createElement("span",{style:E.header},"Let's keep it simple, just don't click an image twice and you win!")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s6"},c.a.createElement("h4",{style:(e.currentScore,e.topScore,E.score)},c.a.createElement("span",{style:E.score},"Top Score")),c.a.createElement("h4",{style:(e.currentScore,e.topScore,E.score)},e.topScore)),c.a.createElement("div",{className:"col s6"},c.a.createElement("h4",{style:(e.currentScore,e.topScore,E.score)},c.a.createElement("span",{style:E.score},"Current Score")),c.a.createElement("h4",{style:(e.currentScore,e.topScore,E.score)},e.currentScore))))))),c.a.createElement("div",{className:"row center"},c.a.createElement("h4",{className:"grey-text",style:E.winLose},c.a.createElement("span",null,e.message))))},S={footer:{background:"#4C5B61",fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",textTransform:"uppercase"},color:{color:"black"}},y=function(){return c.a.createElement("footer",{className:"page-footer",style:S.footer},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer-copyright center"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{style:S.color,href:"https://github.com/scottasawyer"},c.a.createElement("i",{class:"fab fa-github fa-3x"}),c.a.createElement("p",{style:S.color},"scottasawyer"),"\xa9 2018")))))},v=t(1),w=function(e){function a(){var e,t;Object(i.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={images:v,currentScore:0,topScore:0,clicked:[],message:""},t.cardShuffle=function(e){return e.map(function(e){return[Math.random(),e]}).sort(function(e,a){return e[0]-a[0]}).map(function(e){return e[1]})},t.checkClicked=function(e){var a=!1;return t.state.clicked.map(function(t){e===t&&(a=!0)}),a},t.handleClick=function(e){switch(console.log("id: ".concat(e)),t.checkClicked(e)){case!0:t.checkWinLose(!0);break;case!1:t.checkWinLose(!1,e)}},t.checkWinLose=function(e,a){var r=t.state.currentScore;if(console.log(t.state.clicked.length),11===t.state.clicked.length)t.setState({images:v,currentScore:0,topScore:r>t.state.topScore?r:t.state.topScore,clicked:[],message:"You Won! Click any image to try again."});else{var c=t.state.currentScore+1;t.setState({clicked:Object(o.a)(t.state.clicked).concat([a]),images:t.cardShuffle(v),currentScore:c,message:""})}e&&t.setState({images:v,currentScore:0,topScore:r>t.state.topScore?r:t.state.topScore,clicked:[],message:"You Lost! Click any image to try again."})},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement(p,null),c.a.createElement(k,{currentScore:this.state.currentScore,topScore:this.state.topScore,message:this.state.message}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row flow-text"},this.state.images.map(function(a){return c.a.createElement(h,{key:a.id,image:a.image,id:a.id,handleClick:e.handleClick})}))),c.a.createElement(y,null))}}]),a}(c.a.Component);s.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.0de7fdce.chunk.js.map