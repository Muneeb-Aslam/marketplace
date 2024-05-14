/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import ArrowRightIcon from "../../../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../../../assets/svg/visibilityIcon.svg";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import db  from "../../../config/firebase";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import registerSchema from "../../../schema/registerschema";

const SigUpForm: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    setDisabled(true);
    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: data.name,
      });

      const copy = data
      delete copy.password;
      copy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), copy);

      navigate("/");
    } catch (error) {
      toast.error("Bad User Credentials");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="emailInput"
        placeholder="Name"
        {...register("name")}
      />
      {!!errors.name && (
        <span className="" style={{ color: "red", fontSize: "1rem" }}>
          {errors.name.message}
        </span>
      )}
      <input
        type="text"
        className="emailInput"
        placeholder="Email"
        {...register("email")}
      />
      {!!errors.email && (
        <span className="" style={{ color: "red", fontSize: "1rem" }}>
          {errors.email.message}
        </span>
      )}
      <div className="passwordInputDiv">
        <input
          type={showPassword ? "text" : "password"}
          className="passwordInput"
          placeholder="Password"
          id="password"
          {...register("password")}
        />

        <img
          src={visibilityIcon}
          alt="show password"
          className="showPassword"
          onClick={() => setShowPassword((prevState) => !prevState)}
        />
        {!!errors.password && (
          <span className="error" style={{ color: "red", fontSize: "1rem" }}>
            {errors.password.message}
          </span>
        )}
      </div>
      <button className="signInBar" type="submit" disabled={disabled}>
        <p className="signInText">Sign Up</p>
        <div className="signInButton">
          <img src={ArrowRightIcon} alt="" width="34px" height="34px" />
        </div>
      </button>
    </form>
  );
};

export default SigUpForm;
