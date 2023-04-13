const apiPush = async (user, score) => {
  const req = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dr3vTJJqiTPmvfWu8vyF/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  return req.json();
};

const apiGet = async () => {
  const req = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dr3vTJJqiTPmvfWu8vyF/scores/');
  const response = await req.json();
  return response.result;
};
export {
  apiPush,
  apiGet,
};