import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useForm from '../hooks/useForm';
import AppCard from '../components/common/AppCard';
import FormInput from '../components/common/FormInput';
import AppButton from '../components/common/AppButton';
import AppAlert from '../components/common/AppAlert';

export const LoginPage = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const { login, loading, error, setError } = useAuth();
  const { values, handleChange } = useForm({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.username || !values.password) {
      setError('Please provide both username and password.');
      return;
    }

    const success = await login(values.username, values.password);
    if (success) {
      if (onLoginSuccess) onLoginSuccess();
      navigate('/expenses');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
          <AppCard title="Log In">
            <AppAlert
              variant="danger"
              message={error}
              onClose={() => setError(null)}
            />

            <form onSubmit={handleSubmit}>
              <FormInput
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Enter username"
                required
              />

              <FormInput
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />

              <div className="d-grid mt-4">
                <AppButton type="submit" variant="primary" loading={loading}>
                  Sign In
                </AppButton>
              </div>
            </form>

            <div className="text-center mt-3 pt-2 border-top">
              <span className="text-muted small">Don't have an account? </span>
              <Link to="/signup" className="text-decoration-none small fw-semibold">
                Sign up
              </Link>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
