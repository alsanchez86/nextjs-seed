import { useEffect } from "react";
import { useRouter } from "next/router";
import { setLoading } from "../../contexts/cache/actions";
import { useCacheContextState, useCacheContextDispatch } from "../../contexts/cache";
import MainNav from "../main-nav";
import Footer from "../footer";
import { ProgressSpinner } from "primereact/progressspinner";
import { publicUrl } from "../../utils";

export default ({ children }) => {
    const Router = useRouter();
    const cacheContextState = useCacheContextState();
    const cacheContextDispatch = useCacheContextDispatch();

    useEffect(() => {
        const handleStart = (url) => {
            const pathname = `${publicUrl}${Router.pathname}`;
            const changed = (pathname !== url);
            if (changed) {
                cacheContextDispatch(setLoading(true));
            }
        };

        Router.events.on("routeChangeStart", handleStart);
        Router.events.on("routeChangeError", (err) => {
            // If a route load is cancelled (for example, by clicking two links rapidly in succession), routeChangeError will fire.
            if (err.cancelled) {
                cacheContextDispatch(setLoading(false));
            }
        });

        return () => {
            Router.events.off("routeChangeStart", handleStart);
        }
    }, []);

    useEffect(() => {
        // Load data from cache on init. Equals to cacheContextDispatch(loadCache());
        cacheContextDispatch(setLoading(false));
    }, []);

    return (
        <>
            <MainNav />
            {cacheContextState?.loadingPage && (
                <ProgressSpinner strokeWidth={"6"} />
            )}
            {!cacheContextState?.loadingPage && children}
            <Footer />
        </>
    );
}