import React from "react";
import { Form, Input, Modal, Button, Checkbox } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { register } from "../../redux/auth/authThunk";

const SignUp = ({ visible, onClose, onSignIn, setVisible }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const onFinish = (value) => {
    dispatch(
      register({
        name: value.username,
        email: value.email,
        password: value.password,
      })
    );
  };
  const handleSignIn = () => {
    onClose(); // Close sign-up modal
    onSignIn(); // Open sign-in modal
    setVisible(true);
  };

  return (
    <Modal
      className="modal-auth"
      style={{
        top: 20,
      }}
      open={visible}
      onCancel={onClose}
      footer={
        <div className="modal-footer">
          <p style={{ textAlign: "center", color: "#171c32" }}>
            {t("have-account")}{" "}
            <a className="authen-link" onClick={handleSignIn}>
              {t("singUp-authen-link")}
            </a>
          </p>
        </div>
      }
    >
      {/* Sign-up form content */}
      <h5 className="modal-title">{t("singUp-modal-title")}</h5>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label={t("label-name")}
          name="username"
          rules={[{ required: true, message: "Name is a required field" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("label-email")}
          name="email"
          rules={[{ required: true, message: "Email is a required field" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("label-password")}
          name="password"
          rules={[{ required: true, message: "Password is a required field" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        "Must Accept Term of Service and Privacy Policy"
                      )
                    ),
            },
          ]}
        >
          <Checkbox style={{ marginBottom: "3px" }}>
            {t("agree-text")}
            <a className="agreePolicy-link" href="#">
              {" "}
              {t("agree-policy")}
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            className="authen-button"
            type="primary"
            size="large"
            htmlType="submit"
          >
            <b>{t("button-singUp")}</b>
          </Button>
          <p className="or-text">{t("or-text")}</p>
          <Button
            className="google-button"
            size="large"
            key="google"
            icon={<GoogleOutlined />}
            block
          >
            <b>Google</b>
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignUp;
