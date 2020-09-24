import { queryStringify } from '../utils/mydash/queryStringify';
const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};
/**
 * Returns passed @data stringified
 * @param {object} data
 */
export default class http {
    get(url, options = {}) {
        const { data } = options;
        return this.request(`${url}${queryStringify(data)}`, { ...options, method: METHODS.GET }, options.timeout);
    }
    post(url, options = {}) {
        return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
    }
    put(url, options = {}) {
        return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
    }
    delete(url, options = {}) {
        return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
    }
    request(url, options, timeout = 5000) {
        if (!options)
            throw new Error('Give me something');
        const { method, data, headers } = options;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            if (headers && Object.entries(headers).length)
                this.setHeaders(xhr, headers);
            xhr.timeout = timeout;
            xhr.onload = function () {
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (method === METHODS.GET || !data) {
                xhr.send();
            }
            else {
                xhr.send(data);
            }
        });
    }
    setHeaders(xhr, headers) {
        if (!xhr)
            throw new Error('Give me something');
        Object.entries(headers).forEach(([header, value]) => {
            if (!header || typeof header !== 'string' || !value || typeof value !== 'string')
                return;
            xhr.setRequestHeader(header, value);
        });
    }
}
