import React from "react";
import Todo from "./todo";

function Todolist() {
  const [todos, setTodos] = React.useState([]);

  function addTodo() {
    const newTodo = document.getElementById("i1").value;
    if (newTodo !== "") {
      setTodos([...todos, { task: newTodo, stats: false }]);
      document.getElementById("i1").value = "";
    }
  }

  function del(index) {
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  function done(index) {
    const temp = [...todos];
    temp[index].stats = true;
    setTodos(temp);
  }

  function undo(index) {
    const temp = [...todos];
    temp[index].stats = false;
    setTodos(temp);
  }

  function edit(index) {
    const newTodo = prompt("Enter new todo:", todos[index].task);

    const temp = [...todos];
    temp[index].task = newTodo;
    setTodos(temp);
  }

  return (
    <div id="maindivpart">
      <div className="mybox">
        <div className="head"></div>
        <div id="fle">
          <input id="inpid" type="text" id="i1" />
          <div>
          <button id="swag" onClick={addTodo}>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>ADD</span>
          </button>
          </div>
        </div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            del={del}
            done={done}
            undo={undo}
            edit={edit}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Todolist);
