export const driveData = {
    id: '1',
    name: 'My Documents',
    foldersCount: 1,
    filesCount: 3,
    folders: [{
        id: '2',
        name: 'Training',
        foldersCount: 1,
        filesCount: 0,
        folders: [
            {
                id: '3',
                name: 'New hire onboarding',
                foldersCount: 3,
                filesCount: 4,
                folders: [
                    {
                        name: 'Day 1',
                        foldersCount: 0,
                        filesCount: 6,
                        folders: [],
                        files: [
                            { name: 'Registration form', type: 'pdf' },
                            { name: 'About toddle', type: 'ppt' },
                            { name: 'To-do list', type: 'doc' },
                            { name: 'Registration form', type: 'pdf' },
                            { name: 'About toddle', type: 'ppt' },
                            { name: 'To-do list', type: 'doc' }
                        ]
                    },
                    {
                        id: '4',
                        name: 'Day 2',
                        foldersCount: 0,
                        filesCount: 3,
                        folders: [],
                        files: [
                            { name: 'Registration form', type: 'pdf' },
                            { name: 'About toddle', type: 'ppt' },
                            { name: 'To-do list', type: 'doc' }
                        ]
                    },
                    {
                        id: '5',
                        name: 'Day 3',
                        foldersCount: 0,
                        folders: [],
                        filesCount: 2,
                        files: [
                            { name: 'Registration form', type: 'pdf' },
                            { name: 'About toddle', type: 'ppt' },
                        ]
                    }
                ],
                files: [
                    { name: 'Registration form', type: 'pdf' },
                    { name: 'About toddle', type: 'ppt' },
                    { name: 'To-do list', type: 'doc' },
                    { name: 'Registration form', type: 'pdf' }
                ]
            }
        ],
        files: []
    }],
    files: [
        { name: 'Registration form', type: 'pdf' },
        { name: 'About toddle', type: 'ppt' },
        { name: 'To-do list', type: 'doc' }
    ]
}
