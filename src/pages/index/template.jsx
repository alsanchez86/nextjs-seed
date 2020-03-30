import { Button } from 'primereact/button';
import Footer from "../../components/footer";

export default ({ shows, getBatmanFilms, quote, getQuote }) =>

<>
    <ul>
        {shows?.map(({show}) => (
            <li key={show?.id}>
                <div href="/shows/[id]" as={`/shows/${show?.id}`}>
                    <a>{show?.name}</a>
                </div>
            </li>
            ))
        }
    </ul>

    <Button
        label="get batman films"
        icon="pi pi-check"
        onClick={getBatmanFilms}
    />

    <p>
        Quote: {quote?.text}
    </p>

    <Button
        label="get quote"
        onClick={getQuote}>
    </Button>

    <Footer />
</>