export const CometSSRClientRenderError = 'CometSSRClientRenderError'

export const CometSSRClientRender = (a: any) => {
  throw new ClientRenderSentinel(a)
}

export class ClientRenderSentinel {
  message: string
  name: string
  constructor(a: any) {
    this.message = CometSSRClientRenderError + ': ' + a
    this.name = 'CometSSRClientRenderError'
  }
}
