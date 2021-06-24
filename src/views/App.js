import { Component } from "react";
import Matter from "matter-js";
import "./App.css";

let size = 0.5;
let shape = {
  0: {
    id: 0,
    texture: "/image/1.png",
    radius: 204,
  },
  1: {
    id: 1,
    texture: "/image/2.png",
    radius: 154,
  },
  2: {
    id: 2,
    texture: "/image/3.png",
    radius: 154,
  },
  3: {
    id: 3,
    texture: "/image/4.png",
    radius: 124,
  },
  4: {
    id: 4,
    texture: "/image/5.png",
    radius: 96,
  },
  5: {
    id: 5,
    texture: "/image/6.png",
    radius: 91,
  },
  6: {
    id: 6,
    texture: "/image/7.png",
    radius: 76,
  },
  7: {
    id: 7,
    texture: "/image/8.png",
    radius: 59,
  },
  8: {
    id: 8,
    texture: "/image/9.png",
    radius: 54,
  },
  9: {
    id: 9,
    texture: "/image/10.png",
    radius: 40,
  },
  10: {
    id: 10,
    texture: "/image/11.png",
    radius: 26,
  },
};

export default class App extends Component {
  state = {
    title: "合成大西瓜",
    width: 450,
    height: 800,
    maxShapeId: 10,
    nextShape: null,
    nextObj: null,
  };

  componentDidMount() {
    const canvas = document.getElementById("container");
    let engine = Matter.Engine.create();
    let render = Matter.Render.create({
      canvas,
      engine,
      options: {
        wireframes: false,
        width: this.state.width,
        height: this.state.height,
        background: "#e2e2e2",
      },
    });

    const width = this.state.width;
    const height = this.state.height;
    let groundBottom = Matter.Bodies.rectangle(
      width / 2,
      height + 31,
      width,
      60,
      {
        isStatic: true,
      },
    );
    let groundLeft = Matter.Bodies.rectangle(-31, height / 2, 60, height, {
      isStatic: true,
    });
    let groundRight = Matter.Bodies.rectangle(
      width + 31,
      height / 2,
      60,
      height,
      {
        isStatic: true,
      },
    );
    Matter.Composite.add(engine.world, [groundBottom, groundLeft, groundRight]);

    let objShape = shape[Math.round(Math.random() * 5) + 5];
    console.log(objShape);
    this.setState(
      {
        nextShape: objShape,
        maxShapeId: 5,
      },
      () => {
        let nextObj = Matter.Bodies.circle(
          this.state.width / 2,
          50,
          this.state.nextShape.radius * size,
          {
            isStatic: true,
            collisionFilter: {
              category: 0x0001,
              mask: 0x0001,
            },
            render: {
              sprite: {
                texture: this.state.nextShape.texture,
                xScale: size,
                yScale: size,
              },
            },
          },
        );
        Matter.Composite.add(engine.world, nextObj);
        this.setState(
          {
            nextObj: nextObj,
          },
          () => {
            canvas.addEventListener("click", (event) => {
              console.log(this.state.maxShapeId);
              let obj = Matter.Bodies.circle(
                event.layerX,
                -50,
                this.state.nextShape.radius * size,
                {
                  restitution: 0.3,
                  collisionFilter: {
                    category: 0x0002,
                  },
                  render: {
                    sprite: {
                      texture: this.state.nextShape.texture,
                      xScale: size,
                      yScale: size,
                    },
                  },
                },
              );
              obj.label = this.state.nextShape.id;
              Matter.Composite.add(engine.world, obj);
              let objShape =
                shape[
                  Math.round(Math.random() * (10 - this.state.maxShapeId)) +
                    this.state.maxShapeId
                ];
              this.setState(
                {
                  nextShape: objShape,
                },
                () => {
                  let nextObj = Matter.Bodies.circle(
                    this.state.width / 2,
                    50,
                    this.state.nextShape.radius * size,
                    {
                      isStatic: true,
                      collisionFilter: {
                        category: 0x0001,
                        mask: 0x0001,
                      },
                      render: {
                        sprite: {
                          texture: this.state.nextShape.texture,
                          xScale: size,
                          yScale: size,
                        },
                      },
                    },
                  );
                  Matter.Composite.remove(engine.world, this.state.nextObj);
                  Matter.Composite.add(engine.world, nextObj);
                  this.setState({
                    nextObj: nextObj,
                  });
                },
              );
            });
          },
        );
      },
    );

    Matter.Events.on(engine, "collisionStart", (event) => {
      let pairs = event.pairs;
      console.log(event);
      for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        if (pair.bodyA.label === pair.bodyB.label) {
          let objA = pair.bodyA,
            objB = pair.bodyB;
          let x = (objA.position.x + objB.position.x) / 2;
          let y = (objA.position.y + objB.position.y) / 2;
          let objShape = shape[objA.label - 1];
          Matter.Composite.remove(engine.world, [objA, objB]);
          let obj = Matter.Bodies.circle(x, y, objShape.radius * size, {
            restitution: 0.3,
            collisionFilter: {
              category: 0x0002,
            },
            render: {
              sprite: {
                texture: objShape.texture,
                xScale: size,
                yScale: size,
              },
            },
          });
          obj.label = objShape.id;
          Matter.Composite.add(engine.world, obj);
          if (~~objA.label === 1) {
            setTimeout(() => {
              alert("你已经合成出了大西瓜，获胜！");
            }, 1000);
            return;
          }
        }
      }
    });

    Matter.Render.run(render);

    let runner = Matter.Runner.create();

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
