import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListdata] = useState([]);
  function addActivity() {
    //setListdata([...listData,activity])
    //console.log(listData);
    setListdata((listData) => {
      const UpdatedList = [...listData, activity];
      console.log(UpdatedList);
      setActivity("");
      return UpdatedList;
    });
  }

  function removeActivity(i) {
    const UpdatedListData = listData.filter((ele, id) => {
      return i!== id;
    });
    setListdata(UpdatedListData);
  }


  function removeAll() {
    setListdata([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button className="button" onClick={addActivity}>
          Add
        </button>
        <p className="List-heading">Here is your list :{")"}</p>
        {listData !== [] &&
          listData.map((data,i)=>{
            console.log(i);
            return (
              <>
                <div key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={()=>removeActivity(i)}>Remove(-)</button>
                  </div>
                </div>
              </>
            )
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
