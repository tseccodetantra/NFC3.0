// import "../styles/globals.css";
// import OpenLinksExternally from '../components/OpenLinksExternally';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
//   <OpenLinksExternally />

// }


import "../styles/globals.css";
import OpenLinksExternally from '../components/OpenLinksExternally';

export default function App({ Component, pageProps }) {
  return (
    <>
      <OpenLinksExternally />
      <Component {...pageProps} />
    </>
  );
}
