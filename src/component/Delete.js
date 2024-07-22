import './Create.css';
function Delete({id}){
    function handleClick(){
        fetch(`http://localhost:3000/task/${id}`,{
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(value=> console.log(value))
    }
    return(
        <>
           <i className="fa-solid fa-trash" onClick={handleClick}></i>
        </>
    )
}
export default Delete;