const baseURL = 'https://gateway.marvel.com/v1/public/';

const publicKey = 'b076a24991bdc2b2840977bbe989220d';
const privateKey = '1d89de20b654dd5da7cdd54dd3922305860c50aa';

const time = Number(new Date());

const md5 = (input: string): string => {
    const crypto = require('crypto');
    return crypto.createHash('md5').update(input).digest('hex');
};

export const getCharacters = async (offset: number, limit: number, nameStartsWith?: string) => {
    try {
        const hash = md5(time + privateKey + publicKey);
        const url = new URL(`${baseURL}characters`);
        url.searchParams.append('ts', time.toString());
        url.searchParams.append('apikey', publicKey);
        url.searchParams.append('hash', hash);
        url.searchParams.append('limit', limit.toString());
        url.searchParams.append('offset', offset.toString());

        if (nameStartsWith) {
            url.searchParams.append('nameStartsWith', nameStartsWith);
        }

        const response = await fetch(url.toString());

        if (!response.ok) {
            throw new Error("Erro ao obter dados");
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const getCharacterComic = async (id: number) => {
    try {
        const hash = md5(time + privateKey + publicKey);
        const url = new URL(`${baseURL}characters/${id}/comics`);
        url.searchParams.append('ts', time.toString());
        url.searchParams.append('apikey', publicKey);
        url.searchParams.append('hash', hash);

        const response = await fetch(url.toString());

        if (!response.ok) {
            throw new Error("Erro ao obter dados");
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
}