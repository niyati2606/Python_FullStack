import { Link } from 'react-router-dom';
import AppCard from '../components/common/AppCard';

export const NotFoundPage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <AppCard>
            <div className="py-4">
              <h1 className="display-1 fw-bold text-primary">404</h1>
              <h4 className="fw-semibold text-secondary mb-3">Page Not Found</h4>
              <p className="text-muted mb-4">
                The page you are looking for does not exist or may have been moved.
              </p>
              <Link to="/expenses" className="btn btn-primary px-4">
                Return to Expenses
              </Link>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
