/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import {User} from '../models/user';

export interface Course {
  createdAt?: string;
  createdBy?: number;
  description: string;
  id?: number;
  instructor?: User;
  lastModifiedAt?: string;
  lastModifiedBy?: number;
  numberOfHours: number;
  startAt: string;
  title: string;
}
