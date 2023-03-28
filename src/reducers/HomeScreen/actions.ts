import {
  IHomeScreen,
  HomeScreenActionsEnum,
  IToggleModalPayload,
  ICreateTaskPayload,
  IToggleModalAction,
  ICreateTaskAction,
  ISelectTaskIndexPayload,
  ISelectTaskIndexAction,
  ISetTaskStatusPayload,
  ISetTaskStatusAction,
  TaskStepsEnum,
} from './types';

function toggleModal(payload: IToggleModalPayload): IToggleModalAction {
  return {
    type: HomeScreenActionsEnum.ToggleModal,
    payload,
  };
}

function createTask(payload: ICreateTaskPayload): ICreateTaskAction {
  payload.task.isSelected = false;
  payload.task.status = TaskStepsEnum.Ready;
  return {
    type: HomeScreenActionsEnum.CreateTask,
    payload,
  };
}

function selectedTaskIndex(
  payload: ISelectTaskIndexPayload
): ISelectTaskIndexAction {
  return {
    type: HomeScreenActionsEnum.SelectTaskIndex,
    payload,
  };
}

function isTimerEnabled(state: IHomeScreen): boolean {
  return (
    state.selectedTaskIndex >= 0 &&
    state.tasks[state.selectedTaskIndex].status === TaskStepsEnum.Finished
  );
}

function setTaskStatus(payload: ISetTaskStatusPayload): ISetTaskStatusAction {
  return {
    type: HomeScreenActionsEnum.SetTaskStatus,
    payload,
  };
}

function taskStart() {
  return setTaskStatus({ taskStatus: TaskStepsEnum.InProgress });
}

function taskFinished() {
  return setTaskStatus({ taskStatus: TaskStepsEnum.Finished });
}

function taskStop() {
  return setTaskStatus({ taskStatus: TaskStepsEnum.Ready });
}

export const HomeScreenAction = {
  toggleModal,
  createTask,
  selectedTaskIndex,
  setTaskStatus,
  taskStart,
  taskFinished,
  taskStop,
  isTimerEnabled,
};
