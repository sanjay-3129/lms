import { useEffect, useState } from 'react';
import style from '../pages/SignInUp.module.css';

const SignInUp = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  let container;
  useEffect(() => {
    container = document.getElementById('container');
    setTimeout(() => {
      container.classList.add(style.signIn);
    }, 200);
  }, []);

  const toggle = () => {
    container.classList.toggle(style.signIn);
    container.classList.toggle(style.signUp);
  };

  // const logInWithEmailAndPassword = async (email, password) => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };

  return (
    <>
      <div id="container" className={`container-fluid ${style.container}`}>
        {/* <!-- FORM SECTION --> */}
        <div className={`row ${style.row}`}>
          {/* <!-- SIGN UP --> */}
          <div
            className={`col p-0 align-items-center flex-col ${style.alignItemsCenter} ${style.flexCol} ${style.signUp}`}
          >
            <div
              className={`form-wrapper align-items-center  ${style.formWrapper} ${style.alignItemsCenter}`}
            >
              <div className={`form ${style.form} ${style.signUp}`}>
                <div className={`input-group ${style.inputGroup}`}>
                  <i className="bx bxs-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className={`input-group ${style.inputGroup}`}>
                  <i className="bx bx-mail-send"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className={`input-group ${style.inputGroup}`}>
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className={`input-group ${style.inputGroup}`}>
                  <i className="bx bxs-lock-alt"></i>
                  <input type="password" placeholder="Confirm password" />
                </div>
                <button>Sign up</button>
                <p>
                  <span>Already have an account? </span>
                  <b onClick={toggle} className={style.pointer}>
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- END SIGN UP -->
    <!-- SIGN IN --> */}
          <div
            className={`col align-items-center flex-col sign-in ${style.col} ${style.alignItemsCenter} ${style.flexCol} ${style.signIn}`}
          >
            <div
              className={`form-wrapper align-items-center ${style.formWrapper} ${style.alignItemsCenter}`}
            >
              <div className={`form sign-in ${style.form} ${style.signIn}`}>
                <div className={`input-group ${style.inputGroup}`}>
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className={`input-group ${style.inputGroup}`}>
                  <i class="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <button>Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don't have an account? </span>
                  <b onClick={toggle} className={style.pointer}>
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className={`form-wrapper ${style.formWrapper}`}></div>
          </div>
          {/* <!-- END SIGN IN --> */}
        </div>
        {/* <!-- END FORM SECTION -->
  <!-- CONTENT SECTION --> */}
        <div className={`row content-row ${style.row} ${style.contentRow}`}>
          {/* <!-- SIGN IN CONTENT --> */}
          <div
            className={`col align-items-center flex-col ${style.col} ${style.alignItemsCenter} ${style.flexCol}`}
          >
            <div className={`text sign-in ${style.text} ${style.signIn}`}>
              <h2>Welcome to LMS</h2>
            </div>
            <div className={`img sign-in ${style.img} ${style.signIn}`}></div>
          </div>
          {/* <!-- END SIGN IN CONTENT -->
    <!-- SIGN UP CONTENT --> */}
          <div
            className={`col align-items-center flex-col ${style.col} ${style.alignItemsCenter} ${style.flexCol}`}
          >
            <div className={`img sign-up ${style.img} ${style.signUp}`}></div>
            <div className={`text sign-up ${style.text} ${style.signUp}`}>
              <h2>Join with us</h2>
            </div>
          </div>
          {/* <!-- END SIGN UP CONTENT --> */}
        </div>
        {/* <!-- END CONTENT SECTION --> */}
      </div>
    </>
  );
};

export default SignInUp;
