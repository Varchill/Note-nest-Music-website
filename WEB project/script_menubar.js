const menuDiv = document.getElementsByClassName('menuDiv')[0];
class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu-item">
                <a href={this.props.src}>{this.props.name}</a>
            </div>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (

            <div className="menu">
                <MenuItem name="Home" src="#" />
                <MenuItem name="Search" src="#" />
                <MenuItem name="Playlists" src="#" />
                <MenuItem name="Genres" src="#" />
                <MenuItem name="Artists" src="#" />
                <MenuItem name="Albums" src="#" />
                <MenuItem name="Store" src="#" />
                <MenuItem name="About" src="#" />
            </div>
        );
    }
}

ReactDOM.render(<Menu />, menuDiv);