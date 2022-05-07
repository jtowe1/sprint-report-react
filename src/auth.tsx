import client from './client';

function getCookie(name: string) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(email: string, password: string, callback: VoidFunction) {
        client.get('/sanctum/csrf-cookie')
        .then(function (response: any) {
            console.log('token call success');
            console.log(response);
            let formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            const token = getCookie('XSRF-TOKEN') ?? '';

            client.post('/login',
            formData,
            {
                headers: {
                    'X-XSRF-TOKEN': token
                }
            })
            .then(function (response: any) {
                console.log('login call success');
                console.log(response);
                callback();
            })
            .catch(function (error: any) {
                console.log('login call fail');
                console.log(error);
            });
        });
    },
    signout(email: string, callback: VoidFunction) {
        const formData = new FormData();
        formData.append('email', email);
        const token = getCookie('XSRF-TOKEN') ?? '';

        client.post('/logout',
        formData,
        {
            headers: {
                'X-XSRF-TOKEN': token
            }
        })
        .then(function (response: any) {
            console.log('logout call success');
            console.log(response);
            callback();
        })
        .catch(function (error: any) {
            console.log('logout call fail');
            console.log(error);
        });
    },
  };

  export { fakeAuthProvider };
