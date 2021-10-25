import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, receiveErrors, signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const LS_form = props => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    password2: "",
  });

  const { email, password, name, password2 } = user;
  const errors = useSelector(state => state.sessionError.sessionError);
  const isSignedIn = useSelector(state => state.session.isSignedIn);
  const [errored, setErrored] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSignedIn) {
      dispatch(closeModal());
    }
  }, [isSignedIn]);

  useEffect(() => {
    return () => {
      dispatch(receiveErrors([]));
      setErrored(false);
    };
  }, [user]);

  useEffect(() => {
    if (errors) setErrored(true);
  }, [errors]);

  const handleInput = e => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
    setErrored(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (errors.length === 0) {
      dispatch(login(user));
    }
  };

  const handleSignUp = e => {
    e.preventDefault();
    if (errors.length === 0) {
      dispatch(signup(user)).then(() => dispatch(login(user)));
    }
  };

  const demoSubmit = () => {
    const demoUser = {
      email: "qisam@gmail.com",
      password: "123456789",
    };

    dispatch(login(demoUser)).then(dispatch(closeModal()));
  };

  const handleModal = e => {
    e.preventDefault();
    dispatch(openModal("Sign Up"));
  };

  const formType = props.form;

  let form;
  let err = [];

  if (errors.length === 0) {
    err = [];
  } else {
    err = Object.values(errors);
    err = err.map((e, i) => <li key={i}>{e}</li>);
  }

  switch (formType) {
    case "Sign In":
      form = (
        <div>
          <h1>Pleasse Sign In</h1>
          <div>
            <h3> {err}</h3>
            <form>
              <label>
                Email:
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleInput}
                  name="email"
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleInput}
                  name="password"
                />
                {errors.length > 0 && <li>{errors}</li>}
              </label>

              <button type="submit" onClick={handleSubmit}>
                Sign In
              </button>
            </form>
            <div>
              <span onClick={demoSubmit}>Continue with DemoUser</span>
              <span> / </span>
              <span onClick={handleModal}>Create an account </span>
            </div>
          </div>
        </div>
      );
      break;
    case "Sign Up":
      form = (
        <div>
          <h1>Sign Up Form</h1>
          <div>
            <h3>{err} </h3>
            <form>
              <label>
                Email:
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleInput}
                  name="email"
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={handleInput}
                  name="name"
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleInput}
                  name="password"
                />
                {errors.length > 0 && <li>{errors}</li>}
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={handleInput}
                  name="password2"
                />
                {errors.length > 0 && <li>{errors}</li>}
              </label>

              <button type="submit" onClick={handleSignUp}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      );
      break;

    default:
      return null;
  }

  return <div>{form}</div>;
};

export default LS_form;
