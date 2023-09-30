// eslint-disable-next-line no-extend-native
Function.prototype.myApply = function (newContext, ...args) {
  if (!newContext) throw new Error('no context');
  if (typeof newContext !== 'object') throw new Error('context must be an object');
  // eslint-disable-next-line no-param-reassign
  args = args || [];
  const symbol = Symbol('uniq-func');
  // eslint-disable-next-line no-param-reassign
  newContext[symbol] = this;
  Object.defineProperty(newContext, symbol, {
    enumerable: false,
    writable: false,
    configurable: true,
  });
  const result = newContext[symbol](...args);
  // eslint-disable-next-line no-param-reassign
  delete newContext[symbol];
  return result;
};

// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function (newContext, args) {
  if (!newContext) throw new Error('no context');
  if (typeof newContext !== 'object') throw new Error('context must be an object');
  // eslint-disable-next-line no-param-reassign
  args = args || [];
  const symbol = Symbol('uniq-func');
  // eslint-disable-next-line no-param-reassign
  newContext[symbol] = this;
  Object.defineProperty(newContext, symbol, {
    enumerable: false,
    writable: false,
    configurable: true,
  });
  const result = newContext[symbol](...args);
  // eslint-disable-next-line no-param-reassign
  delete newContext[symbol];
  return result;
};

// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (newContext, ...args) {
  const context = this;
  return function (...restArgs) {
    return context.myApply(newContext, ...args.concat(restArgs));
  };
};
