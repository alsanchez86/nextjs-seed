import { requestQuote } from "../../utils/requests";
import Layout from "../../components/layout";
import get from "lodash.get";

export async function getServerSideProps() {
    const ssrQuote = await requestQuote({ssr: true});

    return {
        props: {
            ssrQuote
        }
    };
}

export default ({
    ssrQuote
}) => {
    const ssrData = {
        quote: get(ssrQuote, "data", {})
    };

    return (
        <Layout>
            {JSON.stringify(ssrData)}
        </Layout>
    );
}