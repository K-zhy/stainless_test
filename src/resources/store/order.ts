// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'hello-s/core';
import { APIResource } from 'hello-s/resource';
import * as Shared from 'hello-s/resources/shared';

export class Order extends APIResource {
  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will
   * generate exceptions.
   */
  retrieve(orderId: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Order> {
    return this._client.get(`/store/order/${orderId}`, options);
  }

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or
   * nonintegers will generate API errors
   */
  deleteOrder(orderId: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/store/order/${orderId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
