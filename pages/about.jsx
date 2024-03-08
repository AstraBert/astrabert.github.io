import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> 21-years-old BS student in Biological Sciences at <a href='https://dbb.dip.unipv.it/en'>University of Pavia (Italy)</a>.</li>
        <li><span role="img" aria-label="plant">🌱</span> I'm conducting research on bioinformatics applied to genomics, especially in the fields of biodiversity conservation and phylogenetics - collaborating with <a href='https://www.nhm-wien.ac.at/en'>NHM Vienna</a> and <a href='https://dbb.dip.unipv.it/en'>University of Pavia (Italy)</a>.</li>
        <li><span role="img" aria-label="laptop">💻</span> Currently learning how to apply Python, bash, R and other languages to the development of user-friendly and innovative tools to carry out genomic analyses.</li>
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
