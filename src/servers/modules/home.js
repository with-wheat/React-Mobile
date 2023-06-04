import Request from '../request'

export function getHomeGoodPrice() {
  return Request({
    url: '/home/goodPrice',
    method: 'get',
    params: {}
  })
}
