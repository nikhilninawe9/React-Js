import React from "react";
import { useState } from "react";
import Plan from "./Plan";

function ToDo(props) {
  const [taskList, settaskList] = useState([]);
  const [task, settask] = useState("");

  const addItemsHandler = () => {
    if (task != "") {
      settaskList([...taskList, task]);
      settask("");
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto shadow-sm p-3">
          <h2 className="text-center">Todays Plan!.</h2>
          <br></br>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Write your plan"
                value={task}
                onChange={(e) => settask(e.target.value)}
              />
            </div>
            <div className="col-2">
              <button className="btn btn-dark" onClick={addItemsHandler}>
                Add+
              </button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                <Plan List={taskList} uTaskList={settaskList} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToDo;
