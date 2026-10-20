export default function useApi() {
    function request(url, options) {
        const res = fetch(url, {
            ...options,
            headers: {  
                'Content-Type': 'application/json',
            },
        });
    }
    function post(url, body) {
        return request(url, {
            method: 'POST',
            body,
        });
    }

    return {
        post,
    }
}