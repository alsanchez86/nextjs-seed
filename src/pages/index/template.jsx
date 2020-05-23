import Layout from "../../components/layout";
import { Button } from 'primereact/button';
import { publicUrl } from "../../utils";

export default ({ shows, getBatmanFilms, quote, getQuote }) =>

<Layout>
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

    <img src={`${publicUrl}/images/perro.jpg`}/>
</Layout>