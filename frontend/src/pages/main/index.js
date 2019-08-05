import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'

import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: [], //valor inicial 1 na loadproducts

    }
    //Após renderizar o componente, esse metodo-padrao abaixo vem em seguida,
    //parecido com um async/await
    //COMPONENTDITMOUNT é UMA METODO-PADRAO DO REACT, E NãO PERSONALIZADO

    componentDidMount() {
        this.loadProducts();

    }
    loadProducts = async (page = 1) => {

        const response = await api.get(`/products?page=${page}`);

        //ATRIBUINDO DOCS A VARIAVEL PRODUCTINFO
        //DOCS TA ARMAZENADO TODOS OS POSTS 
        const { docs, ...productInfo } = response.data;
        this.setState({ products: docs, productInfo, page })

    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }


        deleteItem = async (id) => {
            await api.delete(`products/${id}`)
            this.loadProducts();

        }

        handleChange = e => {
            this.setState({ [e.target.name]: e.target.value })
        }

    render() {
        const { page, productInfo, products } = this.state;
        return (

            <div className="product-list">{products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a href onClick ={() => this.deleteItem(product._id)}>Excluir</a>
                   
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                    <p className="createdAt">{product.createdAt}</p>
                </article>
            ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <Link to={'/new'} className="new">Adicionar</Link>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
            );
        }
}