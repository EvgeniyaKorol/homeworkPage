/**
 * Created by Eugenia on 16.07.2018.
 */
import {Map, List} from 'immutable';

const initialGroupState = List([
    Map ({
        id: '1',
        name: '4',
        courseId: '1',
        startDate: null,
        students: [
        {
            id: '1',
            name: 'Евгения Король',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]

        },
        {
            id: '2',
            name: '4 Дмитрий Кузюбердин',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '3',
            name: 'Александра Зверко',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '4',
            name: 'Кирилл Ашуркевич',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '5',
            name: 'Денис Нестерук',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '6',
            name: 'Максим Даникович',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '7',
            name: 'Артем Пиврик',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '8',
            name: 'Артем Феденков',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '9',
            name: 'Дмитрий Сугако',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '10',
            name: 'Александра Зверко',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        }
    ]}),
    Map ({
        id: '2',
        name: '1',
        courseId: '1',
        startDate: null,
        students: [
        {
            id: '1',
            name: '1  Иван Иванов',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '2',
            name: 'Петр Сидоров',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '3',
            name: 'Николай Никонов',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '4',
            name: 'Михаил Михич',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '5',
            name: 'Петр Петрович',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '6',
            name: 'Анна Акимова',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '7',
            name: 'Катерина Котова',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '8',
            name: 'Артем Артемьев',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        }
    ]
}),
    Map ({
        id: '3',
        name: '2',
        courseId: '1',
        startDate: null,
        students: [
        {
            id: '1',
            name: '2 Евгений Богдан',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '2',
            name: 'Дмитрий Савицкий',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '3',
            name: 'Александра Кош',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '4',
            name: 'Кирилл Долгий',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '5',
            name: 'Денис Мельник',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '6',
            name: 'Максим Кук',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '7',
            name: 'Артем Ким',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '8',
            name: 'Артем Федоров',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        },
        {
            id: '9',
            name: 'Дмитрий Принт',
            avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
            screenshots: [
                {
                    taskId: '1',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                },
                {
                    taskId: '2',
                    src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png',
                    date: null
                }
            ]
        }
    ]
})])
;

export const groups = (state = initialGroupState, action) => {
    switch (action.type) {


        default:
            return state
    }
};