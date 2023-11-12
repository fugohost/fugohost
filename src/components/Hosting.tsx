import Footer from "./Footer";
function Hosting() {
  return (
    <div>
      <div className="customDiv customHosting">
        <p>
          In the vast ecosystem of the internet, web hosting is the foundation
          upon which websites thrive. Choosing the right hosting service is
          crucial for the performance, security, and scalability of your online
          presence. Selecting the right web hosting service is a crucial
          decision that directly impacts the success of your online venture.
          Consider factors such as budget, technical expertise, and the specific
          requirements of your website or application. Whether you opt for
          shared hosting, VPS, dedicated servers, cloud hosting, managed
          WordPress hosting, or reseller hosting, understanding the nuances of
          each type will empower you to make an informed choice and ensure a
          robust foundation for your online presence.
        </p>
        <div className="card customCard">
          {/* <img className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title customCardTitle">Shared Hosting</h5>
            <p className="card-text customCardText">
              Experience the perfect launchpad for your online success with our
              Shared Hosting solution. Affordable, reliable, and user-friendly,
              it's the ideal starting point for individuals and businesses
              alike. Enjoy the benefits of a secure and fully managed hosting
              environment without breaking the bank. Seamlessly scale your
              online presence as you grow, backed by our expert support.
            </p>
            <a
              className="btn btn-outline-primary"
              href="https://calendly.com/fugohost/30min"
              target={"_blank"}
              rel="noreferrer"
            >
              Let's Discuss
            </a>
          </div>
        </div>
        <div className="card customCard">
          {/* <img className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title customCardTitle">VPS Hosting</h5>
            <p className="card-text customCardText">
              Empower your online journey with our VPS hosting solution — your
              key to unparalleled performance, control, and scalability. Unleash
              the full potential of your website with dedicated resources,
              lightning-fast speeds, and the freedom to customize your virtual
              server environment. Elevate your digital presence to new heights,
              backed by our robust infrastructure and expert support.
            </p>
            <a
              className="btn btn-outline-primary"
              href="https://calendly.com/fugohost/30min"
              target={"_blank"}
              rel="noreferrer"
            >
              Let's Discuss
            </a>
          </div>
        </div>
        <div className="card customCard">
          {/* <img className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title customCardTitle">Wordpress Hosting</h5>
            <p className="card-text customCardText">
              Unlock the full potential of your WordPress site with our premium
              hosting solution. Blending speed, security, and simplicity, our
              WordPress Hosting is designed to elevate your online presence.
              Experience lightning-fast load times, ironclad security, and
              effortless scalability, empowering you to focus on what matters –
              creating exceptional content. Elevate your WordPress experience.
            </p>
            <a
              className="btn btn-outline-primary"
              href="https://calendly.com/fugohost/30min"
              target={"_blank"}
              rel="noreferrer"
            >
              Let's Discuss
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hosting;
