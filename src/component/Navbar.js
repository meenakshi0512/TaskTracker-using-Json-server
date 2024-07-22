import './Navbar.css';
function Navbar() {
  let date = new Date();
  let weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    <>
      <div className="navbar shadow">
        <div className="menu">
          <i className="fa-solid fa-bars"></i>
          <div className="today-menu">
            <b>My Day</b>
            <p id="today-date">{weekday[date.getDay()]+","+months[date.getMonth()]+","+date.getDate()}</p>
         </div>
        </div>
      </div>
      <hr/>
    </>
  );
}
export default Navbar;
