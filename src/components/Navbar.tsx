import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Kitchen Copilot
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Pantry
            </Link>
            <Link to="/scan" className="text-gray-600 hover:text-gray-800">
              Scan
            </Link>
            <Link to="/preferences" className="text-gray-600 hover:text-gray-800">
              Preferences
            </Link>
            <Link to="/meal-plan" className="text-gray-600 hover:text-gray-800">
              Meal Plan
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 