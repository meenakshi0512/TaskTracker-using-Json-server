import "./Add.css";
function Add() {
  function handleClick() {
    let addbtn = document.getElementsByClassName("add-btn")[0];
    addbtn.style.display = "block";
  }
  function handleClickBtn() {
    let addbtn = document.getElementsByClassName("add-btn")[0];
    addbtn.style.display = "none";
    addTask();

  }
  function addTask() {
      let input=document.getElementById('mytext')
      if(input.value==="")
         alert("Please enter some text")
      else{
        fetch("https://meenakshi0512.github.io/project-data/db.json", {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "5",
            work: input.value
          })
        })
          .then((res) => res.json())
          .then((value) => console.log(value));
        input.value=""
      }}
  return (
    <>
      <div className="addnewtask shadow">
        <i className="fa-solid fa-plus"></i>
        <input
          type="text"
          placeholder="Add new task..."
          id="mytext"
          onClick={handleClick}
        />
        <hr />
        <div className="add-btn">
          <i className="fa-solid fa-rotate-right"></i>
          <button id="btn" className="shadow" onClick={handleClickBtn}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default Add;
