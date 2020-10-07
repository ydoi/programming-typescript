interface BuildableRequest {
  data?: object
  method: 'get' | 'post'
  url: string
}

class RequestBuilder2 {
  data?: object
  method?: 'get' | 'post'
  url?: string

  setData(data: object): this {
    return Object.assign(this, {data})
  }

  setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
    return Object.assign(this, {method})
  }

  setURL(url: string): this & Pick<BuildableRequest, 'url'> {
    return Object.assign(this, {url})
  }

  build(this: BuildableRequest) {
    return this
  }
}

new RequestBuilder2()
  // .setData({})
  .setMethod('post')
  .setURL('')
  .setData({})
  .build()