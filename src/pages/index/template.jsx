import { useCacheContextState, useCacheContextDispatch } from "../../contexts/cache";
import { useHomeContextState, useHomeContextDispatch } from "../../contexts/home";
import { addToHistory } from "../../contexts/cache/actions";
import { updateShows, updateQuote } from "../../contexts/home/actions";
import { requestFilms, requestQuote } from "../../utils/requests";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { publicUrl } from "../../utils";
import { useState } from "react";

export default () => {
    const cacheContextState = useCacheContextState();
    const cacheContextDispatch = useCacheContextDispatch();
    const contextState = useHomeContextState();
    const contextDispatch = useHomeContextDispatch();
    const [quoteSearch, setQuoteSearch] = useState("");

    const searchFilms = async () => {
        const res = await requestFilms({q: quoteSearch});

        if (res?.ok){
            contextDispatch(updateShows(res?.data));
        }

        if (quoteSearch !== ""){
            cacheContextDispatch(addToHistory(quoteSearch));
        }
    };

    const getQuote = async () => {
        const res = await requestQuote({ssr: false});

        if (res?.ok){
            contextDispatch(updateQuote(res?.data));
        }
    };

    const handleEnterKey = (e) => {
        if (e.key === "Enter"){
            searchFilms();
        }
    }

    return (
        <>
            <div className="p-grid">
                <div className="p-col-12 p-md-4">
                    <div className="p-inputgroup">
                        <Button
                            label="Search"
                            onClick={searchFilms}
                        />

                        <InputText
                            id="quote"
                            placeholder="Search"
                            value={quoteSearch}
                            onChange={(e) => setQuoteSearch(e.target.value)}
                            onKeyDown={(e) => handleEnterKey(e)}
                        />
                    </div>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-6">
                            {(contextState?.shows?.length > 0) && (
                                <ul>
                                    {contextState?.shows?.map(({show}) => (
                                        <li key={show?.id}>
                                            {show?.name}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {(contextState?.shows?.length === 0) && (
                                <p>
                                    No results.
                                </p>
                            )}
                        </div>

                        <div className="p-col-12 p-md-6">
                            <p>
                                Histórico de búsquedas:
                            </p>

                            {(cacheContextState?.historyShowSearchs?.length > 0) && (
                                <ul>
                                    {cacheContextState?.historyShowSearchs?.map(search => (
                                        <li key={search?.id}>
                                            {search?.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-col-12 p-md-4">
                    <img src={`${publicUrl}/images/perro.jpg`}/>
                </div>

                <div className="p-col-12 p-md-4">
                    <p>
                        Author: {contextState?.quote?.author}
                        <br/>
                        Quote: {contextState?.quote?.text}
                    </p>

                    <Button
                        label="get quote"
                        onClick={getQuote}>
                    </Button>
                </div>
            </div>
        </>
    );
}