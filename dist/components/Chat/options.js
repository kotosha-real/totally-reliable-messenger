export const options = {
    chats: [
        {
            active: true,
            peer: {
                avatar: 'https://via.placeholder.com/150',
                name: 'Johnny',
                online: false,
                lastOnline: '15 minutes later'
            },
            lastMessage: {
                message: 'Oh, hi Mark!',
                date: '12:34'
            },
            unread: 0
        },
        {
            active: false,
            peer: {
                avatar: 'https://via.placeholder.com/150',
                name: 'Lisa',
                online: false,
                lastOnline: '15 minutes later'
            },
            lastMessage: {
                message: 'Mark, Johnny is not home...',
                date: '12:33'
            },
            unread: 1
        },
        {
            active: false,
            peer: {
                avatar: 'https://via.placeholder.com/150',
                name: 'Deni',
                online: false,
                lastOnline: '15 minutes later'
            },
            lastMessage: {
                message: 'Wanna play some footbal?',
                date: '12:32'
            },
            unread: 99
        }
    ],
    activeChat: {
        peer: {
            avatar: 'https://via.placeholder.com/150',
            name: 'Johnny',
            online: false,
            lastOnline: '15 minutes later'
        },
        messages: [
            {
                received: true,
                message: 'Oh, hi Mark!',
                date: '12:34'
            }
        ]
    },
    message: {
        title: 'Message',
        value: '',
        type: 'text',
        placeholder: 'Write your message here',
        validation: {
            type: 'pattern',
            value: /\S+/
        }
    }
};
