import { Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { GETComponent } from './components/API/get/get.component';
import { StructuralDirComponent } from './components/dir/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/dir/attribute-dir/attribute-dir.component';
import { ComponentDirComponent } from './components/dir/component-dir/component-dir.component';
import { SwitchCaseComponent } from './components/control-flow/switch-case/switch-case.component';
import { ForComponent } from './components/control-flow/for/for.component';
import { IfElseComponent } from './components/control-flow/if-else/if-else.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormsComponent } from './components/Forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/Forms/reactive-forms/reactive-forms.component';
import { PostComponent } from './components/API/post/post.component';
import { UpdateAndDeleteComponent } from './components/API/update-and-delete/update-and-delete.component';
import { LifeCycleEventsComponent } from './components/LifeCycleEvents/life-cycle-events/life-cycle-events.component';
import { NgTemplateComponent } from './components/dir/ng-template/ng-template.component';
import { AdvanceReactiveFormComponent } from './components/Forms/advance-reactive-form/advance-reactive-form.component';
import { PracitceRFormnsComponent } from './components/Forms/pracitce-rformns/pracitce-rformns.component';
import { NgRxStateComponent } from './components/NgRx/ng-rx-state/ng-rx-state.component';
import { IntroComponent } from './components/intro/intro.component';

export const routes: Routes = [
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: 'structural-Dir',
        component: StructuralDirComponent
    },
    {
        path: 'attribute-Dir',
        component: AttributeDirComponent
    },
    {
        path: 'component-Dir',
        component: ComponentDirComponent
    },
    {
        path: 'ng-template-Dir',
        component: NgTemplateComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'databinding',
        component: DatabindingComponent 
    },
    {
        path: 'if-else',
        component: IfElseComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'Switch-case',
        component: SwitchCaseComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    }
    ,
    {
        path: 'template-forms',
        component: TemplateFormsComponent
    }
    ,
    {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
    },
    {
        path: 'practice-reactive-form',
        component: PracitceRFormnsComponent
    },
    {
        path: 'advance-reactive-form',
        component: AdvanceReactiveFormComponent
    },
    {
        path: 'get-api',
        component: GETComponent
    },
    {
        path: 'post-api',
        component: PostComponent
    },
    {
        path: 'update_and_delete_api',
        component: UpdateAndDeleteComponent
    },
    {
        path: 'life-cycle-events',
        component: LifeCycleEventsComponent
    },
    {
        path: 'ngRx-state-management',
        component: NgRxStateComponent
    }

];
