import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Hi, I'm Astra Clelia Bertelli, a 21-years-old student and (bio)informatics geek currently studying Biological Sciences at <a href='https://dbb.dip.unipv.it/en'>University of Pavia (Italy)</a>. I'm also currently Founding Engineer in a Stealth Startup.</li>
        <li><span role="img" aria-label="plant">🌱</span>I'm conducting research on bioinformatics applied to genomics, especially in the fields of biodiversity conservation and phylogenetics - collaborating with <a href='https://www.nhm-wien.ac.at/en'>NHM Vienna</a> and <a href='https://dbb.dip.unipv.it/en'>University of Pavia (Italy)</a>. I'm determined to democratise the access to genomics, help the environment and fight biodiversity loss</li>
        <li><span role="img" aria-label="laptop">💻</span> I'm on track for learning more about Bioinformatics applied to genomics, Artificial Intelligence and Machine Learning. I'm looking to collaborate on bioinformatically-related and ML/AI-oriented projects.</li>
      </ul>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="Resume-KonstantinosGeorgiou.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} renderMode="svg"/>
          <Page pageIndex={1} renderMode="svg"/>
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
