import axios from 'axios'

export enum ERestAPIStatuses {
  SUCCESS = 'restAPI/SUCCESS',
  ERROR = 'restAPI/ERROR',
}
export type TRestAPIProtocol = 'http' | 'https'

export interface IRestAPISuccessResponse<T> {
  status: ERestAPIStatuses.SUCCESS
  data: T
}
export interface IRestAPIErrorResponse {
  status: ERestAPIStatuses.ERROR
  message: string
}
export type TRestAPIResponse<T> =
  | IRestAPISuccessResponse<T>
  | IRestAPIErrorResponse

export interface IRestAPIQuery {
  [key: string]: string | number
}

abstract class RestAPI {
  private readonly url: string

  protected constructor(
    protocol: TRestAPIProtocol,
    hostname: string,
    port: number | null,
  ) {
    this.url = `${protocol}://${hostname}${port ? `:${port}` : ''}`
  }

  protected async index<T>(
    endPoint: string,
    queries: IRestAPIQuery,
  ): Promise<TRestAPIResponse<T>> {
    return await this.getRequest(endPoint, queries)
  }

  protected async getRequest<T>(
    endPoint: string,
    queries: IRestAPIQuery,
  ): Promise<TRestAPIResponse<T>> {
    const url = `${this.url}/${endPoint}`

    return await axios
      .get(url, {
        params: { ...queries },
      })
      .then(({ data }) => {
        const responseData: T = data
        const response: IRestAPISuccessResponse<T> = {
          status: ERestAPIStatuses.SUCCESS,
          data: responseData,
        }

        return response
      })
      .catch(({ response: data }) => {
        const responseData: string = data
        const response: IRestAPIErrorResponse = {
          status: ERestAPIStatuses.ERROR,
          message: responseData,
        }

        return response
      })
  }
}

export default RestAPI
