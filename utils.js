const debounce = (callback, delay = 1000) => {
  let timeOutId;

  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};
