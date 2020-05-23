import { useHomeContextState, useHomeContextDispatch } from "../../contexts/home";
import { updateShows, updateQuote } from "../../contexts/home/actions";
import { requestFilms, requestQuote } from "../../utils/requests";
import { Button } from 'primereact/button';
import { publicUrl } from "../../utils";

export default () => {
    const contextState = useHomeContextState();
    const contextDispatch = useHomeContextDispatch();

    const getBatmanFilms = async () => {
        const res = await requestFilms({q: "batman"});
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

            <Button
                label="get batman films"
                icon="pi pi-check"
                onClick={getBatmanFilms}
            />

            <p>
                Quote: {contextState?.quote?.text}
            </p>

            <Button
                label="get quote"
                onClick={getQuote}>
            </Button>

            <img src={`${publicUrl}/images/perro.jpg`}/>
        </>
    );
}