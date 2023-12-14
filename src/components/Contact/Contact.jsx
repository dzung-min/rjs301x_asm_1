import styles from "./Contact.module.css";

const RegisterForm = () => {
  return (
    <div className={styles.register}>
      <h2>Save time, save money</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <div>
        <input type="text" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default RegisterForm;
