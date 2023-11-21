import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firbase/firebase.config";


const SignUp = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)
        .then(response => console.log(response.user))
        .catch(error => console.log(error))

    }
    return (
        <div>
            <h1 className="text-4xl text-center">Please Sign Up</h1>
            <div className="mx-auto flex items-center justify-center bg-slate-400 max-w-4xl min-h-[80vh]">
          <form onSubmit={handleSubmit} className="gap-4">
            <input className="my-2 py-2 px-4" type="email" placeholder="Email address" name="email" id="email" required/>
            <br />
            <input className="mb-2 py-2 px-4" type="password" placeholder="Password" name="password" id="password" required/> <br />
            <input className="btn btn-ghost w-full" type="submit" value="Sign Up" />
          </form>
        </div>
        </div>
    );
};

export default SignUp;