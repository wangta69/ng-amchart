// TODO can this be made faster ?
// TODO what about regexps, etc. ?
export function copy(x: any) {
  switch (getType(x)) {
  case '[object Array]':
    return copyArray(x);

  case '[object Object]':
    return copyObject(x);

  // TODO is this necessary ?
  case '[object Date]':
    return new Date(x.getTime());

  default:
    return x;
  }
}

export function updateObject(chart: any, oldObj: any, newObj: any) {
  let didUpdate = false;

  if (oldObj !== newObj) {
    // TODO use Object.keys ?
    for (const key in newObj) {
      if (hasOwnKey(newObj, key)) {
        // TODO make this faster ?
        if (hasOwnKey(oldObj, key)) {
          // TODO should this count as an update ?
          if (key === 'listeners') {
            // TODO make this faster ?
            removeChartListeners(chart, oldObj[key], newObj[key]);
          }

          if (update(chart, key, oldObj[key], newObj[key])) {
            didUpdate = true;
          }

        } else {
          // TODO make this faster ?
          chart[key] = copy(newObj[key]);
          didUpdate = true;
        }
      }
    }

    // TODO use Object.keys ?
    for (const key in oldObj) {
      if (hasOwnKey(oldObj, key) && !hasOwnKey(newObj, key)) {
        if (key === 'listeners') {
          removeChartListeners(chart, oldObj[key], []);
        }

        delete chart[key];
        didUpdate = true;
      }
    }
  }

  return didUpdate;
}


function getType(x: any) {
  // TODO make this faster ?
  return {}.toString.call(x);
}

function copyArray(x: any) {
  const length = x.length;

  const output = new Array(length);

  for (let i = 0; i < length; ++i) {
    output[i] = copy(x[i]);
  }

  return output;
}


function copyObject(x: any) {
  const output = {};

  // TODO use Object.keys ?
  for (const key in x) {
    if (hasOwnKey(x, key)) {
      output[key] = copy(x[key]);
    }
  }

  return output;
}


function hasOwnKey(obj: any, key: any) {
  return {}.hasOwnProperty.call(obj, key);
}

function isNaN(x: any) {
  return x !== x;
}

function isNumberEqual(x: any, y: any) {
  return x === y || (isNaN(x) && isNaN(y));
}


function removeChartListeners(chart: any, x: any, y: any) {
  if (x !== y) {
    // TODO is this necessary ?
    if (x == null) {
      x = [];
    }

    // TODO is this necessary ?
    if (y == null) {
      y = [];
    }

    const xLength = x.length;
    const yLength = y.length;

    for (let i = 0; i < xLength; ++i) {
      const xValue = x[i];

      let has = false;

      // TODO make this faster ?
      for (let j = 0; j < yLength; ++j) {
        const yValue = y[j];

        // TODO is this correct ?
        if (xValue.event  === yValue.event &&
            xValue.method === yValue.method) {
          has = true;
          break;
        }
      }

      if (!has) {
        // TODO is this correct ?
        chart.removeListener(chart, xValue.event, xValue.method);
      }
    }
  }
}

function update(obj: any, key: any, x: any, y: any) {
  let didUpdate = false;

  if (x !== y) {
    const xType = getType(x);
    const yType = getType(y);

    if (xType === yType) {
      switch (xType) {
      case '[object Array]':
        if (updateArray(obj[key], x, y)) {
          didUpdate = true;
        }
        break;

      case '[object Object]':
        if (updateObject(obj[key], x, y)) {
          didUpdate = true;
        }
        break;

      case '[object Date]':
        if (x.getTime() !== y.getTime()) {
          // TODO make this faster ?
          obj[key] = copy(y);
          didUpdate = true;
        }
        break;

      case '[object Number]':
        if (!isNumberEqual(x, y)) {
          // TODO is the copy necessary ?
          obj[key] = copy(y);
          didUpdate = true;
        }
        break;

      default:
        if (x !== y) {
          // TODO is the copy necessary ?
          obj[key] = copy(y);
          didUpdate = true;
        }
        break;
      }

    // TODO is this correct ?
    } else {
      // TODO make this faster ?
      obj[key] = copy(y);
      didUpdate = true;
    }
  }
  return didUpdate;
}

function updateArray(a: any, x: any, y: any) {
  let didUpdate = false;

  if (x !== y) {
    const xLength = x.length;
    const yLength = y.length;

    if (xLength !== yLength) {
      a.length = yLength;
      didUpdate = true;
    }

    for (let i = 0; i < yLength; ++i) {
      if (i < xLength) {
        if (update(a, i, x[i], y[i])) {
          didUpdate = true;
        }

      } else {
        // TODO make this faster ?
        a[i] = copy(y[i]);
        // TODO is this necessary ?
        didUpdate = true;
      }
    }
  }

  return didUpdate;
}
