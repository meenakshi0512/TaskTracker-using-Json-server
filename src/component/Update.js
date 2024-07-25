import './Create.css';
function Update({id}){
   function handleClick(){
        let x=prompt("Enter Newtask")
        fetch("https://meenakshi0512.github.io/project-data/db.json",{
           method:'PUT',
           headers:{
              "Content-Type":"application/json"
           },
           body:JSON.stringify({
              "id":id,
              "work":x
           })
        })
   }
     return(
        <>
           <i className="fa-solid fa-pen-to-square check" onClick={handleClick}></i>
        </>
     )
}
export default Update