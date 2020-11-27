import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Leaderboards } from '../../api/leaderboard/Leaderboard';
import LeaderboardAdmin from '../components/LeaderboardAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListLeaderboardAdmin extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Leaderboard</Header>
          <Table basic='very' className="ui table">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Ranking</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.leaderboards.map((leaderboard) => <LeaderboardAdmin key={leaderboard._id} leaderboard={leaderboard} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListLeaderboardAdmin.propTypes = {
  leaderboards: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Leaderboards.adminPublicationName);
  return {
    leaderboards: Leaderboards.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListLeaderboardAdmin);
