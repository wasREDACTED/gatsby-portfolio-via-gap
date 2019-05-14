import React from 'react'

import GlobalWrapper from 'components/global-wrapper'
import Header from 'components/article/header'
import ContentWrapper from 'components/article/contentwrapper'
import Footer from 'components/footer'

function Imprint() {
  return (
    <GlobalWrapper>
      <Header title="Imprint / Disclaimer" />
      <ContentWrapper>
        <h2>A few legal notes</h2>
        <p>
        </p>
        <h3>Contact</h3>
        <p>
        Greyson Yant
          <br />
          Eugene, Oregon, USA
          <br />
          E-Mail: greyson.yant[@]gmail.com
        </p>
        <h3>Responsible for site content</h3>
        <p>
          Greyson Yant
          <br />
          <i>Legal notes inspired by: "Impressum" generator via www.e-recht24.de</i>
        </p>
        <h2>Disclaimer</h2>
        <h3>Liability for Content</h3>
        <p>
        The contents of our pages were created with great care. For the 
        accuracy, completeness and timeliness of the contents, however, we 
        can not guarantee. As a service provider we are responsible for our
        own contents on these sites according to the general laws. Accordingly,
        however, we as a service provider are not obliged to monitor transmitted
        or stored external information or to investigate circumstances that 
        indicate illegal activity. Obligations to remove or block the use of 
        information under general law remain unaffected. However, liability in 
        this regard is only possible from the moment of knowledge of a 
        specific infringement.
        </p>
        <h3>Liability for Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <h3>Datenschutz</h3>
        <p>
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor.
          <i>Quellenangaben: eRecht24 Disclaimer</i>
        </p>
      </ContentWrapper>
      <Footer />
    </GlobalWrapper>
  )
}

export default Imprint
