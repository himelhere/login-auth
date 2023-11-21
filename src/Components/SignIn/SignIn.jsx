import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firbase/firebase.config";

const SignIn = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
        .then(response => console.log(response.user))
        .catch(error => console.log(error))

    }
    return (
//         <div className="mx-auto flex items-center justify-center">
//             <div className="hero max-w-6xl min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Login now!</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form  className="card-body">
//         <form onSubmit={handleSubmit}>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <input type="submit" className="btn btn-primary font-bold text-2xl" value="Log in"/>
//         </div>
//         </form>
//       </form>
//     </div>
//   </div>
// </div>
//         </div>

        <div className="mx-auto flex items-center justify-center bg-slate-400 max-w-4xl min-h-screen">
          <form onSubmit={handleSubmit} className="gap-4">
            <input className="my-2 py-2 px-4" type="email" name="email" id="email" />
            <br />
            <input className="mb-2 py-2 px-4" type="password" name="password" id="password" /> <br />
            <input className="btn btn-ghost w-full" type="submit" value="Login" />
          </form>
        </div>
    );
};

export default SignIn;