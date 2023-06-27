const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// Your code is going to go here
const App = () => {
  return React.createElement(
    "div",
    {
      /*element attributes*/
    },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Apollo",
        breed: "European Shorthair",
      }),
      React.createElement(Pet, {
        animal: "Dog",
        name: "Lex",
        breed: "German Shepard",
      }),
      React.createElement(Pet, {
        animal: "Rat",
        name: "Rei",
        breed: "Grey",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
