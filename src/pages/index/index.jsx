import { requestFilms, requestQuote } from "../../utils/requests";
import { HomeContext } from "../../contexts/home";
import Layout from "../../components/layout";
import get from "lodash.get";
import Template from "./template";

export async function getServerSideProps() {
    const ssrShows = await requestFilms({q: "pepe"});
    const ssrQuote = await requestQuote({ssr: true});

    return {
        props: {
            ssrShows,
            ssrQuote
        }
    };
}

export default ({
    ssrShows,
    ssrQuote
}) => {
    const ssrData = {
        shows: get(ssrShows, "data", {}),
        quote: get(ssrQuote, "data", {})
    };

    return (
        <HomeContext value={ssrData}>
            <Layout>
                <Template />
            </Layout>
        </HomeContext>
    );
}