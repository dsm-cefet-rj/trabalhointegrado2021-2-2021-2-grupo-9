import NotFound from "../img/not_found.svg";

const getCurrentGreatestIndex = (state) => {
  const planoIds = state.map(book => +plano.id)
  const sortedPlanoIdsDec = PlanoIds.sort((a, b) => b - a)
  const firstIndex = sortedPlanoIdsDec[0]
  return firstIndex
}

const addPlanoReducer = (state, payload) => {
  const newPlano = { id: getCurrentGreatestIndex(state) + 1, src: NotFound, ...payload}
  const newPlanoList = [...state, newPlano ]
  return newPlanoList
}

const updatePlanoReducer = (state, payload) => {
  const updatedPlano = payload
  const remainingPlanos = [...state].filter(plano => plano.id !== +payload.id)
  const updatedPlanoList = [...remainingPlanos, updatedPlanos ]
  return updatedPlanoList
}

const deletePlanoReducer = (state, payload) => {
  const splicedPlanos = [...state].filter(plano => plano.id !== payload.id)
  return splicedPlanos
}

export { addPlanoReducer, updatePlanoReducer, deletePlanoReducer }