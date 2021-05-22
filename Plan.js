import React from "react";

function Plan(props) {
  const deleteItem = (id) => {
    const updatedItems = props.List.filter((element, index) => {
      return index != id;
    });
    props.uTaskList(updatedItems);
  };
  return (
    <div>
      {props.List.map((element, index) => {
        return (
          <div key={index}>
            {element}
            <button
              className="btn btn-dark btn-sm ml-5"
              onClick={() => deleteItem(index)}
            >
              delete
            </button>
            <br></br>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
export default Plan;
