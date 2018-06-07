class Bind {

    //... = rest operator em um método. Diferente do spread operator
    //Funciona como um array
    constructor(model, view, ...props) {

        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model)
        );

        view.update(model);

        return proxy;
    }

}