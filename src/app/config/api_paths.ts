const API_KEY = 'RGAPI-4fe23761-e8c8-47fb-8d81-f6d669f8f3d1';

export function api_getSummoner(summoner) {
  return `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${API_KEY}`;
}

export function api_getChampions() {
  return `https://na1.api.riotgames.com/lol/static-data/v3/champions/?api_key=${API_KEY}`;
}

export function api_getMasteryData(summonerId, championId) {
  return `https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}?api_key=${API_KEY}`
}

export function api_getMatchesForChamp(accountId, championId) {
  return `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}?champion=${championId}&api_key=${API_KEY}`;
}

export function api_getMatchData(matchId: any) {
  return `https://na1.api.riotgames.com/lol/match/v3/matches/${matchId}?api_key=${API_KEY}`;
}
