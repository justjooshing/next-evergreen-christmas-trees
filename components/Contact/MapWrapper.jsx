import contactStyle from "../../styles/Contact.module.css";

const MapWrapper = () => {
  return (
    <div className={contactStyle.map_wrapper}>
      <h3>You can find us here!</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12568.83828492689!2d145.1458054!3d-38.0422029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea462dafe096b78c!2sEvergreen%20Christmas%20Tree%20Farm!5e0!3m2!1sen!2suk!4v1603190530452!5m2!1sen!2suk"
        width="600"
        height="450"
        frameBorder="0"
        aria-hidden="false"
        className={contactStyle.map}
      ></iframe>
    </div>
  );
};

export default MapWrapper;
