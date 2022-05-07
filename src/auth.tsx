import client from './client';
import Cookies from 'js-cookie';


const clientSignin = (email: string, password: string) => {
    return client.get('/sanctum/csrf-cookie')
    .then(function (response: any) {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const token = Cookies.get('XSRF-TOKEN') ?? '';

        return client.post('/login',
        formData,
        {
            headers: {
                'X-XSRF-TOKEN': token
            }
        });
    });
}
const clientSignout = (email: string) => {
    return client.get('/sanctum/csrf-cookie')
    .then(function (response: any) {
        const formData = new FormData();
        formData.append('email', email);
        const token = Cookies.get('XSRF-TOKEN') ?? '';

        return client.post('/logout',
        formData,
        {
            headers: {
                'X-XSRF-TOKEN': token
            }
        });
    });
}

  export { clientSignin, clientSignout };
