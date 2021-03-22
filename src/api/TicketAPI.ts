import { ITicketItem } from '../store/ticket/types'
import RestAPI, { TRestAPIProtocol, TRestAPIResponse } from './RestAPI'

export interface ITicketAPIResponseData {
  tickets: ITicketItem[]
  stop: boolean
}
export interface ITicketAPISearchIdResponseData {
  searchId: string
}

class TicketAPI extends RestAPI {
  public constructor(
    protocol: TRestAPIProtocol,
    hostname: string,
    port: number | null,
  ) {
    super(protocol, hostname, port)

    this.fetchItems = this.fetchItems.bind(this)
    this.takeSearchId = this.takeSearchId.bind(this)
  }

  public async fetchItems(
    searchId: string,
  ): Promise<TRestAPIResponse<ITicketAPIResponseData>> {
    return await super.index<ITicketAPIResponseData>('tickets', { searchId })
  }

  public async takeSearchId(): Promise<
    TRestAPIResponse<ITicketAPISearchIdResponseData>
  > {
    return await super.index('search', {})
  }
}

const ticketAPI = new TicketAPI('https', 'front-test.beta.aviasales.ru', null)
export default ticketAPI
