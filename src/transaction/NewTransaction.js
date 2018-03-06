import React, { Component } from 'react';

import {
  BrowserRouter as Router
} from 'react-router-dom';

import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import TransactionService from './TransactionService';

class NewTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: {
        description: '',
        amount: '',
        paymentType: ''
      },
      alerts:  {
        showSuccessful: false
      }
    };
  }

  setShowSuccessfulAlert(show) {
    let currentAlerts = {...this.state.alerts}

    currentAlerts.showSuccessful = show;

    this.setState({
      alerts: currentAlerts
    });
  }

  showSuccessfulAlert() {
    this.setShowSuccessfulAlert(true)
  }

  hideSuccessfulAlert() {
    this.setShowSuccessfulAlert(false)
  }

  onAdd() {
    const { description, amount, paymentType } = this.state.transaction;

    TransactionService.add({
      description, amount, paymentType
    }).then(response => {
      this.showSuccessfulAlert();
      setTimeout(() => this.hideSuccessfulAlert(), 2000);
    })
  }

  handleChange(e) {
    const fieldName = e.target.name
    let fieldValue = e.target.value

    let currentTransaction = {...this.state.transaction}
    currentTransaction[fieldName] = fieldValue

    this.setState({
      transaction: currentTransaction
    });
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Add Transaction</h2>
          <hr/>

          <Alert color="success" isOpen={this.state.alerts.showSuccessful}>Transaction "{this.state.transaction.description}" saved successfully</Alert>

          <Form>
            <FormGroup>
              <Label>Description</Label>
              <Input id="transactionDescription" name="description" type="text" value={this.state.transaction.description} onChange={e => this.handleChange(e)} />
            </FormGroup>
            <FormGroup>
              <Label>Amount</Label>
                <Input id="transactionAmount" name="amount" type="number" value={this.state.transaction.amount} onChange={e => this.handleChange(e)} />
            </FormGroup>
            <FormGroup>
              <Label>Payment Type</Label>
                <Input id="transactionPaymentType" name="paymentType" type="select" value={this.state.transaction.paymentType} onChange={e => this.handleChange(e)}>
                  <option>credit</option>
                  <option>money</option>
                </Input>
            </FormGroup>

            <FormGroup>
              <Button className="float-right" onClick={() => this.onAdd()}>Add transaction</Button>
            </FormGroup>
          </Form>
        </div>
      </Router>
    );
  } 
}

export default NewTransaction;