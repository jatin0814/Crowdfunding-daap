import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

class campaignIndex extends Component {
  static async getInitialProps() {
    const campaign = await factory.methods.getDeployedCampaigns().call();
    return { campaign };
  }

  renderCapmaign() {
    let items = this.props.campaign.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Capmaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                icon="add circle"
                content="Create Campaign"
                primary
              />
            </a>
          </Link>
          <div>{this.renderCapmaign()}</div>
        </div>
      </Layout>
    );
  }
}
export default campaignIndex;
