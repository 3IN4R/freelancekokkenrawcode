

function Footer() {
    return(
        <footer id="foot">
        <div className="footer-content">
          <div className="requisits">
            <h1 id="contact-us" class="footer-header">Kontakt</h1>
            <h2 className="footer-text">
              <i className="fa fa-map-marker"></i> Nordre Strandvej 119, 
            </h2>
            <h2 className="footer-text">
              <i className="fa fa-map-marker"></i> 8240 Risskov
            </h2>
            <h2 className="footer-text">
              <a href="tel:86174456" class="fa fa-phone"></a> 86174456
            </h2>
            <h2 className="footer-text">
              <a href="mailto:erosfrisor@gmail.com" class="fa fa-envelope"></a> freelancekoekken@gmail.com
            </h2>
          </div>
          <div className="opening-hours">
            <h1 className="footer-header" id="opening">Åbningstider</h1>
            <h2 className="footer-text">
              Mandag &nbsp;&nbsp;&nbsp; 9:00 - 18:00
            </h2>
            <h2 className="footer-text">
              Tirsdag &nbsp;&nbsp;&nbsp; 9:00 - 18:00
            </h2>
            <h2 className="footer-text">Onsdag &nbsp;&nbsp;&nbsp; 9:00 - 18:00</h2>
            <h2 className="footer-text">
              Torsdag &nbsp;&nbsp;&nbsp; 9:00 - 18:00
            </h2>
            <h2 className="footer-text">
              Fredag &nbsp;&nbsp;&nbsp;
              9:00 - 18:00
            </h2>
            <h2 className="footer-text">
              Lørdag &nbsp;&nbsp;&nbsp; 9:00 - 18:00
            </h2>
            <h2 className="footer-text">
              Søndag&nbsp;&nbsp;&nbsp;
              9:00 - 18:00
            </h2>
          </div>
          <div className="requisits">
            <h1 id="contact-us" className="footer-header">Links</h1>
            <h2 className="footer-text">
              <a href='https://www.findsmiley.dk/Sider/Search.aspx' target="_blank"><i class="#"></i> Kontrollraport</a>
            </h2>
           
           
          </div>
        </div>
        <div className="footer-bottom" id="lastfoot">
          <p> &copy;2023 Freelance-Kokken</p>
        </div>
      </footer>
    );
}

export default Footer;