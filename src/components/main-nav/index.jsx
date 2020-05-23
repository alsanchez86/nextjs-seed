import { useRouter } from "next/router";
import Link from "../link";
import { addClass } from "../../utils";
import ListItem from "./list-item.class";
import ListItemsData from "./list-items.json";
import { Button } from "primereact/button";

export default () => {
    const router = useRouter();
    const items = ListItemsData
        .filter(e => e.visible)
        .map(e => new ListItem(e))
        .map(e => {
            e.active = (e.activeLinks.filter(link => router.pathname === `/${link}`)?.length > 0); // Active item from url pathname for css highlight
            return e;
        });

    return (
        <>
            {items.map(item => (
                <li key={item.link} className={`${addClass("active", item.active)}`}>
                    <Link href={item.link}>
                        <Button
                            label={item.label}
                            icon={`${item.icon}`}
                        />
                    </Link>
                </li>
            ))}
        </>
    );
}