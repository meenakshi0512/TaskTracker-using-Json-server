import './Create.css';
function Update({id}){
   function handleClick(){
        let x=prompt("Enter Newtask")
        fetch(`http://localhost:3000/task/${id}`,{
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