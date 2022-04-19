import styles from "./Homepage.module.css";

const Homepage = () => (
  <div className="container">
    <div className="row">
      <div className="col position-relative">
        <div className={styles.heroimage}></div>
        <h1 className={`${styles.herotext} text-white display-1 `}>
          Integration hotel
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10 col-sm-12">
        <h2 className="mt-2 display-2 text-center">Our mission</h2>
        <p className="mt-4">
          Here at integration hotel, we're looking to provide the best
          experience for customers looking to re-integration with their
          environment. We want to provide a fully automated package for
          customers, where they can find out what delivers them to a place of
          production.
        </p>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <img src="/images/room-photo.jpg" height="200px" />
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <h4>Our rooms</h4>
              <p>
                We have a range of high end rooms availabe for any configuration
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  </div>
);

export default Homepage;
