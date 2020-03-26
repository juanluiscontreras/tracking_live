export const TITLE_CHANGE = '@@TITLE/CHANGE_TITLE';

export type HelloState = {
  title: string
}

type ChangeTitleAction = {
  type: typeof TITLE_CHANGE
  payload: string
}

export type HelloActions = ChangeTitleAction
