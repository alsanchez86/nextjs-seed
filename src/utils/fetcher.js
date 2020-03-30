import fetch from "isomorphic-unfetch";

/**
 * Simple wrapper for vanilla fetch
 *
 * @export
 * @param {*} url
 * @returns
 */
export default async function (...args) {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}