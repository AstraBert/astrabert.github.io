import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'astra.bertelli01@universitadipavia.it',
    href: 'mailto:astra.bertelli01@universitadipavia.it',
  },
  {
    social: 'LinkedIn',
    link: 'Linkedin.com/in/astra-bertelli',
    href: 'https://www.linkedin.com/in/astra-bertelli-583904297',
  },
  {
    social: 'GitHub',
    link: 'github.com/AstraBert',
    href: 'https://github.com/AstraBert',
  },
  {
    social: 'PyPi',
    link: 'pypi.org/user/AstraBert',
    href: 'https://pypi.org/user/AstraBert/',
  },
  {
    social: 'Website',
    link: 'astrabert.vercel.app',
    href: 'https://astrabert.vercel.app',
  },
  {
    social: 'My blog',
    link: 'HOPHOP Science',
    href: 'https://astrabert.github.io/hophop-science/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>AstraBert</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
