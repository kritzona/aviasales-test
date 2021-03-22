import { ITicketItem } from '../store/ticket/types'
import RestAPI, { TRestAPIProtocol, TRestAPIResponse } from './RestAPI'

interface ITicketResponseData {
  tickets: ITicketItem[]
  stop: boolean
}
interface ITicketSearchIdResponseData {
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
  ): Promise<TRestAPIResponse<ITicketResponseData>> {
    return await super.index<ITicketResponseData>('tickets', { searchId })
  }

  public async takeSearchId(): Promise<
    TRestAPIResponse<ITicketSearchIdResponseData>
  > {
    return await super.index('search', {})
  }
}

const ticketAPI = new TicketAPI('https', 'front-test.beta.aviasales.ru', null)
export default ticketAPI
