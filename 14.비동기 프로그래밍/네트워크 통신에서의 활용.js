const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';

fetch(SERVER_URL + 'race-result')
.then(result => result.json())
.then(arry => {
  return arry.sort((a,b) => {
    return a.record - b.record
  });
})
.then(sortArray => sortArray[0].runner_idx)
.then(winnerIdx => {
  return fetch(`${SERVER_URL}/runners/${winnerIdx}`)
})
.then(result => result.json())
.then(({school_idx}) => school_idx)
.then(school_idx => {
  return fetch(`${SERVER_URL}/schools/${school_idx}`)
})
.then(result => result.json())
.then(console.log)
.catch(console.error);