import { GoogleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { useLogin } from "../../hooks/useAuth";

const SignIn = ({ visible, onClose, onSignUp, setVisible }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { mutate: handleLogin } = useLogin();
  const onFinish = (value) => {
    Promise.all([
      handleLogin({
        email: value.email,
        password: value.password,
      }),
      setVisible(false),
    ]);
  };

  const handleSignUp = () => {
    onClose(); // Close sign-in modal
    onSignUp(); // Open sign-up modal
    setVisible(false);
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      className="modal-auth"
      footer={
        <div className="modal-footer">
          <p>
            {t("haven't-account")}{" "}
            <a className="authen-link" onClick={handleSignUp}>
              {t("singIn-authen-link")}
            </a>
          </p>
        </div>
      }
    >
      <h5 className="modal-title">{t("singIn-modal-title")}</h5>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label={t("label-email")}
          name="email"
          rules={[{ required: true, message: "Email is a required field" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label={t("label-password")}
          rules={[{ required: true, message: "Password is a required field" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="authen-button"
          >
            <b>{t("button-singIn")}</b>
          </Button>
          <p className="or-text">{t("or-text")}</p>
          <Button
            size="large"
            key="google"
            icon={<GoogleOutlined />}
            block
            className="google-button"
          >
            <b>Google</b>
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SignIn;
