import {
  HomeScreenActionsEnum,
  IHomeScreen,
  IHomeScreenActions,
} from './types';

export function HomeScreeReducer(
  state: IHomeScreen,
  action: IHomeScreenActions
): IHomeScreen {
  switch (action.type) {
    case HomeScreenActionsEnum.ToggleModal:
      return { ...state, isModalVisible: action.payload.isModalVisible };

    case HomeScreenActionsEnum.CreateTask:
      return { ...state, tasks: [...state.tasks, action.payload.task] };

    default:
      return { ...state };
  }
}

export const homeScreenInitialState = {
  tasks: [],
  isModalVisible: false,
};
