var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
    },
    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Film o hobbitach',
        image: 'https://ecsmedia.pl/c/wladca-pierscieni-dwie-wieze-wydanie-dwuplytowe-w-iext39346721.jpg'
    },
    {
        id: 4,
        title: 'Gra o tron',
        desc: 'Serial kultowy :D',
        image: 'https://static.antyweb.pl/uploads/2017/08/gra-o-tron-1420x670.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {description: this.props.movie.desc}),
            React.createElement(MovieImage, {image: this.props.movie.image}),
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.createElement('p', {}, this.props.description);
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.createElement('img', {src: this.props.image});
    }
})

var moviesElements = movies.map(function(element, index) {
    return React.createElement(Movie, {movie: element, key: index})
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements),
    );

ReactDOM.render(element, document.getElementById('app'));