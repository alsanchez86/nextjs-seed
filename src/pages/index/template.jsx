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

    const handleEnterKey = (e) => {
        if (e.key === "Enter"){
            getBatmanFilms();
        }
    }

    return (
        <>
            <div className="p-grid">
                <div className="p-col-12 p-md-4">
                    <div className="p-inputgroup">
                        <Button
                            label="Search"
                            onClick={getBatmanFilms}
                        />
                        <InputText
                            id="quote"
                            placeholder="Search"
                            value={quoteSearch}
                            onChange={(e) => setQuoteSearch(e.target.value)}
                            onKeyDown={(e) => handleEnterKey(e)}
                        />
                    </div>

                    {(contextState?.shows?.length > 0) && (
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
                    )}

                    {(contextState?.shows?.length === 0) && (
                        <p>
                            No results.
                        </p>
                    )}
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