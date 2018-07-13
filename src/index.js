import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import registerServiceWorker from './registerServiceWorker';
import Header from "./header";
import GroupSelector from "./groupSelector";
import StudentsArray from "./studentsArray";
import Topics from './topics';
import ScreenshotsArea from './screenshotsArea';


var state = {
    groups: [
        {
            id: '1',
            name: 'KMB 1',
            students: [
                {
                    id: '1',
                    name: 'Евгения Король',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]

                },
                {
                    id: '2',
                    name: 'Дмитрий Кузюбердин',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '3',
                    name: 'Александра Зверко',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '4',
                    name: 'Кирилл Ашуркевич',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '5',
                    name: 'Денис Нестерук',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '6',
                    studentName: 'Максим Даникович',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '7',
                    studentName: 'Артем Пиврик',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '8',
                    name: 'Артем Феденков',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '9',
                    name: 'Дмитрий Сугако',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '10',
                    name: 'Александра Зверко',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                }
            ]
        },
        {
            id: '2',
            name: 'JS 3',
            students: [
                {
                    id: '1',
                    name: 'Иван Иванов',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'Петр Сидоров',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '3',
                    name: 'Николай Никонов',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '4',
                    name: 'Михаил Михич',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '5',
                    name: 'Петр Петрович',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '6',
                    name: 'Анна Акимова',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '7',
                    name: 'Катерина Котова',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '8',
                    name: 'Артем Артемьев',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                }
            ]
        },
        {
            id: '3',
            name: 'C++ 3',
            students: [
                {
                    id: '1',
                    name: 'Евгений Богдан',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'Дмитрий Савицкий',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '3',
                    name: 'Александра Кош',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '4',
                    name: 'Кирилл Долгий',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '5',
                    name: 'Денис Мельник',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '6',
                    name: 'Максим Кук',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '7',
                    name: 'Артем Ким',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '8',
                    name: 'Артем Федоров',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                },
                {
                    id: '9',
                    name: 'Дмитрий Принт',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            topicId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            topicId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                }
            ]
        }
    ],

    topics: [
        {
            id: '1',
            name: 'html',
            tasks: [
                {
                    id: '1',
                    name: 'Введение'
                },
                {
                    id: '2',
                    name: 'Страничка ВК'
                }
            ]
        },
        {
            id: '2',
            name: 'CSS',
            tasks: []
        },
        {
            id: '3',
            name: 'Slider',
            tasks: [
                {
                    id: '1',
                    name: 'Slider V1'
                },
                {
                    id: '2',
                    name: 'Slider V2 Конструктор'
                }
            ]
        },
        {
            id: '4',
            name: 'Calculator',
            tasks: [
                {
                    id: '1',
                    name: 'Calc V1'
                },
                {
                    id: '2',
                    name: 'Calc V2'
                },
                {
                    id: '3',
                    name: 'Calc V3'
                }
            ]
        }
    ],

};

ReactDOM.render(
    <div className="wrapper">
        <Header/>
        <div className="group-info-block">
            <GroupSelector groups={state.groups.map(g => {
                return {
                    name: g.name
                }
            })}
            />
            <StudentsArray students={state.groups[0].students.map(s => {
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
                <ScreenshotsArea/>
                <ScreenshotsArea/>
                <ScreenshotsArea/>
                <ScreenshotsArea/>
                <ScreenshotsArea/>
                <ScreenshotsArea/>
                <ScreenshotsArea/>
                <ScreenshotsArea/>
                <ScreenshotsArea/>
            </div>
        </div>

    </div>
    , document.getElementById('root'));
registerServiceWorker();





