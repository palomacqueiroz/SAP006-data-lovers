
export const filterData = (data, type, condition) => data.filter((element) => {
  return element[type] === condition;
});

export const orderAz = (data, type) => data.sort((a, b) => a[type] < b[type] ? -1 : 1)

export const sortMovies = (data, condition) =>
  data.sort((a, b) => {
    if (condition === "rt_score") {
      return b.rt_score - a.rt_score
    }

    if (condition === "release_date") {
      return b.release_date - a.release_date
    }
  })

export const computeStatsGender = (data, dataValue) => {
  return ((dataValue.length * 100) / data.length).toFixed(2)
}

export const avarageScore = (data) =>
  data.reduce((accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue) / data.length
  }, 0);

