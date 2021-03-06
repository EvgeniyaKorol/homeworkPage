import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./header";
import GroupSelector from "./groupSelector";
import StudentsArray from "./studentsArray";
import Topics from './topics';
import ScreenshotsArea from './screenshotsArea';
import StudentScrenshotsPopup from './studentScreenshotsPopup';
import {store} from './redux/store';
import TaskHeader from "./taskHeader";
import TaskInformation from "./taskInformation";
import CommentsBlock from "./commentsBlock"
import TestPage from "./components/testPage/testPageComponent"


let state = store.getState();

store.subscribe(() => {
    state = store.getState();
    render();
});



function render() {
    //debugger
    let selectedCourse = state.uiState.get('selectedCourseId');
    let selectedGroup = state.uiState.get('selectedGroupId');
    let group =  state.groups.filter(g => g.get("id") == selectedGroup).get(0);
    let students = group.get('students');

    let coursesForSelector = state.courses.map(g => {
        return {
            name: g.get("name"),
            id: g.get("id")
        }
    });

    let groupsForSelector = state.groups.filter(group => group.get('courseId') === selectedCourse).map(g => {
        return {
            name: g.get("name"),
            id: g.get("id")
        }
    });


    ReactDOM.render(
        <div className="wrapper">
            <Header/>
            {/*<TestPage/>*/}
            
             <div className="group-info-block">
                <GroupSelector courses={coursesForSelector} groups={groupsForSelector} store={store} />
                <StudentsArray students={students.map(s => {
                    return {
                        name: s.name,
                        avatar: s.avatar
                    }
                })} store={store}
                />
            </div>

            <div className="tasks-screenshots-block">
                <div className="topics-block">
                    <Topics topics={state.topics.map(v => {
                        const obj = {
                            name: v.get('name'),
                            tasks: v.get('tasks'),
                            expanded: v.get('expanded'),
                            id: v.get('id')
                        };
                        return obj;
                    })}

                    //     .map(t => {
                    //     return {
                    //         name: t.name,
                    //         tasks: t.tasks,
                    //         expanded: t.expanded,
                    //         id: t.id
                    //     }
                    // })

                     store={store}/>
            </div>

                <div className="screenshots-block">

                    {
                        students.map(s => {
                            return (
                                <ScreenshotsArea topics={!!s.topics ? s.topics : []} store={store}/>
                            )
                        })
                        }

                </div>
            </div>

            {/* <StudentScrenshotsPopup/> */}
        </div>, document.getElementById('root'));
}

render();
registerServiceWorker();





