const contentDiv = document.getElementsByClassName('contentDiv');

const Albums = [
    {
        title: "Album",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Album",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Album",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Album",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Album",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
]

const recommendations = [
    {
        title: "Recommendation",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Recommendation",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Recommendation",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Recommendation",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Recommendation",
        src: "src",
        img: "placeholder.png",
        description: "description"

    },
]

const playlists = [
    {
        title: "Playlist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Playlist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Playlist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Playlist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Playlist",
        src: "src",
        img: "placeholder.png",
        description: "description"

    },
]

const artists = [
    {
        title: "Artist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Artist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Artist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Artist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
    {
        title: "Artist",
        src: "src",
        img: "placeholder.png",
        description: "description"
    },
]

function getContentByTitle(title) {
    switch (title) {
        case "Recommendations":
            return recommendations;
        case "Albums":
            return Albums;
        case "Playlists":
            return playlists;
        case "Artists":
            return artists;
        default:
            return [];
    }
}

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            src: props.src,
            img: props.img,
            description: props.description
        };

    }


    render() {
        return (
            <div className="tile">
                <div id="1">
                    <h5>{this.state.title}</h5>
                    <img src={this.state.img} />
                </div>
                <div id="2">
                    <p>{this.state.description}</p>
                </div>
            </div >
        );
    }
}

class TileRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: props.title,
        };
    }
    render() {
        const filteredContent = getContentByTitle(this.state.Title);

        return (
            <div className="content-block">
                <div className="Title">
                    <h4>{this.state.Title}</h4>
                </div>
                <div className="tileRow">
                    {filteredContent.map((item, index) => (
                        <Tile
                            key={index}
                            title={item.title}
                            src={item.src}
                            img={item.img}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="contentDiv">
                <TileRow title="Recommendations" />
                <TileRow title="Albums" />
                <TileRow title="Playlists" />
                <TileRow title="Artists" />
            </div>
        );
    }
}

ReactDOM.render(<Content />, contentDiv.item(0));