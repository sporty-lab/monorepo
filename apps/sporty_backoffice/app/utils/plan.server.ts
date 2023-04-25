import { responseHandler } from './helpers';
import { getJwtToken } from './session.server';

export async function getPlans(request: Request) {
  const token = (await getJwtToken(request)) as string;
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  };

  return fetch('http://localhost:8080/api/plan/list', requestOptions)
    .then(responseHandler)
    .then((plans) => {
      return plans;
    });
}

export async function createPlan(request: Request, body: any) {
  const token = (await getJwtToken(request)) as string;
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      'x-access-token': token,
    },
  };

  return fetch('http://localhost:8080/api/plan/create', requestOptions)
    .then(responseHandler)
    .then((res) => {
      return res;
    });
}
