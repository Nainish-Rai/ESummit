import ecelllogo from "../assets/ecelllogo.png"
import esummlogo from "../assets/esummitlogo.png"
function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
      <div>
        <img src={esummlogo} alt="logoesummit" width="40px" className=" aspect-square"/>
      </div>
      <div>
        <ul className="flex items-center justify-between gap-6" >
            <li>Events</li>
            <li>Sponsor</li>
            <li>Faqs</li>
            <img src={ecelllogo} width="40px" className=" aspect-square" alt="ecelllogo" />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
