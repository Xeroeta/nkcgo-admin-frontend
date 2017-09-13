import React, { Component, Link } from 'react';
import appConfig from '../Config/params';


export default class SnapsListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snaps: props.snaps,
      snapsLoaded: props.snapsLoaded
    };
    console.log('initial Props');
    console.log(props.snaps);
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps.snaps');
    console.log(nextProps.snaps);
    this.setState({ snaps: nextProps.snaps });
    this.setState({ snapsLoaded: nextProps.snapsLoaded });
  }

  goTo(route) {
    // alert(route);
    this.props.history.replace(`/${route}`)
  }

  render() {

    return (
        <div>
            <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Snap Id</th>
                    <th>Show Image</th>
                    <th>Venue Id</th>
                    <th>Venue Title</th>
                    <th>CheckedIn At</th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.state.snaps.map((snap) => (
                    <tr key={snap.id} >
                        <td>{snap.id}</td>
                        <td>
                            <a 
                                target="_blank" 
                                href={appConfig.app.USER_UPLOAD_IMAGES_BASE_URL + snap.image_url}
                            >
                                Show
                            </a>
                        </td>
                        <td>{snap.venue}</td>
                        <td>{snap.venue_title}</td>
                        <td>{ new Date(snap.createdAt).toLocaleTimeString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"})}</td>
                    </tr>
                   ))
                }
                </tbody>
            </table>
        </div>
    );
  }
}

const styles = {
  venueTitle: {
    color: '#03c',
    fontSize: 20,
    fontWeight: 'bold',
  }
};
