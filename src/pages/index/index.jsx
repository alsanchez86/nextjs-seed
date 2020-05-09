import { useEffect, useState } from "react";
import { useContextState, useContextDispatch } from "../../contexts/main";
import { requestFilms, requestQuote } from "../../utils/requests";
import { updateShows } from "../../contexts/main/actions";
import Template from "./template";

export async function getServerSideProps() {
    const resShows = await requestFilms({q: "pepe"});
    const resQuote = await requestQuote({ssr: true});
    const ssrShows = resShows?.ok ? resShows?.data : [];
    const ssrQuote = resQuote?.ok ? resQuote?.data : {};

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
        const res = await requestFilms({q: "batman"});
        if (res?.ok){
            contextDispatch(updateShows(res?.data));
        }
    };

    const getQuote = async () => {
        const res = await requestQuote({ssr: false});
        if (res?.ok){
            setQuote(res?.data);
        }
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