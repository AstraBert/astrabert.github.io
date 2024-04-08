import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h2>Bioinformatics</h2>
          <h2>Research</h2>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Astra Bertelli</h1>
            <h6 className={styles.bio}>Bioinformatics researcher</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      Research
                    </span>
                    <span key='Python' className='Python'>
                      Python
                    </span>
                    <span key='Biology' className='Biology'>
                      Biology
                    </span>
                    <span key='Bioinformatics' className='Bioinformatics'>
                      Bioinformatics
                    </span>
                    <span key='Biodiversity' className='Biodiversity'>
                      Biodiversity protection
                    </span>
                    <span key='Software-Development' className='Software-Development'>
                      Software-Development
                    </span>
                    <span key='Bots' className='Bots'>
                      Telegram and Discord Bots
                    </span>
                    <span key='APIs' className='APIs'>
                      APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            <Link href="https://github.com/sponsors/AstraBert">
              <button className={styles.button}>Sponsor me on GitHub</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.png"
                width={300}
                height={290}
                alt="Coding cat"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
