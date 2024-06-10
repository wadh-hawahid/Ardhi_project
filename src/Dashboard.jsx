import "./assets/css/style.css";
import Login from "./Login";

const Dashboard = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <image src="logo.png" alt="Ngombe" width="70px" />
          <h1 className="logo_name">Ardhi</h1>
        </div>

        <a href="#home">
          <i className="fa fa-fw fa-home"></i> Home
        </a>
        <a href="#services">
          <i className="fa fa-fw fa-wrench"></i> Services
        </a>
        <a href="#clients">
          <i className="fa fa-fw fa-user"></i> Clients
        </a>
        <a href="#contact">
          <i className="fa fa-fw fa-envelope"></i> Contact
        </a>
      </div>

      <div className="main">
        <Login/>
       <section className="content container-fluid mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
