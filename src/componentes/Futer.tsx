import "./futer.css"
export const Futer = () => {
  return (
    <div>
      <div className="container alala">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">
                <use href="#bootstrap" />
              </svg>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2025 HC Creaciones Web</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg" width="24" height="24" alt="Twitter" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg" width="24" height="24" alt="Instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg" width="24" height="24" alt="Facebook" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
