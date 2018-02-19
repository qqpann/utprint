const assert = require('assert');
const getAuthenticate = require('../authenticate');

it('Login test: No auth', () => {
  process.env.UTID_13 = '';
  process.env.UTID_PASS = '';
  process.env.ZENGAKU_USERNAME = '';
  process.env.ZENGAKU_PASSWORD = '';

  const auth = getAuthenticate(debug=false);
  console.log(auth);

  assert(auth.username === '' && auth.password === '');
});

it('Login test: Manaba only', () => {
  process.env.UTID_13 = '';
  process.env.UTID_PASS = 'not enough';
  process.env.ZENGAKU_USERNAME = 'zn-n';
  process.env.ZENGAKU_PASSWORD = 'zn-p';

  const auth = getAuthenticate(debug=false);
  console.log(auth);

  assert(auth.username === 'zn-n' && auth.password === 'zn-p');
});

it('Login test: UTID surpasses', () => {
  process.env.UTID_13 = 'ut-n';
  process.env.UTID_PASS = 'ut-p';
  process.env.ZENGAKU_USERNAME = 'aaa';
  process.env.ZENGAKU_PASSWORD = 'bbb';

  const auth = getAuthenticate(debug=false);
  console.log(auth);

  assert(auth.username === 'ut-n' && auth.password === 'ut-p');
});
