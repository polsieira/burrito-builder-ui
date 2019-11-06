export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
    .then(response => response.json())
}

export const addNewOrder = async newOrder => {
  const url = 'http://localhost:3001/api/v1/orders';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrder)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Sorry. Unable to add your awesome burrito.');
  }
  const data = await response.json();
  return data;
}

export const deleteOrder = async id => {
  const url = `http://localhost:3001/api/v1/orders/${id}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('There was a problem removing your awesome burrito. Are you sure you want to delete it? Because this s#$% isn\'t working. Might as well order it.')
  }
  const data = await response.json();
  return data;
}