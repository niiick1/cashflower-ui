class TransactionService {
  add(transaction) {
    return fetch('/api/transaction', {
      body: JSON.stringify(transaction),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then(res => res.json())
  }
}

const transactionService = new TransactionService();

export default transactionService;