import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path : 'register' , component : RegisterComponent},
  {path : 'result' , component : ResultComponent},
  {path : 'quiz' , component : QuizComponent , canActivate:[AuthGuard]},
  {path : '' , redirectTo : '/register', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
