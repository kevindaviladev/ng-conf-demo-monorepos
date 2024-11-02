import { computed, inject } from "@angular/core";
import { TodosService } from "@codeabien/data-access";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
interface CodeaBienStore {
    lastCourse: string;
    lastVideo: string;
    lastMinute: number;
    lastBootcamp: string;
}

const initialState: CodeaBienStore = {
    lastCourse: 'NX',
    lastVideo: 'Enterprise Monorepos patterns',
    lastMinute: 5.2,
    lastBootcamp: 'Angular Legacy & Mordern'
}
export const CodeaBienStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed( state => ({
        banner: computed(() => `Last video watched: ${state.lastVideo()} at minute ${state.lastMinute()}`),
        nextBootcamp: computed(() => state.lastBootcamp() === 'Angular Legacy & Mordern' ?  'React & Vue' : 'Angular Legacy & Mordern')
    })),
    withMethods( (store, todosService = inject(TodosService)) => ({
        loadCourses: rxMethod<void>(
            pipe(
                switchMap(() => todosService.getMyTodosFromCourses().pipe(
                    tap( () => {
                        console.log("Computing....")
                        patchState(store, { lastCourse: 'Angular' })}),
                )),
            )
        )
    }))
)