(this["webpackJsonpreact-learn"]=this["webpackJsonpreact-learn"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a.n(i),r=a(4),s=a.n(r),o=(a(13),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),r(e),s(e)}))}),d=a(5),c=a(6),l=a(8),u=a(7),h=a(0),p=a.n(h),x=(a(15),a(1)),g=.5,m={0:{id:0,texture:"/image/1.png",radius:204},1:{id:1,texture:"/image/2.png",radius:154},2:{id:2,texture:"/image/3.png",radius:154},3:{id:3,texture:"/image/4.png",radius:124},4:{id:4,texture:"/image/5.png",radius:96},5:{id:5,texture:"/image/6.png",radius:91},6:{id:6,texture:"/image/7.png",radius:76},7:{id:7,texture:"/image/8.png",radius:59},8:{id:8,texture:"/image/9.png",radius:54},9:{id:9,texture:"/image/10.png",radius:40},10:{id:10,texture:"/image/11.png",radius:26}},S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(d.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"\u5408\u6210\u5927\u897f\u74dc",width:450,height:800,maxShapeId:10,nextShape:null,nextObj:null},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("container"),a=p.a.Engine.create(),i=p.a.Render.create({canvas:t,engine:a,options:{wireframes:!1,width:this.state.width,height:this.state.height,background:"#e2e2e2"}}),n=this.state.width,r=this.state.height,s=p.a.Bodies.rectangle(n/2,r+31,n,60,{isStatic:!0}),o=p.a.Bodies.rectangle(-31,r/2,60,r,{isStatic:!0}),d=p.a.Bodies.rectangle(n+31,r/2,60,r,{isStatic:!0});p.a.Composite.add(a.world,[s,o,d]);var c=m[Math.round(5*Math.random())+5];console.log(c),this.setState({nextShape:c,maxShapeId:5},(function(){var i=p.a.Bodies.circle(e.state.width/2,50,e.state.nextShape.radius*g,{isStatic:!0,collisionFilter:{category:1,mask:1},render:{sprite:{texture:e.state.nextShape.texture,xScale:g,yScale:g}}});p.a.Composite.add(a.world,i),e.setState({nextObj:i},(function(){t.addEventListener("click",(function(t){console.log(e.state.maxShapeId);var i=p.a.Bodies.circle(t.layerX,-50,e.state.nextShape.radius*g,{restitution:.3,collisionFilter:{category:2},render:{sprite:{texture:e.state.nextShape.texture,xScale:g,yScale:g}}});i.label=e.state.nextShape.id,p.a.Composite.add(a.world,i);var n=m[Math.round(Math.random()*(10-e.state.maxShapeId))+e.state.maxShapeId];e.setState({nextShape:n},(function(){var t=p.a.Bodies.circle(e.state.width/2,50,e.state.nextShape.radius*g,{isStatic:!0,collisionFilter:{category:1,mask:1},render:{sprite:{texture:e.state.nextShape.texture,xScale:g,yScale:g}}});p.a.Composite.remove(a.world,e.state.nextObj),p.a.Composite.add(a.world,t),e.setState({nextObj:t})}))}))}))})),p.a.Events.on(a,"collisionStart",(function(e){var t=e.pairs;console.log(e);for(var i=0;i<t.length;i++){var n=t[i];if(n.bodyA.label===n.bodyB.label){var r=n.bodyA,s=n.bodyB,o=(r.position.x+s.position.x)/2,d=(r.position.y+s.position.y)/2,c=m[r.label-1];p.a.Composite.remove(a.world,[r,s]);var l=p.a.Bodies.circle(o,d,c.radius*g,{restitution:.3,collisionFilter:{category:2},render:{sprite:{texture:c.texture,xScale:g,yScale:g}}});if(l.label=c.id,p.a.Composite.add(a.world,l),1===~~r.label)return void setTimeout((function(){alert("\u4f60\u5df2\u7ecf\u5408\u6210\u51fa\u4e86\u5927\u897f\u74dc\uff0c\u83b7\u80dc\uff01")}),1e3)}}})),p.a.Render.run(i);var l=p.a.Runner.create();p.a.Runner.run(l,a)}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"title",children:this.state.title}),Object(x.jsx)("div",{className:"canvas",children:Object(x.jsx)("canvas",{id:"container",width:"400",height:"700"})})]})}}]),a}(i.Component);s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),o()}},[[17,1,2]]]);
//# sourceMappingURL=main.b5a96424.chunk.js.map