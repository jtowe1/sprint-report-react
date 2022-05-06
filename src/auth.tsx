/**
 * This represents some generic auth provider API, like Firebase.
 */
 const axios = require('axios');
 function getCookie(name: string) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null; }
 const fakeAuthProvider = {
    isAuthenticated: false,
    signin(email: string, password: string, callback: VoidFunction) {
        // fetch("http://localhost:9000/login", {

        //     // Adding method type
        //     method: "POST",

        //     // Adding body or contents to send
        //     body: JSON.stringify({
        //         title: "foo",
        //         body: "bar",
        //         userId: 1
        //     }),

        //     // Adding headers to the request
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })

        // // Converting to JSON
        // .then(response => response.json())

        // // Displaying results to console
        // .then(json => console.log(json));

        // fetch('http://localhost:9000/sanctum/csrf-cookie', {
        //     credentials: 'include',
        // })
        // .then(response => console.log(response));

        // let formData = new FormData();
        // formData.append('email', email);
        // formData.append('password', password);
        // const token = getCookie('XSRF-TOKEN') ?? '';

        // fetch("http://localhost:9000/login", {
        //     body: formData,
        //     method: "post",
        //     headers: {
        //         'Accept': 'application/json',
        //         'X-XSRF-TOKEN': token
        //     }
        // })
        // .then(response => response.json())
        // .then(response => console.log(response));

        // document.cookie = '';

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
            console.log(document.cookie);
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
            })
            .catch(function (error: any) {
                console.log('login call fail');
                console.log(error);
            });
        });


        fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };

  export { fakeAuthProvider };
