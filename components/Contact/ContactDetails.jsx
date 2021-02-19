import contactStyle from "../../styles/Contact.module.css";

const ContactDetails = () => {
  return (
    <div className={contactStyle.details}>
      <h3>Address</h3>
      <p>Corner of Riverend road and Thames promenade, Bangholme</p>
      <h3>Telephone</h3>
      <a href="tel:+61400 402 932">0400 402 932</a>
      <h3>Email</h3>
      <a href="mailto:evergreenchrissytrees@gmail.com" target="_blank">
        evergreenchrissytrees@gmail.com
      </a>
    </div>
  );
};

export default ContactDetails;
