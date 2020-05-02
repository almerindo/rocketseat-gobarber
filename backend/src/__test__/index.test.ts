import axios from 'axios';

it('Should return a JSON data when send post /appointments ', async () => {
  const x = await axios
    .post('http://localhost:3333/appointments', {
      provider: 'Fred',
      date: 'Flintstone',
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
  expect(x).toHaveProperty('id');
  expect(x).toHaveProperty('date');
  expect(x).toHaveProperty('provider');
});
