
import findIndex from 'lodash/findIndex';
var users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': true }
];




export function businessInfoMiddleware(req,res,next) {
  const index = findIndex(users, function(o) { return o.user == 'fred'; });

  res.send({business:true, index });
}

export function personalInfoMiddleware(req,res,next) {
  res.send({personal:true});
}