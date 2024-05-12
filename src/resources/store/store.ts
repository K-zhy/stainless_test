// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'hello-s/core';
import { APIResource } from 'hello-s/resource';
import { isRequestOptions } from 'hello-s/core';
import * as StoreAPI from 'hello-s/resources/store/store';
import * as Shared from 'hello-s/resources/shared';
import * as OrderAPI from 'hello-s/resources/store/order';

export class Store extends APIResource {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);

  /**
   * Place a new order in the store
   */
  createOrder(body?: StoreCreateOrderParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Order>;
  createOrder(options?: Core.RequestOptions): Core.APIPromise<Shared.Order>;
  createOrder(
    body: StoreCreateOrderParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Order> {
    if (isRequestOptions(body)) {
      return this.createOrder({}, body);
    }
    return this._client.post('/store/order', { body, ...options });
  }

  /**
   * Returns a map of status codes to quantities
   */
  inventory(options?: Core.RequestOptions): Core.APIPromise<StoreInventoryResponse> {
    return this._client.get('/store/inventory', options);
  }
}

export type StoreInventoryResponse = Record<string, number>;

export interface StoreCreateOrderParams {
  id?: number;

  complete?: boolean;

  petId?: number;

  quantity?: number;

  shipDate?: string;

  /**
   * Order Status
   */
  status?: 'placed' | 'approved' | 'delivered';
}

export namespace Store {
  export import StoreInventoryResponse = StoreAPI.StoreInventoryResponse;
  export import StoreCreateOrderParams = StoreAPI.StoreCreateOrderParams;
  export import Order = OrderAPI.Order;
}