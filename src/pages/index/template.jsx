import { useHomeContextState, useHomeContextDispatch } from "../../contexts/home";
import { updateShows, updateQuote } from "../../contexts/home/actions";
import { requestFilms, requestQuote } from "../../utils/requests";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { publicUrl } from "../../utils";
import { useState } from "react";

export default () => {
    const contextState = useHomeContextState();
    const contextDispatch = useHomeContextDispatch();
    const [quoteSearch, setQuoteSearch] = useState("");

    const getBatmanFilms = async () => {
        const res = await requestFilms({q: quoteSearch});
        if (res?.ok){
            contextDispatch(updateShows(res?.data));
        }
    };

    const getQuote = async () => {
        const res = await requestQuote({ssr: false});
        if (res?.ok){
            contextDispatch(updateQuote(res?.data));
        }
    };

    return (
        <>
            <div className="p-grid">
                <div className="p-col-4">
                    <ul>
                        {contextState?.shows?.map(({show}) => (
                            <li key={show?.id}>
                                <div href="/shows/[id]" as={`/shows/${show?.id}`}>
                                    <a>
                                        {show?.name}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-col-4">
                    <span className="p-float-label">
                        <InputText id="quote" value={quoteSearch} onChange={(e) => setQuoteSearch(e.target.value)} />
                        <label htmlFor="quote">Search</label>
                    </span>

                    <Button
                        label="get batman films"
                        icon="pi pi-check"
                        onClick={getBatmanFilms}
                    />
                </div>

                <div className="p-col-4">
                    <p>
                        Quote: {contextState?.quote?.text}
                    </p>

                    <Button
                        label="get quote"
                        onClick={getQuote}>
                    </Button>
                </div>
            </div>

            <div className="p-grid">
                <div className="p-col-12">
                    <img src={`${publicUrl}/images/perro.jpg`}/>
                </div>
            </div>
        </>
    );
}