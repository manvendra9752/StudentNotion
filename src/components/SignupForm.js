import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData([
      (prev) => [
        {
          ...prev,
          [event.target.name]: event.target.value,
        },
      ],
    ]);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Create");
    const accountData = {
      ...formData,
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onclick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onclick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={FormData.firstName}
              name="firstName"
              className="text-black bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={FormData.lastName}
              name="lastName"
              className="text-black bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="text-black bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            name="email"
          />
        </label>

        <div className="flex gap-x-4">
          <label htmlFor="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="text-black bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="text-black bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 relative"
            />

            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="text-black bg-yellow-300 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

// import React, { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   function changeHandler(event) {
//     setFormData((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   }
//   return (
//     <div>
//       {/* studentt - instructor tab */}
//       <div>
//         <button>Student</button>
//         <button>Instructor</button>
//       </div>

//       <form>
//         {/* firstname lastName */}
//         <div>
//           <label>
//             <p>
//               First Name<sup>*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="firstname"
//               onChange={changeHandler}
//               placeholder="Enter First Name"
//               value={formData.firstName}
//             ></input>
//           </label>

//           <label>
//             <p>
//               Last Name<sup>*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="firstname"
//               onChange={changeHandler}
//               placeholder="Enter First Name"
//               value={formData.firstName}
//             ></input>
//           </label>
//         </div>

//         <label>
//           <p>
//             Email Address<sup>*</sup>
//           </p>
//           <input
//             required
//             type="email"
//             name="email"
//             onChange={changeHandler}
//             placeholder="Enter your email"
//             value={formData.email}
//           ></input>
//         </label>

//         <label>
//           <p>
//             Create Password<sup>*</sup>
//           </p>
//           <input
//             required
//             type={showPassword ? "text" : "password"}
//             name="email"
//             onChange={changeHandler}
//             placeholder="Enter your email"
//             value={formData.password}
//           ></input>

//           <span onClick={() => setShowPassword((prev) => !prev)}>
//             {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//           </span>
//         </label>

//         <label>
//           <p>
//             Confirm Password<sup>*</sup>
//           </p>
//           <input
//             required
//             type={showPassword ? "text" : "password"}
//             name="email"
//             onChange={changeHandler}
//             placeholder="Enter your email"
//             value={formData.confirmPassword}
//           ></input>

//           <span onClick={() => setShowPassword((prev) => !prev)}>
//             {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//           </span>
//         </label>

//         <button>Create Account</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;
