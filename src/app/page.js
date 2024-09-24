import Advantages from '../components/advantages';
import Res from '../components/res.js';
import Balance from '../components/balance';
import Partners from '../components/partners';
import Info from '../components/info';
import ContactForm from '../components/contactform';

export default function Home() {
  return (
    <>
      <section id="advantages">
        <Advantages />
      </section>
      <Res />
      <Balance />
      <section id="partners">
        <Partners />
      </section>
      <Info />
      <ContactForm />
    </>
  );
}




