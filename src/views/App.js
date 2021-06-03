import { Component } from "react";
import Matter from "matter-js";
import "./App.css";

export default class App extends Component {
  state = {
    title: "合成大西瓜",
    width : 400,
    height : 700,
  };

  componentDidMount() {
    const canvas = document.getElementById("container")
    canvas.addEventListener('click', event => {
      let obj = Matter.Bodies.circle(event.layerX,50,(Math.round(Math.random()*5)+1)*10);
      Matter.Composite.add(engine.world, obj);
    });
    let engine = Matter.Engine.create();
    let render = Matter.Render.create({
      canvas,
      engine,
      options: {
        wireframes: false,
        width:this.state.width,
        height:this.state.height,
        background: "#e2e2e2",
      },
    });

    const width = this.state.width;
    const height = this.state.height;
    let groundBottom = Matter.Bodies.rectangle(width / 2, height+31, width, 60, {
      isStatic: true,
    });
    let groundLeft = Matter.Bodies.rectangle(-31, height / 2, 60, height, {
      isStatic: true,
    });
    let groundRight = Matter.Bodies.rectangle(width+31, height / 2, 60, height, {
      isStatic: true,
    });

    Matter.Composite.add(engine.world, [
      groundBottom,
      groundLeft,
      groundRight,
    ]);

    // create two boxes and a ground
    let boxA = Matter.Bodies.circle(100, 200, (Math.round(Math.random()*5)+1)*10);
    let boxB = Matter.Bodies.circle(250, 50, (Math.round(Math.random()*5)+1)*10);
    Matter.Composite.add(engine.world, [
      boxA,
      boxB,
    ]);


    // 添加场景外墙


    // add mouse control
    // let mouse = Matter.Mouse.create(render.canvas);
    // let mouseConstraint = Matter.MouseConstraint.create(engine, {
    //   mouse: mouse,
    //   constraint: {
    //     stiffness: 1,
    //     render: {
    //       visible: false,
    //     },
    //   },
    // });
    //
    // Matter.Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    //render.mouse = mouse;

    // run the renderer
    Matter.Render.run(render);

    // create runner
    let runner = Matter.Runner.create();

    // run the engine
    Matter.Runner.run(runner, engine);
  }

  render() {
    return (
      <div className="App">
        <div className="title">{this.state.title}</div>
        <div className="canvas">
          <canvas id="container" width="400" height="700" />
        </div>
      </div>
    );
  }
}
