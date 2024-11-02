import { computed, Injectable, signal } from '@angular/core';
interface State {
  data: Array<{ id: string; title: string }>;
  loaded: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  state = signal(initialState);

  data = computed(() => this.state().data);
  loading = computed(() => this.state().loading);
  loaded = computed(() => this.state().loaded);
  error = computed(() => this.state().error);

  loadTodos() {
    this.state.set({ data: [], loading: true, loaded: false, error: null });

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .catch((err) => {
        this.state.set({
          data: [],
          loading: false,
          loaded: true,
          error: err.message,
        });
      })
      .then((data) => {
        this.state.set({
          data,
          loading: false,
          loaded: true,
          error: null,
        });
      });
  }

}
