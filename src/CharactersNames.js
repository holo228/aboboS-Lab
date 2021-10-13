import React from 'react';
import axios from 'axios';
import md5 from 'js-md5';

export default class CharactersNames extends React.Component {
    state = {
        names: [],
        stories: []
    }

    componentDidMount() {
        const ts = Number(new Date());
        const hash = md5.update(ts+"56f18e783f7c9c5f1ebf10962f49ab50287cd825"+"94ece251195c71ac5a75323f4d902017");
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=94ece251195c71ac5a75323f4d902017&hash=${hash}`)
            .then(res => {
                const names = res.data.data.results;
                this.setState({ names });
            })
        axios.get(`https://gateway.marvel.com:443/v1/public/stories?ts=${ts}&apikey=94ece251195c71ac5a75323f4d902017&hash=${hash}`)
            .then(res => {
                const stories = res.data.data.results;
                this.setState({ stories });
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Имена персонажей</h1>
                    <p>{ this.state.names.map(names => <p>{names.name}</p>)}</p>
                </div>
                <div>
                    <h1>Заголовки историй</h1>
                    <p>{ this.state.stories.map(stories => <p>{stories.title}</p>)}</p>
                </div>
            </div>
        )
    }
}