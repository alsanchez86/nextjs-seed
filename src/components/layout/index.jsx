import { useEffect } from "react";
import { useRouter } from "next/router";
import { setLoading } from "../../contexts/cache/actions";
import { useCacheContextState, useCacheContextDispatch } from "../../contexts/cache";
import MainNav from "../main-nav";
import Footer from "../footer";
import { ProgressSpinner } from "primereact/progressspinner";

export default ({ children }) => {
    const router = useRouter();
    const contextState = useCacheContextState();
    const contextDispatch = useCacheContextDispatch();

    useEffect(() => {
        const handleStart = (url) => ((url !== router.pathname) && contextDispatch(setLoading(true)));
        router.events.on("routeChangeStart", handleStart);
        contextDispatch(setLoading(false)); // Load data from cache too

        return () => {
            router.events.off("routeChangeStart", handleStart);
        }
    }, []);

    return (
        <>
            <MainNav />

            {contextState?.loadingPage && (
                <ProgressSpinner strokeWidth={"6"} />
            )}

            {!contextState?.loadingPage && children}

            <Footer />
        </>
    );
}