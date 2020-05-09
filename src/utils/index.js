import * as moment from "moment";
import "moment/locale/es";
import getEnvironment from "./get-environment";

export const publicUrl = getEnvironment({ssr: false});
export const getRandomElementFromArray = (collection = []) => collection[Math.floor(Math.random() * collection.length)];
export const addClass = (clase = "", condition) => `${condition && clase || ""}`;
export const base64 = (data) => `data:image/jpeg;base64,${data}`;

export const getDate = (value = "", format = "DD/MM/YYYY") => {
    const date = (value !== "") ? new Date(value) : new Date();
    return moment(date).format(format);
}

export const getDateAsValue = (value = "", format = "DD/MM/YYYY") => {
    const date = (value !== "") ? new Date(value) : new Date();
    return moment(date).valueOf();
}

export const getDateYesterday = (format = "DD/MM/YYYY") => {
    const date = new Date();
    return moment(date).subtract(1, 'days').format(format);
}

export const getDuration = (start = "", end = "", format = "DD/MM/YYYY") => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diff = moment(endDate, format).diff(moment(startDate, format));
    const duration = moment.duration(diff);
    return duration;
}

export const getUrlData = (request, name) => {
    const regex = new RegExp(`\\/${name}\\/(\\d+)`);
    return (request?.url?.split(regex)?.[1] || '');
}