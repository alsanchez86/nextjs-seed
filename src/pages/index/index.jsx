import { useEffect, useState } from "react";
import { useContextState, useContextDispatch } from "../../contexts/main";
import { requestFilms, requestQuote } from "../../utils/requests";
import { updateShows } from "../../contexts/main/actions";
import Template from "./template";

export async function getServerSideProps() {
    const ssrShows = await requestFilms("pepe");
    const ssrQuote = await requestQuote({ssr: true});

    return {
        props: {
            ssrShows,
            ssrQuote
        }
    };
}

export default ({ ssrShows, ssrQuote }) => {
    const contextState = useContextState();
    const contextDispatch = useContextDispatch();
    const [quote, setQuote] = useState(ssrQuote); // Local state. Not context data

    const getBatmanFilms = async () => {
        const data = await requestFilms("batman");
        contextDispatch(updateShows(data));
    };

    const getQuote = async () => {
        const data = await requestQuote({ssr: false});
        setQuote(data);
    };

    useEffect(() => {
        contextDispatch(updateShows(ssrShows));
    }, []);

    return (
        <Template
            shows={contextState.shows}
            getBatmanFilms={getBatmanFilms}
            quote={quote}
            getQuote={getQuote}
        />
    );
}