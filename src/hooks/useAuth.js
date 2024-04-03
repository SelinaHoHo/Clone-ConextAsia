import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../api/auth";
import { notification } from "antd";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (req) => {
      const { data } = await postLogin(req);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
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
