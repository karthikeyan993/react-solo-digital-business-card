export default function Info() {
  return (
    <section className="info">
      <img className="info__person" src="/src/assets/person.png" alt="" />
      <div className="info__details">
        <h3>Laura Smith</h3>
        <p className="info__role">Frontend Developer</p>
        <a className="info__website" href="">
          laurasmith.website
        </a>
      </div>
      <div className="info__social-buttons">
        <a className="info__email btn" href="">
          <img src="/src/assets/mail.png" alt="" />
          <p>Email</p>
        </a>
        <a className="info__linkedin btn" href="">
          <img src="/src/assets/linkedin.png" alt="" />
          <p>LinkedIn</p>
        </a>
      </div>
    </section>
  );
}
