import {
  HomeScreenActionsEnum,
  IToggleModalPayload,
  ICreateTaskPayload,
  IToggleModalAction,
  ICreateTaskAction,
} from './types';

function toggleModal(payload: IToggleModalPayload): IToggleModalAction {
  return {
    type: HomeScreenActionsEnum.ToggleModal,
    payload,
  };
}

function createTask(payload: ICreateTaskPayload): ICreateTaskAction {
  return {
    type: HomeScreenActionsEnum.CreateTask,
    payload,
  };
}

export const HomeScreenAction = {
  toggleModal,
  createTask,
};
