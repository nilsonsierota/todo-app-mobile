export enum HomeScreenActionsEnum {
  ToggleModal = 'TOGGLE_MODAL',
  CreateTask = 'CREATE_TASK',
}

export type ITask = {
  label: string;
  status?: 'READY' | 'IN_PROGRESS' | 'DONE';
  isSelected?: boolean;
};

export type IHomeScreen = {
  isModalVisible: boolean;
  tasks: ITask[];
};

export type IToggleModalPayload = Pick<IHomeScreen, 'isModalVisible'>;

export type ICreateTaskPayload = {
  task: ITask;
};

export type IToggleModalAction = {
  type: HomeScreenActionsEnum.ToggleModal;
  payload: IToggleModalPayload;
};

export type ICreateTaskAction = {
  type: HomeScreenActionsEnum.CreateTask;
  payload: ICreateTaskPayload;
};

export type IHomeScreenActions = IToggleModalAction | ICreateTaskAction;
