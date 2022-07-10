import api from '~/api';

export default class Pyrus {
    public static async checkPromo(promo: String): Promise<String> {
        const { data } = await api.get(`promo/check/${promo}`);

        return data.product;
    }

    public static async createPromo(body: DTOCreatePromo): Promise<String> {
        const { data } = await api.post('promo/create', body)

        return data[0].name;
    }

    public static async createPyrus(body: DTOCreatePyrus): Promise<String> {
        const { promo, ...request } = body;

        await api.post(`promo/pyrus/${promo || 'self'}`, request);

        return ''
    }
}

interface DTOCreatePromo {
    username: String,
    phone: String,
    product: String,

    limit?: number,
    unlimit?: Boolean,
}

interface DTOCreatePyrus {
    promo?: String,

    username: String,
    phone: String,
    city: String,
    product: String,
}