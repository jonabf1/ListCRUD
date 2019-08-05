import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css'

class New extends Component {

    state = {
        title: '',
        url: '',
        description: '',
    };

    handleSubmit = async e => {
        await api.post('new', {
            title: this.state.title,
            description: this.state.description,
            url: this.state.url,
        }
        )
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="product-new">
                <h1>Adicione um Novo</h1>
                <form id="new-post" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Title"
                        onChange={this.handleChange} value={this.state.title} />
                    <input type="text" name="description" placeholder="Descrição"
                        onChange={this.handleChange} value={this.state.description} />
                    <input type="text" name="url" placeholder="URL"
                        onChange={this.handleChange} value={this.state.url} />
                    <button type="submit" className="new">Enviar
                    </button>
                    
                </form>
            </div>
        );
    }
}

export default New;