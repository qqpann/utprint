module.exports = function getAuthenticate(debug = false) {
  const auth = new Object();
  if (process.env.UTID_NAME && process.env.UTID_PASS) {
    if (debug) { console.log('INFO: Using UTID_NAME'); }
    auth.username = process.env.UTID_NAME;
    auth.password = process.env.UTID_PASS;
  } else if (process.env.ZENGAKU_USERNAME && process.env.ZENGAKU_PASSWORD) {
    if (debug) { console.log('INFO: Using ZENGAKU_USERNAME'); }
    auth.username = process.env.ZENGAKU_USERNAME;
    auth.password = process.env.ZENGAKU_PASSWORD;
  } else {
    console.log('NOTFOUND: Plsase setup env username and password.');
    auth.username = '';
    auth.password = '';
  }
  return auth;
};
