import { useMutation } from "@tanstack/react-query";
import { postLogin, postRegister } from "../api/auth";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (req) => {
      const { data } = await postLogin(req);
      return data;
    },
    onSuccess: (data) => {
      dispatch(login());
      window.localStorage.setItem("isLogin", true);
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
      });
    },
    onError: (error) => {
      notification.error({
        // Show error notification
        message: "Login Failed",
        description:
          error.response.data.message || "An error occurred during login.",
      });
    },
  });
};

export const useRegister = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (req) => {
      const { data } = await postRegister(req);
      return data;
    },
    onSuccess: (data) => {
      dispatch(login());
      notification.success({
        message: "Register Successful",
        description: "You have successfully registered.",
      });
    },
    onError: (error) => {
      notification.error({
        // Show error notification
        message: "Register Failed",
        description:
          error.response.data.message || "An error occurred during login.",
      });
    },
  });
};
