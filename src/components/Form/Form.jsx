import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormButton,
  FormTitle,
  FormLinkWrapper,
  FormLink,
} from "./FormStyles";
import { Container } from "../../globalStyles";
// import validateForm from "./validateForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSignUp, userLogin } from "../../features/auth/authSlice";
function Form({ path }) {
  const isUserCreated = useSelector((state) => state.auth.isUserCreated);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const checkInputs = [name, email, password, confirmPass].every(
      (checkInput) => checkInput !== null || checkInput !== ""
    );
    if (location.pathname.substring(1) === "signup") {
      if (checkInputs) {
        dispatch(
          userSignUp({ name, email, password, confPassowrd: confirmPass })
        );
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
        navigate("/login");
      } else {
        toast.error("please, fill input data");
      }
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const checkInputs = [name, email].every(
      (checkInput) => checkInput !== null || checkInput !== ""
    );
    // const resultError = validateForm({ name, email, password, confirmPass });
    // if (resultError !== null) {
    //   setError(resultError);
    //   return;
    // }
    // setName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPass("");
    // setError(null);
    // setSuccess("Application was submitted!");
    if (location.pathname.substring(1) === "login" && path) {
      if (isUserCreated) {
        if (checkInputs) {
          dispatch(userLogin({ email, password }));
          setEmail("");
          setPassword("");
          navigate("/");
        } else {
          toast.error("please, fill input data");
        }
      } else {
        toast.error("please, create account before login");
      }
    }
  };

  // const messageVariants = {
  //   hidden: { y: 30, opacity: 0 },
  //   animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  // };

  const formData =
    location.pathname.substring(1) === "login" && path
      ? [
          {
            label: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            type: "email",
          },
          {
            label: "Password",
            value: password,
            OnChange: (e) => setPassword(e.target.value),
            type: "password",
          },
        ]
      : [
          {
            label: "Name",
            value: name,
            onChange: (e) => setName(e.target.value),
            type: "text",
          },
          {
            label: "Email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            type: "email",
          },
          {
            label: "Password",
            value: password,
            OnChange: (e) => setPassword(e.target.value),
            type: "password",
          },
          {
            label: "Confirm Password",
            value: confirmPass,
            OnChange: (e) => setConfirmPass(e.target.value),
            type: "password",
          },
        ];

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn>
            <FormTitle>
              {location.pathname.substring(1) === "signup"
                ? "Sign up"
                : "Login"}
            </FormTitle>
            <FormWrapper
              onSubmit={
                location.pathname.substring(1) === "signup"
                  ? handleSignupSubmit
                  : handleLoginSubmit
              }
            >
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
              <FormButton>
                {location.pathname.substring(1) === "signup"
                  ? "Sign up"
                  : "Login"}
              </FormButton>
            </FormWrapper>
            {/* {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )} */}
            {/* {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )} */}

            <FormLinkWrapper>
              {location.pathname.substring(1) === "signup"
                ? "Alredy have an account?"
                : "Don't have an Account?"}

              <FormLink
                to={
                  location.pathname.substring(1) === "signup"
                    ? "/login"
                    : "/signup"
                }
              >
                {location.pathname.substring(1) === "signup"
                  ? "Login"
                  : "signup"}
              </FormLink>
            </FormLinkWrapper>
          </FormColumn>
        </FormRow>
        <Toaster position="top-center" reverseOrder={true} />
      </Container>
    </FormSection>
  );
}

export default Form;
