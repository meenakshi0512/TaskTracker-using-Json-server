import './Create.css';
function Delete({id}){
    function handleClick(){
        fetch("https://meenakshi0512.github.io/project-data/db.json",{
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