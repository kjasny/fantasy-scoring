
let qbCalculatedScore = (player) => {
  let { passing, rushing } = player.stats

  let finalScore = passing.yards / 25 +
  passing.touchdowns * 6 +
  passing.interceptions * -3 +
  rushing.yards / 10 +
  rushing.touchdowns * 6 +
  rushing.fumbles * -3

  return finalScore
}

let rbAndwrCalculatedScore = (player) => {
  let {
    rushing,
    receiving,
    return: { kickreturn, puntreturn }
  } =
    player.stats

  let finalScore = rushing.yards / 10 +
  rushing.touchdowns * 6 +
  rushing.fumbles * -3 +
  receiving.receptions +
  receiving.yards / 10 +
  receiving.touchdowns * 6 +
  receiving.fumbles * -3 +
    kickreturn.yards / 15 +
    kickreturn.touchdowns * 6 +
    kickreturn.fumbles * -3 +
    puntreturn.yards / 15 +
    puntreturn.touchdowns * 6 +
    puntreturn.fumbles * -3

  return finalScore
}

let teCalculatedScore = (player) => {
  let { receiving } = player.stats

  let finalScore = receiving.receptions +
  receiving.yards / 10 +
  receiving.touchdowns * 6 +
  receiving.fumbles * -3

  return finalScore
}


let calculateScore = (player) => {
  if (player.position === 'QB') {
    return qbCalculatedScore(player)
  } else if (player.position === 'RB') {
    return rbAndwrCalculatedScore(player)
  } else if (player.position === 'WR') {
    return rbAndwrCalculatedScore(player)
  } else if (player.position === 'TE') {
    return teCalculatedScore(player)
  } else {
    return 0
  }
}


module.exports = calculateScore
