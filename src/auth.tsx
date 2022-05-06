import axios from "axios";

function getCookie(name: string) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(email: string, password: string, callback: VoidFunction) {
        // axios.defaults.withCredentials = true;
        axios.get('http://localhost:9000/sanctum/csrf-cookie',{
           withCredentials: true
        })
        .then(function (response: any) {
            // handle success
            console.log('token call success');
            console.log(response);
            let formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            const token = getCookie('XSRF-TOKEN') ?? '';

            axios.post('http://localhost:9000/login',
            formData,
            {
                headers: {
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': token
                },
                withCredentials: true
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

        axios.post('http://localhost:9000/logout',
        formData,
        {
            headers: {
                'Accept': 'application/json',
                'X-XSRF-TOKEN': token
            },
            withCredentials: true
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
