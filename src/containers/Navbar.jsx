import ecelllogo from "../assets/ecelllogo.png"
import esummlogo from "../assets/esummitlogo.png"
function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-3 px-4">
      <div>
        <img src={esummlogo} alt="logoesummit" width="40px" className=" aspect-square"/>
      </div>
      <div>
        <ul className="flex items-center justify-between gap-4" >
            <li className="spacefont">Events</li>
            <li className="spacefont">Sponsors</li>
            <li className="spacefont">Faq</li>
            <img src={ecelllogo} width="40px" className=" aspect-square" alt="ecelllogo" />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
