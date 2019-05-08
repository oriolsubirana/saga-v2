import { BaseAction, actionIds } from '../common';

export const numberRequestStartAction = (): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_START,
  payload: null,
});

export const numberRequestCompletedAction = (numberGenerated): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated,
});

export const numberRequestUserConfirmationAction = (goahead: boolean): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_USER_CONFIRMATION,
  payload: goahead,
});