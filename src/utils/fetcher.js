import fetch from "isomorphic-unfetch";

const handleError = function (error) {
	return {
        ok: false
	};
};

/**
 * Simple wrapper for vanilla fetch
 *
 * @export
 * @param {*} args
 * @returns
 */
export default async function (...args) {
    let res = await fetch(...args).catch(handleError);
    let data = (res.ok && (res.status < 400)) ? await res.json() : null;

    return {
        ok: res.ok,
        data
    };
}