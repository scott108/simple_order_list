import mockData from './mock_data.json'

function mockGet(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 300)
  })
}

export {
  mockGet
}