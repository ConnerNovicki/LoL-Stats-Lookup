import { State as InputFormState } from './input-form.state';
import { State as FetchedDataState } from './fetched-data.state';

export interface AppState {
  fetchedData: FetchedDataState,
  inputForm: InputFormState
}
