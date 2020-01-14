"use strict";
module.exports = Franz => class Instagram extends Franz {
  // Mobile useragent required.
  overrideUserAgent() {
    return 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36';
  }
};