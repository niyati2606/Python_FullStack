import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useForm from '../hooks/useForm';
import AppCard from '../components/common/AppCard';
import FormInput from '../components/common/FormInput';
import AppButton from '../components/common/AppButton';
import AppAlert from '../components/common/AppAlert';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { signup, loading, error, setError } = useAuth();
  const [successMsg, setSuccessMsg] = useState(null);

  const { values, handleChange } = useForm({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg(null);

    if (!values.username.trim() || !values.password) {
      setError('Username and password are required.');
      return;
    }

    if (values.password !== values.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const success = await signup(values.username.trim(), values.password);
    if (success) {
      setSuccessMsg('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
          <AppCard title="Create Account">
            <AppAlert
              variant="danger"
              message={error}
              onClose={() => setError(null)}
            />
            <AppAlert
              variant="success"
              message={successMsg}
              onClose={() => setSuccessMsg(null)}
            />

            <form onSubmit={handleSubmit}>
              <FormInput
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Choose a username"
                required
              />

              <FormInput
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Choose a password"
                required
              />

              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                required
              />

              <div className="d-grid mt-4">
                <AppButton type="submit" variant="primary" loading={loading}>
                  Sign Up
                </AppButton>
              </div>
            </form>

            <div className="text-center mt-3 pt-2 border-top">
              <span className="text-muted small">Already have an account? </span>
              <Link to="/login" className="text-decoration-none small fw-semibold">
                Sign in
              </Link>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
