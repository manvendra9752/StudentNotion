import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="text-white flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-richblack-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Button - Login = Signup = Logout = Dashboard  */}

      <div className="flex items-center gap-x-4 text-richblack-100">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logout Sucessfully");
              }}
              className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.svg";
// import { toast } from "react-hot-toast";

// const Navbar = (props) => {
//   let isLoggedIn = props.isLoggedIn;
//   let setIsLoggedIn = props.setIsLoggedIn;
//   return (
//     <div className="flex justify-evenly">
//       <Link to="/">
//         <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img>
//       </Link>

//       <nav>
//         <ul className="flex gap-3">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/">About</Link>
//           </li>
//           <li>
//             <Link to="/">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* //Login - signup - logout - dashboard */}

//       <div className="ml-5 flex mr-3 gap-3">
//         {isLoggedIn && (
//           <Link to="/login">
//             <button onClick={setIsLoggedIn(false)}>Login</button>
//           </Link>
//         )}

//         {isLoggedIn && (
//           <Link to="/signup">
//             <button>SignUp</button>
//           </Link>
//         )}

//         {!isLoggedIn && (
//           <Link to="/">
//             <button
//               onClick={() => {
//                 setIsLoggedIn(true);
//                 toast.success("logged Out");
//               }}
//             >
//               Logout
//             </button>
//           </Link>
//         )}

//         {!isLoggedIn && (
//           <Link to="/dashboard">
//             <button>Dashboard</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
