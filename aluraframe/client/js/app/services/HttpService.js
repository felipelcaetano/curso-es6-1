class HttpService {

    get(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            //Somente prepara e não executa
            xhr.open('GET', url);

            //Config
            xhr.onreadystatechange = () => {

                /*
                0: requisição ainda não iniciada.
                1: conexão com o servidor estabelecida.
                2: requisição recebida.
                3: processando requisição.
                4: requisição concluída e a resposta esta pronta.
                */
                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        console.log(JSON.parse(xhr.responseText));
                        resolve(JSON.parse(xhr.responseText));

                    } else {
                        console.log(xhr.responseText);
                        reject(xhr.responseText);
                    }
                }
            };

            //Envia
            xhr.send();
        });
    }

    post(url, dado) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            //Config
            xhr.onreadystatechange = () => {

                /*
                0: requisição ainda não iniciada.
                1: conexão com o servidor estabelecida.
                2: requisição recebida.
                3: processando requisição.
                4: requisição concluída e a resposta esta pronta.
                */
                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        console.log(JSON.parse(xhr.responseText));
                        resolve(JSON.parse(xhr.responseText));

                    } else {
                        console.log(xhr.responseText);
                        reject(xhr.responseText);
                    }
                }
            };

            //Envia
            xhr.send(JSON.stringify(dado));

        });

    }



}