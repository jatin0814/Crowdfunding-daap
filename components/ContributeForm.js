import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class ContributeForm extends Component {
  state = {
    value: "",
    loading: false,
    errorMessage: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      this.setState({ loading: true, errorMessage: "" });
      console.log(this.state.value);
      await campaign.methods.contribute().send({
        value: web3.utils.toWei(this.state.value, "ether"),
        from: accounts[0],
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false, value: "" });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
        <Message error header="Oops!" content={this.state.errorMessage} />
      </Form>
    );
  }
}

export default ContributeForm;
