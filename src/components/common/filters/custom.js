const viewFormat = value => {
  return value < 10000 ? value : `${Number(Math.floor(value / 10000) + '.' + (value % 10000)).toFixed(1)}万`
}

export { viewFormat }
