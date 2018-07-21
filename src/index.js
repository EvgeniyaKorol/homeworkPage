import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./header";
import GroupSelector from "./groupSelector";
import StudentsArray from "./studentsArray";
import Topics from './topics';
import ScreenshotsArea from './screenshotsArea';
import StudentScrenshotsPopup from './screenshotsPopup';
import {store} from './redux/store';


let state = store.getState();

store.subscribe(() => {
    state = store.getState();
    render();
});

let selectedCourse = state.uiState.get('selectedCourseId');
let selectedGroup = state.uiState.get('selectedGroupId');
let group = state.groups.get(selectedGroup);
let students = group.get('students');

let coursesForSelector = state.courses.map(g => {
    return {
        name: g.get("name")
    }
});

let groupsForSelector = state.groups.filter(group => group.get('courseId') === selectedCourse).map(g => {
    return {
        name: g.get("name")
    }
});

function render() {
    ReactDOM.render(
        <div className="wrapper">
            <Header/>
            <div className="group-info-block">
                <GroupSelector courses={coursesForSelector} groups={groupsForSelector} />
                <StudentsArray students={students.map(s => {
                    return {
                        name: s.name,
                        avatar: s.avatar
                    }
                })}
                />
            </div>

            <div className="tasks-screenshots-block">
                <div className="topics-block">
                    <Topics topics={state.topics.map(t => {
                        return {
                            name: t.name,
                            tasks: t.tasks
                        }
                    })}/>


                </div>
                <div className="screenshots-block">
                    <ScreenshotsArea screenShots={students[0].screenshots.map(s => {
                        return {
                            taskId: s.taskId,
                            src: s.src
                        }
                    })}
                    />
                </div>
            </div>

            {/* <StudentScrenshotsPopup/> */}
        </div>, document.getElementById('root'));
}

render();
registerServiceWorker();





