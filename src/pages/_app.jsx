import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../scss/main.scss";

import { CacheContext } from "../contexts/cache";
import Head from "next/head";

export default ({ Component, pageProps }) =>

<CacheContext>
    <Head>
        <title>Nextjs Seed</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Component {...pageProps} />
</CacheContext>