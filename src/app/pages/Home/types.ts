import { RouteComponentProps } from 'react-router';

export type MapStateToPropsTypes = {
  title: string
}

export type MapDispatchToPropsTypes = {
  changeTitleAction: (title: string) => void
}

export type HelloProps = MapStateToPropsTypes & MapDispatchToPropsTypes & RouteComponentProps
