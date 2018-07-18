/**
 * Created by Eugenia on 16.07.2018.
 */
import * as types from "./groupActionTypes";

const initialState = {
    group1: {
            id: '1',
            name: 'KMB 1',
            students: [
                {
                    id: '1',
                    name: 'Евгения Король',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
                    screenshots: [
                        {
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
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
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
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
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                }
            ]
        },
    group2: {
            id: '2',
            name: 'JS 3',
            students: [
                {
                    id: '1',
                    name: 'Иван Иванов',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-business-bear.png',
                    screenshots: [
                        {
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                }
            ]
        },
    group3: {
            id: '3',
            name: 'C++ 3',
            students: [
                {
                    id: '1',
                    name: 'Евгений Богдан',
                    avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-space-astronaut.png',
                    screenshots: [
                        {
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
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
                            taskId: '1',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        },
                        {
                            taskId: '2',
                            src: 'https://blog.mozilla.org/wp-content/uploads/2017/09/screenshots-onboarding-231-1400x720.png'
                        }
                    ]
                }
            ]
        }
};

export const groups = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_GROUP:
            return {

            };
        default:
            return state
    }
};